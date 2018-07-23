/**
 * Created by Yyp on 5/7/18.
 */
var BasePage = require('../core/base-page.js');
var EC = protractor.ExpectedConditions;
var timeOut = browser.params.timeOut;
var BbsPage = function BbsPage() {};

BbsPage.prototype = Object.create(BasePage.prototype);
BbsPage.prototype.newSpecialBtn = element(by.id('newspecial'));
BbsPage.prototype.shareBtn = element(by.css('div#sxp_nv > div.wp > div.sxp_nv > ul > li#mn_N2219 > a'));
BbsPage.prototype.bbsTitleInput = element(by.css('div#editorbox.bm.bw0.cl > div#postbox > div.pbt.cl > div.z > span > input#subject.px'));
BbsPage.prototype.bbsInput = element(by.id('e_iframe'));
BbsPage.prototype.bbsSubmitBtn = element(by.id('postsubmit'));
BbsPage.prototype.bbsVerifyTitle = element(by.id('thread_subject'));
module.exports = BbsPage;