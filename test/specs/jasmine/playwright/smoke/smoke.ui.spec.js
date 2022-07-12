const PageFactory = require("../../../../model/pageobjects/playwright/pageFactory");
const { assert } = require("chai");
const chromiumBrowser = require("../../../../wrapper/playwright.chromium.config");
const PlaywrightScreenshotter = require("../../../../utils/helper/screenshotter/playwright.screenshot.utility");

let page;
let browser;
let pageFactory;
let screenshotter;

describe("Check navigation items number", function () {
  beforeAll(async function () {
    browser = await chromiumBrowser();
    page = await browser.newPage();
    pageFactory = new PageFactory(page);
    screenshotter = new PlaywrightScreenshotter(page);
  }, 25000);

  beforeEach(async function () {
    await pageFactory.loginPage.login("default", "1q2w3e");
  }, 25000);

  afterEach(async function () {
    await pageFactory.homePage.logout();
  }, 25000);

  it("should login with valid user credentials1", async function () {

    const expectedNumberOfNavButtons = 6;

    await pageFactory.homePage.userLogoimage.baseElement.waitFor();
    const actualNumberOfNavButtons =
      await pageFactory.homePage.navigationButtons.getCount();
    assert.equal(
      actualNumberOfNavButtons,
      expectedNumberOfNavButtons,
      `number of navigation menu buttons is ${actualNumberOfNavButtons} but expected ${expectedNumberOfNavButtons}`
    );
    await screenshotter.takeScreenshot();
  }, 25000);
});
