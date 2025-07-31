// -------------------------------------------------------------------------------------------------
// 오브젝트 배치 수정
// -------------------------------------------------------------------------------------------------
import { GIANTSTEP } from "../../../proto/worldServer/jsonProto";
import { User } from "../../user";
import glog from "../../../commonlib/glog";
import { World } from "../../world/world";
import { GErrorCode } from "../../../commonlib/gerrorCode";

export = async (user: User, request: any) => {
  const req: GIANTSTEP.WS.Protocol.CQ_UpdateFieldObject = request;
  const world: World = user.getWorld();

  if (!world) {
    glog.error(`World does not exist. worldId:[${user.getWorldId()}]`);
    const res = GIANTSTEP.WS.Protocol.SA_UpdateFieldObject.create();
    res.errorCode = GErrorCode.INVALID_WORLD;
    user.sendProtobufPacket(
      GIANTSTEP.WS.Protocol.PacketType.WS_SA_UpdateFieldObject,
      res
    );
    return;
  }

  const result = await world.updateFieldObject(
    user,
    req.objectDbId,
    req.posX,
    req.posY,
    req.layer,
    req.dir
  );
  if (result !== GErrorCode.OK) {
    const res = GIANTSTEP.WS.Protocol.SA_UpdateFieldObject.create();
    res.errorCode = result;
    user.sendProtobufPacket(
      GIANTSTEP.WS.Protocol.PacketType.WS_SA_UpdateFieldObject,
      res
    );
  }
};
