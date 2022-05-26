const PageFactory = require("../../../jasmine/ddt/pageobjects/pageFactory");
const { assert } = require("chai");
const dockerConfig = require("../../../wrapper/browser")

describe("Check navigation items number", async () => {
  let testBrowser;
  let pageFactory;

  before("login", async () => {
    testBrowser = await dockerConfig()
    pageFactory = new PageFactory(testBrowser);
  });

  beforeEach("login", async () => {
    await pageFactory.loginPage.login("default", "1q2w3e");
  });

  afterEach("logout", async () => {
    await pageFactory.homePage.logout();
  });

  after("logout", async () => {
    await testBrowser.deleteSession();
  });

  it("should login with valid user credentials3", async () => {
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

  it("should login with valid user credentials4", async () => {
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
