FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY pnpm-workspace.yaml .
COPY turbo.json .
COPY package.json .
COPY pnpm-lock.yaml .

COPY apps/stats-service apps/stats-service
COPY packages/logger packages/logger
COPY packages/messaging packages/messaging
COPY packages/schemas packages/schemas
COPY packages/typescript-config packages/typescript-config

RUN pnpm install --frozen-lockfile

RUN pnpm --filter stats-service db:generate

RUN pnpm --filter stats-service... build

WORKDIR /app/apps/stats-service

CMD ["pnpm", "start"]
