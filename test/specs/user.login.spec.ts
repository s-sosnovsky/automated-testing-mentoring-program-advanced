import pageFactory from "../pageobjects/pageFactory";
import LoginSteps from "../steps/LoginSteps";
import { assert } from "chai";

beforeEach("login", async () => {
  await LoginSteps.loginWithDefaultCredentials();
});

afterEach("logout", async () => {
  await LoginSteps.logout();
});

describe("Check navigation items number", () => {
  it("should login with valid user credentials", async () => {
      const expectedNumberOfNavButtons = 6;
    await pageFactory.homePage.userLogoimage.baseElement.waitForClickable();
    const actualNumberOfNavButtons =
      await pageFactory.homePage.navigationButtons.getCount();
    assert.equal(actualNumberOfNavButtons, expectedNumberOfNavButtons, `number of navigation menu buttons is ${actualNumberOfNavButtons} but expected ${expectedNumberOfNavButtons}`);
  });
});
