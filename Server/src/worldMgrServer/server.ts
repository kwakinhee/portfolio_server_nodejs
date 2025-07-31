import Container, { Service } from "typedi";
import * as tcp from "../netlib/tcp";
import * as net from "net";
import gconf from "../commonlib/gconf";
import http from "../netlib/http";
import glog from "../commonlib/glog";
import { Segments } from "../netlib/tcp/segments";
import { DBConnPool } from "../mysqllib/pool";
import { parseIp } from "../netlib/utils";

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

export const tcpServerFS: tcp.TcpServerFS = tcp.createTcpServerFS();
// tcpServer.routeEx(__dirname, './serverPacketHandler');
tcpServerFS.routeEx(__dirname, "./packetHandler");

@Service()
export class WorldMgrService {
  private stopping = false;
  private worldDBConnPool: DBConnPool;

  async init() {
    this.worldDBConnPool = Container.of("world").get(DBConnPool);
    await this.worldDBConnPool.init(gconf.mysqlUserDb);
  }

  async destroy() {
    // this.worldDBConnPool.destroy();
    // const worldManager: WorldManager = Container.get(WorldManager);
    // await worldManager.destroyAllWorlds();
  }
}

// ----------------------------------------------------------------------------
// Public functions.
// ----------------------------------------------------------------------------

async function stopServer() {
  try {
    glog.info("stopping server ...");
    await tcpServerFS.dispose();

    const app = Container.get(WorldMgrService);
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

    const app = Container.get(WorldMgrService);
    await app.init();

    // 월드서버 연결이 끊긴경우 해당 함수 호출.
    const onDisconnected = (segment: Segments): void => {
      glog.info("ServerSesion disconnected", { segment });

      // TODO: 접속종료된 서버의 데이터 삭제.
    };

    // const url: URL = new URL(gconf.privateSocketServer.url);

    const host: string = gconf.privateSocketServer.bindAddress;
    const port: number = gconf.privateSocketServer.port;

    // const addr = new net.SocketAddress(gconf.publicSocketServer.url);
    // const host: string = addr.address;
    // const port: number = addr.port;
    // const {host, port} = parseIp(gconf.privateSocketServer);

    glog.info(`worldMgrServer bind info: ${host}:${port}`);

    // 서버 Client(authServer, WorldServer)와의 tcp 통신
    tcpServerFS.start(host, port, null, onDisconnected);
  } catch (error) {
    glog.error("failed to start", { error: error.message, extra: error.extra });
    glog.error(error.stack);
    process.exit(1);
  }
}

let stopping = false;

export async function stop() {
  if (stopping) {
    return;
  }

  glog.info("stopping server ...");

  stopping = true;

  await stopServer();
}
