CREATE PROCEDURE `p_avatar_slot_load`(
  IN inUserId INT,
  IN inCharacterCmsId INT
)
label_body:BEGIN

  SELECT
    avatarSlotId,
    avatarItemCmsId,
    itemDbGuid,
    colorIndex
  FROM 
    avatar_slot 
  WHERE 
    userId = inUserId AND
    characterCmsId = inCharacterCmsId;

END