FROM node:18-alpine

RUN apk add --no-cache postgresql-client

WORKDIR /app

RUN npm install -g pnpm

COPY . .

RUN pnpm install --frozen-lockfile

RUN pnpm --filter game-service db:generate

RUN pnpm --filter game-service... build

RUN chmod +x ./apps/game-service/docker-entrypoint.sh

WORKDIR /app/apps/game-service

ENTRYPOINT ["./docker-entrypoint.sh"]

CMD ["pnpm", "start"]
