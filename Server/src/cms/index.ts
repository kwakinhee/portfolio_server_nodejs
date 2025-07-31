// -------------------------------------------------------------------------------------------------
// 각 서버에서 사용할 Table Data 를 관리하는 cms(contents manager system)
// -------------------------------------------------------------------------------------------------
import fs from "fs";
import path from "path";
import glog from "../commonlib/glog";
import { AccountInfo } from "./accountInfo";
import { AvatarCategoryInfo } from "./avatarCategoryInfo";
import { AvatarItemInfo } from "./avatarItemInfo";
import { CharacterInfo } from "./characterInfo";
import { ItemInfo } from "./itemInfo";
import { ToolItemInfo } from "./toolItemInfo";
import { VegetationItemInfo } from "./vegetationItemInfo";
import { ObjectItemInfo } from "./objectItemInfo";
import { AvatarSlotInfo } from "./avatarSlotInfo";
import { DefaultAvatarSlotInfo } from "./defaultAvatarSlotInfo";
import { DefaultAvatarItemInfo } from "./defaultAvatarItemInfo";
import { DefaultWorldInventoryItemInfo } from "./defaultWorldInventoryItemInfo";
import { HairColorInfo } from "./hairColorInfo";

const cmsRoot = path.resolve(
  path.join(__dirname, "..", "..", "..", "Table", "json")
);

export interface CmsTable<T> {
  [id: string]: T;
}

export interface CmsTables {
  Account: CmsTable<AccountInfo>;
  Character: CmsTable<CharacterInfo>;

  Item: CmsTable<ItemInfo>;
  ItemByStringId: CmsTable<ItemInfo>;

  Tool: CmsTable<ToolItemInfo>;
  Vegetation: CmsTable<VegetationItemInfo>;

  Object: CmsTable<ObjectItemInfo>;
  ObjectByStringId: CmsTable<ObjectItemInfo>;

  // 아바타 아이템 CMS 테이블
  AvatarSlot: CmsTable<AvatarSlotInfo>;
  AvatarSlotByStringId: CmsTable<AvatarSlotInfo>;

  AvatarCategory: CmsTable<AvatarCategoryInfo>;
  AvatarCategoryByStringId: CmsTable<AvatarCategoryInfo>;

  AvatarItem: CmsTable<AvatarItemInfo>;
  AvatarItemByStringId: CmsTable<AvatarItemInfo>;

  HairColor: CmsTable<HairColorInfo>;
  HairColorByStringId: CmsTable<HairColorInfo>;

  // Default Table
  DefaultAvatarSlot: CmsTable<DefaultAvatarSlotInfo>;
  DefaultAvatarItem: CmsTable<DefaultAvatarItemInfo>;
  DefaultItem: CmsTable<DefaultWorldInventoryItemInfo>;

  [tableName: string]: any;
}

class Cms {
  private _tables: any = {};
  constructor() {}

  get Tables() {
    return this._tables as CmsTables;
  }

  loadCms() {
    glog.verbose("Start cms(contents manager system) loading");

    const files = fs.readdirSync(cmsRoot);
    files.forEach((fileName) => {
      const filePath = path.join(cmsRoot, fileName);
      if (fs.statSync(filePath).isFile()) {
        this._loadFile(filePath, fileName);
      }
    });
  }

  private _loadFile(filePath: string, fileName: string) {
    const file = fs.readFileSync(filePath, "utf8");
    try {
      const json = JSON.parse(file);

      let tableName = fileName.replace(".json", "");

      // 스키마 검증.
      // throw Error
      // 1) 컨텐츠 파일의 내용이 스키마와 다를 경우
      // 2) 컨텐츠 파일명으로 정의된 스키마가 없는 경우
      // cmsValidator.validate(tableName, json);
      this._tables[tableName] = json;
    } catch (err) {
      throw new Error(`failed to parse '${filePath}': ${err.message}`);
    }
  }
}

const cms = new Cms();
export default cms;
