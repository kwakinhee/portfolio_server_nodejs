import { GIANTSTEP } from "../../../proto/worldServer/jsonProto";
import { User } from "../../user";
import glog from "../../../commonlib/glog";
import Container from "typedi";
import { GError, GErrorCode } from "../../../commonlib/gerror";
import _ from "lodash";
import { WorldService } from "../../server";
import { TcpClientSession } from "../../../netlib/tcp";
import { W_WM_GetWorldAddress } from "../../../proto/wm_world/packet";

export = (user: User, request: any) => {
  const reqBody: any = request.toJSON();
  glog.debug(
    `Processing [ CQ_GetWorldAddress ] : ${
      request.worldId
    } From User [ ${user.getUserId()}`
  );
  const cqGetWorldAddress: GIANTSTEP.WS.Protocol.CQ_GetWorldAddress = request;

  const userId: number = user.getUserId();
  const worldId: number = cqGetWorldAddress.worldId;

  // validate request parameters
  if (!userId) {
    throw new GError("invalid userId", GErrorCode.INVALID_REQ_BODY_PARAMETER, {
      userId,
    });
  }

  if (!worldId) {
    throw new GError("invalid worldId", GErrorCode.INVALID_REQ_BODY_PARAMETER, {
      worldId,
    });
  }

  const worldService = Container.get(WorldService);
  const wmClient: TcpClientSession = worldService.getWSMClientSession();
  const packet = new W_WM_GetWorldAddress(
    userId,
    worldId,
    "test-version",
    "test-token"
  );

  // 응답메세지 SA_GetWorldAddress 메세지는
  // serverPacketHandler/wm_w_router.ts 파일 참고
  // wsm_w_router.on(WM_L_GetWorldAddress, async(...))
  // 에서 보내질 예정

  //TODO: 에러 처리 필요
  // setTimeout으로 에러 응답핸들러 등록 필요.
  // 일정 시간 안에 성공시 취소
  wmClient.send(packet);
};
