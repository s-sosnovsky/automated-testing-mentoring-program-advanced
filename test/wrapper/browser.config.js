require("dotenv").config();
const { multiremote } = require("webdriverio");
const FiredBrowser = require("./browser.singleton");

/**
 * wdio runner config
 */
const browserConfiguration = async () => {
  return await multiremote({
    myChromeBrowser: {
      capabilities: {
        browserName: "chrome",
        "goog:chromeOptions": {
          args: ["start-fullscreen"],
        },
      },
    },
    // myFirefoxBrowser: {
    //   capabilities: {
    //     browserName: "edge",
    //     "ms:edgeOptions": {
    //       args: ["--start-maximized"],
    //     },
    //   },
    // },
  });
};

const rawBrowser = browserConfiguration();

const browser = new FiredBrowser(rawBrowser);

module.exports = browser;
