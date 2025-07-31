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

END