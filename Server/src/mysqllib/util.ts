// ----------------------------------------------------------------------------
// 쿼리 호출을 위한 util.
// ----------------------------------------------------------------------------

import { Pool, PoolConnection } from "promise-mysql";
import glog from "../commonlib/glog";
import gconf from "../commonlib/gconf";
import _ from "lodash";

export interface QueryResult {
  rc: number;
  rows: any[];
}

// ----------------------------------------------------------------------------
// Constants.
// ----------------------------------------------------------------------------

export const DefaultQueryResult = { rc: 0, rows: [] };

// ----------------------------------------------------------------------------
// Private functions.
// ----------------------------------------------------------------------------

function reduceRows(rows): QueryResult {
  if (!Array.isArray(rows)) {
    // No rows to return.
    return DefaultQueryResult;
  }

  // The last row is always the query result.
  const sliced = rows.slice(0, rows.length - 1);

  let rc = 0;

  const reduced = sliced.filter((row) => {
    if (row.length > 0 && row[0].rc) {
      rc = parseInt(row[0].rc, 10);
      return false;
    }

    return true;
  });

  return {
    rc,
    rows: reduced,
  };
}

// ----------------------------------------------------------------------------
// Public functions.
// ----------------------------------------------------------------------------

export const query = (dbConn, sql): Promise<QueryResult> => {
  return dbConn.query(sql).then((rows) => {
    glog.debug("mysql query result", {
      sql,
      rows,
    });

    return reduceRows(rows);
  });
};

// http://bluebirdjs.com/docs/api/disposer.html
export const getSqlConnection = (dbConnPool: Pool) => {
  return dbConnPool.getConnection().disposer((connection: PoolConnection) => {
    connection.release();
  });
};
