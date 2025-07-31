import { AvatarSlotInfo } from "./avatarSlotInfo";
import { ELargeCategory, EMiddleCategory, ESmallCategory } from "./cmsEnum";
import TableBaseType from "./tableBaseType";

export interface AvatarCategoryInfo extends TableBaseType {
  AvatarMenu: string;
  LargeCategory: ELargeCategory;
  MiddleCategory: EMiddleCategory;
  SmallCategory: ESmallCategory;
  AvatarSlotId: string;
  AvatarSlotData: AvatarSlotInfo;
}

export enum EAvatarMenu {
  DressRoom = 1,
  MakeupRoom = 2,
}
