module.exports = class Page {

    /**
     * 
     * @returns Website homepage
     */
    open() {
        return browser.url("http://automationpractice.com/index.php");
    }
}