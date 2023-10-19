import { createLogger,transports, format } from "winston";
import { ENVIRONMENT, LOG_DIRECTORY } from "./envVariables";
import * as fs from "fs";
import DailyRotateFile from "winston-daily-rotate-file";

if (!fs.existsSync(LOG_DIRECTORY)) {
  fs.mkdirSync(LOG_DIRECTORY);
}

const options = {
  file: {
    level: "debug",
    filename: LOG_DIRECTORY + "/%DATE%.log",
    datePattern: "YYYY-MM-DD",
    zippedArchive: true,
    timestamp: true,
    handleExceptions: true,
    humanReadableUnhandledException: true,
    prettyPrint: true,
    json: true,
    maxSize: "20m",
    colorize: true,
    maxFiles: "14d",
  },
};

var tsFormat = () => (new Date()).toLocaleTimeString();

export default createLogger({
  transports: [
    new transports.Console({
      stderrLevels: ["info", "error"],
      // format: format.combine(format.errors({stack: true}), format.prettyPrint()),
      format: format.simple(),
    }),
    // new transports.File({
    //   filename: LOG_DIRECTORY + "/%DATE%.log"
    // }),
    new DailyRotateFile(options.file)
  ],
  exceptionHandlers: [new DailyRotateFile(options.file)],
  exitOnError: false,
})
