import winston from "winston";

const customLogger = winston.createLogger({
  level: "debug",
  transports: [
    new winston.transports.Console({ level: "debug" }),
    new winston.transports.File({ filename: "combined.log", level: "debug" }),
  ],
  format: winston.format.simple(),
});

export default customLogger;
