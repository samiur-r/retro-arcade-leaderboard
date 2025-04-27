import { Router, type Router as RouterType } from 'express';
import * as scoreController from "./controller";

const router: RouterType = Router();

router.post("/", scoreController.submitScoreHandler);
router.get("/:gameId", scoreController.getLeaderboardHandler);

export default router;

