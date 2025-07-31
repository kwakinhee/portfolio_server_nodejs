CREATE PROCEDURE `p_equipment_slot_update`(
  IN inUserDbId INT,
  IN inEquipSlotId TINYINT UNSIGNED,
  IN inItemDbGuid BIGINT,
  IN inItemCmsId INT UNSIGNED
)
label_body:BEGIN

  INSERT INTO equipment_slot
  (
    userDbId,
    equipSlotId,
    itemDbGuId,
    itemCmsId
  )
  VALUES
  (
    inUserDbId,
    inEquipSlotId,
    inItemDbGuId,
    itemCmsId
  )
  ON DUPLICATE KEY UPDATE itemDbGuId = inItemDbGuId;

  SELECT ROW_COUNT();

END