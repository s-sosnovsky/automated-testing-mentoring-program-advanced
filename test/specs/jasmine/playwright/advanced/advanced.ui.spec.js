const PageFactory = require("../../../../model/pageobjects/playwright/pageFactory");
const { assert } = require("chai");
const chromiumBrowser = require("../../../../wrapper/playwright.chromium.config");
const PlaywrightScreenshotter = require("../../../../utils/helper/screenshotter/playwright.screenshot.utility");
const AdvancedActions = require("../../../../utils/actions/advanced.actions");

let page;
let browser;
let pageFactory;
let screenshotter;
let actions;

describe("Check navigation items number", function () {
  beforeAll(async function () {
    browser = await chromiumBrowser();
    page = await browser.newPage();
    pageFactory = new PageFactory(page);
    screenshotter = new PlaywrightScreenshotter(page);
    actions = new AdvancedActions(page);
  }, 25000);

  beforeEach(async function () {
    await pageFactory.loginPage.login("default", "1q2w3e");
  }, 25000);

  afterEach(async function () {
    await pageFactory.homePage.logout();
  }, 25000);

    it("resize dashboard", async function () {
      await pageFactory.dashboardPage.open();

      const firstDasboardContainer = await pageFactory.dashboardPage.dasboardContainers.getElementWithPosition(1);
      const secondDasboardContainer = await pageFactory.dashboardPage.dasboardContainers.getElementWithPosition(2);
      const firstDasboardResizeHandle = await pageFactory.dashboardPage.dasboardResizeHandles.getElementWithPosition(1);

      const firstPosition1 = await actions.getCentralizedPosition(firstDasboardContainer);
      const firstPosition2 = await actions.getCentralizedPosition(secondDasboardContainer);

      await actions.resizeElement(firstDasboardResizeHandle, 1000, 500);

      const secondPosition1 = await actions.getCentralizedPosition(firstDasboardContainer);
      const secondPosition2 = await actions.getCentralizedPosition(secondDasboardContainer);

      await screenshotter.takeScreenshot();

      await actions.resizeElement(firstDasboardResizeHandle, -1000, -500);

      await screenshotter.takeScreenshot();

      assert.notDeepEqual(firstPosition1, secondPosition1);
      assert.notDeepEqual(firstPosition2, secondPosition2);

    }, 25000);
});
