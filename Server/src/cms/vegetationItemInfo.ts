import { ItemInfo } from "./itemInfo";
import TableBaseType from "./tableBaseType";

export interface VegetationItemInfo extends TableBaseType {
  ItemId: string;
  GrowthType: number;
  ItemDropGroupId: number;
  ItemDropRate: number;
  bHarvestStatus: number;
  HarvestItemDropGroupId: number;
  HarvestItemDropRate: number;
  bDestructionStatus: number;
  DestructionItemDropGroupId: number;
  DestructionItemDropRate: number;
  VegetationDurability: number;
  ItemDropStack: number;
  ItemModeling: number;
  ItemInfo: ItemInfo;
}
