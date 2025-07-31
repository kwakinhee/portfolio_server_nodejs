export class Vector2D {
  public x: number;
  public y: number;
  public dir: number = 0;

  constructor(x: number, y: number, dir: number = 0) {
    this.x = x;
    this.y = y;
    this.dir = dir;
  }

  copyFrom(from: Vector2D) {
    this.x = from.x;
    this.y = from.y;
    this.dir = from.dir;
  }

  update(x: number, y: number, dir: number = 0) {
    this.x = x;
    this.y = y;
    this.dir = dir;
  }

  distance(to: Vector2D): number {
    const distX = Math.pow((this.x - to.x), 2);
    const distY = Math.pow((this.y - to.y), 2);
    const dist = Math.sqrt(distX + distY);
    return dist;
  }

  static createFrom(x: number, y: number, dir: number = 0): Vector2D {
    return new Vector2D(x, y, dir);
  }

  static createFromOther(other: Vector2D): Vector2D {
    return new Vector2D(other.x, other.y, other.dir);
  }
}

export class Vector3D {
  public x: number;
  public y: number;
  public z: number;
  public dir: number = 0;

  constructor(x: number, y: number, z: number, dir: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.dir = dir;
  }

  copyFrom(from: Vector3D) {
    this.x = from.x;
    this.y = from.y;
    this.z = from.z;
    this.dir = from.dir;
  }

  update(x: number, y: number, z: number, dir: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.dir = dir;
  }

  distance(to: Vector3D): number {
    const distX = Math.pow((this.x - to.x), 2);
    const distY = Math.pow((this.y - to.y), 2);
    const distZ = Math.pow((this.z - to.z), 2);
    const dist = Math.sqrt(distX + distY + distZ);
    return dist;
  }

  static createFrom(x: number, y: number, z: number, dir: number = 0): Vector3D {
    return new Vector3D(x, y, z, dir);
  }

  static createFromOther(other: Vector3D): Vector3D {
    return new Vector3D(other.x, other.y, other.z, other.dir);
  }
}