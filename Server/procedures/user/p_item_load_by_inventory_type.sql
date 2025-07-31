CREATE PROCEDURE `p_item_load_by_inventory_type`(
  IN inUserDbId INT,
  IN inInventoryType TINYINT UNSIGNED
)
label_body:BEGIN

-- get capacity upgrades of specified user's storage
  SELECT
    upgrade
  FROM
    item_storage_upgrade
  WHERE
    userDbId = inUserDbId AND inventoryType = inInventoryType;

-- get all items in specified user storage
  SELECT
    itemDbGuid,
    itemCmsId,
    count,
    durability
  FROM 
    item
  WHERE 
    userDbId = inUserDbId AND count != 0 AND inventoryType = inInventoryType AND deletedDate IS NULL;
END