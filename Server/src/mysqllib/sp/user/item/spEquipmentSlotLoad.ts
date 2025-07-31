// ----------------------------------------------------------------------------
// 유저 장착 정보 조회
// ----------------------------------------------------------------------------

import * as queryGenerator from "../../../queryGenerator";
import { GErrorCode } from "../../../../commonlib/gerror";
import { ItemCmsId, ItemDbGuid } from "../../../../worldServer/typedef";

export const spName = "p_equipment_slot_load";
export const errorCode = GErrorCode.EQUIPMENT_SLOT_UPDATE_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export interface EquipmentSlotModel {
  equipSlotId: number;
  itemDbGuid: ItemDbGuid;
  itemCmsId: ItemCmsId;
}

export interface EquipmentSlotLoadResult {
  equipments: EquipmentSlotModel[];
}

export default function (
  connection: queryGenerator.Connection,
  userDbId: number
): Promise<EquipmentSlotLoadResult | null> {
  return spFunction(connection, userDbId)
    .then((qr) => {
      const rows = qr.rows;

      if (qr.rows[0].length === 0) {
        return null;
      }
      return rows[0];
    })
    .catch(catchHandler);
}
