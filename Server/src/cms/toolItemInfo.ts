import TableBaseType from "./tableBaseType";
import { ItemInfo } from "./itemInfo";

export interface ToolItemInfo extends TableBaseType {
  ItemId: string;
  ToolDurability: number;
  ItemInfo: ItemInfo;
}
