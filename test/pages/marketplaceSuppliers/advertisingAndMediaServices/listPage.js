let listPage = function(){

    this.listCategoriesPageTitle = element(by.className('secTitle'));
    this.registerOnThisList = element(by.linkText('Register on this list'));

};
module.exports = listPage;