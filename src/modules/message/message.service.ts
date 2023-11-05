import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class MessageService {
  // constructor(@InjectQueue('message-queue') private queue: Queue) {}
  //
  // async sendMessage(message: string) {
  //   await this.queue.add('message-job', {
  //     text: message,
  //   });
  constructor(
    @InjectQueue('message-queue') private readonly messageQueue: Queue,
    @InjectQueue('emailQueue') private readonly emailQueue: Queue,
  ) {}
  // }

  async addToEmailQueue(data: any) {
    console.log('before sending email....');
    // await this.emailQueue.add(data);
    await this.emailQueue.add('email-job', {
      data,
    });
  }
  async addToMessageQueue(data: any) {
    console.log('before sending message....');
    await this.messageQueue.add('message-job', {
      data,
    });
  }
}
