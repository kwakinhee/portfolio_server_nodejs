CREATE PROCEDURE `p_equipment_slot_load`(
  IN inUserDbId INT
)
label_body:BEGIN

  SELECT
    equipSlotId,
    itemDbGuid,
    itemCmsId
  FROM 
    equipment_slot
  WHERE 
    userDbId = inUserDbId;
END