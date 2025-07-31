/* Replace with your SQL commands *//* Replace with your SQL commands */

DROP TABLE IF EXISTS item;
CREATE TABLE item (
  itemDbGuid        BIGINT              NOT NULL AUTO_INCREMENT,
  userDbId          INT                 NOT NULL DEFAULT 0,
  itemCmsId         INT UNSIGNED        NOT NULL  DEFAULT 0,
  inventoryType     TINYINT UNSIGNED    NOT NULL  DEFAULT 0,
  durability        TINYINT UNSIGNED    NOT NULL  DEFAULT 0,
  count             INT UNSIGNED        NOT NULL  DEFAULT 1,
  createdDate       TIMESTAMP           NOT NULL  DEFAULT CURRENT_TIMESTAMP,
  updatedDate       TIMESTAMP           NOT NULL  DEFAULT CURRENT_TIMESTAMP,
  deletedDate       TIMESTAMP           NULL,

  PRIMARY KEY (itemDbGuid),
  
  KEY `IDX_item__userDbId_inventoryType_itemCmsId` (userDbId, inventoryType, itemCmsId),
  KEY `IDX_item__userDbId_inventoryType` (userDbId, inventoryType)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

DROP TABLE IF EXISTS equipment_slot;
CREATE TABLE equipment_slot (
  userDbId            INT                NOT NULL  DEFAULT 0 COMMENT 'users.userId',
  equipSlotId         TINYINT UNSIGNED   NOT NULL  DEFAULT 0,
  itemDbGuid          BIGINT             NOT NULL  DEFAULT 0 COMMENT 'item.itemGuid',
  itemCmsId           int UNSIGNED       NOT NULL  DEFAULT 0,
  
  PRIMARY KEY (userDbId, equipSlotId),
  KEY `IDX_equipment_slot__itemDbGuid` (itemDbGuid)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

-- 가방, 창고 추가 및 사이즈가 동적으로 변경되야 하면 필요한 테이블.
DROP TABLE IF EXISTS item_storage_upgrade;
CREATE TABLE item_storage_upgrade (
  itemStorageUpgradeId     BIGINT               NOT NULL    AUTO_INCREMENT,
  userDbId                 INT                  NOT NULL    DEFAULT 0,
  inventoryType            TINYINT UNSIGNED     NOT NULL    DEFAULT 0,
  upgrade                  INT UNSIGNED         NOT NULL    DEFAULT 0,
  createdDate              TIMESTAMP            NOT NULL    DEFAULT CURRENT_TIMESTAMP,
  deletedDate              TIMESTAMP            NULL,

  PRIMARY KEY (itemStorageUpgradeId),
  KEY `IDX_item_storage_upgrade__userDbId_inventoryType` (userDbId, inventoryType)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;
