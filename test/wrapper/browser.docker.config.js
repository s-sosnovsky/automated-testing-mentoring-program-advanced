module.exports = {
  firefoxBrowser: {
    maxInstances: 10,
    maxInstancesPerCapability: 10,
    automationProtocol: "webdriver",
    hostname: "192.168.0.101",
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
    maxInstancesPerCapability: 10,
    automationProtocol: "webdriver",
    hostname: "192.168.0.101",
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

