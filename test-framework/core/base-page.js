/**
 * Created by i856279 (Isabell) on 8/9/16.
 */

//var Services = require('../../../e2e/configuration/services.js');

var BasePage = function() {};
var realm = browser.params.realm;

BasePage.prototype = Object.create(Object);

/*BasePage.prototype.open = function(){
  return browser.get(this.getApiPortal());
};*/

BasePage.prototype.navigateToURL = function(url){
  return browser.get(url);
};

BasePage.prototype.getPageTitle = function(){
  return browser.getTitle();
};

BasePage.prototype.getUrl = function() {
  return browser.getCurrentUrl();
};

BasePage.prototype.isElementPresent = function(element) {
  return browser.isElementPresent(element);
};

BasePage.prototype.sleep = function(timeOut){
  timeOut = timeOut || 2000 ;
  return browser.sleep(timeOut);
};

BasePage.prototype.refresh = function(){
  return browser.refresh();
};

BasePage.prototype.scrollToView = function (element) {
  var scrollToView = 'arguments[0].scrollIntoView()';
  browser.executeScript(scrollToView, element.getWebElement()).then(function () {
    browser.executeScript('window.scrollBy(0, -150)')
  });
};

BasePage.prototype.scrollToViewAndClick = function (element) {
  this.scrollToView(element);
  element.click();
};

BasePage.prototype.clearInput = function (inputElement) {
  inputElement.clear().sendKeys("a");
  this.sleep();
  inputElement.sendKeys(protractor.Key.BACK_SPACE);
  inputElement.clear();
};

BasePage.prototype.inputString = function (inputElement, inputString) {
  inputElement.clear().sendKeys(inputString)
};

module.exports = BasePage;