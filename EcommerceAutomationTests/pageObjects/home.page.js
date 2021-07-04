const Page = require("../pageObjects/page")

class HomePage extends Page {

    /** 
     * Define selectors using getter methods
    */
    get womenLink() { return $("a[title='Women']") }
    get dressesLink() { return $("//ul[@class = 'sf-menu clearfix menu-content sf-js-enabled sf-arrows']/child::li[2]") }
    get tshirtsLink() { return $("//ul[@class = 'sf-menu clearfix menu-content sf-js-enabled sf-arrows']/child::li[3]") }
    get contactUsLink() { return $("#contact-link") }
    get searchField() { return $("#search_query_top") }
    get searchButton() { return $("button[name = 'submit_search']") }
    get headerPhoneNumber() { return $(".shop-phone") }
    get shoppingCart() { return $("//div[@class = 'shopping_cart']/a") }

    open() {
        return super.open();
    }

    /**
     * Define all functions needed
     */

    clickOnWomenLink() {
        this.womenLink.waitForDisplayed();
        this.womenLink.click();
    }

    clickOnDressesLink() {
        this.dressesLink.waitForDisplayed();
        this.dressesLink.click();
    }

    clickOnTshirtLink() {
        this.tshirtsLink.waitForDisplayed();
        this.tshirtsLink.click();
    }

    clickOnContactUsLink() {
        this.contactUsLink.waitForDisplayed();
        this.contactUsLink.click();
    }

    /**
     * @param {string} text What results user is looking for.
     */
    enterTextInTheSearchField(text) {
        this.searchField.waitForDisplayed();
        this.searchField.setValue(text)
    }

    /**
     * Press search button to filter desired results.
     */
    pressSearchButton() {
        this.searchButton.waitForDisplayed();
        this.searchButton.click();
    }

    HeaderPhoneNumber() {
        this.headerPhoneNumber.waitForDisplayed();
        return this.headerPhoneNumber.getText();
    }

    clickOnShoppingCart() {
        this.shoppingCart.waitForDisplayed();
        this.shoppingCart.click();
    }


}
module.exports = new HomePage();