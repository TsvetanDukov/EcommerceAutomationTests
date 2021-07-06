const homePage = require('../pageObjects/home.page')
const loginPage = require('../pageObjects/login.page')
const { assert } = require("chai")
const input = require('../testData/createAccountEmailData')

describe("Login page tests", () => {
    beforeEach(() => {
        browser.maximizeWindow();
    });

    it("Verify login page header", () => {
        homePage.open();
        homePage.clickOnSignInLink();
        assert.equal('AUTHENTICATION', loginPage.getPageHeader(), "Incorrect page header!");
    });

    it("Verify 'Create and account form header'", () => {
        homePage.open();
        homePage.clickOnSignInLink();
        assert.equal('CREATE AN ACCOUNT', loginPage.getCreateAccountFormHeader(), "Incorrect form header!");
    });

    it.only("Test 'Create an account' form", () => {
        homePage.open();
        homePage.clickOnSignInLink();
        loginPage.setCreateAccouuntEmailField(input.email);
        //Verify that entered data is correct 
        assert.equal('test.automation.egt@gmail.com', loginPage.getTextFromCreateAccountEmailField(), 'Incorrect data!');
        loginPage.clickCreateAccountButton();
        /**
         * TODO define locators and functions for 'Create an account' form
         */
    });
});