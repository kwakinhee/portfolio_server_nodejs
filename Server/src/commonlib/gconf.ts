// ----------------------------------------------------------------------------
// 모든 서버에서 필요한 config들을 관리.
// ----------------------------------------------------------------------------

import config from "config";
import _ from "lodash";
import os from "os";
import { GError, GErrorCode } from "./gerror";

const _RequiredServerGroupConfig = {
  // worldServer: [
  //   'mysqlUserDb',
  // ],
};

function _throwOnMissingConfig(cfgName: string) {
  throw new GError('Missing required config!', GErrorCode.INTERNAL_ERROR, { cfgName });
}

export interface ServerGroup {
  id: string;
}

type IConfig = typeof config;

class GConf implements IConfig {
  [key: string]: any;
  appInstanceId: number;
  isDev: boolean;
  hostname: string;
  // 내 서버에서만 사용하는 ID. 연결에 쓰지마시오.
  appId: string;
  processName: string;

  ServerGroups: ServerGroup[];

  constructor() {
    // appInstanceId 는 같은서버가 여러개 있을때 구분하는 인스턴스 아이디.
    this.appInstanceId = parseInt(process.env.APP_INSTANCE_ID || "0", 10);
    this.isDev = process.env.NODE_ENV !== "production";
    this.hostname = os.hostname();
    this.processName = process.env.PROCESS_NAME || process.title;
    this.appId = `${this.processName || ""}.${this.appInstanceId}@${
      this.hostname
    }`;
  }

  // from. default.json5
  // config https://www.npmjs.com/package/config 참고.
  log: {
    console: {
      level: string;
      inspectDepth: number;
      bUseStringifiedJsonPrintFormat: boolean;
    };
    file: {
      level: string;
      datePattern: string;
    };
    baseDir: string;
  };

  http: {
    configServer: { url: string };
    authServer: { url: string };
  };

  // 각 서버에서 연동에 필요한 서버 인스턴스 정보들.
  serverInstances: {
    appId: {
      serverGroupId: number;

      privateRestApiServer: {
        bindAddress: string;
        port: number;
        url: string;
      };
      privateSocketServer: {
        bindAddress: string;
        port: number;
        url: string;
      };

      publicRestApiServer: {
        bindAddress: string;
        port: number;
        url: string;
      };
      publicSocketServer: {
        bindAddress: string;
        port: number;
        url: string;
      };
    };
  };

  maxPayloadQueueSize: number;

  append(others: { [key: string]: any }) {
    _.merge(this, others);
  }


  appendServerGroupConfig(ServerGroupConfig: any) {
    // 서버마다 필요한 설정 머지.
    const cfgList = _RequiredServerGroupConfig[process.title];
    if (!cfgList) {
      return;
    }

    for (const cfgName of cfgList) {
      this[cfgName] = ServerGroupConfig[cfgName];

      if (!this[cfgName]) {
        _throwOnMissingConfig(cfgName);
      }
    }
  }

  get<T>(setting: string): T {
    return config.get<T>(setting);
  }

  has(setting: string): boolean {
    return config.has(setting);
  }

  getServerGroupConfig(): any {
    if (!this.ServerGroupId) {
      return null;
    }

    for (const ServerGroupConfig of this.ServerGroups) {
      if (ServerGroupConfig.id === this.ServerGroupId) {
        return ServerGroupConfig;
      }
    }

    return null;
  }


  getServerInstances(serverType: string): Map<string, any> {
    let serverInstances = new Map<string, any>();

    Object.keys(this.serverInstances).forEach((appId) => {
      const nameTokens = appId.split(".");
      if (nameTokens[0] != serverType) {
        return;
      }
      serverInstances.set(appId, this.serverInstances[appId]);
    });
    return serverInstances;
  }

  util = config.util;
}


let gconf: GConf = new GConf();
_.merge(gconf, config);

export default gconf;
