CREATE PROCEDURE `p_user_load`(
  IN inUserId INT
)
label_body:BEGIN

  SELECT
    userId,
    accountId,
    characterName
  FROM
    user
  WHERE
    userId = inUserId;

  SELECT
    characterCmsId
  FROM
    `character`
  WHERE
    userId = inUserId;

  SELECT
    avatarSlotId,
    avatarItemCmsId,
    itemDbGuid,
    colorIndex
  FROM
    avatar_slot AS av
  INNER JOIN
    `character` AS ch
  ON
    av.characterCmsId = ch.characterCmsId
  WHERE
    av.userId = inUserId and ch.userId = inUserId;

  -- get all items in specified user avatar inventory
  SELECT
    itemDbGuid,
    itemCmsId,
    count
  FROM
    item
  WHERE
    userDbId = inUserId AND count != 0 AND inventoryType = 2 AND deletedDate IS NULL;

-- get capacity upgrades of specified user's world inventory
  SELECT
    upgrade
  FROM
    item_storage_upgrade
  WHERE
    userDbId = inUserId AND inventoryType = 1;

-- get all items in specified user world inventory
  SELECT
    itemDbGuid,
    itemCmsId,
    count,
    durability
  FROM 
    item
  WHERE 
    userDbId = inUserId AND count != 0 AND inventoryType = 1 AND deletedDate IS NULL;

-- get user equipments
  SELECT
    equipSlotId,
    itemDbGuid,
    itemCmsId
  FROM 
    equipment_slot
  WHERE 
    userDbId = inUserId;
END
