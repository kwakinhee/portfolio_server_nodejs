import { PacketFactory } from "../../netlib/tcp/packetFactory";
import { EnumPacketOption, JsonPacket } from "../../netlib/tcp/basicPackets";
import { curTimeUtcInSec } from "../../commonlib/gutil";

// 패킷ID를 정의하는 Enum 과 각 Packet 클래스의 getPacketId()에서 리턴하는 Id는 같아야 함.
export enum Enum_W_WM_Packet {
  // WorldServer to WorldMgrServer
  W_WM_RegisterWorld = 100,
  W_WM_UnRegisterWorld,
  W_WM_UpdateWorldStatus,
  W_WM_Ping,
  W_WM_RegisterWorldServer,
  W_WM_UserJoinWorld,
  W_WM_UserLeaveWorld,
  W_WM_GetWorldAddress,
  // WorldMgrServer to WorldServer
  WM_W_SpawnWorld = 200,
  WM_W_Pong,
  WM_W_GetWorldAddress,
}

export class W_WM_RegisterWorldServer extends JsonPacket {
  publicAddress: string;
  appId: string;
  
  constructor(publicAddress: string, appId: string) {
    super();
    this.data.publicAddress = publicAddress;
    this.data.appId = appId;
  }

  getOptions(): EnumPacketOption {
    return EnumPacketOption.None;
  }

  getPacketId() {
    return Enum_W_WM_Packet.W_WM_RegisterWorldServer;
  }

  getData(): W_WM_RegisterWorldServer {
    return { ...this.data };
  }
}
PacketFactory.Register(
  Enum_W_WM_Packet.W_WM_RegisterWorldServer,
  W_WM_RegisterWorldServer
);

export class W_WM_RegisterWorld extends JsonPacket {
  result: boolean;
  worldId: number;
  worldServerAddress: string;

  constructor(result: boolean, worldId: number, worldServerAddress: string) {
    super();
    this.data.result = result;
    this.data.worldId = worldId;
    this.data.worldServerAddress = worldServerAddress;
  }

  getOptions(): EnumPacketOption {
    return EnumPacketOption.None;
  }

  getPacketId() {
    return Enum_W_WM_Packet.W_WM_RegisterWorld;
  }

  getData(): W_WM_RegisterWorld {
    return { ...this.data };
  }
}
PacketFactory.Register(Enum_W_WM_Packet.W_WM_RegisterWorld, W_WM_RegisterWorld);

export class W_WM_UnRegisterWorld extends JsonPacket {
  worldId: number;

  constructor(worldId: number) {
    super();
    this.data.worldId = worldId;
  }

  getOptions(): EnumPacketOption {
    return EnumPacketOption.None;
  }

  getPacketId() {
    return Enum_W_WM_Packet.W_WM_UnRegisterWorld;
  }

  getData(): W_WM_UnRegisterWorld {
    return { ...this.data };
  }
}
PacketFactory.Register(
  Enum_W_WM_Packet.W_WM_UnRegisterWorld,
  W_WM_UnRegisterWorld
);

export class W_WM_Ping extends JsonPacket {
  userCount: number;
  worldCount: number;

  constructor(userCount: number, worldCount: number) {
    super();
    this.data.userCount = userCount;
    this.data.worldCount = worldCount;
  }

  getOptions(): EnumPacketOption {
    return EnumPacketOption.None;
  }

  debugTrace(): boolean {
    return false;
  }

  getPacketId() {
    return Enum_W_WM_Packet.W_WM_Ping;
  }

  getData(): W_WM_Ping {
    return { ...this.data };
  }
}
PacketFactory.Register(Enum_W_WM_Packet.W_WM_Ping, W_WM_Ping);

export class W_WM_UpdateWorldStatus extends JsonPacket {
  worldServerId: string;
  worldId: number;
  updatedAt: number;
  update: any;

  constructor(worldServerId: string, worldId: number, update: any) {
    super();
    this.data.worldServerId = worldServerId;
    this.data.worldId = worldId;
    this.data.update = update;
    this.data.udpatedAt = curTimeUtcInSec();
  }

  getOptions(): EnumPacketOption {
    return EnumPacketOption.None;
  }

  getPacketId() {
    return Enum_W_WM_Packet.W_WM_UpdateWorldStatus;
  }

  getData(): W_WM_UpdateWorldStatus {
    return { ...this.data };
  }
}
PacketFactory.Register(
  Enum_W_WM_Packet.W_WM_UpdateWorldStatus,
  W_WM_UpdateWorldStatus
);

export class W_WM_UserJoinWorld extends JsonPacket {
  result: boolean;
  worldId: number;
  userId: number;
  userCount: number;

  constructor(
    result: boolean,
    worldId: number,
    userId: number,
    userCount: number
  ) {
    super();
    this.data.result = result;
    this.data.worldId = worldId;
    this.data.userId = userId;
    this.data.userCount = userCount;
  }

  getOptions(): EnumPacketOption {
    return EnumPacketOption.None;
  }

  getPacketId() {
    return Enum_W_WM_Packet.W_WM_UserJoinWorld;
  }

  getData(): W_WM_UserJoinWorld {
    return { ...this.data };
  }
}
PacketFactory.Register(Enum_W_WM_Packet.W_WM_UserJoinWorld, W_WM_UserJoinWorld);

export class W_WM_UserLeaveWorld extends JsonPacket {
  worldId: number;
  userCount: number;

  constructor(worldId: number, userId: number, userCount: number) {
    super();
    this.data.worldId = worldId;
    this.data.userId = userId;
    this.data.userCount = userCount;
  }

  getOptions(): EnumPacketOption {
    return EnumPacketOption.None;
  }

  getPacketId() {
    return Enum_W_WM_Packet.W_WM_UserLeaveWorld;
  }

  getData(): W_WM_UserJoinWorld {
    return { ...this.data };
  }
}
PacketFactory.Register(Enum_W_WM_Packet.W_WM_UserLeaveWorld, W_WM_UserLeaveWorld);

export class WM_W_SpawnWorld extends JsonPacket {
  worldId: number;

  constructor(worldId: number) {
    super();
    this.data.worldId = worldId;
  }

  override getOptions(): EnumPacketOption {
    return EnumPacketOption.None;
  }

  override getPacketId() {
    return Enum_W_WM_Packet.WM_W_SpawnWorld;
  }

  override getData(): WM_W_SpawnWorld {
    return { ...this.data };
  }
}
PacketFactory.Register(Enum_W_WM_Packet.WM_W_SpawnWorld, WM_W_SpawnWorld);

export class WM_W_Pong extends JsonPacket {
  constructor() {
    super();
  }

  override getOptions(): EnumPacketOption {
    return EnumPacketOption.None;
  }

  override debugTrace(): boolean {
    return false;
  }

  override getPacketId() {
    return Enum_W_WM_Packet.WM_W_Pong;
  }
}
PacketFactory.Register(Enum_W_WM_Packet.WM_W_Pong, WM_W_Pong);


export class W_WM_GetWorldAddress extends JsonPacket {
  userId: number;
  worldId: number;
  clientVersion: string;
  autToken: string;

  constructor(userId: number, worldId: number, clientVersion: string, autToken: string) {
    super();
    this.data.userId = userId;
    this.data.worldId = worldId;
    this.data.clientVersion = clientVersion;
    this.data.autToken = autToken;
  }

  getOptions(): EnumPacketOption {
    return EnumPacketOption.None;
  }
    
  getPacketId() {
    return Enum_W_WM_Packet.W_WM_GetWorldAddress;
  }

  getData(): W_WM_GetWorldAddress {
    return { ...this.data };
  }
}
PacketFactory.Register(Enum_W_WM_Packet.W_WM_GetWorldAddress, W_WM_GetWorldAddress);


export class WM_W_GetWorldAddress extends JsonPacket {

  result: boolean;
  worldServerAddress: string;
  worldId: number;
  userId: number;
  errMsg: string

  constructor(result: boolean = false, worldServerAddress: string = "", worldId: number = -1, userId: number = -1, errMsg: string = "") {
    super();
    this.data.result = result;
    this.data.worldServerAddress = worldServerAddress;
    this.data.worldId = worldId;
    this.data.userId = userId;
    this.data.errMsg = errMsg;
  }

  getOptions(): EnumPacketOption {
    return EnumPacketOption.None;
  }
    
  getPacketId() {
    return Enum_W_WM_Packet.WM_W_GetWorldAddress;
  }

  getData(): WM_W_GetWorldAddress {
    return { ...this.data };
  }
}
PacketFactory.Register(Enum_W_WM_Packet.WM_W_GetWorldAddress, WM_W_GetWorldAddress);



