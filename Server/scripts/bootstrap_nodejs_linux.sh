#!/bin/bash

# Update
yum -y update

# Install node.js 14..
curl -sL https://rpm.nodesource.com/setup_14.x | bash -
yum clean all
yum install -y gcc-c++ make
yum install -y nodejs

# Install yarn (https://classic.yarnpkg.com/en/docs/install/#centos-stable)
curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | tee /etc/yum.repos.d/yarn.repo
yum install -y yarn

# install curl
yum install curl


# Install Docker
yum install -y amazon-linux-extras
amazon-linux-extras install docker

# Install docker compose
curl -L "https://github.com/docker/compose/releases/download/v2.14.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Install pm2 (https://www.npmjs.com/package/pm2)
npm install -g pm2

# Install typeScript (https://www.typescriptlang.org/)
npm install -g typescript

# Install tsc-watch (https://github.com/gilamran/tsc-watch)
npm install -g tsc-watch