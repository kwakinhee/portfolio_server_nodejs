import { TcpServerFS } from "./server/forServer/tcpServerFS";
import { TcpServerFU } from "./server/forUser/tcpServerFU";
import { TcpClientSession, TcpSocketOption } from "./client/tcpClientSession";
import { TcpClientSessionManager } from "./client/tcpClientSessionManager";
import { PacketRouter } from "./tcpRouter";

export * from "./interface";
export * from "./packetHeader";
export * from "./packetFactory";
export {
  TcpClientSession,
  TcpServerFS,
  TcpServerFU,
  TcpSocketOption,
  TcpClientSessionManager,
};

// 서버 프로세스 통신을 위한 TCP 서버.
export function createTcpServerFS() {
  return new TcpServerFS();
}

// 언리얼 통신을 위한 TCP 서버.
export function createTcpServerFU() {
  return new TcpServerFU();
}

// 서버 프로세스 통신을 위한 TCP 클라이언트.
export function createTcpClientSession(
  host: string,
  port: number,
  options?: TcpSocketOption
) {
  return new TcpClientSession(host, port, options);
}

// 패킷 라우트 (패킷 폴더를 핸들러로 활용)
export const createPacketRouter = () => new PacketRouter();
