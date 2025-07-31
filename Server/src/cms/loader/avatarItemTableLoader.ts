import TableLoader from "./tableLoader";
import { AvatarItemInfo } from "../avatarItemInfo";
import Tables from "./tables";
import glog from "../../commonlib/glog";

export class AvatarItemTableLoader extends TableLoader<AvatarItemInfo> {
  constructor() {
    super("AvatarItem");
  }

  public loadInternal(data: AvatarItemInfo): boolean {
    if (!data.Active)
    {
      return false;
    }

    return true;
  }

  public postLoadInternal(data: AvatarItemInfo): boolean {
    return true;
  }

  protected makeReference(data: AvatarItemInfo): boolean {
    const avatarCategoryData = Tables.get().AvatarCategoryTableLoader.FindByStringId(data.AvatarCategoryId);
    if (avatarCategoryData == null)
    {
      glog.error(`[${this.typeName}TableLoader] Invalid Reference data. Id:${data.Id}, StringId:${data.StringId}, AvatarCategoryId:${data.AvatarCategoryId}`);
      return false;
    }

    data.AvatarCategoryData = avatarCategoryData;
    return true;
  }
}

export default AvatarItemTableLoader;