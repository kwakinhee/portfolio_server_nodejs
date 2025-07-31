import { Request, NextFunction } from "express";
import { ResponseAs } from "../../../commonlib/gexpressEx";
import * as gutil from "../../../commonlib/gutil";
import glog from "../../../commonlib/glog";
interface ResponseBody {
  errInfo: {
    errName: string;
    errMessage: string;
  };
}

export const checkNetworkLatency = (
  req: Request,
  res: ResponseAs<ResponseBody>,
  next: NextFunction
) => {
  const sendUtcTimestampInMs: number = parseInt(
    <string>req.headers["click-action-time"],
    10
  );

  if (isNaN(sendUtcTimestampInMs)) {
    glog.warn("headers['click-action-time'] must be unix-time in milliseconds");
  } else {
    const arriveUtcTimestampInMs: number = gutil.curTimeUtcInMs();

    glog.info(
      `latency: ${
        arriveUtcTimestampInMs - sendUtcTimestampInMs
      }ms -- sendUtcTimestampInMs: ${sendUtcTimestampInMs}ms, arriveUtcTimestampInMs: ${arriveUtcTimestampInMs}ms`
    );
  }

  next();
};
