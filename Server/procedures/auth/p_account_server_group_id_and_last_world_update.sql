CREATE PROCEDURE `p_account_server_group_id_and_last_world_update`(
  IN inAccountId VARCHAR(32) CHARSET ascii,
  IN inServerGroupId VARCHAR(32) CHARSET ascii,
  IN inLastWorld VARCHAR(64) CHARSET ascii
)
label_body:BEGIN

  UPDATE
    account
  SET
    lastServerGroupId = inServerGroupId,
    lastWorld = inLastWorld
  WHERE
    accountId = inAccountId;

END