class OrderPage {

    get pageTitle() { return browser.getTitle(); }
    get shoppingCartSummary() { return $("#center_column p") }


    shoppingCartSummaryText() {
        this.shoppingCartSummary.waitForDisplayed();
        return this.shoppingCartSummary.getText();
    }
}
module.exports = new OrderPage();