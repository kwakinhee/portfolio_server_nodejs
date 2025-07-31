import Container from "typedi";
import { ItemRepository } from "../item/itemRepository";
import {
  DEFAULT_WORLD_INVENTORY_SLOT_COUNT,
  WorldInventory,
} from "./worldInventory";
import glog from "../../commonlib/glog";
import { AvatarInventory } from "./avatarInventory";

export class UserInventory {
  public worldInventory: WorldInventory;
  public avatarInventory: AvatarInventory;
  public storageInventory;

  constructor() {
    this._initWorldInventory();
    this._initAvatarInventory();

    // TODO: 개발 완료 후 초기화
    // this.initStorageInventory();
  }
  private _initWorldInventory() {
    this.worldInventory = new WorldInventory(
      Container.get(ItemRepository),
      DEFAULT_WORLD_INVENTORY_SLOT_COUNT
    );
  }

  private _initAvatarInventory() {
    this.avatarInventory = new AvatarInventory(Container.get(ItemRepository));
  }

  private _initStorageInventory() {
    glog.warn("needs to implement stroageInventory");
  }
}
