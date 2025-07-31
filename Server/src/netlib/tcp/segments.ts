// -------------------------------------------------------------------------------------------------
// key: string, value:string | number 형식의 map data 정의.
// 현재 각 서버들을 구분하는데 필요한 key 로 사용중.
// -------------------------------------------------------------------------------------------------

import { SegmentValue, ISegments } from "./interface";
export { SegmentValue };

export class Segments implements ISegments {
  private _data: { [key: string]: SegmentValue } = {};

  has(key: string): boolean {
    return this._data[key] !== undefined;
  }

  set(key: string, value: string | number) {
    this._data[key] = value;
  }

  assign(segments: Segments) {
    for (const key in segments._data) {
      if (segments._data.hasOwnProperty(key)) {
        const value = segments._data[key];
        this.set(key, value);
      }
    }
  }

  get(key: string): SegmentValue {
    return this._data[key];
  }

  remove(key: string) {
    delete this._data[key];
  }

  clear() {
    this._data = {};
  }

  keys() {
    const output: string[] = [];
    for (const key in this._data) {
      output.push(key);
    }
    return output;
  }
}
