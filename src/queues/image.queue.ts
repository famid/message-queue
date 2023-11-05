import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('emailQueue')
export class EmailQueue {
  @Process()
  async processEmailJob(job: Job) {
    // Process email job logic here
    console.log('Processing email job', job.data);
  }
}

@Processor('imageQueue')
export class ImageQueue {
  @Process()
  async processImageJob(job: Job) {
    // Process image job logic here
    console.log('Processing image job', job.data);
  }
}
