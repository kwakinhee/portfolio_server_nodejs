CREATE PROCEDURE `p_item_insert`(
  IN inUserDbId INT,
  IN inItemCmsId INT UNSIGNED,
  IN inInventoryType TINYINT UNSIGNED,
  IN inCount INT UNSIGNED,
  IN inDurability TINYINT UNSIGNED
)
label_body:BEGIN
  SET @InsertedId = 0;

  INSERT INTO item 
  (
    userDbId, 
    itemCmsId,
    inventoryType,
    count,
    durability
  ) 
  VALUES(
    inUserDbId,
    inItemCmsId,
    inInventoryType,
    inCount,
    inDurability
  );
  
  SET @InsertedId = LAST_INSERT_ID();
  SELECT @InsertedId as itemDbGuid;

END