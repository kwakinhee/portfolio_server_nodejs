// ----------------------------------------------------------------------------
// user의 character 에 대한 정보를 담은 클래스.
// 캐릭터는 user당 무조건 1개..
// ----------------------------------------------------------------------------

import { EEquipSlot } from "../cms/cmsEnum";
import {
  EquipSlotId,
  ItemCmsId,
  ItemDbGuid,
  CharacterCmsId,
  AvatarSlotId,
  CharacterAvatarSlotsMap,
  AvatarSlotMap,
} from "./typedef";
import { LoginInfo, User } from "./user";
import _ from "lodash";

export interface AvatarSlot {
  avatarSlotId: number;
  avatarItemCmsId: number;
  itemDbGuid: number;
  colorIndex: number;
}

export interface EquipItemInfo {
  itemDbGuid: ItemDbGuid;
  itemCmsId: ItemCmsId;
}

export interface EquipSlot {
  equipSlotId: EquipSlotId;
  itemDbGuid: ItemDbGuid;
  itemCmsId: ItemCmsId;
}

// ----------------------------------------------------------------------------
// 유저의 캐릭터 정보.
// ----------------------------------------------------------------------------
class UserCharacter {
  private _userId: number = 0;
  private _characterName: string = null;

  // 성별 데이터
  private _characterCmsId: number = 0;

  // 성별 데이터에 따른 아바타 슬롯 정보
  private _characterAvatarSlots: CharacterAvatarSlotsMap = new Map();

  // 월드에서 쓰는 장비 정보, 캐릭터 성별끼리 공유
  private _equipSlots: Map<EquipSlotId, EquipSlot> = new Map<
    EquipSlotId,
    EquipSlot
  >([
    [
      EEquipSlot.Tool,
      { equipSlotId: EEquipSlot.Tool, itemDbGuid: 0, itemCmsId: 0 },
    ],
  ]);

  constructor() {}

  // makeClone(): UserCharacter {
  //   const c = new UserCharacter();

  //   c.setCloneData(
  //     this._userId,
  //     this._characterName,
  //     this._characterCmsId,
  //     new Map<CharacterCmsId, AvatarSlot[]>(this._avatarSlots),
  //     new Map<EquipSlotId, EquipSlot>(this._equipSlots)
  //   );
  //   return c;
  // }

  // setCloneData(
  //   userId: number,
  //   characterName: string,
  //   characterCmsId: number,
  //   avatarSlots: Map<CharacterCmsId, AvatarSlot[]>,
  //   equipSlots: Map<EquipSlotId, EquipSlot>
  // ): void {
  //   this._userId = userId;
  //   this._characterName = characterName;
  //   this._characterCmsId = characterCmsId;
  //   this._avatarSlots = avatarSlots;
  //   this._equipSlots = equipSlots;
  // }

  initWithLoginInfo(loginInfo: LoginInfo): void {
    this._userId = loginInfo.userId;
    this._characterName = loginInfo.characterName;
    this._characterCmsId = loginInfo.characterCmsID;

    // 캐릭터 성별에 따른 아바타 정보 초기화
    this.setAvatarSlotsArrayToMap(
      loginInfo.characterCmsID,
      loginInfo.avatarSlots
    );

    // 장착정보 DB데이터로 초기화
    for (const dbResult of loginInfo.characterEquipSlots) {
      let equipInfo: EquipSlot = {
        equipSlotId: dbResult.equipSlotId,
        itemDbGuid: dbResult.itemDbGuid,
        itemCmsId: dbResult.itemCmsId,
      };
      this._equipSlots.set(dbResult.equipSlotId, equipInfo);
    }
  }

  setCharacterCmsId(characterCmsId: CharacterCmsId) {
    this._characterCmsId = characterCmsId;
  }

  resetAvatarSlot(characterCmsId: CharacterCmsId) {
    const avatarSlots: AvatarSlotMap = new Map();
    this._setAvatarSlots(characterCmsId, avatarSlots);
  }

  setAvatarSlotsArrayToMap(characterCmsId: CharacterCmsId, avatarslots: any) {
    this.resetAvatarSlot(characterCmsId);

    for (const avatarSlot of avatarslots) {
      this.setAvatarSlot(characterCmsId, avatarSlot.avatarSlotId, avatarSlot);
    }
  }

  private _setAvatarSlots(
    characterCmsId: CharacterCmsId,
    avatarSlots: AvatarSlotMap
  ) {
    this._characterAvatarSlots.set(characterCmsId, avatarSlots);
  }

  setAvatarSlot(
    characterCmsId: CharacterCmsId,
    avatarSlotId: AvatarSlotId,
    avatarSlot: AvatarSlot
  ) {
    let avatarSlots: AvatarSlotMap = this._getAvatarSlots(characterCmsId);
    if (!avatarSlots) {
      this.resetAvatarSlot(characterCmsId);
    }
    avatarSlots.set(avatarSlotId, avatarSlot);
  }

  getSyncData(): any {
    const ret = {
      characterName: this._characterName,
      characterCmsId: this._characterCmsId,
      avatarSlots: this.getAvatarSlotsMapToArray(this._characterCmsId),
      equipmentSlots: this.getEquipmentList(),
    };

    return ret;
  }

  private _getAvatarSlots(characterCmsId: CharacterCmsId): AvatarSlotMap {
    return this._characterAvatarSlots.get(characterCmsId);
  }

  getAvatarSlot(
    characterCmsId: CharacterCmsId,
    avatarSlotId: AvatarSlotId
  ): AvatarSlot {
    const avatarSlots: AvatarSlotMap = this._getAvatarSlots(characterCmsId);
    if (!avatarSlots) {
      return;
    }
    return avatarSlots.get(avatarSlotId);
  }

  getAvatarSlotsMapToArray(characterCmsId: CharacterCmsId): AvatarSlot[] {
    const avatarSlots: AvatarSlotMap = this._getAvatarSlots(characterCmsId);
    if (!avatarSlots) {
      return;
    }
    return Array.from(avatarSlots.values());
  }

  getCharacterCmsId(): CharacterCmsId {
    return this._characterCmsId;
  }

  getCharacterName(): string {
    return this._characterName;
  }

  getEquipmentList(): EquipSlot[] {
    return Array.from(this._equipSlots.values());
  }

  getEquipmentBySlotId(equipSlotId: EquipSlotId): EquipSlot {
    return this._equipSlots.get(equipSlotId);
  }

  setEquipment(equipSlotId: EquipSlotId, equipItem: EquipItemInfo): ItemDbGuid {
    let { itemDbGuid, itemCmsId } = this._equipSlots.get(equipSlotId);

    let equipSlot: EquipSlot = { equipSlotId: equipSlotId, ...equipItem };
    this._equipSlots.set(equipSlotId, equipSlot);

    return itemDbGuid;
  }
}

// ----------------------------------------------------------------------------
// Exports.
// ----------------------------------------------------------------------------

export default UserCharacter;
