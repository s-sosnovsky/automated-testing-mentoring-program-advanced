const HomePage = require("./home.page");
const LoginPage = require("./login.page");
const DashboardPage = require("./dasboard.page")

class PageFactory {
  constructor(page) {
    this.homePage = new HomePage(page);
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
  }
}

module.exports = PageFactory;
