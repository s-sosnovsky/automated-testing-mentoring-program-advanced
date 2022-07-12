const { chromium } = require("playwright");

const browser = async () => {
  return chromium.launch({
    headless: false,
    args: ["--start--maximized"],
    viewport: { width: 1920, height: 1080 },
  });
};

module.exports = browser;
