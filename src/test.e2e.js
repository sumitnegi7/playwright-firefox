const { test, expect } = require('@playwright/test')

test.describe("Screenshot Testing", () => {
  test("compares screenshots for desktop, tablet and mobile screen", async ({ page }) => {
    await page.goto("https://www.manufacanalytics.com/", {
      waitUntil: "networkidle",
    }); // #ref https://www.manufacanalytics.com/ uses babylon.js 3D cube which is constantly spinning so we don't want to take its snapshot so hiding canvas which contains the cube
    await page.waitForSelector("canvas", { state: "visible" });
    await page.evaluate(() => {
      (document.querySelector("canvas")).style.visibility = "hidden"; // Not hiding canvas takes screenshots in firefox but it is a blank page
    });
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot("snap.png", { threshold: 0.2 });
  });
});