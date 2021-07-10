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
    get addressCompanyAddressField1() { return $("#address1") };
    get addressCompanyAddressField2() { return $("#address2") };
    get addressCityField() { return $("#city") };
    get addressStateDropdownMenu() { return $("#uniform-id_state") };
    get selectedStateText() { return $("div[id ='uniform-id_state'] span") };
    get addressPostCodeField() { return $("#postcode") };
    get addressPhoneNumberField() { return $("#phone_mobile") };
    get registerButton() { return $("#submitAccount span") };
    get homePhoneField() { return $("#phone") };


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

    /**
     * Enter company address in the first 'address' field
     * @param {String} companyAddress1 Company address first field
     */
    setCompanyAddressField1(companyAddress1) {
        this.addressCompanyAddressField1.waitForDisplayed();
        this.addressCompanyAddressField1.setValue(companyAddress1)
    }

    /**
     * Verify correct data is entered into the first field
     * @returns {String} Text entered in the first address field
     */
    checkCompanyAddressField1Text() {
        this.addressCompanyAddressField1.waitForDisplayed();
        return this.addressCompanyAddressField1.getValue();
    }

    /**
     * Enter company address in the second 'address' field
     * @param {String} companyAddress2 Company address first field
     */
    setCompanyAddressField2(companyAddress2) {
        this.addressCompanyAddressField2.waitForDisplayed();
        this.addressCompanyAddressField2.setValue(companyAddress2)
    }

    /**
     * Verify that correct data is entered into the second field
     * @returns {String} Text entered in the second address field
     */
    checkCompanyAddressField2Text() {
        this.addressCompanyAddressField2.waitForDisplayed();
        return this.addressCompanyAddressField2.getValue();
    }

    /**
     * Enters city name in the field
     * @param {String} cityName City name
     */
    setAddressCityField(cityName) {
        this.addressCityField.waitForDisplayed();
        this.addressCityField.setValue(cityName);
    }

    /**
     * Verify that correct data is entered
     * @returns {String} text entered in the city field
     */
    checkAddressCityFieldText() {
        this.addressCityField.waitForDisplayed();
        return this.addressCityField.getValue();
    }

    selectAddressStateFromDropdown(state) {
        this.addressStateDropdownMenu.waitForDisplayed();
        this.addressStateDropdownMenu.click();
        this.addressStateDropdownMenu.selectByIndex(state);
    }

    /**
     * Verify that correct state is selected
     * @returns {String} selected state
     */
    checkAddressStateSelectedValue() {
        this.selectedStateText.waitForDisplayed();
        return this.selectedStateText.getText();
    }

    setPostCodeField(postCode) {
        this.addressPostCodeField.waitForDisplayed();
        this.addressPostCodeField.setValue(postCode);
    }

    /**
     * Verify that core data is send
     * @returns {String} text entered into the post code field
     */
    checkPostCodeFieldText() {
        this.addressPostCodeField.waitForDisplayed();
        return this.addressPostCodeField.getValue();
    }

    setHomePhoneField(homePhone) {
        this.homePhoneField.waitForDisplayed();
        this.homePhoneField.setValue(homePhone);
    }

    /**
     * Verify that correct data is entered into the field
     * @returns {String} home phone field text
     */
    checkHomePhoneFieldText() {
        this.homePhoneField.waitForDisplayed();
        return this.homePhoneField.getValue();
    }

    setPhoneNumberField(phoneNumber) {
        this.addressPhoneNumberField.waitForDisplayed();
        this.addressPhoneNumberField.setValue(phoneNumber);
    }

    /**
     * Verify correct data is entered into the phone field
     * @returns {String} Phone number entered from user
     */
    checkPhoneNumberFieldText() {
        this.addressPhoneNumberField.waitForDisplayed();
        return this.addressPhoneNumberField.getValue();
    }

    /**
     * Verify register button text
     * @returns {String} Register button text
     */
    checkRegisterButtonText() {
        this.registerButton.waitForDisplayed();
        return this.registerButton.getText();
    }

    clickRegisterButton() {
        this.registerButton.waitForDisplayed();
        this.registerButton.click();
    }

}
module.exports = new LoginPage();