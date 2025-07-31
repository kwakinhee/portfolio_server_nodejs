CREATE PROCEDURE `p_equipment_slot_reset`(
  IN inUserDbId INT
)
label_body:BEGIN

  UPDATE equipment_slot
  SET
    itemDbGuid = 0,
    itemCmsId = 0
  WHERE
    userDbId = inUserDbId;

END