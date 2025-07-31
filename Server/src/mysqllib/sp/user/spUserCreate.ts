// ----------------------------------------------------------------------------
// 유저 정보 생성.
// ----------------------------------------------------------------------------

import * as queryGenerator from "../../queryGenerator";
import { GError, GErrorCode } from "../../../commonlib/gerror";
import { GLog } from "../../../commonlib/glog";

export const spName = "p_user_create";
export const errorCode = GErrorCode.USER_CREATE_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export default function (
  connection: queryGenerator.Connection,
  userId: number,
  accountID: string,
  pubId: string,
  characterName: string,
  characterCmsId: number,
  loginTimeUtc: number
): Promise<void> {
  return spFunction(
    connection,
    userId,
    accountID,
    pubId,
    characterName,
    characterCmsId,
    loginTimeUtc
  )
    .then(() => {
      // TODO: 트랜잭션 안에서 처리해야 가능.
      // if (qr.rows[0][0]["ROW_COUNT()"] === "0") {
      //   throw new GError(spName + " is failed", errorCode, {
      //     accountId,
      //     characterName,
      //     isAdmin,
      //   });
      // }
      return;
    })
    .catch(catchHandler);
}
