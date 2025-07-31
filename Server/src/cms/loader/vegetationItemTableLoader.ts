import glog from "../../commonlib/glog";
import TableLoader from "./tableLoader";
import { Tables } from "./tables";
import { VegetationItemInfo } from "../vegetationItemInfo";

export class VegetationItemTableLoader extends TableLoader<VegetationItemInfo> {
  constructor() {
    super("Vegetation");
  }

  public loadInternal(data: VegetationItemInfo): boolean {
    if (!data.Active)
    {
      return false;
    }

    return true;
  }

  public postLoadInternal(data: VegetationItemInfo): boolean {
    return true;
  }

  protected makeReference(data: VegetationItemInfo): boolean {
    const itemData = Tables.get().ItemTableLoader.FindByStringId(data.ItemId);
    if (itemData == null) {
      glog.error(`[${this.typeName}TableLoader] Invalid Reference data. Id:${data.Id}, StringId:${data.StringId}, ItemId:${data.ItemId}`);
      return false;
    }

    if (itemData.VegetationData != null) {
      glog.error(`[${this.typeName}TableLoader] Already set Item VegetationData. Id:${data.Id}, StringId:${data.StringId}, ItemId:${data.ItemId}`);
      return false;
    }

    data.ItemInfo = itemData;
    itemData.VegetationData = data;

    return true;
  }
}

export default VegetationItemTableLoader;