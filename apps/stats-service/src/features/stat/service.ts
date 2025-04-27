import * as statsRepository from './repository';

export const getAllStats = async () => {
  return statsRepository.getAllStats();
};

export const getStatsByGameId = async (gameId: string) => {
  return statsRepository.findStatsByGameId(gameId);
};

export const recordScoreFromEvent = async (
  gameId: string,
  newScore: number,
) => {
  const stats = await statsRepository.findStatsByGameId(gameId);

  if (!stats) {
    return statsRepository.createStats({
      gameId,
      totalPlays: 1,
      bestScore: newScore,
    });
  }

  const updatedTotalPlays = stats.totalPlays + 1;
  const updatedBestScore =
    newScore > stats.bestScore ? newScore : stats.bestScore;

  return statsRepository.updateStats(gameId, {
    totalPlays: updatedTotalPlays,
    bestScore: updatedBestScore,
  });
};
