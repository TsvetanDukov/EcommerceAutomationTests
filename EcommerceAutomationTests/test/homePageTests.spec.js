const homePage = require("../pageObjects/home.page")
const womenPage = require("../pageObjects/women.page")
const dressesPage = require("../pageObjects/dresses.page")
const tshirtsPage = require("../pageObjects/tshirts.page")

describe("Home page Test Suite", () => {
    beforeEach(() => {
        browser.url("/");
    })
    it("Navigation bar links test",
        () => {
            //Verify that links from navigation panel are working properly
            homePage.womenLink.click();
            expect(womenPage.pageTitle).toEqual("Women - My Store");
            browser.back();
            homePage.dressesLink.click();
            expect(dressesPage.pageTitle).toEqual("Dresses - My Store");
            browser.back();
            homePage.tshirtsLink.click();
            expect(tshirtsPage.pageTitle).toEqual("T-shirts - My Store");
        })
})