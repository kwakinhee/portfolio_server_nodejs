import { GIANTSTEP } from "../../../proto/worldServer/jsonProto";
import { User, LoginInfo } from "../../user";
import glog from "../../../commonlib/glog";
import Container from "typedi";
import { UserManager } from "../../userManager";
import { DISCONNECT_REASON } from "../../../commonlib/genum";
import * as gutil from "../../../commonlib/gutil";
import { GError, GErrorCode } from "../../../commonlib/gerror";
import { DBConnPool } from "../../../mysqllib/pool";
import _ from "lodash";
import spUserLoadProfile, {
  LoadUserProfileResult,
} from "../../../mysqllib/sp/user/spUserLoadProfile";

export = (user: User, request: any): Promise<boolean> => {
  const reqBody: any = request.toJSON();
  glog.debug("processing [ CQ_GetMyProfile ] userId:", {
    userId: user.getUserId(),
  });

  const userId = user.getUserId();

  // 로그인되어있는 유저인지 확인.
  if (!userId) {
    throw new GError(
      "UnAuthorized. Not LoggedIn.",
      GErrorCode.UNAUTHORIZED_NOT_LOGGED_IN,
      {
        userId,
      }
    );
  }

  return Promise.resolve()
    .then(() => {
      const userDbPool = Container.of("user").get(DBConnPool);
      return spUserLoadProfile(userDbPool.getPool(), userId);
    })
    .then((result: LoadUserProfileResult) => {
      const saMyProfile: GIANTSTEP.WS.Protocol.SA_GetMyProfile =
        GIANTSTEP.WS.Protocol.SA_GetMyProfile.create();

      saMyProfile.accountId = result.accountId;
      saMyProfile.isAdmin = user.getIsAdmin();
      saMyProfile.userId = result.userId;
      saMyProfile.characterCmsId = result.characterCmsID;
      return user.sendProtobufPacket<GIANTSTEP.WS.Protocol.SA_GetMyProfile>(
        // response.sequence,
        // GIANTSTEP.WS.Protocol.PacketType.LOGIN,
        GIANTSTEP.WS.Protocol.PacketType.WS_SA_GetMyProfile,
        saMyProfile
      );
    })
    .catch((err) => {
      glog.debug("error while processing [ CQ_GetMyProfile ]", {
        userId: user.getUserId(),
        err,
      });
      return false;
    });
};
