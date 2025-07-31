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
import { UserManager } from "./useManagerr";
import { PAYLOAD_FLAG, DISCONNECT_REASON } from "../commonlib/genum";
import { TcpServerFUSession } from "./../netlib/tcp/server/forUser/tcpServerFUSession";
import { serialize, deserialize } from "./protocol/packetSerder";
import { LoadUserResult } from "../mysqllib/sp/user/spUserLoad";
import { GIANTSTEP } from "../proto/authServer/jsonProto";
import * as packetHandler from "./packetHandler";

// 서버별로 나눠서 정의.
export enum CONNECTION_STATE {
  JUST_CONNECTED = 1,
  LOGGED_OUT = 2,
  LOGGED_IN = 3,
}

export interface LoginInfo extends LoadUserResult {}

export class User extends TcpServerFUSession {
  private _connState: CONNECTION_STATE;
  private _worldId: number;

  // 핑.
  private _lastPingTimeUtcInSec: number = gutil.curTimeUtcInSec();
  private _lastPingPongTickTImeUtcInSec: number = 0;
  //private _lastTickTimeInMs: number = Date.now();

  // 계정 ID 또는 퍼블리셔만의 ID가 될수도 있음.
  private _accountId: string = "";

  // 로그아웃을 기다리기 위한 이벤트 오브젝트.
  private _logoutEvent: EventEmitter;

  constructor(sessionId, socket: net.Socket) {
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
    const serverError: GIANTSTEP.AS.Protocol.ServerError =
      GIANTSTEP.AS.Protocol.ServerError.create({
        errCode: err.gcode,
        errMessage: err.message,
        failedCQPacket: packetType,
      });
    return this.sendProtobufPacket(
      GIANTSTEP.AS.Protocol.PacketType.AS_ServerError,
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

  setWorldId(worldId: number) {
    this._worldId = worldId;
  }

  getWorldId() {
    return this._worldId;
  }

  // 매 초 마다 호출되는 tick.
  tick(curTimeInMs: number): void {
    if (this.getConnState() !== CONNECTION_STATE.LOGGED_IN) {
      return;
    }

    const curTimeUtcInSec = Math.floor(curTimeInMs / 1000);

    this.pingPongTick(curTimeUtcInSec);
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
  login(authUserId, accountId) {
    this.setConnState(CONNECTION_STATE.LOGGED_IN);

    this._userId = authUserId;
    this._accountId = accountId;

    const userManager = Container.get(UserManager);
    userManager.addLoggedInUser(this);

    // 로그인 상태가 되면, ping-pong 으로 이상을 감지하기 때문에,
    // socket timeout 을 초기화 한다. (0으로)
    this.clearSocketTimeout();

    glog.info("auth account login", {
      authUserId: this._userId,
      accountId: this._accountId,
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

    const userManager = Container.get(UserManager);
    userManager.removeLoggedInUser(this._userId);

    glog.info("user logout", {
      userId: this._userId,
      sessionId: this._sessionId,
      disconnectReason: this._disconnectReason,
    });

    if (this._logoutEvent) {
      this._logoutEvent.emit("");
    }

    return Promise.resolve();
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

  // ---------------------------------------------------------- net socket 에서 사용
}
