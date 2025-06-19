#!/bin/sh
set -e

echo "⏳ Waiting for PostgreSQL at $POSTGRES__HOST:$POSTGRES__PORT..."

until pg_isready -h "$POSTGRES__HOST" -p "$POSTGRES__PORT" -U "$POSTGRES_USER"; do
  sleep 2
done

echo "📜 Running migrations..."
pnpm prisma db push

echo "🌱 Running seed script..."
pnpm db:seed || true

echo "🚀 Starting game service"
exec pnpm start