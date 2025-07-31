import { IObject } from "./IObject";
import { WS2CProtocol } from "../../../proto/worldServer/WS2CProtocol";
import { GIANTSTEP } from "../../../proto/worldServer/jsonProto";
import { Vector3D } from "../../../commonlib/vector";

export class ItemObject implements IObject {
  public dbGuid: number;
  public cmsId: number;
  public amount: number;
  public position: Vector3D;

  constructor(
    itemDbGuid: number,
    itemAmount: number,
    itemCmsId: number,
    position: Vector3D
  ) {
    this.dbGuid = itemDbGuid;
    this.amount = itemAmount;
    this.cmsId = itemCmsId;
    this.position = position;
  }

  setPosition(xPos: number, yPos: number, layer: number, dir: number) {
    this.position.update(xPos, yPos, layer, dir);
  }

  toEntity(): GIANTSTEP.WS.Protocol.ItemObjectEntity {
    let ret = GIANTSTEP.WS.Protocol.ItemObjectEntity.create();
    ret.itemObjectGuid = this.dbGuid;
    ret.itemAmount = this.amount;
    ret.itemCmsId = this.cmsId;
    ret.posX = this.position.x;
    ret.posY = this.position.y;
    ret.layer = this.position.z;
    return ret;
  }

  toLog(): string {
    return `DbId:${this.dbGuid},CmsId:${this.cmsId},Position(X:${this.position.x},Y:${this.position.y},Layer:${this.position.z},Dir:${this.position.dir})`;
  }
}
