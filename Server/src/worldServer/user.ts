// ----------------------------------------------------------------------------
// AuthServer에 접속된 User 만의 로직 담당. Session 과는 다른 개념.
// ----------------------------------------------------------------------------

import _ from "lodash";
import * as net from "net";
import glog from "../commonlib/glog";
import gconf from "../commonlib/gconf";
import { GError, GErrorCode } from "../commonlib/gerror";
import * as gutil from "../commonlib/gutil";
import { EventEmitter } from "events";
import Container from "typedi";
import { UserManager } from "./userManager";
import {
  PAYLOAD_FLAG,
  DISCONNECT_REASON,
  KICK_REASON,
} from "../commonlib/genum";
import { WorldManager } from "./world/worldManager";
import { TcpServerFUSession } from "./../netlib/tcp/server/forUser/tcpServerFUSession";
import { serialize, deserialize } from "./protocol/packetSerder";
import userState from "./userState";
import userCharacter from "./userCharacter";
import { LoadUserResult } from "../mysqllib/sp/user/spUserLoad";
import { GIANTSTEP } from "../proto/worldServer/jsonProto";
import * as packetHandler from "./packetHandler";
import { World } from "./world/world";
import { WorldService } from "./server";
import * as worldPubsub from "./worldPubsub";
import http from "../netlib/http";
import { UserInventory } from "./inventory/userInventory";

// 서버별로 나눠서 정의.
export enum CONNECTION_STATE {
  JUST_CONNECTED = 1,
  LOGGED_OUT = 2,
  LOGGED_IN = 3,
}

export interface LoginInfo extends LoadUserResult {}

export class User extends TcpServerFUSession {
  private _connState: CONNECTION_STATE;
  private _worldId: number = -1;

  // 핑.
  private _lastPingTimeUtcInSec: number = gutil.curTimeUtcInSec();
  private _lastPingPongTickTImeUtcInSec: number = 0;
  //private _lastTickTimeInMs: number = Date.now();
  private _lastUserHeartBeatTimeUtc: number = gutil.curTimeUtcInSec();
  private _lastRefreshEnterTokenTimeUtc: number = 0;

  // 언리얼 클라이언트 토큰. 언리얼에서 제공되는 ID.
  private _accountId: string = "";
  private _pubId: string = "";
  private _isAdmin: number = 0;
  // 로그아웃을 기다리기 위한 이벤트 오브젝트.
  private _logoutEvent: EventEmitter;

  // 컨텐츠 별 유저 데이터.
  public userState: userState = new userState();
  public userCharacter: userCharacter = new userCharacter();
  public userInventory: UserInventory = new UserInventory();

  constructor(sessionId: string, socket: net.Socket) {
    super(sessionId, socket);

    // Connection state.
    this._connState = CONNECTION_STATE.JUST_CONNECTED;
  }

  // Override
  protected _onDisconnected(): any {
    const userManager = Container.get(UserManager);
    userManager.onSocketClose(this._sessionId);
  }

  protected _onPacket(
    session: TcpServerFUSession,
    packetType: number,
    request: any
  ): Promise<any> {
    return packetHandler.exec(this, packetType, request);
  }

  protected _logOut(): Promise<void> {
    return this._logout();
  }

  protected _sendGError(
    // seqNum: number,
    packetType: number,
    err: GError
  ): Promise<boolean> {
    const serverError: GIANTSTEP.WS.Protocol.ServerError =
      GIANTSTEP.WS.Protocol.ServerError.create({
        errCode: err.gcode,
        failedCQPacket: packetType,
        errMessage: err.message,
      });

    return this.sendProtobufPacket(
      GIANTSTEP.WS.Protocol.PacketType.WS_ServerError,
      serverError
    );
  }

  protected _serialize(packetType: number, body: any): any {
    return serialize(packetType, body);
  }

  protected _deserialize(packetType: number, buffer: Buffer): any {
    return deserialize(packetType, buffer);
  }

  // get set
  getConnState(): CONNECTION_STATE {
    return this._connState;
  }

  setConnState(connState: CONNECTION_STATE): void {
    this._connState = connState;
  }

  getAccountId(): string {
    return this._accountId;
  }

  setAccountId(accountId: string) {
    this._accountId = accountId;
  }

  getPubId(): string {
    return this._pubId;
  }

  setPubId(pubId: string) {
    this._pubId = pubId;
  }

  setWorldId(worldId: number) {
    this._worldId = worldId;
  }

  getWorldId() {
    return this._worldId;
  }

  getWorld(): World {
    const worldManager = Container.get(WorldManager);
    return worldManager.getWorld(this._worldId);
  }

  setIsAdmin(isAdmin: number) {
    this._isAdmin = isAdmin;
  }

  getIsAdmin() {
    return this._isAdmin;
  }

  // 매 초 마다 호출되는 tick.
  tick(curTimeInMs: number): void {
    if (this.getConnState() !== CONNECTION_STATE.LOGGED_IN) {
      return;
    }

    const curTimeUtcInSec = Math.floor(curTimeInMs / 1000);
    this.heartBeatTick(curTimeUtcInSec);
    this.pingPongTick(curTimeUtcInSec);
    this.refreshEnterWorldToken(curTimeUtcInSec);
  }

  heartBeatTick(curTimeUtcInSec: number): void {
    if (this.getConnState() !== CONNECTION_STATE.LOGGED_IN) {
      return;
    }

    const elapsedSecs = curTimeUtcInSec - this._lastUserHeartBeatTimeUtc;
    if (elapsedSecs < gconf.userHeartBeatIntervalSec) {
      return;
    }
    this._lastUserHeartBeatTimeUtc = curTimeUtcInSec;

    const { userCacheRedis } = Container.get(WorldService);
    return userCacheRedis["updateUserHeartBeat"](
      this._accountId,
      curTimeUtcInSec
    );
  }

  refreshEnterWorldToken(curTimeUtc: number): void {
    if (
      curTimeUtc - this._lastRefreshEnterTokenTimeUtc <
      gconf.userTick.enterWorldTokenRefreshmentIntervalSec
    ) {
      return;
    }

    this._lastRefreshEnterTokenTimeUtc = curTimeUtc;
    if (this.getConnState() !== CONNECTION_STATE.LOGGED_IN) {
      return;
    }

    const newEnterWorldToken = gutil.generateEnterWorldToken(this._accountId);
    const { userCacheRedis } = Container.get(WorldService);
    return userCacheRedis["setEnterWorldToken"](
      this._accountId,
      newEnterWorldToken,
      curTimeUtc
    )
      .then(() => {
        const snRefreshEnterWorldToken: GIANTSTEP.WS.Protocol.SN_RefreshEnterWorldToken =
          GIANTSTEP.WS.Protocol.SN_RefreshEnterWorldToken.create();

        snRefreshEnterWorldToken.enterWorldToken = newEnterWorldToken;

        return this.sendProtobufPacket(
          GIANTSTEP.WS.Protocol.PacketType.WS_SN_RefreshEnterWorldToken,
          snRefreshEnterWorldToken
        );
      })
      .catch((err) => {
        glog.error("refreshEnterWorldToken is failed.", {
          userId: this._userId,
          accountId: this._accountId,
          newEnterWorldToken,
          error: err.message,
        });
      });
  }

  pingPongTick(curTimeUtcInSec: number): void {
    if (
      curTimeUtcInSec - this._lastPingPongTickTImeUtcInSec <
      gconf.userTick.pingPongIntervalSec
    ) {
      return;
    }

    this._lastPingPongTickTImeUtcInSec = curTimeUtcInSec;
    let timeout = gconf.ping.timeout;
    const elapsedSecs = curTimeUtcInSec - this._lastPingTimeUtcInSec;
    if (elapsedSecs * 1000 <= timeout) {
      return;
    }

    glog.warn("ping timeout", {
      userId: this._userId,
      elapsedSecs,
    });

    this.disconnect(DISCONNECT_REASON.PING_TIMEOUT);
  }

  updateLastPingTime(): void {
    this._lastPingTimeUtcInSec = gutil.curTimeUtcInSec();
  }

  // ---------------------------------------------------------- net socket 에서 사용
  login(loginInfo: LoginInfo) {
    this.setConnState(CONNECTION_STATE.LOGGED_IN);

    this._userId = loginInfo.userId;
    this.userState.initWithLoginInfo(loginInfo);
    this.userCharacter.initWithLoginInfo(loginInfo);
    this.userInventory.avatarInventory.initWithLoginInfo(loginInfo);
    this.userInventory.worldInventory.initWithLoginInfo(loginInfo);

    // 로그인 하자마자 toekn갱신 하지않기위해 세팅.
    this._lastRefreshEnterTokenTimeUtc = Math.floor(Date.now() / 1000);

    const userManager = Container.get(UserManager);
    userManager.addLoggedInUser(this);

    // 로그인 상태가 되면, ping-pong 으로 이상을 감지하기 때문에,
    // socket timeout 을 초기화 한다. (0으로)
    this.clearSocketTimeout();

    glog.debug("user login", {
      userId: this._userId,
      loginInfo: JSON.stringify(loginInfo),
    });
  }

  kick(reason: KICK_REASON, authServerId: string): Promise<any> {
    this._kicked = {
      reason,
      authServerId,
    };

    const snKick = GIANTSTEP.WS.Protocol.SN_Kick.create();
    snKick.kickType = reason;

    return this.sendProtobufPacket(
      GIANTSTEP.WS.Protocol.PacketType.WS_SN_Kick,
      snKick
    ).then(() => {
      this.disconnect(DISCONNECT_REASON.KICK);
    });
  }

  // 무조건 타는 곳.
  private async _logout(): Promise<void> {
    if (this.getConnState() === CONNECTION_STATE.LOGGED_OUT) {
      glog.warn("user logout when already logged out", {
        userId: this._userId,
        connState: this.getConnState(),
      });
      return Promise.resolve();
    }
    this.setConnState(CONNECTION_STATE.LOGGED_OUT);

    // 아직 로그인이 안된 클라이언트.
    if (this._userId === 0) {
      return Promise.resolve();
    }

    const worldManager = Container.get(WorldManager);
    const world: World = worldManager.getWorld(this._worldId);

    if (world) {
      glog.info("User Exit:", {
        userId: this.getUserId(),
        worldId: this._worldId,
      });
      world.onLeave(this);
    }

    const userManager = Container.get(UserManager);
    userManager.removeLoggedInUser(this._userId);

    return Promise.resolve()
      .then(() => {
        // 인증서버로 부터 킥 당했는지에 대한 여부에 따라 분기.
        if (this._kicked && this._kicked.authServerId) {
          return worldPubsub
            .pubUserKicked(this._userId, this._kicked.authServerId)
            .then(() => null);
        }

        // 일반적인 로그아웃의 경우, online 상태 업데이트 이후 authd 에 logout 요청.
        if (this._userId > 0) {
          return http.authServer.logout(this._accountId);
        }
      })
      .catch((e) => {
        glog.error("user logout error", {
          userId: this._userId,
          error: e.message,
          mcode: e.mode,
          stack: e.stack,
        });
      })
      .finally(() => {
        glog.info("user logout", {
          userId: this._userId,
          accountId: this._accountId,
          sessionId: this._sessionId,
          disconnectReason: this._disconnectReason,
          kicked: this._kicked,
        });

        if (this._logoutEvent) {
          this._logoutEvent.emit("");
        }
      });
  }

  // logout 함수가 끝날때 까지 대기. 이벤트 emit 가 되야함.
  async waitForLogout(): Promise<boolean> {
    this._logoutEvent = new EventEmitter();

    const successPromise = new Promise((resolve) => {
      this._logoutEvent.on("", () => {
        resolve(true); // 성공.
      });
    });

    const timeoutPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(false);
      }, 3000); // 3초 대기.
    });

    return Promise.race([successPromise, timeoutPromise]).then(
      (bOk: boolean) => {
        if (!bOk) {
          glog.error("Timed out while waiting for logout!", {
            userId: this._userId,
          });
        }
        return bOk;
      }
    );
  }

  // getLoginSyncData(): sync.All {
  //   const user: sync.User = {
  //     userId: this._userId,
  //     accountId: this._accountId,
  //   };

  //   const sync: sync.All = {
  //     user,
  //   };

  //   _.merge(
  //     sync,
  //     this.userCharacter.getSyncData(),
  //     this.userState.getSyncData()
  //   );

  //   return sync;
  // }

  // ---------------------------------------------------------- net socket 에서 사용
}
