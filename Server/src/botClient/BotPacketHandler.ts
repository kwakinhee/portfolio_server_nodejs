import { TcpBotClient } from "../netlib/tcp/client/tcpBotClient";
import { GIANTSTEP as WSG } from "../proto/worldServer/jsonProto";
import { GIANTSTEP as ASG } from "../proto/authServer/jsonProto";
import Container from "typedi";
import { BotService } from "./inheeclient";

function handleSALogin(packetType, msg) {
  let self = Container.get(BotService);
  self.authToken = msg.enterWorldToken;
  let p = ASG.AS.Protocol.CQ_GetWorldServerAddress.create();
  self.authClient.send(
    ASG.AS.Protocol.PacketType.AS_CQ_GetWorldServerAddress,
    p
  );
}

function handleSAGetWorldServerAddress(packetType, msg) {
  let self = Container.get(BotService);
  self.worldServerAddress = msg.serverAddress;

  self.authClient.disconnect();
  self.connectWorldClient();
}

const ASPacketHandler = new Map();
ASPacketHandler.set(ASG.AS.Protocol.PacketType.AS_SA_Login, handleSALogin);
ASPacketHandler.set(
  ASG.AS.Protocol.PacketType.AS_SA_GetWorldServerAddress,
  handleSAGetWorldServerAddress
);

export class AuthServerHandler {
  static exec(session: TcpBotClient, packetType: number, msg: any) {
    return ASPacketHandler.get(packetType)(packetType, msg);
  }
}

function handle_WS_SA_Login(packetType, msg) {
  console.log("logged in to world Server");
  console.log(msg.character);

  let self = Container.get(BotService);
  self.userId = msg.user.userId;

  setInterval(() => {
    let self = Container.get(BotService);
    let p = WSG.WS.Protocol.CQ_Ping.create();
    p.serverTimeUtcRequest = true;
    self.worldClient.send(WSG.WS.Protocol.PacketType.WS_CQ_Ping, p);
  }, 3000);

  setTimeout(() => {
    let self = Container.get(BotService);
    let p = WSG.WS.Protocol.CQ_GetWorldAddress.create();
    p.worldId = 1;
    self.worldClient.send(WSG.WS.Protocol.PacketType.WS_CQ_GetWorldAddress, p);
  }, 1000);
}

function handle_WS_SA_GetWorldAddress(packetType, msg) {
  console.log(msg);
  console.log("handle_WS_SA_GetWorldAddress");
  setTimeout(() => {
    let self = Container.get(BotService);
    let p = WSG.WS.Protocol.CQ_JoinWorld.create();
    p.worldId = 1;
    self.worldClient.send(WSG.WS.Protocol.PacketType.WS_CQ_JoinWorld, p);
  }, 1000);
}

function handle_WS_SA_Pong(packetType, msg) {
  console.log(msg);
  // ping. do thing;
}

function handle_WS_SA_JoinWorld(packetType, msg) {
  console.log(msg);
  console.log("handle_WS_SA_JoinWorld");

  setTimeout(() => {
    let m = WSG.WS.Protocol.CQ_GetMyWorldInventory.create();
    m.userId = 9;
    let self = Container.get(BotService);
    self.worldClient.send(
      WSG.WS.Protocol.PacketType.WS_CQ_GetMyWorldInventory,
      m
    );
  }, 1000);
}

function handle_WS_SA_Move(packetType, msg) {
  console.log(msg);
  // console.log(msg);
}

function handle_WS_SA_GetMyWorldInventory(
  packetType,
  msg: WSG.WS.Protocol.SA_GetMyWorldInventory
) {
  console.log(msg);
  console.log(`GetMyInventory!`);
  for (const i of msg.itemList) {
    console.log(i.item.itemCmsId, i.item.itemDbGuid, i.item.count);
  }

  setTimeout(() => {
    let m = WSG.WS.Protocol.CQ_GetMyEquipments.create();
    m.userId = 4;
    let self = Container.get(BotService);
    self.worldClient.send(WSG.WS.Protocol.PacketType.WS_CQ_GetMyEquipments, m);
  }, 2000);
}

function handle_WS_SA_GetMyEquipments(
  packetType,
  msg: WSG.WS.Protocol.SA_GetMyEquipments
) {
  console.log(msg);
  console.log(`GetMyEquipments!`);
  for (const i of msg.equipmentSlotList) {
    console.log(i.itemCmsId, i.itemDbGuid);
  }
  setTimeout(() => {
    let m = WSG.WS.Protocol.CQ_EquipItem.create();
    m.itemDbGuid = 817;
    let self = Container.get(BotService);
    self.worldClient.send(WSG.WS.Protocol.PacketType.WS_CQ_EquipItem, m);
  }, 1000);
}

function handle_WS_SA_EquipItem(packetType: WSG.WS.Protocol.SA_EquipItem, msg) {
  console.log(`handle_WS_SA_EquipItem!`);
  console.log(msg.toJSON());

  setTimeout(() => {
    let m = WSG.WS.Protocol.CQ_UnequipItem.create();
    m.itemDbGuid = 817;
    let self = Container.get(BotService);
    self.worldClient.send(WSG.WS.Protocol.PacketType.WS_CQ_UnequipItem, m);
  }, 1000);
}

function handle_WS_SA_UnequipItem(
  packetType: WSG.WS.Protocol.SA_UnequipItem,
  msg
) {
  console.log(`handle_WS_SA_UnequipItem!`);
  console.log(msg.toJSON());
}

function handle_WS_SA_ServerError(
  packetType: WSG.WS.Protocol.SA_UnequipItem,
  msg
) {
  console.log(`handle_WS_SA_ServerError!`);
  console.log(msg);
}

const WSPacketHandler = new Map();
WSPacketHandler.set(WSG.WS.Protocol.PacketType.WS_SA_Login, handle_WS_SA_Login);
WSPacketHandler.set(
  WSG.WS.Protocol.PacketType.WS_SA_GetWorldAddress,
  handle_WS_SA_GetWorldAddress
);
WSPacketHandler.set(
  WSG.WS.Protocol.PacketType.WS_SA_JoinWorld,
  handle_WS_SA_JoinWorld
);
WSPacketHandler.set(WSG.WS.Protocol.PacketType.WS_SA_Move, handle_WS_SA_Move);
WSPacketHandler.set(WSG.WS.Protocol.PacketType.WS_SA_Pong, handle_WS_SA_Pong);
WSPacketHandler.set(
  WSG.WS.Protocol.PacketType.WS_SA_GetMyWorldInventory,
  handle_WS_SA_GetMyWorldInventory
);

WSPacketHandler.set(
  WSG.WS.Protocol.PacketType.WS_SA_GetMyEquipments,
  handle_WS_SA_GetMyEquipments
);

WSPacketHandler.set(
  WSG.WS.Protocol.PacketType.WS_SA_EquipItem,
  handle_WS_SA_EquipItem
);
WSPacketHandler.set(
  WSG.WS.Protocol.PacketType.WS_SA_UnequipItem,
  handle_WS_SA_UnequipItem
);

WSPacketHandler.set(
  WSG.WS.Protocol.PacketType.WS_ServerError,
  handle_WS_SA_ServerError
);

export class WorldServerHandler {
  static exec(session: TcpBotClient, packetType: number, msg: any) {
    let func = WSPacketHandler.get(packetType);
    if (!func) {
      console.log(
        `handler 등록 안되어있음. PacketType: ${WSG.WS.Protocol.PacketType[packetType]}`
      );
      return;
    }
    return func(packetType, msg);
  }
}
