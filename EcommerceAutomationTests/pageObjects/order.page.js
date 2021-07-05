const Page = require("../pageObjects/page");

class OrderPage extends Page {

    /** 
     * Define selectors using getter methods
    */
    get pageTitle() { return browser.getTitle(); }
    get shoppingCartSummary() { return $("#center_column p") }
    get shoppingStepsPanel() { return $("#order_step") }
    shoppingSteps(index) { return $(`#order_step li:nth-child(${index}) span`) }


    open() {
        return super.open();
    }

    /**
     * Define all functions needed
     */

    shoppingCartSummaryText() {
        this.shoppingCartSummary.waitForDisplayed();
        return this.shoppingCartSummary.getText();
    }

    /**
     * Enter shopping step number and return step text
     * @param {Number} index Shopping step number
     * @returns {String} Sopping step text
     */
    shoppingStepsText(index) {
        this.shoppingSteps(index).waitForDisplayed();
        return this.shoppingSteps(index).getText();
    }
}
module.exports = new OrderPage();