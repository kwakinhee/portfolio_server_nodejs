export interface IDisposable {
  dispose(): Promise<void> | void;
}

export type SegmentValue = string | number;
export interface ISegments {
  has(key: string): boolean;
  set(key: string, value: string | number): void;
  assign(segments: ISegments): void;
  get(key: string): SegmentValue;
  remove(key: string): void;
  clear(): void;
  keys(): string[];
}

export interface TcpSocket {
  send(packet: any): void;
  getSegments(): ISegments;
  getSessionId(): string;
}
