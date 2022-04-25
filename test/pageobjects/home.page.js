const Page = require("./page");
//const browser = require("../wrapper/fired.browser.new");
const WDIOBaseElement = require("./base/wdio.base.element");
const WDIOBaseCollection = require("./base/wdio.base.collection");

class HomePage extends Page {
  constructor(browser) {
    super(browser);
    this.url = "/";
    this._browser = browser;
  }
  async open() {
    return super.open(this.url);
  }

  get userLogoimage() {
    return new WDIOBaseElement(
      this._browser,
      "User Logo Image",
      "//div[contains(@class,'tooltip__tooltip-trigger')]//img[@alt='avatar']"
    );
  }

  get userBlockMenu() {
    return new WDIOBaseElement(
      this._browser,
      "User Block Menu",
      "//div[starts-with(@class,'userBlock__menu--')]"
    );
  }

  get navigationButtons() {
    return new WDIOBaseCollection(
      this._browser,
      "Navigation Buttons",
      'div[class^="sidebar__top-block"] > div a'
    );
  }

  async logout() {
    await this.userLogoimage.click();
    const isUserBlockMenuDisplayed =
      await this.userBlockMenu.baseElement.isDisplayed();
    if (!isUserBlockMenuDisplayed) {
      await this.userLogoimage.baseElement.waitForClickable({ timeout: 15000 });
      await this.userLogoimage.click();
    }
    await this.userBlockMenu.baseElement.isDisplayed();
    const logoutButton = await this.userBlockMenu.baseElement.$(
      "//div[text()='Logout']"
    );
    await logoutButton.isDisplayed();
    await logoutButton.click();
  }
}

module.exports = HomePage;
