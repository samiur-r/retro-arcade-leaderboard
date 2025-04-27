import * as scoreRepository from './repository';
import { publishScoreSubmittedEvent } from "@repo/messaging";

export const submitScore = async (gameId: string, score: number) => {
  const newScore = await scoreRepository.createScore({gameId, score});

  await publishScoreSubmittedEvent({
    gameId: newScore.gameId,
    score: newScore.score,
    submittedAt: newScore.createdAt.toISOString(),
  });

  return newScore;
};

export const fetchTopScores = async (gameId: string, limit = 10) => {
  return scoreRepository.getTopScoresByGameId(gameId, limit);
};

export const fetchAllScores = async () => {
  return scoreRepository.getAllScores();
};
