// ----------------------------------------------------------------------------
// user 정보 조회.
// ----------------------------------------------------------------------------

import * as queryGenerator from "../../../queryGenerator";
import { GErrorCode } from "../../../../commonlib/gerror";
export const spName = "p_avatar_slot_load";
export const errorCode = GErrorCode.USER_LOAD_AVATAR_SLOTS_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export interface AvatarSlotModel {
  avatarSlotId: number;
  avatarItemCmsId: number;
  itemDbGuid: number;
  colorIndex: number;
}
export default function (
  connection: queryGenerator.Connection,
  userId: number,
  characterCmsId: number
): Promise<AvatarSlotModel[] | null> {
  return spFunction(connection, userId, characterCmsId)
    .then((qr) => {
      const rows = qr.rows;
      if (qr.rows[0].length === 0) {
        return null;
      }
      return rows[0];
    })
    .catch(catchHandler);
}
