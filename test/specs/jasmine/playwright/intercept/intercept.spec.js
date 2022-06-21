const { assert } = require("chai");
const { chromium } = require("playwright");

describe("Check navigation items number", function () {


  it("intercept and mock base url GET response", async function () {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    
    const mock = { name: "reportportal" };

    page.on("request", (request) => console.log(">> request:", request.method(), request.url()))

    page.on("response", (response) => console.log("<< response:", response.status(), response.url()))

    page.on("requestfinished", (r) =>
      r.response().then((response) =>
        response.json().then((result) => {
          assert.deepEqual(result, mock, "response is not as expected via mocking");
        })
      )
    );

    await page.route("http://localhost:8080", (route) => {
      route.fulfill({ body: JSON.stringify(mock) });
    });

    await page.goto("http://localhost:8080");
    await page.waitForTimeout(1000);

    await page.unroute("http://localhost:8080");

    await browser.close();


  }, 25000);
});
