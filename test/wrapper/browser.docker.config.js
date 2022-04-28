module.exports = {
  firefoxBrowser: {
    maxInstances: 10,
    automationProtocol: "webdriver",
    hostname: "localhost",
    port: 4444,
    logLevel: "trace",
    capabilities: {
      browserName: "firefox",
      "moz:firefoxOptions": {
        args: ["--disable-gpu", "start-maximized"],
      },
    },
  },
  chromeBrowser: {
    maxInstances: 10,
    automationProtocol: "webdriver",
    hostname: "localhost",
    port: 4444,
    logLevel: "trace",
    capabilities: {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--disable-gpu", "start-maximized"],
      },
    },
  },
};

