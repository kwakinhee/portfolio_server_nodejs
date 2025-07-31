ALTER TABLE world_object MODIFY xPos SMALLINT NOT NULL;
ALTER TABLE world_object MODIFY yPos SMALLINT NOT NULL;

DROP PROCEDURE IF EXISTS `p_world_object_insert`;

CREATE PROCEDURE `p_world_object_insert`(
  IN inWorldDbId INT,
  IN inCmsId INT,
  IN inItemDbId BIGINT,
  IN inOwnerDbId INT,
  IN inXPos SMALLINT,
  IN inYPos SMALLINT,
  IN inLayer TINYINT,
  IN inDir TINYINT
)
label_body:BEGIN
  SET @InsertedId = 0;

  INSERT INTO world_object
  (
    worldDbId,
    cmsId,
    itemDbId,
    ownerDbId,
    xPos,
    yPos,
    layer,
    dir
  )
  VALUES
  (
    inWorldDbId,
    inCmsId,
    inItemDbId,
    inOwnerDbId,
    inXPos,
    inYPos,
    inLayer,
    inDir
  );

  SET @InsertedId = LAST_INSERT_ID();
  SELECT @InsertedId AS ObjectDbId;

END;


DROP PROCEDURE IF EXISTS `p_world_object_update`;

CREATE PROCEDURE `p_world_object_update`(
  IN inObjectDbId BIGINT,
  IN inXPos SMALLINT,
  IN inYPos SMALLINT,
  IN inLayer TINYINT,
  IN inDir TINYINT
)
label_body:BEGIN
  SET @LastUpdateId = 0;

  UPDATE
    world_object
  SET
    xPos = inXPos,
    yPos = inYPos,
    layer = inLayer,
    dir = inLayer,
    updatedDate = CURRENT_TIMESTAMP()
  WHERE
    objectDbId = inObjectDbId;

  SELECT @LastUpdateId AS ObjectDbId;

END;