const PageFactory = require("../../test/model/pageobjects/pageFactory");
const { assert } = require("chai");
const dockerConfig = require("../../test/wrapper/browser");
const headers = ["passed","to investigate"];

describe("Player", function () {
  let testBrowser;
  let pageFactory;

  // beforeEach(async function () {}, 15000);

  beforeAll(async function () {
    testBrowser = await dockerConfig();
    pageFactory = new PageFactory(testBrowser);
    await pageFactory.loginPage.login("default", "1q2w3e");
    await pageFactory.homePage.openLaunches();
  }, 25000);

  // afterEach(async function () {}, 15000);

  afterAll(async function () {
    await pageFactory.homePage.logout();
    await testBrowser.deleteSession();
  }, 25000);

  headers.forEach((header) => {
    it("should be able to play a Song", async function () {
     const headerElement = await pageFactory.homePage.getLaunchesTableHeader(header);
     await headerElement.baseElement.waitForClickable({timeout: 15000});
    }, 25000);
  });

  headers.forEach((header) => {
    it("should be able to play a Song", async function () {
     const headerElement = await pageFactory.homePage.getLaunchesTableHeader(header);
     await headerElement.baseElement.waitForClickable({timeout: 15000});
    }, 25000);
  });
});
