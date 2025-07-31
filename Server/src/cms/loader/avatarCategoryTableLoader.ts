import TableLoader from "./tableLoader";
import glog from "../../commonlib/glog";
import { AvatarCategoryInfo } from "../avatarCategoryInfo";
import Tables from "./tables";

export class AvatarCategoryTableLoader extends TableLoader<AvatarCategoryInfo> {
  constructor() {
    super("AvatarCategory");
  }

  public loadInternal(data: AvatarCategoryInfo): boolean {
    if (!data.Active)
    {
      return false;
    }

    return true;
  }

  public postLoadInternal(data: AvatarCategoryInfo): boolean {
    return true;
  }

  protected makeReference(data: AvatarCategoryInfo): boolean {
    const avatarSlotData = Tables.get().AvatarSlotTableLoader.FindByStringId(data.AvatarSlotId);
    if (avatarSlotData == null)
    {
      glog.error(`[${this.typeName}TableLoader] Invalid Reference data. Id:${data.Id}, StringId:${data.StringId}, AvatarSlotId:${data.AvatarSlotId}`);
      return false;
    }

    data.AvatarSlotData = avatarSlotData;

    return true;
  }
}

export default AvatarCategoryTableLoader;