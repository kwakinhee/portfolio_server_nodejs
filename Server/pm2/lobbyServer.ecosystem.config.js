module.exports = {
  apps: [
    /* authServer */
    {
      name: "authServer",
      cwd: "./",
      script: "dist/authServer/main.js",
      exec_mode: "cluster", // 클러스터 모드
      // exp_backoff_restart_delay: 100,
      PROCESS_NAME: "authServer",

      env_development: {
        NODE_ENV: "development",
      },

      env_test: {
        NODE_ENV: "test",
        //  APP_INSTANCE_ID = '0',
      },

      env_production: {
        NODE_ENV: "production",
      },
      node_args: "--expose-gc",
    },
  ],
};
