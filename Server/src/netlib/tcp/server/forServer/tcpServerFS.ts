import path = require("path");
import fs from "fs";
import net = require("net");
import { SERVER_CONNECT_PACKET, IPacket } from "../../basicPackets";
import { TcpServerFSSessionManager } from "./tcpServerFSSessionManager";
import { TypedEvent } from "../../typedEvent";
import { TcpServerFSSession } from "./tcpServerFSSession";
import { EventSubscriber, On } from "event-dispatch";
import glog from "../../../../commonlib/glog";
import { Segments } from "../../segments";
import {
  PacketRouter,
  NormalResponsor,
  PacketFunction,
  NoResponsor,
} from "../../tcpRouter";
import { BaseTcpServer } from "../../baseTcpServer";
import * as tcp from "../../../tcp";

@EventSubscriber()
export class TcpServerFS extends BaseTcpServer {
  disconnected = new TypedEvent<TcpServerFSSession>();
  connected = new TypedEvent<TcpServerFSSession>();

  private _TcpServerFSSessionManager = new TcpServerFSSessionManager();
  private _router: PacketRouter = null;

  constructor() {
    super();
    // TODO: 언리얼 <-> 서버간에도 사용할수있게 추후 packetHanlder 를 router로 리팩토링 예정.
    this._router = tcp.createPacketRouter();
    this._router.on(SERVER_CONNECT_PACKET, async (req, res) => {
      if (res instanceof NormalResponsor) {
        const segments = res.tcpSocket.getSegments();
        segments.assign(req.getSegments());
        glog.info("res SERVER_CONNECT_PACKET", { segments });
      }
    });
  }

  protected _createSocketServer(
    onConnected: (socket: net.Socket) => void,
    onDisconnected: (segment: Segments) => void
  ): void {
    this.socketServer = net.createServer((socket: net.Socket) => {
      // on socket connection:
      this._TcpServerFSSessionManager.createSession(
        this._router,
        socket,
        onDisconnected
      );
    });
  }

  protected _closeSocketServer(): Promise<void> {
    this._TcpServerFSSessionManager.dispose();
    this._router.dispose();

    if (!this.socketServer) {
      return Promise.resolve();
    }

    return new Promise<void>((resolve) => {
      this.socketServer.close((err) => {
        if (err) glog.error(err.message);
        glog.info("server closed and disposed.");
        resolve();
      });
      this.socketServer = null;
    });
  }

  getTcpServerFSSessionManager(): TcpServerFSSessionManager {
    return this._TcpServerFSSessionManager;
  }

  async routeEx(basedir: string, targetdir: string): Promise<void> {
    const desRoot = path.resolve(basedir, targetdir);
    const files = fs.readdirSync(desRoot);
    files.forEach(async (fileName) => {
      if (path.extname(fileName) !== ".js") {
        return;
      }
      const router = (await import(path.resolve(desRoot, fileName))).default;
      if (router instanceof PacketRouter) {
        this._router.merge(router);
        glog.info("add packetHandler", {
          fileName,
          mapSize: Object.keys(this._router.functions).length,
        });
      } else {
        throw TypeError(
          `Module '${fileName}' is not a instance of TcpServerRouter. Use 'const router = tcp.router.server(); ... export = router;'`
        );
      }
    });
  }

  sendPacket(serverAddress: string, packet: IPacket): void {
    const tsfsmgr = this._TcpServerFSSessionManager;
    const ss = tsfsmgr.findSessionBySegment("serverAddress", serverAddress);
    if (!ss) {
      glog.warn("sendPacket, session not found, serverAddress -", {
        serverAddress,
        packetName: packet.getPacketName(),
      });
      return;
    }
    ss.send(packet);
  }

  broadcast(packet: IPacket): void {
    this._TcpServerFSSessionManager.getSessions().forEach((session) => {
      session.send(packet);
    });
  }

  @On("TcpServerFSSessionManager:connect")
  private onConnected(session: TcpServerFSSession) {
    this.connected.emit(session);
  }

  @On("TcpServerFSSessionManager:disconnect")
  private onDisconnected(session: TcpServerFSSession) {
    this.disconnected.emit(session);
  }
}
