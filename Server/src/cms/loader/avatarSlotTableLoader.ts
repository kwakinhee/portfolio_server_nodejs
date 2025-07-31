import TableLoader from "./tableLoader";
import { AvatarSlotInfo } from "../avatarSlotInfo";

export class AvatarSlotTableLoader extends TableLoader<AvatarSlotInfo> {
  constructor() {
    super("AvatarSlot");
  }

  public loadInternal(data: AvatarSlotInfo): boolean {
    if (!data.Active)
    {
      return false;
    }

    return true;
  }

  public postLoadInternal(data: AvatarSlotInfo): boolean {
    return true;
  }

  protected makeReference(data: AvatarSlotInfo): boolean {
    
    return true;
  }
}

export default AvatarSlotTableLoader;