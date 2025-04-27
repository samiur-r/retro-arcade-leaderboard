import { defineConfig } from "@playwright/test";

export const webPlaywrightConfig = defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  expect: {
    timeout: 5000,
  },
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL: process.env.BASE_URL || "http://localhost:3000",
    browserName: "chromium",
    headless: true,
    viewport: { width: 1280, height: 720 },
    trace: "on-first-retry",
    video: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  workers: process.env.CI ? 2 : undefined,
});
