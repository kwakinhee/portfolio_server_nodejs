import { GIANTSTEP } from "../../../proto/authServer/jsonProto";
import { User, CONNECTION_STATE } from "../../user";
import glog from "../../../commonlib/glog";
import * as gutil from "../../../commonlib/gutil";

export = (user: User, request: any) => {
  const cqPing: GIANTSTEP.AS.Protocol.CQ_Ping = request;
  if (cqPing.clientTimeUtc) {
    glog.debug(
      `user -> server ping latency utcTimeStamp: ${
        gutil.curTimeUtcInMs() - Number(cqPing.clientTimeUtc)
      } ms`
    );
  }

  const connState = user.getConnState();
  if (connState !== CONNECTION_STATE.LOGGED_IN) {
    glog.warn("ping conn session state", {
      userId: user.getUserId(),
      sessionId: user.getSessionId(),
      connState,
    });

    return;
  }

  user.updateLastPingTime();

  const saPong: GIANTSTEP.AS.Protocol.SA_Pong =
    GIANTSTEP.AS.Protocol.SA_Pong.create();

  if (cqPing.serverTimeUtcRequest) {
    saPong.serverTimeUtc = gutil.curTimeUtcInMs();
    saPong.stressMessage = "Hello Proto!";
  }


  return user.sendProtobufPacket<GIANTSTEP.AS.Protocol.SA_Pong>(
    GIANTSTEP.AS.Protocol.PacketType.AS_SA_Pong,
    saPong
  );
};
