const Page = require("./page");
const PlaywrightBaseCollection = require("./base/playwright.base.collection");
const env = require("../../../data/api/env.json")

class DashboardPage extends Page {
  constructor(page) {
    super(page);
    this.url = `/ui/#default_personal/dashboard/${env.dashboardId}`;
    this._page = page;
  }
  async open() {
    return super.open(this.url);
  }

  get dasboardContainers() {
    return new PlaywrightBaseCollection(
      this._page,
      "Resizable dasboards",
      "//div[contains(@class, 'widget__widget-container')]"
    );
  }

  get dasboardResizeHandles() {
    return new PlaywrightBaseCollection(
      this._page,
      "Resize dasboard handles",
      "//span[@class='react-resizable-handle react-resizable-handle-se']"
    );
  }
}

module.exports = DashboardPage;
