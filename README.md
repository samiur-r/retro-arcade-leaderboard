
# 🎮 Retro Arcade Leaderboard Microservices

Welcome to **Retro Arcade Leaderboard** — a fullstack microservices project built to showcase scalable architecture, clean coding, and modern DevOps practices.

> Play classic games like Snake, Pong, Tetris — automatically track scores, stats, and leaderboards!

---

## 🚀 Tech Stack

- **Frontend**: Next.js 15 (App Router), TailwindCSS
- **Backend APIs**:
  - Express.js (TypeScript)
  - Prisma ORM + PostgreSQL (per service database)
- **Messaging**: RabbitMQ (via `@repo/messaging` library)
- **Monorepo**: TurboRepo + PNPM Workspaces
- **Dev Tools**: ts-node-dev, Turbo CLI, Docker (RabbitMQ)
- **Architecture**: Domain-Driven Clean Architecture (DDD)

---

## 🏛 Microservices Overview

| Service | Description |
|---------|-------------|
| **Game Service** | Manage games (Snake, Pong, Tetris) metadata |
| **Score Service** | Save and publish submitted game scores |
| **Stats Service** | Track total plays, best scores, and generate arcade stats |
| **Web App** | Frontend for users to play games and view leaderboards |

✅ Each service has its **own Prisma Client**  
✅ Communicates via **RabbitMQ events**  
✅ Fully **isolated**, **scalable**, and **future-ready**

---

## ⚙️ Project Structure

```
/apps
  /game-service
  /score-service
  /stats-service
  /web (Next.js frontend)

/packages
  /messaging (RabbitMQ wrapper)
  /logger (Winston logger)
  and more...  

turbo.json (TurboRepo config)
pnpm-workspace.yaml (PNPM monorepo config)
docker-compose.yml (RabbitMQ service)
```

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

---

### 2. Setup RabbitMQ

Run RabbitMQ via Docker:

```bash
docker compose up -d
```

- RabbitMQ Management UI: http://localhost:15672  
  (Username: `guest`, Password: `guest`)

---

### 3. Generate Prisma Clients

```bash
pnpm turbo run prisma:generate
```

✅ Generates Prisma Client inside each microservice locally.

---

### 4. Start Development Mode

```bash
pnpm turbo run dev
```

- Game Service: http://localhost:5001
- Score Service: http://localhost:5002
- Stats Service: http://localhost:5003
- Web App: http://localhost:3000

---

### 5. Play the Games 🎮

- Visit the Web App
- Play Snake, Pong, Tetris
- Submit scores
- View Leaderboards and Stats!

---

## 📦 Environment Variables

Each service expects a `.env` file with:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
RABBITMQ_URL=amqp://localhost
NEXT_PUBLIC_API_URL_GAME=http://localhost:5001
NEXT_PUBLIC_API_URL_SCORE=http://localhost:5002
NEXT_PUBLIC_API_URL_STATS=http://localhost:5003
```

✅ Adjust ports if you change service ports.

---

## 📈 Features

- 🛠️ True microservice architecture
- 📬 Event-driven communication via RabbitMQ
- 💾 Per-service PostgreSQL and Prisma Clients
- 🌐 Beautiful Web UI (Next.js + Tailwind)
- 📊 Dynamic leaderboards and arcade stats
- 🚀 TurboRepo-powered monorepo setup
- 🐳 Dockerized RabbitMQ for easy dev

---

## 🔥 Development Scripts

| Command | Description |
|---------|-------------|
| `pnpm turbo run dev` | Start all services in dev mode |
| `pnpm turbo run build` | Build all services |
| `pnpm turbo run prisma:generate` | Generate Prisma Clients for all services |
| `docker compose up` | Start RabbitMQ server |

---

## 📢 Future Enhancements

- Add more games
- Add "Top 10 scores" table per game
- Add "Achievements" (badges) based on player performance
- Add WebSocket for real-time updates

---

## 📜 License

MIT License