// -------------------------------------------------------------------------------------------------
// 캐릭터 이동, 회전 패킷.
// -------------------------------------------------------------------------------------------------

import { GIANTSTEP } from "../../../proto/worldServer/jsonProto";
import { User } from "../../user";
import glog from "../../../commonlib/glog";
import * as gutil from "../../../commonlib/gutil";
import { CalcWorldDistance } from "../../../cms/worldCoordinate";
import { MoveState } from "../../userState";
import Container from "typedi";
import { WorldManager } from "../../world/worldManager";
import { World } from "../../world/world";

enum VERIFY_MOVE_OPTION {
  // 1초에 수신가능한 패킷 수.
  RECEIVABLE_PACKET_COUNT_PER_SEC = 10,

  // 이동 거리에 추가 허용 시간(초)
  ADDITIONAL_SEC = 2,

  // 스피드핵 체크 타임(초)
  SPEED_HACK_CHECK_TIME_SEC = 1,

  // 로그 남기는 타임(초)
  INTERVAL_WRITE_LOG_TIME_SEC = 15,
}

const validateMove = (
  user: User,
  old: MoveState,
  newly: MoveState
): boolean => {
  const userState = user.userState;
  const curTimeUtcInSec = gutil.curTimeUtcInSec();
  const userId = user.getUserId();

  userState.packetCountPerSec++;

  // 1초이내에 이동패킷이 10번 이상이 올 경우 스피드 핵.
  if (
    userState.packetCountPerSec >=
    VERIFY_MOVE_OPTION.RECEIVABLE_PACKET_COUNT_PER_SEC
  ) {
    // if (
    //   newly.clientTimeUtc - userState.receivedMovingPacketBeginTime <=
    //   VERIFY_MOVE_OPTION.SPEED_HACK_CHECK_TIME_SEC
    // ) {
    //   glog.error("INVALID MOVEMENT SPEED HACK", {
    //     userId: userId,
    //     lastSendingTime: userState.lastClientSendingTimeUtc,
    //     curSendingTime: newly.clientTimeUtc,
    //     hitCount: userState.packetCountPerSec,
    //     packetRecvCount: userState.packetRecvCount,
    //     failedPacketRecvCount: userState.failedPacketRecvCount,
    //     failureRate:
    //       userState.failedPacketRecvCount / userState.packetRecvCount,
    //   });
    //   return false;
    // } else {
    //   // 정상.
    //   userState.packetCountPerSec = 0;
    //   userState.receivedMovingPacketBeginTime = newly.clientTimeUtc;
    // }
  }

  // 클라이언트가 마지막으로 전송한 이동패킷 시간보다 과거로 보낸경우 타이밍 핵.
  if (userState.lastClientSendingTimeUtc) {
    if (newly.clientTimeUtc < userState.lastClientSendingTimeUtc) {
      glog.error("INVALID MOVEMENT (1)", {
        userId: userId,
        lastSendingTime: userState.lastClientSendingTimeUtc,
        curSendingTime: newly.clientTimeUtc,
        diffSec: userState.lastClientSendingTimeUtc - newly.clientTimeUtc,
        packetRecvCount: userState.packetRecvCount,
        failedPacketRecvCount: userState.failedPacketRecvCount,
        failureRate:
          userState.failedPacketRecvCount / userState.packetRecvCount,
      });
      return false;
    }
  }

  // 클라이언트가 전송한 이동패킷 시간이 현재 UTC시간보다 미래시간으로 보낸 경우 타이밍 핵.
  if (newly.clientTimeUtc > curTimeUtcInSec) {
    glog.error("INVALID MOVEMENT (2)", {
      userId: userId,
      curSendingTime: newly.clientTimeUtc,
      curServerTimeUtc: curTimeUtcInSec,
      diffSec: newly.clientTimeUtc - curTimeUtcInSec,
      packetRecvCount: userState.packetRecvCount,
      failedPacketRecvCount: userState.failedPacketRecvCount,
      failureRate: userState.failedPacketRecvCount / userState.packetRecvCount,
    });
    return false;
  }

  const clientDistance = CalcWorldDistance(old, newly);

  // todo 추후 speed 서버에서도 지정
  const vx = newly.vx;
  const vy = newly.vx;
  const vz = newly.vx;

  let intervalSec = 1;
  if (userState.lastClientSendingTimeUtc) {
    intervalSec = newly.clientTimeUtc - userState.lastClientSendingTimeUtc;
  }

  // const serverDistance = speed * intervalSec;
  // 2초 정도의 이동 거리는 허용해준다.
  // const allowedErrorDistance = speed * VERIFY_MOVE_OPTION.ADDITIONAL_SEC;
  // if (clientDistance > serverDistance + allowedErrorDistance) {
  //   glog.error("DETECTED INVALID MOVEMENT(D)]", {
  //     userId: userId,
  //     serverDistance: Math.floor(serverDistance),
  //     clientDistance: Math.floor(clientDistance),
  //     allowedErrorDistance: Math.floor(allowedErrorDistance),
  //     diff: Math.floor(serverDistance - clientDistance),
  //     serverspd: Math.floor(speed),
  //     clientspd: Math.floor(newly.speed),
  //     intervalSec: intervalSec,
  //     packetRecvCount: userState.packetRecvCount,
  //     failedPacketRecvCount: userState.failedPacketRecvCount,
  //     failureRate: userState.failedPacketRecvCount / userState.packetRecvCount,
  //   });
  //   return false;
  // }
  return true;
};

export = async (user: User, request: any) => {
  const cqMove: GIANTSTEP.WS.Protocol.CQ_Move = request;
  const userId = user.getUserId();
  const userState = user.userState;

  if (user.getWorldId() < 0) {
    //   user.disconnect(1);
    return;
  }

  if (!userState) {
    return;
  }

  const lastMoveState: MoveState = userState.getMoveState();
  const currentMoveState: MoveState = {
    x: cqMove.moveState.x,
    y: cqMove.moveState.y,
    z: cqMove.moveState.z,
    degrees: cqMove.moveState.degrees,
    vx: cqMove.moveState.vx,
    vy: cqMove.moveState.vy,
    vz: cqMove.moveState.vz,
    clientTimeUtc: cqMove.moveState.clientTimeUtc,
    axisSize: cqMove.moveState.axisSize,
  };

  userState.packetRecvCount++;
  if (!validateMove(user, lastMoveState, currentMoveState)) {
    // 유효하지 않을 경우에 대한 처리.
    userState.failedPacketRecvCount++;
  }

  // TODO: 추후 현재 위치 관련 맵 CMS 테이블 검증.

  // 특정 시간 간격으로 이동 저장 시간 로깅.
  const curTimeUtcInSec = gutil.curTimeUtcInSec();
  if (
    VERIFY_MOVE_OPTION.INTERVAL_WRITE_LOG_TIME_SEC <
    curTimeUtcInSec - userState.locationLastLogTimeUtc
  ) {
    userState.locationLastLogTimeUtc = curTimeUtcInSec;
    glog.info("move user", {
      userId,
      lastMoveState,
      currentMoveState,
    });
  }

  // TODO: 추후 이동 불가 타일에 대한 검증.

  userState.updateMoveState(currentMoveState);
  userState.lastClientSendingTimeUtc = currentMoveState.clientTimeUtc;

  // TODO: 월드 맵 섹터에 따른 유저 브로드 캐스팅 구현.
  const worldManager: WorldManager = Container.get(WorldManager);
  const worldId: number = user.getWorldId();
  const world: World = worldManager.getWorld(worldId);

  if (!world) {
    glog.error(`World[${worldId}] does not exist.`, {});
    return;
  }

  const saMove: GIANTSTEP.WS.Protocol.SA_Move =
    GIANTSTEP.WS.Protocol.SA_Move.create();
  saMove.moveState = GIANTSTEP.WS.Protocol.MoveState.create();

  saMove.userId = userId;
  saMove.moveState.x = currentMoveState.x;
  saMove.moveState.y = currentMoveState.y;
  saMove.moveState.z = currentMoveState.z;
  saMove.moveState.degrees = currentMoveState.degrees;
  saMove.moveState.vx = currentMoveState.vx;
  saMove.moveState.vy = currentMoveState.vy;
  saMove.moveState.vz = currentMoveState.vz;
  saMove.moveState.axisSize = currentMoveState.axisSize;

  world.broadcastToOthers(
    userId,
    // GIANTSTEP.WS.Protocol.PacketType.MOVE,
    GIANTSTEP.WS.Protocol.PacketType.WS_SA_Move,
    saMove
  );
};
