import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { WinstonLogger } from './logger/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new WinstonLogger({ name: 'Nest Application' }),
  });
  const configService = app.get(ConfigService);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: configService.get<number>('appPort'),
    },
  });
  await app.startAllMicroservices();
  const logger = new Logger('Bootstrap');
  logger.log(
    `${configService.get<string>(
      'appName',
    )} microservice is running on port:${configService.get<number>('appPort')}`,
  );
}

bootstrap();
