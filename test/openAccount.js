/**
 * created by Yyp on 2018/7/12
 * case coverage:PP-7
 * Pre-step :user have longin
 * Test flow:
 * 1,on[开通存管账户] page 输入：真实姓名,证件类型,证件号码,储蓄卡卡号,银行预留手机号
 * 2,click[支持银行],close[银行列表]page
 * 3,click[下一步]，进入[验证]page
 */
var EC = protractor.ExpectedConditions;
var BasePage =require('../test-framework/core/base-page.js');
var HomePage =require('../test-framework/pages/homePage.js');
var app = require('../properties/application.js');

describe("Verify global navigation of PPmoney",function (){
    var basePage = new BasePage();
    var homePage = new HomePage();
    var ppMoneyUrl = app.ppmoneyUrl;
    var userName = app.userName;
    var userPwd = app.userPwd;

    beforeAll(function(done){
        basePage.navigateToURL(ppMoneyUrl);
        /*        if (EC.visibilityOf(homePage.closePopup)){
                    homePage.closePopup.click();
                };*/
        homePage.loginLink.click();
        homePage.userNameBox.sendKeys(userName);
        homePage.passWordBox.sendKeys(userPwd);
        homePage.logInBtn.click();
        done();
    });
    afterAll(function(done){
        homePage.logOutBtn.click();
        done();
    });
    //PP-4
    it("verify can go to home page from the default page",function(done){
        homePage.homePageLink.click();
        expect(homePage.moneyLable.valueOf('可用余额(元)'));
        done();
    });
    //PP-5
    it("verify user can access the myAccount page",function(done){
        homePage.goMyAccountBtn.click();
        expect(homePage.loginOkLable.valueOf('注册号：1077513746487'));
        done();
    });
    //PP-6
    it("verify user can access the recharge page",function(done){
        homePage.homePageLink.click();
        homePage.sleep();
        homePage.rechargeLink.click();
        expect(homePage.openAccountBtn.isDisplayed).toBe(true);
        homePage.openAccountBtn.click();
        done();
    });
});