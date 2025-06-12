FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY pnpm-workspace.yaml .
COPY turbo.json .
COPY package.json .
COPY pnpm-lock.yaml .

COPY apps/web apps/web
COPY packages/logger packages/logger
COPY packages/messaging packages/messaging
COPY packages/schemas packages/schemas
COPY packages/typescript-config packages/typescript-config
COPY packages/ui packages/ui
COPY packages/playwright-config packages/playwright-config
COPY packages/vitest-config packages/vitest-config

RUN pnpm install --frozen-lockfile

RUN pnpm --filter web... build

WORKDIR /app/apps/web

CMD ["pnpm", "start"]
