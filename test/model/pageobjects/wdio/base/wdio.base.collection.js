const customLogger = require("../../../../utils/helper/logger/logger.config");

class WDIOBaseCollection {
  constructor(browser, collectionName, locator) {
    this._browser = browser;
    this._collectionName = collectionName;
    this._locator = locator;
    this._collection = this._browser.$$(this._locator);
  }

  get baseCollection() {
    return this._collection;
  }

  async getCount() {
    const collectionCount = await this._collection.length;
    customLogger.info(
      `Count of "${this._collectionName}" is "${collectionCount}"`
    );
    return collectionCount;
  }

  async getTexts() {
    const arrayOfCollectionTexts = [];
    const collectionArray = await this._collection;
    for (let i = 0; i < collectionArray.length; i++) {
      let element = collectionArray[i];
      let elementText = await element.getText();
      arrayOfCollectionTexts.push(elementText);
    }
    customLogger.info(
      `Texts of "${this._collectionName}" are [${arrayOfCollectionTexts}]`
    );
    return arrayOfCollectionTexts;
  }

  async clickElementByText(textToClick) {
    const arrayOfElementTexts = await this.getTexts();
    customLogger.info(arrayOfElementTexts);
    const elementToClickIndex = arrayOfElementTexts.indexOf(textToClick);
    if (elementToClickIndex === -1) {
      throw new Error(`No element with [${textToClick}] text found!`);
    }
    customLogger.info(
      `Clicking "${textToClick}" text in "${this._collectionName}"`
    );
    return this._collection[elementToClickIndex].click();
  }

  async clickElementWithPosition(position){
    await this._collection[position].waitForClickable({timeout:15000});
    await this._collection[position].click();
  }
}

module.exports = WDIOBaseCollection;
