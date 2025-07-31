import { NormalResponsor } from "../../netlib/tcp/tcpRouter";
import {
  WM_W_GetWorldAddress,
  WM_W_Pong,
  WM_W_SpawnWorld,
  W_WM_RegisterWorld,
} from "../../proto/wm_world/packet";
import glog from "../../commonlib/glog";
import Container from "typedi";
import { EWorldType, WorldManager } from "../world/worldManager";
import gconf from "../../commonlib/gconf";
import * as tcp from "../../netlib/tcp";
import { GIANTSTEP } from "../../proto/worldServer/jsonProto";
import { UserManager } from "../userManager";
import { GErrorCode } from "../../commonlib/gerrorCode";
import { isInteger } from "lodash";
import { WorldOption } from "../world/world";

const wsm_w_router = tcp.createPacketRouter();

// ----------------------------------------------------------------------------
// 월드서버매니저 -> 월드서버 메세지 핸들러
// ----------------------------------------------------------------------------

wsm_w_router.on(WM_W_Pong, async (req: WM_W_Pong, res: NormalResponsor) => {
  // Pong timestamp 업데이트
});

wsm_w_router.on(
  WM_W_SpawnWorld,
  async (req: WM_W_SpawnWorld, res: NormalResponsor) => {
    const data = req.getData();
    const worldId = data.worldId;
    const worldServerAddress = gconf.publicSocketServer.url;

    if (!isInteger(worldId) || worldId < 0) {
      glog.warn(`[WM_W_SpawnWorld]Invalid WorldId[${worldId}]`);
      const packet = new W_WM_RegisterWorld(false, worldId, worldServerAddress);
      res.send(packet);
      return;
    }

    const worldMgr = Container.get(WorldManager);
    let world = await worldMgr.findAvailableWorld(worldId);
    if (world != null)
    {
      // 월드매니져로부터 월드 서버 생성 요청을 받은거라 같은 worldId의 월드가 존재하면 안된다.
      glog.error(`Request SpawnWorld from WorldManager. World is available. WorldId:[${worldId}]`);
      return;
    }

    let option = new WorldOption();
    option.worldType = EWorldType.PERSONAL_WORLD;
    world = await worldMgr.createWorld(worldId, option)
    if (!world) {
      glog.error(`failed to create world [ ${worldId} ]`);
      const packet = new W_WM_RegisterWorld(false, worldId, worldServerAddress);
      res.send(packet);
      return;
    }

    glog.info(`Successfully create world [ ${worldId} ]`);
    const packet = new W_WM_RegisterWorld(true, worldId, worldServerAddress);
    res.send(packet);
  }
);

wsm_w_router.on(
  WM_W_GetWorldAddress,
  async (req: WM_W_GetWorldAddress, sender: NormalResponsor) => {
    const data = req.getData();
    const { result, worldServerAddress, worldId, userId, errMsg } = data;
    const userMgr = Container.get(UserManager);
    glog.info("recevied WM_L_GetWorldAddress.", {
      result,
      worldServerAddress,
      worldId,
      userId,
    });

    const saGetWorldAddress = GIANTSTEP.WS.Protocol.SA_GetWorldAddress.create();

    if (result === false) {
      glog.info(`failed to get World[ ${worldId} ]`);
      const ErrorMsg = GIANTSTEP.WS.Protocol.ServerError.create();
      ErrorMsg.errCode = GErrorCode.FAILED_TO_FETCH_WORLD;
      ErrorMsg.failedCQPacket =
        GIANTSTEP.WS.Protocol.PacketType.WS_CQ_GetWorldAddress;
      userMgr.sendProtobufPacketToUser(
        userId,
        GIANTSTEP.WS.Protocol.PacketType.WS_ServerError,
        ErrorMsg
      );
    } else {
      saGetWorldAddress.result = true;
      saGetWorldAddress.worldId = worldId;
      saGetWorldAddress.serverAddress = worldServerAddress;
    }

    userMgr.sendProtobufPacketToUser(
      userId,
      GIANTSTEP.WS.Protocol.PacketType.WS_SA_GetWorldAddress,
      saGetWorldAddress
    );
  }
);

export default wsm_w_router;
