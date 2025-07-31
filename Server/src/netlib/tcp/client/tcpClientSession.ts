import net = require("net");
import path = require("path");
import fs from "fs";
import { SERVER_CONNECT_PACKET, IPacket } from "../basicPackets";
import { IDisposable, TcpSocket } from "../interface";
import { Segments, SegmentValue } from "../segments";
import { SocketOption, SocketStream } from "../socketStream";
import { TypedEvent } from "../typedEvent";
import glog from "../../../commonlib/glog";
import { PacketRouter, PacketFunction } from "../tcpRouter";
import * as tcp from "../../tcp";

export class TcpSocketOption implements SocketOption {
  keepAlive: boolean = true;
  noDelay: boolean = true;
  timeout: number = 0;
  compressThreshold: number = 4096;
  reconnect = {
    interval: 1000,
    repeat: 30,
    increament: 1000,
  };
}

export class TcpClientSession implements TcpSocket, IDisposable {
  disconnected = new TypedEvent<TcpClientSession>();
  connected = new TypedEvent<TcpClientSession>();

  private _port: number;
  private _host: string;
  private _options = new TcpSocketOption();
  private _socket: net.Socket = null;
  private _stream: SocketStream = null;
  private _router: PacketRouter = null;
  private _segments: Segments = new Segments();
  private _connectionUrl: string = "";

  private _reconnectInterval: number;
  private _reconnectCount: number = 0;
  private _onConnected: (client: TcpClientSession) => void;
  private _onDisconnected: (client: TcpClientSession) => void;

  constructor(host: string, port: number, options?: TcpSocketOption) {
    if (options) this._options = options;

    this._reconnectInterval = this._options.reconnect.interval;
    this._port = port;
    this._host = host;
    this._router = tcp.createPacketRouter();
  }

  getSessionId(): string {
    glog.warn("TcpClientSession.getSessionId() function is not implemented.");
    return "";
  }

  dispose() {
    this.cleanupSocket();
    if (this._router) {
      this._router.dispose();
      this._router = null;
    }
  }

  private cleanupSocket() {
    if (this._socket) {
      //this.socket.removeAllListeners();
      this._socket.destroy(new Error("terminated!"));
      this._socket = null;
    }

    if (this._stream) {
      this._stream.dispose();
      this._stream = null;
    }
  }

  setSegment(key: string, value: SegmentValue) {
    this._segments.set(key, value);
  }

  getSegments() {
    return this._segments;
  }

  getSegment(key: string): SegmentValue {
    return this._segments.get(key);
  }

  setConnectionUrl(connUrl): void {
    this._connectionUrl = connUrl;
  }

  getConnectionUrl(): string {
    return this._connectionUrl;
  }

  on<T extends IPacket>(ctor: new () => T, listener: PacketFunction<T>) {
    this._router.on(ctor, listener);
  }

  async routeEx(basedir: string, targetdir: string) {
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
        console.log(router.default);
        throw TypeError(
          `Module '${fileName}' is not a instance of TcpClientRouter. Use 'const router = tcp.router.client(); ... export = router;'`
        );
      }
    });
  }

  isConnected() {
    return this._stream !== null;
  }

  disconnect() {
    this._socket.end();
  }

  connect(onConnected, onDisconnected) {
    this._onConnected = onConnected;
    this._onDisconnected = onDisconnected;
    this.tryConnect().then((connected) => {
      if (!connected) {
        this.reconnect();
      }
    });
  }

  private async tryConnect(): Promise<boolean> {
    // 접속 되어 있는지 여부 확인
    if (this.isConnected()) {
      glog.warn("socket is already connected.");
      return Promise.resolve(false);
    }

    // 현재 접속 중이거나 연결이 되지 않은채로 소캣만 살아있는 상태인지 체크
    if (this._socket !== null) {
      if (this._socket.connecting) {
        glog.error("now socket connecting.");
        return Promise.resolve(false);
      } else {
        glog.error("socket not connected but still alive.");
        this._socket.end();
        this._socket = null;
        return Promise.resolve(false);
      }
    }

    return new Promise<boolean>((resolve) => {
      glog.info(`try connecting to server ... ${this._host}:${this._port}`);
      this._socket = net.createConnection(this._port, this._host, () => {
        glog.info(`client socket connected`);
        this._stream = new SocketStream(this._socket, this._options);

        // 연결 전 이벤트 수신 해제
        this._socket.removeAllListeners();

        // 연결 후 이벤트 수신
        this.bindSocketEvents();

        // 재연결 관련 변수 초기화
        this._reconnectCount = 0;
        this._reconnectInterval = this._options.reconnect.interval;

        // 연결 완료되었다는 패킷 전송
        const packet = new SERVER_CONNECT_PACKET(this._segments);
        this.send(packet);

        this.connected.emit(this);

        if (this._onConnected) {
          this._onConnected(this);
        }

        resolve(true);
      });

      this._socket.on("error", (err: any) => {
        // Socket Error handler:
        glog.error("connect socket error,", err);
      });

      this._socket.on("close", () => {
        glog.info("connect socket closed.");
        this.cleanupSocket();
        resolve(false);
        this._onDisconnected(this);
      });
    });
  }

  send(packet: IPacket) {
    if (this._stream) {
      const writtenBytes = this._stream.send(packet);
    } else {
      glog.verbose(`send packet failed - socket closed or not connected.
      ${packet.getPacketName()}`);
    }
  }

  private async waitForSeconds(seconds: number) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }

  private reconnect() {
    // disposed
    if (!this._router) return;

    if (this._reconnectInterval > 0) {
      this._reconnectCount++;

      // 재연결 지정 횟수 초과시 인터벌을 증가 시킨다.
      if (this._reconnectCount > this._options.reconnect.repeat) {
        this._reconnectCount = 0;
        this._reconnectInterval += this._options.reconnect.increament;
      }

      glog.warn(`try reconnect after ${this._reconnectInterval} ms.`);
      this.waitForSeconds(this._reconnectInterval * 0.001)
        .then(() => {
          return this.tryConnect();
        })
        .then((connected) => {
          if (!connected) {
            this.reconnect();
          }
        });
    }
  }

  private bindSocketEvents() {
    // binding listeners:
    this._socket.on("data", (data: Buffer) => {
      this._stream.read(data, (packet, size) => {
        this._router.emit(packet, size, this);
      });
    });

    this._socket.on("error", (err: any) => {
      // errno: ECONNRESET, 서버에 데이터를 보냈는데 서버가 소켓을 읽다가 예외가 발생한 경우 주로 생기는 에러
      glog.error("client socket error", err);
    });

    this._socket.on("timeout", () => {
      glog.info("client socket timeout.");
      this.dispose();
    });

    this._socket.on("end", () => {
      glog.info("client socket end.");
      if (this._socket) {
        this.disconnected.emit(this);
        this.cleanupSocket();
      }
    });

    this._socket.on("close", () => {
      glog.info("client socket closed.");
      if (this._socket) {
        this.disconnected.emit(this);
        this.cleanupSocket();
      }
      this.reconnect();
    });
  }
}
