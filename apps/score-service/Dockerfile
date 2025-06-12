FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY pnpm-workspace.yaml .
COPY turbo.json .
COPY package.json .
COPY pnpm-lock.yaml .

COPY apps/score-service apps/score-service
COPY packages/logger packages/logger
COPY packages/messaging packages/messaging
COPY packages/schemas packages/schemas
COPY packages/typescript-config packages/typescript-config

RUN pnpm install --frozen-lockfile

RUN pnpm --filter score-service db:generate

RUN pnpm --filter score-service... build

WORKDIR /app/apps/score-service

CMD ["pnpm", "start"]
