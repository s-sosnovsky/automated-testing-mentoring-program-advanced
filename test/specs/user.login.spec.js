const PageFactory = require("../pageobjects/pageFactory");
const { assert } = require("chai");
const firedBrowser = require("../wrapper/browser.config");

describe("Check navigation items number", () => {
  let testBrowser;
  let pageFactory;

  beforeEach("login", async () => {
    testBrowser = await firedBrowser.browser;
    pageFactory = new PageFactory(testBrowser);
    await pageFactory.loginPage.login(
      process.env.USER_LOGIN,
      process.env.USER_PASSWORD
    );
  });

  afterEach("logout", async () => {
    await pageFactory.homePage.logout();
    await testBrowser.deleteSession();
  });

  it("should login with valid user credentials", async () => {
    const expectedNumberOfNavButtons = 6;
    await pageFactory.homePage.userLogoimage.baseElement.waitForClickable({
      timeout: 15000,
    });
    const actualNumberOfNavButtons =
      await pageFactory.homePage.navigationButtons.getCount();
    assert.equal(
      actualNumberOfNavButtons,
      expectedNumberOfNavButtons,
      `number of navigation menu buttons is ${actualNumberOfNavButtons} but expected ${expectedNumberOfNavButtons}`
    );
  });
});
