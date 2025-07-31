CREATE PROCEDURE `p_user_load_profile`(
  IN inUserId INT
)
label_body:BEGIN

  SELECT
    userId,
    accountId,
    characterName
  FROM
    user
  WHERE
    userId = inUserId;

  SELECT
    characterCmsId
  FROM
    `character`
  WHERE
    userId = inUserId;

END
