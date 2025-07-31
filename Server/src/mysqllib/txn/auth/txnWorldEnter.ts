// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

import { Pool, PoolConnection } from "promise-mysql";
import { GError, GErrorCode } from "../../../commonlib/gerror";
//import paWorldUserLoadUserId from '../sp/paWorldUserLoadUserId';
import spAccountLastServerGroupIdAndLastWorldUpdate from "../../sp/auth/spAccountLastServerGroupIdAndLastWorldUpdate";
import spPubIdCreate from "../../sp/auth/spPubIdCreate";
import spPubIdLoad from "../../sp/auth/spPubIdLoad";
import spServerGroupUserUserIdLoad from "../../sp/auth/spServerGroupUserUserIdLoad";
import glog from "../../../commonlib/glog";
import { TXN_LEVEL, withTxnEx } from "../../transaction";

export interface Result {
  userId: number;
  pubId: string;
}

function queryImpl(
  connection: PoolConnection,
  accountId: string,
  pubId: string,
  serverGroupId: string,
  worldServerId: string
): Promise<Result> {
  let dbPubId;
  //TODO: 퍼블리싱, 서버 그룹별 계정 관련 테이블 정보 조회도 추가예정.
  return spAccountLastServerGroupIdAndLastWorldUpdate(
    connection,
    accountId,
    serverGroupId,
    worldServerId
  )
    .then(() => {
      return spPubIdLoad(connection, accountId, serverGroupId);
    })
    .then((inDbPubId) => {
      dbPubId = inDbPubId;
      if (!dbPubId) {
        dbPubId = pubId;
        glog.info("txnWorldEnter create pub id", {
          accountId,
          pubId,
          serverGroupId,
          worldServerId,
        });
        return spPubIdCreate(connection, accountId, pubId, serverGroupId);
      } else {
        return spServerGroupUserUserIdLoad(connection, dbPubId);
      }
    })
    .then((inUserId) => {
      return {
        userId: inUserId,
        pubId: dbPubId,
      };
    })
    .catch((err) => {
      if (err instanceof GError) {
        throw err;
      } else {
        throw new GError(err.message, GErrorCode.AUTH_ENTER_WORLD_TXN_ERROR);
      }
    });
}

export default function txnWorldEnter(
  dbConnPool: Pool,
  accountId: string,
  pubId: string,
  serverGroupId: string,
  worldServerId: string
): Promise<Result> {
  return withTxnEx(
    dbConnPool,
    TXN_LEVEL.REPEATABLE_READ,
    __filename,
    (connection: PoolConnection) => {
      return queryImpl(
        connection,
        accountId,
        pubId,
        serverGroupId,
        worldServerId
      );
    }
  );
}
