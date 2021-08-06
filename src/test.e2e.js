const { test, expect } = require('@playwright/test')

test.describe("Screenshot Testing", () => {
  test("compares screenshots for desktop, tablet and mobile screen", async ({ page }) => {
    await page.goto("https://playwright.dev/", {
      waitUntil: "networkidle",
    });
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot("snap.png", { threshold: 0.2 });
  });
});