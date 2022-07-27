const axios = require("axios");
const logger = require("../test/utils/helper/logger/logger.config");

class JiraService {
    constructor(issueKey) {
      this.issueKey = issueKey;
      this.issueUrl = `http://localhost:8080/rest/api/3/${issueKey}/transitions`;
      this.issueCommentUrl = `http://localhost:8080/rest/api/3/${issueKey}/comment`;
      this.token =  Buffer.from(decodeURIComponent("admin:password")).toString('base64');
      this.headers = {
        "Content-Type": "application/json",
        'Authorization': `Basic ${this.token}`
      };
    }
  
    async changeStatus(statusId) {
      const changeStatuseJson = JSON.stringify({transition: {id: statusId}})
      logger.info(`changing status of: ${statusId}`)
      await axios.post(this.issueUrl, changeStatuseJson, {
        headers: this.headers,
      });
      
    }

    async addComment(comment) {
      const commentJson = JSON.stringify({body: comment})
      logger.info(`sending comment to jira issue: ${this.issueKey}`)
      await axios.post(this.issueCommentUrl, commentJson, {
        headers: this.headers,
      });
      
    }
  }
  
  module.exports = JiraService;