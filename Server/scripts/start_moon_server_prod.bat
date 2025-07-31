:: start inhee server
ECHO '========================================================================='
ECHO '= start inhee server...'
ECHO '========================================================================='

pushd ../
CALL yarn start:prod:pm2
popd

