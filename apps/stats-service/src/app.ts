import express, {type Express} from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

import {httpLogger} from '@/middlewares/httpLogger';
import corsOptions from '@/config/corsOptions';
import statRoute from '@/features/stat/route';

const app: Express = express();

app.use(helmet());
app.use(cors(corsOptions));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

app.use(express.json());
app.use(httpLogger);

app.use('/api/stat', statRoute);

export default app;
