import spItemInsert, {
  ItemInsertParam,
} from "../../mysqllib/sp/user/item/spItemInsert";
import spItemUpdateCountByItemDbGuid, {
  ItemUpdateCountParam,
} from "../../mysqllib/sp/user/item/spItemUpdateCountByItemDbGuid";
import { DBConnPool } from "../../mysqllib/pool";
import Container, { Service } from "typedi";
import spItemDeleteByItemDbGuid, {
  ItemDeleteParam,
} from "../../mysqllib/sp/user/item/spItemDeleteByItemDbGuid";
import spItemLoadByInventoryType, {
  ItemLoadParam,
  ItemLoadResult,
} from "../../mysqllib/sp/user/item/spItemLoadByInventoryType";

//--------------------
// 유저 아이템 관련 프로시저 호출 싱글톤
//--------------------
@Service()
export class ItemRepository {
  updateItemCount(param: ItemUpdateCountParam): Promise<void> {
    return spItemUpdateCountByItemDbGuid(
      Container.of("user").get(DBConnPool).getPool(),
      param
    );
  }

  insertItem(param: ItemInsertParam): Promise<number> {
    return spItemInsert(Container.of("user").get(DBConnPool).getPool(), param);
  }

  deleteItemByItemDbGuid(param: ItemDeleteParam): Promise<void> {
    return spItemDeleteByItemDbGuid(
      Container.of("user").get(DBConnPool).getPool(),
      param
    );
  }

  loadItemsByInventoryType(param: ItemLoadParam): Promise<ItemLoadResult> {
    return spItemLoadByInventoryType(
      Container.of("user").get(DBConnPool).getPool(),
      param
    );
  }
}
