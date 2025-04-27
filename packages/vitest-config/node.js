import { defineConfig } from "vitest/config";

export const nodeVitestConfig = defineConfig({
  test: {
    globals: true,
    environment: "node",
    setupFiles: ["@repo/vitest-config/setup/node-setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
  },
});
