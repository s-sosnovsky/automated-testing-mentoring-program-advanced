const PageFactory = require("../../../../model/pageobjects/playwright/pageFactory");
const { assert } = require("chai");
const chromiumBrowser = require("../../../../wrapper/playwright.chromium.config");
const PlaywrightScreenshotter = require("../../../../utils/helper/screenshotter/playwright.screenshot.utility");
const AdvancedActions = require("../../../../utils/actions/advanced.actions");
const ApiController = require("../../../../model/api/controller/ApiController");

let page;
let browser;
let pageFactory;
let screenshotter;
let actions;
let apiController;

describe("Check navigation items number", function () {
  beforeAll(async function () {
    apiController = new ApiController();
    await apiController.addDashBoard();
    await apiController.addWidget();
    await apiController.addWidgetToDashboard();
    browser = await chromiumBrowser();
    page = await browser.newPage();
    pageFactory = new PageFactory(page);
    screenshotter = new PlaywrightScreenshotter(page);
    actions = new AdvancedActions(page);
  }, 25000);

  afterAll(async function () {
    await apiController.deleteWidgetFromDashboard();
    await apiController.deleteDashboard();
  }, 25000);

  beforeEach(async function () {
    await pageFactory.loginPage.login("default", "1q2w3e");
  }, 25000);

  afterEach(async function () {
    await pageFactory.homePage.logout();
  }, 25000);

  it("resize dashboard hybrid", async function () {
    await pageFactory.dashboardPage.open();

    const firstDasboardContainer =
      await pageFactory.dashboardPage.dasboardContainers.getElementWithPosition(
        1
      );
    const firstDasboardResizeHandle =
      await pageFactory.dashboardPage.dasboardResizeHandles.getElementWithPosition(
        1
      );

    const firstPosition1 = await actions.getCentralizedPosition(
      firstDasboardContainer
    );

    await actions.resizeElement(firstDasboardResizeHandle, 1000, 500);

    const secondPosition1 = await actions.getCentralizedPosition(
      firstDasboardContainer
    );

    await screenshotter.takeScreenshot();

    await actions.resizeElement(firstDasboardResizeHandle, -1000, -500);

    await screenshotter.takeScreenshot();

    assert.notDeepEqual(firstPosition1, secondPosition1);
  }, 25000);
});
