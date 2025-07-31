// -------------------------------------------------------------------------------------------------
// C -> S or S <-> S 서버의 모든 서버는 해당 클래스를 상속받음.
// -------------------------------------------------------------------------------------------------
import glog from "../../commonlib/glog";
import net = require("net");
import { Segments } from "./segments";
import { IDisposable } from "./interface";

export abstract class BaseTcpServer implements IDisposable {
  protected socketServer: net.Server;
  protected host: string;
  protected port: number;

  constructor() {
    this.socketServer = null;
    this.host = "";
    this.port = 0;
  }

  start(
    host: string,
    port: number,
    onConnected: (socket: net.Socket) => void,
    onDisconnected: (segment: Segments) => void
  ): void {
    // nvi
    this._createSocketServer(onConnected, onDisconnected);

    this.host = host;
    this.port = port;

    this._bindServerEvents();
  }

  dispose(): void | Promise<void> {
    // nvi
    return this._closeSocketServer();
  }

  protected abstract _createSocketServer(
    onConnected: (socket: net.Socket) => void,
    onDisconnected: (segment: Segments) => void
  );

  protected abstract _closeSocketServer(): Promise<void>;

  private _bindServerEvents(): void {
    this.socketServer.on("error", (err: any) => {
      if (err.code == "EADDRINUSE") {
        glog.error("Address in use, retrying...");
        this._retryListen();
      } else {
        glog.error("listen error", err);
      }
    });

    this.socketServer.listen(this.port, this.host, () => {
      glog.info(`bind to, ${this.host} : ${this.port}`);
    });
  }

  private _retryListen(): void {
    if (this.socketServer && this.port && this.host) {
      setTimeout(() => {
        let server = this.socketServer;
        server.close();
        server.listen(this.port, this.host, () => {
          glog.info(`bind to, ${this.host} : ${this.port}`);
        });
      }, 1000);
    }
  }
}
