/**
 * created by Yyp on 2018/6/9
 * case coverage:PP-1,PP-2,PP-3
 * Pre-step :registe a account
 * Test flow:
 * 1,open che Ppmoney net
 * 2,input tel-number ,login seccuss
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
    //PP-1
    it("user login",function(done){
        basePage.navigateToURL('https://www.ppmoney.com/');
        var loginLink = element.all(by.css('ul#topLoginState.site-nav-r.fr > li > a' )).first();
        var userName =element(by.id('Phone'));
        var passWord =element(by.id('Password'));
        var closePopup = element(by.id('popbtn'));
        var logIn =element(by.id('sendLogin'));
        var loginOk = element(by.css('div.face-side > p.s-num' ));
        var longOut =element(by.css('ul#topLoginState.site-nav-r.fr > li.menu.fr > a'));

        if (EC.visibilityOf(closePopup)){
            closePopup.click();
        };
        loginLink.click();
        expect(userName.isDisplayed()).toBe(true);
        userName.sendKeys("13718281997");
        passWord.sendKeys("ppmoney123");
        logIn.click();
        //expect(loginOk.isDisplayed()).toBe(true);
        expect(loginOk.valueOf('注册号：1077513746487'));
        longOut.click();
        done();
    });
    //PP-2
    it("user incorrect user",function(done){
  //      basePage.navigateToURL('https://www.ppmoney.com/');
        var loginLink = element.all(by.css('ul#topLoginState.site-nav-r.fr > li > a' )).first();
        var userName =element(by.id('Phone'));
        var passWord =element(by.id('Password'));
        var closePopup = element(by.id('popbtn'));
        var logIn =element(by.id('sendLogin'));
        //var loginOk = element(by.css('div.face-side > p.s-num' ));
        var loginWar = element(by.css('form#formLogin.login-bd > div.warning'));
 /*       if (EC.visibilityOf(closePopup)){
            closePopup.click();
        };
 */
        loginLink.click();
        expect(userName.isDisplayed()).toBe(true);
        userName.sendKeys("13718281991");
        passWord.sendKeys("ppmoney123");
        logIn.click();
        //expect(loginOk.isDisplayed()).toBe(true);
        expect(loginWar.valueOf('帐号密码不匹配'));
        done();
    });
    //PP-3
    it("user incorrect password",function(done){
        //      basePage.navigateToURL('https://www.ppmoney.com/');
        var loginLink = element.all(by.css('ul#topLoginState.site-nav-r.fr > li > a' )).first();
        var userName =element(by.id('Phone'));
        var passWord =element(by.id('Password'));
        var closePopup = element(by.id('popbtn'));
        var logIn =element(by.id('sendLogin'));
        //var loginOk = element(by.css('div.face-side > p.s-num' ));
        var loginWar = element(by.css('form#formLogin.login-bd > div.warning'));
        /*       if (EC.visibilityOf(closePopup)){
                   closePopup.click();
               };
        */
        loginLink.click();
        expect(userName.isDisplayed()).toBe(true);
        userName.sendKeys("13718281997");
        passWord.sendKeys("ppmoney110");
        logIn.click();
        //expect(loginOk.isDisplayed()).toBe(true);
        expect(loginWar.valueOf('帐号密码不匹配'));
        done();
    });
});