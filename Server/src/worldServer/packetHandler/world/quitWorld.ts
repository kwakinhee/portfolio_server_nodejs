import { GIANTSTEP } from "../../../proto/worldServer/jsonProto";
import { User } from "../../user";
import glog from "../../../commonlib/glog";
import { GError, GErrorCode } from "../../../commonlib/gerror";
import Container from "typedi";
import { WorldManager } from "../../world/worldManager";
import { World } from "../../world/world";
import { isInteger } from "lodash";

// -------------------------------------------------------------------------------------------------
// 월드룸 정상 퇴장.
// -------------------------------------------------------------------------------------------------
export = async (user: User, request: any) => {
  const cqJoinWorld: GIANTSTEP.WS.Protocol.CQ_JoinWorld = request;

  const connState = user.getConnState();
  const userId = user.getUserId();
  const worldId = user.getWorldId();

  if (!userId) {
    throw new GError(
      "[CQ_QuitWorld] UnAuthorized. Not LoggedIn.",
      GErrorCode.UNAUTHORIZED_NOT_LOGGED_IN,
      {
        userId,
      }
    );
  }

  if (isInteger(worldId) && worldId < 0) {
    throw new GError(
      "[CQ_QuitWorld] User never Joined World",
      GErrorCode.INTERNAL_ERROR,
      {
        userId,
        connState: connState,
      }
    );
  }

  const worldManager = Container.get(WorldManager);
  const world: World = worldManager.getWorld(worldId);

  if (!world) {
    throw new GError(
      `[CQ_QuitWorld] WorldID: ${worldId}`,
      GErrorCode.INTERNAL_ERROR
    );
  }

  if (!world.getUserById(userId)) {
    glog.warn("[CQ_QuitWorld] UnAuthorized Access to CQ_QuitWorld", {
      userId,
      sessionId: user.getSessionId(),
      connState,
    });
    throw new GError(
      `[CQ_QuitWorld] UnAuthorized Access to CQ_QuitWorld. Please Join World.)}`,
      GErrorCode.UNAUTHORIZED_NOT_LOGGED_IN
    );
  }

  world.onLeave(user);
};
