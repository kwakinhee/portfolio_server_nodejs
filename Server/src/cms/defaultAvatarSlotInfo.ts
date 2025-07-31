import { AvatarItemInfo } from "./avatarItemInfo";
import TableBaseType from "./tableBaseType";

export interface DefaultAvatarSlotInfo extends TableBaseType {
  CharacterId: number;
  AvatarItemId: string;
  bEquip: boolean;
  AvatarItemData: AvatarItemInfo;
}
