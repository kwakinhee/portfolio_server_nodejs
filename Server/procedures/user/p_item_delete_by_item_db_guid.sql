CREATE PROCEDURE `p_item_delete_by_item_db_guid`(
  IN inItemDbGuid BIGINT
)
label_body:BEGIN
  UPDATE
    item
  SET
    inventoryType = 0,
    updatedDate = CURRENT_TIMESTAMP(),
    deletedDate = CURRENT_TIMESTAMP()
  WHERE
    itemDbGuid = inItemDbGuid;

  SELECT ROW_COUNT();
END