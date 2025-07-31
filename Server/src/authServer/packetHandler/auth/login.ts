import { GIANTSTEP } from "../../../proto/authServer/jsonProto";
import { User, LoginInfo } from "../../user";
import glog from "../../../commonlib/glog";
import Container from "typedi";
import * as gutil from "../../../commonlib/gutil";
import { GError, GErrorCode } from "../../../commonlib/gerror";
import _ from "lodash";
import * as kicker from "../../kicker";
import { AuthService } from "../../server";
import txnLogin, {
  Result as AuthLoginResult,
} from "../../../mysqllib/txn/auth/txnLogin";
import { KICK_REASON } from "../../../commonlib/genum";

export = (user: User, request: any): Promise<boolean> => {
  const reqBody: any = request.toJSON();
  glog.debug("/login userAccountId:", reqBody);
  const cqLogin: GIANTSTEP.AS.Protocol.CQ_Login = request;
  const accountId = cqLogin.accountId;
  const clientVersion = cqLogin.clientVersion;
  const loginPlatform = cqLogin.loginPlatform;

  // validate request parameters
  if (!accountId || !clientVersion || !loginPlatform) {
    throw new GError(
      "/login INVALID_REQ_BODY_PARAMETER",
      GErrorCode.INVALID_REQ_BODY_PARAMETER
    );
  }

  const curTimeUtcInSec = gutil.curTimeUtcInSec();

  // TODO: 외부 로그인 퍼블리셔 , UNION 계정 확인.
  // TODO: 추후 플랫폼에 따라 분기.
  return Promise.resolve()
    .then(() => {
      const krPattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      const blankPattern = /[\s]/g;
      if (krPattern.test(accountId) || blankPattern.test(accountId)) {
        throw new GError(
          "invaild-id",
          GErrorCode.AUTH_INVALID_ACCOUNT_ID,
          accountId
        );
      }

      const { authDBConnPool } = Container.get(AuthService);
      //TODO: 추후 UNION 또는 외부 퍼블리셔 DB에 존재유무 검증후 신규 회원인지 판단해야함.
      return txnLogin(
        authDBConnPool.getPool(),
        accountId,
        curTimeUtcInSec,
        loginPlatform,
        clientVersion
      );
    })
    .then((loginDbResult: AuthLoginResult) => {
      return _login(user, accountId, curTimeUtcInSec, loginDbResult);
    })
    .catch((error: Error) => {
      console.log(error.stack);
      throw new GError(error.message, GErrorCode.AUTH_LOGIN_ERROR);
    });
};

function _login(
  user: User,
  accountId: string,
  curTimeUtcInSec: number,
  loginDbResult: AuthLoginResult
): Promise<any> {
  // enterWorldToken redis 에 기록.
  const { userCacheRedis } = Container.get(AuthService);

  const enterWorldToken = gutil.generateEnterWorldToken(accountId);
  return userCacheRedis["setEnterWorldToken"](
    accountId,
    enterWorldToken,
    curTimeUtcInSec
  )
    .then(() => {
      let lastWorldForKick, userIdToKick;
      if (loginDbResult.isOnline === 1) {
        lastWorldForKick = loginDbResult.lastWorld;
        for (const serverGroup of loginDbResult.serverGroups) {
          if (serverGroup.serverGroupId === loginDbResult.lastServerGroupId) {
            userIdToKick = serverGroup.userId;
            break;
          }
        }
      }

      if (userIdToKick) {
        glog.warn("/login user already online", {
          accountId,
          userId: userIdToKick,
          lastWorld: lastWorldForKick,
        });
        return kicker.kick(
          userIdToKick,
          lastWorldForKick,
          KICK_REASON.DUPLICATE_LOGIN
        );
      }

      return null;
    })
    .then(() => {
      //set user heartBeat
      return userCacheRedis["updateUserHeartBeat"](accountId, curTimeUtcInSec);
    })
    .then(() => {
      user.login(loginDbResult.authUserId, accountId);

      // build sync.
      // const sync: Sync = {
      //   // 데이터를 외부에서 받으려면 merge<All, All...> 이런식으로 추가.
      //   add: _.merge(user.getLoginSyncData()),
      // };

      const saLogin: GIANTSTEP.AS.Protocol.SA_Login =
        GIANTSTEP.AS.Protocol.SA_Login.create();
      saLogin.result = true;
      saLogin.loginTimeUtc = gutil.curTimeUtcInMs();
      saLogin.enterWorldToken = enterWorldToken;
      saLogin.isNewUser = loginDbResult.bIsNewUser;
      saLogin.isAdmin = loginDbResult.isAdmin;

      return user.sendProtobufPacket<GIANTSTEP.AS.Protocol.SA_Login>(
        // response.sequence,
        // GIANTSTEP.AS.Protocol.PacketType.LOGIN,
        GIANTSTEP.AS.Protocol.PacketType.AS_SA_Login,
        saLogin
      );
    });
}
