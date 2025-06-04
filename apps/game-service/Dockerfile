FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY . .

RUN pnpm install --frozen-lockfile

RUN pnpm --filter game-service db:generate

RUN pnpm --filter game-service... build

WORKDIR /app/apps/game-service

CMD ["pnpm", "start"]
