import Container, { Service } from "typedi";
import express from "express";
import morgan from "morgan";
import path from "path";
import httpd from "http";
import stoppable from "stoppable";
import * as dirAsApi from "../commonlib/gDirAsApi";
import glog from "../commonlib/glog";
import { GError, GErrorCode } from "../commonlib/gerror";
import gconf from "../commonlib/gconf";
import * as gutil from "../commonlib/gutil";
import JSON5 from "json5";
import os from "os";

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

// -------------------------------------------------------------------------------------------------
// Api interfaces.
// -------------------------------------------------------------------------------------------------
@Service()
export class ConfigService {
  configData: string; // Main config object.

  async init() {
    const bOk: any = await this.reload();
    if (!bOk) {
      throw new GError(
        "Failed to load initial service layer!",
        GErrorCode.INTERNAL_ERROR
      );
    }
  }

  async reload(): Promise<object> {
    const serviceLayerFolder = "service_layer";
    const layerFileName = gconf.layer || "local.json5";
    const layerFilePath = path.join(serviceLayerFolder, layerFileName);

    glog.info("Reloading layer...", {
      layerFileName,
    });

    return gutil
      .readFile(layerFilePath, "utf8")
      .then((layerData) => {
        // 읽어온 json 파일의 __HOSTNAME__ 을 os의 hostname 으로 변환.
        // const replaceRe = new RegExp("__HOSTNAME__", "g");
        // const newData = layerData.replace(replaceRe, os.hostname());
        // this.configData = JSON5.parse(newData.toString());
        this.configData = layerData;
        glog.info("layer reloaded successfully.", { dump: this.configData });

        return this.configData;
      })
      .catch((err) => {
        glog.error("Failed to reload layer!", {
          layerFileName,
          errMsg: err.message,
        });

        return null;
      });
  }

  async destroy() {}
}

// Rest API server.
const configApp = express();

configApp.disable("x-powered-by");
configApp.disable("etag");
configApp.disable("content-type");

configApp.use(
  morgan((tokens, req, res) => {
    glog.info("configServer-req", {
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
configApp.use(express.urlencoded({ extended: true }));
configApp.use(express.json({ limit: "50mb" }));

const configServer = stoppable(httpd.createServer(configApp));

// Stopping flag.
let stopping = false;

// ----------------------------------------------------------------------------
// Public functions.
// ----------------------------------------------------------------------------

async function initRestApiServer() {
  const bindAddress = "0.0.0.0";
  const tokens = gconf.http.configServer.url.split(":");
  const port = parseInt(tokens[tokens.length - 1], 10);

  // api 폴더명을 restApi server 핸들러로 등록.
  await dirAsApi.register(configApp, path.join(__dirname, "restApiHandler"));

  configServer.listen(port, bindAddress, () => {
    glog.info("API start listening ... ", { bindAddress, port });
  });
}

async function closeApiServer() {
  return new Promise<void>((resolve, reject) => {
    configServer.stop((err) => {
      if (err) return reject(err);
      glog.info("api-server closed");
      resolve();
    });
  });
}

async function stopServer() {
  try {
    glog.info("stopping server ...");

    await closeApiServer();

    const app = Container.get(ConfigService);
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
    const app = Container.get(ConfigService);
    await app.init();

    await initRestApiServer();
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
