#!/bin/bash

ENV_NAME=$1
PACKAGE_NAME=$2
BUILD_SCRIPT_FILE_NAME=$3

if [ -z "$ENV_NAME" ]; then
  ENV_NAME="dev"
fi

if [ -z "$PACKAGE_NAME" ]; then
  PACKAGE_NAME="inhee.servers"
fi

if [ -z "$BUILD_SCRIPT_FILE_NAME" ]; then
  BUILD_SCRIPT_FILE_NAME="build_inheeserver"
fi

# Print packaging info.
echo ""
echo "========================================================================="
echo "="
echo "= Updating inhee servers ..."
echo "="
echo "= env_name: $ENV_NAME"
echo "= package_name: $PACKAGE_NAME"
echo "= build_script_file_name: $BUILD_SCRIPT_FILE_NAME"
echo "="
echo "========================================================================="
echo ""
# home.
cd ~

# Stop all servers.
# pm2 stop all
pm2 delete all
pm2 flush

# Delete old package directory.
rm -rf $PACKAGE_NAME

# Uncompress the package.
tar -xf $PACKAGE_NAME.tgz

# Backup old logs.
LOG_BK_DIR_NAME=`date '+%y%m%d-%H.%M.%S'`

# create temp package directory.
mkdir -p inheeold_logs
mkdir -p inheeold_logs/$LOG_BK_DIR_NAME

mv ./inhee/Server/log ./inheeold_logs/$LOG_BK_DIR_NAME/

# Backup the most recent deployment.
rm -rf inhee.old
mv inhee inhee.old

# Use the new package.
mv $PACKAGE_NAME inhee

# Build.
pushd inhee/Server/scripts
sed -i -e 's/\r$//' $BUILD_SCRIPT_FILE_NAME.sh
sh $BUILD_SCRIPT_FILE_NAME.sh
popd

# update config
pushd inhee/Server
cp service_layer/$ENV_NAME.json5 service_layer/local.json5
popd

# Copy config/local.json5
if [[ -f "inhee.old/Server/config/local.json5" ]]; then
  cp ./inhee.old/Server/config/local.json5 ~/inhee/Server/config
fi

# Start servers.
# pm2 start all

echo "Update successful!"

