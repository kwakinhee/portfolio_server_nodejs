// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

import * as queryGenerator from "../../queryGenerator";
import { GErrorCode } from "../../../commonlib/gerror";

export const spName = "p_user_id_load";
export const errorCode = GErrorCode.USER_LOAD_ID_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export default function (
  connection: queryGenerator.Connection,
  userId: number
): Promise<number | null> {
  return spFunction(connection, userId)
    .then((qr) => {
      const rows = qr.rows;
      if (qr.rows[0].length === 0) {
        return null;
      }
      return rows[0][0].userId;
    })
    .catch(catchHandler);
}
