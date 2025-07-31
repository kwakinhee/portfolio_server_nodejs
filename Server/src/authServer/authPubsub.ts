// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

import Pubsub from "../redislib/pubsub";
import * as kicker from "./kicker";
import glog from "../commonlib/glog";
import gconf from "../commonlib/gconf";

// ----------------------------------------------------------------------------
// Pubsub handler functions.
// ----------------------------------------------------------------------------

function handleKick(msgStr) {
  kicker.onKickConfirmed(msgStr);
}

// ----------------------------------------------------------------------------
// Public functions.
// ----------------------------------------------------------------------------

let usingPubsub: Pubsub | null = null;

export const init = (pubsub: Pubsub) => {
  if (usingPubsub) {
    throw new Error("Redis pub-sub already initialized!");
  }
  usingPubsub = pubsub;

  // Subscribe to kick channel.
  let ch = `kick:${gconf.appId}`;
  glog.verbose("PUBSUB register", { ch });
  usingPubsub.subscribe(ch, handleKick);
};

export const pubKickUser = (userId, worldServerId, reason) => {
  const ch = `kick:${worldServerId}`;
  const msgObj = {
    userId,
    reason,
    authServerId: gconf.appId,
  };

  return usingPubsub.publish(ch, JSON.stringify(msgObj));
};
