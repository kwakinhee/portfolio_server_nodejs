import { AvatarItemInfo } from "./avatarItemInfo";
import TableBaseType from "./tableBaseType";

export interface HairColorInfo extends TableBaseType {
  AvatarItemId: string;
  UIColorCode: string;
  AvatarItemData: AvatarItemInfo;
}
