// -------------------------------------------------------------------------------------------------
// 캐릭터 액션
// -------------------------------------------------------------------------------------------------

import { GIANTSTEP } from "../../../proto/worldServer/jsonProto";
import { User } from "../../user";
import glog from "../../../commonlib/glog";

import Container from "typedi";
import { WorldManager } from "../../world/worldManager";
import { World } from "../../world/world";
import { GError, GErrorCode } from "../../../commonlib/gerror";

export = async (user: User, request: any) => {
  const cqAction: GIANTSTEP.WS.Protocol.CQ_Action = request;
  const userId = user.getUserId();

  if (user.getWorldId() < 0) {
    glog.error(`user.getWorldId() < 0`);
    return;
  }

  // TODO: 월드 맵 섹터에 따른 유저 브로드 캐스팅 구현.
  const worldManager: WorldManager = Container.get(WorldManager);
  const worldId: number = user.getWorldId();
  const world: World = worldManager.getWorld(worldId);

  if (!world) {
    throw new GError(
      `[CQ_Action] failed to find world[ ${worldId} ].`,
      GErrorCode.INTERNAL_ERROR
    );
  }

  const saAction: GIANTSTEP.WS.Protocol.SA_Action =
    GIANTSTEP.WS.Protocol.SA_Action.create();

  saAction.userId = userId;
  saAction.byteArrMessage = cqAction.byteArrMessage;

  world.broadcastToOthers(
    userId,
    GIANTSTEP.WS.Protocol.PacketType.WS_SA_Action,
    saAction
  );
};
