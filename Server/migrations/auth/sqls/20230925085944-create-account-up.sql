DROP TABLE IF EXISTS account;
DROP TABLE IF EXISTS pub_id;
DROP TABLE IF EXISTS server_group_user;

CREATE TABLE account (
  id INT NOT NULL AUTO_INCREMENT,
  accountId VARCHAR(32) NOT NULL,
  isOnline TINYINT NOT NULL DEFAULT 1,
  lastServerGroupId VARCHAR(32) NULL DEFAULT NULL,
  lastWorld VARCHAR(64) NULL DEFAULT NULL,
  lastLoginTimeUtc TIMESTAMP NULL DEFAULT NULL,
  loginPlatform  VARCHAR(10),
  clientVersion VARCHAR(15),
  isAdmin TINYINT NOT NULL DEFAULT 0,
  createTimeUtc TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (id, accountId)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

CREATE TABLE pub_id (
  accountId VARCHAR(32) NOT NULL,
  pubId VARCHAR(32) NOT NULL,
  serverGroupId VARCHAR(32) NULL DEFAULT NULL,
  PRIMARY KEY (accountId, pubId),
  UNIQUE KEY UQ_pub_id__accountId_serverGroupId (accountId, serverGroupId)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

CREATE TABLE server_group_user (
  userId INT NOT NULL AUTO_INCREMENT,
  pubId VARCHAR(32) NOT NULL,
  PRIMARY KEY (userId),
  INDEX IDX_server_group_user__pubId (pubId)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;
