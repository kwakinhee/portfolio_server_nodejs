import { isItemStackable, ItemInfo } from "../../cms/itemInfo";
import { GIANTSTEP } from "../../proto/worldServer/jsonProto";
import { ItemCmsId, ItemDbGuid, UserDbId } from "../typedef";

export class ItemBase {
  private _itemDbGuid: ItemDbGuid;
  private _cmsId: ItemCmsId;
  private _refId: string;
  private _ownerDbId: UserDbId;
  private _count: number;
  private _itemType: number;

  constructor(
    itemCmsId: number,
    ownerId: UserDbId,
    itemGuid: ItemDbGuid,
    itemType: number,
    refId: string
  ) {
    this._cmsId = itemCmsId;
    this._refId = refId;
    this._ownerDbId = ownerId;
    this._itemDbGuid = itemGuid;
    this._itemType = itemType;

    this.setCount(1);
    return this;
  }

  getItemType(): number {
    return this._itemType;
  }

  getItemDbGuid(): ItemDbGuid {
    return this._itemDbGuid;
  }

  getItemCmsId(): ItemCmsId {
    return this._cmsId;
  }

  getItemRefId(): string {
    return this._refId;
  }

  setOwnerDbId(userId: UserDbId) {
    this._ownerDbId = userId;
    return true;
  }

  getOwner(): UserDbId {
    return this._ownerDbId;
  }

  setCount(cnt: number): void {
    this._count = cnt;
  }

  getCount(): number {
    return this._count;
  }

  isStackable(): boolean {
    return isItemStackable(this.getItemCmsId());
  }

  toMessage(): GIANTSTEP.WS.Protocol.WorldItem {
    // 필수 데이터 기입.
    let worldItem = GIANTSTEP.WS.Protocol.WorldItem.create();
    worldItem.item = GIANTSTEP.WS.Protocol.ItemEntity.create();

    worldItem.item.itemDbGuid = this.getItemDbGuid();
    worldItem.item.itemCmsId = this.getItemCmsId();
    worldItem.item.count = this.getCount();

    return worldItem;
  }
}
