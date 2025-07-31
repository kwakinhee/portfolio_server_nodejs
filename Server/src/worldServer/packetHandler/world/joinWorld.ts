// -------------------------------------------------------------------------------------------------
// 월드룹 입장.
// -------------------------------------------------------------------------------------------------

import { GIANTSTEP } from "../../../proto/worldServer/jsonProto";
import { User, CONNECTION_STATE } from "../../user";
import glog from "../../../commonlib/glog";
import Container from "typedi";
import { WorldManager } from "../../world/worldManager";
import { GError, GErrorCode } from "../../../commonlib/gerror";
import { W_WM_UserJoinWorld } from "../../../proto/wm_world/packet";
import gconf from "../../../commonlib/gconf";
import { WorldService } from "../../server";
import { TcpClientSession } from "../../../netlib/tcp";
import { World } from "../../world/world";
import { isInteger } from "lodash";

export = async (user: User, request: any) => {
  glog.debug(
    `Processing [ CQ_JoinWorld ] : WorldId:${
      request.worldId
    }, UserId: ${user.getUserId()}`
  );
  const cqJoinWorld: GIANTSTEP.WS.Protocol.CQ_JoinWorld = request;

  const userId = user.getUserId();
  const worldId = cqJoinWorld.worldId;
  const connState = user.getConnState();

  if (connState !== CONNECTION_STATE.LOGGED_IN) {
    glog.warn("[CQ JoinWorld] UnAuthorized Message.", {
      userId: user.getUserId(),
      sessionId: user.getSessionId(),
      remoteAddr: user.getIp(),
      connState,
    });
    throw new GError(
      `[CQ_JoinWorld] UnAuthorized Access to CQ_JoinWorld. Please Login!)}`,
      GErrorCode.UNAUTHORIZED_NOT_LOGGED_IN
    );
  }

  if (!isInteger(worldId) || worldId < 0) {
    glog.warn("[CQ JoinWorld] Invalid WorldId", {
      userId: user.getUserId(),
      sessionId: user.getSessionId(),
      remoteAddr: user.getIp(),
      connState,
    });
    throw new GError(
      `[ CQ_JoinWorld ] User: ${userId}, Invalid WorldId ${worldId}!)}`,
      GErrorCode.UNAUTHORIZED_NOT_LOGGED_IN
    );
  }

  const worldManager = Container.get(WorldManager);
  const world: World = worldManager.getWorld(worldId);

  if (!world) {
    const saJoinWorld: GIANTSTEP.WS.Protocol.SA_JoinWorld =
      GIANTSTEP.WS.Protocol.SA_JoinWorld.create();
    saJoinWorld.userId = userId; // 클라이언트에서 userID 비교.
    saJoinWorld.result = false;
    saJoinWorld.worldId = worldId;

    throw new GError(
      `[ CQ_JoinWorld ] World was not created properly. Unable to handle world.getWorld().`,
      GErrorCode.INTERNAL_ERROR
    );
  }

  let result = await world.onJoin(user);

  if (!result) {
    const saJoinWorld: GIANTSTEP.WS.Protocol.SA_JoinWorld =
      GIANTSTEP.WS.Protocol.SA_JoinWorld.create();
    saJoinWorld.userId = userId;
    saJoinWorld.result = false;
    saJoinWorld.worldId = worldId;

    throw new GError(
      `[ CQ_JoinWorld ] Unable to handle world.onJoin().`,
      GErrorCode.INTERNAL_ERROR
    );
  }

  user.setWorldId(world.worldDbId);

  glog.info(
    `User: ${user.getUserId()} has successfully joined world: [${worldId}].`
  );

  const serverPacket = new W_WM_UserJoinWorld(
    result,
    world.worldDbId,
    userId,
    world.getUserCount()
  );
  const worldService = Container.get(WorldService);
  const WSMClient: TcpClientSession = worldService.getWSMClientSession();

  // TODO 코드리뷰에서 월드서버매니저 - 월드서버 연결에 대해 질문.
  if (WSMClient) {
    WSMClient.send(serverPacket);
  } else {
    glog.error(
      `[CRITICAL] WorldServer[${gconf.appId}] is not connected to WorldServerManager!`
    );
    throw new GError(
      `[ CQ_JoinWorld ] WSMClient does not exist. Unable to Communicate to WorldServerManager.`,
      GErrorCode.INTERNAL_ERROR
    );
  }

  const snJoinSyncUser: GIANTSTEP.WS.Protocol.SN_UserJoinBroadcast =
    GIANTSTEP.WS.Protocol.SN_UserJoinBroadcast.create();

  const character: GIANTSTEP.WS.Protocol.Character =
    GIANTSTEP.WS.Protocol.Character.create();

  const userCharacterSyncData: any = user.userCharacter.getSyncData();

  character.avatarSlots = userCharacterSyncData.avatarSlots;
  character.name = userCharacterSyncData.characterName;
  character.cmsId = userCharacterSyncData.characterCmsId;

  snJoinSyncUser.userId = userId;
  snJoinSyncUser.character = character;

  // broadcast to others for Join Notification
  world.broadcastToOthers(
    userId,
    GIANTSTEP.WS.Protocol.PacketType.WS_SN_UserJoinBroadcast,
    snJoinSyncUser
  );

  const saJoinWorld: GIANTSTEP.WS.Protocol.SA_JoinWorld =
    GIANTSTEP.WS.Protocol.SA_JoinWorld.create();
  saJoinWorld.userId = userId; // 클라이언트에서 userID 비교.
  saJoinWorld.result = result;
  saJoinWorld.worldId = world.worldDbId;

  user.sendProtobufPacket<GIANTSTEP.WS.Protocol.SA_JoinWorld>(
    GIANTSTEP.WS.Protocol.PacketType.WS_SA_JoinWorld,
    saJoinWorld
  );
};
