import * as net from "net";
import { IDisposable, TcpSocket, ISegments } from "../../interface";
import { TypedEvent } from "../../typedEvent";
import { SocketStream } from "../../socketStream";
import { Segments } from "../../segments";
import { IPacket } from "../../basicPackets";
import { GError, GErrorCode } from "../../../../commonlib/gerror";
import { PacketRouter } from "../../tcpRouter";
import glog from "../../../../commonlib/glog";

export class TcpServerFSSession implements TcpSocket, IDisposable {
  disconnected = new TypedEvent<TcpServerFSSession>();

  private _socket: net.Socket;
  private _socketStream: SocketStream = null;
  private _sessionId: string;
  private _packetRouter: PacketRouter = null;
  private _segments: Segments = new Segments();
  private onDisconnected: (segment: Segments) => void;

  constructor(
    packetRouter: PacketRouter,
    sessionId: string,
    socket: net.Socket,
    onDisconnected: (segment: Segments) => void
  ) {
    this._sessionId = sessionId;
    this._packetRouter = packetRouter;
    this._socket = socket;
    this._socketStream = new SocketStream(socket);
    this.onDisconnected = onDisconnected;
    this._bindSocketEvents();
  }

  getSegments(): ISegments {
    return this._segments;
  }

  getSessionId() {
    return this._sessionId;
  }

  getIp() {
    return this._socket.remoteAddress;
  }

  dispose() {
    if (this._socket) {
      this._socket.removeAllListeners();
      this._socket.destroy();
      this._socket = null;
      glog.info("socket disposed, " + this._sessionId);
    }

    if (this._socketStream) {
      this._socketStream.dispose();
      this._socketStream = null;
    }

    if (this.disconnected) {
      this.disconnected.clear();
    }
  }

  send(packet: IPacket) {
    if (this._socketStream) {
      const writtenBytes = this._socketStream.send(packet);
    } else {
      throw new GError(
        "send fail, socket socketStream not instantiate.",
        GErrorCode.INTERNAL_ERROR,
        {
          packetName: packet.getPacketName(),
          packetBody: packet,
        }
      );
    }
  }

  private _bindSocketEvents() {
    this._socket.on("data", (data: Buffer) => {
      this._socketStream.read(data, (packet, size) => {
        this._packetRouter.emit(packet, size, this);
      });
    });

    this._socket.on("error", (err: any) => {
      // Socket Error handler:
      glog.error("socket error,", err);
    });

    this._socket.on("end", () => {
      glog.info("socket end.");
      if (this._socket) {
        this.disconnected.emit(this);
        this.dispose();
        this.onDisconnected(this._segments);
      }
    });

    this._socket.on("close", (hasError) => {
      glog.info("socket closed. error: " + hasError);
      if (this._socket) {
        this.disconnected.emit(this);
        this.dispose();
        this.onDisconnected(this._segments);
      }
    });
  }
}
