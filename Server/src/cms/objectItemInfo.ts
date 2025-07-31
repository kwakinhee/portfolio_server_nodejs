import { ItemInfo } from "./itemInfo";
import TableBaseType from "./tableBaseType";

export interface ObjectItemInfo extends TableBaseType {
  ItemId: string;
  ObjInteractionType: number;
  PlaceSizeX: number;
  PlaceSizeY: number;
  PlaceSizeZ: number;
  RotateP: number;
  RotateY: number;
  RotateR: number;
  ArrangeCount: number;
  ItemInfo: ItemInfo;
}
