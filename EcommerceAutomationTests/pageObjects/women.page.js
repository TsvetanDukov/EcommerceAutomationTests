const Page = require("../pageObjects/page");

class WomenPage extends Page {

    get pageTitle() { return browser.getTitle(); }

    open() {
        return super.open();
    }

}
module.exports = new WomenPage();