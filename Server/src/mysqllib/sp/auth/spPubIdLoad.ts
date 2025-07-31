// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
import * as queryGenerator from "../../queryGenerator";
import { GError, GErrorCode } from "../../../commonlib/gerror";

export const spName = "p_pub_id_load";
export const errorCode = GErrorCode.AUTH_PUB_ID_LOAD_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export default function (
  connection: queryGenerator.Connection,
  accountId: string,
  serverGroupId: string
): Promise<string> {
  return spFunction(connection, accountId, serverGroupId)
    .then((qr) => {
      const rows = qr.rows;
      if (qr.rows[0].length === 0) {
        return null;
      }
      return rows[0][0].pubId;
    })
    .catch(catchHandler);
}
