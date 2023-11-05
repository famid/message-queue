import { Injectable } from '@nestjs/common';
import { SharedBullConfigurationFactory } from '@nestjs/bull';
import { QueueOptions } from 'bull';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class QueueConfigService implements SharedBullConfigurationFactory {
  constructor(private configService: ConfigService) {}
  createSharedConfiguration(): QueueOptions {
    return this.configService.get('bull-queue');
  }
}
