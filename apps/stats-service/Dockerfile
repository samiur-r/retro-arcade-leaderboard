FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY . .

RUN pnpm install --frozen-lockfile

RUN pnpm --filter stats-service db:generate

RUN pnpm --filter stats-service build

WORKDIR /app/apps/stats-service

CMD ["pnpm", "start"]
