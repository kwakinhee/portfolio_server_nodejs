import { User, LoginInfo } from "../../user";
import glog from "../../../commonlib/glog";
import Container from "typedi";
import _ from "lodash";
import { AuthService } from "../../server";
import { AUTH_WM_GetWorldServerAddress } from "../../../proto/wm_auth/packet";


export = (user: User, request: any): Promise<boolean> => {
  glog.info(`CQ_GetWorldServerAddress from User[ ${user.getUserId()} ]`);
  const userId = user.getUserId();

  const authService = Container.get(AuthService);
  const wmClient = authService.getWorldMgrClientSession();

  const packet = new AUTH_WM_GetWorldServerAddress(userId);
  wmClient.send(packet);

  //TODO: 에러 처리 필요
  // setTimeout으로 에러 응답핸들러 등록 필요.
  // 일정 시간 안에 성공시 취소
  return;
};
