// ----------------------------------------------------------------------------
// worldServer에 접속된 User들을 관리.
// ----------------------------------------------------------------------------

import _ from "lodash";
import * as net from "net";
import { User } from "./user";
import glog from "../commonlib/glog";
import gconf from "../commonlib/gconf";
import { DISCONNECT_REASON, KICK_REASON } from "../commonlib/genum";
import { Service } from "typedi";
import { CLIENT_MANAGER_TICK_INTERVAL } from "./const";
import * as TcpServerFUSession from "../netlib/tcp/server/forUser/tcpServerFUSession";
import * as worldPubsub from "./worldPubsub";

@Service()
export class UserManager {
  // tcp connected users
  // private _usersBySessionId: { [sessionId: string]: User } = {};
  private _usersBySessionId = new Map<string, User>();
  // tcp logged in users
  // private _usersByUserId: { [userId: number]: User } = {};
  private _usersByUserId = new Map<number, User>();

  private _userTickInterval: NodeJS.Timeout;

  createUser(sessionId: string, socket: net.Socket): User {
    const newUser = new User(sessionId, socket);
    if (!newUser) {
      socket.destroy();
      return;
    }
    this.addConnectedUser(sessionId, socket, newUser);
    return newUser;
  }

  addConnectedUser(sessionId: string, socket: net.Socket, newUser: User): User {
    const existingUser = this._usersBySessionId.get(sessionId);
    if (existingUser) {
      glog.error("duplicate user (addUser)", {
        userId: existingUser.getUserId(),
        sessionId: sessionId,
        remoteAddress: socket.remoteAddress,
        remotePort: socket.remotePort,
      });
      return null;
    }
    this._usersBySessionId.set(sessionId, newUser);
  }

  private _removeConnectedUser(sessionId: string): boolean {
    return this._usersBySessionId.delete(sessionId);
  }

  addLoggedInUser(user: User): void {
    const userId: number = user.getUserId();
    if (this._usersByUserId.get(userId)) {
      glog.error("duplicate user (addLoggedInuser)", {
        userId: userId,
      });
      return;
    }
    this._usersByUserId.set(userId, user);
  }

  removeLoggedInUser(userId: number): void {
    this._usersByUserId.delete(userId);
  }

  getUserByUserId(userId: number): User | undefined {
    return this._usersByUserId.get(userId);
  }

  userTick(): void {
    this._userTickInterval = setInterval(() => {
      const startTimeInMs = Date.now();

      try {
        const sessionIds = this._usersBySessionId.keys();
        for (const key of sessionIds) {
          this._usersBySessionId.get(key).tick(startTimeInMs);
        }
      } catch (e) {
        glog.error("User tick error!", e);
      }

      // Check elapsed time.
      const elapsedTimeInMs = Date.now() - startTimeInMs;
      if (elapsedTimeInMs > gconf.userTick.warningElapsedTime) {
        glog.warn(`Elapsed time exceeded, elapsed: ${elapsedTimeInMs}ms`);
      }
    }, CLIENT_MANAGER_TICK_INTERVAL);
  }

  stopUserTick(): void {
    if (this._userTickInterval) {
      clearInterval(this._userTickInterval);
    }
  }

  async broadcastProtobufPacket<T>(
    userIds: number[],
    packetType: number,
    packetBody: T
  ): Promise<boolean[]> {
    // 브로드캐스팅용 패킷 버퍼 하나를 만들어 모든 클라이언트에게 전송.
    // 구지 클라이언트마다 만들필요는 없음.
    const buf = TcpServerFUSession.buildProtobufPacketBuffer(
      packetType,
      packetBody
    );

    const promises = userIds.map((userId) =>
      this.sendBufferToUser(userId, packetType, buf)
    );
    return Promise.all(promises);
  }

  async broadcastProtobufPacketToAllUser<T>(
    packetType: number,
    packetBody: T
  ): Promise<boolean[]> {
    return this.broadcastProtobufPacket<T>(
      Object.keys(this._usersByUserId).map(Number),
      packetType,
      packetBody
    );
  }

  sendProtobufPacketToUser<T = any>(
    userId: number,
    packetType: number,
    packetBody: T
  ): Promise<boolean> {
    const user: User = this._usersByUserId.get(userId);
    if (!user) {
      return Promise.resolve(false);
    }

    return user.sendProtobufPacket<T>(
      // 0,
      packetType,
      packetBody
    );
  }

  async sendBufferToUser(
    userId: number,
    packetType: number,
    buf: Buffer
  ): Promise<boolean> {
    const user = this._usersByUserId.get(userId);
    if (!user) {
      glog.warn("cannot send (buffer) to offline user", {
        userId,
        packetType,
      });
      return Promise.resolve(false);
    }
    return user.sendProtobufPacket(packetType, buf);
  }

  onSocketClose(sessionId: string): void {
    const user: User = this._usersBySessionId.get(sessionId);
    if (!user) {
      glog.warn("User not found by connection ID. (onSocketClose)", {
        sessionId,
      });
      return;
    }

    user.onSocketClose();
    this._removeConnectedUser(sessionId);
  }

  disconnectAll(disconnectReason: DISCONNECT_REASON): void {
    for (const [_, user] of this._usersBySessionId) {
      user.disconnect(disconnectReason);
    }
    this._usersBySessionId.clear();
  }

  getUserCount(): number {
    return this._usersByUserId.size;
  }

  kickUser(
    userId: number,
    reason: KICK_REASON,
    authServerId: string
  ): Promise<void> {
    return Promise.resolve().then(() => {
      const userToKick = this._usersByUserId.get(userId);
      if (!userToKick) {
        glog.warn("user to kick is already offline", {
          userId,
        });
        return worldPubsub.pubUserKicked(userId, authServerId);
      }

      return userToKick.kick(reason, authServerId);
    });
  }
}
