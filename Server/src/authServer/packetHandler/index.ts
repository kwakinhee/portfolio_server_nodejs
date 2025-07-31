// ----------------------------------------------------------------------------
// User socket으로 부터 오는 패킷을 Route 형식으로 바인딩.
// ----------------------------------------------------------------------------
import { User } from "../user";
import glog from "../../commonlib/glog";
import { GError, GErrorCode } from "../../commonlib/gerror";
import { GIANTSTEP } from "../../proto/authServer/jsonProto";

// ----------------------------------------------------------------------------
// Pulblic functions.
// ----------------------------------------------------------------------------
const packetHandler = {};
packetHandler[
  GIANTSTEP.AS.Protocol.PacketType.AS_CQ_Login
] = require("./auth/login");
packetHandler[
  GIANTSTEP.AS.Protocol.PacketType.AS_CQ_Ping
] = require("./etc/ping");
packetHandler[
  GIANTSTEP.AS.Protocol.PacketType.AS_CQ_GetWorldServerAddress
] = require("./auth/getWorldServerAddress");

export const exec = (
  user: User,
  packetType: number,
  request: any
): Promise<any> => {
  const handler = packetHandler[packetType];

  if (!handler) {
    glog.error("Unknown packet type.", {
      userId: user.getUserId(),
      packetType: packetType,
    });

    throw new GError(
      "unknown-packet-type",
      GErrorCode.UNKNOWN_PACKET_TYPE,
      packetType
    );
  }

  return handler(user, request);
};
