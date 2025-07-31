// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

import { Container } from "typedi";
import Pubsub from "../redislib/pubsub";
import { UserManager } from "./userManager";
import { KICK_REASON } from "../commonlib/genum";
import glog from "../commonlib/glog";
import gconf from "../commonlib/gconf";

// ----------------------------------------------------------------------------
// Pubsub handler functions.
// ----------------------------------------------------------------------------

function handleKick(msgStr: string) {
  glog.debug("handleKick with msgStr:", { msgStr });
  const msg = JSON.parse(msgStr);

  const userId = msg.userId;
  const reason = msg.reason;
  const authServerId = msg.authServerId;

  glog.warn("kicking user ...", {
    userId,
    reason,
    authServerId,
  });

  const userManager = Container.get(UserManager);
  return userManager.kickUser(userId, reason, authServerId).catch((err) => {
    glog.error("worldPubsub.handleKick error", {
      err: err.message,
      stack: err.stack,
    });
  });
}

// ----------------------------------------------------------------------------
// Public functions.
// ----------------------------------------------------------------------------

export const init = () => {
  const authPubsub = Container.of("pubsub-auth").get(Pubsub);

  // Subscribe.
  let ch = `kick:${gconf.appId}`;
  authPubsub.subscribe(ch, handleKick);
};

export const pubUserKicked = (userId, authServerId) => {
  const authPubsub = Container.of("pubsub-auth").get(Pubsub);
  const ch = `kick:${authServerId}`;
  const msg = {
    userId,
  };

  glog.debug("publish user kicked", {
    userId,
    authServerId,
  });

  return authPubsub.publish(ch, JSON.stringify(msg));
};
