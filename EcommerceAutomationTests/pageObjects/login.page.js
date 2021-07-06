const Page = require('./page')

class LoginPage extends Page {

    /**
     * Define selectors using getter methods
     */
    get pageHeader() { return $('.page-heading') };
    get createAccountFormHeader() { return $('#create-account_form h3') };
    get createAccountEmailField() { return $('#email_create') };
    get createAccountButton() { return $('#SubmitCreate') };

    open() {
        return super.open();
    }

    /**
     * Define all functions needed
     */

    /**
     * Get page header text
     * @returns {String} page header text
     */
    getPageHeader() {
        this.pageHeader.waitForDisplayed();
        return this.pageHeader.getText();
    }

    /**
     * Get "Create an account" header text
     * @returns {String} Create account form text
     */
    getCreateAccountFormHeader() {
        this.createAccountFormHeader.waitForDisplayed();
        return this.createAccountFormHeader.getText();
    }

    /**
     * Enter email address in "Create an account" email field
     * @param {String} input user email address
     */
    setCreateAccouuntEmailField(input) {
        this.createAccountEmailField.waitForDisplayed();
        this.createAccountEmailField.setValue(input);
    }

    /**
     * Get the text entered in email field
     * @returns {String} the text entered in email field
     */
    getTextFromCreateAccountEmailField() {
        this.createAccountEmailField.waitForDisplayed();
        return this.createAccountEmailField.getValue();
    }

    clickCreateAccountButton() {
        this.createAccountButton.waitForDisplayed();
        this.createAccountButton.click();
    }
}
module.exports = new LoginPage();