// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

import * as queryGenerator from "../../queryGenerator";
import { GError, GErrorCode } from "../../../commonlib/gerror";

export const spName = "p_account_server_group_id_and_last_world_update";
export const errorCode =
  GErrorCode.AUTH_ACCOUNT_UPDATE_SERVER_GROUP_ID_AND_LAST_WORLD_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export default function (
  connection: queryGenerator.Connection,
  accountId: string,
  serverGroupId: string,
  worldServerId: string
): Promise<void> {
  return spFunction(connection, accountId, serverGroupId, worldServerId)
    .then(() => {
      return;
    })
    .catch(catchHandler);
}
