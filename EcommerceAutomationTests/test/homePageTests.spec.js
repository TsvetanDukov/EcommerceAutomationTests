const homePage = require("../pageObjects/home.page")
const womenPage = require("../pageObjects/women.page")
const dressesPage = require("../pageObjects/dresses.page")
const tshirtsPage = require("../pageObjects/tshirts.page")
const contactPage = require("../pageObjects/contact.page")
const searchPage = require("../pageObjects/search.page")

describe("Home page Test Suite", () => {
    beforeEach(() => {
        browser.url("/");
        browser.maximizeWindow();
    });

    xit("Navigation bar links test",
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

    xit("Verify 'Contact us' link",
        () => {
            homePage.contactUsLink.click();
            expect(contactPage.pageTitle).toEqual("Contact us - My Store");
        });

    it("Test search field and search button",
        () => {
            //Verify that user is able to use search field
            expect(homePage.searchField.isDisplayed()).toBe(true);
            homePage.searchField.setValue("Dress");
            homePage.searchButton.click();
            expect(searchPage.pageTitle).toEqual("Search - My Store");
        })
});