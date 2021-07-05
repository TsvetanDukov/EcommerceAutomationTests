const homePage = require("../pageObjects/home.page")
const womenPage = require("../pageObjects/women.page")
const dressesPage = require("../pageObjects/dresses.page")
const tshirtsPage = require("../pageObjects/tshirts.page")
const contactPage = require("../pageObjects/contact.page")
const searchPage = require("../pageObjects/search.page")
const orderPage = require("../pageObjects/order.page")
const search = require("../testData/searchFieldData")
const { assert } = require("chai")

describe("Home page Test Suite", () => {
    beforeEach(() => {
        browser.maximizeWindow();
    });

    it("Navigation bar links test",
        () => {
            //Verify that links from navigation panel are working properly
            homePage.open();
            homePage.clickOnWomenLink();
            assert.equal(womenPage.pageTitle, "Women - My Store", "Incorrect page title!");
            browser.back();
            homePage.clickOnDressesLink();
            assert.equal(dressesPage.pageTitle, "Dresses - My Store", "Incorrect page title!");
            browser.back();
            homePage.clickOnTshirtLink();
            assert.equal(tshirtsPage.pageTitle, "T-shirts - My Store", "Incorrect page title!");
        });

    it("Verify 'Contact us' link",
        () => {
            //Verify that 'Contact us' link is working properly
            homePage.open();
            homePage.clickOnContactUsLink();
            assert.equal(contactPage.pageTitle, "Contact us - My Store", "Incorrect page title!");
        });

    it("Test search field and search button",
        () => {
            //Verify that user is able to use search field
            homePage.open();
            expect(homePage.searchField.isDisplayed()).toBe(true);
            //Enter search data through external data file
            homePage.enterTextInTheSearchField(search.userInput);
            browser.pause(2000)
            homePage.pressSearchButton();
            assert.equal(searchPage.pageTitle, "Search - My Store", "Incorrect page!");
        });

    it("Verify phone number from page navigation bar",
        () => {
            homePage.open();
            expect(homePage.headerPhoneNumber.isDisplayed()).toBe(true);
            assert.equal(homePage.HeaderPhoneNumber(), "Call us now: 0123-456-789", "Incorrect data!");
        });

    it("Verify 'Shopping Cart' is displayed and redirect us to orders page.",
        () => {
            homePage.open();
            expect(homePage.shoppingCart.isDisplayed()).toBe(true);
            homePage.clickOnShoppingCart();
            assert.equal(orderPage.pageTitle, "Order - My Store", "Page title is incorrect!");
        });
});