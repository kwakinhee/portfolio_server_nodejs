#!/bin/bash

GIT_DIR=$1
BRANCH=$2
GIT_REV=$3
PACKAGE_NAME=$4

if [ -z "$GIT_DIR" ]; then
  GIT_DIR=".git"
fi

if [ -z "$BRANCH" ]; then
  BRANCH="main"
fi

# reset to head.
# git reset --hard HEAD

# # checkout the specified branch.
# #git checkout $BRANCH

# # switch the specified branch.
# git switch $BRANCH
# git reset --hard origin/$BRANCH

if [ -z "$GIT_REV" ] || [ "$GIT_REV" = "latest" ]; then
  GIT_REV=`git rev-parse HEAD`
fi

if [ -z "$PACKAGE_NAME" ]; then
  PACKAGE_NAME="inhee.servers"
fi

# print packaging info.
echo ""
echo "======================================================================="
echo "="
echo "= Packaging inhee servers..."
echo "="
echo "= git_dir: $GIT_DIR"
echo "= branch: $BRANCH"
echo "= git_rev: $GIT_REV"
echo "= package_name: $PACKAGE_NAME"
echo "="
echo "========================================================================="
echo ""

# delete package directory.
rm -rf $PACKAGE_NAME

# re-create temp package directory.
mkdir -p $PACKAGE_NAME

# archive folders needed for running servers.
git --git-dir=$GIT_DIR archive --prefix=Server/ --output $PACKAGE_NAME/Server.tar $GIT_REV:Server
git --git-dir=$GIT_DIR archive --prefix=Packet/ --output $PACKAGE_NAME/Packet.tar $GIT_REV:Packet
git --git-dir=$GIT_DIR archive --prefix=Table/ --output $PACKAGE_NAME/Table.tar $GIT_REV:Table
git --git-dir=$GIT_DIR archive --prefix=docker/ --output $PACKAGE_NAME/docker.tar $GIT_REV:docker

# Delete archive folders.
# rm -rf Server
# rm -rf Packet
# rm -rf Table

# Uncompress the package.
tar -xf $PACKAGE_NAME/Server.tar -C $PACKAGE_NAME
tar -xf $PACKAGE_NAME/Packet.tar -C $PACKAGE_NAME
tar -xf $PACKAGE_NAME/Table.tar -C $PACKAGE_NAME
tar -xf $PACKAGE_NAME/docker.tar -C $PACKAGE_NAME

# delete compressed package.
rm $PACKAGE_NAME/Server.tar
rm $PACKAGE_NAME/Packet.tar
rm $PACKAGE_NAME/Table.tar
rm $PACKAGE_NAME/docker.tar

# Output revision info as a json file.
rev_info_fmt='{"branch":"%s","date":"%s","git_rev":"%s"}'
printf "$rev_info_fmt" "$BRANCH" "`date '+%y-%m-%d %H:%M:%S'`" "$GIT_REV" > $PACKAGE_NAME/INFO.json


# Compressed all packages.
tar zcf $PACKAGE_NAME.tgz $PACKAGE_NAME

# Delete temp directory.
rm -rf $PACKAGE_NAME

echo "Packaging successful!"
echo ""
