/* Replace with your SQL commands */

DROP TABLE IF EXISTS world_object;

CREATE TABLE world_object (
    objectDbId BIGINT NOT NULL AUTO_INCREMENT,
    worldDbId INT NOT NULL,
    cmsId INT NOT NULL,
    itemDbId BIGINT NOT NULL,
    ownerDbId INT NOT NULL,
    xPos SMALLINT NOT NULL,
    yPos SMALLINT NOT NULL,
    layer TINYINT NOT NULL,
    dir TINYINT NOT NULL,
    deleted BIT(1) NOT NULL DEFAULT b'0',
    createdDate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedDate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY PK_world_object_objectDbId (objectDbId),
    KEY `IDX_objectDbId`(objectDbId),
    KEY `IDX_worldDbId_deleted`(worldDbId, deleted)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;