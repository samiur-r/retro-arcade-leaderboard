# Turborepo Clean Microservices

A high-performance **Turborepo** monorepo containing multiple applications and packages for the Micro Services ecosystem.

Built with love using:

- 🏎️ **Turborepo** — lightning-fast monorepo management
- 🖥️ **Next.js**, **Remix**, **Vite**, **Express** — multiple frontend and backend apps
- 🛠️ **Vitest** and **Playwright** — modern testing setup
- 🎨 **Custom ESLint and Prettier configs** — shared across apps
- ⚡ **Husky** and **lint-staged** — fast and safe git commits

---

## 📁 Project Structure

```plaintext
apps/
  api/          → Express backend server
  web/          → Next.js web application

packages/
  @repo/eslint-config/         → Shared ESLint config
  @repo/logger/                → Shared isomorphic logger
  @repo/playwright-config/     → Shared Playwright config
  @repo/schemas/               → Shared Zod schemas (types)
  @repo/typescript-config/     → Shared TypeScript configs
  @repo/ui/                    → Shared React UI components
  @repo/vitest-config/         → Shared Vitest config
  @repo/prettier-config/             → Shared Prettier config
```

---

## 🚀 Getting Started

First, install all dependencies:

```bash
pnpm install
```

Then, run development servers:

```bash
pnpm dev
```

Build all apps and packages:

```bash
pnpm build
```

Run lint across all apps/packages:

```bash
pnpm lint
```

Run tests:

```bash
pnpm test
```

---

## 🧹 Git Hooks

We use **Husky** and **lint-staged** to automatically format and lint changed files before commits.

If you install dependencies, make sure to re-install husky hooks:

```bash
pnpm prepare
```

---

## 🧪 Testing

- **Vitest** is used for unit testing across all apps and packages.
- **Playwright** is used for end-to-end (E2E) testing for frontend and backend apps.

Each app/package can define its own `vitest.config.ts` and `playwright.config.ts` based on shared configurations.

---

## 🛠 Monorepo Tooling

This monorepo uses [Turborepo](https://turbo.build/repo) to manage tasks efficiently across all apps and packages.

### Available scripts

| Script        | Description                           |
| :------------ | :------------------------------------ |
| `pnpm dev`    | Start all dev servers                 |
| `pnpm build`  | Build all apps and packages           |
| `pnpm lint`   | Lint all apps and packages            |
| `pnpm test`   | Run all tests (vitest and playwright) |
| `pnpm format` | Format all files using Prettier       |

---

## ✨ Tech Stack Summary

- **Frontend:** Next.js, TailwindCss
- **Backend:** Express (Node.js)
- **ORM:** Prisma
- **Testing:** Vitest, Playwright
- **Linting:** ESLint (Flat Config), Prettier
- **Type Checking:** TypeScript
- **Monorepo Management:** Turborepo
- **Commit Hooks:** Husky, lint-staged

---

## 🤝 Contributing

We welcome contributions!

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Create a Pull Request 🚀

---

## 📄 License

This project is licensed under the MIT License.

---
