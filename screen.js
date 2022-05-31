const puppeteer = require("puppeteer");
const capture = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.worldtimebuddy.com/");
  await page.screenshot({ path: "./screenshot.png" });
  await browser.close();
};
capture();