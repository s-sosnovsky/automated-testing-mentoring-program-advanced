const fsextra = require("fs-extra");
const path = require("path");

const removeLogs = (function () {
  const logsLocation = path.resolve("./combined.log");
  const allureResultsLocation = path.resolve("allure-results/");
  fsextra.removeSync(logsLocation);
  fsextra.removeSync(allureResultsLocation);
})();
