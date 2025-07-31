module.exports = {
  apps: [
    /* configServer */
    {
      name: "configServer",
      cwd: "./",
      script: "dist/configServer/main.js",
      // instance_var: "INSTANCE_ID",
      exec_mode: "cluster", // 클러스터 모드
      watch: false, // 폴더 또는 특정 폴더를 감시하여 변경되면 Reload를 진행
      autorestart: false, // 프로세스를 1회만 실행시키고 싶을 때, false로 설정
      // instances: 1, // 인스턴스 수를 결정할 수 있으며, 0으로 작성하면 현재 가능한 CPU 코어 수만큼 실행, -1 인 max cluster
      PROCESS_NAME: "configServer",

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

    /* authServer */
    {
      name: "authServer",
      cwd: "./",
      script: "dist/authServer/main.js",
      exec_mode: "cluster", // 클러스터 모드
      exp_backoff_restart_delay: 100,
      watch: false,
      autorestart: false,
      PROCESS_NAME: "authServer",
      // instances: 1, // 인스턴스 수를 결정할 수 있으며, 0으로 작성하면 현재 가능한 CPU 코어 수만큼 실행
      env_development: {
        NODE_ENV: "development",
      },

      env_test: {
        NODE_ENV: "test",
      },

      env_production: {
        NODE_ENV: "production",
      },

      node_args: "--expose-gc",
    },

    /* worldServer */
    {
      name: "worldServer",
      cwd: "./",
      script: "dist/worldServer/main.js",
      exec_mode: "cluster", // 클러스터 모드
      exp_backoff_restart_delay: 200,
      watch: false,
      autorestart: false,
      PROCESS_NAME: "worldServer",
      // instances: 1,

      env_development: {
        NODE_ENV: "development",
      },

      env_test: {
        NODE_ENV: "test",
      },

      env_production: {
        NODE_ENV: "production",
      },

      node_args: "--expose-gc",
    },

    /* worldMgrServer */
    {
      name: "worldMgrServer",
      cwd: "./",
      script: "dist/worldMgrServer/main.js",
      exec_mode: "cluster", // 클러스터 모드
      PROCESS_NAME: "worldMgrServer",
      // instance_var: "INSTANCE_ID",

      env_development: {
        NODE_ENV: "development",
      },

      env_test: {
        NODE_ENV: "test",
      },

      env_production: {
        NODE_ENV: "production",
        //  APP_INSTANCE_ID = '0',
      },

      node_args: "--expose-gc",
    },
  ],
};
