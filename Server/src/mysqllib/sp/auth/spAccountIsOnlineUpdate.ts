// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

import * as queryGenerator from "../../queryGenerator";
import { GError, GErrorCode } from "../../../commonlib/gerror";

export const spName = "p_account_is_online_update";
export const errorCode = GErrorCode.AUTH_ACCOUNT_UPDATE_IS_ONLINE_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export default function (
  connection: queryGenerator.Connection,
  accountId: string,
  isOnline: number
): Promise<void> {
  return spFunction(connection, accountId, isOnline)
    .then(() => {
      return;
    })
    .catch(catchHandler);
}
