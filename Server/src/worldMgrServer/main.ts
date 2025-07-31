// ----------------------------------------------------------------------------
//  서버 시작.
// ----------------------------------------------------------------------------

// Set process title.
process.title = "worldMgrServer";

import "reflect-metadata";

// Start server.
import * as server from "./server";

server.start();

["SIGTERM", "SIGINT", "SIGHUP", "SIGQUIT"].forEach((signal: any) => {
  process.on(signal, server.stop);
});
