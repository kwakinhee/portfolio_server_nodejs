import { AvatarCategoryInfo } from "./avatarCategoryInfo";
import { EAvatarGrade, EGender } from "./cmsEnum";
import TableBaseType from "./tableBaseType";

export interface AvatarItemInfo extends TableBaseType {
  Name: string;
  Gender: EGender;
  AvatarCategoryId: string;
  GradeType: EAvatarGrade;
  PresetKey: number;
  AvatarCategoryData: AvatarCategoryInfo;
}
