import glog from "../../commonlib/glog";
import TableLoader from "./tableLoader";
import { ItemInfo } from "../itemInfo";

export class ItemTableLoader extends TableLoader<ItemInfo> {
  constructor() {
    super("Item");
  }

  public loadInternal(data: ItemInfo): boolean {
    if (data.SellPrice > data.BuyPrice)
    {
      glog.error(`Item Sell price over Buy price.`);
      return false;
    }

    return true;
  }

  public postLoadInternal(data: ItemInfo): boolean {
    return true;
  }

  protected makeReference(data: ItemInfo): boolean {
    return true;
  }
}

export default ItemTableLoader;