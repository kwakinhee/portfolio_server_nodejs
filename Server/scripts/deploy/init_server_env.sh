#!/bin/bash

ENV_NAME=$1
PACKAGE_NAME=$2

if [ -z "$ENV_NAME" ]; then
  ENV_NAME="dev"
fi

if [ -z "$PACKAGE_NAME" ]; then
  PACKAGE_NAME="inhee.servers"
fi


# Print packaging info.
echo ""
echo "========================================================================="
echo "="
echo "= Preparing environment for inhee servers ..."
echo "="
echo "= package_name: $PACKAGE_NAME"
echo "="
echo "========================================================================="
echo ""


cd ~

# Stop all servers.
pm2 stop all

# Delete old package.
rm -rf $PACKAGE_NAME

# Unzip the package.
tar -xf $PACKAGE_NAME.tgz

mv $PACKAGE_NAME inhee

# Run docker containers.
pushd inhee/docker/$ENV_NAME
sudo docker-compose up -d
popd

# create databases.
pushd inhee/Server
yarn db-create inheeauth
yarn db-create inheeuser_00
popd

# Grant all privileges.
# myysql --protocol=tcp -u root -p inheedev123$ mysql -e "GRANT ALL PRIVILEGES ON *.* TO 'inheedev_test'@'%' WITH GRANT OPTION;"


pushd inhee/Server/scripts
bash build_inheeserver.sh
popd

# pm2 setup
pushd inhee/Server/pm2
pm2 start dev.ecosystem.config.js
# sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u mdev --hp /home/mdev
popd

echo "Init successful!"
