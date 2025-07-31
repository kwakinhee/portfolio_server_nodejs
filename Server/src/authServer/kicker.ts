// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

import { EventEmitter } from "events";

import * as authPubsub from "./authPubsub";
import glog from "../commonlib/glog";

import { KICK_REASON } from "../commonlib/genum";

const eventMap = new Map();

// ----------------------------------------------------------------------------
// Public functions.
// ----------------------------------------------------------------------------

export const kick = (
  userId: Number,
  worldServerId: string,
  reason: KICK_REASON
) => {
  glog.info("kicking user ...", {
    userId,
    worldServerId,
    reason,
  });

  const em = new EventEmitter();
  eventMap.set(userId, em);

  const successPromise = new Promise((resolve) => {
    em.on("kickConfirmed", () => {
      resolve(true); // Successful.
    });
  });

  return authPubsub
    .pubKickUser(userId, worldServerId, reason)
    .then((numClients) => {
      if (numClients === 0) {
        // No subscribiers.
        glog.warn("kick published with no subscribiers", {
          userId,
          worldServerId,
        });

        return null;
      }

      // Wait for 3 seconds.
      const failPromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve(false); // Failed.  (Timed out.)
        }, 3000);
      });

      return Promise.race([successPromise, failPromise]).then((ok) => {
        if (!ok) {
          glog.warn("kick timed out", {
            userId,
            worldServerId,
          });
        }

        eventMap.delete(userId);

        return ok;
      });
    });
};

export const onKickConfirmed = (msgStr) => {
  glog.verbose("auth pubsub kick confirmed", {
    msgStr,
  });

  const msg = JSON.parse(msgStr);

  const userId = msg.userId;

  const em = eventMap.get(userId);
  if (!em) {
    glog.warn("kick confirmed but event not for user", { userId });
    return;
  }

  em.emit("kickConfirmed");
};
