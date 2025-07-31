// -------------------------------------------------------------------------------------------------
// 월드룹 입장.
// -------------------------------------------------------------------------------------------------
import { GIANTSTEP } from "../../../proto/worldServer/jsonProto";
import { User, CONNECTION_STATE } from "../../user";
import glog from "../../../commonlib/glog";
import * as gutil from "../../../commonlib/gutil";
import Container from "typedi";
import { WorldManager } from "../../world/worldManager";
import { GError, GErrorCode } from "../../../commonlib/gerror";
import { World } from "../../world/world";
import { isInteger } from "lodash";

export = async (user: User, request: any) => {
  const cqFullSyncWorld: GIANTSTEP.WS.Protocol.CQ_FullSyncWorld = request;

  const userId = user.getUserId();
  const worldId = cqFullSyncWorld.worldId;
  const connState = user.getConnState();

  glog.info(
    `[CQ_WorldFullSync] message from user[${user.getUserId()}] to world[${worldId}]`
  );

  if (connState !== CONNECTION_STATE.LOGGED_IN) {
    glog.warn("[CQ_WorldFullSync] UnAuthorized Message.", {
      userId: user.getUserId(),
      sessionId: user.getSessionId(),
      remoteAddr: user.getIp(),
      connState,
    });
    throw new GError(
      `[CQ_WorldFullSync] UnAuthorized Access to CQ_WorldFullSync. Please Login!)}`,
      GErrorCode.UNAUTHORIZED_NOT_LOGGED_IN
    );
  }

  if (!isInteger(worldId) || worldId < 0) {
    glog.warn("[CQ_WorldFullSync] Invalid WorldId", {
      userId: user.getUserId(),
      sessionId: user.getSessionId(),
      remoteAddr: user.getIp(),
      connState,
      worldId: worldId,
    });
    throw new GError(
      `[ CQ_WorldFullSync ] User: ${userId}, Invalid WorldId ${worldId}!)}`,
      GErrorCode.UNAUTHORIZED_NOT_LOGGED_IN
    );
  }

  const worldManager = Container.get(WorldManager);
  const world: World = worldManager.getWorld(worldId);

  if (!world) {
    throw new GError(
      `[CQ_WorldFullSync] failed to find world[ ${worldId} ].`,
      GErrorCode.INTERNAL_ERROR
    );
  }

  if (!world.getUserById(userId)) {
    glog.warn("[CQ_WorldFullSync] UnAuthorized. User is not in the world.", {
      userId: user.getUserId(),
      connId: user.getSessionId(),
      remoteAddr: user.getIp(),
      connState,
      userWorldId: user.getWorldId(),
    });
    throw new GError(
      `[CQ_WorldFullSync] User is not joined in the World.`,
      GErrorCode.UNAUTHORIZED_NOT_LOGGED_IN
    );
  }

  // build sync.
  // const sync: Sync = {
  //   // 데이터를 외부에서 받으려면 merge<All, All...> 이런식으로 추가.
  //   add.character: _.merge(user.userCharacter.getSyncData()),
  // };

  const saFullSyncWorld = GIANTSTEP.WS.Protocol.SA_FullSyncWorld.create();
  saFullSyncWorld.worldId = worldId;

  for (const [worldUserId, worldUser] of world.users) {
    if (worldUserId != user.getUserId()) {
      // console.log(worldUser);
      const character: GIANTSTEP.WS.Protocol.Character =
        GIANTSTEP.WS.Protocol.Character.create();

      const userCharacterSyncData: any = worldUser.userCharacter.getSyncData();

      for (const equipInfo of userCharacterSyncData.equipmentSlots) {
        let equipmentSlot = GIANTSTEP.WS.Protocol.EquipmentSlot.create();
        equipmentSlot.itemCmsId = equipInfo.itemCmsId;
        character.equipmentSlots.push(equipmentSlot);
      }

      character.avatarSlots = userCharacterSyncData.avatarSlots;
      character.name = userCharacterSyncData.characterName;
      character.cmsId = userCharacterSyncData.characterCmsId;

      const userData = GIANTSTEP.WS.Protocol.UserData.create();
      userData.userId = worldUserId;
      userData.character = character;

      saFullSyncWorld.worldUserList.push(userData);
    }
  }

  return user.sendProtobufPacket<GIANTSTEP.WS.Protocol.SA_FullSyncWorld>(
    GIANTSTEP.WS.Protocol.PacketType.WS_SA_FullSyncWorld,
    saFullSyncWorld
  );
};
