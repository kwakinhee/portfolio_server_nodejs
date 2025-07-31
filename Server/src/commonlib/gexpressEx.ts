import express from "express";
import { GError, GErrorCode } from "./gerror";
import glog from "./glog";

export interface RequestAs<T> extends express.Request {
  body: T;
}

export interface Request extends express.Request {}
export interface Response extends express.Response {}
export interface ResponseAs<T> extends express.Response {
  json: (body?: T) => this;
}

export interface ResponseError {
  message: string;
  code: number;
}

/**
 * restApi error -> GERROR 변환후 에러 할당.
 * @param resp 각 api에 클라이언트로 전송될 response.
 * @param err catch 에서 받은 error.
 */
export function setError(resp: IResponseBody, err: any) {
  let gError: GError = undefined;
  if (!(err instanceof GError)) {
    gError = new GError(
      err.message,
      GErrorCode.INTERNAL_ERROR,
      null,
      err.stack
    );
  } else {
    gError = err;
  }
  let errorInfo: ResponseError = {
    code: gError.gcode,
    message: gError.message,
  };

  //TODO: 필요시 에러정보 추가.
  resp.errorInfo = errorInfo;
  resp.result = false;

  glog.error(" GError Info", { gError });
}

export interface IResponseBody {
  result: boolean;
  errorInfo?: ResponseError;
}
