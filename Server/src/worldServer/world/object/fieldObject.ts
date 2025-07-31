import { IObject } from "./IObject";
import { WS2CProtocol } from "../../../proto/worldServer/WS2CProtocol";
import { Vector3D } from "../../../commonlib/vector";
import { GIANTSTEP } from "../../../proto/worldServer/jsonProto";

export class FieldObject implements IObject {
  public worldDbId: number;
  public objectDbId: number;
  public ownerDbId: number;
  public cmsId: number;
  public position: Vector3D;

  constructor(
    objectDbId: number,
    worldDbId: number,
    ownerDbId: number,
    cmsId: number,
    position: Vector3D
  ) {
    this.objectDbId = objectDbId;
    this.worldDbId = worldDbId;
    this.cmsId = cmsId;
    this.ownerDbId = ownerDbId;
    this.position = position;
  }

  setPosition(xPos: number, yPos: number, layer: number, dir: number) {
    this.position.update(xPos, yPos, layer, dir);
  }

  toEntity(): GIANTSTEP.WS.Protocol.FieldObjectEntity {
    let ret = GIANTSTEP.WS.Protocol.FieldObjectEntity.create();
    ret.objectDbId = this.objectDbId;
    ret.objectCmsId = this.cmsId;
    ret.posX = this.position.x;
    ret.posY = this.position.y;
    ret.layer = this.position.z;
    ret.dir = this.position.dir;
    return ret;
  }

  toLog(): string {
    return `ObjectDbId:${this.objectDbId},WorldDbId:${this.worldDbId},CmsId:${this.cmsId},Position(X:${this.position.x},Y:${this.position.y},Layer:${this.position.z},Dir:${this.position.dir})`;
  }
}
