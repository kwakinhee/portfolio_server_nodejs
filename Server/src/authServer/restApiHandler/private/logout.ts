// // ----------------------------------------------------------------------------

// // ----------------------------------------------------------------------------

import txnLogout from "../../../mysqllib/txn/auth/txnLogout";
import Container from "typedi";
import { DBConnPool } from "../../../mysqllib/pool";
import glog from "../../../commonlib/glog";
import { RequestAs, ResponseAs } from "../../../commonlib/gexpressEx";
import * as gutil from "../../../commonlib/gutil";
import { GError, GErrorCode } from "../../../commonlib/gerror";
import RedisConnPool from "../../../redislib/connPool";

interface RequestBody {
  accountId: string;
}

// authApiClient 에서 요청.
export = async (req: RequestAs<RequestBody>, res: ResponseAs<{}>) => {
  glog.info("/logout", req.body);

  const { accountId }: RequestBody = req.body;
  const dbConnPool = Container.of("auth").get(DBConnPool);

  return txnLogout(dbConnPool.getPool(), accountId)
    .then(() => {
      const curTimeUtcInsec = gutil.curTimeUtcInSec();
      // const minHeartBeatTs = curTimeUtcInsec - gconf.userHeartBeatIntervalSec;
      const userCacheRedis = Container.get(RedisConnPool);
      return userCacheRedis["updateUserHeartBeatWhenLogout"](
        accountId,
        curTimeUtcInsec
      );
    })
    .then(() => {
      res.end();
    })
    .catch((error: Error) => {
      throw new GError(error.message, GErrorCode.AUTH_API_LOGOUT_ERROR);
    });
};
