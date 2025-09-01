import winston from 'winston'
import { LOG_DB_URL } from './server.config.js';
import MongoDB from 'winston-mongodb';

const allowedTransports = [];
// The below transport configuration enables loggin on the console 
allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // Second argument to the combine method, which defines what is exactly going to be printed in log
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));
// The below transport configuration allows loggin on the Database
allowedTransports.push(new winston.transports.MongoDB({
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs',
}))

allowedTransports.push(new winston.transports.File({
    filename: `app.log`
}))


const logger = winston.createLogger({
    format: winston.format.combine(

        // First argument to the combine method is defining how we want the timestamp to come up
        winston.format.errors({ stack: true }),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // Second argument to the combine method, which defines what is exactly going to be printed in log
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),

    transports: allowedTransports
})

export default logger;