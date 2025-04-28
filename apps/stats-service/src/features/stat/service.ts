import * as statsRepository from './repository';
import { getChannel } from "@repo/messaging";

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

export const handleScoreSubmitted = async (payload: { gameId: string; score: number }) => {
  const { gameId, score } = payload;

  return recordScoreFromEvent(gameId, score);
};

export const subscribeToScoreSubmitted = async () => {
  const channel = getChannel();
  const queue = "score.submitted";

  await channel.assertQueue(queue, { durable: true });

  channel.consume(queue, async (message) => {
    if (message) {
      const payload = JSON.parse(message.content.toString());

      console.log("[Stats Service] Received ScoreSubmitted Event:", payload);

      await handleScoreSubmitted(payload.data);

      channel.ack(message);
    }
  });

  console.log(`[Messaging] Subscribed to queue: ${queue}`);
};
