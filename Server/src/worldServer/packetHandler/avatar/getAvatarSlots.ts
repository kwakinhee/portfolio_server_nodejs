import { GIANTSTEP } from "../../../proto/worldServer/jsonProto";
import { User } from "../../user";
import glog from "../../../commonlib/glog";
import { GError, GErrorCode } from "../../../commonlib/gerror";
import { DBConnPool } from "../../../mysqllib/pool";
import _ from "lodash";
import { AvatarSlot } from "../../userCharacter";
import spAvatarSlotLoad, {
  AvatarSlotModel,
} from "../../../mysqllib/sp/user/item/spAvatarSlotLoad";
import Container from "typedi";

export = async (user: User, request: any): Promise<boolean> => {
  const reqBody: any = request.toJSON();
  glog.debug("getAvatarSlots:", reqBody);

  const cqGetAvatarSlots: GIANTSTEP.WS.Protocol.CQ_GetAvatarSlots = request;

  const userId = user.getUserId();
  const characterCmsId: number = cqGetAvatarSlots.characterCmsId;
  // validate request parameters
  if (!userId || !characterCmsId) {
    throw new GError(
      "INVALID_REQ_BODY_PARAMETER",
      GErrorCode.INVALID_REQ_BODY_PARAMETER,
      {
        userId,
        characterCmsId,
      }
    );
  }

  const userDbPool: DBConnPool = Container.of("user").get(DBConnPool);

  return Promise.resolve()
    .then(() => {
      const avatarSlots: AvatarSlot[] =
        user.userCharacter.getAvatarSlotsMapToArray(characterCmsId);
      if (!avatarSlots) {
        return spAvatarSlotLoad(
          userDbPool.getPool(),
          userId,
          characterCmsId
        ).then((resultAvatarSlots) => {
          if (!resultAvatarSlots) {
            return null;
          }
          user.userCharacter.setAvatarSlotsArrayToMap(
            characterCmsId,
            resultAvatarSlots
          );
          return resultAvatarSlots;
        });
      }
      return avatarSlots;
    })
    .then((avatarSlots) => {
      const saGetAvatarSlots: GIANTSTEP.WS.Protocol.SA_GetAvatarSlots =
        GIANTSTEP.WS.Protocol.SA_GetAvatarSlots.create();

      saGetAvatarSlots.avatarSlots = avatarSlots;

      // if (!avatarSlots) {
      //   //TODO : SA_GetAvatarSlots에 결과필드 추가 후 필히 삭제.
      //   let dummyAvatarSlot = GIANTSTEP.WS.Protocol.AvatarSlot.create();
      //   dummyAvatarSlot.avatarItemCmsId = 0;
      //   dummyAvatarSlot.avatarSlotId = 0;
      //   saGetAvatarSlots.avatarSlots = [];
      //   saGetAvatarSlots.avatarSlots.push(dummyAvatarSlot);
      // }

      return user.sendProtobufPacket<GIANTSTEP.WS.Protocol.SA_GetAvatarSlots>(
        GIANTSTEP.WS.Protocol.PacketType.WS_SA_GetAvatarSlots,
        saGetAvatarSlots
      );
    });
};
