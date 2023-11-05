import { registerAs } from '@nestjs/config';
export default registerAs('bull-queue', () => ({
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    db: process.env.REDIS_DB,
    password: process.env.REDIS_PASSWORD,
  },
  prefix: 'bull-queue',
  defaultJobOptions: {
    attemps: 3,
    removeOnComplete: false,
    backoff: {
      type: 'exponential',
      delay: 1000,
    },
  },
}));
