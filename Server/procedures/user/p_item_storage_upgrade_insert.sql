CREATE PROCEDURE `p_item_storage_upgrade_insert`(
  IN inUserDbId INT,
  IN inInventoryType TINYINT UNSIGNED,
  IN inUpgrade TINYINT UNSIGNED
)
label_body:BEGIN
  INSERT INTO item_storage_upgrade
  (
    userDbId,
    inventoryType,
    upgrade
  )
  VALUES
  (
    inUserDbId,
    inInventoryType,
    inUpgrade
  );
END