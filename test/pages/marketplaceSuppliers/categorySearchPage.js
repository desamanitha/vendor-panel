let searchPage = function(){

    this.searchBar = element(by.id('filter_categories'));
    this.searchResults = element.all(by.xpath('//div[@class="panelRow"]/a'));
    this.seeCategory = element.all(by.linkText("see categories"));

};
module.exports = searchPage;
