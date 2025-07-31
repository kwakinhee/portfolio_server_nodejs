CREATE PROCEDURE `p_avatar_slot_update`(
  IN inUserId INT,
  IN inCharacterCmsId INT,
  IN inAvatarSlotId INT,
  IN inAvatarItemCmsId INT,
  IN inItemDbGuid BIGINT,
  IN inColorIndex TINYINT
)
label_body:BEGIN

  INSERT INTO avatar_slot
  (
    userId,
    characterCmsId,
    avatarSlotId,
    avatarItemCmsId,
    itemDbGuid,
    colorIndex
  )
  VALUES
  (
    inUserId,
    inCharacterCmsId,
    inAvatarSlotId,
    inAvatarItemCmsId,
    inItemDbGuid,
    inColorIndex
  )
  ON DUPLICATE KEY UPDATE
    itemDbGuid = inItemDbGuid,
    avatarItemCmsId = inAvatarItemCmsId,
    colorIndex = inColorIndex;


  SELECT ROW_COUNT();

END