#!/bin/bash

# start inhee server
echo '========================================================================='
echo '= start inhee server...'
echo '========================================================================='

pushd ../
yarn start:prod:pm2
popd