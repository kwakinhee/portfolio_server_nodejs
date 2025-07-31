import { User } from "../user";
import { DISCONNECT_REASON } from "../../commonlib/genum";
import { World, WorldOption } from "./world";
import { EWorldType } from "./worldManager";
import Container from "typedi";
import { WorldService } from "../server";
import { W_WM_UserLeaveWorld } from "../../proto/wm_world/packet";
import { GIANTSTEP } from "../../proto/worldServer/jsonProto";

export class NewJeansWorld extends World {
  private networkedEntities = {};

  constructor(worldId: number) {
    super(worldId, EWorldType.NEWJEANS_WORLD);
  }

  // World Class Interface
  protected onCreateInternal(options: WorldOption): Promise<boolean> {
    console.log("************** NEWJEANS WORLD CREATED *****************");
    return Promise.resolve().then(() => {
      return true;
    });
  }

  protected async _onJoin(user: User) {
    console.log(
      "************** User JOINED NEWJEANS WORLD LOGIC *****************"
    );

    // 1. 캐릭터 초기화에 필요한 데이터 가져오기.
    // 2. 캐릭터 초기화
    // 3. User 객체에 CharacterId 매핑?
  }

  protected async _onLeave(user: User) {
    console.log(
      "************** User LEFT NEWJEANS WORLD LOGIC *****************"
    );

    const worldService = Container.get(WorldService);
    const WSMClient = worldService.getWSMClientSession();
    const packet = new W_WM_UserLeaveWorld(
      this.worldDbId,
      user.getUserId(),
      this.getUserCount()
    );
    WSMClient.send(packet);

    const broadcastPacket =
      GIANTSTEP.WS.Protocol.SN_UserLeaveBroadcast.create();
    broadcastPacket.userId = user.getUserId();
    broadcastPacket.CharacterName = user.userCharacter.getCharacterName();
    this.broadcastToOthers(
      user.getUserId(),
      GIANTSTEP.WS.Protocol.PacketType.WS_SN_UserLeaveBroadcast,
      broadcastPacket
    );
  }

  protected _onDestroy() {
    console.log(
      "************** WorldDestroyed NEWJEANS WORLD LOGIC *****************"
    );

    // 1. Save Data of Level and Users
    // 2. Disconnect All Users
    // 3. Actually Destroy

    for (const [_, user] of this.users) {
      user.disconnect(DISCONNECT_REASON.DESTROY_WORLD);
    }
  }
  //~ End World Class Interface

  // World Contents
  public getEntityByEntityId(entityId) {
    console.log("************** getEntityByEntityId called *****************");
    return this.networkedEntities[entityId];
  }

  // Some gameLogic in World.
  moveEntity(entityId: number, msg: any) {
    console.log(`Entity Movement update.`);
  }
}
