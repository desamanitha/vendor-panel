let searchPageObjects = require('../pages/marketplaceSuppliers/categorySearchPage');
let listPageObjects = require('../pages/marketplaceSuppliers/advertisingAndMediaServices/listPage');
let registrationPageObjects = require('../pages/marketplaceSuppliers/advertisingAndMediaServices/registrationPage');

//baseurl can be passed using environment variables
const baseUrl =   'https://www.vendorpanel.com.au/marketplace.aspx';
 
describe('Marketplace Registration', function() {

    let searchpage = new searchPageObjects();
    let listPage = new listPageObjects();

    it('should have a title', function() {
      browser.get(baseUrl);
      expect(browser.getTitle()).toEqual('Vendorpanel Marketplace');
    });
    it('search bar should filter results based on input',  function() {
       
        searchpage.searchBar.click();
        searchpage.searchBar.sendKeys("advertising");
        expect(searchpage.searchResults.first().getText()).toContain("Advertising");

    });
    it('`see categories` link should take to appropriate page',  function() {
        browser.wait(searchpage.seeCategory.first().click(), 4000);

        //validate the category name on the page
        expect(listPage.listCategoriesPageTitle.getText()).toEqual("Categories for the Advertising and Media Services suppier list.");
    });
    it('`Register on this list` link should navigate to Registraion page',  function() {
        let registrationPage = new registrationPageObjects();
        listPage.registerOnThisList.click();

        //look for the marketplace logo
        expect(element(by.className('affheader')).getAttribute('style').getCssValue('background-image')).toEqual('url("https://www.vendorpanel.com.au/Img/Affiliates/Channels/205BDE2675B6/205BDE2675B6.jpg")');
        //validate the name of the category on the registration page
        expect(registrationPage.supplierRegistrationPageHeading.getText()).toEqual('Register as a supplier on the Advertising and Media Services list.');

        //validate the fields are text input fields and send some data to the fields
        expect(registrationPage.yourFirstName.getTagName()).toEqual('input');
        expect(registrationPage.yourFirstName.getAttribute('type')).toEqual('text')
        registrationPage.yourFirstName.sendKeys('NameFirst');

        expect(registrationPage.yourLastName.getTagName()).toEqual('input');
        expect(registrationPage.yourLastName.getAttribute('type')).toEqual('text');
        registrationPage.yourLastName.sendKeys('NameLast');

        expect(registrationPage.yourEmailAddress.getTagName()).toEqual('input')
        expect(registrationPage.yourEmailAddress.getAttribute('type')).toEqual('text');
        registrationPage.yourEmailAddress.sendKeys('test@vendorpanel.com.au');

         //click on Advertising: Print checkbox 
        registrationPage.advertisingPrintCheckbox.click();
    });
  });