// ----------------------------------------------------------------------------
// 필드 오브젝트 생성
// ----------------------------------------------------------------------------

import * as queryGenerator from "../../queryGenerator";
import { GError, GErrorCode } from "../../../commonlib/gerror";

export const spName = "p_world_object_insert";
export const errorCode = GErrorCode.USER_CREATE_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export default function (
  connection: queryGenerator.Connection,
  worldDbId: number,
  cmsId: number,
  itemDbId: number,
  ownerDbId: number,
  posX: number,
  posY: number,
  layer: number,
  dir: number
): Promise<number> {
  return spFunction(
    connection,
    worldDbId,
    cmsId,
    itemDbId,
    ownerDbId,
    posX,
    posY,
    layer,
    dir
  )
    .then((result) => {
      const rows = result.rows;
      const generatedDbId = rows[0][0].ObjectDbId;

      return generatedDbId;
    })
    .catch(catchHandler);
}
