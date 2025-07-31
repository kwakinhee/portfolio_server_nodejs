import Container, { Service } from "typedi";
import * as tcp from "../netlib/tcp";
import { WorldManager } from "./world/worldManager";
import { UserManager } from "./userManager";
import * as net from "net";
import ghttp from "http";
import express from "express";
import cors from "cors";
import { DISCONNECT_REASON } from "../commonlib/genum";
import { DBConnPool } from "../mysqllib/pool";
import RedisConnPool from "../redislib/connPool";
import gconf from "../commonlib/gconf";
import http from "../netlib/http";
import cms from "../cms";
import glog from "../commonlib/glog";
import shortid from "shortid";
import { TcpClientSession, TcpClientSessionManager } from "../netlib/tcp";
import { W_WM_Ping, W_WM_RegisterWorldServer } from "../proto/wm_world/packet";
import { EServerType } from "../netlib/tcp/server/forServer/tcpServerTypes";
import morgan from "morgan";
import stoppable from "stoppable";
import { parseIp } from "../netlib/utils";
import Pubsub from "../redislib/pubsub";
import * as worldPubsub from "./worldPubsub";

//---------------------------------------------------------------------------------------------------
// undefined, null 참조등으로 예외를 catch 하지 못하면 호출.
// -------------------------------------------------------------------------------------------------
process.on("uncaughtException", (err) => {
  glog.error("uncaught Exception", {
    msg: err.message,
    stack: err.stack,
  });

  // 위에 error로그가 파일기록이 비동기라서 약 1초간의 딜레이를 준 후 종료 시킨다.
  setTimeout(() => {
    process.exit(1);
  }, 1000);
});

// -------------------------------------------------------------------------------------------------
// try , promise 에서 예외를 catch 하지 못하면 호출.
// -------------------------------------------------------------------------------------------------
process.on("unhandledRejection", (err: Error) => {
  glog.error("unhandled Rejection", {
    msg: err.message,
    stack: err.stack,
  });

  // 위에 error로그가 파일기록이 비동기라서 약 1초간의 딜레이를 준 후 종료 시킨다.
  setTimeout(() => {
    process.exit(1);
  }, 1000);
});

export const tcpServerFU: tcp.TcpServerFU = tcp.createTcpServerFU();

@Service()
export class WorldService {
  userDbConnPool: DBConnPool;
  worldServerMgrAppId: string;
  TcpClientSessionManager: TcpClientSessionManager;
  userCacheRedis: RedisConnPool;
  authPubsub: Pubsub;
  private _pingToWorldServerMgr;

  async init() {
    const userManager: UserManager = Container.get(UserManager);
    userManager.userTick();

    this.userDbConnPool = Container.of("user").get(DBConnPool);
    await this.userDbConnPool.init(gconf.mysqlUserDb);

    // Init user cache redis pool.
    this.userCacheRedis = Container.of("user-cache-redis").get(RedisConnPool);
    await this.userCacheRedis.init("user-cache-redis", gconf.userCacheRedis);

    this.authPubsub = Container.of("pubsub-auth").get(Pubsub);
    this.authPubsub.init(gconf.authPubsubRedis);

    worldPubsub.init();

    // Init TcpClient
    this.TcpClientSessionManager = new TcpClientSessionManager();

    // 월드 매니저 서버와 연결이 접속 되었을 때, 동기화에 필요한 정보를 전달.
    const onConnected = (tcpClientSession: TcpClientSession) => {
      let packet = new W_WM_RegisterWorldServer(
        gconf.publicSocketServer.url,
        gconf.appId
      );
      tcpClientSession.send(packet);

      this._pingToWorldServerMgr = setInterval(() => {
        const userMgr = Container.get(UserManager);
        const worldMgr = Container.get(WorldManager);

        const packet = new W_WM_Ping(
          userMgr.getUserCount(),
          worldMgr.getWorldCount()
        );
        tcpClientSession.send(packet);
      }, 3000);
    };

    // 월드 매니저 서버와 연결이 종료되었을때 유저들 일관 접속 종료.
    const onDisconnected = (tcpClientSession: TcpClientSession) => {
      clearInterval(this._pingToWorldServerMgr);

      const userManager = Container.get(UserManager);
      userManager.disconnectAll(
        DISCONNECT_REASON.LOST_WORLD_MGR_SERVER_CONNECTION
      );
    };

    // 실제로 여러 world 당 worldMgr은 한개.
    const worldMgrServerInstances = gconf.getServerInstances("worldMgrServer");
    worldMgrServerInstances.forEach((worldMgrServer, appId, _) => {
      const privateSocketServer = worldMgrServer.privateSocketServer;
      const { host, port } = parseIp(privateSocketServer.url);

      glog.info("worldMgrServer connect info:", { appId, host });

      let tcpClientSession: TcpClientSession = tcp.createTcpClientSession(
        host,
        port
      );
      tcpClientSession.setConnectionUrl(privateSocketServer.url);
      tcpClientSession.setSegment("url", privateSocketServer.url);
      tcpClientSession.setSegment("type", EServerType.worldServer);
      tcpClientSession.routeEx(__dirname, "./serverPacketHandler");
      tcpClientSession.connect(onConnected, onDisconnected);

      this.TcpClientSessionManager.addTcpClientSession(appId, tcpClientSession);
      this.worldServerMgrAppId = appId;
    });
  }

  async destroy() {
    await this.userDbConnPool.destroy();
    await this.authPubsub.quit();
    await this.userCacheRedis.destroy();

    clearInterval(this._pingToWorldServerMgr);

    const worldManager: WorldManager = Container.get(WorldManager);
    worldManager.destroyAllWorlds();

    const userManager: UserManager = Container.get(UserManager);
    userManager.stopUserTick();
    userManager.disconnectAll(DISCONNECT_REASON.STOP_SERVER);

    await this.TcpClientSessionManager.dispose();
  }

  connectionHandler(socket: net.Socket): void {
    const sessionId: string = shortid.generate();

    glog.info("new client connection", {
      address: `${socket.remoteAddress}:${socket.remotePort}`,
      sessionId: sessionId,
    });

    const userMgr = Container.get(UserManager);
    userMgr.createUser(sessionId, socket);
  }

  getWSMClientSession(): TcpClientSession {
    return this.TcpClientSessionManager.findTcpClientSession(
      this.worldServerMgrAppId
    );
  }
}

// Rest API server.
const gameApiApp = express();

gameApiApp.disable("x-powered-by");
gameApiApp.disable("etag");
gameApiApp.disable("content-type");

// gameApiApp.use(morgan("dev"));
gameApiApp.use(
  morgan((tokens, req, res) => {
    glog.info("worldServer-req", {
      "remote-addr": tokens["remote-addr"](req, res),
      url: tokens["url"](req, res),
      status: tokens["status"](req, res),
      "content-length": tokens["res"](req, res, "content-length"),
      "response-time": tokens["response-time"](req, res),
    });
    return null;
  })
);

// 버전 업으로 인해 변경.
gameApiApp.use(express.urlencoded({ extended: true }));
gameApiApp.use(express.json({ limit: "50mb" }));

// const options = {
//   // 접근 권한을 부여하는 도메인
//   origin: "http://inhee-stg.stg-frontier.svc.cr1.io.gamecorp.com",
//   // 응답 헤더에 Access-Control-Allow-Credentials 추가
//   credentials: true,
//   // 응답 상태 200으로 설정
//   //optionsSuccessStatus: 200
// };

gameApiApp.use(cors());

const gameApiServer = stoppable(ghttp.createServer(gameApiApp));
gameApiServer.keepAliveTimeout = 0;

// Stopping flag.
let stopping = false;

// ----------------------------------------------------------------------------
// Public functions.
// ----------------------------------------------------------------------------

// async function initRestApiServer() {
//   const bindAddress = gconf.publicRestApiServer.bindAddress;
//   const port = gconf.publicRestApiServer.port;

//   api 폴더명을 restApi server 핸들러로 등록.
//   await dirAsApi.register(
//     gameApiApp,
//     path.join(__dirname, "restApiHandler/auth")
//   );

//   await dirAsApi.register(
//     gameApiApp,
//     path.join(__dirname, "restApiHandler/logic")
//   );

//   await dirAsApi.register(
//     gameApiApp,
//     path.join(__dirname, "restApiHandler/admin")
//   );

//   const url : URL= new URL(gconf.publicRestApiServer.url);
//   const host: string = url.hostname;
//   const port: number = parseInt(url.port);
//   gameApiServer.listen(port, host, () => {
//     glog.info("API start listening ... ", { host, port});
//   });
// }

// async function closeRestApiServer() {
//   return new Promise<void>((resolve, reject) => {
//     gameApiServer.stop((err) => {
//       if (err) return reject(err);
//       glog.info("api-server closed");
//       resolve();
//     });
//   });
// }

// ----------------------------------------------------------------------------
// Public functions.
// ----------------------------------------------------------------------------

async function stopServer() {
  try {
    glog.info("stopping server ...");
    await tcpServerFU.dispose();

    const app = Container.get(WorldService);
    await app.destroy();

    glog.info("server stopped");
    process.exitCode = 0;
  } catch (error) {
    glog.error("graceful shutdown failed", { error: error.message });
    process.exit(1);
  }
}

// ----------------------------------------------------------------------------
// Public functions.
// ----------------------------------------------------------------------------
export async function start() {
  try {
    // Init config.
    await http.configServer.fetch();

    // Init http clients.
    http.init();

    const app = Container.get(WorldService);
    await app.init();

    // 게임 데이터 로드
    cms.loadCms();

    const host: string = gconf.publicSocketServer.bindAddress;
    const port: number = gconf.publicSocketServer.port;

    glog.info(`worldServer bind info: ${host}:${port}`);

    tcpServerFU.start(host, port, app.connectionHandler, null);
  } catch (error) {
    glog.error("failed to start", { error: error.message, extra: error.extra });
    glog.error(error.stack);
    process.exit(1);
  }
}

// let stopping = false;

export async function stop() {
  if (stopping) {
    return;
  }

  glog.info("stopping server ...");

  stopping = true;

  await stopServer();
}
