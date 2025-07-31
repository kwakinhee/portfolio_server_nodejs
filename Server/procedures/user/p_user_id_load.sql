CREATE PROCEDURE `p_user_id_load`(
  IN inUserId INT
)
label_body:BEGIN

  SELECT userId FROM user WHERE userId = inUserId;

END