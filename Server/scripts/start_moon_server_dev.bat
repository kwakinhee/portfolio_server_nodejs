:: start inhee server
ECHO '========================================================================='
ECHO '= start inhee server...'
ECHO '========================================================================='

pushd ../
CALL yarn start:dev:pm2
popd

