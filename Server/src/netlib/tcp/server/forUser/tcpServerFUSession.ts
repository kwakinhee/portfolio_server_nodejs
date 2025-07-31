import * as net from "net";
import { GError, GErrorCode } from "../../../../commonlib/gerror";
import glog from "../../../../commonlib/glog";
import Queue from "queue-fifo";
import * as gutil from "../../../../commonlib/gutil";
import gconf from "../../../../commonlib/gconf";
import {
  PAYLOAD_FLAG,
  DISCONNECT_REASON,
  KICK_REASON,
} from "../../../../commonlib/genum";

// ----------------------------------------------------------------------------
// Constants.
// ----------------------------------------------------------------------------

const Const = {
  HeaderLen: 6,
  RecvBufSize: 16384, // 16kb
};

export interface Payload {
  packetType: number | undefined;
  flags: number;
  buffer: Buffer | undefined; // logout payload 의 경우, undefined
}
export interface Packet {
  seqNum: number;
  type: number;
  body: any;
}

export abstract class TcpServerFUSession {
  // DB 에서 생성된 유저별 unique Id.
  protected _userId: number = 0;
  protected _disconnectReason: DISCONNECT_REASON | null = null;
  protected _kicked: { reason: KICK_REASON; authServerId: string } = null;

  // connected 된 unique Id.
  protected _sessionId: string;
  private _socket: net.Socket;
  // private _socketStream: SocketStream = null;
  // private _packetRouter: PacketRouter = null;
  private _recvBuf: Buffer;
  private _bytesReceived: number;
  private _payloadQueue: Queue<Payload>;

  constructor(
    sessionId: string,
    socket: net.Socket
    // packetRouter: PacketRouter,
  ) {
    this._sessionId = sessionId;

    this._socket = socket;
    this._socket.setNoDelay();

    const loginTimeout = 10000;
    this._socket.setTimeout(loginTimeout);

    this._recvBuf = Buffer.allocUnsafe(Const.RecvBufSize);
    this._bytesReceived = 0;

    this._payloadQueue = new Queue<Payload>();

    //  this._packetRouter = packetRouter;
    // this._socketStream = new SocketStream(socket);
    this._bindSocketEvents();
  }

  // abstract
  protected abstract _onDisconnected(): any;
  protected abstract _onPacket(
    session: TcpServerFUSession,
    packetType: number,
    request: any
  ): Promise<any>;
  protected abstract _logOut(): Promise<void>;

  protected abstract _sendGError(
    // seqNum: number,
    packetType: number,
    err: GError
  ): Promise<boolean>;

  protected abstract _serialize(packetType: number, body: any): any;
  protected abstract _deserialize(packetType: number, buffer: Buffer): any;

  //get set
  getSessionId(): string {
    return this._sessionId;
  }

  getIp(): string {
    return this._socket.remoteAddress;
  }

  getUserId(): number {
    return this._userId;
  }

  setUserId(x: number) {
    this._userId = x;
  }

  clearSocketTimeout(): void {
    this._socket.setTimeout(0);
  }

  private _bindSocketEvents() {
    this._socket.on("timeout", () => {
      glog.warn("[SOCKET] timeout", {
        sessionId: this._sessionId,
        userId: this._userId,
      });

      this._socket.destroy();
    });

    this._socket.on("data", (data) => {
      this._onSocketRecv(data);
    });

    this._socket.on("end", () => {
      glog.info("[SOCKET] connection reset by peer", {
        sessionId: this._sessionId,
        userId: this._userId,
      });
      this._socket.destroy();
    });

    this._socket.on("close", () => {
      glog.debug("[SOCKET] closed", {
        sessionId: this._sessionId,
        userId: this._userId,
      });

      this._onDisconnected();
    });

    this._socket.on("error", (e) => {
      glog.warn("[SOCKET] client error", {
        id: this._sessionId,
        userId: this._userId,
        errMsg: e.message,
      });
      this._socket.destroy(e);
    });
  }

  disconnect(disconnectReason: DISCONNECT_REASON): void {
    glog.verbose("Disconnecting user.", {
      userId: this._userId,
      sessionId: this._sessionId,
      disconnectReason,
    });

    if (this._disconnectReason) {
      glog.warn("Trying to set disconnect reason more than once.", {
        userId: this._userId,
        sessionId: this._sessionId,
        old: this._disconnectReason,
        disconnectReason,
      });
    } else {
      this._disconnectReason = disconnectReason;
    }

    this._socket.destroy();
  }

  // 공통으로 룸을 해제 로직
  onSocketClose(): void {
    if (!this._disconnectReason) {
      this._disconnectReason = DISCONNECT_REASON.SOCKET_CLOSED;
    }

    const logoutPayload: Payload = {
      flags: PAYLOAD_FLAG.LOGOUT,
      packetType: undefined,
      buffer: undefined,
    };

    const _payloadQueuedSize: number = this._getPayloadQueued();
    this._enqueuePayloads([logoutPayload]);

    // 처리중인 패킷이 없을 경우 바로 payload 수행.
    if (_payloadQueuedSize === 0) {
      this._tryPayload();
    }
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

      // 패킷량이 점점 부하가 많아질 경우.
      if (_payloadQueuedSize > (gconf.max_payloadQueueSize || 5)) {
        glog.error("[onRecv] payloadSize-has-been-exceeded", {
          userId: this._userId,
          sessionId: this._sessionId,
          _payloadQueuedSize,
          max_payloadQueueSize: gconf.max_payloadQueueSize,
        });

        this.disconnect(DISCONNECT_REASON.EXCEEDED_PAYLOAD);
        return;
      }

      this._enqueuePayloads(payloads);

      // 처리중인 패킷이 없을 경우 바로 payload 수행.
      if (_payloadQueuedSize === 0) {
        this._tryPayload();
      }
    } catch (error) {
      glog.error("onRecv failed", {
        sessionId: this._sessionId,
        userId: this._userId,
        msg: error.message,
        stack: error.stack,
      });

      this.disconnect(DISCONNECT_REASON.ON_RECV_ERROR);
    }
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

    // 로그아웃 payload 특별 처리.
    if (_peekPayload.flags & PAYLOAD_FLAG.LOGOUT) {
      this._logOut();
      return;
    }

    if (this._disconnectReason) {
      // 연결이 끊긴 상태이면, 일반 패킷 처리는 스킵한다.
      this._dequeuePayload();
      this._tryPayload();
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
        let rxbody: any;
        rxbody = request.toJSON();

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
        glog.warn("packet processed with error", {
          userId: this._userId,
          packetType: payload.packetType,
          gcode: err.gcode,
          error: err.message,
          extra: err.extra,
          time: Math.abs(new Date().getTime() - dStart.getTime()),
          sessionId: this.getSessionId(),
        });

        // TODO: error stack id 로 저장.
        glog.error(err.stack);

        if (!(err instanceof GError)) {
          return this._sendGError(
            payload.packetType,
            new GError(err.message, GErrorCode.INTERNAL_ERROR, null, err.stack)
          );
        }

        if (
          err instanceof GError &&
          (gconf.isDev || err.gcode >= GErrorCode.NON_FATAL_ERROR_MARK)
        ) {
          return this._sendGError(payload.packetType, err);
        }

        this.disconnect(DISCONNECT_REASON.ERROR_OCCURRED);
      })
      .catch((err) => {
        glog.error("caught again", {
          sessionId: this._sessionId,
          userId: this._userId,
          error: err.message,
        });

        glog.error(err.stack);
        this.disconnect(DISCONNECT_REASON.ERROR_OCCURRED);
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
        sessionId: this._sessionId,
        userId: this._userId,
        writableLength: this._socket.writableLength,
        bufferLength: buf.byteLength,
        bytesRead: this._socket.bytesRead,
        bytesWritten: this._socket.bytesWritten,
      });

      this._socket.once("drain", () => {
        glog.warn("Socket drained.", {
          sessionId: this._sessionId,
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

  async sendProtobufPacket<T>(
    // seqNum: number,
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

    glog.debug("sending to user", {
      userId: this._userId,
      sessionId: this._sessionId,
      bytes: sendBuf.byteLength,
      sendUtcTimeStampInMs: gutil.curTimeUtcInMs(),
    });

    return this._sendBuffer(sendBuf);
  }
}

export function buildProtobufPacketBuffer<T>(
  packetType: number,
  body: T,
  payloadFlags?: number
  // seqNum?: number
): Buffer {
  let buf = this._serialization(packetType, body);
  const packetSize = buf.byteLength;
  const sendBuf = Buffer.alloc(Const.HeaderLen + packetSize);

  const firstByte = (packetSize & 0xff00) >> 8;
  const secondByte = packetSize & 0x00ff;

  sendBuf[0] = firstByte;
  sendBuf[1] = secondByte;
  sendBuf[2] = payloadFlags;

  sendBuf.fill(buf, Const.HeaderLen);

  return sendBuf;
}
