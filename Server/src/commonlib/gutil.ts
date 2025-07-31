// ----------------------------------------------------------------------------
// 모든 서버에서 공통적으로 필요한 util 기능 정의.
// ----------------------------------------------------------------------------

import { promisify } from "util";
import fs from "fs";
import * as crypto from "crypto";
import { UlidMonotonic } from "id128";
// ----------------------------------------------------------------------------
// Promisified functions.
// ----------------------------------------------------------------------------

export const readdir = promisify(fs.readdir);
export const stat = promisify(fs.stat);
export const readFile = promisify(fs.readFile);
export const sleep = promisify(setTimeout);

// ----------------------------------------------------------------------------
// time.
// ----------------------------------------------------------------------------

export const dateToUtc = (d: Date): number => {
  return Math.floor(d.getTime() / 1000);
};

export const curTimeUtcInSec = (): number => {
  const d = new Date();
  return dateToUtc(d);
};

export const curTimeUtcInMs = (): number => {
  const d = new Date();
  return d.getTime();
};

export function midnightUtc(): number {
  const curDate = new Date();
  const midnightDate = new Date(
    curDate.getFullYear(),
    curDate.getMonth(),
    curDate.getDate(),
    24
  );
  return dateToUtc(midnightDate);
}

export function generateEnterWorldToken(accountId: string) {
  return crypto
    .createHash("sha1")
    .update(accountId + new Date().getTime() + Math.random(), "utf8")
    .digest("hex");
}

// ----------------------------------------------------------------------------
// ULID 고유아이디 관련 유틸 함수
// ----------------------------------------------------------------------------
// 다음 기회에 쓸 수도...
class UlidUtil {
  static generate(): UlidMonotonic {
    return UlidMonotonic.generate();
  }

  staticgenerateUlidString(): string {
    return UlidMonotonic.generate().toCanonical();
  }

  static fromStringToObject(canonicalStr: string): UlidMonotonic {
    return UlidMonotonic.fromCanonical(canonicalStr);
  }

  static fromStringToBuffer(canonicalStr: string) {
    let byteData = UlidMonotonic.fromCanonical(canonicalStr).bytes;
    return Buffer.from(byteData);
  }

  static fromBufferToString(buf: Buffer): string {
    return UlidMonotonic.construct(buf).toCanonical();
  }

  static fromBufferToObject(buf: Buffer): UlidMonotonic {
    return UlidMonotonic.construct(buf);
  }
}

export function getTimeFromUlidString(canonicalStr: string): Date {
  return UlidMonotonic.fromCanonical(canonicalStr).time;
}

export function getTimeFromUlid(ulid: UlidMonotonic): Date {
  return ulid.time;
}
