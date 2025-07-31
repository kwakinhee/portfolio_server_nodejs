// -------------------------------------------------------------------------------------------------
// 아이템 줍기
// -------------------------------------------------------------------------------------------------
import { GIANTSTEP } from "../../../proto/worldServer/jsonProto";
import { User } from "../../user";
import glog from "../../../commonlib/glog";
import { World } from "../../world/world";
import { GErrorCode } from "../../../commonlib/gerrorCode";

export = async (user: User, request: any) => {
  const req: GIANTSTEP.WS.Protocol.CQ_TakeItemObject = request;

  const world: World = user.getWorld();
  if (!world) {
    glog.error(`World does not exist. WorldId:[${user.getWorldId()}]`);
    const res = GIANTSTEP.WS.Protocol.SA_TakeItemObject.create();
    res.errorCode = GErrorCode.INVALID_WORLD;
    user.sendProtobufPacket(
      GIANTSTEP.WS.Protocol.PacketType.WS_SA_TakeItemObject,
      res
    );
    return;
  }

  const result = await world.takeItemObject(user, req.itemDbGuid);

  if (result !== GErrorCode.OK) {
    const packet = GIANTSTEP.WS.Protocol.SA_TakeItemObject.create();
    packet.errorCode = result;

    user.sendProtobufPacket(
      GIANTSTEP.WS.Protocol.PacketType.WS_SA_TakeItemObject,
      packet
    );
  }
};
