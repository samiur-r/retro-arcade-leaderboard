import config from '@/config';
import app from '@/app';
import {connectDatabase} from '@/libs/db';
import logger from '@repo/logger';
import { connectBroker } from "@repo/messaging";
import { subscribeToScoreSubmitted } from "@/features/stat/service";

const startServer = async () => {
  try {
    await connectDatabase();
    await connectBroker(config.rabbitMQUrl);
    await subscribeToScoreSubmitted(); 

    logger.info('Connected to the database');

    app.listen(config.port, () => {
      logger.info(
        `🚀 Listening on ${config.port} with NODE_ENV=${config.nodeEnv} 🚀`,
      );
    });
  } catch (error) {
    logger.error('Error starting the server:', error);
    process.exit(1);
  }
};

startServer();
