class HomePage {

    get womenLink() { return $("a[title='Women']") }
    get dressesLink() { return $("//ul[@class = 'sf-menu clearfix menu-content sf-js-enabled sf-arrows']/child::li[2]") }
    get tshirtsLink() { return $("//ul[@class = 'sf-menu clearfix menu-content sf-js-enabled sf-arrows']/child::li[3]") }


}
module.exports = new HomePage();