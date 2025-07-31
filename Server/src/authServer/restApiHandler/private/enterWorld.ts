// // ----------------------------------------------------------------------------

// // ----------------------------------------------------------------------------

import Container from "typedi";
import txnWorldEnter from "../../../mysqllib/txn/auth/txnWorldEnter";
import glog from "../../../commonlib/glog";
import { RequestAs, ResponseAs } from "../../../commonlib/gexpressEx";
import * as gutil from "../../../commonlib/gutil";
import gconf from "../../../commonlib/gconf";
import { GError, GErrorCode } from "../../../commonlib/gerror";
import * as kicker from "../../kicker";
import { KICK_REASON } from "../../../commonlib/genum";
import { AuthService } from "../../server";

interface RequestBody {
  isDevLogin?: boolean;
  accountId: string;
  serverGroupId: string; // 서비스군의 groupId
  enterWorldToken: string;
  worldServerId: string; // world server app id
}

interface Response {
  bValidEnterWorldToken: boolean;
  accountId?: string;
  pubId?: string; // (editor:accountId + : +  serverGroupId)
  userId?: number;
}

export = (req: RequestAs<RequestBody>, res: ResponseAs<{}>) => {
  const {
    isDevLogin,
    accountId,
    serverGroupId,
    enterWorldToken,
    worldServerId,
  }: RequestBody = req.body;
  glog.info("/enterWorld", req.body);

  const { authDBConnPool, userCacheRedis } = Container.get(AuthService);

  const resp: Response = {
    bValidEnterWorldToken: true,
  };

  const curTimeUtcInSec = gutil.curTimeUtcInSec();
  return Promise.resolve()
    .then(() => {
      // TODO: 외부 퍼블리셔 & 내부 UNION 멤버쉽인증.
      if (isDevLogin) {
        resp.accountId = accountId;
        resp.pubId = accountId + ":" + serverGroupId;
      } else {
        throw new Error("enterWorld - isDevLogin is false");
      }

      // 각월드 서버에 HearBeat를 바탕으로 중복 로그인 체크.
      // 월드별 중복으로 접속해 있는 유저 체크.
      const minHeartBeatTs = curTimeUtcInSec - gconf.userHeartBeatIntervalSec;
      return userCacheRedis["getUserHeartBeatWithWorldInfo"](
        resp.accountId,
        minHeartBeatTs
      );
    })
    .then((heartBeatInfoStr) => {
      const heartBeatInfo = JSON.parse(heartBeatInfoStr);
      if (
        heartBeatInfo.ret &&
        heartBeatInfo.lastUserId &&
        heartBeatInfo.lastWorldAppId
      ) {
        glog.warn("/user is still online", {
          accountId: resp.accountId,
          userId: heartBeatInfo.lastUserId,
          lastWorldAppId: heartBeatInfo.lastWorldAppId,
        });

        return kicker.kick(
          heartBeatInfo.lastUserId,
          heartBeatInfo.lastWorldAppId,
          KICK_REASON.DUPLICATE_LOGIN
        );
      }
      return null;
    })
    .then(() => {
      const minTokenTs = curTimeUtcInSec - gconf.enterWorldTokenExpireSec;
      return userCacheRedis["getEnterWorldToken"](resp.accountId, minTokenTs);
    })
    .then((token: string[] | null) => {
      if (!token || token[0] !== enterWorldToken) {
        // 중복 로그인 또는 토큰 만료.
        glog.warn("invalid enter world token", {
          storedEnterWorldToken: token ? token[0] : null,
          enterWorldToken,
          body: req.body,
        });
        resp.bValidEnterWorldToken = false;
        return null;
      }

      return txnWorldEnter(
        authDBConnPool.getPool(),
        resp.accountId,
        resp.pubId,
        serverGroupId,
        worldServerId
      );
    })
    .then((result) => {
      if (resp.bValidEnterWorldToken) {
        resp.userId = result.userId;
        resp.pubId = result.pubId;
        return userCacheRedis["updateUserHeartBeat"](
          resp.accountId,
          curTimeUtcInSec
        );
      }
      return null;
    })
    .then(() => {
      res.json(resp);
    })
    .catch((error: Error) => {
      glog.error("exception:", error);
      if (error instanceof GError) {
        throw error;
      } else {
        throw new GError(error.message, GErrorCode.AUTH_ENTER_WORLD_ERROR);
      }
    });
};
