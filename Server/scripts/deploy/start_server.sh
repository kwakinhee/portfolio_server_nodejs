#!/bin/bash

ENV_NAME=$1
SERVER_PROCESS_NAME=$2

if [ -z "$ENV_NAME" ]; then
  ENV_NAME="dev"
fi

# start server
echo "========================================================================="
echo "= start $SERVER_PROCESS_NAME..."
echo "========================================================================="

pushd inhee/Server
if [ -z "$SERVER_PROCESS_NAME" ]; then
  yarn start:$ENV_NAME:pm2
else
  yarn start:$ENV_NAME:pm2:$SERVER_PROCESS_NAME
fi
popd

echo "start $SERVER_PROCESS_NAME successful!"