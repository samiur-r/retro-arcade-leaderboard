import config from '@/config';
import app from '@/app';
import {connectDatabase} from '@/libs/db';
import logger from '@repo/logger';

const startServer = async () => {
  try {
    await connectDatabase();
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
