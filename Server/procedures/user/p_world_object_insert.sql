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

END