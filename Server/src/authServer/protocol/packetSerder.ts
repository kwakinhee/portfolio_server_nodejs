// ----------------------------------------------------------------------------
// packet 을 protobuf 형식으로 변환.
//
// ----------------------------------------------------------------------------
import glog from "../../commonlib/glog";
import { GError, GErrorCode } from "../../commonlib/gerror";
import { GIANTSTEP } from "../../proto/authServer/jsonProto";

// C-S 메세지 deserialize 용
export const reqProtoBufMessageTypes = new Map<number, any>();
reqProtoBufMessageTypes.set(
  GIANTSTEP.AS.Protocol.PacketType.AS_CQ_Login,
  GIANTSTEP.AS.Protocol.CQ_Login
);
reqProtoBufMessageTypes.set(
  GIANTSTEP.AS.Protocol.PacketType.AS_CQ_Ping,
  GIANTSTEP.AS.Protocol.CQ_Ping
);
reqProtoBufMessageTypes.set(
  GIANTSTEP.AS.Protocol.PacketType.AS_CQ_GetWorldServerAddress,
  GIANTSTEP.AS.Protocol.CQ_GetWorldServerAddress
);

// S-C serialize 용
export const resProtoBufMessageTypes = {
  get(id: number) {
    return this[id];
  },
};
resProtoBufMessageTypes[GIANTSTEP.AS.Protocol.PacketType.AS_SA_Login] =
  GIANTSTEP.AS.Protocol.SA_Login;
resProtoBufMessageTypes[GIANTSTEP.AS.Protocol.PacketType.AS_SA_Pong] =
  GIANTSTEP.AS.Protocol.SA_Pong;
resProtoBufMessageTypes[
  GIANTSTEP.AS.Protocol.PacketType.AS_SA_GetWorldServerAddress
] = GIANTSTEP.AS.Protocol.SA_GetWorldServerAddress;
resProtoBufMessageTypes[GIANTSTEP.AS.Protocol.PacketType.AS_ServerError] =
  GIANTSTEP.AS.Protocol.ServerError;

// ----------------------------------------------------------------------------
// Pulblic functions.
// ----------------------------------------------------------------------------
export const deserialize = (packetType: number, request: any): any => {
  const protobufMessageType = reqProtoBufMessageTypes.get(packetType);

  if (!protobufMessageType) {
    glog.error("deSerialization Unknown protobuf Message type.", {
      packetType,
    });

    throw new GError(
      "deSerialization unknown-protobuf-Message-type",
      GErrorCode.UNKNOWN_PACKET_TYPE,
      packetType
    );
  }

  return protobufMessageType.decode(request);
};

export const serialize = (packetType: number, response: any): any => {
  const protobufMessageType = resProtoBufMessageTypes[packetType];

  if (!protobufMessageType) {
    glog.error("serialization Unknown protobuf Message type.", {
      packetType,
    });

    throw new GError(
      "serialization unknown-protobuf-Message-type",
      GErrorCode.UNKNOWN_PACKET_TYPE,
      packetType
    );
  }

  return protobufMessageType.encode(response).finish();
};
