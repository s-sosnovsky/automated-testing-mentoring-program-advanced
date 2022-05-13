// const browser = require("../wrapper/fired.browser.new");
const customLogger = require("../utils/helper/logger/logger.config");

class Page {
  baseUrl = "http://192.168.0.101:8080";

  constructor(browser) {
    this._browser = browser
  }

  async open(path) {
    customLogger.info(`Opening ${this.baseUrl}${path}`);
    return this._browser.url(`${this.baseUrl}${path}`);
  }
}

module.exports = Page;
