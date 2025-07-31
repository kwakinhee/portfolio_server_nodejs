// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

import { Pool, PoolConnection } from "promise-mysql";
import spUserIdLoad from "../../sp/user/spUserIdLoad";
import spUserCreate from "../../sp/user/spUserCreate";
import { GError, GErrorCode } from "../../../commonlib/gerror";
import { TXN_LEVEL, withTxnEx } from "../../transaction";
import cms, { CmsTable } from "../../../cms";
import { CharacterInfo } from "../../../cms/characterInfo";

export interface Result {
  bIsNewUser: boolean;
}

function queryImpl(
  connection,
  userId: number,
  accountId: string,
  pubId: string,
  characterName: string,
  loginTimeUtc: number
): Promise<Result> {
  const result: Result = {
    bIsNewUser: false,
  };
  return spUserIdLoad(connection, userId)
    .then((ret) => {
      if (!ret) {
        result.bIsNewUser = true;
      }
      if (result.bIsNewUser) {
        // 캐릭터는 첫번째 cmsID 로 디펄트.
        const characterTable: CmsTable<CharacterInfo> = cms.Tables.Character;
        const characterCmsIDs = Object.keys(characterTable);
        return spUserCreate(
          connection,
          userId,
          accountId,
          pubId,
          characterName,
          parseInt(characterCmsIDs[0]),
          loginTimeUtc
        );
      }
    })
    .then(() => {
      return result;
    })
    .catch((err) => {
      if (err instanceof GError) {
        throw err;
      } else {
        throw new GError(err.message, GErrorCode.ENTER_WORLD_TXN_ERROR);
      }
    });
}

export default function txnWorldEnter(
  dbConnPool: Pool,
  userId: number,
  accountId: string,
  pubId: string,
  characterName: string,
  loginTimeUtc: number
): Promise<Result> {
  return withTxnEx(
    dbConnPool,
    TXN_LEVEL.READ_UNCOMMMITED,
    __filename,
    (connection: PoolConnection) => {
      return queryImpl(
        connection,
        userId,
        accountId,
        pubId,
        characterName,
        loginTimeUtc
      );
    }
  ) as Promise<Result>;
}
