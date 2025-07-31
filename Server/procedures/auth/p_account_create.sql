CREATE PROCEDURE `p_account_create`(
  IN inAccountId VARCHAR(32) CHARSET ascii,
  IN inTimeUtc INT,
  IN inLoginPlatform VARCHAR(10) CHARSET ascii,
  IN inClientVersion VARCHAR(15) CHARSET ascii,
  In inIsAdmin INT
)
label_body:BEGIN

  INSERT INTO account
    (
      accountId,
      lastLoginTimeUtc, 
      loginPlatform, 
      clientVersion,
      isAdmin,
      createTimeUtc
    ) 
      VALUES 
    (
      inAccountId, 
      FROM_UNIXTIME(inTimeUtc), 
      inLoginPlatform, 
      inClientVersion,
      inIsAdmin,
      FROM_UNIXTIME(inTimeUtc)
    );

  -- Return the account user id.
  SELECT LAST_INSERT_ID();

END