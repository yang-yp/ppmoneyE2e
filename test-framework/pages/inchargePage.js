/**
 * Created by Yyp on 12/7/18.
 */
var BasePage = require('../core/base-page.js');
var EC = protractor.ExpectedConditions;
var InchargePage = function InchargePage() {};

InchargePage.prototype = Object.create(BasePage.prototype);
InchargePage.prototype.realNameBox = element(by.id('realName'));
InchargePage.prototype.loginLink = element.all(by.css('ul#topLoginState.site-nav-r.fr > li > a' )).first();
InchargePage.prototype.userNameBox =element(by.id('Phone'));
InchargePage.prototype.passWordBox =element(by.id('Password'));
InchargePage.prototype.logInBtn =element(by.id('sendLogin'));
InchargePage.prototype.loginOkLable = element(by.css('div.face-side > p.s-num' ));
InchargePage.prototype.logOutBtn =element(by.css('ul#topLoginState.site-nav-r.fr > li.menu.fr > a'));
InchargePage.prototype.InchargePageLink =element(by.css('ul.nav-c.cf > li.item.item-01.active > a'));
InchargePage.prototype.moneyLable =element(by.css('div.login-box-bd > div.user-data.cf > div.data-box.fl > label'));
InchargePage.prototype.goMyAccountBtn =element(by.css('div#enLogin.login-box > div.login-box-bd >  a.pp-btn.btn-reg'));
InchargePage.prototype.rechargeLink =element(by.partialLinkText('去充值>'));
InchargePage.prototype.openAccountBtn =element(by.css('div#btnRegAccount.pp-btn.btn-register'));

module.exports = InchargePage;