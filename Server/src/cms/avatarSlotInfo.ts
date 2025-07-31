import { ESlotName } from "./cmsEnum";
import TableBaseType from "./tableBaseType";

export interface AvatarSlotInfo extends TableBaseType {
  SlotName: ESlotName;
  bOverlap: boolean;
}
