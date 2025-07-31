CREATE PROCEDURE `p_account_is_online_and_last_login_time_utc_update`(
  IN inAccountId VARCHAR(32) CHARSET ascii,
  IN inIsOnline TINYINT,
  IN inLastLoginTimeUtc INT
)
label_body:BEGIN

  UPDATE
    account
  SET
    isOnline = inIsOnline,
    lastLoginTimeUtc = FROM_UNIXTIME(inLastLoginTimeUtc)
  WHERE
    accountId = inAccountId;

END