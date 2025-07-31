// ----------------------------------------------------------------------------
// 유저 캐릭터 슬롯 갱신.
// ----------------------------------------------------------------------------

import * as queryGenerator from "../../../queryGenerator";
import { GError, GErrorCode } from "../../../../commonlib/gerror";

export const spName = "p_avatar_slot_update";
export const errorCode = GErrorCode.USER_UPDATE_AVATAR_SLOTS_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchandler = queryGenerator.generateGErrorRejection(errorCode);

export interface AvatarSlotChangeParam {
  avatarSlotId: number;
  avatarItemCmsId: number;
  itemDbGuid: number;
  colorIndex: number;
}

export default function (
  connection: queryGenerator.Connection,
  userId: number,
  characterCmsId: number,
  avatarSlotChange: AvatarSlotChangeParam
): Promise<void> {
  return spFunction(
    connection,
    userId,
    characterCmsId,
    avatarSlotChange.avatarSlotId,
    avatarSlotChange.avatarItemCmsId,
    avatarSlotChange.itemDbGuid,
    avatarSlotChange.colorIndex
  )
    .then((qr) => {
      if (qr.rows[0][0]["ROW_COUNT()"] === "0") {
        throw new GError(spName + " nothing has been updated.", errorCode, {
          userId,
          avatarSlotChange,
        });
      }
    })
    .catch(catchandler);
}
