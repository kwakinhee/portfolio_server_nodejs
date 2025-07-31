// -------------------------------------------------------------------------------------------------
// https://www.npmjs.com/package/ioredis
// -------------------------------------------------------------------------------------------------

import "reflect-metadata";
import _ from "lodash";
import Redis from "ioredis";
import genericPool from "generic-pool";
import * as crypto from "crypto";
import * as scriptLoader from "./scriptLoader";
import * as redisError from "./redisError";
import glog from "../commonlib/glog";
import { Service } from "typedi";

// ----------------------------------------------------------------------------
// Private functions.
// ----------------------------------------------------------------------------

export function generateRedisFunction(
  redisPool: RedisConnPool,
  redisCmd: string
) {
  //  glog.debug('[TEMP] generating redis function : ', redisCmd);
  return function bridge() {
    let redisConn = null;
    const redisArgs = arguments;
    return redisPool
      .acquire()
      .then((conn: Redis) => {
        redisConn = conn;

        const procedure: Function = redisConn[redisCmd];
        return procedure.apply(redisConn, redisArgs);
      })
      .then((result: any) => {
        redisPool.release(redisConn);
        return result;
      })
      .catch((err: { message: string }) => {
        if (redisConn) {
          redisPool.release(redisConn);
        }

        glog.error("redis error occurred during calling redis script ", {
          cmd: redisCmd,
        });

        if (err instanceof (Redis as any).ReplyError) {
          // Convert to merror.
          throw redisError.convertToGError(err.message);
        }

        throw err;
      });
  };
}

// ----------------------------------------------------------------------------
// Redis connection pool class.
// ----------------------------------------------------------------------------
@Service()
export default class RedisConnPool {
  public poolImpl: genericPool.Pool<Redis> = null;
  private name: string = null;

  async init(name: string, poolCfg: any) {
    this.name = name;

    glog.info(`redis pool (${name}) initializing ...`, { poolCfg });

    // Load and register lua script functions.
    const scripts = await scriptLoader.loadDir(poolCfg.scriptDir);

    // ioredis 에서 스크립트의 sha1 접근을 허용하지 않아서, 여기서 임시로 만들어 출력.
    for (const functionName of Object.keys(scripts)) {
      const scriptSha1 = crypto
        .createHash("sha1")
        .update(scripts[functionName].content)
        .digest("hex");
      glog.info("[redis-sha1-to-lua]", {
        functionName,
        sha1: scriptSha1,
      });
    }

    // Create pool.
    this.poolImpl = genericPool.createPool(
      {
        create: () => {
          return new Promise<Redis>((resolve, reject) => {
            const redisConn = new Redis(poolCfg.redisCfg);
            for (const functionName of Object.keys(scripts)) {
              const elem = scripts[functionName];
              redisConn.defineCommand(functionName, {
                numberOfKeys: 0,
                lua: elem.content,
              });
            }
            redisConn.on("connect", () => {
              // glog.debug('[TEMP] ioredis connect');
            });
            redisConn.on("ready", () => {
              // glog.debug('[TEMP] ioredis ready');
              resolve(redisConn);
            });
            redisConn.on("error", (err) => {
              glog.error("ioredis err: ", { error: err.message });
              reject(err);
            });
            redisConn.on("close", () => {
              // glog.debug('[TEMP] ioredis close');
            });
            redisConn.on("reconnecting", () => {
              // glog.debug('[TEMP] ioredis reconnecting');
            });
            redisConn.on("end", () => {
              // glog.debug('[TEMP] ioredis end');
            });
          });
        },
        destroy: (redisConn_2) => {
          return redisConn_2.quit().then((value) => {});
        },
      },
      poolCfg.pool
    );

    // Register redis built-in functions.
    const tempRedisCfg = Object.assign({}, poolCfg.redisCfg, {
      lazyConnect: true,
    });
    const tempRedis = new Redis(tempRedisCfg);
    const redisCommands = tempRedis.getBuiltinCommands();
    _.forEach(redisCommands, (redisCmd) => {
      this[redisCmd] = generateRedisFunction(this, redisCmd);
    });

    // Register lua script functions.
    const functionNames = Object.keys(scripts);
    _.forEach(functionNames, (functionName_1) => {
      this[functionName_1] = generateRedisFunction(this, functionName_1);
    });
    glog.info(`redis pool (${name}) initialized`);
  }

  async destroy() {
    await this.poolImpl.drain();
    await this.poolImpl.clear();
    glog.info(`redis pool (${this.name}) destroyed`);
  }

  async acquire(priority?: number) {
    return this.poolImpl.acquire(priority);
  }

  async release(resource: Redis) {
    return this.poolImpl.release(resource);
  }

  async drain() {
    return this.poolImpl.drain();
  }

  async clear() {
    return this.poolImpl.clear();
  }
}
