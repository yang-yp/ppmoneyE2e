/**
 * Created by Yyp on 18/7/18.
 */
var BasePage = require('../core/base-page.js');
var EC = protractor.ExpectedConditions;
var timeOut = browser.params.timeOut;
var personalRegisterPage = function personalRegisterPage() {};

personalRegisterPage.prototype = Object.create(BasePage.prototype);
personalRegisterPage.prototype.registerBtn = element(by.id('nextButton'));

module.exports = personalRegisterPage;