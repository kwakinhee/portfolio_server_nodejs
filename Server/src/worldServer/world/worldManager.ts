import Container, { Service } from "typedi";
import { World, WorldOption } from "./world";
import { NewJeansWorld } from "./newJeansWorld";
import { PersonalWorld } from "./personalWorld";
import { W_WM_UnRegisterWorld } from "../../proto/wm_world/packet";
import { WorldService } from "../server";
import glog from "../../commonlib/glog";

const EMPTY_ROOM_CLEANER_INTERVAL = 1000; //msec

export enum EWorldType {
  NEWJEANS_WORLD = 1,
  PERSONAL_WORLD = 2,
}

export type WorldClassType = new (
  worldId: number,
  worldType: EWorldType
) => World;
export type Type<T> = new (...args: any[]) => T;

@Service()
export class WorldManager {
  private _worlds = new Map<number, World>();
  private _emptyWorldCleaner: NodeJS.Timeout;

  constructor() {
    this.registerEmptyWorldCleaner();
  }

  async createWorld(
    worldId: number,
    options?: WorldOption
  ): Promise<World | null> {
    let world = null;
    if (options.worldType == EWorldType.NEWJEANS_WORLD) {
      world = new NewJeansWorld(worldId);
    } else if (options.worldType == EWorldType.PERSONAL_WORLD) {
      world = new PersonalWorld(worldId);
    } else {
      return null;
    }

    if (!world) {
      return null;
    }

    if (world.onCreate) {
      const result = await world.onCreate(options);
      if (!result) return null;
    }

    this._worlds.set(worldId, world);
    return world;
  }

  registerEmptyWorldCleaner() {
    this._emptyWorldCleaner = setInterval(() => {
      this.cleanEmptyWorld();
    }, EMPTY_ROOM_CLEANER_INTERVAL);
  }

  cleanEmptyWorld() {
    for (const [worldId, world] of this._worlds) {
      if (world.isMarkedForDelete()) {
        glog.info(`WorldManager is deleteing empty room [ ${worldId} ]`);
        this.destroyWorld(worldId);
      }
    }
  }

  destroyAllWorlds(): void {
    for (const worldId of this._worlds.keys()) {
      this.destroyWorld(worldId);
    }
  }

  destroyWorld(worldId: number): void {
    const world = this._worlds.get(worldId);
    if (world == null) {
      return;
    }

    world.onDestroy();
    this._worlds.delete(worldId);

    const worldService = Container.get(WorldService);
    const packet = new W_WM_UnRegisterWorld(worldId);
    worldService.TcpClientSessionManager.send(
      worldService.worldServerMgrAppId,
      packet
    );
  }

  async findAvailableWorld(worldId: number): Promise<World | null> {
    // let world = query db / redis for WorldListing
    const world = this._worlds.get(worldId);
    return world ?? null;
  }

  //Client Side PacketHandler에서 부르면 안됨.
  async findOrCreate(
    worldId: number,
    options?: WorldOption
  ): Promise<World | null> {
    let world = await this.findAvailableWorld(worldId);
    if (!world) {
      world = await this.createWorld(worldId, options);
    }
    return world;
  }

  // 리턴 받은 World객체 필요한 룸 구현클래스로 타입 지정하여 활용
  getWorld(worldId: number): any {
    const world = this._worlds.get(worldId);
    return world;
  }

  getWorldCount(): number {
    return this._worlds.size;
  }
}
