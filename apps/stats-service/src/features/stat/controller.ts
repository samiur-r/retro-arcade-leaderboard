import {Request, Response} from 'express';
import * as statsService from './service';

export const getAllStatsHandler = async (req: Request, res: Response) => {
  try {
    const stats = await statsService.getAllStats();
    res.status(200).json({success: true, data: stats});
  } catch (error) {
    console.error('[Stats Controller] Error fetching all stats:', error);
    res.status(500).json({success: false, message: 'Failed to fetch stats.'});
  }
};

export const getStatsByGameIdHandler = async (req: Request, res: Response) => {
  const {gameId} = req.params;

  if (!gameId) {
    return res
      .status(400)
      .json({success: false, message: 'gameId is required.'});
  }

  try {
    const stats = await statsService.getStatsByGameId(gameId);
    if (!stats) {
      return res
        .status(404)
        .json({success: false, message: 'Stats not found for the game.'});
    }
    res.status(200).json({success: true, data: stats});
  } catch (error) {
    console.error('[Stats Controller] Error fetching stat by ID:', error);
    res.status(500).json({success: false, message: 'Failed to fetch stat.'});
  }
};
