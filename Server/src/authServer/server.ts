import Container, { Service } from "typedi";
import * as tcp from "../netlib/tcp";
import * as net from "net";
import express from "express";
import morgan from "morgan";
import path from "path";
import ghttp from "http";
import stoppable from "stoppable";
import * as dirAsApi from "../commonlib/gDirAsApi";
import glog from "../commonlib/glog";
import gconf from "../commonlib/gconf";
import cors from "cors";
import cms from "../cms";
import http from "../netlib/http";
// import cors from "cors";
import { DBConnPool } from "../mysqllib/pool";
import { TcpClientSession, TcpClientSessionManager } from "../netlib/tcp";
import { AUTH_WM_Ping } from "../proto/wm_auth/packet";
import { EServerType } from "../netlib/tcp/server/forServer/tcpServerTypes";
import Pubsub from "../redislib/pubsub";
import * as authPubsub from "./authPubsub";
import { UserManager } from "./useManagerr";
import shortid from "shortid";
import { parseIp } from "../netlib/utils";
import RedisConnPool from "../redislib/connPool";

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

// -------------------------------------------------------------------------------------------------
// Api interfaces.
// -------------------------------------------------------------------------------------------------
@Service()
export class AuthService {
  _pingToWorldServerMgr: NodeJS.Timeout;
  TcpClientSessionManager: TcpClientSessionManager;
  worldServerMgrAppId: string;
  authDBConnPool: DBConnPool;
  userCacheRedis: RedisConnPool;
  pubsub: Pubsub;

  async init() {
    this.authDBConnPool = Container.of("auth").get(DBConnPool);
    await this.authDBConnPool.init(gconf.mysqlAuthDb);

    // Init redis pubsub.
    this.pubsub = Container.of("pubsub-auth").get(Pubsub);
    this.pubsub.init(gconf.authPubsubRedis);
    authPubsub.init(this.pubsub);

    // Init user cache redis pool.
    this.userCacheRedis = Container.get(RedisConnPool);
    await this.userCacheRedis.init("user-cache-redis", gconf.userCacheRedis);

    // Init TcpClient
    this.TcpClientSessionManager = new TcpClientSessionManager();

    // 월드 매니저 서버와 연결이 접속 되었을 때, 동기화에 필요한 정보를 전달.
    const onConnected = (tcpClientSession: TcpClientSession) => {
      this._pingToWorldServerMgr = setInterval(() => {
        const packet = new AUTH_WM_Ping();
        packet.data.authServerId = "test";
        tcpClientSession.send(packet);
      }, 3000);

      // TODO: 랜덤 방 입장 테스트 코드
      // setInterval(() => {
      //   for (const i of range(1, 2)) {
      //     let testPacket = new AUTH_WM_GetWorldServerAddress(i, randomInt(20), "1.0.0", "auth-token");
      //     tcpClientSession.send(testPacket);
      //   };
      // }, 3000);
    };

    // 월드 매니저 서버와 연결이 종료되었을때 유저들 일관 접속 종료.
    const onDisconnected = (tcpClientSession: TcpClientSession) => {
      clearInterval(this._pingToWorldServerMgr);
    };

    // 실제로 여러 world 당 worldMgr은 한개.
    const worldMgrServerInstances = gconf.getServerInstances("worldMgrServer");
    worldMgrServerInstances.forEach((worldMgrServer, appId, _) => {
      // const body = worldMgrServerInstances[appId];
      const privateSocketServer = worldMgrServer.privateSocketServer;

      const { host, port } = parseIp(privateSocketServer.url);
      //const host: string = addr.address;
      //const port: number = addr.port;
      // const bindAddress = gconf.privateSocketServer.bindaddress;
      // const port = gconf.privateSocketServer.port;

      glog.info("worldMgrServer connect info:", { appId, host, port });

      let tcpClientSession: TcpClientSession = tcp.createTcpClientSession(
        host,
        port
      );

      tcpClientSession.setConnectionUrl(privateSocketServer.url);

      tcpClientSession.setSegment("url", privateSocketServer.url);
      tcpClientSession.setSegment("type", EServerType.authServer);
      tcpClientSession.routeEx(__dirname, "./serverPacketHandler");

      tcpClientSession.connect(onConnected, onDisconnected);

      this.TcpClientSessionManager.addTcpClientSession(appId, tcpClientSession);
      this.worldServerMgrAppId = appId;
    });
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

  getWorldMgrClientSession(): TcpClientSession {
    return this.TcpClientSessionManager.findTcpClientSession(
      this.worldServerMgrAppId
    );
  }

  async destroy() {
    await this.authDBConnPool.destroy();
    await this.pubsub.quit();
    await this.userCacheRedis.destroy();
    await this.TcpClientSessionManager.dispose();
  }
}

// public Rest API server.
const publicAuthApp = express();
publicAuthApp.disable("x-powered-by");
publicAuthApp.disable("etag");
publicAuthApp.disable("content-type");
publicAuthApp.use(
  morgan((tokens, req, res) => {
    glog.info("authServer-req", {
      "remote-addr": tokens["remote-addr"](req, res),
      url: tokens["url"](req, res),
      status: tokens["status"](req, res),
      "content-length": tokens["res"](req, res, "content-length"),
      "response-time": tokens["response-time"](req, res),
    });
    return null;
  })
);
publicAuthApp.use(express.urlencoded({ extended: true }));
publicAuthApp.use(express.json({ limit: "50mb" }));

// private Rest API server.
const privateAuthApp = express();
privateAuthApp.disable("x-powered-by");
privateAuthApp.disable("etag");
privateAuthApp.disable("content-type");
privateAuthApp.use(
  morgan((tokens, req, res) => {
    glog.info("authServer-req", {
      "remote-addr": tokens["remote-addr"](req, res),
      url: tokens["url"](req, res),
      status: tokens["status"](req, res),
      "content-length": tokens["res"](req, res, "content-length"),
      "response-time": tokens["response-time"](req, res),
    });
    return null;
  })
);
privateAuthApp.use(express.urlencoded({ extended: true }));
privateAuthApp.use(express.json({ limit: "50mb" }));

// const options = {
//   // 접근 권한을 부여하는 도메인
//   origin: "http://inhee-stg.stg-frontier.svc.cr1.io.gamecorp.com",
//   // 응답 헤더에 Access-Control-Allow-Credentials 추가
//   credentials: true,
//   // 응답 상태 200으로 설정
//   //optionsSuccessStatus: 200
// };

// publicAuthApiServer.use(cors());

const publicAuthApiServer = stoppable(ghttp.createServer(publicAuthApp));
const privateAuthApiServer = stoppable(ghttp.createServer(privateAuthApp));
privateAuthApiServer.keepAliveTimeout = 0;

// Stopping flag.
let stopping = false;

// ----------------------------------------------------------------------------
// Public functions.
// ----------------------------------------------------------------------------

async function initRestApiServer() {
  // api 폴더명을 restApi server 핸들러로 등록.
  // await dirAsApi.register(
  //   gameApiApp,
  //   path.join(__dirname, "restApiHandler/auth")
  // );

  // await dirAsApi.register(
  //   gameApiApp,
  //   path.join(__dirname, "restApiHandler/logic")
  // );

  await dirAsApi.register(
    publicAuthApp,
    path.join(__dirname, "restApiHandler/admin")
  );

  // listen public auth server
  const publicBindAddress = gconf.publicRestApiServer.bindAddress;
  const publicPort = gconf.publicRestApiServer.port;
  publicAuthApiServer.listen(publicPort, publicBindAddress, () => {
    glog.info("start public auth server listening ... ", {
      publicBindAddress,
      publicPort,
    });
  });

  await dirAsApi.register(
    privateAuthApp,
    path.join(__dirname, "restApiHandler/private")
  );

  // listen private auth server
  const privateBindAddress = gconf.privateRestApiServer.bindAddress;
  const privatePort = gconf.privateRestApiServer.port;
  privateAuthApiServer.listen(privatePort, privateBindAddress, () => {
    glog.info("start private auth server listening ...", {
      privateBindAddress,
      privatePort,
    });
  });
}

async function closeRestApiServer() {
  return new Promise<void>((resolve, reject) => {
    publicAuthApiServer.stop((err) => {
      if (err) return reject(err);
      glog.info("publicAuthApiServer closed");
      resolve();
    });

    privateAuthApiServer.stop((err) => {
      if (err) {
        return reject(err);
      }
      glog.info("privateAuthApiServer closed");
      resolve();
    });
  });
}

async function stopServer() {
  try {
    glog.info("stopping server ...");
    tcpServerFU.dispose();
    closeRestApiServer();

    const app = Container.get(AuthService);
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

    const app = Container.get(AuthService);
    await app.init();

    cms.loadCms();

    initRestApiServer();

    // const url: URL = new URL(gconf.publicSocketServer.url);
    // console.log(gconf.publicSocketServer);
    const host: string = gconf.publicSocketServer.bindAddress;
    const port: number = gconf.publicSocketServer.port;

    glog.info(`authServer bind info: ${host}:${port}`);

    tcpServerFU.start(host, port, app.connectionHandler, null);
  } catch (error) {
    glog.error("failed to start", { error: error.message, extra: error.extra });
    glog.error(error.stack);
    process.exit(1);
  }
}

export async function stop() {
  if (stopping) {
    return;
  }

  glog.info("stopping server ...");

  stopping = true;

  await stopServer();
}
