/**
 * Created by Yyp on 5/7/18.
 */
var BasePage = require('../core/base-page.js');
var EC = protractor.ExpectedConditions;
var HomePage = function HomePage() {};

HomePage.prototype = Object.create(BasePage.prototype);
HomePage.prototype.loginWarMsg = element(by.css('form#formLogin.login-bd > div.warning'));
HomePage.prototype.loginLink = element.all(by.css('ul#topLoginState.site-nav-r.fr > li > a' )).first();
HomePage.prototype.userNameBox =element(by.id('Phone'));
HomePage.prototype.passWordBox =element(by.id('Password'));
HomePage.prototype.logInBtn =element(by.id('sendLogin'));
HomePage.prototype.loginOkLable = element(by.css('div.face-side > p.s-num' ));
HomePage.prototype.logOutBtn =element(by.css('ul#topLoginState.site-nav-r.fr > li.menu.fr > a'));
HomePage.prototype.homePageLink =element(by.css('ul.nav-c.cf > li.item.item-01.active > a'));
HomePage.prototype.moneyLable =element(by.css('div.login-box-bd > div.user-data.cf > div.data-box.fl > label'));
HomePage.prototype.goMyAccountBtn =element(by.css('div#enLogin.login-box > div.login-box-bd >  a.pp-btn.btn-reg'));
HomePage.prototype.rechargeLink =element(by.partialLinkText('去充值>'));
HomePage.prototype.openAccountBtn =element(by.id('btnRegAccount'));

module.exports = HomePage;