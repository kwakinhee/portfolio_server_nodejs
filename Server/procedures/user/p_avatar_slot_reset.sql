CREATE PROCEDURE `p_avatar_slot_reset`(
  IN inUserId INT,
  IN inCharacterCmsId INT
)
label_body:BEGIN

  UPDATE
    avatar_slot
  SET
    avatarItemCmsId = 0,
    itemDbGuid = 0,
    colorIndex = 0
  WHERE
    userId = inUserId AND
    characterCmsId = inCharacterCmsId;

END