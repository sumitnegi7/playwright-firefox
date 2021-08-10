/** @type {import('@playwright/test').PlaywrightTestConfig} */
const { devices } = require("@playwright/test");
const config = {
  testDir: process.cwd(),
  testMatch: "*.e2e.js",
  use: {
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
    },

    // Test against different devices for visual tests.

    {
      name: "Firefox Desktop",
      use: {
        browserName: "firefox",
        ...devices["Desktop Firefox"],
        userAgent: undefined,
      },
    },

    {
      name: "Webkit Desktop",
      use: {
        browserName: "webkit",
        ...devices["Desktop Safari"],
      }, 
    },

    {
      name: "Webkit IPhone X",
      use: {
        browserName: "webkit",
        ...devices["iPhone X"],
      },  
    },

    {
      name: "Chromium Desktop HiDPI",
      use: {
        browserName: "chromium",
        ...devices["Desktop Chrome HiDPI"],
      },  
    },

    {
      name: "Webkit iPad",
      use: {
        browserName: "webkit",
        ...devices["iPad Pro 11"],
      },
    },
  ],

};

module.exports = config;
