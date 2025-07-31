// -------------------------------------------------------------------------------------------------
// 패킷 폴더 경로에 있는 PacketRouter 의 함수를
// -------------------------------------------------------------------------------------------------

import { IDisposable, TcpSocket } from "./interface";
import { IPacket } from "./basicPackets";
import glog from "../../commonlib/glog";
import gconf from "../../commonlib/gconf";
import { GError, GErrorCode } from "../../commonlib/gerror";
import { TcpClientSession } from "./client/tcpClientSession";

interface IResponsor {
  send(packet: IPacket): void;
}

export class NormalResponsor implements IResponsor {
  readonly tcpSocket: TcpSocket;

  constructor(tcpSocket: TcpSocket) {
    this.tcpSocket = tcpSocket;
  }

  getSessionId(): string {
    return this.tcpSocket.getSessionId();
  }

  send(packet: IPacket): void {
    this.tcpSocket.send(packet);
  }
}

export class NoResponsor implements IResponsor {
  constructor() {}

  send(packet: IPacket): void {
    glog.error("can not send packet from the TcpServerNoResponse", {
      packetName: packet.getPacketName(),
    });
  }
}

export type PacketFunction<T extends IPacket> = (
  packet: T,
  responsor: IResponsor
) => Promise<void>;

export class PacketRouter implements IDisposable {
  functions: { [packetName: string]: PacketFunction<any> } = {};

  constructor() {}

  dispose(): void | Promise<void> {
    this.functions = {};
  }

  on<T extends IPacket>(ctor: new (...any: any[]) => T, func: PacketFunction<T>) {
    this.register(ctor.name, func);
  }

  merge(router: PacketRouter) {
    const keys = Object.keys(router.functions);
    keys.forEach((key) => this.register(key, router.functions[key]));
  }

  emit<T extends IPacket>(packet: T, size: number, tcpSocket: TcpSocket) {
    let responsor: IResponsor = null;
    let packetName: string = packet.constructor.name;

    packetName = packet.constructor.name;
    responsor = new NormalResponsor(tcpSocket);

    if (!this.functions[packetName]) {
      glog.error(`Packet has no handler, name: ${packetName}`);
      return;
    }

    this.functions[packetName](packet, responsor).catch((error: any) => {
      glog.error("tcp packet processed error! ", {
        packetName: packet.getPacketName(),
        msg: error.message,
        mcode: error.mcode,
        extra: error.extra,
        stack: error.stack,
      });
    });
  }

  private register(packetName: string, func: PacketFunction<any>) {
    if (this.functions[packetName]) {
      throw new GError(
        "packet callback is already exists.",
        GErrorCode.INTERNAL_ERROR,
        {
          packetName,
        }
      );
    }
    this.functions[packetName] = func;
  }
}
