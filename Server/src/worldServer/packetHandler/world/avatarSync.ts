import { GIANTSTEP } from "../../../proto/worldServer/jsonProto";
import { User } from "../../user";
import glog from "../../../commonlib/glog";
import { GError, GErrorCode } from "../../../commonlib/gerror";
import { DBConnPool } from "../../../mysqllib/pool";
import _ from "lodash";
import { AvatarSlot } from "../../userCharacter";
import spAvatarSlotLoad from "../../../mysqllib/sp/user/item/spAvatarSlotLoad";
import Container from "typedi";
import { WorldManager } from "../../world/worldManager";
import { World } from "../../world/world";

export = (user: User, request: any) => {
  const reqBody: any = request.toJSON();
  glog.debug("avatarSync:", reqBody);

  // const cqSyncAvatar: GIANTSTEP.WS.Protocol.CQ_SyncAvatar = request;

  const userId = user.getUserId();
  const characterCmsId = user.userCharacter.getCharacterCmsId();
  //const characterCmsId: number = cqSyncAvatar.userId;

  const userDbPool: DBConnPool = Container.of("user").get(DBConnPool);
  return Promise.resolve()
    .then(() => {
      const avatarSlots: AvatarSlot[] =
        user.userCharacter.getAvatarSlotsMapToArray(characterCmsId);
      if (!avatarSlots) {
        return spAvatarSlotLoad(
          userDbPool.getPool(),
          userId,
          characterCmsId
        ).then((resultAvatarSlots) => {
          if (!resultAvatarSlots) {
            return null;
          }
          user.userCharacter.setAvatarSlotsArrayToMap(
            characterCmsId,
            resultAvatarSlots
          );
          return resultAvatarSlots;
        });
      }
      return avatarSlots;
    })
    .then((avatarSlots) => {
      const worldId = user.getWorldId();
      const worldManager = Container.get(WorldManager);
      const world: World = worldManager.getWorld(worldId);

      if (!world) {
        throw new GError(
          `[CQ_SyncAvatar] failed to find world[ ${worldId} ].`,
          GErrorCode.INTERNAL_ERROR
        );
      }

      const snSyncAvatar: GIANTSTEP.WS.Protocol.SN_SyncAvatar =
        GIANTSTEP.WS.Protocol.SN_SyncAvatar.create();

      snSyncAvatar.userId = userId;
      snSyncAvatar.characterCmsId = characterCmsId;
      snSyncAvatar.avatarSlots = avatarSlots;

      // broadcast to others for Join Notification
      world.broadcastToOthers(
        userId,
        GIANTSTEP.WS.Protocol.PacketType.WS_SN_SyncAvatar,
        snSyncAvatar
      );
      return;
    });
};
