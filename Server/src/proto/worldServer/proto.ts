// -------------------------------------------------------------------------------------------------
// user -> server (CS)  server -> user (SC) 프로토콜 정의.
// enum 은 user 상태에 따라 여러개가 될수 있음.
// -------------------------------------------------------------------------------------------------

export enum Common {}

export const toString = (type: number) => {
  if (Common[type] !== undefined) {
    return `Common.${Common[type]}`;
  }
};
