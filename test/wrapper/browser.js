require("dotenv").config();

const { multiremote } = require("webdriverio");
const dockerConfig = require('./browser.docker.config')

const browserConfiguration = async () => {
  return multiremote(await Promise.resolve(dockerConfig))
}

module.exports =  browserConfiguration;
