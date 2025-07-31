const signals: NodeJS.Signals[] = ["SIGINT", "SIGTERM", "SIGUSR2"];

export function registerGracefulShutdown(callback: (err?: Error) => void) {
  /**
   * Gracefully shutdown on uncaught errors
   */
  process.on("uncaughtException", (err) => {
    console.log(`Uncaught exception occured. ${err}`);
    callback(err);
  });

  signals.forEach((signal) => process.once(signal, () => callback()));
}

export function retry<T = any>(
  cb: Function,
  maxRetries: number = 3,
  errorWhiteList: any[] = [],
  retries: number = 0
) {
  return new Promise<T>((resolve, reject) => {
    cb()
      .then(resolve)
      .catch((e) => {
        if (
          errorWhiteList.indexOf(e.constructor) !== -1 &&
          retries++ < maxRetries
        ) {
          setTimeout(() => {
            retry<T>(cb, maxRetries, errorWhiteList, retries)
              .then(resolve)
              .catch((e2) => reject(e2));
          }, Math.floor(Math.random() * Math.pow(2, retries) * 400));
        } else {
          reject(e);
        }
      });
  });
}
