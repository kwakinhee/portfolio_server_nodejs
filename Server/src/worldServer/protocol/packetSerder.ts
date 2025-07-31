// ----------------------------------------------------------------------------
// packet 을 protobuf 형식으로 변환.
//
// ----------------------------------------------------------------------------
import glog from "../../commonlib/glog";
import { GError, GErrorCode } from "../../commonlib/gerror";
import { GIANTSTEP } from "../../proto/worldServer/jsonProto";
import {
  reqProtoBufMessageTypes,
  resProtoBufMessageTypes,
} from "../packetHandler/packetType";

// ----------------------------------------------------------------------------
// Pulblic functions.
// ----------------------------------------------------------------------------

export const deserialize = (packetType: number, request: any): any => {
  const protobufMessageType = reqProtoBufMessageTypes[packetType];

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
