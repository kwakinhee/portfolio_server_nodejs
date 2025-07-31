import { ItemInfo } from "./itemInfo";
import TableBaseType from "./tableBaseType";

export interface DefaultWorldInventoryItemInfo extends TableBaseType {
  StringId: string;
  Active: boolean;
  Durability: number;
  Count: number;
  ItemData: ItemInfo;
}
