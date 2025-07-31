import { Service } from "typedi";
import glog from "../../commonlib/glog";

export class ReservedUser {
  readonly userId: number;
  requested_from: string;
  reservedWorldId: number;

  constructor(userId: number, requested_from: string) {
    this.userId = userId;
    this.requested_from = requested_from;
  }
}

export enum EWorldState {
  Creating,
  Created,
  Destroying,
}

export class World {
  readonly worldId: number;
  worldServerId: string;
  worldState: EWorldState;
  joinedUsers: Set<number>;
  reservedUsers: Map<number, ReservedUser>;

  constructor(worldId: number) {
    this.worldId = worldId;
    this.worldServerId = "";
    this.worldState = EWorldState.Creating;
    this.joinedUsers = new Set<number>();
    this.reservedUsers = new Map<number, ReservedUser>();
  }

  setWorldState(newState: EWorldState) {
    if (newState == EWorldState.Created) {
      if (!this.worldServerId) {
        glog.error(
          "worldServerId must be set before the World can be set as 'Running' State"
        );
      }
    }
    this.worldState = newState;
  }

  getWorldState(): EWorldState {
    return this.worldState;
  }

  setWorldServerId(serverId: string) {
    this.worldServerId = serverId;
  }

  getWorldServerId(): string {
    return this.worldServerId;
  }

  addReservedUser(userId: number, user: ReservedUser) {
    this.reservedUsers.set(userId, user);
  }

  removeReservedUsers(user: ReservedUser) {
    this.reservedUsers.delete(user.userId);
  }

  clearReservedUsers() {
    this.reservedUsers.clear();
  }

  getReservedUsers(): ReservedUser[] {
    return [...this.reservedUsers.values()];
  }

  addJoinedUser(userId: number) {
    this.joinedUsers.add(userId);
  }

  removeJoinedUsers(userId) {
    this.joinedUsers.delete(userId);
  }

  clearJoinedUsers() {
    this.joinedUsers.clear();
  }

  getJoinedUsers(): number[] {
    return [...this.joinedUsers];
  }
}

@Service()
export class WorldManager {
  worlds: Map<number, World>;

  constructor() {
    this.worlds = new Map<number, World>();
  }

  createWorld(worldId: number): World {
    if (this.worlds.has(worldId)) {
      glog.warn(`try to create already existing world. worldId: ${worldId}`);

      return this.worlds.get(worldId);
    } else {
      const world = new World(worldId);
      this.worlds.set(worldId, world);
      return this.worlds.get(worldId);
    }
  }

  deleteWorld(worldId: number) {
    this.worlds.delete(worldId);
  }

  getWorldById(worldId: number): World {
    return this.worlds.get(worldId);
  }
}
