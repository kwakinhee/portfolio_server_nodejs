import glog from "../../commonlib/glog";
import TableLoader from "./tableLoader";
import { ObjectItemInfo } from "../objectItemInfo";
import Tables from "./tables";

export class ObjectItemTableLoader extends TableLoader<ObjectItemInfo> {
  constructor() {
    super("Object");
  }

  public loadInternal(data: ObjectItemInfo): boolean {
    return true;
  }

  public postLoadInternal(data: ObjectItemInfo): boolean {
    return true;
  }

  protected makeReference(data: ObjectItemInfo): boolean {
    const itemData = Tables.get().ItemTableLoader.FindByStringId(data.ItemId);
    if (itemData == null) {
      glog.error(`[${this.typeName}TableLoader] Invalid Reference data. Id:${data.Id}, StringId:${data.StringId}, ItemId:${data.ItemId}`);
      return false;
    }

    if (itemData.ObjectData != null) {
      glog.error(`[${this.typeName}TableLoader] Already set Item ObjectData. Id:${data.Id}, StringId:${data.StringId}, ItemId:${data.ItemId}`);
      return false;
    }

    data.ItemInfo = itemData;
    itemData.ObjectData = data;

    return true;
  }
}

export default ObjectItemTableLoader;