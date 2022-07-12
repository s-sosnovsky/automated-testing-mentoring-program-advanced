const logger = require("../../../utils/helper/logger/logger.config");
const { faker } = require("@faker-js/faker");
const env = require("../../../data/api/env.json");
const fs = require("fs");
const path = require("path");

class ApiHelper {

  async getDasboardTemplate() {
    const dashboardName = faker.random.word();
    env.dashboard_name = dashboardName;
    fs.writeFileSync(
      path.resolve(__dirname, "../../../data/api/env.json"),
      JSON.stringify(env)
    );
    logger.info("dashboard name: " + dashboardName);

    return JSON.stringify({
      description: faker.random.word(),
      name: dashboardName,
      share: true,
    });
  }

  async getWidgetTemplate() {
    const widgetName = "widget" + faker.random.numeric(5);
    env.widget_name = widgetName;
    fs.writeFileSync(
      path.resolve(__dirname, "../../../data/api/env.json"),
      JSON.stringify(env)
    );
    logger.info("widget name: " + widgetName);
    return JSON.stringify({
      contentParameters: {
        contentFields: [
          "statistics$executions$total",
          "statistics$executions$passed",
          "statistics$executions$failed",
          "statistics$executions$skipped",
          "statistics$defects$product_bug$pb001",
          "statistics$defects$automation_bug$ab001",
          "statistics$defects$system_issue$si001",
          "statistics$defects$no_defect$nd001",
          "statistics$defects$to_investigate$ti001",
        ],
        itemsCount: 50,
        widgetOptions: {
          zoom: false,
          timeline: "launch",
          viewMode: "area-spline",
        },
      },
      description: "string",
      filterIds: [15],
      name: widgetName,
      share: true,
      widgetType: "statisticTrend",
    });
  }

  async getAddWidgetToDashboardTemplate() {
    return JSON.stringify({
      addWidget: {
        share: true,
        widgetId: env.widgetId,
        widgetName: env.widget_name,
        widgetPosition: {
          positionX: 0,
          positionY: 0,
        },
        widgetSize: {
          height: 5,
          width: 5,
        },
        widgetType: "statisticTrend",
      },
    });
  }
}

module.exports = ApiHelper;
