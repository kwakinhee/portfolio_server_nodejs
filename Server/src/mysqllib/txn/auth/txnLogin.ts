// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

import { Pool, PoolConnection } from "promise-mysql";
import spAccountCreate from "../../sp/auth/spAccountCreate";
import spAccountLoad from "../../sp/auth/spAccountLoad";
import spAccountIsOnlineAndLastLoginTimeUtcUpdate from "../../sp/auth/spAccountIsOnlineAndLastLoginTimeUtcUpdate";
import spAccounLoginPlatformClientVersionUpdate from "../../sp/auth/spAccounLoginPlatformClientVersionUpdate";
import spServerGroupUserLoad from "../../sp/auth/spServerGroupUserLoad";
import { GError, GErrorCode } from "../../../commonlib/gerror";
import { TXN_LEVEL, withTxnEx } from "../../transaction";

export interface ServerGroup {
  serverGroupId: string;
  userId: number;
  pubId: string;
}

export interface Result {
  authUserId: number;
  lastServerGroupId?: string;
  isOnline: number;
  lastWorld?: string;
  serverGroups: ServerGroup[];
  bIsNewUser: boolean;
  isAdmin: number;
}

function queryImpl(
  connection: PoolConnection,
  inAccountId: string,
  inCurTimeUtc: number,
  inLoginPlatform: string,
  inClientVersion: string
): Promise<Result> {
  const ret: Result = {
    authUserId: 0,
    isOnline: 0,
    serverGroups: undefined,
    bIsNewUser: false,
    isAdmin: 0,
  };
  let loginPlatform, clientVersion;
  return spAccountLoad(connection, inAccountId)
    .then((result) => {
      if (result) {
        ret.authUserId = result.id;
        ret.lastServerGroupId = result.lastServerGroupId;
        ret.isOnline = result.isOnline;
        ret.lastWorld = result.lastWorld;
        ret.isAdmin = result.isAdmin;
        loginPlatform = result.loginPlatform;
        clientVersion = result.clientVersion;

        return spAccountIsOnlineAndLastLoginTimeUtcUpdate(
          connection,
          inAccountId,
          1,
          inCurTimeUtc
        );
      } else {
        // TODO: 지금은 엑셀로 등록한 계정을 DB에 세팅하지만 추후엔 계정가입을 UNION 이나 다른 외부에서 하므로 추후 생성하게끔 변경해야함.
        // throw new GError(
        //   "invaild accountId",
        //   GErrorCode.CANNOT_FIND_ACCOUNT_ID
        // );
        return spAccountCreate(
          connection,
          inAccountId,
          inCurTimeUtc,
          inLoginPlatform,
          inClientVersion,
          0 //TODO: 추후 어드민 접근 레벨로 수정해야함.
        ).then((authUserId) => {
          ret.bIsNewUser = true;
          ret.authUserId = authUserId;
        });
      }
    })
    .then(() => {
      if (
        !ret.bIsNewUser &&
        (loginPlatform != inLoginPlatform || clientVersion != inClientVersion)
      ) {
        return spAccounLoginPlatformClientVersionUpdate(
          connection,
          inAccountId,
          inLoginPlatform,
          inClientVersion
        );
      }
      return null;
    })
    .then(() => {
      if (!ret.bIsNewUser && ret.isOnline) {
        // kick 에 필요한 정보.
        return spServerGroupUserLoad(connection, inAccountId);
      }
      return [];
    })
    .then((result) => {
      ret.serverGroups = result;
      return ret;
    })
    .catch((err) => {
      if (err instanceof GError) {
        throw err;
      } else {
        throw new GError(err.message, GErrorCode.AUTH_LOGIN_TXN_ERROR);
      }
    });
}

export default function txnLogin(
  dbConnPool: Pool,
  accountId: string,
  curTimeUtc: number,
  loginPlatform: string,
  clientVersion: string
): Promise<Result> {
  return withTxnEx(
    dbConnPool,
    TXN_LEVEL.REPEATABLE_READ,
    __filename,
    (connection: PoolConnection) => {
      return queryImpl(
        connection,
        accountId,
        curTimeUtc,
        loginPlatform,
        clientVersion
      );
    }
  ) as Promise<Result>;
}
