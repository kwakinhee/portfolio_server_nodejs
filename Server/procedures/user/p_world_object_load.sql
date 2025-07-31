CREATE PROCEDURE `p_world_object_load`(
  IN inWorldDbId INT
)
label_body:BEGIN

  SELECT 
    objectDbId, cmsId, itemDbId, ownerDbId, xPos, yPos, layer, dir, createdDate
  FROM
    world_object
  WHERE
    worldDbId = inWorldDbId AND deleted = b'0';

END