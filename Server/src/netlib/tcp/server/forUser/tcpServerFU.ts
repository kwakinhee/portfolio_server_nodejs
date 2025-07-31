import * as net from "net";
import { BaseTcpServer } from "../../baseTcpServer";
import { Segments } from "../../segments";
import glog from "../../../../commonlib/glog";

export class TcpServerFU extends BaseTcpServer {
  public socketServer: net.Server;

  constructor() {
    super();
  }

  protected _createSocketServer(
    onConnected: (socket: net.Socket) => void,
    onDisconnected: (segment: Segments) => void
  ): void {
    this.socketServer = net.createServer();
    this.socketServer.on("connection", onConnected);
  }

  protected _closeSocketServer(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.socketServer.close((err) => {
        this.socketServer.unref();
        if (err) return reject(err);
        glog.info("server closed and disposed.");
        resolve();
      });
    });
  }
}
