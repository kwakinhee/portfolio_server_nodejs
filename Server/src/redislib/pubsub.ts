// -------------------------------------------------------------------------------------------------
// https://www.npmjs.com/package/ioredis
// -------------------------------------------------------------------------------------------------

import Redis from "ioredis";
import glog from "../commonlib/glog";
import { Service } from "typedi";

class SubRedis {
  private readonly msgHandlers;
  private readonly subConn: Redis;

  constructor(redisConnCfg) {
    this.msgHandlers = {};
    this.subConn = new Redis(redisConnCfg);

    this.subConn.on("message", (ch, msg) => {
      const handler = this.msgHandlers[ch];
      if (!handler) {
        glog.warn("redis-pubsub: no handler registered", {
          ch,
          msg,
        });

        return;
      }

      handler(msg);
    });
  }

  subscribe(ch, handler) {
    if (this.msgHandlers[ch]) {
      glog.warn("redis-pubsub: duplicate ch/handler", {
        ch,
      });
    }

    this.subConn.subscribe(ch);
    this.msgHandlers[ch] = handler;

    glog.info("redis-pubsub: subscribing ...", {
      ch,
    });
  }

  quit() {
    return this.subConn.quit();
  }
}

@Service()
export default class Pubsub {
  private pubConn: Redis;
  private subConn: SubRedis;

  init(redisConnCfg) {
    this.pubConn = new Redis(redisConnCfg);
    this.subConn = new SubRedis(redisConnCfg);
  }

  //private constructor() {}

  publish(ch: string, msg) {
    return this.pubConn.publish(ch, msg);
  }

  subscribe(ch: string, handler) {
    this.subConn.subscribe(ch, handler);
  }

  quit() {
    glog.info("redis-pubsub: quiting");
    return Promise.all([this.pubConn.quit(), this.subConn.quit()]);
  }
}
