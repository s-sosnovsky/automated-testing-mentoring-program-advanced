const PageFactory = require("../../../model/pageobjects/pageFactory");
const { assert } = require("chai");
const dockerConfig = require("../../../wrapper/browser");
let testBrowser;
let pageFactory;
const headersList = require("../../../data/headers.list");

describe("Check header names in launches table", function () {
  beforeAll(async function () {
    testBrowser = await dockerConfig();
    pageFactory = new PageFactory(testBrowser);
    await pageFactory.loginPage.login("default", "1q2w3e");
    await pageFactory.homePage.openLaunches();
  }, 25000);

  afterAll(async function () {
    await pageFactory.homePage.logout();
    await testBrowser.deleteSession();
  }, 25000);

  headersList.forEach((header) => {
    it("should be able to play a Song", async function () {
      const headerElement = await pageFactory.homePage.getLaunchesTableHeader(
        header
      );
      assert.deepEqual(
        await headerElement.baseElement.waitForDisplayed(),
        [true],
        "element is not displayed"
      );
    }, 25000);
  });
});

describe("Check header names in separate launch table", function () {
  beforeAll(async function () {
    testBrowser = await dockerConfig();
    pageFactory = new PageFactory(testBrowser);
    await pageFactory.loginPage.login("default", "1q2w3e");
    await pageFactory.homePage.openLaunches();
    await pageFactory.homePage.body.click();
    await pageFactory.homePage.launchesLinks.clickElementWithPosition(1);
  }, 25000);

  afterAll(async function () {
    await pageFactory.homePage.logout();
    await testBrowser.deleteSession();
  }, 25000);

  headersList.forEach((header) => {
    it("should be able to play a Song", async function () {
      const headerElement = await pageFactory.homePage.getLaunchesTableHeader(
        header
      );
      assert.deepEqual(
        await headerElement.baseElement.waitForDisplayed(),
        [true],
        "element is not displayed"
      );
    }, 25000);
  });
});
