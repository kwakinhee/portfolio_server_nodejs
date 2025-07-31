// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

import gconf from "../../commonlib/gconf";
import glog from "../../commonlib/glog";
import { BaseApiClient } from "./baseApiClient";
import os from "os";
import JSON5 from "json5";

/**
 * rest user
 */
export class ConfigApiClient extends BaseApiClient {
  constructor(baseUrl: string) {
    super();
    super.init(baseUrl);
  }

  /**
   * 각 서버별 config 병합.
   */
  async fetch() {
    let fullCfg: string = await this.copyFromUrl("/fetch", "");

    const replaceRe = new RegExp("__HOSTNAME__", "g");
    const newData = fullCfg.replace(replaceRe, os.hostname());
    fullCfg = JSON5.parse(newData.toString());

    glog.info("fetch fullCfg", { fullCfg });

    // 모든 서버에서 공통으로 사용하는 config.
    this.mergeFromConfig(fullCfg, "sharedConfig");

    // 현재 서버에서 공통으로 사용하는 config.
    this.mergeFromConfig(fullCfg, `${gconf.processName}/common`);

    // 현재 서버 title중에 pm2에 설정된 인스턴스 ID 에 해당하는 config.
    this.mergeFromConfig(
      fullCfg,
      `${gconf.processName}/instances/${gconf.appId}`
    );

    // 현재 서버 그룹의 모든 서버에서 필요한 config.
    const ServerGroupConfig = gconf.getServerGroupConfig();
    if (ServerGroupConfig) {
      glog.verbose('Merging server group config ...', {
        serverGroupId: gconf.serverGroupId,
        ServerGroupConfig,
      });
      gconf.appendServerGroupConfig(ServerGroupConfig);
    }

    // 현재 서버에서 연결이 필요한 서버들에 대한 config.
    this.mergeRelevantServerInstances(fullCfg, gconf.serverGroupId);
  }

  private async copyFromUrl(url: string, configPath: string) {
    const cfg = await this.post(url, { configPath });
    glog.verbose(`Merging [${configPath}] from configServer ...`, { cfg });
    return cfg;
  }

  private mergeFromConfig(fullCfg: any, configPath: string) {
    const pathTokens = configPath.split("/");
    let cfg = fullCfg;

    pathTokens.forEach((pathToken) => {
      if (pathToken.length > 0) {
        glog.verbose(`forEach before pathToken  [${pathToken}]...`, { cfg });

        cfg = cfg[pathToken];
        glog.verbose(`forEach after pathTokens ...`, { cfg });
      }
    });

    gconf.append(cfg);
  }

  private getFromConfig(fullCfg: any, configPath: string) {
    const pathTokens = configPath.split("/");

    let cfg = fullCfg;
    pathTokens.forEach((pathToken) => {
      if (pathToken.length > 0) {
        cfg = cfg[pathToken];
      }
    });
    return cfg;
  }

  private mergeRelevantServerInstances(fullCfg: any, serverGroupId: number) {
    let trgServerTypes: string[] = [];
    if (gconf.processName === "authServer") {
      //  trgServerTypes.push("authServer");
      trgServerTypes.push("worldMgrServer");
    }
    if (gconf.processName === "worldServer") {
      trgServerTypes.push("worldMgrServer");
    } else {
      //[TODO:] 연관된 서버 타입 추가.
    }

    for (const serverType of trgServerTypes) {
      const serverInstances = this.getFromConfig(
        fullCfg,
        `${serverType}/instances`
      );

      Object.keys(serverInstances).forEach((appId) => {
        const body = serverInstances[appId];
        if (body.serverGroupId != serverGroupId) {
          return;
        }
        gconf.append({ serverInstances: { [appId]: body } });
      });
    }
  }
}
