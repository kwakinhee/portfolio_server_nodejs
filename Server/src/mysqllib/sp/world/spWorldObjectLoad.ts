// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

import * as queryGenerator from "../../queryGenerator";
import { GError, GErrorCode } from "../../../commonlib/gerror";

export const spName = "p_world_object_load";
export const errorCode = GErrorCode.AUTH_ACCOUNT_LOAD_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export interface Result {
  objectDbId: number;
  itemDbId: number;
  cmsId: number;
  ownerDbId: number;
  xPos: number;
  yPos: number;
  layer: number;
  dir: number;
  createdDate: number;
}

export default function (
  connection: queryGenerator.Connection,
  worldDbId: number
): Promise<Result[]> {
  return spFunction(connection, worldDbId)
    .then((qr) => {
      const rows = qr.rows;
      if (rows[0].length === 0) {
        return null;
      }
      return rows[0];
    })
    .catch(catchHandler);
}
