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
//BbsPage.prototype.configBtn = element(by.css('div#toptb.cl > div.wp > div.y > div.sxp_y_l > a'));
BbsPage.prototype.configBtn = element(by.partialLinkText('设置'));
BbsPage.prototype.realNameInput = element(by.css('table#profilelist.tfm > tbody > tr#tr_realname > td#td_realname > input#realname.px'));
BbsPage.prototype.sexSelect = element(by.id('gender'));
BbsPage.prototype.provinceSelect = element(by.id('birthprovince'));
BbsPage.prototype.proSubmitBtn = element(by.id('profilesubmitbtn'));
BbsPage.prototype.eduTable = element(by.partialLinkText('教育情况'));
BbsPage.prototype.graduateSchoolInput = element(by.id('graduateschool'));
BbsPage.prototype.educationSelect = element(by.id('education'));
BbsPage.prototype.birthModifyBtn = element(by.partialLinkText('修改'));
BbsPage.prototype.birthCityBtn = element(by.id('birthcity'));

module.exports = BbsPage;