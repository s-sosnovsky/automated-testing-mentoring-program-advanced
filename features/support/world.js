const { setWorldConstructor } = require("@cucumber/cucumber");
const playwright = require('playwright');

class CustomWorld {
    constructor(){
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