import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { EmailQueue } from '../email.queue';

@Module({
  imports: [BullModule.registerQueue({ name: 'emailQueue' })],
  providers: [EmailQueue],
  exports: [BullModule],
})
export class EmailQueueModule {}
