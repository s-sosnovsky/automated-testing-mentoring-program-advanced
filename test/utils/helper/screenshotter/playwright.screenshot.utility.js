const logger = require("../logger/logger.config");

class PlaywrightScreenshotter {
  constructor(page) {
    this._page = page;
  }

  async takeScreenshot() {
    const date = new Date();
    const pathToFile = `./screenshots/screenshot_${date
      .toISOString()
      .replaceAll(":", "_")}.png`;
    logger.info(`Saving screenshot to ${pathToFile}`);
    return this._page.screenshot({ path: pathToFile, fullPage: true });
  }
}

module.exports = PlaywrightScreenshotter;
