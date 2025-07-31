CREATE PROCEDURE `p_world_object_delete`(
  IN inObjectDbId INT
)
label_body:BEGIN
  UPDATE
    world_object
  SET
    deleted = b'1', 
    updatedDate = CURRENT_TIMESTAMP()
  WHERE
    objectDbId = inObjectDbId;
END