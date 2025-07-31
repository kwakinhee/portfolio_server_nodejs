CREATE PROCEDURE `p_pub_id_and_server_group_user_create`(
  IN inAccountId VARCHAR(32) CHARSET ascii,
  IN inPubId VARCHAR(32) CHARSET ascii,
  IN inServerGroupId VARCHAR(32) CHARSET ascii
)
label_body:BEGIN

  INSERT INTO pub_id 
    (
      accountId,
      pubId,
      serverGroupId
    )
      VALUES 
    (
      inAccountId,
      inPubId,
      inServerGroupId
      );

  INSERT INTO server_group_user (pubId) VALUES(inPubId);

  -- Return the user id.
  SELECT LAST_INSERT_ID();

END