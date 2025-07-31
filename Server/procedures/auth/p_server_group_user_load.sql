CREATE PROCEDURE `p_server_group_user_load`(
  IN inAccountId VARCHAR(32) CHARSET ascii
)
label_body:BEGIN

  SELECT
    pub_id.serverGroupId,
    server_group_user.userId,
    server_group_user.pubId
  FROM
    pub_id,
    server_group_user
  WHERE
    pub_id.accountId = inAccountId AND
    server_group_user.pubId = pub_id.pubId;

END