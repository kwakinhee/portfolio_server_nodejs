import cms, { CmsTable } from "../../cms";
import { ItemInfo, isItemStackable } from "../../cms/itemInfo";
import { AvatarItemInfo } from "../../cms/avatarItemInfo";
import { ItemBase } from "./itemBase";
import { ItemDbGuid, UserDbId } from "../inventory/IInventory";
import glog from "../../commonlib/glog";
import { Tool } from "./equipment";
import { EItemType } from "../../cms/cmsEnum";

// 아이템 생성 팩토리함수
export function createItem(
  itemCmsId: number,
  ownerDbId: UserDbId,
  itemDbGuid: ItemDbGuid,
  count: number = 1,
  attributeOptions: any = {}
): ItemBase {
  const itemTable: CmsTable<ItemInfo> = cms.Tables.Item;
  const itemInfo = itemTable[itemCmsId];

  if (!itemInfo) {
    glog.error(
      `createItem() - ItemCmsId does not exist: itemCmsId: ${itemCmsId}, count ${count}, owner: ${ownerDbId}`
    );
    return;
  }

  if (count < 1) {
    glog.error(
      `createItem() - Do not createItem with 0 count: itemCmsId: ${itemCmsId}, count ${count}, owner: ${ownerDbId}`
    );
    return;
  }

  if (!ownerDbId) {
    glog.error(
      `createItem() failed. itemCmsId: ${itemCmsId} - ownerId must exist.`
    );
    return;
  }

  if (!itemDbGuid) {
    glog.error(
      `createItem() failed. itemDbGuid: ${itemDbGuid} - itemDbGuid must exist.`
    );
    return;
  }

  // TODO: ItemType 별로 생성자 부르도록 나중에 수정.
  let item: ItemBase;

  switch (itemInfo.Type) {
    case EItemType.Tool:
      item = new Tool(
        itemCmsId,
        ownerDbId,
        itemDbGuid,
        itemInfo.Type,
        itemInfo.StringId,
        itemInfo.SubType,
        attributeOptions.durability
      );
      break;
    default:
      item = new ItemBase(
        itemCmsId,
        ownerDbId,
        itemDbGuid,
        itemInfo.Type,
        itemInfo.StringId
      );
      break;
  }

  if (!item) {
    return;
  }

  if (isItemStackable(itemCmsId)) {
    item.setCount(count);
  }

  return item;
}

// 아바타 아이템 생성 팩토리함수
export function createAvatarItem(
  avatarItemCmsId: number,
  ownerDbId: UserDbId,
  itemDbGuid: ItemDbGuid,
  count: number = 1
): ItemBase {
  const avatarItemTable: CmsTable<AvatarItemInfo> = cms.Tables.AvatarItem;
  const avatarItemInfo = avatarItemTable[avatarItemCmsId];

  if (!avatarItemInfo) {
    glog.error(
      `createItem() - avatarItemCmsId does not exist: avatarItemCmsId: ${avatarItemCmsId}, count ${count}, owner: ${ownerDbId}`
    );
    return;
  }

  if (count < 1) {
    glog.error(
      `createItem() - Do not createItem with 0 count: avatarItemCmsId: ${avatarItemCmsId}, count ${count}, owner: ${ownerDbId}`
    );
    return;
  }

  if (!ownerDbId) {
    glog.error(
      `createItem() failed. itemCmsId: ${avatarItemCmsId} - ownerId must exist.`
    );
    return;
  }

  if (!itemDbGuid) {
    glog.error(
      `createItem() failed. itemDbGuid: ${itemDbGuid} - itemDbGuid must exist.`
    );
    return;
  }

  // TODO: 추후 아바타 아이템 관련 기능이 따로 추가된다면 상속받아서 사용.
  const item = new ItemBase(
    avatarItemCmsId,
    ownerDbId,
    itemDbGuid,
    999999,
    avatarItemInfo.StringId
  );

  if (!item) {
    return;
  }

  return item;
}
