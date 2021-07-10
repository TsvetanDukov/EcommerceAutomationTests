const Page = require('./page')

class LoginPage extends Page {

    /**
     * Define selectors using getter methods
     */
    get pageHeader() { return $('.page-heading') };
    get createAccountFormHeader() { return $('#create-account_form h3') };
    get createAccountEmailField() { return $('#email_create') };
    get createAccountButton() { return $('#SubmitCreate') };
    get accountFormPageHeader() { return $('.page-heading') };
    get genderMaleRadioButton() { return $("#id_gender1") };
    get genderFemaleRadioButton() { return $("#id_gender2") };
    get firstNameField() { return $("#customer_firstname") };
    get lastNameField() { return $("#customer_lastname") };
    get emailField() { return $("#email") };
    get passwordField() { return $("#passwd") };
    get passwordCharAdvise() { return $("//div[@class = 'required password form-group']/child::span") };
    get dayOfBirthDropdownMenu() { return $("#uniform-days") };
    get monthOfBirthDropdown() { return $("#uniform-months") };
    get yearOfBirthDropdown() { return $("#uniform-years") };
    get newsletterCheckbox() { return $("#uniform-newsletter") };
    get newsletterSelectedCheckbox() { return $(".checker .checked") };
    get recieveSpecialOffersCheckbox() { return $("#uniform-optin") };
    get recievedSpecialOffersSelectedCheckbox() { return $("div[id = 'uniform-optin'] span") };
    get addressFirstNameField() { return $("#firstname") };
    get addressLastNameField() { return $("#lastname") };
    get addressCompanyField() { return $("#company") };


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

    /**
     * Get create an account page header
     * @returns {String} Create an account form page header
     */
    getAccountFormPageHeadingText() {
        this.accountFormPageHeader.waitForDisplayed();
        return this.accountFormPageHeader.getText();
    }

    selectGenderMaleOption() {
        this.genderMaleRadioButton.waitForDisplayed();
        this.genderMaleRadioButton.click();
    }

    selectGenderFemaleOption() {
        this.genderFemaleRadioButton.waitForDisplayed();
        this.genderFemaleRadioButton.click();
    }

    /**
     * Enter first name in create account field
     * @param {String} firstName 
     */
    setFirstNameField(firstName) {
        this.firstNameField.waitForDisplayed();
        this.firstNameField.setValue(firstName);
    }

    /**
     * Enter last name in create account field
     * @param {String} lastName 
     */
    setLastNameField(lastName) {
        this.lastNameField.waitForDisplayed();
        this.lastNameField.setValue(lastName);
    }

    /**
     * Get email field text, email is set automatically
     * @returns {String} Email field text
     */
    checkEmailFieldText() {
        this.emailField.waitForDisplayed();
        return this.emailField.getValue();
    }

    /**
     * Enter password in password field
     * @param {String} password Desired user password
     */
    setPasswordField(password) {
        this.passwordField.waitForDisplayed();
        this.passwordField.setValue(password);
    }

    /**
     * Verify text below password field
     * @returns {String} Advise text for password creation
     */
    checkPasswordCharAdviseText() {
        this.passwordCharAdvise.waitForDisplayed();
        return this.passwordCharAdvise.getText();
    }

    /**
     * Select day of birth from select dropdown
     * @param {Number} dayOfBirth User day of birth
     */
    selectDayOfBirth(dayOfBirth) {
        this.dayOfBirthDropdownMenu.waitForDisplayed();
        this.dayOfBirthDropdownMenu.click();
        this.dayOfBirthDropdownMenu.selectByIndex(dayOfBirth);
    }

    /**
     * Select month of birth from select dropdown
     * @param {Number} monthOfBirth User month of birth
     */
    selectMonthOfBirth(monthOfBirth) {
        this.monthOfBirthDropdown.waitForDisplayed();
        this.monthOfBirthDropdown.click();
        this.monthOfBirthDropdown.selectByIndex(monthOfBirth);
    }

    /**
     * Select year of birth from select dropdown
     * @param {Number} yearOfBirth User year of birth
     */
    selecYearOfBirth(yearOfBirth) {
        this.yearOfBirthDropdown.waitForDisplayed();
        this.yearOfBirthDropdown.click();
        this.yearOfBirthDropdown.selectByIndex(yearOfBirth);
    }

    selectNewsletterCheckbox() {
        this.newsletterCheckbox.waitForDisplayed();
        this.newsletterCheckbox.click();
    }

    /**
     * Verify that checkbox is selected
     * @returns {String} Checkbox attribute value, must equals "checked"
     */
    newsletterCheckboxIsSelected() {
        this.newsletterSelectedCheckbox.waitForDisplayed();
        return this.newsletterSelectedCheckbox.getAttribute('class');
    }

    selectSpecialOffersCheckbox() {
        this.recieveSpecialOffersCheckbox.waitForDisplayed();
        this.recieveSpecialOffersCheckbox.click();
    }

    /**
     * Verify that checkbox is selected
     * @returns {String} Checkbox attribute value, must equals "checked"
     */
    recieveSpecialOffersCheckboxIsSelected() {
        this.recievedSpecialOffersSelectedCheckbox.waitForDisplayed();
        return this.recievedSpecialOffersSelectedCheckbox.getAttribute('class');
    }

    /**
     * Enter user first name in 'Your address' form
     * @param {String} addressFirstName User first name in 'Your address' form
     */
    setAddressFirstNameField(addressFirstName) {
        this.addressFirstNameField.waitForDisplayed();
        this.addressFirstNameField.setValue(addressFirstName);
    }

    /**
     * Enter user last name in 'Your address' form
     * @param {String} addressLastName User last name in 'Your address' form
     */
    setAddressLastNameField(addressLastName) {
        this.addressLastNameField.waitForDisplayed();
        this.addressLastNameField.setValue(addressLastName);
    }

    /**
     * Enter user company name in 'Your address' form
     * @param {String} addressCompanyName User company name in 'Your address' form
     */
    setAddressCompanyNameField(addressCompanyName) {
        this.addressCompanyField.waitForDisplayed();
        this.addressCompanyField.setValue(addressCompanyName);
    }

    /**
     * Verify correct data is entered into the field
     * @returns {String} First name field text in 'Your address'
     */
    checkAddressFirstNameFieldText() {
        this.addressFirstNameField.waitForDisplayed();
        return this.addressFirstNameField.getValue();
    }

    /**
     * Verify correct data is entered into the field
     * @returns {String} Last name field text in 'Your address'
     */
    checkAddressLastNameFieldText() {
        this.addressLastNameField.waitForDisplayed();
        return this.addressLastNameField.getValue();
    }

    /**
     * Verify correct data is entered into the field
     * @returns {String} Company name field text in 'Your address'
     */
    checkAddressCompanyNameFieldText() {
        this.addressCompanyField.waitForDisplayed();
        return this.addressCompanyField.getValue();
    }

}
module.exports = new LoginPage();