import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class QueueConfigService {
  constructor(private configService: ConfigService) {}

  get config() {
    // const queueConfig = {
    //   redis: {
    //     host: 'localhost',
    //     port: 7056,
    //     password: 'eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81',
    //   },
    //   queues: {
    //     emailQueue: {
    //       name: 'emailQueue',
    //       options: {
    //         // Add your Bull options here
    //       },
    //     },
    //     imageQueue: {
    //       name: 'imageQueue',
    //       options: {
    //         // Add your Bull options here
    //       },
    //     },
    //     // Add more queues as needed
    //   },
    // };
    //
    // return queueConfig;
    return this.configService.get('queue');
  }
}
// export class QueueConfigService implements SharedBullConfigurationFactory {
//   constructor(private configService: ConfigService) {}
//   createSharedConfiguration(): QueueOptions {
//     return this.configService.get('queue');
//   }
// }
