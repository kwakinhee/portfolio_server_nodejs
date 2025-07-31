import { GIANTSTEP } from "../../../proto/worldServer/jsonProto";
import { User } from "../../user";
import glog from "../../../commonlib/glog";
import Container from "typedi";
import { GError, GErrorCode } from "../../../commonlib/gerror";
import txnAvatarSlotChange from "../../../mysqllib/txn/user/txnAvatarSlotChange";
import { DBConnPool } from "../../../mysqllib/pool";
import _ from "lodash";
import cms, { CmsTable } from "../../../cms";
import { AvatarItemInfo } from "../../../cms/avatarItemInfo";
import { AvatarCategoryInfo } from "../../../cms/avatarCategoryInfo";
import { AvatarSlotInfo } from "../../../cms/avatarSlotInfo";

export = (user: User, request: any): Promise<boolean> => {
  const reqBody: any = request.toJSON();
  glog.debug("changeAvatarSlots:", reqBody);
  const cqChangeAvatarSlots: GIANTSTEP.WS.Protocol.CQ_ChangeAvatarSlots =
    request;
  // const userId : number = cqChangeAvatarSlots.userId;

  const userId: number = user.getUserId();
  const characterCmsId: number = cqChangeAvatarSlots.characterCmsId;

  const avatarSlotChanges: GIANTSTEP.WS.Protocol.IAvatarSlot[] =
    cqChangeAvatarSlots.avatarSlots;

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

  if (!avatarSlotChanges || avatarSlotChanges.length === 0) {
    throw new GError(
      "invalid-character-slot-changes",
      GErrorCode.INVALID_REQ_BODY_PARAMETER,
      {
        AvatarSlotChanges: avatarSlotChanges,
      }
    );
  }

  const avatarItemTable: CmsTable<AvatarItemInfo> = cms.Tables.AvatarItem;

  const avatarCategoryByStringIdTable: CmsTable<AvatarCategoryInfo> =
    cms.Tables.AvatarCategoryByStringId;

  const avatarSlotByStringIdTable: CmsTable<AvatarSlotInfo> =
    cms.Tables.AvatarSlotByStringId;

  avatarSlotChanges.forEach((AvatarSlotChange) => {
    const avatarCategoryRefId: string =
      avatarItemTable[AvatarSlotChange.avatarItemCmsId].AvatarCategoryId;
    const AvatarSlotRefId: string =
      avatarCategoryByStringIdTable[avatarCategoryRefId].AvatarSlotId;
    AvatarSlotChange.avatarSlotId =
      avatarSlotByStringIdTable[AvatarSlotRefId].Id;
  });

  const userDbPool = Container.of("user").get(DBConnPool);
  return Promise.resolve()
    .then(() => {
      return txnAvatarSlotChange(
        userDbPool.getPool(),
        userId,
        characterCmsId,
        avatarSlotChanges
      );
    })
    .then(() => {
      user.userCharacter.setCharacterCmsId(characterCmsId);
      user.userCharacter.setAvatarSlotsArrayToMap(
        characterCmsId,
        avatarSlotChanges
      );

      const saChangeAvatarSlots: GIANTSTEP.WS.Protocol.SA_ChangeAvatarSlots =
        GIANTSTEP.WS.Protocol.SA_ChangeAvatarSlots.create();
      saChangeAvatarSlots.result = true;

      return user.sendProtobufPacket<GIANTSTEP.WS.Protocol.SA_ChangeAvatarSlots>(
        // response.sequence,
        GIANTSTEP.WS.Protocol.PacketType.WS_SA_ChangeAvatarSlots,
        saChangeAvatarSlots
      );
    });
};
