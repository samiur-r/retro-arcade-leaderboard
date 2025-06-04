FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY . .

RUN pnpm install --frozen-lockfile

RUN pnpm --filter web... build

WORKDIR /app/apps/web

CMD ["pnpm", "start"]
