import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export interface Environment {
  appName: string;
  appPort: number;
  database: TypeOrmModuleOptions;
  [key: string]: any;
}

export type DatabaseSetting = Pick<Environment, 'database'>;

export type LoggerLevels = 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly';
