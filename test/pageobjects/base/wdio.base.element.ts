import { ChainablePromiseElement } from "webdriverio";
import customLogger from "../../utils/helper/logger/logger.config";

export default class WDIOBaseElement {
  element: ChainablePromiseElement<WebdriverIO.Element>;
  elementName: string;
  locator: string;

  constructor(elementName: string, locator: string) {
    this.element = $(locator);
    this.elementName = elementName;
  }

  get baseElement() {
    return this.element;
  }

  async click() {
    await this.element.waitForClickable();
    customLogger.info(`Clicking on element: "${this.elementName}"`);
    return this.element.click();
  }

  async getText() {
    const elementText = this.element.getText();
    customLogger.info(`"${this.elementName}" element text is ${elementText}`);
    return elementText;
  }

  async setValue(value: string) {
    customLogger.info(`set value to the element: "${this.elementName}"`);
    return this.element.setValue(value);
  }
}
