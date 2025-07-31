CREATE PROCEDURE `p_account_login_platform_client_version_update`(
  IN inAccountId VARCHAR(32) CHARSET ascii,
  IN inLoginPlatform VARCHAR(10) CHARSET ascii,
  IN inClientVersion VARCHAR(15) CHARSET ascii
)
label_body:BEGIN

  UPDATE
    account
  SET
    loginPlatform = inLoginPlatform,
    clientVersion = inClientVersion
  WHERE
    accountId = inAccountId;

  SELECT ROW_COUNT();

END