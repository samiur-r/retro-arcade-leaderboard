import { defineConfig } from "@playwright/test";

export const nodePlaywrightConfig = defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  expect: {
    timeout: 5000,
  },
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL: process.env.BASE_URL || "http://localhost:5000",
    trace: "on-first-retry",
  },
  workers: process.env.CI ? 2 : undefined,
});
