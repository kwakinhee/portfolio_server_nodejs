import glog from "../../commonlib/glog";
import { AvatarItemInfo } from "../../cms/avatarItemInfo";
import { ItemBase } from "../item/itemBase";
import cms, { CmsTable } from "../../cms";
import { ItemInsertParam } from "../../mysqllib/sp/user/item/spItemInsert";
import { ItemDeleteParam } from "../../mysqllib/sp/user/item/spItemDeleteByItemDbGuid";
import {
  ItemLoadResult,
  ItemModel,
} from "../../mysqllib/sp/user/item/spItemLoadByInventoryType";
import { ItemRepository } from "../item/itemRepository";
import { GErrorCode } from "../../commonlib/gerrorCode";
import { AddItemResult, AddItemTemplate, IInventory } from "./IInventory";
import { createAvatarItem } from "../item/itemFactory";
import { EInventoryType } from "../../cms/cmsEnum";
import { ItemCmsId, ItemDbGuid } from "../typedef";
import { LoginInfo } from "../user";

// 아바타 인벤토리는 일단 무제한..
export const DEFAULT_AVATAR_INVENTORY_SLOT_COUNT = 999999;

enum EAvatarInventoryOp {
  SET,
  INCREASE,
  DECREASE,
}

export class AvatarInventory implements IInventory {
  private _itemRepository: ItemRepository;
  private _ownerDbId: number;
  private _capacity: number = DEFAULT_AVATAR_INVENTORY_SLOT_COUNT;
  private _type: number = EInventoryType.AvatarInventory;

  // Item Container
  private _itemList: Map<ItemDbGuid, ItemBase> = new Map<
    ItemDbGuid,
    ItemBase
  >();

  constructor(persistence) {
    this._itemRepository = persistence;
  }

  getCapacity(): number {
    return this._capacity;
  }

  getAllItemsGuid(): ItemDbGuid[] {
    return [...this._itemList.keys()];
  }

  initWithLoginInfo(loginInfo: LoginInfo) {
    this._ownerDbId = loginInfo.userId;
    this.initializeAvatarInventoryWithDB({
      items: loginInfo.avatarInventoryItems,
    });
  }

  initializeAvatarInventoryWithDB(initDBData: ItemLoadResult) {
    let result = false;
    if (initDBData.items.length) {
      result = this._initializeItems(initDBData.items);
    }
    return result;
  }

  private _clear() {
    this._itemList.clear();
    this._capacity = DEFAULT_AVATAR_INVENTORY_SLOT_COUNT;
  }

  private _initializeItems(itemsFromDB: ItemModel[]): boolean {
    this._itemList.clear();

    const avatarItemTable: CmsTable<AvatarItemInfo> = cms.Tables.AvatarItem;

    for (const item of itemsFromDB) {
      const avatarItemInfo = avatarItemTable[item.itemCmsId];
      if (!avatarItemInfo) {
        glog.error(
          `AvatarInventory._initializeItems() failed. invalid itemCmsId: ${item.itemCmsId} does not exist in cmsTable.`
        );
        //TODO: 현재는 데이터테이블과 DB가 안맞는 경우 그냥 스킵. 정상적으로 진행함.
        // this._clear();
        // return;
        continue;
      }

      const newAvatarItem = createAvatarItem(
        item.itemCmsId,
        this._ownerDbId,
        item.itemDbGuid,
        item.count
      );

      this._itemList.set(item.itemDbGuid, newAvatarItem);
    }

    return true;
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
    if (this.isEmpty()) {
      return 0;
    }
    return this._itemList.size;
  }

  getAvailableSlotCount(): number {
    return this._capacity - this.getUsedSlotCount();
  }

  private _validateCapacity(addItemTemplate: AddItemTemplate): boolean {
    return this.getAvailableSlotCount() > 0;
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

    //TODO: additional checks on item to store?
    return true;
  }

  private _validateItemCmsId(itemCmsId: ItemCmsId): boolean {
    let item = cms.Tables.AvatarItem[itemCmsId];
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
      return GErrorCode.AVATAR_INVENTORY_CAPACITY_FULL;
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
        errorCodes: GErrorCode[validationError],
        ...addItemTemplate,
      });
      return { errorCode: validationError, addItemDbGuid: 0 };
    }

    const newItemCmsId = addItemTemplate.itemCmsId;

    const userItemUpdateParam: ItemInsertParam = {
      userDbId: this.getOwner(),
      itemCmsId: newItemCmsId,
      inventoryType: this.getType(),
      count: addItemTemplate.count,
      durability: 0,
    };

    const itemDbGuid = await this._itemRepository.insertItem(
      userItemUpdateParam
    );

    // Update in-memory avatarInventory
    let newItem = createAvatarItem(
      addItemTemplate.itemCmsId,
      this.getOwner(),
      itemDbGuid,
      addItemTemplate.count
    );
    this._itemList.set(itemDbGuid, newItem);

    return { errorCode: GErrorCode.OK, addItemDbGuid: itemDbGuid };
  }

  validateRemoveItem(itemGuid: ItemDbGuid): GErrorCode {
    if (!this.getItemByGuid(itemGuid)) {
      return GErrorCode.AVATAR_INVENTORY_ITEM_GUID_DOES_NOT_EXIST;
    }
    return GErrorCode.OK;
  }

  // Unstackable한 아이템에 deleteTime을 넣어서 삭제하는 함수
  // Stack이 가능한 아이템은 decreaseItemCount 활용
  async removeItem(itemGuid: ItemDbGuid): Promise<GErrorCode> {
    let removeItem = this._itemList.get(itemGuid);
    if (!removeItem) {
      glog.error(
        `inventory.removeItem() failed. User${this.getOwner()} does not have itemGuid ${itemGuid}`
      );
      return;
    }

    const result = this.validateRemoveItem(itemGuid);
    if (result !== GErrorCode.OK) {
      glog.error(`validateRemoveItem failed.`, {
        errorCodes: GErrorCode[result],
        itemGuid,
      });
      return result;
    }

    // await DB Query
    let param: ItemDeleteParam = {
      itemDbGuid: itemGuid,
    };
    return this._itemRepository.deleteItemByItemDbGuid(param).then(() => {
      this._itemList.delete(itemGuid);
      return GErrorCode.OK;
    });
  }

  getItemByGuid(itemGuid: ItemDbGuid): ItemBase {
    return this._itemList.get(itemGuid);
  }

  // ----------------------------------------------------------------------------
  // 가방안에 있는 아이템 수량 변경 (하기전에 validation 필수)
  // ----------------------------------------------------------------------------

  async setItemCount(
    itemGuid: ItemDbGuid,
    inCount: number
  ): Promise<GErrorCode> {
    return GErrorCode.OK;
  }

  async increaseItemCount(
    itemGuid: ItemDbGuid,
    inCount: number
  ): Promise<GErrorCode> {
    return GErrorCode.OK;
  }

  async decreaseItemCount(
    itemGuid: ItemDbGuid,
    inCount: number
  ): Promise<GErrorCode> {
    return GErrorCode.OK;
  }

  // _validateModifyItemCount(itemGuid: ItemDbGuid, count: number) {
  //   const errorCodes: GErrorCode[] = [];
  //   if (!this._itemList.get(itemGuid)) {
  //     errorCodes.push(GErrorCode.AVATAR_INVENTORY_ITEM_GUID_DOES_NOT_EXIST);
  //   }
  //   if (isNaN(count) || count < 0) {
  //     errorCodes.push(GErrorCode.ITEM_INVALID_ITEM_COUNT);
  //   }
  //   return errorCodes;
  // }

  private async _modifyItemCount(
    op: EAvatarInventoryOp,
    itemDbGuid: ItemDbGuid,
    inCount: number
  ): Promise<GErrorCode[] | GErrorCode.OK> {
    return GErrorCode.OK;
  }

  getItemList(): ItemBase[] {
    return Array.from(this._itemList.values());
  }
}
