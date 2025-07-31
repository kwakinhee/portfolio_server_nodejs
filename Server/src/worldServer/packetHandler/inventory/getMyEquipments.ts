import { GIANTSTEP } from "../../../proto/worldServer/jsonProto";
import { User } from "../../user";
import glog from "../../../commonlib/glog";
import { GError, GErrorCode } from "../../../commonlib/gerror";
import _, { eq } from "lodash";
import Container from "typedi";
import { EquipSlotId } from "../../typedef";
import { EquipSlot } from "../../userCharacter";

export = (user: User, request: any): Promise<boolean> => {
  const reqBody: any = request.toJSON();
  glog.debug("getUserEquipments:", reqBody);

  if (!user) {
    throw new GError(
      `[ ${__filename} ] user object does not exist`,
      GErrorCode.WORLD_INVENTORY_LOAD_ERROR
    );
  }

  const userId = user.getUserId();
  if (!userId) {
    throw new GError("invalid-userId", GErrorCode.INVALID_REQ_BODY_PARAMETER, {
      userId,
    });
  }

  const userCharacter = user.userCharacter;
  if (!userCharacter) {
    throw new GError(
      `[ ${__filename} ] user character was never initialized.`,
      GErrorCode.WORLD_INVENTORY_LOAD_ERROR
    );
  }

  // TODO: implement function
  let equipments: EquipSlot[] = userCharacter.getEquipmentList();

  let p: GIANTSTEP.WS.Protocol.SA_GetMyEquipments =
    GIANTSTEP.WS.Protocol.SA_GetMyEquipments.create();

  for (const equipInfo of equipments) {
    let equipMessage: GIANTSTEP.WS.Protocol.EquipmentSlot =
      GIANTSTEP.WS.Protocol.EquipmentSlot.create();

    equipMessage.itemDbGuid = equipInfo.itemDbGuid;
    equipMessage.itemCmsId = equipInfo.itemCmsId;

    p.equipmentSlotList.push(equipMessage);
  }
  user.sendProtobufPacket(
    GIANTSTEP.WS.Protocol.PacketType.WS_SA_GetMyEquipments,
    p
  );
  return Promise.resolve(true);
};
