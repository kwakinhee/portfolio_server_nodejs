// ----------------------------------------------------------------------------
// 유저 캐릭터 슬롯 갱신.
// ----------------------------------------------------------------------------

import * as queryGenerator from "../../queryGenerator";
import { GError, GErrorCode } from "../../../commonlib/gerror";

export const spName = "p_character_update";
export const errorCode = GErrorCode.CHARACTER_UPDATE_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchandler = queryGenerator.generateGErrorRejection(errorCode);

export default function (
  connection: queryGenerator.Connection,
  userId: number,
  characterCmsId: number
): Promise<void> {
  return spFunction(connection, userId, characterCmsId)
    .then((qr) => {
      // if (qr.rows[0][0]["ROW_COUNT()"] === "0") {
      //   throw new GError(spName + " nothing has been updated", errorCode, {
      //     userId,
      //     characterCmsId,
      //   });
      // }
      return;
    })
    .catch(catchandler);
}
