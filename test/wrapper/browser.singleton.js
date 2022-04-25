class FiredBrowser {
  constructor(browser) {
    if (FiredBrowser._instance) {
      return FiredBrowser._instance
    }
    FiredBrowser._instance = this;
    this._browser = browser
    return this
  }

  get browser() {
    return this._browser
  }

  set browser(browser) {
    this._browser = browser;
  }

  async findElement(locator){
    return this._browser.$(locator)
  }

  async close(){
    return this._browser.deleteSession()
  }
}

module.exports = FiredBrowser;
