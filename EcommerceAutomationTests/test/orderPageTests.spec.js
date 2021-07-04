const homePage = require("../pageObjects/home.page")
const orderPage = require("../pageObjects/order.page")
const { assert } = require("chai")

describe("Order page tests", () => {
    beforeEach(() => {
        browser.maximizeWindow();
    });

    it("Verify shopping cart text is correct when empty.", () => {
        homePage.open();
        homePage.clickOnShoppingCart();
        assert.equal(orderPage.shoppingCartSummaryText(), "Your shopping cart is empty.", "Incorrect shopping cart text!");
    });
});