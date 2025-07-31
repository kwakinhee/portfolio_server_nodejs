import { EEquipSlot } from "../cms/cmsEnum";
import { AvatarSlot } from "./userCharacter";

export type ItemCmsId = number;
export type ItemDbGuid = number;
export type UserDbId = number;
export type EquipSlotId = EEquipSlot;
export type AvatarSlotId = number;
export type CharacterCmsId = number;

export type AvatarSlotMap = Map<AvatarSlotId, AvatarSlot>;
export type CharacterAvatarSlotsMap = Map<CharacterCmsId, AvatarSlotMap>;
