/* eslint-disable @typescript-eslint/no-unused-vars */
import { LoggerLevels } from './../env/env.interface';
import { LoggerService } from '@nestjs/common';
import * as winston from 'winston';
import { ConfigService } from '@nestjs/config';
import * as chalk from 'chalk';
import { loggerSetting } from 'src/env/env.logger';

const { combine, timestamp, colorize, label, printf, errors, prettyPrint } = winston.format;

export class WinstonLogger implements LoggerService {
  private readonly loggerInstance: winston.Logger;
  constructor(loggerOptions: LoggerOptions) {
    this.loggerInstance = winston.createLogger({
      level: loggerSetting.LOGGER_LEVEL,
      format: errors({ stack: true }),
      transports: [
        new winston.transports.Console({
          format: combine(
            colorize(),
            label({ label: loggerOptions.name }),
            timestamp({
              format: 'YYYY-MM-DD hh:mm:ss',
            }),
            winston.format.ms(),
            printf(
              (info) =>
                `${chalk.yellow(`[pid:${process.pid}] [${info.timestamp}]`)} ${
                  info.level
                }: ${chalk.blue(`[${info.label}] `)}${chalk.cyan(info.message)} ${
                  info.stack ? `${info.ms}\n${chalk.redBright(info.stack)}` : `${info.ms}`
                }`,
            ),
          ),
        }),
        new winston.transports.File({
          level: 'error',
          filename: 'error.log',
          format: combine(
            label({ label: loggerOptions.name }),
            timestamp({
              format: 'YYYY-MM-DD hh:mm:ss',
            }),
            prettyPrint(),
          ),
        }),
      ],
    });
    this.loggerInstance.info('WinstonLogger initialized');
  }
  log(message: any, ...optionalParams: any[]) {
    this.loggerInstance.info(message);
  }
  error(message: any, ...optionalParams: any[]) {
    this.loggerInstance.error(message);
  }
  warn(message: any, ...optionalParams: any[]) {
    this.loggerInstance.warn(message);
  }
  debug?(message: any, ...optionalParams: any[]) {
    this.loggerInstance.debug(message);
  }
}

export type LoggerOptions = {
  name: string;
};
