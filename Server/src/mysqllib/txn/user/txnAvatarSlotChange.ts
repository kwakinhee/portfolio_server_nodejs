import { Pool, PoolConnection } from "promise-mysql";
import spAvatarSlotsReset from "../../sp/user/item/spAvatarSlotReset";
// import spAvatarSlotsLoad from "../../sp/user/item/spAvatarSlotLoad";
import spAvatarSlotsUpdate, {
  AvatarSlotChangeParam,
} from "../../sp/user/item/spAvatarSlotUpdate";
import spCharacterUpdate from "../../sp/user/spCharacterUpdate";
import { GError, GErrorCode } from "../../../commonlib/gerror";
import { TXN_LEVEL, withTxnEx } from "../../transaction";

function queryImpl(
  connection,
  userId: number,
  characterCmsId: number,
  avatarSlotChanges: any[]
): Promise<any[]> {
  return spAvatarSlotsReset(connection, userId, characterCmsId)
    .then(() => {
      const promises = [];
      for (const avatarSlotChange of avatarSlotChanges) {
        const avatarSlotChangeParam: AvatarSlotChangeParam = {
          avatarSlotId: avatarSlotChange.avatarSlotId,
          avatarItemCmsId: avatarSlotChange.avatarItemCmsId,
          itemDbGuid: avatarSlotChange.itemDbGuid,
          colorIndex: avatarSlotChange.colorIndex,
        };
        promises.push(
          spAvatarSlotsUpdate(
            connection,
            userId,
            characterCmsId,
            avatarSlotChangeParam
          )
        );
      }

      return Promise.all(promises);
    })
    .then(() => {
      return spCharacterUpdate(connection, userId, characterCmsId);
    })
    .then(() => {
      return null;
    })
    .catch((err) => {
      if (err instanceof GError) {
        throw err;
      } else {
        throw new GError(err.message, GErrorCode.CHANGE_AVATAR_SLOT_TXN_ERROR);
      }
    });
}

export default function txnAvatarSlotChange(
  dbConnPool: Pool,
  userId: number,
  characterCmsId: number,
  avatarSlotChanges: any[]
): Promise<any> {
  return withTxnEx(
    dbConnPool,
    TXN_LEVEL.REPEATABLE_READ,
    __filename,
    (connection: PoolConnection) => {
      return queryImpl(connection, userId, characterCmsId, avatarSlotChanges);
    }
  );
}
