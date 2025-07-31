// ----------------------------------------------------------------------------
// 유저 소유 아이템 개수 정보 갱신
// ----------------------------------------------------------------------------

import * as queryGenerator from "../../../queryGenerator";
import { GError, GErrorCode } from "../../../../commonlib/gerror";

export const spName = "p_item_update_count_by_item_db_guid";
export const errorCode = GErrorCode.ITEM_UPDATE_COUNT_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchandler = queryGenerator.generateGErrorRejection(errorCode);

export interface ItemUpdateCountParam {
  itemDbGuid: number;
  count: number;
}

export default function (
  connection: queryGenerator.Connection,
  param: ItemUpdateCountParam
): Promise<void> {
  return spFunction(connection, param.itemDbGuid, param.count)
    .then((qr) => {
      if (qr.rows[0][0]["ROW_COUNT()"] === "0") {
        throw new GError(spName + " nothing has been updated.", errorCode, {
          param,
        });
      }
    })
    .catch(catchandler);
}
