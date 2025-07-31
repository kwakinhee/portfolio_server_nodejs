// -------------------------------------------------------------------------------------------------
// 사용자가 자세한 error 정보를 남기기 위해 정의.
// -------------------------------------------------------------------------------------------------

import glog from "./glog";
import { GErrorCode } from "./gerrorCode";
export { GErrorCode };

export class GError extends Error {
  public readonly name: string;
  public readonly stack: string;

  constructor(
    public readonly message: string,
    public readonly gcode: GErrorCode,
    public readonly extra?: any,
    stack?: string
  ) {
    super(message);
    this.name = this.constructor.name;

    if (stack) {
      glog.warn("[TEMP] Overwrite error stack:", { origin: this.stack });
      this.stack = stack;
    }

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, GError.prototype);

    // Verify gcode.
    if (gcode === undefined) {
      glog.error("invalid-gerror-code");
      if (this.stack) {
        glog.error("stack dump ...", { stack: this.stack });
      }
      return;
    }

    // Print stack if provided.
    if (stack) {
      glog.warn(`[${message}]\n${stack}`);
    }
  }
}
