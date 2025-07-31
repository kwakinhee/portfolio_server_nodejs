import { PacketFactory } from "../../netlib/tcp";
import { EnumPacketOption, JsonPacket } from "../../netlib/tcp/basicPackets";

enum Enum_AUTH_WM_Packet {
  AUTH_WM_GetWorldServerAddress = 300,
  AUTH_WM_Ping,

  WM_AUTH_GetWorldServerAddress = 400,
  WM_AUTH_Pong,
}

export class AUTH_WM_GetWorldServerAddress extends JsonPacket {
  userId: number;

  constructor(userId: number) {
    super();
    this.data.userId = userId;
  }

  getOptions(): EnumPacketOption {
    return EnumPacketOption.None;
  }

  getPacketId() {
    return Enum_AUTH_WM_Packet.AUTH_WM_GetWorldServerAddress;
  }

  getData(): AUTH_WM_GetWorldServerAddress {
    return { ...this.data };
  }
}
PacketFactory.Register(
  Enum_AUTH_WM_Packet.AUTH_WM_GetWorldServerAddress,
  AUTH_WM_GetWorldServerAddress
);

export class WM_AUTH_GetWorldServerAddress extends JsonPacket {
  result: boolean;
  worldServerAddress: string;
  userId: number;

  constructor(
    result: boolean = false,
    worldServerAddress: string = "",
    userId: number,
  ) {
    super();
    this.data.result = result;
    this.data.worldServerAddress = worldServerAddress;
    this.data.userId = userId;
  }

  getOptions(): EnumPacketOption {
    return EnumPacketOption.None;
  }

  getPacketId() {
    return Enum_AUTH_WM_Packet.WM_AUTH_GetWorldServerAddress;
  }

  getData(): WM_AUTH_GetWorldServerAddress {
    return { ...this.data };
  }
}
PacketFactory.Register(
  Enum_AUTH_WM_Packet.WM_AUTH_GetWorldServerAddress,
  WM_AUTH_GetWorldServerAddress
);

export class WM_AUTH_Pong extends JsonPacket {
  constructor() {
    super();
  }

  getOptions(): EnumPacketOption {
    return EnumPacketOption.None;
  }

  getPacketId() {
    return Enum_AUTH_WM_Packet.WM_AUTH_Pong;
  }

  override debugTrace(): boolean {
    return false;
  }
}
PacketFactory.Register(Enum_AUTH_WM_Packet.WM_AUTH_Pong, WM_AUTH_Pong);

export class AUTH_WM_Ping extends JsonPacket {
  constructor() {
    super();
  }

  getOptions(): EnumPacketOption {
    return EnumPacketOption.None;
  }

  getPacketId() {
    return Enum_AUTH_WM_Packet.AUTH_WM_Ping;
  }
  
  override debugTrace(): boolean {
    return false;
  }
}
PacketFactory.Register(Enum_AUTH_WM_Packet.AUTH_WM_Ping, AUTH_WM_Ping);
