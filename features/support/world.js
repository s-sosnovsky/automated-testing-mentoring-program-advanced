const { setWorldConstructor } = require("cucumber");
const playwright = require('playwright');
let { RPWorld } = require('@reportportal/agent-js-cucumber');

class CustomWorld extends RPWorld{
    constructor(...args){
        super(...args);
    }

    async setDefaultPage(){
        const browser = await playwright.chromium.launch({
            headless: false,
        });
        const context = await browser.newContext();
        
        this.page = await context.newPage();
        
    }
}

setWorldConstructor(CustomWorld);