// ----------------------------------------------------------------------------
// user 상태에 따른 정보들
// ----------------------------------------------------------------------------

import { LoginInfo, User } from "./user";
import { GError, GErrorCode } from "../commonlib/gerror";
import _ from "lodash";

// ----------------------------------------------------------------------------
// 유저의 상태 정보.
// ----------------------------------------------------------------------------

export interface MoveState {
  // 언리얼 좌표.
  x: number;
  y: number;
  z: number;

  // 회전 각도.
  degrees: number;

  // 속도.
  vx: number;
  vy: number;
  vz: number;

  // 클라이언트에서 보낸 시간(UTC)
  clientTimeUtc: number;

  axisSize: number;
}

class UserState {
  private _userId: number = 0;

  //TODO: 추후 로그인, 로그아웃시 Redis에 정보 저장.
  private _moveState: MoveState;
  packetCountPerSec: number;
  receivedMovingPacketBeginTime: number;
  lastClientSendingTimeUtc: number;
  packetRecvCount: number;
  failedPacketRecvCount: number;
  locationLastLogTimeUtc: number;

  constructor() {
    // 시작 default
    this._moveState = {
      x: 0,
      y: 0,
      z: 0,
      degrees: 0,
      vx: 0,
      vy: 0,
      vz: 0,
      clientTimeUtc: 0,
      axisSize: 0,
    };

    this.packetCountPerSec = 0;
    this.receivedMovingPacketBeginTime = 0;
    this.lastClientSendingTimeUtc = 0;
    this.packetRecvCount = 0;
    this.failedPacketRecvCount = 0;
    this.locationLastLogTimeUtc = 0;
  }

  getMoveState(): MoveState {
    return this._moveState;
  }

  updateMoveState(moveState: MoveState) {
    this._moveState = moveState;
  }

  // // _userConn 은 clone 하지 않는다.
  // makeClone(): UserState {
  //   const c = new UserState();
  //   // c.cloneSet(this._gameState, this._userId);
  //   return c;
  // }

  // setCloneData(gameState: number, userId: number): void {
  //   //this._gameState = gameState;
  //   this._userId = userId;
  // }

  initWithLoginInfo(loginInfo: LoginInfo): void {
    // this.setGameState(loginInfo.gameState, {
    //   user,
    // });
    this._userId = loginInfo.userId;
  }

  getSyncData(): any {
    const ret = {
      moveState: this._moveState,
    };

    return ret;
  }
}

// ----------------------------------------------------------------------------
// Exports.
// ----------------------------------------------------------------------------

export default UserState;
