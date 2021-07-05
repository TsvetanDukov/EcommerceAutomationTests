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

    it("Verify shopping steps panel is displayed",
        () => {
            homePage.open();
            homePage.clickOnShoppingCart();
            assert.equal(true, orderPage.shoppingStepsPanel.isDisplayed(), "Shopping panel is not displayed!");
        });

    it("Verify first shopping step text", () => {
        homePage.open();
        homePage.clickOnShoppingCart();
        assert.equal(orderPage.shoppingStepsText(1), "01. Summary", "First step text is incorrect!");
    });

    it("Verify second shopping step text", () => {
        homePage.open();
        homePage.clickOnShoppingCart();
        assert.equal(orderPage.shoppingStepsText(2), "02. Sign in", "Second step text is incorrect!");
    });

    it("Verify third shopping step text", () => {
        homePage.open();
        homePage.clickOnShoppingCart();
        assert.equal(orderPage.shoppingStepsText(3), "03. Address", "Third step text is incorrect!");
    });

    it("Verify fourth shopping step text", () => {
        homePage.open();
        homePage.clickOnShoppingCart();
        assert.equal(orderPage.shoppingStepsText(4), "04. Shipping", "Fourth step text is incorrect!");
    });

    it("Verify fifth shopping step text", () => {
        homePage.open();
        homePage.clickOnShoppingCart();
        assert.equal(orderPage.shoppingStepsText(5), "05. Payment", "Fifth step text is incorrect!");
    });
});