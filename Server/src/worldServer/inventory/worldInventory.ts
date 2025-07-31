import glog from "../../commonlib/glog";
import { isItemStackable, ItemInfo } from "../../cms/itemInfo";
import cms, { CmsTable } from "../../cms";
import { ItemInsertParam } from "../../mysqllib/sp/user/item/spItemInsert";
import { ItemUpdateCountParam } from "../../mysqllib/sp/user/item/spItemUpdateCountByItemDbGuid";
import { ItemDeleteParam } from "../../mysqllib/sp/user/item/spItemDeleteByItemDbGuid";
import {
  StorageUpgradeModel,
  ItemLoadResult,
  ItemModel,
} from "../../mysqllib/sp/user/item/spItemLoadByInventoryType";
import { GErrorCode } from "../../commonlib/gerrorCode";
import { AddItemResult, AddItemTemplate, IInventory } from "./IInventory";
import { createItem } from "../item/itemFactory";
import { EInventoryType, EItemType } from "../../cms/cmsEnum";
import { ItemCmsId, ItemDbGuid } from "../typedef";
import { ItemBase } from "../item/itemBase";
import { LoginInfo } from "../user";
import { ItemRepository } from "../item/itemRepository";
import { castToEquippableItem } from "../item/equipment";

export const DEFAULT_WORLD_INVENTORY_SLOT_COUNT = 230;

enum EInventoryOP {
  SET,
  INCREASE,
  DECREASE,
}

export class WorldInventory implements IInventory {
  private _itemRepository: ItemRepository;
  private _ownerDbId: number;

  // TODO 최대치 조정은 항상 기본값에서 추가될 Delta값을 DB에 저장하고.
  // DB에서도 delta값 저장하지말고 추가된 데이터 계속해서 추가하는 방식으로.
  private _capacity: number;
  private _type: number = EInventoryType.WorldInventory;

  // Item Container
  private _itemList: Map<ItemDbGuid, ItemBase> = new Map<
    ItemDbGuid,
    ItemBase
  >();

  // 스택가능한 아이템 ItemCmsID로 ItemGuid 찾기
  private _stackedItemsList: Map<ItemCmsId, ItemDbGuid> = new Map<
    ItemCmsId,
    ItemDbGuid
  >();

  constructor(persistence, defaultCapacity: number) {
    this._itemRepository = persistence;
    this._capacity = defaultCapacity;
  }

  setOwnerId(id: number) {
    this._ownerDbId = id;
  }

  getCapacity(): number {
    return this._capacity;
  }

  getAllItemsGuid(): ItemDbGuid[] {
    return [...this._itemList.keys()];
  }

  initWithLoginInfo(loginInfo: LoginInfo) {
    this._ownerDbId = loginInfo.userId;
    this.initializeContentWithDB({
      storageData: loginInfo.storageData,
      items: loginInfo.worldInventoryItems,
    });
  }

  initializeContentWithDB(initDBData: ItemLoadResult) {
    this._initializeCapacity(initDBData.storageData);

    let result = false;
    if (initDBData.items.length) {
      result = this._initializeItems(initDBData.items);
    }
    return result;
  }

  private _initializeCapacity(storageInfo: StorageUpgradeModel[]) {
    for (const info of storageInfo) {
      this._capacity += info.upgrade;
    }
    glog.verbose("initialize inventory capacity...", {
      defaultCapacity: DEFAULT_WORLD_INVENTORY_SLOT_COUNT,
      upgradedCapacity: this._capacity,
    });
  }

  private _clear() {
    this._itemList.clear();
    this._stackedItemsList.clear();
    this._capacity = DEFAULT_WORLD_INVENTORY_SLOT_COUNT;
  }

  private _initializeItems(itemsFromDB: ItemModel[]): boolean {
    this._itemList.clear();
    this._stackedItemsList.clear();

    for (const item of itemsFromDB) {
      const itemTable: CmsTable<ItemInfo> = cms.Tables.Item;
      const itemInfo = itemTable[item.itemCmsId];

      if (!itemInfo) {
        glog.error(
          `WorldInventory._initializeItems() failed. invalid itemCmsId: ${item.itemCmsId}`
        );
        //TODO: 현재는 데이터테이블과 DB가 안맞는 경우 그냥 스킵. 정상적으로 진행함.
        // this._clear();
        // return;
        continue;
      }

      const newItem = createItem(
        item.itemCmsId,
        this._ownerDbId,
        item.itemDbGuid,
        item.count,
        { durability: item.durability }
      );

      this._itemList.set(item.itemDbGuid, newItem);
      if (isItemStackable(item.itemCmsId)) {
        this._stackedItemsList.set(item.itemCmsId, item.itemDbGuid);
      }
    }

    return true;
  }

  getItemByGuid(itemGuid: ItemDbGuid): ItemBase {
    let item = this._itemList.get(itemGuid);
    return item;
  }

  getStackedItemByCmsId(itemCmsId: ItemCmsId): ItemBase {
    const itemInfo = cms.Tables.Item[itemCmsId];
    if (!itemInfo) {
      glog.error(
        `findStackedItemByCmsId() failed.: invalid ItemCmsId: ${itemCmsId}.`
      );
      return;
    }

    if (!isItemStackable(itemCmsId)) {
      glog.error(
        `findStackedItemByCmsId() failed.: ItemCmsId: [${itemCmsId}] is not stackable items.`
      );
      return;
    }
    const itemGuid = this._stackedItemsList.get(itemCmsId);
    return this._itemList.get(itemGuid);
  }

  getOwner(): number {
    return this._ownerDbId;
  }

  getType(): EInventoryType {
    return this._type;
  }

  isEmpty(): boolean {
    return this._itemList.size === 0;
  }

  isFull(): boolean {
    return this.getAvailableSlotCount() === 0;
  }

  getUsedSlotCount(): number {
    // 현재 가방에 남아있는 슬롯 갯수 return
    let slotCount = 0;
    for (const [_, item] of this._itemList) {
      const cmsId: ItemCmsId = item.getItemCmsId();
      const itemInfo = cms.Tables.Item[cmsId];

      slotCount += Math.floor(item.getCount() / itemInfo.MaxStackableCount);
      slotCount += item.getCount() % itemInfo.MaxStackableCount ? 1 : 0;
    }
    return slotCount;
  }

  getAvailableSlotCount(): number {
    return this._capacity - this.getUsedSlotCount();
  }

  private _calculateSlotsUsed(itemCount: number, maxStackCount: number) {
    if (itemCount < 1) {
      return 0;
    }

    let slotsUsed = 0;

    while (itemCount > 0) {
      if (itemCount <= maxStackCount) {
        slotsUsed++;
        break;
      } else {
        slotsUsed++;
        itemCount -= maxStackCount;
      }
    }
    return slotsUsed;
  }

  private _validateCapacity(addItemTemplate: AddItemTemplate): boolean {
    const newItemInfo = cms.Tables.Item[addItemTemplate.itemCmsId];
    if (!isItemStackable(addItemTemplate.itemCmsId)) {
      return this.getAvailableSlotCount() > 0;
    }

    const existItem = this.getStackedItemByCmsId(addItemTemplate.itemCmsId);
    let existingCount = existItem ? existItem.getCount() : 0;

    let neededSlotCount = this._calculateSlotsUsed(
      addItemTemplate.count + existingCount,
      newItemInfo.MaxStackableCount
    );

    if (neededSlotCount <= this.getAvailableSlotCount()) {
      return true;
    }
    return false;
  }

  private _validateItemCount(addItemTemplate: AddItemTemplate): boolean {
    if (isNaN(addItemTemplate.count)) {
      glog.error(
        `inventory._modifyItemCount() failed. itemCount ${addItemTemplate.count} is NaN.`
      );
      return;
    }

    if (addItemTemplate.count < 1) {
      glog.warn(`_validateItemToStore() failed. cannot store 0 count of item.`);
      return false;
    }

    if (
      !isItemStackable(addItemTemplate.itemCmsId) &&
      addItemTemplate.count != 1
    ) {
      glog.warn(
        "_validateItemToStore() failed. UnStackableItem count must be 1"
      );
      return false;
    }
    //TODO: additional checks on item to store?
    return true;
  }

  private _validateItemCmsId(itemCmsId: ItemCmsId): boolean {
    let item = cms.Tables.Item[itemCmsId];
    return item !== undefined;
  }

  validateAddItem(addItemTemplate: AddItemTemplate): GErrorCode {
    if (!this._validateItemCmsId(addItemTemplate.itemCmsId)) {
      return GErrorCode.ITEM_INVALID_ITEM_CMSID;
    }

    if (!this._validateItemCount(addItemTemplate)) {
      return GErrorCode.INVALID_ITEM_COUNT;
    }

    if (!this._validateCapacity(addItemTemplate)) {
      return GErrorCode.WORLD_INVENTORY_CAPACITY_FULL;
    }

    return GErrorCode.OK;
  }

  // UPDATE DB FIRST!!
  // validation 실패에 대한 분기처리를 위해 validation은 외부에서 하고
  // addItem에서 나는 에러는 모두 Exception화
  // 왜 실패했는지 꼭 return
  // ErrorCode를 리턴 vs Throw 수정여부.
  // Item 습득중 플래그 처리 필요.

  async addItem(addItemTemplate: AddItemTemplate): Promise<AddItemResult> {
    if (!addItemTemplate) {
      glog.error(`inventory.storeItem() failed. itemTemplate is not valid.`, {
        itemTemplate: addItemTemplate,
      });
      return {
        errorCode: GErrorCode.ITEM_INVALID_ITEM_CMSID,
        addItemDbGuid: 0,
      };
    }

    const validationError = this.validateAddItem(addItemTemplate);
    if (validationError !== GErrorCode.OK) {
      glog.error(`validateAddItem failed.`, {
        errorCode: GErrorCode[validationError],
        ...addItemTemplate,
      });
      return { errorCode: validationError, addItemDbGuid: 0 };
    }

    const isStackable: boolean = isItemStackable(addItemTemplate.itemCmsId);
    const newItemCmsId = addItemTemplate.itemCmsId;

    // Stackable && 해당 아이템이 이미 존재하는 경우에만 기존 Guid 업데이트.
    if (isStackable) {
      let exist: ItemBase;
      exist = this.getStackedItemByCmsId(newItemCmsId);
      if (exist) {
        const result = await this.increaseItemCount(
          exist.getItemDbGuid(),
          addItemTemplate.count
        );
        return { errorCode: result, addItemDbGuid: exist.getItemDbGuid() };
      }
    }

    const itemInsertParam: ItemInsertParam = {
      userDbId: this.getOwner(),
      itemCmsId: newItemCmsId,
      inventoryType: this.getType(),
      count: addItemTemplate.count,
      durability:
        addItemTemplate.durability !== undefined
          ? addItemTemplate.durability
          : 0,
    };

    const itemDbGuid = await this._itemRepository.insertItem(itemInsertParam);

    // Update in-memory world inventory
    let newItem = createItem(
      addItemTemplate.itemCmsId,
      this.getOwner(),
      itemDbGuid,
      addItemTemplate.count,
      { durability: itemInsertParam.durability }
    );
    this._itemList.set(itemDbGuid, newItem);
    if (newItem.isStackable()) {
      this._stackedItemsList.set(newItem.getItemCmsId(), itemDbGuid);
    }
    return { errorCode: GErrorCode.OK, addItemDbGuid: itemDbGuid };
  }

  validateRemoveItem(itemDbGuid: ItemDbGuid, count: number = 1): GErrorCode {
    if (isNaN(count) || count < 1) {
      return GErrorCode.INVALID_ITEM_COUNT;
    }

    const itemToRemove = this.getItemByGuid(itemDbGuid);

    if (!itemToRemove) {
      return GErrorCode.WORLD_INVENTORY_ITEM_GUID_DOES_NOT_EXIST;
    }

    const cmsId = this.getItemByGuid(itemDbGuid).getItemCmsId();
    const itemInfo: ItemInfo = cms.Tables.Item[cmsId];

    if (itemInfo.bForceBind) {
      return GErrorCode.INVALID_ITEM_REMOVE_ITEM_NOT_REMOVABLE;
    }

    if (!itemToRemove.isStackable() && count > 1) {
      return GErrorCode.INVALID_ITEM_COUNT;
    }

    if (
      itemToRemove.getItemType() == EItemType.Tool ||
      itemToRemove.getItemType() == EItemType.StackTool
    ) {
      const equipmentToRemove = castToEquippableItem(itemToRemove);
      if (equipmentToRemove.isEquipped()) {
        return GErrorCode.INVALID_ITEM_REMOVE_EQUIPPED_ITEM;
      }
    }

    // TODO Check if Item is equipped. Equipment 관련 구조가 나오면 추가해야 함.
    return GErrorCode.OK;
  }

  // 인벤토리에서 아이템을 빼는 행위
  // UnstackableItem은 count를 빼고 사용.
  // StackableItem은 count를 원하는 값을 인자로 받음.
  async removeItem(
    itemGuid: ItemDbGuid,
    count: number = 1
  ): Promise<GErrorCode> {
    let removeItem = this._itemList.get(itemGuid);
    if (!removeItem) {
      glog.error(
        `inventory.removeItem() failed. User${this.getOwner()} does not have itemGuid ${itemGuid}`
      );
      return;
    }

    const validationError = this.validateRemoveItem(itemGuid, count);

    if (validationError !== GErrorCode.OK) {
      glog.error(`validateRemoveItem failed.`, {
        errorCode: GErrorCode[validationError],
        itemGuid,
      });
      return validationError;
    }

    // 아이템 개수가 1 이상을 경우에만 decreaseItemCount 그외엔 deleteItemByGuid를 실행.
    const isDecreaseItemCount = removeItem.getCount() - count > 0;

    if (removeItem.isStackable() && isDecreaseItemCount) {
      return this.decreaseItemCount(itemGuid, count);
    }

    // await DB Query
    let param: ItemDeleteParam = {
      itemDbGuid: itemGuid,
    };

    await this._itemRepository.deleteItemByItemDbGuid(param);
    this._itemList.delete(itemGuid);

    return GErrorCode.OK;
  }

  // ----------------------------------------------------------------------------
  // 가방안에 있는 아이템 수량 변경 (하기전에 validation 필수)
  // ----------------------------------------------------------------------------

  async setItemCount(
    itemGuid: ItemDbGuid,
    inCount: number
  ): Promise<GErrorCode> {
    return this._modifyItemCount(EInventoryOP.SET, itemGuid, inCount);
  }

  async increaseItemCount(
    itemGuid: ItemDbGuid,
    inCount: number
  ): Promise<GErrorCode> {
    return this._modifyItemCount(EInventoryOP.INCREASE, itemGuid, inCount);
  }

  async decreaseItemCount(
    itemGuid: ItemDbGuid,
    inCount: number
  ): Promise<GErrorCode> {
    return this._modifyItemCount(EInventoryOP.DECREASE, itemGuid, inCount);
  }

  _validateModifyItemCount(itemGuid: ItemDbGuid, count: number): GErrorCode {
    if (!this._itemList.get(itemGuid)) {
      return GErrorCode.WORLD_INVENTORY_ITEM_GUID_DOES_NOT_EXIST;
    }
    if (isNaN(count) || count < 0) {
      return GErrorCode.INVALID_ITEM_COUNT;
    }
    return GErrorCode.OK;
  }

  private async _modifyItemCount(
    op: EInventoryOP,
    itemDbGuid: ItemDbGuid,
    inCount: number
  ): Promise<GErrorCode> {
    const validationError = this._validateModifyItemCount(itemDbGuid, inCount);
    if (validationError !== GErrorCode.OK) {
      glog.error(`_validateModifyItemCount failed.`, {
        errorCode: GErrorCode[validationError],
        itemDbGuid,
      });
      return validationError;
    }

    let newCount = 0;
    const existingCount = this._itemList.get(itemDbGuid).getCount();

    if (op === EInventoryOP.SET) {
      newCount = inCount;
    }

    if (op === EInventoryOP.INCREASE) {
      newCount = existingCount + inCount;
    }

    if (op === EInventoryOP.DECREASE) {
      newCount = existingCount - inCount;
    }

    if (newCount < 0) {
      newCount = 0;
    }

    let param: ItemUpdateCountParam = {
      itemDbGuid: itemDbGuid,
      count: newCount,
    };

    await this._itemRepository.updateItemCount(param);
    let item = this.getItemByGuid(itemDbGuid);
    item.setCount(newCount);

    if (newCount === 0) {
      this._itemList.delete(itemDbGuid);
    }

    return GErrorCode.OK;
  }

  getItemList(): ItemBase[] {
    return Array.from(this._itemList.values());
  }
}
