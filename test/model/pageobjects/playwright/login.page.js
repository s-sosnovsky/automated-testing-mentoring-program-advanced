const Page = require("./page");
const PlaywrightBaseElement = require("./base/playwright.base.element");

class LoginPage extends Page {

  constructor(page) {
    super(page);
    this.url = "/";
    this._page = page
  }

  get inputLogin() {
     return new PlaywrightBaseElement(this._page, "Login input", "[placeholder='Login']");
  }

  get inputPassword() {
    return new PlaywrightBaseElement(this._page, "Password input","[placeholder='Password']");
  }

  get btnLogin() {
    return new PlaywrightBaseElement(this._page, "Login Button", 'button[type="submit"]');
  }

  async login(login, password) {
    await this.open();
    await this.inputLogin.setValue(login);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
 }

  async open() {
    return super.open(this.url);
  }
}

module.exports = LoginPage;