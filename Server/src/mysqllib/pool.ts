// ----------------------------------------------------------------------------
// Sql connection 관련 클래스.
// ----------------------------------------------------------------------------

import mysql, { PoolConfig } from "promise-mysql";
import { Service } from "typedi";

@Service()
export class DBConnPool {
  private _pool: any = null;
  private _queries = {};

  async init(cfg: string | PoolConfig) {
    if (!this._pool) {
      this._pool = await mysql.createPool(cfg);
    }

    return this._pool;
  }

  async destroy() {
    if (this._pool) {
      await this._pool.end();
    }
  }

  getPool() {
    return this._pool;
  }

  async query(queryName: string, ...args: any[]) {
    let queryFunction = this._queries[queryName];
    if (!queryFunction) {
      queryFunction = require(`./txn/${queryName}.js`);
      this._queries[queryName] = queryFunction;
    }

    return queryFunction.call(this, this._pool, ...args);
  }
}
