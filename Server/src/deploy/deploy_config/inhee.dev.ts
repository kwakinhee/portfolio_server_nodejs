export = {
  sshs: [
    {
      //ubuntu
      host: "127.0.0.1",
      user: "ubuntu",

      privateKey: "privatekey",
      // name of the pm2 server to be executed.
      // configServer.ecosystem.config.js ..
      servers: ["configServer", "worldMgrServer", "authServer", "worldServer"],
    },
  ],
  package: {
    gitDir: "../.git",
    name: "inhee.servers",
  },
  build: {
    buildScriptFileName: "build_inheeserver",
  },
  env: "dev",
};
