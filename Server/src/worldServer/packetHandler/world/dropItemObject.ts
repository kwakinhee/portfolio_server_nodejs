// -------------------------------------------------------------------------------------------------
// 아이템 버리기
// -------------------------------------------------------------------------------------------------
import { GIANTSTEP } from "../../../proto/worldServer/jsonProto";
import { User } from "../../user";
import glog from "../../../commonlib/glog";
import { World } from "../../world/world";
import { GErrorCode } from "../../../commonlib/gerrorCode";

export = async (user: User, request: any) => {
  const req: GIANTSTEP.WS.Protocol.CQ_DropItemObject = request;
  const world: World = user.getWorld();

  if (!world) {
    glog.error(`World does not exist. worldId:[${user.getWorldId()}]`);
    const res = GIANTSTEP.WS.Protocol.SA_DropItemObject.create();
    res.errorCode = GErrorCode.INVALID_WORLD;
    user.sendProtobufPacket(
      GIANTSTEP.WS.Protocol.PacketType.WS_SA_DropItemObject,
      res
    );
    return;
  }

  const result = await world.dropItemObject(
    user,
    req.itemDbGuid,
    req.itemAmount,
    req.posX,
    req.posY,
    req.layer
  );

  if (result !== GErrorCode.OK) {
    const packet = GIANTSTEP.WS.Protocol.SA_DropItemObject.create();
    packet.errorCode = result;

    user.sendProtobufPacket(
      GIANTSTEP.WS.Protocol.PacketType.WS_SA_DropItemObject,
      packet
    );
  }
};
