import * as net from "net";
import shortid from "shortid";
import { TcpServerFSSession } from "./tcpServerFSSession";
import { SegmentValue, Segments } from "../../segments";
import { IDisposable } from "../../interface";
import { EventDispatcher } from "event-dispatch";
import { PacketRouter } from "../../tcpRouter";
import glog from "../../../../commonlib/glog";

export class TcpServerFSSessionManager implements IDisposable {
  private _tcpServerFSSessionMap = new Map<string, TcpServerFSSession>();
  private _tcpServerFSSessions: TcpServerFSSession[];
  private _dispatcher = new EventDispatcher();

  dispose() {
    this._tcpServerFSSessionMap.forEach((ss) => ss.dispose());
    this._tcpServerFSSessionMap.clear();
  }

  createSession(
    router: PacketRouter,
    socket: net.Socket,
    onDisconnected: (segment: Segments) => void
  ): TcpServerFSSession {
    let sessionId = shortid.generate();
    let session = new TcpServerFSSession(
      router,
      sessionId,
      socket,
      onDisconnected
    );

    this._tcpServerFSSessionMap.set(sessionId, session);

    session.disconnected.on(this.onDisconnected.bind(this));
    glog.info(
      `session created: ${session.getSessionId()}, for: ${session.getIp()}, session count: ${
        this._tcpServerFSSessionMap.size
      }`
    );

    this._dispatcher.dispatch("TcpServerFSSessionManager:connect", session);
    return session;
  }

  private onDisconnected(session: TcpServerFSSession) {
    this._dispatcher.dispatch("TcpServerFSSessionManager:disconnect", session);
    this._tcpServerFSSessionMap.delete(session.getSessionId());
    glog.info(
      `socket close, session remains: ${this._tcpServerFSSessionMap.size}`
    );
  }

  findSession(id: string) {
    return this._tcpServerFSSessionMap.get(id);
  }

  findSessionBySegment(key: string, value: SegmentValue): TcpServerFSSession {
    const output = this.getSessions().filter(
      (tsfss) => tsfss.getSegments().get(key) === value
    );
    if (output.length > 0) {
      return output[0];
    }
    return null;
  }

  getSessions() {
    this._tcpServerFSSessions = null;
    this._tcpServerFSSessions = Array.from(
      this._tcpServerFSSessionMap.values()
    );
    return this._tcpServerFSSessions;
  }

  getSessionsBySegment(key: string, value: SegmentValue): TcpServerFSSession[] {
    return this.getSessions().filter(
      (tsfss) => tsfss.getSegments().get(key) === value
    );
  }
}
