import * as amqp from "amqplib";

let connection: amqp.ChannelModel;
let channel: amqp.Channel;

export const connectBroker = async (url: string) => {
  connection = await amqp.connect(url);
  channel = await connection.createChannel();
  console.log("[Messaging] Connected to RabbitMQ");
};

export const getChannel = (): amqp.Channel => {
  if (!channel) {
    throw new Error(
      "RabbitMQ channel is not initialized. Call connectBroker() first.",
    );
  }
  return channel;
};

export const closeBroker = async () => {
  await channel?.close();
  await connection?.close();
};
