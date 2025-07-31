import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import http from "http";
import https from "https";
import _ from "lodash";

export class axiosRestClient {
  private _axiosInstance: AxiosInstance;

  constructor(baseUrl?: string, timeout: number = 2000) {
    this._axiosInstance = axios.create({
      baseURL: baseUrl,
      timeout,
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
    });
  }

  axios() {
    return this._axiosInstance;
  }

  baseUrl() {
    return this._axiosInstance.defaults.baseURL;
  }

  setTimeout(ms: number) {
    this._axiosInstance.defaults.timeout = ms;
  }

  post<T = any>(url: string, body?: any, timeout?: number) {
    if (timeout) {
      return this._axiosInstance.post<T>(url, body, {
        timeout,
      });
    } else {
      return this._axiosInstance.post<T>(url, body);
    }
  }

  postForm<T = any>(url: string, body: object, config?: AxiosRequestConfig) {
    const merged = _.merge(
      { headers: { "Content-type": "application/x-www-form-urlencoded" } },
      config
    );

    return this._axiosInstance.post<T>(url, this.makeFormData(body), merged);
  }

  get<T = any>(url: string, timeout?: number) {
    if (timeout) {
      return this._axiosInstance.get<T>(url, {
        timeout,
      });
    } else {
      return this._axiosInstance.get<T>(url);
    }
  }

  patch<T = any>(url: string, body: object, config?: AxiosRequestConfig) {
    return this._axiosInstance.patch<T>(url, body, config);
  }

  makeFormData(body: object) {
    return _.keys(body).reduce(
      (p, c) => p + `&${c}=${encodeURIComponent(body[c])}`,
      ""
    );
  }
}

const instance: axiosRestClient = new axiosRestClient();
export default instance;
