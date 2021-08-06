/** @type {import('@playwright/test').PlaywrightTestConfig} */
const { devices } = require("@playwright/test");
const config = {
  testDir: process.cwd(),
  use: {
    baseURL: `http://localhost:${process.env.PORT}`,
    headless: true,
    ignoreHTTPSErrors: true,
  },
  timeout: 120000,
  projects: [
    {
      name: "Chromium Desktop",
      use: {
        browserName: "chromium",
        ...devices["Desktop Chrome"],
      },
      testMatch: "*.e2e.js",
    },

    // Test against different devices for visual tests.

    {
      name: "Firefox Desktop",
      use: {
        browserName: "firefox",
        ...devices["Desktop Firefox"],
    //    headless: false,
      },
           testMatch: "*.e2e.js",
    },

    {
      name: "Webkit Desktop",
      use: {
        browserName: "webkit",
        ...devices["Desktop Safari"],
      },
           testMatch: "*.e2e.js",
    },

    {
      name: "Webkit IPhone X",
      use: {
        browserName: "webkit",
        ...devices["iPhone X"],
      },
           testMatch: "*.e2e.js",
    },

    {
      name: "Chromium Desktop HiDPI",
      use: {
        browserName: "chromium",
        ...devices["Desktop Chrome HiDPI"],
      },
           testMatch: "*.e2e.js",
    },

    {
      name: "Webkit iPad",
      use: {
        browserName: "webkit",
        ...devices["iPad Pro 11"],
      },
      testMatch: "*.e2e.js",
    },
  ],

};

module.exports = config;
