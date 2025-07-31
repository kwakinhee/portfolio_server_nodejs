// ----------------------------------------------------------------------------
// Transaction 관련.
// ----------------------------------------------------------------------------

import { using } from "bluebird";
import { Pool, PoolConnection } from "promise-mysql";
import { getSqlConnection } from "./util";
// import glog from "../commonlib/glog";
// import gconf from "../commonlib/gconf";
import Container from "typedi";

export enum TXN_LEVEL {
  READ_UNCOMMMITED = 0,
  READ_COMMITTED = 1,
  REPEATABLE_READ = 2,
  SERIALIZABLE = 3,
}

const _DEFAULT_TIL = TXN_LEVEL.REPEATABLE_READ;
const _TXN_LEVEL_NAME = [
  "READ UNCOMMITTED",
  "READ COMMITTED",
  "REPEATABLE READ",
  "SERIALIZABLE",
];
const _REVERT_TO_DEFAULT_TIL_QUERY = `SET SESSION TRANSACTION ISOLATION LEVEL ${_TXN_LEVEL_NAME[_DEFAULT_TIL]}`;

// 일반적인 transaction.
// mysql 을 기본적으로 REPEATABLE_READ isolation level 을 사용함.
export function withTxn<T>(
  pool: Pool,
  filePath: string,
  query: (connection: PoolConnection) => Promise<T>
) {
  // http://bluebirdjs.com/docs/api/resource-management.html
  return using(getSqlConnection(pool), async (connection: PoolConnection) => {
    return connection.beginTransaction().then(async () => {
      return query(connection)
        .then((result) => {
          return connection.commit().return(result);
        })
        .catch((err) => {
          return connection.rollback().throw(err);
        });
    });
  });
}

// 특정 isonlation level 을 사용해서 transaction 을 수행.
export function withTxnEx<T>(
  pool: Pool,
  txnLevel: TXN_LEVEL,
  filePath: string,
  query: (connection: PoolConnection) => Promise<T>
) {
  if (txnLevel === TXN_LEVEL.REPEATABLE_READ) {
    return withTxn(pool, filePath, query);
  }

  const queryStr = `SET SESSION TRANSACTION ISOLATION LEVEL ${_TXN_LEVEL_NAME[txnLevel]}`;
  return using(getSqlConnection(pool), async (connection: PoolConnection) => {
    let ret;
    return connection
      .query(queryStr)
      .then(async () => {
        return connection.beginTransaction().then(async () => {
          return query(connection)
            .then((result) => {
              return connection.commit().return(result);
            })
            .then((result) => {
              ret = result;
              return connection.query(_REVERT_TO_DEFAULT_TIL_QUERY);
            })
            .catch((err) => {
              return connection.rollback().throw(err);
            });
        });
      })
      .then(() => {
        return ret;
      });
  });
}
