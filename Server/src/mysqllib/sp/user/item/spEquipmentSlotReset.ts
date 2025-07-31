// ----------------------------------------------------------------------------
// 유저 캐릭터 슬롯 리셋.
// ----------------------------------------------------------------------------

import * as queryGenerator from "../../../queryGenerator";
import { GErrorCode } from "../../../../commonlib/gerror";

export const spname = "p_equipment_slot_reset";
export const errorcode = GErrorCode.EQUIPMENT_SLOT_RESET_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spname);
const catchHandler = queryGenerator.generateGErrorRejection(errorcode);

export default function (
  connection: queryGenerator.Connection,
  userDbId: number
): Promise<void> {
  return spFunction(connection, userDbId)
    .then(() => {
      return;
    })
    .catch(catchHandler);
}
