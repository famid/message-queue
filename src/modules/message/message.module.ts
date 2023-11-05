import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { BullModule } from '@nestjs/bull';
import { MessageQueue } from '../../queues/message-queue.queue';
import { EmailQueueModule } from '../../queues/define-queue/email-queue.module';

@Module({
  imports: [
    // BullModule.registerQueue({ name: 'emailQueue' }),
    EmailQueueModule,
    BullModule.registerQueue({
      name: 'message-queue',
    }),
  ],
  controllers: [MessageController],
  providers: [MessageService, MessageQueue],
})
export class MessageModule {}
