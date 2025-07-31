// ----------------------------------------------------------------------------
// 유저 소유 아이템 정보 갱신
// ----------------------------------------------------------------------------

import * as queryGenerator from "../../../queryGenerator";
import { GError, GErrorCode } from "../../../../commonlib/gerror";
import { EInventoryType } from "../../../../cms/cmsEnum";
import { ItemCmsId, UserDbId } from "../../../../worldServer/typedef";

export const spName = "p_item_insert";
export const errorCode = GErrorCode.ITEM_INSERT_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export interface ItemInsertParam {
  userDbId: UserDbId;
  itemCmsId: ItemCmsId;
  inventoryType: EInventoryType;
  count: number;
  durability: number;
}

export default function (
  connection: queryGenerator.Connection,
  param: ItemInsertParam
): Promise<number> {
  return spFunction(
    connection,
    param.userDbId,
    param.itemCmsId,
    param.inventoryType,
    param.count,
    param.durability
  )
    .then((result) => {
      const rows = result.rows;
      const generatedDbId = rows[0][0].itemDbGuid;

      return generatedDbId;
    })
    .catch(catchHandler);
}
