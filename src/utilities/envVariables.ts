import "dotenv/config";

export const ENVIRONMENT = process.env.ENVIRONMENT || "DEV";
export const IS_PRODUCTION = ENVIRONMENT === "PRODUCTION";
export const LOG_DIRECTORY = process.env.LOG_DIRECTORY || "/logs";