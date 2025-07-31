// ----------------------------------------------------------------------------
// 유저 캐릭터 슬롯 리셋.
// ----------------------------------------------------------------------------

import * as queryGenerator from "../../../queryGenerator";
import { GErrorCode } from "../../../../commonlib/gerror";

export const spname = "p_avatar_slot_reset";
export const errorcode = GErrorCode.USER_RESET_AVATAR_SLOTS_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spname);
const catchHandler = queryGenerator.generateGErrorRejection(errorcode);

export default function (
  connection: queryGenerator.Connection,
  userId: number,
  characterCmsId: number
): Promise<void> {
  return spFunction(connection, userId, characterCmsId)
    .then(() => {
      return;
    })
    .catch(catchHandler);
}
