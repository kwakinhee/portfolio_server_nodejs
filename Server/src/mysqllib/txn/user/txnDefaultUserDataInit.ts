import { Pool, PoolConnection } from "promise-mysql";
import spAvatarSlotsUpdate, {
  AvatarSlotChangeParam,
} from "../../sp/user/item/spAvatarSlotUpdate";
import { GError, GErrorCode } from "../../../commonlib/gerror";
import { TXN_LEVEL, withTxnEx } from "../../transaction";
import cms, { CmsTable } from "../../../cms";
import { DefaultAvatarSlotInfo } from "../../../cms/defaultAvatarSlotInfo";
import { DefaultAvatarItemInfo } from "../../../cms/defaultAvatarItemInfo";
import _ from "lodash";
import { AvatarItemInfo } from "../../../cms/avatarItemInfo";
import { AvatarCategoryInfo } from "../../../cms/avatarCategoryInfo";
import { AvatarSlotInfo } from "../../../cms/avatarSlotInfo";
import { EInventoryType, EItemType } from "../../../cms/cmsEnum";

import spItemInsert, { ItemInsertParam } from "../../sp/user/item/spItemInsert";
import { ItemInfo } from "../../../cms/itemInfo";
import { DefaultWorldInventoryItemInfo } from "../../../cms/defaultWorldInventoryItemInfo";

// TODO: 추후 데이터테이블 -> 임시 디펄트 DB 테이블로 복사후 반복문을 돌리지않고 SP 한번 호출로 세팅.
function queryImpl(connection, userId: number): Promise<any[]> {
  // 디펄트 아바타 슬롯 세팅.
  const defaultAvatarSlotTable: CmsTable<DefaultAvatarSlotInfo> =
    cms.Tables.DefaultAvatarSlot;

  const avatarItemByStringId: CmsTable<AvatarItemInfo> =
    cms.Tables.AvatarItemByStringId;

  const avatarCategoryByStringIdTable: CmsTable<AvatarCategoryInfo> =
    cms.Tables.AvatarCategoryByStringId;

  const avatarSlotByStringIdTable: CmsTable<AvatarSlotInfo> =
    cms.Tables.AvatarSlotByStringId;

  const promises = [];

  _.forOwn(
    defaultAvatarSlotTable,
    (defaultAvatarSlotInfo: DefaultAvatarSlotInfo) => {
      const avatarItemInfo =
        avatarItemByStringId[defaultAvatarSlotInfo.AvatarItemId];

      if (!avatarItemInfo) {
        throw new Error(`${defaultAvatarSlotInfo.AvatarItemId} is not valid!`);
      }

      const avatarCategoryRefId: string = avatarItemInfo.AvatarCategoryId;

      const avatarCategoryInfo =
        avatarCategoryByStringIdTable[avatarCategoryRefId];

      if (!avatarCategoryInfo) {
        throw new Error(
          `${defaultAvatarSlotInfo.AvatarItemId}, ${avatarCategoryRefId} is not valid!`
        );
      }
      const avatarSlotRefId: string = avatarCategoryInfo.AvatarSlotId;

      let id = defaultAvatarSlotInfo.AvatarItemId;

      let itemInfo = avatarItemByStringId[id];
      if (!itemInfo) {
        throw new Error(`${id} is not valid!`);
      }

      id = defaultAvatarSlotInfo.AvatarItemId;
      itemInfo = avatarItemByStringId[id];
      if (!itemInfo) {
        throw new Error(`${id} is not valid!`);
      }

      const userItemUpdateParam: ItemInsertParam = {
        userDbId: userId,
        itemCmsId: avatarItemByStringId[defaultAvatarSlotInfo.AvatarItemId].Id,
        inventoryType: EInventoryType.AvatarInventory,
        count: 1,
        durability: 0,
      };

      const promise = spItemInsert(connection, userItemUpdateParam).then(
        (itemDbGuid) => {
          const avatarSlotChangeParam: AvatarSlotChangeParam = {
            avatarSlotId: avatarSlotByStringIdTable[avatarSlotRefId].Id,
            avatarItemCmsId:
              avatarItemByStringId[defaultAvatarSlotInfo.AvatarItemId].Id,
            itemDbGuid,
            colorIndex: 0,
          };

          return spAvatarSlotsUpdate(
            connection,
            userId,
            defaultAvatarSlotInfo.CharacterId,
            avatarSlotChangeParam
          );
        }
      );

      promises.push(promise);
    }
  );

  return Promise.all(promises)
    .then(() => {
      // 디펄트 아바타 아이템 인벤토리 세팅.
      const defaultAvatarItemInfoTable: CmsTable<DefaultAvatarItemInfo> =
        cms.Tables.DefaultAvatarItem;

      const promises = [];
      _.forOwn(
        defaultAvatarItemInfoTable,
        (defaultAvatarItemInfo: DefaultAvatarItemInfo) => {
          let id = defaultAvatarItemInfo.AvatarItemId;
          let itemInfo = avatarItemByStringId[id];
          if (!itemInfo) {
            throw new Error(`${id} is not valid!`);
          }

          const userItemInsertParam: ItemInsertParam = {
            userDbId: userId,
            itemCmsId:
              avatarItemByStringId[defaultAvatarItemInfo.AvatarItemId].Id,
            inventoryType: EInventoryType.AvatarInventory,
            count: 1,
            durability: 0,
          };

          promises.push(spItemInsert(connection, userItemInsertParam));
        }
      );

      return Promise.all(promises);
    })
    .then(() => {
      const itemInfoTableByRefId: CmsTable<ItemInfo> =
        cms.Tables.ItemByStringId;
      // 디펄트 아이템 월드 인벤토리 세팅.
      const defaultitemTable: CmsTable<DefaultWorldInventoryItemInfo> =
        cms.Tables.DefaultItem;

      const promises = [];

      _.forOwn(
        defaultitemTable,
        (defaultItemInfo: DefaultWorldInventoryItemInfo) => {
          let defaultItemStringId = defaultItemInfo.StringId;

          let itemInfo = itemInfoTableByRefId[defaultItemStringId];

          if (!itemInfo) {
            throw new Error(`${defaultItemStringId} is not valid`);
          }

          if (itemInfo.MaxStackableCount == 1) {
            const singleItemInsertParam: ItemInsertParam = {
              userDbId: userId,
              itemCmsId: itemInfoTableByRefId[defaultItemInfo.StringId].Id,
              inventoryType: EInventoryType.WorldInventory,
              count: 1,
              durability: defaultItemInfo.Durability,
            };

            for (let i = 0; i < defaultItemInfo.Count; ++i) {
              promises.push(spItemInsert(connection, singleItemInsertParam));
            }
          } else {
            const userItemUpdateParam: ItemInsertParam = {
              userDbId: userId,
              itemCmsId: itemInfoTableByRefId[defaultItemInfo.StringId].Id,
              inventoryType: EInventoryType.WorldInventory,
              count: defaultItemInfo.Count,
              durability: defaultItemInfo.Durability,
            };

            promises.push(spItemInsert(connection, userItemUpdateParam));
          }
        }
      );
      return Promise.all(promises);
    })
    .then(() => {
      return null;
    })
    .catch((err: Error) => {
      if (err instanceof GError) {
        throw err;
      } else {
        throw new GError(
          err.message,
          GErrorCode.INIT_DEFAULT_USER_DATA_INIT_TXN_ERROR,
          {},
          err.stack
        );
      }
    });
}

export default function txnDefaultUserDataInit(
  dbConnPool: Pool,
  userId: number
): Promise<any> {
  return withTxnEx(
    dbConnPool,
    TXN_LEVEL.REPEATABLE_READ,
    __filename,
    (connection: PoolConnection) => {
      return queryImpl(connection, userId);
    }
  );
}
