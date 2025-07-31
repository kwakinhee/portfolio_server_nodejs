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
import { EquipItemInfo } from "../../userCharacter";
import { WorldManager } from "../../world/worldManager";
import { World } from "../../world/world";

export = (user: User, request: any): Promise<boolean> => {
  const reqBody: any = request.toJSON();
  glog.debug("CQ_UnequipItem:", reqBody);
  const cqUnequipItem: GIANTSTEP.WS.Protocol.CQ_UnequipItem = request;

  const userDbId: number = user.getUserId();
  const connState = user.getConnState();

  // TODO: ConnectionState를 모든 패킷핸들러에서 체크 안해도 되도록 예외처리 추가.
  if (connState !== CONNECTION_STATE.LOGGED_IN) {
    throw new GError("not logged in", GErrorCode.INVALID_REQ_BODY_PARAMETER, {
      userDbId,
    });
  }

  const itemDbGuid = cqUnequipItem.itemDbGuid;
  const userWorldInventory = user.userInventory.worldInventory;
  const userCharacter = user.userCharacter;

  if (!itemDbGuid) {
    throw new GError(
      "[CQ_UnequipItem] invalid ItemDbGuid",
      GErrorCode.INVALID_REQ_BODY_PARAMETER,
      {
        itemDbGuid,
      }
    );
  }

  const itemToUnequip: ItemBase = userWorldInventory.getItemByGuid(itemDbGuid);

  if (!itemToUnequip) {
    throw new GError(
      `[CQ_UnequipItem] itemGuid: ${itemDbGuid} does not exist in user[${userDbId}]'s world inventory.`,
      GErrorCode.INVALID_REQ_BODY_PARAMETER,
      {
        userDbId,
        itemDbGuid,
      }
    );
  }

  const itemCmsId: ItemCmsId = itemToUnequip.getItemCmsId();
  const unequipItem = castToEquippableItem(itemToUnequip);

  if (!unequipItem) {
    throw new GError(
      `[CQ_UnequipItem] cmsId: ${itemDbGuid} is not equippable item.`,
      GErrorCode.INVALID_REQ_BODY_PARAMETER,
      {
        userDbId,
        itemDbGuid,
        itemCmsId,
      }
    );
  }

  if (!unequipItem.isEquipped()) {
    throw new GError(
      `[CQ_UnequipItem] cmsId: ${itemDbGuid} is not equipped.`,
      GErrorCode.INVALID_REQ_BODY_PARAMETER,
      {
        userDbId,
        itemDbGuid,
        itemCmsId,
      }
    );
  }

  const equipSlotId = unequipItem.getEquipSlotId();

  return (
    Promise.resolve()
      // DB 업데이트
      .then(() => {
        const userDbPool = Container.of("user").get(DBConnPool);
        let param: EquipmentSlotsUpdateParam = {
          userDbId: userDbId,
          equipSlotId: equipSlotId,
          itemDbGuid: 0,
          itemCmsId: 0,
        };
        return spEquipmentSlotUpdate(userDbPool.getPool(), param);
      })
      // 장착이 적용/해제 된 아이템 상태 변경.
      .then(() => {
        unequipItem.onUnequipped();
        return itemDbGuid;
      })
      // UserCharacter 장착 정보 업데이트.
      .then((unequipItemDbGuid: ItemDbGuid) => {
        const equipInfo: EquipItemInfo = {
          itemDbGuid: 0,
          itemCmsId: 0,
        };
        userCharacter.setEquipment(equipSlotId, equipInfo);
        return unequipItemDbGuid;
      })
      // 응답 전달 및 브로드캐스트
      .then((unequipItemDbGuid: ItemDbGuid) => {
        let packet = GIANTSTEP.WS.Protocol.SA_UnequipItem.create();
        packet.UnequippedItemDbGuid = unequipItemDbGuid;

        user.sendProtobufPacket(
          GIANTSTEP.WS.Protocol.PacketType.WS_SA_UnequipItem,
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
