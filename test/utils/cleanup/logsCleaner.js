const fsextra = require("fs-extra");
const path = require("path");

const logsLocation = path.resolve("./combined.log");
const allureResultsLocation = path.resolve("allure-results/");
const allureReportLocation = path.resolve("allure-report/");
const screenshotsLocation = path.resolve("screenshots/");

fsextra.removeSync(logsLocation);
fsextra.removeSync(allureResultsLocation);
fsextra.removeSync(allureReportLocation);
fsextra.removeSync(screenshotsLocation);