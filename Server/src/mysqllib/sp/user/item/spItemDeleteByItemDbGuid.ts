// ----------------------------------------------------------------------------
//  유저 인벤토리 아이템 삭제
// ----------------------------------------------------------------------------

import * as queryGenerator from "../../../queryGenerator";
import { GError, GErrorCode } from "../../../../commonlib/gerror";
import { ItemDbGuid } from "../../../../worldServer/typedef";

export const spName = "p_item_delete_by_item_db_guid";
export const errorCode = GErrorCode.ITEM_DELETE_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export interface ItemDeleteParam {
  itemDbGuid: ItemDbGuid;
}

export default function (
  connection: queryGenerator.Connection,
  param: ItemDeleteParam
): Promise<any | null> {
  return spFunction(connection, param.itemDbGuid)
    .then((qr) => {
      if (qr.rows[0][0]["ROW_COUNT()"] === "0") {
        throw new GError(spName + " nothing has been updated.", errorCode, {
          param,
        });
      }
    })
    .catch(catchHandler);
}
