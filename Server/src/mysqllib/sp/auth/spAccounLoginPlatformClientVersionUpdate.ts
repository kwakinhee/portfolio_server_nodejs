// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
import * as queryGenerator from "../../queryGenerator";
import { GError, GErrorCode } from "../../../commonlib/gerror";
import glog from "../../../commonlib/glog";
import gconf from "../../../commonlib/gconf";

export const spName = "p_account_login_platform_client_version_update";
export const errorCode =
  GErrorCode.AUTH_ACCOUNT_UPDATE_LOGIN_PLATFORM_CLIENT_VERSION_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export default function (
  connection: queryGenerator.Connection,
  accountId: string,
  loginPlatform: string,
  clientVersion: string
): Promise<void> {
  return spFunction(connection, accountId, loginPlatform, clientVersion)
    .then((qr) => {
      if (qr.rows[0][0]["ROW_COUNT()"] === "0") {
        if (gconf.isDev) {
          throw new GError(spName + " is failed", errorCode, {
            loginPlatform,
            clientVersion,
          });
        } else {
          glog.error(spName + " is failed", {
            accountId,
            loginPlatform,
            clientVersion,
          });
        }
      }

      return;
    })
    .catch(catchHandler);
}
