import glog from "../../commonlib/glog";
import TableLoader from "./tableLoader";
import { HairColorInfo } from "../hairColorInfo";
import Tables from "./tables";

export class HairColorTableLoader extends TableLoader<HairColorInfo> {
  constructor() {
    super("HairColor");
  }

  public loadInternal(data: HairColorInfo): boolean {
    return true;
  }

  public postLoadInternal(data: HairColorInfo): boolean {
    return true;
  }

  protected makeReference(data: HairColorInfo): boolean {
    const avatarItemData = Tables.get().AvatarItemTableLoader.FindByStringId(data.AvatarItemId);
    if (avatarItemData == null) {
      glog.error(`[${this.typeName}TableLoader] Invalid Reference data. Id:${data.Id}, StringId:${data.StringId}, AvatarItemId:${data.AvatarItemId}`);
      return false;
    }

    data.AvatarItemData = avatarItemData;
    return true;
  }
}

export default HairColorTableLoader;