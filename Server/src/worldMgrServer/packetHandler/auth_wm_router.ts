import { NormalResponsor, PacketRouter } from "../../netlib/tcp/tcpRouter";
import { WM_W_SpawnWorld } from "../../proto/wm_world/packet";
import {
  AUTH_WM_GetWorldServerAddress,
  AUTH_WM_Ping,
  WM_AUTH_GetWorldServerAddress,
  WM_AUTH_Pong,
} from "../../proto/wm_auth/packet";
import glog from "../../commonlib/glog";
import Container from "typedi";
import { WorldServer, WorldServerManager } from "../managers/worldServerMgr";
import * as tcp from "../../netlib/tcp";

const auth_wsm_router = tcp.createPacketRouter();

// ----------------------------------------------------------------------------
//  인증서버 -> 월드서버매니저 메세지 핸들러
// ----------------------------------------------------------------------------

auth_wsm_router.on(AUTH_WM_Ping, async (req, sender) => {
  const packet = new WM_AUTH_Pong();
  packet.data.message = "auth-pong";
  sender.send(packet);
});

function getAvailableServer(): WorldServer {
  const worldServerMgr: WorldServerManager = Container.get(WorldServerManager);

  const worldServerList: WorldServer[] = worldServerMgr.getWorldServers();
  if (!worldServerList) {
    glog.warn("There is no available world server running!");
    return;
  }
  const freeWorldServer = worldServerList.reduce((prevServer, currServer) => {
    const prevUserCount = prevServer.getTotalUserCount();
    const currUserCount = currServer.getTotalUserCount();

    return prevUserCount > currUserCount ? currServer : prevServer;
  });

  return freeWorldServer;
}

auth_wsm_router.on(
  AUTH_WM_GetWorldServerAddress,
  async (req: AUTH_WM_GetWorldServerAddress, sender: NormalResponsor) => {
    const data = req.getData();
    const { userId } = data;
    const worldServer = getAvailableServer();
    if (!worldServer) {
      const packet = new WM_AUTH_GetWorldServerAddress(false, "", userId);
      sender.send(packet);
      return;
    }
    const packet = new WM_AUTH_GetWorldServerAddress(
      true,
      worldServer.getPublicAddress(),
      userId
    );
    sender.send(packet);
    return;
  }
);

export default auth_wsm_router;
