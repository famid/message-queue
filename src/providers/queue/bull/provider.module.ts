import { BullModule } from '@nestjs/bull';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { BullQueueConfigModule } from '../../../config/queue/bull/config.module';
import { QueueConfigService } from '../../../config/queue/bull/config.service';

// @Module({
//   imports: [
//     BullModule.forRootAsync({
//       imports: [ConfigModule, BullQueueConfigModule],
//       useFactory: (configService: ConfigService) => {
//         const queueConfig = {
//           redis: {
//             host: 'localhost',
//             port: parseInt('7056'),
//             password: 'eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81',
//           },
//           queues: {
//             emailQueue: {
//               name: 'emailQueue',
//               options: {
//                 // Add your Bull options here
//               },
//             },
//             imageQueue: {
//               name: 'imageQueue',
//               options: {
//                 // Add your Bull options here
//               },
//             },
//             // Add more queues as needed
//           },
//         };
//         console.log('port: ', queueConfig.redis.port);
//         console.log('Redis Configuration:', queueConfig); // Log the Redis configuration
//         return queueConfig;
//       },
//       inject: [ConfigService],
//     }),
//   ],
// })

@Module({
  imports: [
    BullModule.forRootAsync({
      imports: [ConfigModule, BullQueueConfigModule],
      useFactory: async (
        configService: ConfigService,
        queueConfigService: QueueConfigService,
      ) => {
        const queueConfig = queueConfigService.config;
        console.log('port: ', queueConfig.redis.port, typeof queueConfig);
        console.log('Redis Configuration:', queueConfig); // Log the Redis configuration
        return queueConfig;
      },
      inject: [ConfigService, QueueConfigService],
    }),
  ],
})
export class BullQueueProviderModule {}
