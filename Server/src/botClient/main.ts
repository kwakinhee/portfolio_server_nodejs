// ----------------------------------------------------------------------------
//  봇 클라이언트 시작.
// ----------------------------------------------------------------------------

// Set process title.
process.title = "inhee bot client";

import "reflect-metadata";

// Start Test client.
// import * as client from "./moonInventoryTest";
import * as client from "./inheeclient";

client.start();

["SIGTERM", "SIGINT", "SIGHUP", "SIGQUIT"].forEach((signal: any) => {
  process.on(signal, client.stop);
});
