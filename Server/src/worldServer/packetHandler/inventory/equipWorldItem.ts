import { GIANTSTEP } from "../../../proto/worldServer/jsonProto";
import { CONNECTION_STATE, User } from "../../user";
import glog from "../../../commonlib/glog";
import Container from "typedi";
import { GError, GErrorCode } from "../../../commonlib/gerror";
import { DBConnPool } from "../../../mysqllib/pool";
import _ from "lodash";
import spEquipmentSlotUpdate, {
  EquipmentSlotsUpdateParam,
} from "../../../mysqllib/sp/user/item/spEquipmentSlotUpdate";
import { castToEquippableItem } from "../../item/equipment";
import { ItemBase } from "../../item/itemBase";
import { ItemCmsId, ItemDbGuid } from "../../typedef";
import { EquipItemInfo, EquipSlot } from "../../userCharacter";
import { WorldManager } from "../../world/worldManager";
import { EEquipSlot } from "../../../cms/cmsEnum";
import { World } from "../../world/world";

export = (user: User, request: any): Promise<boolean> => {
  const reqBody: any = request.toJSON();
  glog.debug("CQ_EquipItem:", reqBody);
  const cqEquipItem: GIANTSTEP.WS.Protocol.CQ_EquipItem = request;

  const userDbId: number = user.getUserId();

  const connState = user.getConnState();

  // TODO: ConnectionState를 모든 패킷핸들러에서 체크 안해도 되도록 예외처리 추가.
  if (connState !== CONNECTION_STATE.LOGGED_IN) {
    throw new GError("not logged in", GErrorCode.INVALID_REQ_BODY_PARAMETER, {
      userDbId,
    });
  }

  const itemDbGuid = cqEquipItem.itemDbGuid;
  const userWorldInventory = user.userInventory.worldInventory;
  const userCharacter = user.userCharacter;

  if (!itemDbGuid) {
    throw new GError(
      "invalid ItemDbGuid",
      GErrorCode.INVALID_REQ_BODY_PARAMETER,
      {
        itemDbGuid,
      }
    );
  }

  const itemToEquip: ItemBase = userWorldInventory.getItemByGuid(itemDbGuid);

  if (!itemToEquip) {
    throw new GError(
      `[CQ_EquipItem] itemGuid: ${itemDbGuid} does not exist in user[${userDbId}]'s world inventory.`,
      GErrorCode.INVALID_REQ_BODY_PARAMETER,
      {
        userDbId,
        itemDbGuid,
      }
    );
  }

  const itemCmsId: ItemCmsId = itemToEquip.getItemCmsId();
  const equipItem = castToEquippableItem(itemToEquip);

  if (!equipItem) {
    throw new GError(
      `[CQ_EquipItem] cmsId: ${itemDbGuid} is not equippable item.`,
      GErrorCode.INVALID_REQ_BODY_PARAMETER,
      {
        userDbId,
        itemDbGuid,
        itemCmsId,
      }
    );
  }

  if (!equipItem.isEquippable()) {
    throw new GError(
      `[CQ_EquipItem] cmsId: ${itemDbGuid} is not in equippable state`,
      GErrorCode.INVALID_REQ_BODY_PARAMETER,
      {
        userDbId,
        itemDbGuid,
        itemCmsId,
      }
    );
  }

  const equipSlotId = equipItem.getEquipSlotId();

  return (
    Promise.resolve()
      // DB 업데이트
      .then(() => {
        const userDbPool = Container.of("user").get(DBConnPool);
        let param: EquipmentSlotsUpdateParam = {
          userDbId: userDbId,
          equipSlotId: equipSlotId,
          itemDbGuid: itemDbGuid,
          itemCmsId: itemCmsId,
        };
        return spEquipmentSlotUpdate(userDbPool.getPool(), param);
      })
      // 장착이 적용/해제 된 아이템 상태 변경.
      .then(() => {
        let { itemDbGuid, itemCmsId }: EquipSlot =
          userCharacter.getEquipmentBySlotId(equipSlotId);

        if (itemDbGuid) {
          let itemToUnequip: ItemBase =
            userWorldInventory.getItemByGuid(itemDbGuid);
          let unequipItem = castToEquippableItem(itemToUnequip);

          if (!unequipItem) {
            throw new GError(
              `[CQ_EquipItem] cmsId: ${itemDbGuid} is not in equippable item`,
              GErrorCode.ITEM_PROPERTY_NOT_CONSISTENT,
              {
                userDbId: unequipItem.getOwner(),
                itemDbGUid: unequipItem.getItemDbGuid(),
                itemCmsId: unequipItem.getItemCmsId(),
              }
            );
          }
          unequipItem.onUnequipped();
        }
        equipItem.onEquipped();
        return itemDbGuid;
      })
      // UserCharacter 장착 정보 업데이트.
      .then((unequipItemDbGuid: ItemDbGuid) => {
        const equipInfo: EquipItemInfo = {
          itemDbGuid: equipItem.getItemDbGuid(),
          itemCmsId: equipItem.getItemCmsId(),
        };
        userCharacter.setEquipment(EEquipSlot.Tool, equipInfo);
        return unequipItemDbGuid;
      })
      // 응답 전달 및 브로드캐스트
      .then((unequipItemDbGuid: ItemDbGuid) => {
        let packet = GIANTSTEP.WS.Protocol.SA_EquipItem.create();

        packet.EquippedItemDbGuid = equipItem.getItemDbGuid();
        packet.UnequippedItemDbGuid = unequipItemDbGuid;

        user.sendProtobufPacket(
          GIANTSTEP.WS.Protocol.PacketType.WS_SA_EquipItem,
          packet
        );

        // TODO: 브로드캐스트 메세지
        const worldMgr = Container.get(WorldManager);
        const worldId = user.getWorldId();

        if (!worldId) {
          throw new GError(
            "invalid worldId",
            GErrorCode.INVALID_REQ_BODY_PARAMETER,
            {
              worldId,
            }
          );
        }

        const world: World = worldMgr.getWorld(worldId);

        const broadcastMsg =
          GIANTSTEP.WS.Protocol.SN_EquipSlotUpdateBroadcast.create();

        broadcastMsg.userId = userDbId;
        for (const equipInfo of userCharacter.getEquipmentList()) {
          const equipItem: GIANTSTEP.WS.Protocol.EquipmentSlot =
            GIANTSTEP.WS.Protocol.EquipmentSlot.create();
          equipItem.itemCmsId = equipInfo.itemCmsId;
          broadcastMsg.equipmentSlotList.push(equipItem);
        }

        world.broadcastToOthers(
          userDbId,
          GIANTSTEP.WS.Protocol.PacketType.WS_SN_EquipSlotUpdateBroadcast,
          broadcastMsg
        );
        return true;
      })
  );
};
