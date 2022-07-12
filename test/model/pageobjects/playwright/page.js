// const customLogger = require("../../utils/helper/logger/logger.config");
class Page {
  baseUrl = "http://localhost:8080";

  constructor(page) {
    this._page = page
  }

  async open(path) {
    // customLogger.info(`Opening ${this.baseUrl}${path}`);
    return this._page.goto(`${this.baseUrl}${path}`);
  }
}

module.exports = Page;
