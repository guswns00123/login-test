
const {createLogger, transports, format } = require("winston");
const {combine, timestamp, json, simple, colorize, printf, label} = format;

const printFormat = printf(({timestamp,label, level, message}) =>{
    return `${timestamp} [${label}] ${level} : ${message}`
});

const pringLogFormat = {
    file: combine(
    label({
        label: "백엔드 맛보기",
    }),
     
    timestamp({
        format : "YYYY-MM-DD HH:mm:dd"
    }),
    printFormat
    ),
    console: combine(
        colorize(),
        simple()
    )
     
};

const opts = {
    file: new transports.File({
        filename : "access.log",
        dirname : "./logs",
        level : "info",
        format : pringLogFormat.file,
    }),
    console : new transports.Console({
        level : "info",
        format : pringLogFormat.console,
    }) 
}

const logger = createLogger({
    transports: [opts.file],
});

if(process.env.NODE_ENV !== "production"){
    logger.add(opts.console);
}
logger.stream = {
    write: (message) => 
        logger.info(message),
};

module.exports = logger;