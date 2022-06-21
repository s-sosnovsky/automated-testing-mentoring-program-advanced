const customLogger = require("../../../../utils/helper/logger/logger.config");

class WDIOBaseElement {
  
  constructor(browser, elementName, locator) {
    this._browser = browser;
    this._elementName = elementName
    this._element = this._browser.$(locator)
  }

  get baseElement() {
    return this._element
  }

  async click() {
    await this._element.waitForClickable({ timeout: 15000 });
    customLogger.info(`Clicking on element: "${this._elementName}"`);
    return this._element.click();
  }

  async getText() {
    const elementText = this._element.getText();
    customLogger.info(`"${this._elementName}" element text is ${elementText}`);
    return elementText;
  }

  async setValue(value) {
    customLogger.info(`set value to the element: "${this._elementName}"`);
    return this._element.setValue(value);
  }
}

module.exports = WDIOBaseElement;
