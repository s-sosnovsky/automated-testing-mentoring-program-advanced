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
}

module.exports = FiredBrowser;
