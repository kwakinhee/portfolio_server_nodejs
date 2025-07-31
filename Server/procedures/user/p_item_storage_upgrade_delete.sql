CREATE PROCEDURE `p_item_storage_upgrade_delete`(
  IN inItemStorageUpgradeId BIGINT
)
label_body:BEGIN
  UPDATE
    item
  SET
    deletedDate = CURRENT_TIMESTAMP()
  WHERE
    itemStorageUpgradeId = inItemStorageUpgradeId;
  SELECT ROW_COUNT();
END