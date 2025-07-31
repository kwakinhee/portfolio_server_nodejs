
@ECHO off

SET GIT_DIR=%1
SET BRANCH=%2
SET GIT_REV=%3
SET PACKAGE_NAME=%4

IF "%GIT_DIR%"=="" SET GIT_DIR=.git

IF "%BRANCH%"=="" SET BRANCH=main

:: reset to head.
@REM git reset --hard HEAD

::checkout the specified branch.
::git checkout %BRANCH%

::switch the specified branch.
@REM git switch %BRANCH%
@REM git reset --hard origin/%BRANCH%

IF "%GIT_REV%"=="" for /f %%i in ('git rev-parse HEAD') do SET GIT_REV=%%i

IF %GIT_REV%==latest for /f %%i in ('git rev-parse HEAD') do SET GIT_REV=%%i

IF "%PACKAGE_NAME%"=="" SET PACKAGE_NAME=inhee.servers

:: print packaging info.
ECHO ""
ECHO "======================================================================="
ECHO "="
ECHO "= Packaging inhee servers..."
ECHO "="
ECHO "= git_dir: %GIT_DIR%"
ECHO "= branch: %BRANCH%"
ECHO "= git_rev: %GIT_REV%"
ECHO "= package_name: %PACKAGE_NAME%"
ECHO "="
ECHO "========================================================================="
ECHO ""

:: delete package directory.
rm -rf %PACKAGE_NAME%

:: re-create temp package directory.
mkdir %PACKAGE_NAME%

:: archive folders needed for running servers.
git --git-dir=%GIT_DIR% archive --prefix=Server/ --output %PACKAGE_NAME%/Server.tar %GIT_REV%:Server
git --git-dir=%GIT_DIR% archive --prefix=Packet/ --output %PACKAGE_NAME%/Packet.tar %GIT_REV%:Packet
git --git-dir=%GIT_DIR% archive --prefix=Table/ --output %PACKAGE_NAME%/Table.tar %GIT_REV%:Table

@REM :: Delete archive folders.
@REM rm -rf Server
@REM rm -rf Packet
@REM rm -rf Table

:: Uncompress the package.
tar -xf %PACKAGE_NAME%/Server.tar -C %PACKAGE_NAME%
tar -xf %PACKAGE_NAME%/Packet.tar -C %PACKAGE_NAME%
tar -xf %PACKAGE_NAME%/Table.tar -C %PACKAGE_NAME%

:: delete compressed package.
rm %PACKAGE_NAME%/Server.tar
rm %PACKAGE_NAME%/Packet.tar
rm %PACKAGE_NAME%/Table.tar

:: Output revision info as a json file.
SET rev_info_fmt={"branch":"%BRANCH%","date":"%date% %time%","git_rev":"%GIT_REV%"}
ECHO %rev_info_fmt% > %PACKAGE_NAME%/INFO.json


:: Compressed all packages.
tar zcf %PACKAGE_NAME%.tgz %PACKAGE_NAME%

:: Delete temp directory.
rm -rf %PACKAGE_NAME%

ECHO "Packaging successful!"
ECHO ""
