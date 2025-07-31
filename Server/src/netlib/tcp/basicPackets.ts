// -------------------------------------------------------------------------------------------------
// 모든 서버간 통신간에 공통적으로 쓰이는 Packet 정의.
// -------------------------------------------------------------------------------------------------

import { SmartBuffer } from "smart-buffer";
import { PacketFactory } from "./packetFactory";
import { Segments, SegmentValue } from "./segments";
import { ISegments } from "./interface";
import { Message } from "protobufjs";

// 2 byte flag (16 options)
export enum EnumPacketOption {
  None = 0,
  Compressed = 1, //TODO: 추후 압축 or 패킷 압복호화 기능 추가.
  All = 2,
}

export enum EnumBasicPacket {
  JSON = 0,
  GAME_ERROR = 1,
  SERVER_CONNECT_PACKET = 2,
  PROTOBUF = 3,
}

export function getInternalPacketName(packet: IPacket): string {
  return packet.getPacketName();
}

export function getInternalPacketId(packet: IPacket): number {
  return packet.getPacketId();
}

export abstract class IPacket {
  debugTrace(): boolean {
    return true;
  }
  getPacketName(): string {
    return this.constructor.name;
  }
  getOptions(): EnumPacketOption {
    return EnumPacketOption.None;
  }

  abstract getPacketId(): number;
  abstract serialize(bf: SmartBuffer): void;
  abstract deserialize(bf: SmartBuffer): void;
}

export abstract class ProtobufPacket extends IPacket {
  data: Message;

  constructor(data) {
    super();
    if (data) this.data = data;
  }

  debugTrace(): boolean {
    return true;
  }

  getOptions(): EnumPacketOption {
    return EnumPacketOption.Compressed;
  }

  getPacketType(): number {
    return EnumBasicPacket.PROTOBUF;
  }

  getPacketId(): number {
    throw new Error("not implemented");
  }

  serialize(bf: SmartBuffer) {
    let buffer = Message.encode(this.data).finish();
    //TODO: Uint8Array -> SmartBuffer
  }

  getData() {
    return this.data;
  }

  deserialize(bf: SmartBuffer) {
    //TODO:  SmartBuffer -> Uint8Array
    let proto: Uint8Array
    this.data = Message.decode(proto)
  }
}


export class JsonPacket extends IPacket {
  data: any = {};

  constructor(data?: any) {
    super();
    if (data) this.data = data;
  }

  debugTrace(): boolean {
    return true;
  }

  getOptions(): EnumPacketOption {
    return EnumPacketOption.Compressed;
  }

  getPacketId(): number {
    return EnumBasicPacket.JSON;
  }

  serialize(bf: SmartBuffer) {
    bf.writeStringNT(JSON.stringify(this.data));
  }

  getData() {
    return this.data;
  }

  deserialize(bf: SmartBuffer) {
    const json = bf.readStringNT();
    this.data = JSON.parse(json);
  }
}
PacketFactory.Register(EnumBasicPacket.JSON, JsonPacket);

// client 가 server 에 connection 되면 전송하는 패킷
export class SERVER_CONNECT_PACKET extends JsonPacket {
  constructor(segments?: Segments) {
    super();
    this.data.segments = segments ? segments : {};
  }

  getOption(): EnumPacketOption {
    return EnumPacketOption.None;
  }

  getPacketId() {
    return EnumBasicPacket.SERVER_CONNECT_PACKET;
  }

  setSegment(key: string, value: SegmentValue) {
    (this.data.segments as Segments).set(key, value);
  }

  getSegments(): ISegments {
    return this.data.segments;
  }
}
PacketFactory.Register(
  EnumBasicPacket.SERVER_CONNECT_PACKET,
  SERVER_CONNECT_PACKET
);

export class GameErrorPacket extends IPacket {
  message: string;
  mcode: number;
  extra?: string;
  stack?: string;

  debugTrace(): boolean {
    return false;
  }

  getPacketId() { 
    return EnumBasicPacket.GAME_ERROR;
  }

  serialize(bf: SmartBuffer) {
    bf.writeStringNT(this.message);
    bf.writeInt32LE(this.mcode);
    if (this.extra) {
      bf.writeInt8(1);
      bf.writeStringNT(this.extra);
    } else {
      bf.writeInt8(0);
    }

    if (this.stack) {
      bf.writeInt8(1);
      bf.writeStringNT(this.stack);
    } else {
      bf.writeInt8(0);
    }
  }

  deserialize(bf: SmartBuffer) {
    this.message = bf.readStringNT();
    this.mcode = bf.readInt32LE();

    if (bf.readInt8() === 1) {
      this.extra = bf.readStringNT();
    }
    if (bf.readInt8() === 1) {
      this.stack = bf.readStringNT();
    }
  }
}
PacketFactory.Register(EnumBasicPacket.GAME_ERROR, GameErrorPacket);
