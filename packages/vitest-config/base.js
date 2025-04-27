import { defineConfig } from "vitest/config";

export const webVitestConfig = defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["@repo/vitest-config/setup/web-setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
  },
});
