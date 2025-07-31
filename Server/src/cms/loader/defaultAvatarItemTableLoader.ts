import glog from "../../commonlib/glog";
import TableLoader from "./tableLoader";
import { DefaultAvatarItemInfo } from "../defaultAvatarItemInfo";
import Tables from "./tables";

export class DefaultAvatarItemTableLoader extends TableLoader<DefaultAvatarItemInfo> {
  constructor() {
    super("DefaultAvatarItem");
  }

  public loadInternal(data: DefaultAvatarItemInfo): boolean {
    return true;
  }

  public postLoadInternal(data: DefaultAvatarItemInfo): boolean {
    return true;
  }

  protected makeReference(data: DefaultAvatarItemInfo): boolean {
    const avatarItemData = Tables.get().AvatarItemTableLoader.FindByStringId(data.AvatarItemId);
    if (avatarItemData == null) {
      glog.error(`[${this.typeName}TableLoader] Invalid Reference data. Id:${data.Id}, StringId:${data.StringId}, AvatarItemId:${data.AvatarItemId}`);
      return false;
    }

    data.AvatarItemData = avatarItemData;
    return true;
  }
}

export default DefaultAvatarItemTableLoader;