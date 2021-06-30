class ContactPage {

    get pageTitle() { return browser.getTitle(); }
}
module.exports = new ContactPage();