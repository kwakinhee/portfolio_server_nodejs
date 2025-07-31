import { NormalResponsor } from "../../netlib/tcp/tcpRouter";
import {
  W_WM_GetWorldAddress,
  W_WM_Ping,
  W_WM_RegisterWorld,
  W_WM_RegisterWorldServer,
  W_WM_UnRegisterWorld,
  W_WM_UserJoinWorld,
  W_WM_UserLeaveWorld,
  WM_W_GetWorldAddress,
  WM_W_Pong,
  WM_W_SpawnWorld,
} from "../../proto/wm_world/packet";
import glog from "../../commonlib/glog";
import { tcpServerFS } from "../server";
import { TcpServerFSSession } from "../../netlib/tcp/server/forServer/tcpServerFSSession";
import Container from "typedi";
import { WorldServer, WorldServerManager } from "../managers/worldServerMgr";
import { TcpServerFSSessionManager } from "../../netlib/tcp/server/forServer/tcpServerFSSessionManager";
import {
  EWorldState,
  ReservedUser,
  World,
  WorldManager,
} from "../managers/worldManager";
import * as tcp from "../../netlib/tcp";
import { parseIp } from "../../netlib/utils";

const w_wsm_router = tcp.createPacketRouter();

// ----------------------------------------------------------------------------
//  월드서버 -> 월드서버매니저 메세지 핸들러
// ----------------------------------------------------------------------------

w_wsm_router.on(
  W_WM_RegisterWorldServer,
  async (req: W_WM_RegisterWorldServer, sender: NormalResponsor) => {
    const data = req.getData();
    const { appId, publicAddress } = data;
    const { host, port } = parseIp(publicAddress);
    const serverSessionMgr: TcpServerFSSessionManager =
      tcpServerFS.getTcpServerFSSessionManager();
    const worldServerSession: TcpServerFSSession = serverSessionMgr.findSession(
      sender.getSessionId()
    );
    const worldServerMgr = Container.get(WorldServerManager);

    const worldServer: WorldServer = worldServerMgr.addWorldServer(
      appId,
      worldServerSession
    );
    if (worldServer) {
      glog.info(
        `[W_WM_RegisterWorldServer] appId: ${appId}, publicAddress: ${host} + ":" + ${port}`
      );
      worldServer.setPublicAddress(host + ":" + port);
    } else {
      glog.error(`failed to register server. [${appId}] - ${publicAddress}`);
    }
  }
);

w_wsm_router.on(W_WM_Ping, async (req: W_WM_Ping, sender: NormalResponsor) => {
  const data = req.getData();

  //TODO Ping Time Check or 상태체크

  const packet = new WM_W_Pong();
  packet.data.pong = "this is pong.";
  sender.send(packet);
});

w_wsm_router.on(
  W_WM_UserJoinWorld,
  async (req: W_WM_UserJoinWorld, sender: NormalResponsor) => {
    const data = req.getData();
    const { worldId, userId, userCount } = data;

    const worldMgr: WorldManager = Container.get(WorldManager);
    const world: World = worldMgr.getWorldById(worldId);

    if (!world) {
      glog.info(`WorldID [${worldId}] does not exist.`);
      return;
    }
    world.addJoinedUser(userId);

    const worldServerMgr: WorldServerManager =
      Container.get(WorldServerManager);
    const worldServer: WorldServer = worldServerMgr.getWorldServerBySessionId(
      sender.getSessionId()
    );
    if (!worldServer) {
      glog.error(
        `[CRITICAL] SessionID [${sender.getSessionId()}] is not registered as WorldServer.`
      );
      return;
    }

    worldServer.setUserCount(worldId, userCount);
  }
);

w_wsm_router.on(
  W_WM_UserLeaveWorld,
  async (req: W_WM_UserLeaveWorld, sender: NormalResponsor) => {
    const data = req.getData();
    const { worldId, userId, userCount } = data;

    const worldMgr: WorldManager = Container.get(WorldManager);
    const world: World = worldMgr.getWorldById(worldId);

    if (!world) {
      glog.info(`WorldID [${worldId}] does not exist.`);
      return;
    }

    world.removeJoinedUsers(userId);

    const worldServerMgr: WorldServerManager =
      Container.get(WorldServerManager);
    const worldServer: WorldServer = worldServerMgr.getWorldServerBySessionId(
      sender.getSessionId()
    );
    if (!worldServer) {
      glog.error(
        `[CRITICAL] SessionID [${sender.getSessionId()}] is not registered as WorldServer.`
      );
      return;
    }
    worldServer.setUserCount(worldId, userCount);
  }
);

w_wsm_router.on(
  W_WM_GetWorldAddress,
  async (req: W_WM_GetWorldAddress, sender: NormalResponsor) => {
    const data = req.getData();
    const { worldId, userId, clientVersion, autToken } = data;

    glog.debug("W_WM_GetWorldAddress : ", {
      worldId: worldId,
      userId: userId,
    });

    const worldMgr: WorldManager = Container.get(WorldManager);
    const worldServerMgr: WorldServerManager =
      Container.get(WorldServerManager);

    // 해당 월드가 스폰이 안되어있는 경우 월드서버에 월드 스폰 요청.
    // 이후 W_WM_RegisterWorld 핸들러에서 예약된 유저들에게 월드정보 브로드캐스트
    const existingWorld: World = worldMgr.getWorldById(worldId);

    if (!existingWorld) {
      let newWorld = worldMgr.createWorld(worldId);
      const newUser = new ReservedUser(userId, sender.getSessionId());
      newWorld.addReservedUser(userId, newUser);

      // 요청된 룸이 존재하지 않을 시,W_WM_GetWorldAddress메세지를 보낸 월드서버에 룸 생성 요청.
      const worldServer = worldServerMgr.getWorldServerBySessionId(
        sender.getSessionId()
      );
      if (!worldServer) {
        glog.error(
          `ClientSession[ ${sender.getSessionId()} ] is not WorldServer! Terminate Request`
        );
        let packet = new WM_W_GetWorldAddress(false);
        sender.send(packet);
        return;
      }
      let packet = new WM_W_SpawnWorld(worldId);
      worldServer.send(packet);
      return;
    }

    // 정상적인 룸일 경우
    if (existingWorld.getWorldState() === EWorldState.Created) {
      const worldServer: WorldServer = worldServerMgr.getWorldServerBySessionId(
        existingWorld.worldServerId
      );

      // 룸이 소속된 서버가 유효한 월드서버가 아닌경우.
      if (!worldServer) {
        glog.error(
          `failed to find WorldId[ ${existingWorld.worldId}]'s Owner. worldServerId: [${existingWorld.worldServerId}]`
        );
        let packet = new WM_W_GetWorldAddress(false);
        sender.send(packet);
        return;
      }

      let packet = new WM_W_GetWorldAddress(
        true,
        worldServer.getPublicAddress(),
        existingWorld.worldId,
        userId
      );
      sender.send(packet);
      return;

      // 아직 룸이 생성중인 경우. W_WM_RegisterWorld 메세지가 아직 도착하지 않음.
    } else {
      glog.info(
        `worldId:[ ${existingWorld.worldId} ] WorldState: [ ${
          EWorldState[existingWorld.getWorldState()]
        } ]`
      );
      const newUser = new ReservedUser(userId, sender.getSessionId());
      existingWorld.addReservedUser(userId, newUser);
      return;
    }
  }
);

w_wsm_router.on(
  W_WM_RegisterWorld,
  async (req: W_WM_RegisterWorld, sender: NormalResponsor) => {
    const data = req.getData();
    const { result, worldId } = data;

    const worldServerAddress = data.worldServerAddress;

    const worldMgr: WorldManager = Container.get(WorldManager);
    const world: World = worldMgr.getWorldById(worldId);

    if (!world) {
      glog.error(
        `registered world [${worldId}] was never created in the Manager.`
      );
      return;
    }

    const reservedUsers = world.getReservedUsers();
    const serverSessionMgr = tcpServerFS.getTcpServerFSSessionManager();

    const packet = new WM_W_GetWorldAddress(false, "", worldId);

    if (!result) {
      glog.info(
        `registered world [ ${worldId} ] failed to spawn in WorldServer[ ${worldServerAddress} ]`
      );
      for (const user of reservedUsers) {
        const auth = serverSessionMgr.findSession(user.requested_from);
        auth.send(packet);
      }
      worldMgr.deleteWorld(worldId);
      return;
    }

    world.setWorldServerId(sender.getSessionId());
    world.setWorldState(EWorldState.Created);

    const worldServerMgr = Container.get(WorldServerManager);
    const worldServer = worldServerMgr.getWorldServerBySessionId(
      sender.getSessionId()
    );
    worldServer.registeredWorlds.set(worldId, 0);

    packet.data.result = true;
    packet.data.worldId = worldId;
    packet.data.worldServerAddress = worldServerAddress;

    for (const user of reservedUsers) {
      const requester = serverSessionMgr.findSession(user.requested_from);
      packet.data.userId = user.userId;
      requester.send(packet);
    }
    world.clearReservedUsers();

    glog.info(`World [ ${worldId} ] has successfully spawned and registered.`);
  }
);

w_wsm_router.on(
  W_WM_UnRegisterWorld,
  async (req: W_WM_UnRegisterWorld, sender: NormalResponsor) => {
    const data = req.getData();
    const { worldId } = data;

    const worldMgr: WorldManager = Container.get(WorldManager);
    const world: World = worldMgr.getWorldById(worldId);

    if (!world) {
      glog.error(
        `[W_WM_UnRegisterWorld] Registered World [${worldId}] was never created in the WorldManager.`
      );
    } else {
      worldMgr.deleteWorld(worldId);
    }

    const worldServerMgr = Container.get(WorldServerManager);
    const worldServer = worldServerMgr.getWorldServerBySessionId(
      world.getWorldServerId()
    );

    if (!worldServer) {
      glog.error(
        `[W_WM_UnRegisterWorld] WorldServer [ ${sender.getSessionId()} ] is not registered in WorldServerMgr`
      );
    } else {
      worldServer.registeredWorlds.delete(worldId);
    }

    return;
  }
);

export default w_wsm_router;
