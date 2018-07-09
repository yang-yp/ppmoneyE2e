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
var HomePage =require('../test-framework/pages/homePage.js');
var app = require('../properties/application.js');

describe(" a case of longin secess",function (){
    var basePage = new BasePage();
    var homePage = new HomePage();
    var ppMoneyUrl = app.ppmoneyUrl;
    var userName = app.userName;
    var userPwd = app.userPwd;

    beforeAll(function(done){
        basePage.navigateToURL(ppMoneyUrl);
        done();
    });
    afterAll(function(done){
        done();
    });
    //PP-1
    it("user login success",function(done){
        var closePopup = element(by.id('popbtn'));
        if (EC.visibilityOf(closePopup)){
            closePopup.click();
        };
        homePage.loginLink.click();
        homePage.userNameBox.sendKeys(userName);
        homePage.passWordBox.sendKeys(userPwd);
        homePage.logInBtn.click();
        expect(homePage.loginOkLable.valueOf('注册号：1077513746487'));
        homePage.logOutBtn.click();
        done();
    });
    //PP-2
    it("user incorrect user",function(done){
        homePage.loginLink.click();
        homePage.userNameBox.sendKeys("13718281991");
        homePage.passWordBox.sendKeys(userPwd);
        homePage.logInBtn.click();
        //expect(loginOk.isDisplayed()).toBe(true);
        expect(homePage.loginWarMsg.valueOf('帐号密码不匹配'));
        done();
    });
    //PP-3
    it("user incorrect password",function(done){
        homePage.loginLink.click();
        homePage.userNameBox.sendKeys(userName);
        homePage.passWordBox.sendKeys("ppmoney110");
        homePage.logInBtn.click();
        expect(homePage.loginWarMsg.valueOf('帐号密码不匹配'));
        done();
    });
});