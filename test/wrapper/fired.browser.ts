/**
 * browser singleton
 */

class FiredBrowser {
  readonly firedBrowser: WebdriverIO.Browser;
  private static instance: FiredBrowser;

  private constructor(browser: WebdriverIO.Browser) {
    this.firedBrowser = browser;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new FiredBrowser(browser);
    }
    return this.instance;
  }

  public getBrowser() {
    this.firedBrowser.maximizeWindow();
    return this.firedBrowser;
  }
}

export default FiredBrowser;
