require("dotenv").config();

const { multiremote } = require("webdriverio");
const dockerConfig = require('./browser.jasmine.config')

const browserConfiguration = async () => {
  return multiremote(await Promise.resolve(dockerConfig))
}

module.exports =  browserConfiguration;
