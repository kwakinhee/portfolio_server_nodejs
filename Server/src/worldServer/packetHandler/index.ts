// ----------------------------------------------------------------------------
// User socket으로 부터 오는 패킷을 Route 형식으로 바인딩.
// ----------------------------------------------------------------------------
import { User } from "../user";
import glog from "../../commonlib/glog";
import { GError, GErrorCode } from "../../commonlib/gerror";
import { packetHandler } from "./packetType";

// ----------------------------------------------------------------------------
// Pulblic functions.
// ----------------------------------------------------------------------------

export const exec = (
  user: User,
  packetType: number,
  request: any
): Promise<any> => {
  const handler = packetHandler[packetType];

  // TODO: ConnectionState를 모든 패킷핸들러에서 체크 안해도 되도록 예외처리 추가.

  if (!handler) {
    glog.error("Unknown packet type.", {
      userId: user.getUserId(),
      packetType: request.type,
    });

    throw new GError(
      "unknown-packet-type",
      GErrorCode.UNKNOWN_PACKET_TYPE,
      request.type
    );
  }

  return handler(user, request);
};
