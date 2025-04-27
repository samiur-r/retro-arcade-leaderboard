import { getChannel } from "./broker";

export const subscribeToQueue = async (
  queue: string,
  handler: (message: any) => Promise<void>,
) => {
  const channel = getChannel();
  await channel.assertQueue(queue, { durable: true });

  channel.consume(queue, async (msg) => {
    if (msg !== null) {
      const content = JSON.parse(msg.content.toString());
      await handler(content);
      channel.ack(msg);
    }
  });

  console.log(`[Messaging] Subscribed to queue: ${queue}`);
};
