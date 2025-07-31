// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

import * as queryGenerator from "../../queryGenerator";
import { GError, GErrorCode } from "../../../commonlib/gerror";

export const spName = "p_server_group_user_load";
export const errorCode = GErrorCode.AUTH_WORLD_USERS_LOAD_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export default function (
  connection: queryGenerator.Connection,
  id: string
): Promise<any[]> {
  return spFunction(connection, id)
    .then((qr) => {
      const rows = qr.rows;
      return rows[0];
    })
    .catch(catchHandler);
}
