import { GIANTSTEP } from "../../../proto/worldServer/jsonProto";
import { User } from "../../user";
import glog from "../../../commonlib/glog";
import { GError, GErrorCode } from "../../../commonlib/gerror";
import _ from "lodash";
import { AvatarInventory } from "../../inventory/avatarInventory";
import { ItemBase } from "../../item/itemBase";

export = (user: User, request: any): Promise<boolean> => {
  const reqBody: any = request.toJSON();
  glog.debug("getMyAvatarInventory:", reqBody);

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

  if (!user.userInventory.avatarInventory) {
    throw new GError(
      `[ ${__filename} ] user avatarInventory is not initialized!`,
      GErrorCode.AVATAR_INVENTORY_LOAD_ERROR
    );
  }

  const avatarInventory: AvatarInventory = user.userInventory.avatarInventory;
  const saGetMyAvatarInventory: GIANTSTEP.WS.Protocol.SA_GetMyAvatarInventory =
    GIANTSTEP.WS.Protocol.SA_GetMyAvatarInventory.create();
  saGetMyAvatarInventory.capacity = avatarInventory.getCapacity();

  const itemList: ItemBase[] = avatarInventory.getItemList();
  for (const item of itemList) {
    const itemMsg: GIANTSTEP.WS.Protocol.AvatarItem = item.toMessage();
    if (!itemMsg) {
      throw new GError(
        `[ ${__filename} ] Internal Error. item.toMessage() failed.`,
        GErrorCode.AVATAR_INVENTORY_LOAD_ERROR
      );
    }
    saGetMyAvatarInventory.itemList.push(itemMsg);
  }

  saGetMyAvatarInventory.errorCode = GErrorCode.OK;
  user.sendProtobufPacket(
    GIANTSTEP.WS.Protocol.PacketType.WS_SA_GetMyAvatarInventory,
    saGetMyAvatarInventory
  );

  return Promise.resolve(true);
};
