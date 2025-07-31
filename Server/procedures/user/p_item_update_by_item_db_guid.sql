CREATE PROCEDURE `p_item_update_by_item_db_guid`(
  IN inItemDbGuid BIGINT,
  IN inUserDbId INT,
  IN inItemCmsId INT UNSIGNED,
  IN inInventoryType TINYINT UNSIGNED,
  IN inCount INT UNSIGNED
)
label_body:BEGIN
  UPDATE
    item 
  SET
    itemDbGuid = inItemDbGuid,
    userDbId = inUserDbId, 
    itemCmsId = inItemCmsId,
    inventoryType = inInventoryType,
    count = inCount,
    updatedDate = CURRENT_TIMESTAMP()
  WHERE
    itemDbGuid = inItemDbGuid;
  SELECT ROW_COUNT();
END