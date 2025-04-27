import { Request, Response } from "express";
import * as scoreService from "./service";

export const submitScoreHandler = async (req: Request, res: Response) => {
  const { gameId, score } = req.body;

  if (!gameId || typeof score !== "number") {
    return res.status(400).json({ success: false, message: "gameId and numeric score are required." });
  }

  try {
    const newScore = await scoreService.submitScore(gameId, score);
    res.status(201).json({ success: true, data: newScore });
  } catch (error) {
    console.error("[Score Controller] Error submitting score:", error);
    res.status(500).json({ success: false, message: "Failed to submit score." });
  }
};

export const getLeaderboardHandler = async (req: Request, res: Response) => {
  const { gameId } = req.params;
  const limit = parseInt(req.query.limit as string) || 10;

  if (!gameId) {
    return res.status(400).json({ success: false, message: "gameId param is required." });
  }

  try {
    const leaderboard = await scoreService.fetchTopScores(gameId, limit);
    res.status(200).json({ success: true, data: leaderboard });
  } catch (error) {
    console.error("[Score Controller] Error fetching leaderboard:", error);
    res.status(500).json({ success: false, message: "Failed to fetch leaderboard." });
  }
};
