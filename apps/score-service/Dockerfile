FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY . .

RUN pnpm install --frozen-lockfile

RUN pnpm --filter score-service db:generate

RUN pnpm --filter score-service... build

WORKDIR /app/apps/score-service

CMD ["pnpm", "start"]
