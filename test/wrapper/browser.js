require("dotenv").config();

const { multiremote } = require("webdriverio");
const FiredBrowser = require("./browser.singleton");
const dockerConfig = require('./browser.docker.config')

/**
 * wdio runner config
 */
const browserConfiguration = async () => {
  return new FiredBrowser(await multiremote(await Promise.resolve(dockerConfig))).browser
}
 const rawBrowser = browserConfiguration();


module.exports = rawBrowser;
