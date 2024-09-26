import winston, { format, transports } from 'winston';
import { FileTransportOptions } from 'winston/lib/winston/transports';

const { combine, timestamp, json } = format;


const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    json(),
  ),
  // defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new transports.File({ filename: 'error.log', level: 'error' } as FileTransportOptions),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

logger.add(new winston.transports.Console({
  format: winston.format.simple() as unknown as winston.Logform.Format,
}));

export const buildLogger = (service: string ) => {

  return {
    log: (message: string) => {
      logger.log('info', {message, service});
    },
    error: (message: string ) => {
      logger.error('error', {
        message, 
        service,
      });
    }
  }


}
