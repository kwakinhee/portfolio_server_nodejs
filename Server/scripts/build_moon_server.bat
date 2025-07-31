
pushd ..\

:: install packages
ECHO '========================================================================='
ECHO '= install packages...'
ECHO '========================================================================='

CALL yarn

:: pre compile protobuf
::ECHO '========================================================================='
::ECHO '= pre compile protobuf...'
::ECHO '========================================================================='

CALL yarn preCompile:staticProtoToTs:auth
CALL yarn preCompile:staticProtoToTs:world
CALL yarn preCompile:staticProtoToTs:C2WS
CALL yarn preCompile:staticProtoToTs:WS2C
CALL yarn preCompile:staticProtoToTs:C2AS
CALL yarn preCompile:staticProtoToTs:AS2C


:: build typescript
ECHO '========================================================================='
ECHO '= build typescript ...'
ECHO '========================================================================='

CALL yarn build

:: post compile protobuf
::ECHO '========================================================================='
::ECHO '= post compile protobuf...'
::ECHO '========================================================================='

CALL yarn postCompile:jsonProtoToJs:auth
CALL yarn postCompile:jsonProtoToJs:world
CALL yarn postCompile:jsonProtoToJs:C2WS
CALL yarn postCompile:jsonProtoToJs:WS2C
CALL yarn postCompile:jsonProtoToJs:C2AS
CALL yarn postCompile:jsonProtoToJs:AS2C

:: Migrate database
ECHO ==========================================================================
ECHO = Migrating database ...
ECHO ==========================================================================

:: CALL yarn db-mig-all-deploy

popd