import { getChannel } from "./broker";

export const publishEvent = async (queue: string, payload: any) => {
  const channel = getChannel();
  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(payload)));
  console.log(`[Messaging] Event published to queue: ${queue}`);
};

export const publishScoreSubmittedEvent = async (payload: {
  gameId: string;
  score: number;
  submittedAt: string;
}) => {
  await publishEvent("score.submitted", {
    event: "ScoreSubmitted",
    data: payload,
  });
};
