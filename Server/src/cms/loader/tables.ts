import ItemTableLoader from "./itemTableLoader";
import ToolItemTableLoader from "./toolItemTableLoader";
import AccountTableLoader from "./accountTableLoader";
import AvatarCategoryTableLoader from "./avatarCategoryTableLoader";
import AvatarItemTableLoader from "./avatarItemTableLoader";
import AvatarSlotTableLoader from "./avatarSlotTableLoader";
import CharacterTableLoader from "./characterTableLoader";
import DefaultAvatarItemTableLoader from "./defaultAvatarItemTableLoader";
import DefaultAvatarSlotTableLoader from "./defaultAvatarSlotTableLoader";
import HairColorTableLoader from "./hairColorTableLoader";
import ObjectItemTableLoader from "./objectItemTableLoader";
import VegetationItemTableLoader from "./vegetationItemTableLoader";
import DefaultItemTableLoader from "./defaultItemTableLoader";

export class Tables {
  private static instance: Tables;

  public ItemTableLoader: ItemTableLoader = new ItemTableLoader();
  public ToolItemTableLoader: ToolItemTableLoader = new ToolItemTableLoader();
  public AccountTableLoader: AccountTableLoader = new AccountTableLoader();
  public AvatarCategoryTableLoader: AvatarCategoryTableLoader =
    new AvatarCategoryTableLoader();
  public AvatarItemTableLoader: AvatarItemTableLoader =
    new AvatarItemTableLoader();
  public AvatarSlotTableLoader: AvatarSlotTableLoader =
    new AvatarSlotTableLoader();
  public CharacterTableLoader: CharacterTableLoader =
    new CharacterTableLoader();
  public DefaultAvatarItemTableLoader: DefaultAvatarItemTableLoader =
    new DefaultAvatarItemTableLoader();
  public DefaultAvatarSlotTableLoader: DefaultAvatarSlotTableLoader =
    new DefaultAvatarSlotTableLoader();
  public HairColorTableLoader: HairColorTableLoader =
    new HairColorTableLoader();
  public ObjectItemTableLoader: ObjectItemTableLoader =
    new ObjectItemTableLoader();
  public VegetationItemTableLoader: VegetationItemTableLoader =
    new VegetationItemTableLoader();
  public DefaultItemTableLoader: DefaultItemTableLoader =
    new DefaultItemTableLoader();

  public static get(): Tables {
    if (!Tables.instance) {
      Tables.instance = new Tables();
    }
    return Tables.instance;
  }

  public load(): boolean {
    let failed: boolean = false;
    failed = !this.ItemTableLoader.load();
    failed = !this.AccountTableLoader.load() || failed;
    failed = !this.AvatarCategoryTableLoader.load() || failed;
    failed = !this.AvatarItemTableLoader.load() || failed;
    failed = !this.AvatarSlotTableLoader.load() || failed;
    failed = !this.CharacterTableLoader.load() || failed;
    failed = !this.DefaultAvatarItemTableLoader.load() || failed;
    failed = !this.DefaultAvatarSlotTableLoader.load() || failed;
    failed = !this.DefaultItemTableLoader.load() || failed;
    failed = !this.HairColorTableLoader.load() || failed;
    failed = !this.ObjectItemTableLoader.load() || failed;
    failed = !this.ToolItemTableLoader.load() || failed;
    failed = !this.VegetationItemTableLoader.load() || failed;
    return !failed;
  }

  public postLoad(): boolean {
    let failed: boolean = false;
    failed = !this.ItemTableLoader.postLoad();
    failed = !this.AccountTableLoader.postLoad() || failed;
    failed = !this.AvatarCategoryTableLoader.postLoad() || failed;
    failed = !this.AvatarItemTableLoader.postLoad() || failed;
    failed = !this.AvatarSlotTableLoader.postLoad() || failed;
    failed = !this.CharacterTableLoader.postLoad() || failed;
    failed = !this.DefaultAvatarItemTableLoader.postLoad() || failed;
    failed = !this.DefaultAvatarSlotTableLoader.postLoad() || failed;
    failed = !this.DefaultItemTableLoader.postLoad() || failed;
    failed = !this.HairColorTableLoader.postLoad() || failed;
    failed = !this.ObjectItemTableLoader.postLoad() || failed;
    failed = !this.ToolItemTableLoader.postLoad() || failed;
    failed = !this.VegetationItemTableLoader.postLoad() || failed;
    return !failed;
  }
}

export default Tables;
// export const cmsTableManager = new Tables();
