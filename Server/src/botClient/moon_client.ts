import Container, { Service } from "typedi";
import glog from "../commonlib/glog";
import { GIANTSTEP as WGS } from "../proto/worldServer/jsonProto";
import { GIANTSTEP as AGS } from "../proto/authServer/jsonProto";
import { TcpBotClient } from "../netlib/tcp/client/tcpBotClient";
import { AuthServerHandler, WorldServerHandler } from "./BotPacketHandler";
import {
  reqProtoBufMessageTypes as AS_CQ_ProtoMsgTypes,
  resProtoBufMessageTypes as AS_SA_ProtoMsgTypes,
} from "../authServer/protocol/packetSerder";
import {
  reqProtoBufMessageTypes as WS_CQ_ProtoMsgTypes,
  resProtoBufMessageTypes as WS_SA_ProtoMsgTypes,
} from "../worldServer/packetHandler/packetType";
import cms from "../cms";

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

@Service()
export class BotService {
  authClient: TcpBotClient;
  worldClient: TcpBotClient;

  authToken: string;
  worldServerAddress: string;
  userId: number;

  async init() {
    // load CMS Data
    cms.loadCms();

    // Init TcpClient
    this.authClient = new TcpBotClient(
      "127.0.0.1",
      10301,
      AuthServerHandler,
      AS_CQ_ProtoMsgTypes,
      AS_SA_ProtoMsgTypes
    );
    this.worldClient = new TcpBotClient(
      "127.0.0.1",
      10600,
      WorldServerHandler,
      WS_CQ_ProtoMsgTypes,
      WS_SA_ProtoMsgTypes
    );

    this.runBotClientTest();
  }

  runBotClientTest() {
    this.connectAuthClient();
  }

  connectAuthClient() {
    // 월드 매니저 서버와 연결이 접속 되었을 때, 동기화에 필요한 정보를 전달.
    const onConnectedToAuthServer = (authClientSession: TcpBotClient) => {
      let msg = AGS.AS.Protocol.CQ_Login.create();
      msg.accountId = "test009";
      msg.clientVersion = "1.0";
      msg.loginPlatform = "desktop";

      authClientSession.send(AGS.AS.Protocol.PacketType.AS_CQ_Login, msg);
    };

    // authClient 종료
    const onDisconnectedToAuthServer = (authClientSession: TcpBotClient) => {
      console.log("disconnect from authserver");
    };

    this.authClient.connect(
      onConnectedToAuthServer,
      onDisconnectedToAuthServer
    );
  }

  connectWorldClient() {
    // 월드 매니저 서버와 연결이 접속 되었을 때, 동기화에 필요한 정보를 전달.
    const onConnectedToWorldServer = (clientSession: TcpBotClient) => {
      let msg = WGS.WS.Protocol.CQ_Login.create();
      msg.accountId = "test009";
      msg.isDevLogin = true;
      msg.enterWorldToken = this.authToken;
      msg.loginPlatform = "desktop";

      clientSession.send(WGS.WS.Protocol.PacketType.WS_CQ_Login, msg);
    };

    // authClient 종료
    const onDisconnectedToWorldServer = (clientSession: TcpBotClient) => {
      console.log("disconnect from worldServer");
    };

    this.worldClient.connect(
      onConnectedToWorldServer,
      onDisconnectedToWorldServer
    );
  }

  async destroy() {
    this.authClient.disconnect();
    // this.worldClient.disconnect();
  }
}

async function stopClient() {
  const app = Container.get(BotService);
  await app.destroy();
}

export async function start() {
  const app = Container.get(BotService);
  await app.init();
}

let stopping = false;

export async function stop() {
  if (stopping) {
    return;
  }

  glog.info("stopping client ...");

  stopping = true;

  await stopClient();
}
