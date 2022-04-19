import Page from "./page";
import WDIOBaseElement from "./base/wdio.base.element";
import WDIOBaseCollection from "./base/wdio.base.collection";

 export default class HomePage extends Page {
  public get userLogoimage() {
    return new WDIOBaseElement(
      "User Logo Image",
      "//div[contains(@class,'tooltip__tooltip-trigger')]//img[@alt='avatar']"
    );
  }

  public get userBlockMenu() {
    return new WDIOBaseElement(
      "User Block Menu",
      "//div[starts-with(@class,'userBlock__menu--')]"
    );
  }

  public get navigationButtons() {
    return new WDIOBaseCollection("Navigation Buttons", 'div[class^="sidebar__top-block"] > div a');
  }

  public async logout() {
    const isUserBlockMenuDisplayed =
      await this.userBlockMenu.baseElement.isDisplayed();
    if (!isUserBlockMenuDisplayed) {
      await this.userLogoimage.baseElement.waitForClickable();
      await this.userLogoimage.click();
    }
    const logoutButton = await this.userBlockMenu.baseElement.$(
      "//div[text()='Logout']"
    );
    await logoutButton.isDisplayed();
    await logoutButton.click();
  }
}
