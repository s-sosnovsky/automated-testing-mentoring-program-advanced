import { ChainablePromiseArray, ElementArray } from "webdriverio";
import customLogger from "../../utils/helper/logger/logger.config";

export default class WDIOBaseCollection {
  collection: ChainablePromiseArray<ElementArray>;
  collectionName: string;
  locator: string;
  constructor(collectionName: string, locator: string) {
    this.collection = $$(locator);
    this.collectionName = collectionName;
  }

  get baseCollection() {
    return this.collection;
  }
  async getCount(): Promise<number> {
    const collectionCount = await this.collection.length;
    customLogger.info(`Count of "${this.collectionName}" is "${collectionCount}"`);
    return collectionCount;
  }
  async getTexts(): Promise<string[]> {
    const arrayOfCollectionTexts: string[] = [];
    const collectionArray = await this.collection;
    for (let i = 0; i < collectionArray.length; i++) {
      let element = collectionArray[i];
      let elementText = await element.getText();
      arrayOfCollectionTexts.push(elementText);
    }
    customLogger.info(
      `Texts of "${this.collectionName}" are [${arrayOfCollectionTexts}]`
    );
    return arrayOfCollectionTexts;
  }
  async clickElementByText(textToClick: string): Promise<void> {
    const arrayOfElementTexts = await this.getTexts();
    customLogger.info(arrayOfElementTexts);
    const elementToClickIndex = arrayOfElementTexts.indexOf(textToClick);
    if (elementToClickIndex === -1) {
      throw new Error(`No element with [${textToClick}] text found!`);
    }
    customLogger.info(
      `Clicking "${textToClick}" text in "${this.collectionName}"`
    );
    return this.collection[elementToClickIndex].click();
  }
}
