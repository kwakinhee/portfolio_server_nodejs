#!/bin/bash

echo '========================================================================='
echo '= jenkins master inhee-server pre-update & build'
echo '========================================================================='

pushd ${SERVER_ENV}/nodejs
# echo "= PATH: $PATH"

# Apply only during initial environment setting.

# GIT_USERNAME="jenkins"
# GIT_PASSWORD="giantstep"
# git init
# git config credential.helper store --global
# git pull http://${GIT_USERNAME}:${GIT_PASSWORD}@10.0.2.57:42280/platform-dev-unit/moonserver/nodejs.git

# Synchronize latest folders from git.
git swtich ${GIT_BRANCH_NAME}
git reset --hard HEAD
git fetch origin ${GIT_BRANCH_NAME}
git rebase origin/${GIT_BRANCH_NAME}
popd

# Build.

pushd ${SERVER_ENV}/nodejs/server/scripts
cmd.exe /c build_inheeserver.bat
popd

pushd ${SERVER_ENV}/nodejs/server
yarn deploy:update:inhee:${SERVER_ENV} ${GIT_BRANCH_NAME}
popd

echo "jenkins master inhee-server pre-update & build successful!"
