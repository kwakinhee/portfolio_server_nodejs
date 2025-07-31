import net = require("net");
import * as gutil from "../../../commonlib/gutil";
import { IDisposable } from "../interface";
import { Segments, SegmentValue } from "../segments";
import { TypedEvent } from "../typedEvent";
import glog from "../../../commonlib/glog";
import Queue = require("queue-fifo");
import { Payload } from "../server/forUser/tcpServerFUSession";
import { exit } from "process";
import { GErrorCode } from "../../../commonlib/gerrorCode";
import { GError } from "../../../commonlib/gerror";

const Const = {
  HeaderLen: 6,
  RecvBufSize: 16384, // 16kb
};

export class TcpBotClient implements IDisposable {
  protected _userId: number = 0;

  disconnected = new TypedEvent<TcpBotClient>();
  connected = new TypedEvent<TcpBotClient>();

  private _port: number;
  private _host: string;
  private _socket: net.Socket = null;
  private _segments: Segments = new Segments();
  private _connectionUrl: string = "";

  private _reconnectInterval: number;
  private _reconnectCount: number = 0;
  private _onConnected: (client: TcpBotClient) => void;
  private _onDisconnected: (client: TcpBotClient) => void;
  private _isConnected: boolean;

  private _recvBuf: Buffer;
  private _bytesReceived: number;
  private _payloadQueue: Queue<Payload>;
  private _packetHandler;

  serializer;
  deserializer;

  constructor(
    host: string,
    port: number,
    packetHandler: any,
    serializer,
    deserializer
  ) {
    this._reconnectInterval = 1000;
    this._port = port;
    this._host = host;
    this._packetHandler = packetHandler;
    this._recvBuf = Buffer.allocUnsafe(Const.RecvBufSize);
    this._bytesReceived = 0;
    this.serializer = serializer;
    this.deserializer = deserializer;
    this._payloadQueue = new Queue<Payload>();
  }

  getSessionId(): string {
    glog.warn("TcpClientSession.getSessionId() function is not implemented.");
    return "";
  }

  dispose() {
    this.cleanupSocket();
  }

  private cleanupSocket() {
    if (this._socket) {
      //this.socket.removeAllListeners();
      this._socket.destroy(new Error("terminated!"));
      this._socket = null;
      this._isConnected = false;
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

  isConnected() {
    return this._isConnected === true;
  }

  disconnect() {
    this._socket.end();
  }

  connect(onConnected, onDisconnected) {
    this._onConnected = onConnected;
    this._onDisconnected = onDisconnected;
    this.tryConnect().then((connected) => {
      // if (!connected) {
      //   this.reconnect();
      // }
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

        // 연결 전 이벤트 수신 해제
        this._socket.removeAllListeners();
        this._isConnected = true;
        // 연결 후 이벤트 수신
        this.bindSocketEvents();

        // 재연결 관련 변수 초기화
        this._reconnectCount = 0;
        this._reconnectInterval = 1000;

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

  private async waitForSeconds(seconds: number) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }

  private reconnect() {
    if (this._reconnectInterval > 0) {
      this._reconnectCount++;

      // 재연결 지정 횟수 초과시 인터벌을 증가 시킨다.
      if (this._reconnectCount > 5) {
        this._reconnectCount = 0;
        this._reconnectInterval += 500;
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
      this._onSocketRecv(data);
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
      // this.reconnect();
    });
  }

  _onSocketRecv(buf: Buffer) {
    try {
      // glog.debug("received from user", {
      //   sessionId: this._sessionId,
      //   bytes: buf.byteLength,
      //   recvUtcTimeStampInMs: gutil.curTimeUtcInMs(),
      // });

      const payloads = this._readPayloads(buf);

      if (payloads.length === 0) {
        return;
      }

      const _payloadQueuedSize: number = this._getPayloadQueued();

      this._enqueuePayloads(payloads);

      // 처리중인 패킷이 없을 경우 바로 payload 수행.
      if (_payloadQueuedSize === 0) {
        this._tryPayload();
      }
    } catch (error) {
      glog.error("onRecv failed", {
        msg: error.message,
        stack: error.stack,
      });
      exit(1);
    }
  }

  protected _onPacket(
    session: TcpBotClient,
    packetType: number,
    request: any
  ): Promise<any> {
    return this._packetHandler.exec(this, packetType, request);
  }

  private _processPacket(packetType: number, request: any): Promise<any> {
    return this._onPacket(this, packetType, request);
  }

  // payloads에 저장된 패킷이 모두 처리가 될때까지 지속적으로 패킷 처리 수행.
  private _tryPayload(): void {
    const _peekPayload: Payload = this._peekPayload();

    // 더이상 처리할 payload가 없을 경우 끝.
    if (!_peekPayload) {
      return;
    }

    // payload 처리.
    this._processPayload(_peekPayload).then(() => {
      this._dequeuePayload();
      this._tryPayload();
    });
  }

  private _processPayload(payload: Payload): Promise<boolean | void> {
    const dStart = new Date();

    return this._parsePacket(payload)
      .then((request: any) => {
        // glog.verbose("packet received", {
        //   userId: this._userId,
        //   packetType: payload.packetType,
        //   //typeStr: proto.toString(payload.packetType),
        //   size: payload.buffer.byteLength,
        //   rxbody,
        //   time: Math.abs(new Date().getTime() - dStart.getTime()),
        // });

        // process packet
        return this._processPacket(payload.packetType, request);
      })
      .catch((err) => {
        glog.error("caught again", {
          userId: this._userId,
          error: err.message,
        });

        glog.error(err.stack);
      });
  }

  private _enqueuePayloads(payloads: Payload[]): void {
    for (let i = 0; i < payloads.length; i++) {
      this._payloadQueue.enqueue(payloads[i]);
    }
  }

  private _peekPayload(): Payload {
    return this._payloadQueue.peek();
  }

  private _dequeuePayload(): Payload {
    return this._payloadQueue.dequeue();
  }

  private _getPayloadQueued(): number {
    return this._payloadQueue.size();
  }

  getPayloadLength(): number {
    const firstByte = this._recvBuf[0];
    const secondByte = this._recvBuf[1];

    let payloadSize = 0;
    payloadSize |= (firstByte & 0xff) << 8;
    payloadSize |= secondByte & 0xff;

    return payloadSize;
  }

  getPacketType(): number {
    const thirdByte = this._recvBuf[2];
    const fourthByte = this._recvBuf[3];

    let packetType = 0;
    packetType |= (thirdByte & 0xff) << 8;
    packetType |= fourthByte & 0xff;

    return packetType;
  }

  private _readPayloads(buf: Buffer): Payload[] {
    // receive 한 data 를 recvBuf 에 copy.
    buf.copy(this._recvBuf, this._bytesReceived, 0, buf.byteLength);
    this._bytesReceived += buf.byteLength;

    // receive data 가 많은 payloads 를 가지고 올수 있음.
    const payloads: Payload[] = [];
    while (true) {
      // receive 한 data가 head 의 Length 보다 작은경우 추가로 read 해야함.
      if (this._bytesReceived < Const.HeaderLen) {
        break;
      }

      const payloadSize = this.getPayloadLength();

      // receive 한 data가 Const.HeaderLen + payloadSize 길이 보다 작은경우 추가로 read 해야함.
      if (this._bytesReceived < Const.HeaderLen + payloadSize) {
        break;
      }

      const packetType = this.getPacketType();
      const flags = this._recvBuf[4];

      const numBytesToDiscard = Const.HeaderLen + payloadSize;
      const numBytesRemaining = this._bytesReceived - numBytesToDiscard;

      const payloadBuffer = Buffer.alloc(payloadSize);

      // recvBuf 에서 Const.HeaderLen 을 제외한 bodySize 만큼 payloadBuffer 에 copy.
      this._recvBuf.copy(payloadBuffer, 0, Const.HeaderLen, numBytesToDiscard);

      // recvBuf의 남은 데이터를 reset된 recvBuf에 그대로 copy.
      this._recvBuf.copy(
        this._recvBuf,
        0,
        numBytesToDiscard,
        numBytesToDiscard + numBytesRemaining
      );

      // 남은 데이터 크기 저장.
      this._bytesReceived = numBytesRemaining;

      // User에 전달할 []Payload 저장
      payloads.push({
        flags,
        packetType,
        buffer: payloadBuffer,
      });
    }

    return payloads;
  }

  _deserialize(packetType: number, buf: Buffer) {
    const protobufMessageType = this.deserializer.get(packetType);

    if (!protobufMessageType) {
      glog.error("deserialization Unknown protobuf Message type.", {
        packetType,
      });

      throw new GError(
        "deserialization unknown-protobuf-Message-type",
        GErrorCode.UNKNOWN_PACKET_TYPE,
        packetType
      );
    }

    return protobufMessageType.decode(buf);
  }

  private _parsePacket(payload: Payload): Promise<any> {
    return Promise.resolve().then(() => {
      let request: any = this._deserialize(payload.packetType, payload.buffer);
      return request;
    });
  }

  private _sendBuffer(buf: Buffer): boolean {
    const bOk = this._socket.write(buf);
    if (!bOk) {
      glog.warn("Failed to write packet buffer.", {
        userId: this._userId,
        writableLength: this._socket.writableLength,
        bufferLength: buf.byteLength,
        bytesRead: this._socket.bytesRead,
        bytesWritten: this._socket.bytesWritten,
      });

      this._socket.once("drain", () => {
        glog.warn("Socket drained.", {
          userId: this._userId,
          writableLength: this._socket.writableLength,
          bufferLength: buf.byteLength,
          bytesRead: this._socket.bytesRead,
          bytesWritten: this._socket.bytesWritten,
        });
      });
    }

    return bOk;
  }

  _serialize(packetType, body) {
    const protobufMessageType = this.serializer.get(packetType);

    if (!protobufMessageType) {
      glog.error("serialization Unknown protobuf Message type.", {
        packetType,
      });

      throw new GError(
        "saerialization unknown-protobuf-Message-type",
        GErrorCode.UNKNOWN_PACKET_TYPE,
        packetType
      );
    }
    return protobufMessageType.encode(body).finish();
  }

  async send<T>(
    packetType: number,
    body: T,
    payloadFlags?: number
  ): Promise<boolean> {
    let buf = this._serialize(packetType, body);
    const packetSize = buf.byteLength;
    const sendBuf = Buffer.alloc(Const.HeaderLen + packetSize);

    const firstByte = (packetSize & 0xff00) >> 8;
    const secondByte = packetSize & 0x00ff;

    sendBuf[0] = firstByte;
    sendBuf[1] = secondByte;

    const thirdByte = (packetType & 0xff00) >> 8;
    const fourthByte = packetType & 0x00ff;

    sendBuf[2] = thirdByte;
    sendBuf[3] = fourthByte;

    sendBuf[4] = payloadFlags;

    sendBuf.fill(buf, Const.HeaderLen);

    return this._sendBuffer(sendBuf);
  }
}
