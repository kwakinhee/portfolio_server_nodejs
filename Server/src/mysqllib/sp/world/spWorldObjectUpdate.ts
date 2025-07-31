// ----------------------------------------------------------------------------
// 필드 오브젝트 수정
// ----------------------------------------------------------------------------

import * as queryGenerator from "../../queryGenerator";
import { GError, GErrorCode } from "../../../commonlib/gerror";

export const spName = "p_world_object_update";
export const errorCode = GErrorCode.USER_CREATE_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export default function (
  connection: queryGenerator.Connection,
  objectDbId: number,
  posX: number,
  posY: number,
  layer: number,
  dir: number
): Promise<void> {
  return spFunction(connection, objectDbId, posX, posY, layer, dir)
    .then((result) => {
      return;
    })
    .catch(catchHandler);
}
