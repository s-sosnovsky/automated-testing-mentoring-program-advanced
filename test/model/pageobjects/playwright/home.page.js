const Page = require("./page");
const PlaywrightBaseElement = require("./base/playwright.base.element");
const PlaywrightBaseCollection = require("./base/playwright.base.collection");

class HomePage extends Page {
  constructor(page) {
    super(page);
    this.url = "/";
    this._page = page;
  }
  async open() {
    return super.open(this.url);
  }

  get userLogoimage() {
    return new PlaywrightBaseElement(
      this._page,
      "User Logo Image",
      "//div[contains(@class,'tooltip__tooltip-trigger')]//img[@alt='avatar']"
    );
  }

  get userBlockMenu() {
    return new PlaywrightBaseElement(
      this._page,
      "User Block Menu",
      "//div[starts-with(@class,'userBlock__menu--')]"
    );
  }

  get navigationButtons() {
    return new PlaywrightBaseCollection(
      this._page,
      "Navigation Buttons",
      'div[class^="sidebar__top-block"] > div a'
    );
  }

  get launchesMenuItem() {
    return new PlaywrightBaseElement(
      this._page,
      "Launches menu item button",
      "//a[@href='#default_personal/launches']"
    );
  }

  get launchesLinks(){
    return new PlaywrightBaseCollection(
      this._page,
      "Launches Links",
      "//div[contains(@class,'itemInfo__main-info')]"
    );
  }

  get body(){
    return new PlaywrightBaseElement(
      this._page,
      "Launches menu item button",
      "//body"
    )
  }

  async getLaunchesTableHeader(header) {
    return new PlaywrightBaseElement(
      this._page,
      `Launches Table Header ${header}`,
      `//span[contains(@class, 'headerCell__title-full')][text()='${header}']`
    );
  }

  async logout() {
    await this.userLogoimage.baseElement.waitFor();
    await this.userLogoimage.click();
    await this.userBlockMenu.baseElement.waitFor();
    const logoutButton = await this.userBlockMenu.baseElement.locator(
      "//div[text()='Logout']"
    );
    await logoutButton.click();
  }

  async openLaunches() {
    await this.launchesMenuItem.click();
  }

}

module.exports = HomePage;
