CREATE PROCEDURE `p_account_is_online_update`(
  IN inAccountId VARCHAR(32) CHARSET ascii,
  IN inIsOnline TINYINT
)
label_body:BEGIN

  UPDATE
    account
  SET
    isOnline = inIsOnline
  WHERE
    accountId = inAccountId;

END