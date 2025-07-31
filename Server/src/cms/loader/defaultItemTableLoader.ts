import TableLoader from "./tableLoader";
import { DefaultWorldInventoryItemInfo } from "../defaultWorldInventoryItemInfo";
import Tables from "./tables";
import glog from "../../commonlib/glog";

export class DefaultItemTableLoader extends TableLoader<DefaultWorldInventoryItemInfo> {
  constructor() {
    super("DefaultItem", false);
  }

  public loadInternal(data: DefaultWorldInventoryItemInfo): boolean {
    return true;
  }

  public postLoadInternal(data: DefaultWorldInventoryItemInfo): boolean {
    return true;
  }

  protected makeReference(data: DefaultWorldInventoryItemInfo): boolean {
    const itemData = Tables.get().ItemTableLoader.FindByStringId(data.StringId);
    if (itemData == null) {
      glog.error(
        `[${this.typeName}TableLoader] Invalid Reference data. Id:${data.Id}, ItemId:${data.StringId}`
      );
      return false;
    }

    data.ItemData = itemData;
    return true;
  }
}

export default DefaultItemTableLoader;
