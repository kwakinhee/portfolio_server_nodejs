import glog from "../../commonlib/glog";
import { IPacket } from "./basicPackets";

type FactoryMethod = new (...any: any[]) => IPacket;

export class PacketFactory {
  private static _constructorMap: Map<number, FactoryMethod> = new Map<
    number,
    FactoryMethod
  >();

  static Register(id: number, ctor: FactoryMethod) {
    const exist = this._constructorMap.get(id);
    if (exist) {
      glog.error("exist packetType in PacketFactory:", {
        packetType: id,
        packetName: ctor.name,
      });
    } else {
      glog.info(`packet factory register, (id:${id})${ctor.name}`);
      this._constructorMap.set(id, ctor);
    }
  }

  static Create(id: number): IPacket {
    try {
      var ctor = this._constructorMap.get(id);
      return new ctor();
    } catch (err) {
      if (err instanceof Error) {
        glog.error(err.message);
      }
      return null;
    }
  }
}
