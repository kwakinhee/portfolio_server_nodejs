
DROP TABLE IF EXISTS user;
CREATE TABLE user (
  userId INT NOT NULL, 
  accountId VARCHAR(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  pubId VARCHAR(32) NOT NULL,
  characterName VARCHAR(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  createTimeUtc TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (userId),
  UNIQUE KEY UQ_users__accountId_characterName (accountId, characterName)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

DROP TABLE IF EXISTS `character`;
CREATE TABLE `character` (
  userId INT NOT NULL,
  characterCmsId INT NOT NULL DEFAULT 0,
  PRIMARY KEY (userId)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;


DROP TABLE IF EXISTS avatar_slot;
CREATE TABLE avatar_slot (
  userId INT NOT NULL,
  characterCmsId INT NOT NULL,
  avatarSlotId INT NOT NULL,
  avatarItemCmsId INT NOT NULL DEFAULT 0,
  itemDbGuid BIGINT NOT NULL  DEFAULT 0 COMMENT 'item.itemGuid',
  colorIndex TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (userId, characterCmsId, avatarSlotId),
  KEY `IDX_avatar_slot__itemDbGuid` (itemDbGuid)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

