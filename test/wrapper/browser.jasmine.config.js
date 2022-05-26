module.exports = {
  chromeBrowser: {
    // maxInstances: 10,
    // maxInstancesPerCapability: 10,
    // automationProtocol: "webdriver",
    // hostname: "192.168.0.101",
    // port: 4444,
    // logLevel: "trace",
    framework: 'jasmine',
    capabilities: {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--disable-gpu", "start-fullscreen"],
      },
    },
  },
};

