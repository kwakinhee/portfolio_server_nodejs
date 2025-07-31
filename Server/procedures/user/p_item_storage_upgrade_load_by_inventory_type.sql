CREATE PROCEDURE `p_item_storage_upgrade_load_by_inventory_type`(
  IN inUserDbId INT,
  IN inInventoryType TINYINT UNSIGNED
)
label_body:BEGIN
  SELECT
    upgrade
  FROM
    item_storage
  WHERE
    userDbId = inUserDbId AND inventoryType = inInventoryType AND deletedDate != 0;
END