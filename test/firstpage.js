/**
 * created by Yyp on 2018/6/14
 * case coverage:PP-4,PP-5,PP-6
 * Pre-step :user have longin
 * Test flow:
 * 1,on my account page click the 首页 button
 * 2,on the home page click the 进入我的账户
 * 3,on the home page click the 去充值
 */
var EC = protractor.ExpectedConditions;
var BasePage =require('../test-framework/core/base-page.js');

describe(" a case of longin secess",function (){
    var basePage = new BasePage();

    beforeAll(function(done){
    done();
    });
    afterAll(function(done){
     done();
    });
    //PP-4
    it("goto home page",function(done){
        basePage.navigateToURL('https://www.ppmoney.com/');
        var loginLink = element.all(by.css('ul#topLoginState.site-nav-r.fr > li > a' )).first();
        var userName =element(by.id('Phone'));
        var passWord =element(by.id('Password'));
        var closePopup = element(by.id('popbtn'));
        var logIn =element(by.id('sendLogin'));
        var loginOk = element(by.css('div.face-side > p.s-num' ));
        var longOut =element(by.css('ul#topLoginState.site-nav-r.fr > li.menu.fr > a'));
        var firstPage =element(by.css('ul.nav-c.cf > li.item.item-01.active > a'));
        var money =element(by.css('div.login-box-bd > div.user-data.cf > div.data-box.fl > label'));
        if (EC.visibilityOf(closePopup)){
            closePopup.click();
        };
        loginLink.click();
        expect(userName.isDisplayed()).toBe(true);
        userName.sendKeys("13718281997");
        passWord.sendKeys("ppmoney123");
        logIn.click();
        firstPage.click();
        //expect(loginOk.isDisplayed()).toBe(true);
        expect(money.valueOf('可用余额(元)'));
        longOut.click();
        done();
    });
    //PP-5
    it("go to my account",function(done){
  //      basePage.navigateToURL('https://www.ppmoney.com/');
        var loginLink = element.all(by.css('ul#topLoginState.site-nav-r.fr > li > a' )).first();
        var userName =element(by.id('Phone'));
        var passWord =element(by.id('Password'));
        var logIn =element(by.id('sendLogin'));
        var loginOk = element(by.css('div.face-side > p.s-num' ));
        var longOut =element(by.css('ul#topLoginState.site-nav-r.fr > li.menu.fr > a'));
        var firstPage =element(by.css('ul.nav-c.cf > li.item.item-01.active > a'));
        var goMyAccount =element(by.css('div#enLogin.login-box > div.login-box-bd >  a.pp-btn.btn-reg'));
 /*       if (EC.visibilityOf(closePopup)){
            closePopup.click();
        };
 */
        loginLink.click();
        expect(userName.isDisplayed()).toBe(true);
        userName.sendKeys("13718281997");
        passWord.sendKeys("ppmoney123");
        logIn.click();
        firstPage.click();
        goMyAccount.click();
        expect(loginOk.valueOf('注册号：1077513746487'));
        longOut.click();
        done();
    });
    //PP-6
    it("recharge",function(done){
        basePage.navigateToURL('https://www.ppmoney.com/');
        var loginLink = element.all(by.css('ul#topLoginState.site-nav-r.fr > li > a' )).first();
        var userName =element(by.id('Phone'));
        var passWord =element(by.id('Password'));
        var logIn =element(by.id('sendLogin'));
        var loginOk = element(by.css('div.face-side > p.s-num' ));
        var firstPage =element(by.css('ul.nav-c.cf > li.item.item-01.active > a'));
        //var recharge =element(by.css('div.login-box-bd > div.user-data.cf > div.fl > a'));
        var recharge =element(by.partialLinkText('去充值>'));
        var openAccount =element(by.id('btnRegAccount'));
        //var goMyAccount =element(by.css('div#enLogin.login-box > div.login-box-bd >  a.pp-btn.btn-reg'));
        /*       if (EC.visibilityOf(closePopup)){
                   closePopup.click();
               };
        */
        loginLink.click();
        expect(userName.isDisplayed()).toBe(true);
        userName.sendKeys("13718281997");
        passWord.sendKeys("ppmoney123");
        logIn.click();
        firstPage.click();
        recharge.click();
        expect(openAccount.isDisplayed).toBe(true);
        openAccount.click();
        done();
    });

});