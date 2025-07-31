// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

import * as queryGenerator from "../../queryGenerator";
import { GError, GErrorCode } from "../../../commonlib/gerror";

export const spName = "p_account_load";
export const errorCode = GErrorCode.AUTH_ACCOUNT_LOAD_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export interface Result {
  id: number;
  lastServerGroupId: string;
  isOnline: number;
  lastWorld: string;
  clientVersion: string;
  loginPlatform: string;
  isAdmin: number;
}

export default function (
  connection: queryGenerator.Connection,
  id: string
): Promise<Result> {
  return spFunction(connection, id)
    .then((qr) => {
      const rows = qr.rows;
      if (rows[0].length === 0) {
        return null;
      }
      return rows[0][0];
    })
    .catch(catchHandler);
}
