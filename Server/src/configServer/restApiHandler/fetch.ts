// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

import Container from "typedi";
import { RequestAs, ResponseAs } from "../../commonlib/gexpressEx";

import { ConfigService } from "../server";

interface RequestBody {
  configPath: string;
}

export = async (req: RequestAs<RequestBody>, res: ResponseAs<{}>) => {
  const configService = Container.get(ConfigService);
  const configData = configService.configData;
  const pathTokens = req.body.configPath.split("/");

  let cfg = configData;
  pathTokens.forEach((pathToken) => {
    if (pathToken.length > 0) {
      cfg = cfg[pathToken];
    }
  });

  res.json(cfg);
};
