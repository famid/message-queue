import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('message-queue')
export class MessageQueue {
  @Process('message-job')
  async processEmailJob(job: Job) {
    // Process email job logic here
    console.log('Processing message job', job.data);
  }
}
