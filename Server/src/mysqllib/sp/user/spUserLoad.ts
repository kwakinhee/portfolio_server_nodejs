// ----------------------------------------------------------------------------
// user 정보 가져오기.
// ----------------------------------------------------------------------------

import * as queryGenerator from "../../queryGenerator";
import { GErrorCode } from "../../../commonlib/gerror";
import {
  StorageUpgradeModel,
  ItemModel,
} from "./item/spItemLoadByInventoryType";
import { EquipmentSlotModel } from "./item/spEquipmentSlotLoad";
import { AvatarSlotModel } from "./item/spAvatarSlotLoad";

export const spName = "p_user_load";
export const errorCode = GErrorCode.USER_LOAD_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export interface LoadUserResult {
  userId: number;
  accountId: string;
  characterName: string;
  characterCmsID: number;

  // 아바타 장착 정보
  avatarSlots: AvatarSlotModel[];

  // 아바타 인벤토리 정보
  avatarInventoryItems: ItemModel[];

  // 월드 인벤토리 정보
  storageData: StorageUpgradeModel[];
  worldInventoryItems: ItemModel[];

  // 월드 장착정보
  characterEquipSlots: EquipmentSlotModel[];
}

export default function (
  connection: queryGenerator.Connection,
  userId: number
): Promise<LoadUserResult> {
  return spFunction(connection, userId)
    .then((qr) => {
      const rows = qr.rows;
      let rowIndex = 0;
      const userData = rows[rowIndex][0];

      rowIndex += 1;
      const characterData = rows[rowIndex][0];

      rowIndex += 1;
      const avatarSlots = rows[rowIndex];

      rowIndex += 1;
      const avatarInventoryItems = rows[rowIndex];

      rowIndex += 1;
      const storageData = rows[rowIndex];

      rowIndex += 1;
      const worldInventoryItems = rows[rowIndex];

      rowIndex += 1;
      const equipmentSlots = rows[rowIndex];

      return {
        userId: userData.userId,
        accountId: userData.accountId,
        characterName: userData.characterName,
        characterCmsID:
          undefined === characterData
            ? undefined
            : characterData.characterCmsId,
        avatarSlots,
        avatarInventoryItems,
        storageData: storageData,
        worldInventoryItems: worldInventoryItems,
        characterEquipSlots: equipmentSlots,
      };
    })
    .catch(catchHandler);
}
