const Page = require("../pageObjects/page");

class TshirtsPage extends Page {

    get pageTitle() { return browser.getTitle(); }

    open() {
        return super.open();
    }
}
module.exports = new TshirtsPage();