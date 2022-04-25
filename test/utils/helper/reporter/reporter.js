const allure = require("allure-mocha/runtime")

const addStep = async (name) => {
    allure.epic(name)
  };

module.exports = {addStep}