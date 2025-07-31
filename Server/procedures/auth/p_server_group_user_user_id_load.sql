CREATE PROCEDURE `p_server_group_user_user_id_load`(
  IN inPubId VARCHAR(32) CHARSET ascii
)
label_body:BEGIN

  SELECT
    userId
  FROM
    server_group_user
  WHERE
    pubId = inPubId;
    
END