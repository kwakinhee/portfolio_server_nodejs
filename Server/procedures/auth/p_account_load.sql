CREATE PROCEDURE `p_account_load`(
  IN inAccountId VARCHAR(32) CHARSET ascii
)
label_body:BEGIN

  SELECT 
    id,
    lastServerGroupId, 
    isOnline, 
    lastWorld, 
    loginPlatform,
    clientVersion,
    isAdmin
  FROM 
    account 
  WHERE 
    accountId = inAccountId;

END