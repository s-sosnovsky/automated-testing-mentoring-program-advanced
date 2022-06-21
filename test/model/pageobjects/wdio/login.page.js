const Page = require("./page");
const WDIOBaseElement = require("./wdio/base/wdio.base.element");

class LoginPage extends Page {

  constructor(browser) {
    super(browser);
    this.url = "/";
    this._browser = browser
  }

  get inputLogin() {
     return new WDIOBaseElement(this._browser, "Login input", "[placeholder='Login']");
  }

  get inputPassword() {
    return new WDIOBaseElement(this._browser, "Password input","[placeholder='Password']");
  }

  get btnLogin() {
    return new WDIOBaseElement(this._browser, "Login Button", 'button[type="submit"]');
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