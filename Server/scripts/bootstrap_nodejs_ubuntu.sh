#!/bin/bash

cd ~

# Check priviledge
if [ "$(id -u)" != "0" ]; then
	echo "You must be rootto execute this script."
	exit 1
fi

# Update and upgrade
apt-get -y update
apt-get -y upgrade

# Install and setup vim
apt-get -y install vim
bash -c 'echo "set tabstop=2 softtabstop=2 expandtab shiftwidth=2 smarttab" >> /etc/vim/vimrc'

# Install curl
apt-get -y install curl

# Install cmake.
apt-get -y install cmake


# Install gcc or g++
apt-get -y install gcc
apt-get -y install g++

# Install node.js 14..
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
apt-get install -y nodejs

# Install yarn (https://classic.yarnpkg.com/en/docs/install/#centos-stable)
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
apt-get -y update
apt-get -y install yarn

# Install pm2 (https://www.npmjs.com/package/pm2)
npm install -g pm2

# Install typeScript (https://www.typescriptlang.org/)
npm install -g typescript

# Install tsc-watch (https://github.com/gilamran/tsc-watch)
npm install -g tsc-watch

# Install docker.
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
apt-get update
apt-get install -y docker-ce

# Install docker-compose (https://docs.docker.com/compose/install/other/)
curl -L https://github.com/docker/compose/releases/download/v2.14.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Install mysql client.
apt-get -y install mysql-client