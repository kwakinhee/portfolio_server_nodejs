:: install nodejs 14..
:: https://nodejs.org/ko/download/

:: Install yarn (https://classic.yarnpkg.com/en/docs/install/#centos-stable)
CALL npm install -g yarn

:: Install pm2 (https://www.npmjs.com/package/pm2)
CALL yarn global add pm2

:: Install typeScript (https://www.typescriptlang.org/)
CALL yarn global add typescript

:: Install tsc-watch (https://github.com/gilamran/tsc-watch)
CALL yarn global add tsc-watch


