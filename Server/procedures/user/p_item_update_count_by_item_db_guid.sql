CREATE PROCEDURE `p_item_update_count_by_item_db_guid`(
  IN inItemDbGuid BIGINT,
  IN inCount INT UNSIGNED
)
label_body:BEGIN
  UPDATE
    item
  SET
    count = inCount,
    updatedDate = CURRENT_TIMESTAMP()
  WHERE itemDbGuid = inItemDbGuid;

  SELECT ROW_COUNT();
END