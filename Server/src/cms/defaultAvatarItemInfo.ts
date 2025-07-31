import { AvatarItemInfo } from "./avatarItemInfo";
import TableBaseType from "./tableBaseType";

export interface DefaultAvatarItemInfo extends TableBaseType {
  AvatarItemId: string;
  AvatarItemData: AvatarItemInfo;
}
