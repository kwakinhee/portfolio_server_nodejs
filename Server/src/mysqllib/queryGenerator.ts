// ----------------------------------------------------------------------------
// stored precedure 호출 관련 생성 함수들.
// ----------------------------------------------------------------------------

import * as mysqlUtil from "./util";
import * as mysql from "promise-mysql";
import { memoize } from "lodash";
import { GError } from "../commonlib/gerror";

export { QueryResult } from "./util";
export type Connection = mysql.Connection | mysql.PoolConnection;

/**
 * stored precedure 파라미터 표시 문자열 생성.
 * @param n 파라미터 개수.
 * @returns stored precedure 파라미터 표시 문자열.
 *          '' for 0 parameter
 *          '?' for 1 parameter
 *          '?,?' for 2 parameters
 */
export const generateQueryParamPlaceholders = memoize(function (
  n: number
): string {
  return Array(n).fill("?").join(",");
});

/**
 * DB Error 를 GError 로 변환.
 * @param errorCode GError Code.
 * @returns stored precedure 호출 or 리턴 에러 발생시 GError 반환.
 */
export function generateGErrorRejection(
  errorCode: number
): (err: GError) => Promise<never> {
  return (err: GError): Promise<never> => {
    return Promise.reject(new GError(err.message, errorCode, err.extra));
  };
}

/**
 * stored precedure 생성을 위한 함수 생성.
 * @param spName 호출할 stored precedure 이름.
 */
export function generateSPFunction(spName: string) {
  return (
    connection: Connection,
    ...args: any[]
  ): Promise<mysqlUtil.QueryResult> => {
    const sql = `CALL ${spName}(${generateQueryParamPlaceholders(
      args.length
    )});`;
    return mysqlUtil.query(connection, mysql.format(sql, args));
  };
}

/**
 * 리턴값이 없는 stored precedure 호출.
 * @param spName 호출할 stored precedure 이름.
 */
export function generateSPProcedure(spName: string) {
  const f = generateSPFunction(spName);
  return async (connection: Connection, ...args: any[]): Promise<void> => {
    await f(connection, ...args);
  };
}
