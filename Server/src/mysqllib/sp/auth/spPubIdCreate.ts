// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
import * as queryGenerator from "../../queryGenerator";
import { GError, GErrorCode } from "../../../commonlib/gerror";

export const spName = "p_pub_id_and_server_group_user_create";
export const errorCode = GErrorCode.AUTH_PUB_ID_CREATE_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export default function (
  connection: queryGenerator.Connection,
  accountId: string,
  pubId: string,
  serverGroupId: string
): Promise<number> {
  return spFunction(connection, accountId, pubId, serverGroupId)
    .then((qr) => {
      const userId = parseInt(qr.rows[0][0]["LAST_INSERT_ID()"], 10);
      if (!userId) {
        throw new GError(spName + " is failed", errorCode, {
          accountId,
          pubId,
          worldServerId: serverGroupId,
        });
      }
      return userId;
    })
    .catch(catchHandler);
}
