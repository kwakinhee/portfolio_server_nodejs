// ----------------------------------------------------------------------------
// 로그 설정 , 파일 관리 , 출력.
// ----------------------------------------------------------------------------

import { createLogger, format, Logger, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import gconf from "./gconf";
import { SPLAT } from "triple-beam";
import { GError } from "./gerror";
import path from "path";

const { combine, colorize, timestamp, printf, json } = format;

const stringifiedJsonConsolePrintFormat = printf((info) => {
  return `${info.timestamp} - ${info.level}: ${info.message} ${
    info[SPLAT] ? JSON.stringify(info[SPLAT]) : ""
  }`;
});

/**
 *
 * @param filename 로테이션 파일의 prefix
 * @param savedir 파일 저장소 디렉터리
 */
function newLogger(filename: string, savedir: string): Logger {
  // winston 패키지를 이용한 Log 출력. https://www.npmjs.com/package/winston
  return createLogger({
    transports: [
      new transports.Console({
        // loglevel { "error": 0, "warn": 1, "info": 2, "http": 3, "verbose": 4, "debug": 5, "silly": 6}
        // 적용된 loglevel 이하인 로그만 출력 설정.
        level: gconf.get("log.console.level") || "verbose",
        handleExceptions: false,
        format: combine(
          colorize(),
          timestamp({
            //format: 'MM/DD HH:mm:ss.SSS',
            format: "MM/DD HH:mm:ss",
          }),
          // timestampColorize({ color: 'gray' }),
          stringifiedJsonConsolePrintFormat
        ),
      }),

      // winston-daily-rotate-file 로그 파일 관리. https://www.npmjs.com/package/winston-daily-rotate-file
      new DailyRotateFile({
        maxFiles: "30d",
        maxSize: "20m",
        dirname: savedir,
        filename: filename,
        level: gconf.get("log.file.level") || "info",
        // extension: '.json',
        handleExceptions: false,
        datePattern: gconf.get("log.file.datePattern") || "YYYY-MM-DD-HH",
        format: combine(timestamp(), json()),
      }),
    ],
  });
}

declare type JsonLike = { [key: string]: any };
export class GLog {
  logger: Logger;

  constructor(savedir: string = "./log") {
    savedir = path.join(gconf.log.baseDir, savedir);
    this.logger = newLogger(gconf.processName, savedir);
  }

  verbose(message: string, data?: JsonLike): void {
    this.logger.verbose(message, data);
  }

  debug(message: string, data?: JsonLike): void {
    this.logger.debug(message, data);
  }

  info(message: string, data?: JsonLike): void {
    this.logger.info(message, data);
  }

  error(message: string, data?: JsonLike): void {
    this.logger.error(message, data);
  }

  exception(message: string, error: Error | GError): void {
    if (error instanceof GError) {
      this.logger.error(message, error);
    } else {
      this.logger.error(message, {
        error: error.message,
        stack: error.stack,
      });
    }
  }

  warn(message: string, data?: JsonLike): void {
    this.logger.warn(message, data);
  }

  setConsoleLevel(newLevel: string): void {
    this.logger.transports[0].level = newLevel;
  }

  setFileLevel(newLevel: string): void {
    this.logger.transports[1].level = newLevel;
  }
}

const logger = new GLog();
export default logger;
