var net = require("net");
var protobuf = require("protobufjs");

var moonProto = protobuf.loadSync("../../Packet/proto/game.proto");

LOGIN = "GIANTSTEP.GS.Protocol.Request.CQ_Login";
PING = "GIANTSTEP.GS.Protocol.Request.CS_Ping";

function createProtoPacket(type, payload) {
  let messageType = moonProto.lookupType(type);
  let err = messageType.verify(payload);
  if (err) {
    throw new Error(err);
  }
  let message = messageType.create(payload);
  let buf = messageType.encode(message).finish();

  var decoded = messageType.decode(buf);
  console.log(decoded);

  return buf;
}

var user = new net.Socket();

function heartbeat() {
  let buf = createProtoPacket(PING, { serverTimeUtcRequest: false });
  user.write(buf);
}

function login() {
  let buf = createProtoPacket(LOGIN, {
    userAccountId: "Lida",
    actionInfos: [],
  });
  user.write(buf);
}

user.connect(10301, "192.168.12.84", function () {
  console.log("Connected");
  setInterval(heartbeat, 2000);
});

user.on("data", function (data) {
  console.log("Received: " + data);
});

user.on("close", function () {
  console.log("Connection closed");
});
