// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
import * as queryGenerator from "../../queryGenerator";
import { GError, GErrorCode } from "../../../commonlib/gerror";

export const spName = "p_account_is_online_and_last_login_time_utc_update";
export const errorCode =
  GErrorCode.AUTH_ACCOUNT_UPDATE_IS_ONLINE_AND_LAST_LOGIN_TIME_UTC_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export default function (
  connection: queryGenerator.Connection,
  accountId: string,
  isOnline: number,
  lastLoginTimeUtc: number
): Promise<void> {
  return spFunction(connection, accountId, isOnline, lastLoginTimeUtc)
    .then(() => {
      return;
    })
    .catch(catchHandler);
}
