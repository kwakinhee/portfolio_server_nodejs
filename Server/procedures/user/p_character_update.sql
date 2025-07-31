CREATE PROCEDURE `p_character_update`(
  IN inUserId INT,
  IN inCharacterCmsd INT
)
label_body:BEGIN

  INSERT INTO `character` 
  (
    userId, 
    characterCmsId
  ) 
  VALUES(
    inUserId, 
    inCharacterCmsd
  )
  ON DUPLICATE KEY UPDATE characterCmsId = inCharacterCmsd;
  SELECT ROW_COUNT();
END