import * as amqp from "amqplib";

let connection: amqp.ChannelModel;
let channel: amqp.Channel;

export const connectBroker = async (url: string, retries = 10, delay = 5000) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      connection = await amqp.connect(url);
      channel = await connection.createChannel();
      console.log("[Messaging] Connected to RabbitMQ");
      return;
    } catch (err: any) {
      console.warn(
        `[Messaging] Failed to connect to RabbitMQ (attempt ${attempt}/${retries}): ${err.message}`
      );
      if (attempt === retries) {
        throw new Error(
          "Failed to connect to RabbitMQ after multiple attempts."
        );
      }
      await new Promise((res) => setTimeout(res, delay));
    }
  }
};

export const getChannel = (): amqp.Channel => {
  if (!channel) {
    throw new Error(
      "RabbitMQ channel is not initialized. Call connectBroker() first."
    );
  }
  return channel;
};

export const closeBroker = async () => {
  await channel?.close();
  await connection?.close();
};
