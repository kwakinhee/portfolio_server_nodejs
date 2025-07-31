import { GIANTSTEP } from "../../proto/worldServer/jsonProto";

const packetHandler = {
  get(id: number) {
    return this[id];
  },
};
packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_Login
] = require("./auth/login");
packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_GetWorldAddress
] = require("./auth/getWorldAddress");
packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_GetMyProfile
] = require("./auth/getMyProfile");
packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_Ping
] = require("./etc/ping");
packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_JoinWorld
] = require("./world/joinWorld");
packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_Move
] = require("./world/move");
packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_FullSyncWorld
] = require("./world/worldFullSync");
packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_GetAvatarSlots
] = require("./avatar/getAvatarSlots");
packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_ChangeAvatarSlots
] = require("./avatar/changeAvatarSlots");
packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_QuitWorld
] = require("./world/quitWorld");
packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_Action
] = require("./world/action");
packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_SetFieldObject
] = require("./world/setFieldObject");
packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_UpdateFieldObject
] = require("./world/updateFieldObject");
packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_RemoveFieldObject
] = require("./world/removeFieldObject");
packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_DropItemObject
] = require("./world/dropItemObject");
packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_TakeItemObject
] = require("./world/takeItemObject");
packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_GetWorldInfoTemp
] = require("./world/getWorldInfoTemp");
packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_SyncAvatar
] = require("./world/avatarSync");

packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_GetMyEquipments
] = require("./inventory/getMyEquipments");
packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_GetMyWorldInventory
] = require("./inventory/getMyWorldInventory");
packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_GetMyAvatarInventory
] = require("./inventory/getMyAvatarInventory");
packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_EquipItem
] = require("./inventory/equipWorldItem");
packetHandler[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_UnequipItem
] = require("./inventory/unequipWorldItem");

// C-S 메세지 deserialize 용
const reqProtoBufMessageTypes = {
  get(id: number) {
    return this[id];
  },
};
reqProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_CQ_Login] =
  GIANTSTEP.WS.Protocol.CQ_Login;
reqProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_CQ_Ping] =
  GIANTSTEP.WS.Protocol.CQ_Ping;
reqProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_CQ_JoinWorld] =
  GIANTSTEP.WS.Protocol.CQ_JoinWorld;
reqProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_CQ_Move] =
  GIANTSTEP.WS.Protocol.CQ_Move;
reqProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_CQ_FullSyncWorld] =
  GIANTSTEP.WS.Protocol.CQ_FullSyncWorld;
reqProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_GetWorldAddress
] = GIANTSTEP.WS.Protocol.CQ_GetWorldAddress;
reqProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_CQ_GetAvatarSlots] =
  GIANTSTEP.WS.Protocol.CQ_GetAvatarSlots;
reqProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_ChangeAvatarSlots
] = GIANTSTEP.WS.Protocol.CQ_ChangeAvatarSlots;
reqProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_CQ_GetMyProfile] =
  GIANTSTEP.WS.Protocol.CQ_GetMyProfile;
reqProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_CQ_QuitWorld] =
  GIANTSTEP.WS.Protocol.CQ_QuitWorld;
reqProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_CQ_Action] =
  GIANTSTEP.WS.Protocol.CQ_Action;
// field object
reqProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_CQ_SetFieldObject] =
  GIANTSTEP.WS.Protocol.CQ_SetFieldObject;
reqProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_RemoveFieldObject
] = GIANTSTEP.WS.Protocol.CQ_RemoveFieldObject;
reqProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_UpdateFieldObject
] = GIANTSTEP.WS.Protocol.CQ_UpdateFieldObject;
reqProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_GetMyEquipments
] = GIANTSTEP.WS.Protocol.CQ_GetMyEquipments;
reqProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_GetMyWorldInventory
] = GIANTSTEP.WS.Protocol.CQ_GetMyWorldInventory;
reqProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_CQ_EquipItem] =
  GIANTSTEP.WS.Protocol.CQ_EquipItem;
reqProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_CQ_UnequipItem] =
  GIANTSTEP.WS.Protocol.CQ_UnequipItem;
reqProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_CQ_DropItemObject] =
  GIANTSTEP.WS.Protocol.CQ_DropItemObject;
reqProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_CQ_TakeItemObject] =
  GIANTSTEP.WS.Protocol.CQ_TakeItemObject;
reqProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_GetWorldInfoTemp
] = GIANTSTEP.WS.Protocol.CQ_GetWorldInfoTemp;
reqProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_CQ_SyncAvatar] =
  GIANTSTEP.WS.Protocol.CQ_SyncAvatar;
reqProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_CQ_GetMyAvatarInventory
] = GIANTSTEP.WS.Protocol.CQ_GetMyAvatarInventory;

// S-C serialize 용
const resProtoBufMessageTypes = {
  get(id: number) {
    return this[id];
  },
};
resProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_SA_Login] =
  GIANTSTEP.WS.Protocol.SA_Login;
resProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_SA_Pong] =
  GIANTSTEP.WS.Protocol.SA_Pong;
resProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_SA_JoinWorld] =
  GIANTSTEP.WS.Protocol.SA_JoinWorld;
resProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_SN_UserJoinBroadcast
] = GIANTSTEP.WS.Protocol.SN_UserJoinBroadcast;
resProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_SA_Move] =
  GIANTSTEP.WS.Protocol.SA_Move;
resProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_ServerError] =
  GIANTSTEP.WS.Protocol.ServerError;
resProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_SA_FullSyncWorld] =
  GIANTSTEP.WS.Protocol.SA_FullSyncWorld;
resProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_SN_UserLeaveBroadcast
] = GIANTSTEP.WS.Protocol.SN_UserLeaveBroadcast;
resProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_SA_GetWorldAddress
] = GIANTSTEP.WS.Protocol.SA_GetWorldAddress;
resProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_SA_GetAvatarSlots] =
  GIANTSTEP.WS.Protocol.SA_GetAvatarSlots;
resProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_SA_ChangeAvatarSlots
] = GIANTSTEP.WS.Protocol.SA_ChangeAvatarSlots;
resProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_SA_GetMyProfile] =
  GIANTSTEP.WS.Protocol.SA_GetMyProfile;
resProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_SN_Kick] =
  GIANTSTEP.WS.Protocol.SN_Kick;
resProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_SA_Action] =
  GIANTSTEP.WS.Protocol.SA_Action;
resProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_SA_WorldInfo] =
  GIANTSTEP.WS.Protocol.SA_WorldInfo;
resProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_SA_SetFieldObject] =
  GIANTSTEP.WS.Protocol.SA_SetFieldObject;
resProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_SA_UpdateFieldObject
] = GIANTSTEP.WS.Protocol.SA_UpdateFieldObject;
resProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_SA_RemoveFieldObject
] = GIANTSTEP.WS.Protocol.SA_RemoveFieldObject;
resProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_SA_FieldObjectList
] = GIANTSTEP.WS.Protocol.SA_FieldObjectList;
resProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_SA_GetMyEquipments
] = GIANTSTEP.WS.Protocol.SA_GetMyEquipments;
resProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_SA_GetMyWorldInventory
] = GIANTSTEP.WS.Protocol.SA_GetMyWorldInventory;
resProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_SA_EquipItem] =
  GIANTSTEP.WS.Protocol.SA_EquipItem;
resProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_SA_UnequipItem] =
  GIANTSTEP.WS.Protocol.SA_UnequipItem;
resProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_SN_EquipSlotUpdateBroadcast
] = GIANTSTEP.WS.Protocol.SN_EquipSlotUpdateBroadcast;
resProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_SN_RefreshEnterWorldToken
] = GIANTSTEP.WS.Protocol.SN_RefreshEnterWorldToken;
resProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_SA_DropItemObject] =
  GIANTSTEP.WS.Protocol.SA_DropItemObject;
resProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_SA_TakeItemObject] =
  GIANTSTEP.WS.Protocol.SA_TakeItemObject;
resProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_SN_DropItemObject] =
  GIANTSTEP.WS.Protocol.SN_DropItemObject;
resProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_SN_TakeItemObject] =
  GIANTSTEP.WS.Protocol.SN_TakeItemObject;
resProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_SN_SetFieldObject] =
  GIANTSTEP.WS.Protocol.SN_SetFieldObject;
resProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_SN_RemoveFieldObject
] = GIANTSTEP.WS.Protocol.SN_RemoveFieldObject;
resProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_SN_UpdateFieldObject
] = GIANTSTEP.WS.Protocol.SN_UpdateFieldObject;
resProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_SA_GetWorldInfoTemp
] = GIANTSTEP.WS.Protocol.SA_GetWorldInfoTemp;
resProtoBufMessageTypes[GIANTSTEP.WS.Protocol.PacketType.WS_SN_SyncAvatar] =
  GIANTSTEP.WS.Protocol.SN_SyncAvatar;
resProtoBufMessageTypes[
  GIANTSTEP.WS.Protocol.PacketType.WS_SA_GetMyAvatarInventory
] = GIANTSTEP.WS.Protocol.SA_GetMyAvatarInventory;

export { packetHandler, reqProtoBufMessageTypes, resProtoBufMessageTypes };
