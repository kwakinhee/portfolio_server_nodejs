// ----------------------------------------------------------------------------
// 유저 소유 아이템 정보 전체 갱신
// ----------------------------------------------------------------------------

import * as queryGenerator from "../../../queryGenerator";
import { GError, GErrorCode } from "../../../../commonlib/gerror";
import { ItemDbGuid } from "../../../../worldServer/typedef";
import { EInventoryType } from "../../../../cms/cmsEnum";

export const spName = "p_item_update_by_item_db_guid";
export const errorCode = GErrorCode.ITEM_UPDATE_ALL_ATTRIBUTES_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export interface ItemUpdateParam {
  itemDbGuid: ItemDbGuid;
  userId: number;
  itemCmsId: number;
  inventoryType: EInventoryType;
  count: number;
}

export default function (
  connection: queryGenerator.Connection,
  param: ItemUpdateParam
): Promise<void> {
  return spFunction(
    connection,
    param.itemDbGuid,
    param.userId,
    param.itemCmsId,
    param.inventoryType,
    param.count
  )
    .then((qr) => {
      if (qr.rows[0][0]["ROW_COUNT()"] === "0") {
        throw new GError(spName + " nothing has been updated.", errorCode, {
          itemsUpdate: param,
        });
      }
    })
    .catch(catchHandler);
}
