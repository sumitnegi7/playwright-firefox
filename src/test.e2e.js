const { test, expect } = require('@playwright/test')

test.describe("Screenshot Testing", () => {
  test("compares screenshots for desktop, tablet and mobile screen", async ({ page }) => {
    await page.goto("https://www.manufacanalytics.com/", {
      waitUntil: "networkidle",
    });
    await page.waitForSelector("canvas", { state: "visible" });
    await page.evaluate(() => {
      (document.querySelector("canvas")).style.visibility = "hidden";
    });
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot("snap.png", { threshold: 0.2 });
  });
});