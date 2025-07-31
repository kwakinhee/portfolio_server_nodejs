// ----------------------------------------------------------------------------
// https://db-migrate.readthedocs.io/en/latest/ 참고.
// db migrate 를 위한 파일 생성.
// ----------------------------------------------------------------------------

import * as childProcess from 'child_process';

const migrationName = process.argv[2];
let env = process.argv[3];

if (!migrationName) {
  console.log('Invalid migration name!');
  process.exit(1);
}

if (!env) {
  env = 'user';
}

const cmd =
  `db-migrate create:${env} ${migrationName}` +
  ` --config config/database.migrate.json --env ${env} --sql-file`;

console.log(cmd);

try {
const output = childProcess.execSync(cmd, {
  env: process.env,
  maxBuffer: 10000 * 2014,
});

console.log(output.toString());

}
catch(error){
  console.log(error);
}


