import { GError, GErrorCode } from "../../commonlib/gerror";
import glog from "../../commonlib/glog";
import { axiosRestClient as axiosRestClient } from "./axiosRestClient";
import { AxiosRequestConfig } from "axios";

export interface IErrorResponse {
  data: {
    error?: string;
    gcode?: number;
  };
}

export type IApiResponse = IErrorResponse | any;

export abstract class BaseApiClient {
  protected axiosRest: axiosRestClient;

  constructor() {}

  init(baseUrl: string, timeout?: number) {
    this.axiosRest = new axiosRestClient(baseUrl, timeout);
  }

  protected async get<T extends IApiResponse = any>(
    url: string,
    timeout?: number
  ) {
    try {
      const resp: IApiResponse = await this.axiosRest.get<T>(url, timeout);
      if (resp.data.error) {
        throw new GError(resp.data.error, resp.data.gcode);
      }
      return resp.data;
    } catch (error) {
      this.rethrow(url, null, error);
    }
  }

  protected async patch<T extends IApiResponse = any>(
    url: string,
    body?: any,
    timeout?: number
  ) {
    try {
      const config: AxiosRequestConfig = timeout ? { timeout } : undefined;
      const resp: IApiResponse = await this.axiosRest.patch<T>(
        url,
        body,
        config
      );
      if (resp.data.error) {
        throw new GError(resp.data.error, resp.data.gcode);
      }
      return resp.data;
    } catch (error) {
      this.rethrow(url, null, error);
    }
  }

  protected async post<T extends IApiResponse = any>(
    url: string,
    body?: any,
    timeout?: number
  ) {
    try {
      const resp: IApiResponse = await this.axiosRest.post<T>(
        url,
        body,
        timeout
      );
      if (resp.data.error) {
        throw new GError(resp.data.error, resp.data.gcode);
      }
      return resp.data;
    } catch (error) {
      this.rethrow(url, body, error);
    }
  }

  protected rethrow(url: string, body: any, error: Error | GError) {
    if (error instanceof GError) {
      glog.warn(`'${url}' error`, {
        baseUrl: this.axiosRest.baseUrl,
        err: error.message,
        errcode: GErrorCode[error.gcode],
      });
      throw new GError(`'${url}' api err`, error.gcode, error.message);
    } else {
      glog.warn(`'${url}' exception`, {
        baseUrl: this.axiosRest.baseUrl,
        body,
        err: error.message,
      });
      throw new GError(
        `'${url}' api exception`,
        GErrorCode.INTERNAL_ERROR,
        error.message
      );
    }
  }
}
