const { When, Then, Before, After } = require("cucumber");
const logger = require("../../test/utils/helper/logger/logger.config");
const SlackService = require("../../integrations/SlackService");
const JiraService = require("../../integrations/JiraService");

const PageFactory = require("../../test/model/pageobjects/playwright/pageFactory");
const { assert } = require("chai");
let pageFactory;
const slackService = new SlackService();
let jiraService;


Before({ timeout: 30 * 1000 }, async function (scenario) {
  await this.setDefaultPage();
  pageFactory = new PageFactory(this.page);
  await pageFactory.loginPage.login("default", "1q2w3e");
  await slackService.sendMessage(`${scenario.pickle.name}: test started`);
  jiraService = new JiraService(scenario.pickle.name)
  await jiraService.changeStatus("running");
});

After({ timeout: 30 * 1000 }, async function (scenario) {
  await pageFactory.homePage.logout();
  await slackService.sendMessage(`${scenario.pickle.name}: test ended`);
  if (scenario.result.status === "passed") {
    await jiraService.changeStatus("passed");
  } else {
    await jiraService.changeStatus("failed");
    await jiraService.addComment(`${scenario.pickle.name} failed with stack: ${scenario.result.exception.stack}`);
  }
});

When("Bob goes to launches", { timeout: 30 * 1000 }, async function () {
  await pageFactory.homePage.openLaunches();
  await pageFactory.homePage.body.click();
});

When(
  "Bob opens {int} launch",
  { timeout: 30 * 1000 },
  async function (position) {
    await pageFactory.homePage.launchesLinks.clickElementWithPosition(position);
  }
);

Then(
  "Bob verifies launches headers",
  { timeout: 30 * 1000 },
  async function (table) {
    const headers = table.raw().map((array) => array[0]);
    const quantitiesMap = new Map();
    for (const header of headers) {
      logger.info(`header: ${header}`);
      const headerElement = await pageFactory.homePage.getLaunchesTableHeader(
        header
      );
      await headerElement.baseElement.waitFor({ state: "attached" });

      assert.isAbove(
        await headerElement.baseElement.count(),
        0,
        "element does not present in DOM"
      );

      quantitiesMap.set(header, await headerElement.baseElement.count());
    }
    this.quantitiesMap = quantitiesMap;
  }
);

Then(
  "Bob verifies launches headers quantity",
  { timeout: 30 * 1000 },
  async function (table) {
    const actual = this.quantitiesMap;
    const expected = new Map(table.rows());
    assert.isTrue(
      JSON.stringify(actual) == JSON.stringify(expected),
      "headers quantity is not as expected"
    );
  }
);
