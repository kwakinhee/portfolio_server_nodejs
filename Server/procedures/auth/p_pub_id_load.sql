CREATE PROCEDURE `p_pub_id_load`(
  IN inAccountId VARCHAR(32) CHARSET ascii,
  IN inServerGroupId VARCHAR(64) CHARSET ascii
)
label_body:BEGIN

  SELECT
    pubId
  FROM
    pub_id
  WHERE
    accountId = inAccountId AND
    serverGroupId = inServerGroupId;

END