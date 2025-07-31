import { User } from "../user";
import glog from "../../commonlib/glog";
import { EWorldType } from "./worldManager";
import { DISCONNECT_REASON } from "../../commonlib/genum";
import { EWorldState } from "../../worldMgrServer/managers/worldManager";
import Container from "typedi";
import { GIANTSTEP } from "../../proto/worldServer/jsonProto";
import { WS2CProtocol } from "../../proto/worldServer/WS2CProtocol";
import { EMPTY_WORLD_TIMEOUT } from "../const";
import { DBConnPool } from "../../mysqllib/pool";
import spWorldObjectInsert from "../../mysqllib/sp/world/spWorldObjectInsert";
import { FieldObject } from "./object/fieldObject";
import { TileObject } from "./object/tileObject";
import { ItemObject } from "./object/itemObject";
import { GErrorCode } from "../../commonlib/gerrorCode";
import spWorldObjectDelete from "../../mysqllib/sp/world/spWorldObjectDelete";
import spWorldObjectLoad from "../../mysqllib/sp/world/spWorldObjectLoad";
import spWorldObjectUpdate from "../../mysqllib/sp/world/spWorldObjectUpdate";
import { Vector3D } from "../../commonlib/vector";
import { GError } from "../../commonlib/gerror";
import { ItemCmsId, ItemDbGuid } from "../typedef";
import { ItemInfo } from "../../cms/itemInfo";
import { EItemType } from "../../cms/cmsEnum";
import cms, { CmsTable } from "../../cms";
import { AddItemResult, AddItemTemplate } from "../inventory/IInventory";

const SET_FIELD_OBJECT_COUNT = 1;

export class WorldOption {
  public worldType: EWorldType = EWorldType.PERSONAL_WORLD;
}

export abstract class World {
  public readonly worldDbId: number;
  public readonly state: EWorldState;
  protected worldType: EWorldType;
  public users = new Map<number, User>();
  private monitorHandle: NodeJS.Timeout;

  private _markedForDelete: boolean = false;
  private _markedForDeleteTimer: NodeJS.Timeout;
  private _lastEmptyTime: number = Date.now();

  // TODO: 현재 접속자 수 로깅 필요.

  private static dropedItemId: number = 0;

  // 타일 맵 (x, y, layer의 tuple로 접근)
  private _tileMap = new Map<
    [x: number, y: number, layer: number],
    TileObject
  >();
  private _fieldObjectPositionMap = new Map<
    [x: number, y: number, layer: number],
    FieldObject
  >();
  // 필드 오브젝트 리스트
  private _fieldObjectList = new Map<number, FieldObject>();
  // 아이템 오브젝트 리스트
  private _itemObjectPositionMap = new Map<
    [x: number, y: number, layer: number],
    ItemObject
  >();
  private _itemObjectList = new Map<number, ItemObject>();

  constructor(worldDbId: number, worldType: EWorldType) {
    this.worldDbId = worldDbId;
    this.worldType = worldType;
  }

  protected abstract onCreateInternal(option: WorldOption);

  static getDropedItemGuid(): number {
    return World.dropedItemId++;
  }

  // 최대 인원 수 설정 / 틱함수 및 인터벌 실행 (룸마다 다 다르게 구현될 에정.)
  onCreate(options: any): void | Promise<boolean> {
    glog.warn("[WARNING] onCreate() is not implemented.");

    // load process
    this.loadTileInfos();
    this.loadFieldObjectInfos();
    this.enableMarkedForDelete();
    // this.enableMonitoring();

    return this.onCreateInternal(options);
  }

  // World Lifetime Interface
  protected abstract _onDestroy?(): void | Promise<any>;

  // User Access/Exit Interface
  protected abstract _onJoin?(user: User): void | Promise<any>;
  protected abstract _onLeave?(
    user: User,
    reason?: number
  ): void | Promise<any>;
  protected _onAuth(user: User, token: string): boolean {
    return true;
  }

  disconnectUser(user: User, disconnectReason: DISCONNECT_REASON): void {
    user.disconnect(disconnectReason);
  }

  getUserById(userId: number): User | undefined {
    return this.users.get(userId);
  }

  removeUser(userId: number): void {
    const user = this.users.get(userId);
    if (user != null) {
      this.onLeave(user);
      this.users.delete(userId);
    }
  }

  enableMonitoring() {
    this.monitorHandle = setInterval(() => {
      type ConnectedUser = [userId: number, userName: string];
      let connectedUsers: ConnectedUser[] = [];
      for (const [userId, user] of this.users) {
        connectedUsers.push([userId, user.getAccountId()]);
      }

      glog.debug("World Status: ", {
        WorldDbId: this.worldDbId,
        UserCount: this.users.size,
        ConnectedUser: connectedUsers,
      });
    }, 1000);
  }

  disableMonitoring() {
    clearInterval(this.monitorHandle);
  }

  isMarkedForDelete(): boolean {
    return this._markedForDelete;
  }

  enableMarkedForDelete() {
    this._markedForDeleteTimer = setTimeout(() => {
      glog.info(`World [ ${this.worldDbId} ] is marked for deletion.`);
      this._markedForDelete = true;
    }, EMPTY_WORLD_TIMEOUT);
  }

  getUserCount(): number {
    return this.users.size;
  }

  isUserEmpty() {
    return this.users.size < 1;
  }

  disableMarkedForDelete() {
    clearTimeout(this._markedForDeleteTimer);
    this._markedForDeleteTimer = null;
    this._markedForDelete = false;
  }

  async onJoin(user: User): Promise<boolean> {
    if (this._markedForDeleteTimer) {
      this.disableMarkedForDelete();
    }

    const existingUser = this.users.get(user.getUserId());
    if (existingUser) {
      glog.info(
        "User is already logged in. Please Leave the world before joining world."
      );
      return false;
    }

    let isAuthorized: boolean = this._onAuth(user, user.getSessionId());
    if (!isAuthorized) {
      glog.info("unauthorized access to world.", { User: user.getUserId() });
      return false;
    }

    if (this._onJoin) {
      await this._onJoin(user);
    }

    this.users.set(user.getUserId(), user);
    glog.debug("User Joined the World.", {
      worldDbId: this.worldDbId,
      user: user.getAccountId(),
    });

    // send world info to join user
    const packet = GIANTSTEP.WS.Protocol.SA_WorldInfo.create();
    packet.worldDbId = this.worldDbId;
    // make tile info to protocol
    this._tileMap.forEach(function (elem) {
      packet.tileList.push(elem.toEntity());
    });

    // make field object to protocol.
    this._fieldObjectList.forEach(function (elem) {
      packet.fieldObjectList.push(elem.toEntity());
    });

    // make item object to protocol.
    this._itemObjectList.forEach(function (elem) {
      packet.itemObjectList.push(elem.toEntity());
    });

    user.sendProtobufPacket(
      GIANTSTEP.WS.Protocol.PacketType.WS_SA_WorldInfo,
      packet
    );
    return true;
  }

  async onLeave(user: User | null) {
    if (user == null) {
      return;
    }

    glog.debug("User Left the World.", {
      worldDbId: this.worldDbId,
      user: user.getAccountId(),
    });
    if (this._onLeave) {
      this._onLeave(user);
    }
    this.users.delete(user.getUserId());

    user.setWorldId(-1);

    if (this.isUserEmpty()) {
      this.enableMarkedForDelete();
    }
  }

  async onDestroy() {
    // World-specific Logic or message to send to users.
    glog.info("Destroy World", { worldId: this.worldDbId });

    this.disableMonitoring();
    this.disableMarkedForDelete();

    if (this._onDestroy) {
      this._onDestroy();
    }
  }

  // World에 연결되어 있는 user 들에게 메세지를 모두 보내는 기능.
  // BroadcastOption을 통해 특정 그룹/ 특정 유저 지칭 할 수 있도록 함.
  broadcast(type: number, message: any) {
    for (const [_, user] of this.users) {
      user.sendProtobufPacket(type, message);
    }
  }

  broadcastToOthers(
    userId: number,
    // seqNum: number,
    type: number,
    message: any
  ) {
    for (const [_, user] of this.users) {
      if (user.getUserId() !== userId) {
        user.sendProtobufPacket(
          // seqNum,
          type,
          message
        );
      }
    }
  }

  sendWorldInfoToUser(user: User): void {
    const packet = WS2CProtocol.Message.WorldInfoNoti.create();
    packet.worldDbId = this.worldDbId;
    // make tile info to protocol
    this._tileMap.forEach(function (elem) {
      packet.tileList.push(elem.toEntity());
    });

    // make field object to protocol.
    this._fieldObjectList.forEach(function (elem) {
      packet.fieldObjectList.push(elem.toEntity());
    });

    user.sendProtobufPacket(WS2CProtocol.PacketType.WorldInfoNoti, packet);
  }

  getFieldObjectEntityList(): GIANTSTEP.WS.Protocol.FieldObjectEntity[] {
    let fieldObjectList = [];
    this._fieldObjectList.forEach(function (elem) {
      fieldObjectList.push(elem.toEntity());
    });
    return fieldObjectList;
  }

  getItemObjectList(): GIANTSTEP.WS.Protocol.ItemObjectEntity[] {
    let itemObjectList = [];
    this._itemObjectList.forEach(function (elem) {
      itemObjectList.push(elem.toEntity());
    });
    return itemObjectList;
  }

  async loadTileInfos(): Promise<GErrorCode> {
    if (this._tileMap.size > 0) {
      this._tileMap.clear();
    }

    return GErrorCode.OK;
  }

  async loadFieldObjectInfos(): Promise<GErrorCode> {
    // ToDo: 이미 로드 된 fieldObject가 있으면 clear하고 다시 등록한다 (임시)
    // 추후에 이런 경우 오류 처리를 어떻게 할지 고민 필요

    if (this._fieldObjectList.size > 0) {
      this._fieldObjectList.clear();
    }

    const dbConnPool = Container.of("user").get(DBConnPool);
    return spWorldObjectLoad(dbConnPool.getPool(), this.worldDbId)
      .then((result) => {
        if (result == null) {
          // field object is empty
          return GErrorCode.OK;
        }

        for (const row of result) {
          const newObject = new FieldObject(
            row.objectDbId,
            this.worldDbId,
            row.ownerDbId,
            row.cmsId,
            Vector3D.createFrom(row.xPos, row.yPos, row.layer, row.dir)
          );

          let tile = this.getTile(row.xPos, row.yPos, row.layer);
          if (tile == null) {
            glog.error(
              `Object allocate invalid tile. DbId:${row.objectDbId}, Position:(${row.xPos},${row.yPos},${row.layer})`
            );
            // todo: 아직은 타일 정보가 로드되지 않기 때문에 타일 정보가 로드되면 해당 좌표의 타일 정보를 확인하는 과정이 필요
            // continue;
          }

          if (
            this._fieldObjectPositionMap.has([row.xPos, row.yPos, row.layer])
          ) {
            glog.error(
              "Already has field object same position. ${row.objectDbId}"
            );
            continue;
          }

          this._fieldObjectPositionMap.set(
            [row.xPos, row.yPos, row.layer],
            newObject
          );
          this._fieldObjectList.set(newObject.objectDbId, newObject);
        }

        return GErrorCode.OK;
      })
      .catch((error: Error) => {
        glog.error("Failed load field object list from DB", {
          errorMsg: error.message,
          errorStack: error.stack,
        });

        return GErrorCode.FIELD_OBJECT_LOAD_FAILED_BY_DB;
      });
  }

  getTile(x: number, y: number, layer: number): TileObject | undefined {
    const tileObject = this._tileMap.get([x, y, layer]);
    return tileObject;
  }

  async setFieldObject(
    user: User,
    itemCmsId: ItemCmsId,
    itemDbId: ItemDbGuid,
    posX: number,
    posY: number,
    layer: number,
    dir: number
  ): Promise<GErrorCode> {
    const sourceItem =
      user.userInventory.worldInventory.getItemByGuid(itemDbId);
    if (sourceItem == null) {
      glog.error("Failed to set field object - invalid item.", {
        ItemDbId: itemDbId,
      });
      return GErrorCode.FIELD_OBJECT_SET_FAILED_INVALID_ITEM;
    }

    const itemTable: CmsTable<ItemInfo> = cms.Tables.Item;
    const itemData = itemTable[sourceItem.getItemCmsId()];
    if (itemData == null) {
      return GErrorCode.FIELD_OBJECT_UPDATE_FAILED;
    }

    const ret = this.canSetFieldItem(itemData, posX, posY, layer);
    if (ret !== GErrorCode.OK) {
      return ret;
    }

    const removeItemResult =
      user.userInventory.worldInventory.validateRemoveItem(itemDbId);
    if (removeItemResult !== GErrorCode.OK) {
      glog.error("Failed to set field object - remove item fault.", {
        ItemDbId: itemDbId,
      });
      return GErrorCode.FIELD_OBJECT_SET_FAILED_REMOVE_ITEM_FAIL;
    }

    const dbConnPool = Container.of("user").get(DBConnPool);

    return spWorldObjectInsert(
      dbConnPool.getPool(),
      this.worldDbId,
      itemCmsId,
      itemDbId,
      user.getUserId(),
      posX,
      posY,
      layer,
      dir
    )
      .then((result) => {
        const generatedDbId = result;
        const newObject = new FieldObject(
          generatedDbId,
          this.worldDbId,
          user.getUserId(),
          itemCmsId,
          Vector3D.createFrom(posX, posY, layer, dir)
        );

        this._fieldObjectPositionMap.set([posX, posY, layer], newObject);
        this._fieldObjectList.set(generatedDbId, newObject);

        return newObject;
      })
      .then((newObject: FieldObject) => {
        return user.userInventory.worldInventory
          .removeItem(sourceItem.getItemDbGuid())
          .then(() => {
            // SN_SetFieldObject 브로드캐스팅.

            const packet = GIANTSTEP.WS.Protocol.SN_SetFieldObject.create();
            packet.userId = user.getUserId();
            packet.objectData = newObject.toEntity();
            this.broadcast(
              GIANTSTEP.WS.Protocol.PacketType.WS_SN_SetFieldObject,
              packet
            );

            // SA_SetFieldObject 응답.
            const res = GIANTSTEP.WS.Protocol.SA_SetFieldObject.create();
            res.errorCode = GErrorCode.OK;
            res.objectData = newObject.toEntity();

            res.setObjectItem = GIANTSTEP.WS.Protocol.WorldItem.create();
            res.setObjectItem.item = GIANTSTEP.WS.Protocol.ItemEntity.create();
            res.setObjectItem.item.count = SET_FIELD_OBJECT_COUNT;
            res.setObjectItem.item.itemCmsId = sourceItem.getItemCmsId();
            res.setObjectItem.item.itemDbGuid = sourceItem.getItemDbGuid();

            user.sendProtobufPacket(
              GIANTSTEP.WS.Protocol.PacketType.WS_SA_SetFieldObject,
              res
            );

            glog.info("Set allocated field object in world.", {
              userId: user.getUserId(),
              data: newObject.toLog(),
            });
            return GErrorCode.OK;
          });
      })
      .catch((error: Error) => {
        glog.error("Failed set field object to DB", {
          userId: user.getUserId(),
          cmsId: itemCmsId,
          itemDbId: itemDbId,
          posX: posX,
          posY: posY,
          layer: layer,
          dir: dir,
          errorMsg: error.message,
          errorStack: error.stack,
        });
        // user.sendProtobufPacket()
        return GErrorCode.FIELD_OBJECT_SET_FAILED_BY_DB;
      });
  }

  async setFieldObject_Refactor(
    user: User,
    itemCmsId: ItemCmsId,
    itemDbId: ItemDbGuid,
    posX: number,
    posY: number,
    layer: number,
    dir: number
  ): Promise<GErrorCode> {
    try {
      const sourceItem =
        user.userInventory.worldInventory.getItemByGuid(itemDbId);
      if (sourceItem == null) {
        glog.error("Failed to set field object - invalid item.", {
          ItemDbId: itemDbId,
        });
        return GErrorCode.FIELD_OBJECT_SET_FAILED_INVALID_ITEM;
      }

      const itemTable: CmsTable<ItemInfo> = cms.Tables.Item;
      const itemData = itemTable[sourceItem.getItemCmsId()];
      if (itemData == null) {
        return GErrorCode.FIELD_OBJECT_UPDATE_FAILED;
      }

      const ret = this.canSetFieldItem(itemData, posX, posY, layer);
      if (ret !== GErrorCode.OK) {
        return ret;
      }

      const removeItemResult =
        user.userInventory.worldInventory.validateRemoveItem(itemDbId);
      if (removeItemResult !== GErrorCode.OK) {
        glog.error("Failed to set field object - remove item fault.", {
          ItemDbId: itemDbId,
        });
        return GErrorCode.FIELD_OBJECT_SET_FAILED_REMOVE_ITEM_FAIL;
      }

      const dbConnPool = Container.of("user").get(DBConnPool);

      const generatedDbId = await spWorldObjectInsert(
        dbConnPool.getPool(),
        this.worldDbId,
        itemCmsId,
        itemDbId,
        user.getUserId(),
        posX,
        posY,
        layer,
        dir
      );

      const newObject = new FieldObject(
        generatedDbId,
        this.worldDbId,
        user.getUserId(),
        itemCmsId,
        Vector3D.createFrom(posX, posY, layer, dir)
      );

      this._fieldObjectPositionMap.set([posX, posY, layer], newObject);
      this._fieldObjectList.set(generatedDbId, newObject);

      const packet = GIANTSTEP.WS.Protocol.SN_SetFieldObject.create();
      packet.userId = user.getUserId();
      packet.objectData = newObject.toEntity();
      this.broadcast(
        GIANTSTEP.WS.Protocol.PacketType.WS_SN_SetFieldObject,
        packet
      );

      const res = GIANTSTEP.WS.Protocol.SA_SetFieldObject.create();
      res.errorCode = GErrorCode.OK;
      res.objectData = newObject.toEntity();

      await user.userInventory.worldInventory.removeItem(
        sourceItem.getItemDbGuid()
      );

      res.setObjectItem = GIANTSTEP.WS.Protocol.WorldItem.create();
      res.setObjectItem.item = GIANTSTEP.WS.Protocol.ItemEntity.create();
      res.setObjectItem.item.count = sourceItem.getCount();
      res.setObjectItem.item.itemCmsId = sourceItem.getItemCmsId();
      res.setObjectItem.item.itemDbGuid = sourceItem.getItemDbGuid();

      user.sendProtobufPacket(
        GIANTSTEP.WS.Protocol.PacketType.WS_SA_SetFieldObject,
        res
      );

      glog.info("Set allocated field object in world.", {
        userId: user.getUserId(),
        data: newObject.toLog(),
      });

      return GErrorCode.OK;
    } catch (error) {
      glog.error("Failed set field object to DB", {
        userId: user.getUserId(),
        cmsId: itemCmsId,
        itemDbId: itemDbId,
        posX: posX,
        posY: posY,
        layer: layer,
        dir: dir,
        errorMsg: error.message,
        errorStack: error.stack,
      });
      return GErrorCode.FIELD_OBJECT_SET_FAILED_BY_DB;
    }
  }

  async removeFieldObject(
    user: User,
    objectDbId: number,
    isEditorMode: boolean
  ): Promise<GErrorCode> {
    let object = this._fieldObjectList.get(objectDbId);
    if (object == null) {
      return GErrorCode.FIELD_OBJECT_REMOVE_FAILED_INVALID_OBJECT;
    }

    // check removable object condition
    const ret = this.canRemoveFieldItem(user, object);
    if (ret !== GErrorCode.OK) {
      return ret;
    }

    let removedFieldObjectItem: AddItemTemplate = {
      itemCmsId: object.cmsId,
      count: 1,
    };

    const worldInventoryCheck: GErrorCode =
      user.userInventory.worldInventory.validateAddItem(removedFieldObjectItem);

    if (worldInventoryCheck !== GErrorCode.OK) {
      glog.error("Failed to remove field item object - add item fault.", {
        objectDbId: objectDbId,
        itemCmsId: object.cmsId,
        errorCode: GErrorCode[worldInventoryCheck],
      });
      return worldInventoryCheck;
    }

    // todo: removed item move to inventory
    const dbConnPool = Container.of("user").get(DBConnPool);
    return spWorldObjectDelete(dbConnPool.getPool(), objectDbId)
      .then(() => {
        return user.userInventory.worldInventory.addItem(
          removedFieldObjectItem
        );
      })
      .then((result: AddItemResult) => {
        this._fieldObjectPositionMap.delete([
          object.position.x,
          object.position.y,
          object.position.z,
        ]);
        this._fieldObjectList.delete(objectDbId);
        const packet = GIANTSTEP.WS.Protocol.SN_RemoveFieldObject.create();

        packet.userId = user.getUserId();
        packet.objectId = objectDbId;
        packet.isEditorMode = isEditorMode;
        this.broadcast(
          GIANTSTEP.WS.Protocol.PacketType.WS_SN_RemoveFieldObject,
          packet
        );

        const retrievedObjectItem =
          user.userInventory.worldInventory.getItemByGuid(result.addItemDbGuid);
        const worldItemInfo = retrievedObjectItem.toMessage();

        const res = GIANTSTEP.WS.Protocol.SA_RemoveFieldObject.create();
        res.objectId = objectDbId;
        res.errorCode = GErrorCode.OK;
        res.isEditorMode = isEditorMode;
        res.removedObjectItem = worldItemInfo;
        // 항상 상호작용의 델타값 전송.
        res.removedObjectItem.item.count = SET_FIELD_OBJECT_COUNT;

        user.sendProtobufPacket(
          GIANTSTEP.WS.Protocol.PacketType.WS_SA_RemoveFieldObject,
          res
        );

        glog.info("Remove allocated field object in world.", {
          userId: user.getUserId(),
          data: object?.toLog(),
        });

        return GErrorCode.OK;
      })
      .catch((error: Error) => {
        glog.error("Failed delete field object to DB", {
          userId: user.getUserId(),
          data: object?.toLog(),
          errorMsg: error.message,
          errorStack: error.stack,
        });

        // user.sendProtobufPacket()
        return GErrorCode.FIELD_OBJECT_REMOVE_FAILED_BY_DB;
      });
  }

  async updateFieldObject(
    user: User,
    objectDbId: number,
    posX: number,
    posY: number,
    layer: number,
    dir: number
  ): Promise<GErrorCode> {
    const object = this._fieldObjectList.get(objectDbId);
    if (object == null) {
      return GErrorCode.FIELD_OBJECT_UPDATE_FAILED_INVALID_OBJECT;
    }

    const itemTable: CmsTable<ItemInfo> = cms.Tables.Item;
    const itemData = itemTable[object.cmsId];
    if (itemData == null) {
      return GErrorCode.FIELD_OBJECT_UPDATE_FAILED;
    }

    const oldPosition = object.position;
    const ret = this.canSetFieldItem(itemData, posX, posY, layer);
    if (ret !== GErrorCode.OK) {
      return ret;
    }

    const dbConnPool = Container.of("user").get(DBConnPool);
    return spWorldObjectUpdate(
      dbConnPool.getPool(),
      objectDbId,
      posX,
      posY,
      layer,
      dir
    )
      .then((result) => {
        object.position.update(posX, posY, layer, dir);
        this._fieldObjectPositionMap.delete([
          oldPosition.x,
          oldPosition.y,
          oldPosition.z,
        ]);
        this._fieldObjectPositionMap.set([posX, posY, layer], object);
        const packet = GIANTSTEP.WS.Protocol.SN_UpdateFieldObject.create();
        packet.userId = user.getUserId();
        packet.objectData = object.toEntity();
        this.broadcast(
          GIANTSTEP.WS.Protocol.PacketType.WS_SN_UpdateFieldObject,
          packet
        );

        const res = GIANTSTEP.WS.Protocol.SA_UpdateFieldObject.create();
        res.errorCode = GErrorCode.OK;
        res.objectData = object.toEntity();
        user.sendProtobufPacket(
          GIANTSTEP.WS.Protocol.PacketType.WS_SA_UpdateFieldObject,
          res
        );

        glog.info("Update field object in world.", {
          userId: user.getUserId(),
          data: object.toLog(),
        });

        return GErrorCode.OK;
      })
      .catch((error: GError) => {
        glog.error("Failed update field object to DB", {
          userId: user.getUserId(),
          data: object.toLog(),
          errorMsg: error.message,
          errorStack: error.stack,
        });

        // user.sendProtobufPacket()
        return GErrorCode.FIELD_OBJECT_UPDATE_FAILED_BY_DB;
      });
  }

  async dropItemObject(
    user: User,
    itemDbGuid: number,
    itemAmount: number,
    posX: number,
    posY: number,
    layer: number
  ): Promise<GErrorCode> {
    const item = user.userInventory.worldInventory.getItemByGuid(itemDbGuid);
    if (item == null) {
      return GErrorCode.ITEM_OBJECT_DROP_FAILED_INVALID_ITEM;
    }

    if (this._itemObjectPositionMap.get([posX, posY, layer]) != null) {
      return GErrorCode.ITEM_OBJECT_DROP_FAILED_CANT_DROP_POSITION;
    }

    const removeItemResult = await user.userInventory.worldInventory.removeItem(
      itemDbGuid,
      itemAmount
    );
    if (removeItemResult !== GErrorCode.OK) {
      glog.error("Failed to drop item object - remove item fault.", {
        ItemDbId: itemDbGuid,
      });
      return GErrorCode.ITEM_OBJECT_DROP_FAILED_REMOVE_ITEM;
    }

    const droppedItemGuid = World.getDropedItemGuid();
    const dropItemObject = new ItemObject(
      droppedItemGuid,
      itemAmount,
      item.getItemCmsId(),
      Vector3D.createFrom(posX, posY, layer)
    );
    if (dropItemObject == null) {
      return GErrorCode.ITME_OBJECT_DROP_FAILED_CREATE_OBJECT;
    }

    this._itemObjectList.set(droppedItemGuid, dropItemObject);
    this._itemObjectPositionMap.set([posX, posY, layer], dropItemObject);

    const packet = GIANTSTEP.WS.Protocol.SN_DropItemObject.create();
    packet.userId = user.getUserId();
    packet.itemObject = GIANTSTEP.WS.Protocol.ItemObjectEntity.create();
    packet.itemObject.itemObjectGuid = droppedItemGuid;
    packet.itemObject.itemAmount = itemAmount;
    packet.itemObject.itemCmsId = item.getItemCmsId();
    packet.itemObject.posX = posX;
    packet.itemObject.posY = posY;
    packet.itemObject.layer = layer;
    this.broadcast(
      GIANTSTEP.WS.Protocol.PacketType.WS_SN_DropItemObject,
      packet
    );

    const res = GIANTSTEP.WS.Protocol.SA_DropItemObject.create();
    res.errorCode = GErrorCode.OK;

    res.droppedItem = GIANTSTEP.WS.Protocol.WorldItem.create();
    res.droppedItem.item = GIANTSTEP.WS.Protocol.ItemEntity.create();

    res.droppedItem.item.itemDbGuid = itemDbGuid;
    res.droppedItem.item.count = itemAmount;
    res.droppedItem.item.itemCmsId = item.getItemCmsId();

    user.sendProtobufPacket(
      GIANTSTEP.WS.Protocol.PacketType.WS_SA_DropItemObject,
      res
    );

    return GErrorCode.OK;
  }

  async takeItemObject(
    user: User,
    itemObjectGuid: number
  ): Promise<GErrorCode> {
    // Todo: 유저의 현재 위치와 아이템의 좌표를 비교해야 함 (현재는 유저의 좌표를 알 수 없음)
    const item = this._itemObjectList.get(itemObjectGuid);
    if (item == null) {
      return GErrorCode.ITEM_OBJECT_TAKE_FAILED_INVALID_ITEM;
    }

    // 유저의 현재 좌표와 아이템의 좌표를 비교해서 허용범위 이상 떨어져 있을 경우 오류
    const position = user.userState.getMoveState();
    const userPosition = Vector3D.createFrom(
      position.x,
      position.y,
      position.z
    );
    const dist = userPosition.distance(item.position);

    // TODO: 현재 블럭좌표랑 월드좌표를 비교하게 되어있음. 좌표계 통일 후 수정예정.
    if (dist > 10) {
      glog.error("Failed to take item object. item is not approachable", {});
      // return GErrorCode.ITEM_OBJECT_TAKE_FAILED_OVER_TAKE_DISTANCE;
    }

    // durability추가가 가능한가.
    let itemTemplate = { itemCmsId: item.cmsId, count: item.amount };
    const { errorCode, addItemDbGuid } =
      await user.userInventory.worldInventory.addItem(itemTemplate);
    if (errorCode !== GErrorCode.OK) {
      glog.error("Failed to take item object - add item fault.", {
        ItemDbId: addItemDbGuid,
        itemObjectGuid: itemObjectGuid,
        errorCode: GErrorCode[errorCode],
      });
      return errorCode;
    }

    this._itemObjectList.delete(itemObjectGuid);
    this._itemObjectPositionMap.delete([
      item.position.x,
      item.position.y,
      item.position.z,
    ]);

    const packet = GIANTSTEP.WS.Protocol.SN_TakeItemObject.create();
    packet.takenItemObjectGuid = itemObjectGuid;
    packet.userId = user.getUserId();
    this.broadcast(
      GIANTSTEP.WS.Protocol.PacketType.WS_SN_TakeItemObject,
      packet
    );

    const res = GIANTSTEP.WS.Protocol.SA_TakeItemObject.create();
    res.errorCode = GErrorCode.OK;

    res.takenItem = GIANTSTEP.WS.Protocol.WorldItem.create();
    res.takenItem.item = GIANTSTEP.WS.Protocol.ItemEntity.create();
    res.takenItem.item.itemDbGuid = addItemDbGuid;
    res.takenItem.item.count = item.amount;
    res.takenItem.item.itemCmsId = item.cmsId;

    user.sendProtobufPacket(
      GIANTSTEP.WS.Protocol.PacketType.WS_SA_TakeItemObject,
      res
    );

    return GErrorCode.OK;
  }

  private canSetFieldItem(
    sourceItem: ItemInfo,
    posX: number,
    posY: number,
    layer: number
  ): GErrorCode {
    // check can locate field object item status.
    //  - item type
    //  - authority
    //  - field condition

    if (
      sourceItem.Type != EItemType.WorldObj &&
      sourceItem.Type != EItemType.NormalObj
    ) {
      glog.error("Failed to set field - item is not WorldObj or NormalObj", {
        PosX: posX,
        PosY: posY,
        Layer: layer,
      });
      return GErrorCode.FIELD_OBJECT_SET_FAILED;
    }

    if (this._fieldObjectPositionMap.has([posX, posY, layer])) {
      glog.error("Failed to set field object - Already allocated position.", {
        PosX: posX,
        PosY: posY,
        Layer: layer,
      });
      return GErrorCode.FIELD_OBJECT_SET_FAILED_ALREADY_ALLOCATED_POSITION;
    }

    // 설치할 때 설치된 타일 기준으로 오브젝트가 점유하는 공간을 계산한다.

    // TODO: 타일 정보가 아직 없기 때문에 우선은 타일이 없어도 성공으로 보낸다.
    if (this.getTile(posX, posY, layer) == null) {
      glog.info("Failed to set field object - Invalid tile.", {
        PosX: posX,
        PosY: posY,
        Layer: layer,
      });
      return GErrorCode.OK;
    }

    return GErrorCode.OK;
  }

  private canRemoveFieldItem(user: User, fieldObject: FieldObject): GErrorCode {
    return GErrorCode.OK;
  }
}
