const Page = require("./page");
const WDIOBaseElement = require("./base/wdio.base.element");
const WDIOBaseCollection = require("./base/wdio.base.collection");

class HomePage extends Page {
  constructor(browser) {
    super(browser);
    this.url = "/";
    this._browser = browser;
    this.launchesTableHeader = null;
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

  get launchesMenuItem() {
    return new WDIOBaseElement(
      this._browser,
      "Launches menu item button",
      "//a[@href='#default_personal/launches']"
    );
  }

  get launchesLinks(){
    return new WDIOBaseCollection(
      this._browser,
      "Launches Links",
      "//div[contains(@class,'itemInfo__main-info')]"
    );
  }

  get body(){
    return new WDIOBaseElement(
      this._browser,
      "Launches menu item button",
      "//body"
    )
  }

  async getLaunchesTableHeader(header) {
    return new WDIOBaseElement(
      this._browser,
      `Launches Table Header ${header}`,
      `//span[contains(@class, 'headerCell__title-full')][text()='${header}']`
    );
  }

  async logout() {
    await this.userLogoimage.baseElement.waitForClickable({ timeout: 15000 });
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

  async openLaunches() {
    await this.launchesMenuItem.baseElement.waitForClickable({
      timeout: 15000,
    });
    await this.launchesMenuItem.click();
  }

}

module.exports = HomePage;
