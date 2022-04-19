import firedBrowser from "../wrapper/fired.browser";
import customLogger from "../utils/helper/logger/logger.config";

export default class Page {
  readonly baseUrl = "http://localhost:8080";
  constructor() {}

  async open(path: string) {
    customLogger.info(`Opening ${this.baseUrl}${path}`);
    return firedBrowser
      .getInstance()
      .getBrowser()
      .url(`${this.baseUrl}${path}`);
  }
}
