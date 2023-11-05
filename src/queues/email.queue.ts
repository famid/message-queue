import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('emailQueue')
export class EmailQueue {
  @Process('email-job')
  async processEmailJob(job: Job) {
    // Process email job logic here
    console.log('Processing email job', job.data);
  }
}
