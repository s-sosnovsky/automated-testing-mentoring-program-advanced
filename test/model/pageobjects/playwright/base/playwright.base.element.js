const customLogger = require("../../../../utils/helper/logger/logger.config")

class PlaywrightBaseElement {
  
  constructor(page, elementName, locator) {
    this._page = page;
    this._elementName = elementName
    this._element = this._page.locator(locator)
  }

  get baseElement() {
    return this._element
  }

  async click() {
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
    return this._element.type(value)
  }


}

module.exports = PlaywrightBaseElement;
