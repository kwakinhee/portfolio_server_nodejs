import { Request, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import gconf from "../../../commonlib/gconf";
import { ResponseAs } from "../../../commonlib/gexpressEx";
import * as gutil from "../../../commonlib/gutil";
import glog from "../../../commonlib/glog";
interface ResponseBody {
  errInfo: {
    errName: string;
    errMessage: string;
  };
}

export const vertyfyJwt = (
  req: Request,
  res: ResponseAs<ResponseBody>,
  next: NextFunction
) => {
  glog.debug(
    `game controller restApi recvUtcTimeStampInMs:${gutil.curTimeUtcInMs()}`
  );

  //Get the jwt token from the head
  const token = <string>req.headers["auth-token"];
  let jwtPayload;

  //Try to validate the token and get data
  try {
    jwtPayload = <any>jwt.verify(token, gconf.restApiServer.jwtSecret);
    res.locals.jwtPayload = jwtPayload;
  } catch (err) {
    glog.error("restApi error", {
      gcode: err.gcode,
      error: err.message,
      extra: err.extra,
    });

    //If token is not valid
    const resp: ResponseBody = {
      errInfo: {
        errName: err.name,
        errMessage: err.message,
      },
    };
    res.json(resp);

    return;
  }

  //The token is valid for 1 hour
  //We want to send a new token on every request
  // const { accessToken, userAccountId, userId } = jwtPayload;
  // const jwtSecret: string = gconfig.restApiServer.jwtSecret;
  // const newToken = jwt.sign({ accessToken, userAccountId, userId }, jwtSecret, {
  //   expiresIn: "1h",
  // });
  // res.setHeader("token", newToken);

  //Call the next middleware or controller
  next();
};
