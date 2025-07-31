// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

import * as queryGenerator from "../../queryGenerator";
import { GError, GErrorCode } from "../../../commonlib/gerror";
export const spName = "p_account_create";
export const errorCode = GErrorCode.AUTH_ACCOUNT_CREATE_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export default function (
  connection: queryGenerator.Connection,
  AccountId: string,
  lastLoginTimeUtc: number,
  inLoginPlatform: string,
  inClientVersion: string,
  inIsAdmin: number
): Promise<number> {
  return spFunction(
    connection,
    AccountId,
    lastLoginTimeUtc,
    inLoginPlatform,
    inClientVersion,
    inIsAdmin
  )
    .then((qr) => {
      const authUserId = parseInt(qr.rows[0][0]["LAST_INSERT_ID()"], 10);
      if (!authUserId) {
        throw new GError(spName + " is failed", errorCode, {
          authUserId,
          AccountId,
        });
      }
      return authUserId;
    })
    .catch(catchHandler);
}
