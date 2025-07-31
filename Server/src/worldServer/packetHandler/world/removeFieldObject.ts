// -------------------------------------------------------------------------------------------------
// 오브젝트 배치 삭제
// -------------------------------------------------------------------------------------------------

import { GIANTSTEP } from "../../../proto/worldServer/jsonProto";
import { User } from "../../user";
import glog from "../../../commonlib/glog";
import { World } from "../../world/world";
import { GErrorCode } from "../../../commonlib/gerrorCode";

export = async (user: User, request: any) => {
  const req: GIANTSTEP.WS.Protocol.CQ_RemoveFieldObject = request;
  const world: World = user.getWorld();

  if (!world) {
    glog.error(`World does not exist. worldId:[${user.getWorldId()}]`);
    const res = GIANTSTEP.WS.Protocol.SA_RemoveFieldObject.create();
    res.errorCode = GErrorCode.INVALID_WORLD;
    user.sendProtobufPacket(
      GIANTSTEP.WS.Protocol.PacketType.WS_SA_RemoveFieldObject,
      res
    );
    return;
  }

  const result = await world.removeFieldObject(
    user,
    req.objectDbId,
    req.isEditorMode
  );
  if (result !== GErrorCode.OK) {
    const res = GIANTSTEP.WS.Protocol.SA_RemoveFieldObject.create();
    res.objectId = req.objectDbId;
    res.errorCode = result;
    res.isEditorMode = req.isEditorMode;
    user.sendProtobufPacket(
      GIANTSTEP.WS.Protocol.PacketType.WS_SA_RemoveFieldObject,
      res
    );
  }
};
