import { ConfigApiClient } from "./configApiClient";
import { AuthApiClient } from "./authApiClient";
import gconf from "../../commonlib/gconf";

const configServer = new ConfigApiClient(gconf.http.configServer.url);
const authServer = new AuthApiClient();

export default {
  configServer,
  authServer,

  init() {
    if (gconf.http.authServer) {
      authServer.init(gconf.http.authServer.url);
    }
  },
};
