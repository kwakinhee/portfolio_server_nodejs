import { SmartBuffer } from "smart-buffer";
import { EnumPacketOption } from "./basicPackets";

export class PacketHeader {
  static readonly Size = 10;

  packetId: number = -1; // 4 byte
  bodySize: number = 0; // 4 byte
  options: EnumPacketOption = 0; // 2 byte

  constructor(
    packetId?: number,
    bodySize?: number,
    options?: EnumPacketOption
  ) {
    if (packetId) this.packetId = packetId;
    if (bodySize) this.bodySize = bodySize;
    if (options) this.options = options;
  }

  serialize(writer: SmartBuffer) {
    writer.writeInt32LE(this.packetId, 0);
    writer.writeInt32LE(this.bodySize, 4);
    writer.writeInt16LE(this.options, 8);
  }

  deserialize(reader: SmartBuffer) {
    this.packetId = reader.readInt32LE(0);
    this.bodySize = reader.readInt32LE(4);
    this.options = reader.readInt16LE(8);
  }
}
