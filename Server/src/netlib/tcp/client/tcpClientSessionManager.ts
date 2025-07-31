import { TcpClientSession } from "./tcpClientSession";
import { IDisposable } from "../interface";
import { IPacket } from "../basicPackets";
import glog from "../../../commonlib/glog";

export class TcpClientSessionManager implements IDisposable {
  private tcpClientSessionMap = new Map<string, TcpClientSession>();
  private dirty = false;
  private tcpClientSessions: TcpClientSession[];

  dispose(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.tcpClientSessionMap.forEach((client) => client.dispose());
      this.tcpClientSessionMap.clear();
    });
  }

  addTcpClientSession(appId: string, tcpClientSession: TcpClientSession) {
    this.tcpClientSessionMap.set(appId, tcpClientSession);
    this.dirty = true;
  }

  findTcpClientSession(appId: string): TcpClientSession {
    return this.tcpClientSessionMap.get(appId);
  }

  getTcpClientSessions() {
    if (this.dirty) {
      this.dirty = false;
      this.tcpClientSessions = null;
      this.tcpClientSessions = Array.from(this.tcpClientSessionMap.values());
    }
    return this.tcpClientSessions;
  }

  send(appId: string, packet: IPacket) {
    const tcpClientSession = this.findTcpClientSession(appId);
    if (!tcpClientSession) {
      glog.warn(`send packet failed - server session not connected to
      ${appId}, ${packet.getPacketName()}`);
      return;
    }
    tcpClientSession.send(packet);
  }
}
