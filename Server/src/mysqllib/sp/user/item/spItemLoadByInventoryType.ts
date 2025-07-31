// ----------------------------------------------------------------------------
// 유저 인벤토리 정보 조회
// ----------------------------------------------------------------------------

import * as queryGenerator from "../../../queryGenerator";
import { GErrorCode } from "../../../../commonlib/gerror";
import { ItemCmsId, ItemDbGuid } from "../../../../worldServer/typedef";
import { EInventoryType } from "../../../../cms/cmsEnum";

export const spName = "p_item_load_by_inventory_type";
export const errorCode = GErrorCode.ITEM_LOAD_ALL_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export interface ItemLoadParam {
  userDbId: number;
  inventoryType: EInventoryType;
}

export interface StorageUpgradeModel {
  upgrade: number;
}

export interface ItemModel {
  itemDbGuid: ItemDbGuid;
  itemCmsId: ItemCmsId;
  durability: number;
  count: number;
}

export interface ItemLoadResult {
  storageData?: StorageUpgradeModel[];
  items: ItemModel[];
}

export default function (
  connection: queryGenerator.Connection,
  param: ItemLoadParam
): Promise<ItemLoadResult | null> {
  return spFunction(connection, param.userDbId, param.inventoryType)
    .then((qr) => {
      const rows = qr.rows;

      let rowIndex = 0;
      const storageData = rows[rowIndex];

      rowIndex += 1;
      const items = rows[rowIndex];

      return {
        storageData,
        items,
      };
    })
    .catch(catchHandler);
}
