module.exports = {
  apps: [
    /* worldServer */
    {
      name: "worldServer",
      cwd: "./",
      script: "dist/worldServer/main.js",
      exec_mode: "cluster", // 클러스터 모드
      // instance_var: "INSTANCE_ID",
      PROCESS_NAME: "worldServer",

      env_development: {
        NODE_ENV: "development",
      },

      env_test: {
        NODE_ENV: "test",
        //  APP_INSTANCE_ID = '0',
      },

      env_production: {
        NODE_ENV: "production",
        //  APP_INSTANCE_ID = '0',
      },
      node_args: "--expose-gc",
    },
  ],
};
