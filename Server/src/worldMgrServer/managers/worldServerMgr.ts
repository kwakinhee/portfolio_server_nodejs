import Container, { Service } from "typedi";
import { IPacket } from "../../netlib/tcp/basicPackets";
import { TcpServerFSSession } from "../../netlib/tcp/server/forServer/tcpServerFSSession";
import glog from "../../commonlib/glog";
import { WorldManager } from "./worldManager";

type AppId = string;
type SessionId = string;

// ----------------------------------------------------------------------------
//  월드서버매니저 - WorldServerMgr
// ----------------------------------------------------------------------------

export class WorldServer {
  session: TcpServerFSSession;
  sessionId: SessionId;
  appId: AppId;
  publicAddress: string;
  registeredWorlds: Map<number, number>;

  constructor(session: TcpServerFSSession, appId: AppId) {
    this.session = session;
    this.sessionId = session.getSessionId();
    this.appId = appId;
    this.registeredWorlds = new Map<number, number>();
  }

  send(packet: IPacket) {
    this.session.send(packet);
  }

  getPublicAddress(): string {
    return this.publicAddress;
  }

  setPublicAddress(url: string) {
    this.publicAddress = url;
  }

  setUserCount(worldId: number, num: number) {
    let userCount = this.registeredWorlds.get(worldId);
    userCount = num;
  }

  getAppId(): AppId {
    return this.appId;
  }

  getTotalUserCount(): number {
    let total = 0;
    for (const [ _, userCount ] of this.registeredWorlds) {
      total += userCount;
    }
    return total;
  }

  getWorldUserCount(worldId: number): number {
    return this.registeredWorlds.get(worldId);
  }
}

@Service()
export class WorldServerManager {
  
  private worldServersBySessionId: Map<SessionId, WorldServer> = new Map<SessionId, WorldServer>();
  private serverIdMap: Map<AppId, SessionId> = new Map<AppId, SessionId>();

  addWorldServer(appId: string, WSSession: TcpServerFSSession): WorldServer {

    const exist = this.serverIdMap.get(appId);

    if (exist) {
      glog.error(`AppId: ${appId} already exist. AppId cannot be duplicated.`);
      return null;
    }

    const sessionId = WSSession.getSessionId();
    const worldServer = new WorldServer(WSSession, appId);

    WSSession.disconnected.once((session) => {
      const disconnectedSessionId = session.getSessionId();
      const disconnectedWS = this.getWorldServerBySessionId(disconnectedSessionId);
      const disconnectedWSAppId = disconnectedWS.getAppId();

      glog.info(
        `WorldServer[ ${this.getWorldServerByAppId(
          disconnectedWSAppId
        ).getPublicAddress()} ] is disconnected. Remove From worldServersMap.`
      );

      // Remove All Worlds under this WorldServer
      const worldMgr: WorldManager = Container.get(WorldManager);
      for (const [worldId, _ ] of disconnectedWS.registeredWorlds) {
        worldMgr.deleteWorld(worldId);
      }
      this.removeWorldServerBySessionId(disconnectedSessionId);
    });

    this.serverIdMap.set(appId, sessionId);
    this.worldServersBySessionId.set(sessionId, worldServer);

    glog.info(
      `WorldServerSession[${WSSession.getSessionId()}][ ${appId}] is added to WorldServerManager`
    );

    return this.worldServersBySessionId.get(sessionId);
  }

  removeFromServerIdMap(appId: string) {
    this.serverIdMap.delete(appId);
  }

  removeWorldServerBySessionId(sessionId: string) {
    const appId = this.worldServersBySessionId.get(sessionId).getAppId();
    this.worldServersBySessionId.delete(sessionId);
    this.removeFromServerIdMap(appId);
  }

  getWorldServerBySessionId(sessionId: string): WorldServer | null {
    return this.worldServersBySessionId.get(sessionId);
  }

  getWorldServerByAppId(appId: string): WorldServer | null {
    const sessionId = this.serverIdMap.get(appId);

    if (!sessionId) {
      glog.warn(`WorldServer AppId[ ${appId} ] is not valid.`);
      return null;
    }

    return this.worldServersBySessionId.get(sessionId);
  }

  getWorldServers(): WorldServer[] {
    return [...this.worldServersBySessionId.values()];
  }

  destroy() {
    glog.info("WorldServerManager Destroyed.");
    this.worldServersBySessionId.clear();
    this.serverIdMap.clear();
  }
}
