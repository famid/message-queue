import { QueueConfigService } from './config.service';
import configuration from './configuration';
import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        REDIS_HOST: Joi.string().default('test'),
        REDIS_PORT: Joi.string().default('test'),
        REDIS_DB: Joi.string().default('test'),
        REDIS_PASSWORD: Joi.string().default('test'),
      }),
    }),
  ],
  providers: [ConfigService, QueueConfigService],
  exports: [ConfigService, QueueConfigService],
})
export class DianaSmsConfigModule {}
