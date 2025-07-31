import cms, { CmsTable } from "../../cms";
import { EEquipSlot, EItemSubType, EItemType } from "../../cms/cmsEnum";
import { ToolItemInfo } from "../../cms/toolItemInfo";
import { GIANTSTEP } from "../../proto/worldServer/jsonProto";
import { ItemBase } from "./itemBase";
import { EDurabilityOp, IEquippable } from "./itemInterface";
import { EquipSlotId, ItemDbGuid, UserDbId } from "../typedef";

export class Tool extends ItemBase implements IEquippable {
  private _durability: number;
  readonly _equipSlotId: EquipSlotId;
  readonly _subType: EItemSubType;
  private _equipped: boolean = false;

  constructor(
    itemCmsId: number,
    ownerId: UserDbId,
    itemGuid: ItemDbGuid,
    itemType: number,
    refId: string,
    subType: EItemSubType,
    durability: number
  ) {
    super(itemCmsId, ownerId, itemGuid, itemType, refId);
    this._subType = subType;
    this._durability = durability;
    this._equipSlotId = EEquipSlot.Tool;
  }

  getEquipSlotId(): EquipSlotId {
    return this._equipSlotId;
  }

  getToolCmsInfo(): ToolItemInfo {
    const toolTable: CmsTable<ToolItemInfo> = cms.Tables.ToolByItemId;
    return toolTable[this.getItemRefId()];
  }

  getDurability(): number {
    return this._durability;
  }

  setDurability(num: number) {
    this._modifyDurability(EDurabilityOp.SET, num);
  }

  decreaseDurability(num: number) {
    this._modifyDurability(EDurabilityOp.INCREASE, num);
  }

  increaseDurability(num: number) {
    this._modifyDurability(EDurabilityOp.DECREASE, num);
  }

  _modifyDurability(op: EDurabilityOp, num: number) {
    if (op === EDurabilityOp.SET) {
      this._durability = num;
    }
    if (op === EDurabilityOp.INCREASE) {
      this._durability += num;
    }
    if (op === EDurabilityOp.DECREASE) {
      this._durability -= num;
    }

    if (this._durability < 0) {
      this._durability = 0;
    }

    if (this._durability > this.getToolCmsInfo().ToolDurability) {
      this._durability = this.getToolCmsInfo().ToolDurability;
    }
  }

  isEquippable(): boolean {
    let isEquipped: boolean = this.isEquipped();
    return !isEquipped;
  }

  isEquipped(): boolean {
    return this._equipped;
  }

  onEquipped(): void {
    // handle logic when item is equipped.
    this._equipped = true;
    return;
  }

  onUnequipped(): void {
    // handle logic when item is unequipped.
    this._equipped = false;
    return;
  }

  toMessage(): GIANTSTEP.WS.Protocol.WorldItem {
    let worldItem = GIANTSTEP.WS.Protocol.WorldItem.create();
    // 필수 데이터 기입.
    worldItem.item = GIANTSTEP.WS.Protocol.ItemEntity.create();
    worldItem.item.itemDbGuid = this.getItemDbGuid();
    worldItem.item.itemCmsId = this.getItemCmsId();
    worldItem.item.count = this.getCount();

    // Tool 개별 속성 기입.
    worldItem.toolAttr = GIANTSTEP.WS.Protocol.ToolAttributes.create();
    worldItem.toolAttr.durability = this._durability;

    return worldItem;
  }
}

export class StackTool extends ItemBase implements IEquippable {
  private _equipped: boolean = false;
  readonly equipSlotId: number;
  readonly subType: EItemSubType;

  constructor(
    itemCmsId: number,
    ownerId: UserDbId,
    itemGuid: ItemDbGuid,
    subType: EItemSubType
  ) {
    super(
      itemCmsId,
      ownerId,
      itemGuid,
      cms.Tables.Item[itemCmsId].Type,
      cms.Tables.Item[itemCmsId].StringId
    );
    this.subType = subType;
    this.equipSlotId = EEquipSlot.Tool;
  }

  getEquipSlotId(): EquipSlotId {
    return this.equipSlotId;
  }

  isEquipped(): boolean {
    return this._equipped;
  }

  isEquippable(): boolean {
    let isEquipped: boolean = this.isEquipped();
    return !isEquipped;
  }

  onEquipped(): void {
    this._equipped = true;
  }

  onUnequipped(): void {
    this._equipped = false;
  }
}

export function castToEquippableItem(item: ItemBase): Tool | StackTool | null {
  let result;

  switch (item.getItemType()) {
    case EItemType.Tool:
      result = item as Tool;
      break;
    case EItemType.StackTool:
      result = item as StackTool;
      break;
    default:
      result = null;
      break;
  }

  return result;
}
