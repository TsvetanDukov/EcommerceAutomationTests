const Page = require("../pageObjects/page");

class SearchPage extends Page {

    /** 
     * Define selectors using getter methods
    */
    get pageTitle() { return browser.getTitle(); }

    open() {
        return super.open();
    }
}
module.exports = new SearchPage();