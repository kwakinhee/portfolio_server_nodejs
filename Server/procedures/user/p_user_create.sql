CREATE PROCEDURE `p_user_create`(
  IN inUserId INT,
  IN inAccountId VARCHAR(40) CHARSET utf8mb4,
  IN inPubId VARCHAR(32) CHARSET ascii,
  IN inCharacterName VARCHAR(40) CHARSET utf8mb4,
  IN inCharacterCmsd INT,
  IN inCreateTimeUtc INT
)
label_body:BEGIN

  -- Create a new user.
  INSERT INTO user 
  (
    userId,
    accountId,
    pubId,
    characterName, 
    createTimeUtc
  ) 
  VALUES (
    inUserId,
    inAccountId,
    inPubId,
    inCharacterName, 
    FROM_UNIXTIME(inCreateTimeUtc)
  );

  -- Create a new character.
  INSERT INTO `character`
  (
    userId, 
    characterCmsId
  ) 
  VALUES(
    inUserId, 
    inCharacterCmsd
  );

END
