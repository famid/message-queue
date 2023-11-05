import { registerAs } from '@nestjs/config';
export default registerAs('queue', () => ({
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    db: process.env.REDIS_DB,
    password: process.env.REDIS_PASSWORD,
  },
  queues: {
    emailQueue: {
      name: 'emailQueue',
      options: {
        // Add your Bull options here
      },
    },
    imageQueue: {
      name: 'imageQueue',
      options: {
        // Add your Bull options here
      },
    },
    // messageQueue: {
    //   name: 'message-queue',
    //   options: {
    //     // Add your Bull options here
    //   },
    // },
    // Add more queues as needed
  },
}));
