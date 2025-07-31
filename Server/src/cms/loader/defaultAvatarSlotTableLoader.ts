import TableLoader from "./tableLoader";
import { DefaultAvatarSlotInfo } from "../defaultAvatarSlotInfo";
import Tables from "./tables";
import glog from "../../commonlib/glog";

export class DefaultAvatarSlotTableLoader extends TableLoader<DefaultAvatarSlotInfo> {
  constructor() {
    super("DefaultAvatarSlot");
  }

  public loadInternal(data: DefaultAvatarSlotInfo): boolean {
    return true;
  }

  public postLoadInternal(data: DefaultAvatarSlotInfo): boolean {
    return true;
  }

  protected makeReference(data: DefaultAvatarSlotInfo): boolean {
    const avatarItemData = Tables.get().AvatarItemTableLoader.FindByStringId(data.AvatarItemId);
    if (avatarItemData == null) {
      glog.error(`[${this.typeName}TableLoader] Invalid Reference data. Id:${data.Id}, StringId:${data.StringId}, AvatarItemId:${data.AvatarItemId}`);
      return false;
    }

    data.AvatarItemData = avatarItemData;
    return true;
  }
}

export default DefaultAvatarSlotTableLoader;