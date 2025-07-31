module.exports = {
  apps: [
    /* authServer */
    {
      name: "authServer",
      cwd: "./",
      script: "dist/authServer/main.js",
      exec_mode: "cluster", // 클러스터 모드
      PROCESS_NAME: "authServer",
      // instance_var: "INSTANCE_ID",

      env_development: {
        NODE_ENV: "development",
        //  APP_INSTANCE_ID = '0',
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
