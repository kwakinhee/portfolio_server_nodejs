import { GIANTSTEP } from "../../../proto/worldServer/jsonProto";
import { User, LoginInfo } from "../../user";
import glog from "../../../commonlib/glog";
import Container from "typedi";
import { DISCONNECT_REASON, KICK_REASON } from "../../../commonlib/genum";
import * as gutil from "../../../commonlib/gutil";
import { GError, GErrorCode } from "../../../commonlib/gerror";
import spUserLoad, {
  LoadUserResult,
} from "../../../mysqllib/sp/user/spUserLoad";
import _ from "lodash";
import http from "../../../netlib/http";
import { EnterWorldResult } from "../../../netlib/http/authApiClient";
import gconf from "../../../commonlib/gconf";
import { WorldService } from "../../server";
import txnWorldEnter from "../../../mysqllib/txn/user/txnWorldEnter";
import txnDefaultUserDataInit from "../../../mysqllib/txn/user/txnDefaultUserDataInit";

export = (user: User, request: any): Promise<boolean> => {
  const reqBody: any = request.toJSON();
  glog.debug("/login reqBody:", reqBody);
  const cqLogin: GIANTSTEP.WS.Protocol.CQ_Login = request;
  const accountId = cqLogin.accountId;
  const isDevLogin = cqLogin.isDevLogin;
  const loginPlatform = cqLogin.loginPlatform;
  const enterWorldToken = cqLogin.enterWorldToken;

  if (!accountId || !loginPlatform || !enterWorldToken) {
    throw new GError(
      "/login INVALID_REQ_BODY_PARAMETER",
      GErrorCode.INVALID_REQ_BODY_PARAMETER
    );
  }

  return _login(user, isDevLogin, accountId, enterWorldToken);
};

function _login(
  user: User,
  isDevLogin: boolean,
  accountId: string,
  enterWorldToken
): Promise<any> {
  // 중복 로그인 체크.
  let ewr: EnterWorldResult;
  return http.authServer
    .enterWorld(isDevLogin, accountId, gconf.serverGroupId, enterWorldToken)
    .then((resp) => {
      ewr = resp;
      glog.debug("/enterWorld ewr:", ewr);
      if (!ewr.bValidEnterWorldToken) {
        // 중복 로그인 또는 토큰 만료
        const snKick = GIANTSTEP.WS.Protocol.SN_Kick.create();
        snKick.kickType = KICK_REASON.INVALID_ENTER_WORLD_TOKEN;

        return user.sendProtobufPacket(
          GIANTSTEP.WS.Protocol.PacketType.WS_SN_Kick,
          snKick
        );
      }

      return (
        Promise.resolve()
          // .then(() => {
          //   const userManager: UserManager = Container.get(UserManager);
          //   const prevUser: User = userManager.getUserByUserId(ewr.userId);
          //   if (prevUser) {
          //     userManager.removeLoggedInUser(ewr.userId);
          //     glog.error("duplicate user (_login)", {
          //       userId: ewr.userId,
          //       sessionId: user.getSessionId(),
          //     });
          //     prevUser.disconnect(DISCONNECT_REASON.DUPLICATE_LOGIN_KICK);

          //     //이전 클라이언트를 킥하고 로그아웃까지 대기.
          //     return prevUser.waitForLogout();
          //   }
          //   return null;
          // })
          .then(() => {
            user.setAccountId(ewr.accountId);
            user.setPubId(ewr.pubId);
            user.setIsAdmin(ewr.isAdmin);

            // TODO: 캐릭터 이름은 일단 accountID 로 세팅.
            // TODO: 추후 캐릭터 생성시 캐릭터 이름을 직접 유저가 세팅으로 변경 예정.
            return _loginImpl(
              user,
              ewr.accountId,
              ewr.userId,
              ewr.pubId,
              ewr.accountId
            );
          })
      );
    });
}

function _loginImpl(
  user: User,
  accountId: string,
  userId: number,
  pubId: string,
  characterName: string
): Promise<any> {
  const { userDbConnPool, userCacheRedis } = Container.get(WorldService);

  const curTimeUtcInSec = gutil.curTimeUtcInSec();
  const newEnterWorldToken = gutil.generateEnterWorldToken(accountId);

  // TODO: 추후 캐릭터 닉네임을 클라이언트에서 받아 처리할 예정.
  let bIsNewUser: boolean = false;
  return txnWorldEnter(
    userDbConnPool.getPool(),
    userId,
    accountId,
    pubId,
    characterName,
    curTimeUtcInSec
  )
    .then((result) => {
      bIsNewUser = result.bIsNewUser;
      if (bIsNewUser) {
        return txnDefaultUserDataInit(userDbConnPool.getPool(), userId);
      }
      return null;
    })
    .then(() => {
      return userCacheRedis["updateUserHeartBeatWhenEnterWorld"](
        accountId,
        curTimeUtcInSec,
        userId,
        gconf.appId
      );
    })
    .then(() => {
      return spUserLoad(userDbConnPool.getPool(), userId);
    })
    .then((loadUserResult: LoadUserResult) => {
      user.login(loadUserResult);

      return userCacheRedis["setEnterWorldToken"](
        accountId,
        newEnterWorldToken,
        curTimeUtcInSec
      );
    })
    .then(() => {
      const saLogin: GIANTSTEP.WS.Protocol.SA_Login =
        GIANTSTEP.WS.Protocol.SA_Login.create();

      // 동기화해야할 데이터를 모두 추가.
      const userCharacterSyncData: any = user.userCharacter.getSyncData();

      const resCharacter: GIANTSTEP.WS.Protocol.Character =
        GIANTSTEP.WS.Protocol.Character.create();

      // TODO: 현재 GIANTSTEP.WS.Protocol.Character 정보, 유저정보를 클라이언트에서 사용하고있지 않지만
      //       추후 로그인시 받아서 사용하는 방향으로 변경 예정.

      resCharacter.avatarSlots = userCharacterSyncData.avatarSlots;
      resCharacter.name = userCharacterSyncData.characterName;
      resCharacter.cmsId = userCharacterSyncData.characterCmsId;
      saLogin.character = resCharacter;
      saLogin.result = true;
      saLogin.loginTimeUtc = gutil.curTimeUtcInMs();

      saLogin.user = GIANTSTEP.WS.Protocol.User.create();
      saLogin.user.accountId = accountId;
      saLogin.user.userId = user.getUserId();
      saLogin.user.enterWorldToken = newEnterWorldToken;

      return user.sendProtobufPacket<GIANTSTEP.WS.Protocol.SA_Login>(
        GIANTSTEP.WS.Protocol.PacketType.WS_SA_Login,
        saLogin
      );
    });
}
