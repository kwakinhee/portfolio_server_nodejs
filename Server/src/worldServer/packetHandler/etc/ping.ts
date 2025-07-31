import { GIANTSTEP } from "../../../proto/worldServer/jsonProto";
import { User, CONNECTION_STATE } from "../../user";
import glog from "../../../commonlib/glog";
import * as gutil from "../../../commonlib/gutil";

export = (user: User, request: any) => {
  const cqPing : GIANTSTEP.WS.Protocol.CQ_Ping  = request
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

 const saPong :GIANTSTEP.WS.Protocol.SA_Pong =
    GIANTSTEP.WS.Protocol.SA_Pong.create();

  if (cqPing.serverTimeUtcRequest) {
    saPong.serverTimeUtc = gutil.curTimeUtcInMs();
    saPong.stressMessage = "Hello Proto!"
  }
  // response.packetMsg = google.protobuf.Any.create({
  //   type_url: 'type.googleapis.com/dispatcher.SA_Pong',
  //   value: GIANTSTEP.WS.Protocol.SA_Pong.encode(saPong).finish()
  // });

  return user.sendProtobufPacket<GIANTSTEP.WS.Protocol.SA_Pong>(
    //response.sequence,
    // GIANTSTEP.WS.Protocol.PacketType.PONG,
    GIANTSTEP.WS.Protocol.PacketType.WS_SA_Pong,
    saPong
  );
};