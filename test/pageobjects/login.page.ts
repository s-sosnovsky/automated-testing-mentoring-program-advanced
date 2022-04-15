import Page from "./page";
import BaseElement from "./base/wdio.base.element";

 export default class LoginPage extends Page {

  constructor() {
    super();
  }

  public get inputLogin() {
     return new BaseElement("Login", "[placeholder='Login']");
  }

  public get inputPassword() {
    return new BaseElement("Pass", "[placeholder='Password']");
  }

  public get btnLogin() {
    return new BaseElement("Login Button", 'button[type="submit"]');
  }

  public async login(login: string, password: string) {
    await this.open();
    await this.inputLogin.setValue(login);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }

  public async open() {
    return super.open("/");
  }
}
