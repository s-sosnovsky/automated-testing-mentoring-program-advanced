const customLogger = require("../../../../utils/helper/logger/logger.config");

class PlaywrightBaseCollection {
  constructor(page, collectionName, locator) {
    this._page = page;
    this._collectionName = collectionName;
    this._collection = this._page.locator(locator);
  }

  get baseCollection() {
    return this._collection;
  }

  async getCount() {
    const collectionCount = await this._collection.count();
    customLogger.info(
      `Count of "${this._collectionName}" is "${collectionCount}"`
    );
    return collectionCount;
  }

  async getElementWithPosition(position) {
    if(position < 1) throw new Error("should be integer starting from 1");
    const element = this._collection.nth(position - 1);
    await element.waitFor()
    return element;
  }

  async clickElementWithPosition(position){
    const element = await this.getElementWithPosition(position);
    customLogger.info(
      `Clicking on element "${this._collectionName}" with position "${position}"`
    );
    return await element.click();
  }
  
}

module.exports = PlaywrightBaseCollection;
