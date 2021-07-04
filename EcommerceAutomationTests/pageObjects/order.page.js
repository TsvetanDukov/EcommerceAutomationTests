const Page = require("../pageObjects/page");

class OrderPage extends Page {

    /** 
     * Define selectors using getter methods
    */
    get pageTitle() { return browser.getTitle(); }
    get shoppingCartSummary() { return $("#center_column p") }


    open() {
        return super.open();
    }

    shoppingCartSummaryText() {
        this.shoppingCartSummary.waitForDisplayed();
        return this.shoppingCartSummary.getText();
    }
}
module.exports = new OrderPage();