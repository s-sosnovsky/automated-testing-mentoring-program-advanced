import pageFactory from "../pageobjects/pageFactory";
import { step } from "../utils/helper/reporter/reporter.decorator";

export default class LoginSteps {
  @step("login into reportportal with default user credentials")
  public static async loginWithDefaultCredentials() {
    pageFactory.loginPage.login(process.env.USER_LOGIN, process.env.USER_PASSWORD);
  }

  @step("login into reportportal with admin user credentials")
  public static async loginWithAdminCredentials() {
    pageFactory.loginPage.login(process.env.ADMIN_LOGIN, process.env.ADMIN_PASSWORD);
  }

  @step("logout from reportportal")
  public static async logout() {
    pageFactory.homePage.logout();
  }
}
