import { GError, GErrorCode } from "../commonlib/gerror";
import glog from "../commonlib/glog";

export const convertToGError = (errMsg: string): GError => {
  switch (errMsg) {
    default:
      glog.error("unknown-redis-error", {
        errMsg,
      });
      return new GError("unknown-redis-error", GErrorCode.INTERNAL_ERROR);
  }
};
