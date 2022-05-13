const chromedriver = require('chromedriver');
const args = [
    "--port=4444"
   ];
const start = async () => {
    chromedriver.start(args);
}

const stop = async () => {
    chromedriver.stop();
}

module.exports ={start, stop}