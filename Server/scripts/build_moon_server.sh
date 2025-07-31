#!/bin/bash

# install packages
echo '========================================================================='
echo '= install packages...'
echo '========================================================================='

yarn

# pre compile protobuf
echo '========================================================================='
echo '= pre compile protobuf...'
echo '========================================================================='

yarn preCompile:staticProtoToTs:auth
yarn preCompile:staticProtoToTs:world
yarn preCompile:staticProtoToTs:C2WS
yarn preCompile:staticProtoToTs:WS2C
yarn preCompile:staticProtoToTs:C2AS
yarn preCompile:staticProtoToTs:AS2C

# build typescript
echo '========================================================================='
echo '= build typescript ...'
echo '========================================================================='

yarn build

# post compile protobuf
echo '========================================================================='
echo '= post compile protobuf...'
echo '========================================================================='

yarn postCompile:jsonProtoToJs:auth
yarn postCompile:jsonProtoToJs:world
yarn postCompile:jsonProtoToJs:C2WS
yarn postCompile:jsonProtoToJs:WS2C
yarn postCompile:jsonProtoToJs:C2AS
yarn postCompile:jsonProtoToJs:AS2C

# Migrate database
echo '========================================================================='
echo '= Migrating database ...'
echo '========================================================================='

yarn db-mig-all-deploy
