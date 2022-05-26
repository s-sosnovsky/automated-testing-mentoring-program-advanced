const HomePage = require("./home.page");
const LoginPage = require("./login.page");

class PageFactory {
  constructor(browser) {
    this.homePage = new HomePage(browser);
    this.loginPage = new LoginPage(browser)
  }
}

module.exports = PageFactory;
