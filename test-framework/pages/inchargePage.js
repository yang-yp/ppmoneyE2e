/**
 * Created by Yyp on 12/7/18.
 */
var BasePage = require('../core/base-page.js');
var EC = protractor.ExpectedConditions;
var timeOut = browser.params.timeOut;
var InchargePage = function InchargePage() {};

InchargePage.prototype = Object.create(BasePage.prototype);
InchargePage.prototype.realNameBox = element(by.id('realName'));
InchargePage.prototype.cardTypeSelect = element(by.css('div#cardTypeSelect.pp-select-box.form-control-box > div.dropdown-toggle' ));
InchargePage.prototype.credentialsTypeDropdownToggle = element(by.css('div.dropdown-toggle > i'));
InchargePage.prototype.cardNoBox = element(by.id('idCard'));
InchargePage.prototype.bankCardBox = element(by.id('bankCardNo'));
InchargePage.prototype.bankPhoneBox =element(by.id('bankPhone'));
InchargePage.prototype.bankLink = element(by.id('getsuppBank' ));
InchargePage.prototype.supportBankDialog = element(by.css('ui-popup.ui-popup-modal.ui-popup-show.ui-popup-focus'));
InchargePage.prototype.bankDialogCloseBtn = element(by.css('div.ui-dialog > table.ui-dialog-grid > tbody > tr > td.ui-dialog-header > button.ui-dialog-close'));
InchargePage.prototype.nextBtn = element(by.id('openAccount'));
InchargePage.prototype.idErrDialog = element(by.css('div.ui-popup.ui-popup-modal.ui-popup-show.ui-popup-focus > div.ui-dialog'));
InchargePage.prototype.dialogCloseBtn = element(by.css('div.ui-popup.ui-popup-modal.ui-popup-show.ui-popup-focus > div.ui-dialog > table.ui-dialog-grid > tbody > tr > td.ui-dialog-header > ui-dialog-close'));

InchargePage.prototype.navigateToRegisterPage = function() {
    browser.wait(EC.visibilityOf(this.nextBtn), timeOut);
    this.nextBtn.click();
    this.sleep(100);  ///用browser.wait
};

InchargePage.prototype.selectCredentialsType = function (itemName) {
    browser.wait(EC.elementToBeClickable(this.credentialsTypeDropdownToggle), timeOut);
    this.credentialsTypeDropdownToggle.click();
    this.sleep();
    element(by.cssContainingText('ul.pp-dropdown-menu > li',itemName)).click();
};

module.exports = InchargePage;