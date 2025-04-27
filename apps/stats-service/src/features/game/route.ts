import {Router, type Router as RouterType} from 'express';
import * as gameController from './controller';

const router: RouterType = Router();

router.get('/', gameController.getAllGamesHandler);
router.get('/:slug', gameController.getGameBySlugHandler);
router.post('/', gameController.createGameHandler);
router.delete('/:id', gameController.deleteGameHandler);

export default router;
