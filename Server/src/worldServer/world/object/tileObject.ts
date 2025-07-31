import { IObject } from "./IObject";
import { WS2CProtocol } from "../../../proto/worldServer/WS2CProtocol";
import { Vector3D } from "../../../commonlib/vector";

export class TileObject implements IObject
{
  public worldDbId: number;
  public cmsId: number;
  public position: Vector3D;

  constructor(
    worldId: number,
    cmsId: number,
    xPos: number,
    yPos: number,
    layer: number
    ) {
      this.worldDbId = worldId;
      this.cmsId = cmsId;
      this.position = Vector3D.createFrom(xPos, yPos, layer);
  }

  toEntity(): WS2CProtocol.Message.TileEntity {
    let ret = WS2CProtocol.Message.TileEntity.create();
    ret.tileId = this.cmsId;
    ret.posX = this.position.x;
    ret.posY = this.position.y;
    ret.layer = this.position.z;
    return ret;
  }

  toLog(): string {
    return `CmsId:${this.cmsId},Position(X:${this.position.x},Y:${this.position.y},Layer:${this.position.z})`;
  }
}