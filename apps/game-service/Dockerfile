FROM node:18-alpine

RUN apk add --no-cache postgresql-client

WORKDIR /app

RUN npm install -g pnpm

COPY pnpm-workspace.yaml .
COPY turbo.json .
COPY package.json .
COPY pnpm-lock.yaml .

COPY apps/game-service apps/game-service
COPY packages/logger packages/logger
COPY packages/messaging packages/messaging
COPY packages/schemas packages/schemas
COPY packages/typescript-config packages/typescript-config

RUN pnpm install --frozen-lockfile

RUN pnpm --filter game-service db:generate

RUN pnpm --filter game-service... build

RUN chmod +x ./apps/game-service/docker-entrypoint.sh

WORKDIR /app/apps/game-service

ENTRYPOINT ["./docker-entrypoint.sh"]

# CMD ["pnpm", "start"]
