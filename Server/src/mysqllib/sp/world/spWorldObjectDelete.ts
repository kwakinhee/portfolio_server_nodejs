// ----------------------------------------------------------------------------
// 필드 오브젝트 수정
// ----------------------------------------------------------------------------

import * as queryGenerator from "../../queryGenerator";
import { GError, GErrorCode } from "../../../commonlib/gerror";

export const spName = "p_world_object_delete";
export const errorCode = GErrorCode.USER_CREATE_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export default function (
  connection: queryGenerator.Connection,
  objectDbId: number
): Promise<void> {
  return spFunction(connection, objectDbId)
    .then((result) => {
      return;
    })
    .catch(catchHandler);
}
