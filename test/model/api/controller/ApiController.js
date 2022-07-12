const axios = require("axios");
const env = require("../../../data/api/env.json");
const fs = require("fs");
const path = require("path");
const ApiHelper = require("./ApiHelper");
const logger = require("../../../utils/helper/logger/logger.config")

class ApiController {
  constructor() {
    this.apiHelper = new ApiHelper();
    this.authorizationHeaders = {
      Authorization: env.token,
      "Content-Type": "application/json",
    };
    this.envPath = "../../../data/api/env.json";
  }

  async addDashBoard() {
    const dashboardUrl = `${env.baseUrl}/api/v1/${env.project_name}/dashboard`;
    const dashboardData = await this.apiHelper.getDasboardTemplate();
    const response = await axios.post(dashboardUrl, dashboardData, {
      headers: this.authorizationHeaders,
    });
    env.dashboardId = response.data.id;
    fs.writeFileSync(
      path.resolve(__dirname, this.envPath),
      JSON.stringify(env)
    );
    logger.info(`dashboard with name=${env.dashboard_name} and id=${env.dashboardId} created`)
    return response.data.id;
  }

  async addWidget() {
    const widgetUrl = `${env.baseUrl}/api/v1/${env.project_name}/widget`;
    const widgetData = await this.apiHelper.getWidgetTemplate();
    const response = await axios.post(widgetUrl, widgetData, {
      headers: this.authorizationHeaders,
    });
    env.widgetId = response.data.id;
    fs.writeFileSync(
      path.resolve(__dirname, this.envPath),
      JSON.stringify(env)
    );
    logger.info(`widget with name=${env.widget_name} and id=${env.widgetId} created`)
    return response.data.id;
  }

  async addWidgetToDashboard() {
    const dashboardUrl = `${env.baseUrl}/api/v1/${env.project_name}/dashboard/${env.dashboardId}/add`;
    const addWidgetToDashboardData =
      await this.apiHelper.getAddWidgetToDashboardTemplate();
    const response = await axios.put(dashboardUrl, addWidgetToDashboardData, {
      headers: this.authorizationHeaders,
    });
    logger.info(response.data.message)
    return response.data.message;
  }

  async deleteWidgetFromDashboard() {
    const dashboardUrl = `${env.baseUrl}/api/v1/${env.project_name}/dashboard/${env.dashboardId}/${env.widgetId}`;
    const response = await axios.delete(dashboardUrl, {
      headers: this.authorizationHeaders,
    });
    logger.info(response.data.message)
    return response.data.message;
  }

  async deleteDashboard() {
    const dashboardUrl = `${env.baseUrl}/api/v1/${env.project_name}/dashboard/${env.dashboardId}`;
    const response = await axios.delete(dashboardUrl, {
      headers: this.authorizationHeaders,
    });
    logger.info(response.data.message)
    return response.data.message;
  }
}

module.exports = ApiController;
