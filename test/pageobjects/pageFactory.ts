import HomePage from "./home.page";
import LoginPage from "./login.page";

class PageFactory {
  homePage: HomePage;
  loginPage: LoginPage;

  constructor() {
    this.homePage = new HomePage();
    this.loginPage = new LoginPage()
  }
}

export default new PageFactory();
