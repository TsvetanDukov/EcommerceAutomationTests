const Page = require("../pageObjects/page");

class DressesPage extends Page {

    /** 
     * Define selectors using getter methods
    */
    get pageTitle() { return browser.getTitle(); }

    open() {
        return super.open();
    }
}
module.exports = new DressesPage();