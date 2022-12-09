const axios = require("axios");
const logger = require("../test/utils/helper/logger/logger.config");

class SlackService {
    constructor() {
      this.url = "https://hooks.slack.com/my-app/my-app";
      this.headers = {
        "Content-Type": "application/json",
      };
    }
  
    async sendMessage(message) {
      const messageJson = JSON.stringify({text: message})
      logger.info(`sending message to slack: ${message}`)
      await axios.post(this.url, messageJson, {
        headers: this.headers,
      });
      
    }
  }
  
  module.exports = SlackService;