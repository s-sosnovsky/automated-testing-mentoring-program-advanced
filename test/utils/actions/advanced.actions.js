const logger = require("../helper/logger/logger.config");

class AdvancedActions {
  constructor(page) {
    this._page = page;
  }

  async scrollToElement(element) {
    return element.scrollIntoViewIfNeeded();
  }

  async jsClick(element) {
    return element.elementevaluate((node) => {node.click()});
  }

  async dragAndDrop(source, target) {
    return this._page.dragAndDrop(source, target);
  }

  async resizeElement(element, x, y) {
    await element.waitFor();
    await element.hover();
    await this._page.mouse.down();
    await this._page.mouse.move(x, y);
    await this._page.mouse.up();
  }

  async getCentralizedPosition(element) {
    const position = await element.boundingBox();
    logger.info(
      `Position of element "${element}" is: { x position.x}, y: ${position.y}, width: ${position.width}, height: ${position.height} }`
    );
    return position;
  }
}

module.exports = AdvancedActions;
