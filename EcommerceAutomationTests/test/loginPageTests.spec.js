const homePage = require('../pageObjects/home.page')
const loginPage = require('../pageObjects/login.page')
const { assert } = require("chai")
const input = require('../testData/createAccountEmailData');
const { checkEmailFieldText } = require('../pageObjects/login.page');

describe("Login page tests", () => {
    beforeEach(() => {
        browser.maximizeWindow();
    });

    it("Verify login page header", () => {
        homePage.open();
        homePage.clickOnSignInLink();
        assert.equal('AUTHENTICATION', loginPage.getPageHeader(), "Incorrect page header!");
    });

    it("Verify 'Create an account form header'", () => {
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
        assert.equal("CREATE AN ACCOUNT", loginPage.getCreateAccountFormHeader(), "Incorrect header!");
        //Set fields in 'Create an account form'
        loginPage.selectGenderMaleOption();
        loginPage.setFirstNameField("First Name");
        loginPage.setLastNameField("Last Name");
        assert.equal("test.automation.egt@gmail.com", loginPage.checkEmailFieldText(), "Incorrect email");
        loginPage.setPasswordField("Password");
        assert.equal("(Five characters minimum)", loginPage.checkPasswordCharAdviseText(), "Incorrect text!");
        loginPage.selectDayOfBirth(11);
        loginPage.selectMonthOfBirth(9);
        loginPage.selecYearOfBirth(35);
        //Select both checkboxes and verify that both are selected
        loginPage.selectNewsletterCheckbox();
        assert.equal("checked", loginPage.newsletterCheckboxIsSelected(), "Checkbox is not selected!");
        loginPage.selectSpecialOffersCheckbox();
        assert.equal("checked", loginPage.recieveSpecialOffersCheckboxIsSelected(), "Checkbox is not selected!");
        //Set fields in 'Your address' and verify correct information is send
        loginPage.setAddressFirstNameField("Address First name");
        assert.equal("Address First name", loginPage.checkAddressFirstNameFieldText(), "Incorrect first name data!");
        loginPage.setAddressLastNameField("Address Last name");
        assert.equal("Address Last name", loginPage.checkAddressLastNameFieldText(), "Incorrect last name data!");
        loginPage.setAddressCompanyNameField("Address Company name");
        assert.equal("Address Company name", loginPage.checkAddressCompanyNameFieldText(), "Incorrect company data!");
        loginPage.setCompanyAddressField1("Company address1");
        assert.equal("Company address1", loginPage.checkCompanyAddressField1Text(), "Incorrect company address data!");
        loginPage.setCompanyAddressField2("Company address2");
        assert.equal("Company address2", loginPage.checkCompanyAddressField2Text(), "Incorrect company address data!");
        loginPage.setAddressCityField("City");
        assert.equal("City", loginPage.checkAddressCityFieldText(), "Incorrect city text!");
        loginPage.selectAddressStateFromDropdown(6);
        assert.equal("Colorado", loginPage.checkAddressStateSelectedValue(), "Incorrect state has been selected!");
        loginPage.setPostCodeField("80201");
        assert.equal("80201", loginPage.checkPostCodeFieldText(), "Incorrect post code!");
        loginPage.setHomePhoneField("02555555");
        assert.equal("02555555", loginPage.checkHomePhoneFieldText(), "Incorrect home phone number!");
        loginPage.setPhoneNumberField("0888776688");
        assert.equal("0888776688", loginPage.checkPhoneNumberFieldText(), "Incorrect phone number!");
        assert.equal("Register", loginPage.checkRegisterButtonText(), "Incorrect button text!");
        loginPage.clickRegisterButton();

        /**
         * TODO Create new file in testData folder for 'Account creation' form
         */
    });
});