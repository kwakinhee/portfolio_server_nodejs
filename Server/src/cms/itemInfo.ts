import cms from ".";
import { EItemGrade, EItemPlace, EItemSubType, EItemType } from "./cmsEnum";
import TableBaseType from "./tableBaseType";
import { ToolItemInfo } from "./toolItemInfo";
import { ObjectItemInfo } from "./objectItemInfo";
import { VegetationItemInfo } from "./vegetationItemInfo";

export interface ItemInfo extends TableBaseType {
  Name: string;
  Type: EItemType;
  SubType: EItemSubType;
  GradeType: EItemGrade;
  bInventory: number;
  bUse: number;
  PlaceType: EItemPlace;
  bPutDown: number;
  bBury: number;
  bPlant: number;
  bStorageStock: number;
  bForceBind: number;
  MaxStackableCount: number;
  Value: number;
  BuyPrice: number;
  SellPrice: number;
  ToolData?: ToolItemInfo;
  ObjectData?: ObjectItemInfo;
  VegetationData?: VegetationItemInfo;
}

export function isItemStackable(itemCmsId: number): boolean {
  return cms.Tables.Item[itemCmsId.toString()].MaxStackableCount > 1;
}
