FROM node:18-alpine AS base

WORKDIR /app

RUN npm install -g pnpm

COPY . .

RUN pnpm install --frozen-lockfile

RUN pnpm --filter web build

FROM node:18-alpine AS runner

WORKDIR /app

RUN npm install -g pnpm

COPY --from=base /app/apps/web/ ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/packages ./packages

EXPOSE 3000

CMD ["pnpm", "start"]
