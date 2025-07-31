import * as net from "net";
import * as zlib from "zlib";
import { inspect } from "util";
import glog from "../../commonlib/glog";
import { SmartBuffer } from "smart-buffer";
import { PacketFactory } from "./packetFactory";
import { IDisposable } from "./interface";
import { PacketHeader } from "./packetHeader";
import {
  IPacket,
  EnumPacketOption,
  getInternalPacketName,
} from "./basicPackets";

export interface SocketOption {
  keepAlive: boolean; // default: false
  noDelay: boolean; // default: true
  timeout: number; // default: 0
}

export class SocketStream implements IDisposable {
  private _socket: net.Socket = null;
  private _sendBuf: SmartBuffer = null;
  private _recvBuf: SmartBuffer = null;

  constructor(socket: net.Socket, options?: SocketOption) {
    this._socket = socket;
    if (options) {
      this._socket.setKeepAlive(options.keepAlive);
      this._socket.setNoDelay(options.noDelay);
      this._socket.setTimeout(options.timeout);
    }

    this._sendBuf = new SmartBuffer({
      size: 4096,
    });
    this._recvBuf = new SmartBuffer({
      size: 4096,
    });
  }

  dispose() {
    this._socket = null;
    if (this._sendBuf) {
      this._sendBuf.clear();
      this._sendBuf = null;
    }

    if (this._recvBuf) {
      this._recvBuf.clear();
      this._recvBuf = null;
    }
  }

  send(packet: IPacket): number {
    try {
      const header = new PacketHeader();
      header.serialize(this._sendBuf);
      packet.serialize(this._sendBuf);

      // 패킷 헤더 세팅.
      const options = packet.getOptions();
      header.packetId = packet.getPacketId();
      header.bodySize = this._sendBuf.length - PacketHeader.Size;
      header.options = options;
      header.serialize(this._sendBuf);

      header.options = EnumPacketOption.None;

      this._socket.write(this._sendBuf.toBuffer());

      if (packet.debugTrace()) {
        const packetName = getInternalPacketName(packet);
        glog.verbose(
          `[send packet], name:${packetName} bodySize:${header.bodySize}`,
          packet
        );
      }
      return this._sendBuf.length;
    } catch (error) {
      glog.error("send fail - error", error);
      return 0;
    } finally {
      this._sendBuf.clear();
    }
  }

  private readPacketHeader(): PacketHeader {
    if (this._recvBuf.length >= PacketHeader.Size) {
      const header = new PacketHeader();
      header.deserialize(this._recvBuf);
      return header;
    }
    return null;
  }

  read(data: Buffer, onpacket: (packet: IPacket, size: number) => void) {
    if (data.length === 0) return;

    this._recvBuf.writeBuffer(data);

    while (this._recvBuf.length > 0) {
      const header = this.readPacketHeader();

      // Need to read more.
      if (header === null) break;

      const totalSize = header.bodySize + PacketHeader.Size;

      // Need to read more.
      if (this._recvBuf.length < totalSize) break;

      // 패킷 생성
      const packet = PacketFactory.Create(header.packetId);
      const bf = this._recvBuf.toBuffer();
      if (packet === null) {
        // 서버에서 생성 불가능한 패킷 도착
        glog.error("undefeind server packet, id" + header.packetId);
        this._socket.end();
        return;
      }

      if (header.bodySize > 0) {
        // 헤더 사이즈를 제외한 실제 데이터 부분 추출
        const body: Buffer = bf.subarray(
          PacketHeader.Size,
          totalSize
        ) as Buffer;

        try {
          // 스마트 버퍼를 일반버퍼로 변환후 packet 으로
          const bodyReader = SmartBuffer.fromBuffer(body);
          packet.deserialize(bodyReader);

          if (packet.debugTrace()) {
            const packetName = getInternalPacketName(packet);
            glog.verbose(`[recv packet], name:${packetName}`, { ...packet });
          }
        } catch (error) {
          glog.error("recv fail - error", error);

          // 패킷 읽기를 실패할 경우 소켓을 종료 후 재접속을 해야한다.
          //
          this._socket.end();
          return;
        }
      }

      onpacket(packet, totalSize);

      // * 읽기 버퍼 잘라내기
      if (this._recvBuf.length > totalSize) {
        //  const remainSize = this.recvBuf.length - totalSize;
        const remainbf = bf.subarray(totalSize) as Buffer;
        this._recvBuf.clear();
        this._recvBuf.writeBuffer(remainbf);

        // glog.info(`[read] remain process`, {
        //   remainSize,
        //   copyed: this.reader.length,
        //   writeOffset: this.reader.writeOffset,
        // });
      } else {
        // 정확한 사이즈로 도착
        this._recvBuf.clear();
      }
    }
  }
}
