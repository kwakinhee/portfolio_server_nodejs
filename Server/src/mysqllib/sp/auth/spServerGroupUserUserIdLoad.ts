// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
import * as queryGenerator from "../../queryGenerator";
import { GError, GErrorCode } from "../../../commonlib/gerror";
export const spName = "p_server_group_user_user_id_load";
export const errorCode = GErrorCode.AUTH_WORLD_USER_LOAD_USER_ID_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export default function (
  connection: queryGenerator.Connection,
  pubId: string
): Promise<number> {
  return spFunction(connection, pubId)
    .then((qr) => {
      const userId = qr.rows[0][0].userId;
      if (!userId) {
        throw new GError(spName + " is failed", errorCode, { pubId });
      }
      return userId;
    })
    .catch(catchHandler);
}
