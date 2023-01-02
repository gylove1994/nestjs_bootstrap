import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import envDev from './env/env.dev';
import envProd from './env/env.prod';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [process.env.ENV === 'dev' ? envDev : envProd],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
