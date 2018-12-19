
describe('Vendor panel', function() {
    it('should have a title', function() {
      browser.get('https://www.vendorpanel.com.au/marketplace.aspx');
  
      expect(browser.getTitle()).toEqual('Vendorpanel Marketplace');
    });

    it('send `advertising` text to the search bar',  () => {
        let searchBar = element(by.id('filter_categories'));
        searchBar.click();
        searchBar.sendKeys("advertising");
    })
    it('click on the first `see categories` link', () => {
        let seeCategories = element.all(by.linkText("see categories")).first();
        seeCategories.click();
        let listCategoriesPageTitle = element(by.className('secTitle'));
        browser.sleep(1000);
        expect(listCategoriesPageTitle.getText()).toEqual("Categories for the Advertising and Media Services suppier list.");
    })
    it('click "Register on this list', () => {
        let registerOnThisList = element(by.linkText('Register on this list'));
        registerOnThisList.click();
    })
  });