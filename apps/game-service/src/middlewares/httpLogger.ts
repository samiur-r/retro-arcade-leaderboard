import {Request, Response, NextFunction} from 'express';
import logger from '@repo/logger';

export function httpLogger(req: Request, res: Response, next: NextFunction) {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    const {method, originalUrl} = req;
    const {statusCode} = res;

    logger.http(`${method} ${originalUrl} ${statusCode} - ${duration}ms`);
  });

  next();
}
