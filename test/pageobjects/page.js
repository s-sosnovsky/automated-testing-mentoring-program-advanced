// const browser = require("../wrapper/fired.browser.new");
const customLogger = require("../utils/helper/logger/logger.config");

class Page {
  baseUrl = "http://localhost:8080";

  constructor(browser) {
    this._browser = browser
  }

  async open(path) {
    customLogger.info(`Opening ${this.baseUrl}${path}`);
    return this._browser.url(`${this.baseUrl}${path}`);
  }
}

module.exports = Page;
