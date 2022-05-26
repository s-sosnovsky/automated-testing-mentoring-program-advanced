"use strict";

module.exports = {
    diff: true,
    reporter: 'allure-mocha',
    timeout: 60000,
    ui: 'bdd',
    spec: 'test/specs/mocha/**/*.js',
    reporterOption:{
        "reporterEnabled": "allure-mocha",
        "allureMochaReporterOptions": {
          "resultsDir": "./allure-results"
        }
    }
};