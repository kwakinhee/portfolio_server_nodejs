// ----------------------------------------------------------------------------
// env 환경의 inhee 서버 deploy
// packageing & upload & update & backup package & backup log & start
// ----------------------------------------------------------------------------

import * as spawn from "child_process";

let cfg: any = null;

function cliExec(cmd: string): Promise<number> {
  console.log(`exec [${cmd}]...`);
  return new Promise((resolve, reject) => {
    const child = spawn.exec(cmd);

    child.stdout.on("data", (buffer) => {
      console.log(buffer.toString());
    });

    child.stderr.on("data", (buffer) => {
      console.log(buffer.toString());
    });

    child.on("error", (err) => {
      console.log(err);
      reject(err);
    });

    child.on("close", (exitCode) => {
      if (exitCode) {
        reject(`exit code is ${exitCode}`);
      } else {
        resolve(exitCode);
      }
    });
  });
}

function buildPackage(): Promise<number> {
  // console.log(__dirname)
  // Based on the execution path.
  // const cmd = `.\\scripts\\deploy\\package_server.bat ${cfg.package.gitDir} ${cfg.branch} ${cfg.gitHash}`;
  const cmd = `sh ./scripts/deploy/package_server.sh ${cfg.package.gitDir} ${cfg.branch} ${cfg.gitHash}`;
  return cliExec(cmd);
}

function uploadAndUpdate(ssh: any): Promise<number> {
  const sshOptions = [
    "-o StrictHostKeychecking=no",
    `-i ${ssh.privateKey}`,
  ].join(" ");
  const sshUserHost = `${ssh.user}@${ssh.host}`;

  // Upload the zipped package file.
  const copyPackageCmd = `scp ${sshOptions} ${cfg.package.name}.tgz ${sshUserHost}:~/`;
  return cliExec(copyPackageCmd)
    .then(() => {
      // Create 'script' folder.
      const makeScirptsCmd = `ssh ${sshOptions} ${sshUserHost} mkdir -p scripts`;
      return cliExec(makeScirptsCmd);
    })
    .then(() => {
      // Organize script opening by os. sed -i -e 's/\r$//'
      const organizeUpdateScriptCmd = `sed -i -e '\s/\\r$//' ./scripts/deploy/update_server.sh`;
      return cliExec(organizeUpdateScriptCmd);
    })
    .then(() => {
      // Organize script opening by os. sed -i -e 's/\r$//'
      const organizeStartScriptCmd = `sed -i -e '\s/\\r$//' ./scripts/deploy/start_server.sh`;
      return cliExec(organizeStartScriptCmd);
    })
    .then(() => {
      // Organize script opening by os. sed -i -e 's/\r$//'
      const organizeInitServerScriptCmd = `sed -i -e '\s/\\r$//' ./scripts/deploy/init_server_env.sh`;
      return cliExec(organizeInitServerScriptCmd);
    })
    .then(() => {
      // Copy local update script to the remote's scripts folder.
      const copyUpdateScriptCmd = `scp ${sshOptions} ./scripts/deploy/update_server.sh ${sshUserHost}:~/scripts/ `;
      return cliExec(copyUpdateScriptCmd);
    })
    .then(() => {
      // Copy local start script to the remote's scripts folder.
      const copyStartScriptCmd = `scp ${sshOptions} ./scripts/deploy/start_server.sh ${sshUserHost}:~/scripts/ `;
      return cliExec(copyStartScriptCmd);
    })
    .then(() => {
      // Copy local init script to the remote's scripts folder.
      const copyInitServertScriptCmd = `scp ${sshOptions} ./scripts/deploy/init_server_env.sh ${sshUserHost}:~/scripts/ `;
      return cliExec(copyInitServertScriptCmd);
    })
    .then(() => {
      const updateCmd = `ssh ${sshOptions} ${sshUserHost} sh ./scripts/update_server.sh ${cfg.env} ${cfg.package.name} ${cfg.build.buildScriptFileName}`;
      return cliExec(updateCmd);
    })
    .then(() => {
      return ssh.servers.reduce(async (prevTask, serverProcessName) => {
        await prevTask;
        const startCmd = `ssh ${sshOptions} ${sshUserHost} sh ./scripts/start_server.sh ${cfg.env} ${serverProcessName}`;
        return cliExec(startCmd);
      }, Promise.resolve());
    });
}

function cleanUp(): Promise<number> {
  const cmd = `rm ${cfg.package.name}.tgz`;
  return cliExec(cmd);
}

function main() {
  const deployConfigName: string = process.argv[2];
  if (!deployConfigName) {
    console.log("No deployment config!");
    return;
  }

  let branch: string = process.argv[3];
  if (!branch) {
    branch = "main";
  }

  let gitHash: string = process.argv[4];
  if (!gitHash) {
    gitHash = "latest";
  }

  cfg = require(`./deploy_config/${deployConfigName}`);
  cfg["branch"] = branch;
  cfg["gitHash"] = gitHash;

  console.log("");
  console.log("Deploy config:", JSON.stringify(cfg, null, 2));
  console.log("");

  cfg.sshs.reduce(async (prevTask, ssh) => {
    await prevTask;

    return buildPackage()
      .then(() => {
        return uploadAndUpdate(ssh);
      })
      .then(() => {
        return cleanUp();
      })
      .catch((err: Error) => {
        console.log("ERROR:", err.message);
        process.exit(1);
      });
  }, Promise.resolve());
  // buildPackage()
  //   .then(() => {
  //     return uploadAndUpdate();
  //   })
  //   .then(() => {
  //     return cleanUp();
  //   })
  //   .catch((err: Error) => {
  //     console.log('ERROR:', err.message);
  //     process.exit(1);
  //   });
}

main();
