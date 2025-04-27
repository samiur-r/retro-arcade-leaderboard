import {Router, type Router as RouterType} from 'express';
import * as statsController from './controller';

const router: RouterType = Router();

router.get('/', statsController.getAllStatsHandler);
router.get('/:gameId', statsController.getStatsByGameIdHandler);

export default router;
