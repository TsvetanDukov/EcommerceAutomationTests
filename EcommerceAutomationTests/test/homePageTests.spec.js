const homePage = require("../pageObjects/home.page")
const womenPage = require("../pageObjects/women.page")
const dressesPage = require("../pageObjects/dresses.page")
const tshirtsPage = require("../pageObjects/tshirts.page")
const contactPage = require("../pageObjects/contact.page")
const searchPage = require("../pageObjects/search.page")
const { assert } = require("chai")

describe("Home page Test Suite", () => {
    beforeEach(() => {
        browser.url("/");
        browser.maximizeWindow();
    });

    xit("Navigation bar links test",
        () => {
            //Verify that links from navigation panel are working properly
            homePage.clickOnWomenLink();
            assert.equal(womenPage.pageTitle, "Women - My Store", "Incorrect page title!");
            browser.back();
            homePage.clickOnDressesLink();
            assert.equal(dressesPage.pageTitle, "Dresses - My Store", "Incorrect page title!");
            browser.back();
            homePage.clickOnTshirtLink();
            assert.equal(tshirtsPage.pageTitle, "T-shirts - My Store", "Incorrect page title!");
        })

    xit("Verify 'Contact us' link",
        () => {
            //Verify that 'Contact us' link is working properly
            homePage.clickOnContactUsLink();
            assert.equal(contactPage.pageTitle, "Contact us - My Store", "Incorrect page title!");
        });

    it("Test search field and search button",
        () => {
            //Verify that user is able to use search field
            expect(homePage.searchField.isDisplayed()).toBe(true);
            homePage.enterTextInTheSearchField("Dress");
            homePage.pressSearchButton();
            assert.equal(searchPage.pageTitle, "Search - My Store", "Incorrect page!");
        })
});