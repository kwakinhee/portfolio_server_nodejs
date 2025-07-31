import { GIANTSTEP } from "../../../proto/worldServer/jsonProto";
import { User } from "../../user";
import glog from "../../../commonlib/glog";
import { GError, GErrorCode } from "../../../commonlib/gerror";
import _ from "lodash";
import { WorldInventory } from "../../inventory/worldInventory";
import { ItemBase } from "../../item/itemBase";

export = (user: User, request: any): Promise<boolean> => {
  const reqBody: any = request.toJSON();
  glog.debug("getMyWorldInventory:", reqBody);

  const userId = user.getUserId();

  if (!userId) {
    throw new GError(
      `[ ${__filename} ] invalid-userId`,
      GErrorCode.INVALID_REQ_BODY_PARAMETER,
      {
        userId,
      }
    );
  }

  if (!user.userInventory.worldInventory) {
    throw new GError(
      `[ ${__filename} ] user worldInventory is not initialized!`,
      GErrorCode.WORLD_INVENTORY_LOAD_ERROR
    );
  }

  const inventory: WorldInventory = user.userInventory.worldInventory;
  const worldInventoryMessage: GIANTSTEP.WS.Protocol.SA_GetMyWorldInventory =
    GIANTSTEP.WS.Protocol.SA_GetMyWorldInventory.create();
  worldInventoryMessage.capacity = inventory.getCapacity();

  const itemList: ItemBase[] = inventory.getItemList();
  for (const item of itemList) {
    const itemMsg: GIANTSTEP.WS.Protocol.WorldItem = item.toMessage();
    if (!itemMsg) {
      throw new GError(
        `[ ${__filename} ] Internal Error. item.toMessage() failed.`,
        GErrorCode.WORLD_INVENTORY_LOAD_ERROR
      );
    }
    worldInventoryMessage.itemList.push(itemMsg);
  }

  worldInventoryMessage.errorCode = GErrorCode.OK;
  user.sendProtobufPacket(
    GIANTSTEP.WS.Protocol.PacketType.WS_SA_GetMyWorldInventory,
    worldInventoryMessage
  );

  return Promise.resolve(true);
};
