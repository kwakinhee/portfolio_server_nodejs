import { NormalResponsor } from "../../netlib/tcp/tcpRouter";
import {
  WM_AUTH_GetWorldServerAddress,
  WM_AUTH_Pong,
} from "../../proto/wm_auth/packet";
import glog from "../../commonlib/glog";
import * as tcp from "../../netlib/tcp";
import { UserManager } from "../useManagerr";
import Container from "typedi";
import { GIANTSTEP } from "../../proto/authServer/jsonProto";
import { AuthService } from "../server";
import { GErrorCode } from "../../commonlib/gerrorCode";

const wsm_l_router = tcp.createPacketRouter();

// ----------------------------------------------------------------------------
//  월드서버매니저 -> 인증서버 메세지 핸들러
// ----------------------------------------------------------------------------

wsm_l_router.on(
  WM_AUTH_Pong,
  async (req: WM_AUTH_Pong, res: NormalResponsor) => {
    const message = req.data;
    glog.verbose("pong from manager", message);
  }
);

wsm_l_router.on(
  WM_AUTH_GetWorldServerAddress,
  async (req: WM_AUTH_GetWorldServerAddress, sender: NormalResponsor) => {
    const data = req.getData();
    const { result, worldServerAddress, userId } = data;

    const userMgr = Container.get(UserManager);
    const user = userMgr.getUserByUserId(userId);

    if (!user) {
      glog.warn(
        `[WM_AUTH_GetWorldServerAddress] User [${userId}] is not logged in.`
      );
      return;
    }

    if (!result) {
      // const saGetWorldAddress = GIANTSTEP.AS.Protocol.SA_GetWorldServerAddress.create();
      // saGetWorldAddress.result = false;
      // saGetWorldAddress.serverAddress = "";
      // user.sendProtobufPacket(
      //   GIANTSTEP.AS.Protocol.PacketType.AS_SA_GetWorldServerAddress,
      //   saGetWorldAddress,
      // )
      const serverError = GIANTSTEP.AS.Protocol.ServerError.create();
      (serverError.errCode = GErrorCode.INTERNAL_ERROR),
        (serverError.failedCQPacket =
          GIANTSTEP.AS.Protocol.PacketType.AS_CQ_GetWorldServerAddress);
      serverError.errMessage = "failed to get available World Server.";
      user.sendProtobufPacket(
        GIANTSTEP.AS.Protocol.PacketType.AS_ServerError,
        serverError
      );
      return;
    }
    const saGetWorldAddress =
      GIANTSTEP.AS.Protocol.SA_GetWorldServerAddress.create();
    saGetWorldAddress.result = true;
    saGetWorldAddress.serverAddress = worldServerAddress;
    user.sendProtobufPacket(
      GIANTSTEP.AS.Protocol.PacketType.AS_SA_GetWorldServerAddress,
      saGetWorldAddress
    );
  }
);

export default wsm_l_router;
