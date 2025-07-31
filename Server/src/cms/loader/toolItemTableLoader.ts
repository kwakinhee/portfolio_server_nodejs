import glog from "../../commonlib/glog";
import TableLoader from "./tableLoader";
import { ToolItemInfo } from "../toolItemInfo";
import { Tables } from "./tables";

export class ToolItemTableLoader extends TableLoader<ToolItemInfo> {
  constructor() {
    super("Tool", false);
  }

  public loadInternal(data: ToolItemInfo): boolean {
    if (!data.Active)
    {
      return false;
    }

    return true;
  }

  public postLoadInternal(data: ToolItemInfo): boolean {
    return true;
  }

  protected makeReference(data: ToolItemInfo): boolean {
    const itemData = Tables.get().ItemTableLoader.FindByStringId(data.ItemId);
    if (itemData == null) {
      glog.error(`[${this.typeName}TableLoader] Invalid Reference data. Id:${data.Id}, StringId:${data.StringId}, ItemId:${data.ItemId}`);
      return false;
    }

    if (itemData.ToolData != null) {
      glog.error(`[${this.typeName}TableLoader] Already set Item ToolData. Id:${data.Id}, StringId:${data.StringId}, ItemId:${data.ItemId}`);
      return false;
    }

    data.ItemInfo = itemData;
    itemData.ToolData = data;

    return true;
  }
}

export default ToolItemTableLoader;