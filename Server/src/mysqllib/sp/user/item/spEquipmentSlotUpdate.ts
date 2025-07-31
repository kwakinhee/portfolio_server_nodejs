// ----------------------------------------------------------------------------
// 유저 Equipment 정보 갱신
// ----------------------------------------------------------------------------

import * as queryGenerator from "../../../queryGenerator";
import { GError, GErrorCode } from "../../../../commonlib/gerror";
import { ItemDbGuid } from "../../../../worldServer/typedef";

export const spName = "p_equipment_slot_update";
export const errorCode = GErrorCode.EQUIPMENT_SLOT_UPDATE_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchandler = queryGenerator.generateGErrorRejection(errorCode);

export interface EquipmentSlotsUpdateParam {
  userDbId: number;
  equipSlotId: number;
  itemDbGuid: ItemDbGuid;
  itemCmsId: number;
}

export default function (
  connection: queryGenerator.Connection,
  param: EquipmentSlotsUpdateParam
): Promise<void> {
  return spFunction(
    connection,
    param.userDbId,
    param.equipSlotId,
    param.itemDbGuid,
    param.itemCmsId
  )
    .then((qr) => {
      if (qr.rows[0][0]["ROW_COUNT()"] === "0") {
        throw new GError(spName + " nothing has been updated.", errorCode, {
          param,
        });
      }
    })
    .catch(catchandler);
}
