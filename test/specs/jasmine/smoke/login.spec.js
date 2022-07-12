const PageFactory = require("../../../model/pageobjects/pageFactory");
const { assert } = require("chai");
const dockerConfig = require("../../../wrapper/browser");
let testBrowser;
let pageFactory;

describe("Check navigation items number", function () {
  beforeAll(async function () {
    testBrowser = await dockerConfig();
    pageFactory = new PageFactory(testBrowser);
  }, 25000);

  beforeEach(async function () {
    await pageFactory.loginPage.login("default", "1q2w3e");
  }, 25000);

  afterEach(async function () {
    await pageFactory.homePage.logout();
  }, 25000);

  afterAll(async function () {
    await testBrowser.deleteSession();
  }, 25000);

  it("should login with valid user credentials1", async function () {
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
  }, 25000);

  it("should login with valid user credentials2", async function () {
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
  }, 25000);
});


