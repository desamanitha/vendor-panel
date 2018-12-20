let registrationPage = function(){
     this.supplierRegistrationPageHeading = element(by.id('masterMain_lblTitle'));
     this.yourFirstName = element(by.name('AnonMaster$masterMain$FirstName')) ;
     this.yourLastName = element(by.name('AnonMaster$masterMain$LastName'));
     this.yourEmailAddress = element(by.name('AnonMaster$masterMain$Email'));

     this.advertisingPrintCheckbox = element(by.name('AnonMaster$masterMain$cbCategories$cbCategories_1'));
}
module.exports = registrationPage;