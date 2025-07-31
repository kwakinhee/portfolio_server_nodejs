CREATE PROCEDURE `p_character_load`(
  IN inUserId INT
)
label_body:BEGIN

  SELECT
    characterCmsId
  FROM
    `character`
  WHERE
    userId = inUserId;

END
