import { EInventoryType } from "../../cms/cmsEnum";
import { GErrorCode } from "../../commonlib/gerrorCode";
import { StackTool, Tool } from "../item/equipment";
import { ItemBase } from "../item/itemBase";
import { ItemDbGuid, UserDbId } from "../typedef";

export interface AddItemTemplate {
  itemCmsId: number;
  count: number;
  durability?: number;
}

export interface AddItemResult {
  errorCode: GErrorCode;
  addItemDbGuid: ItemDbGuid;
}

export interface IInventory {
  isEmpty(): boolean;
  isFull(): boolean;
  getOwner(): UserDbId;
  getType(): EInventoryType;
  getItemByGuid(itemGuid: ItemDbGuid): ItemBase;

  validateAddItem(itemTemplate: AddItemTemplate): GErrorCode;
  validateRemoveItem(itemGuid: ItemDbGuid): GErrorCode;
  addItem(newItem: AddItemTemplate): Promise<AddItemResult>;
  removeItem(key: ItemDbGuid): Promise<GErrorCode>;

  setItemCount(itemGuid: ItemDbGuid, inCount: number): Promise<GErrorCode>;
  increaseItemCount(itemGuid: ItemDbGuid, inCount: number): Promise<GErrorCode>;
  decreaseItemCount(itemGuid: ItemDbGuid, inCount: number): Promise<GErrorCode>;
}
export { UserDbId, ItemDbGuid };
