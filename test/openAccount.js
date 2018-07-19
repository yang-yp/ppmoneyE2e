/**
 * created by Yyp on 2018/7/12
 * case coverage:PP-7,PP-8
 * Pre-step :user have longin and nabigation to the [开通存管账户] page
 * Test flow:
 * PP-7
 *  1,on[开通存管账户] page 输入：真实姓名,证件类型,证件号码,储蓄卡卡号,银行预留手机号
 *  2,click[支持银行],close[银行列表]page
 *  3,click[下一步]，进入[注册]page
 */
var EC = protractor.ExpectedConditions;
var BasePage =require('../test-framework/core/base-page.js');
var HomePage =require('../test-framework/pages/homePage.js');
var InchargePage =require('../test-framework/pages/inchargePage.js');
var PersonalRegisterPage =require('../test-framework/pages/personalRegisterPage.js');
var app = require('../properties/application.js');

describe("Verify user can open account using ID card and can't open using wrong ID card",function (){
    var basePage = new BasePage();
    var homePage = new HomePage();
    var inchargePage = new InchargePage();
    var personalRegisterPage = new PersonalRegisterPage();
    var ppMoneyUrl = app.ppmoneyUrl;
    var userName = app.userName;
    var userPwd = app.userPwd;
    var realName = app.realName;
    var cardNo = app.cardNo;
    var cardNoErr = app.cardNoErr;
    var bankCardNo = app.bankCardNo;
    var telNo = app.telNo;

    beforeAll(function(done){
        basePage.navigateToURL(ppMoneyUrl);
        /*        if (EC.visibilityOf(homePage.closePopup)){
                    homePage.closePopup.click();
                };*/
        homePage.loginLink.click();
        homePage.userNameBox.sendKeys(userName);
        homePage.passWordBox.sendKeys(userPwd);
        homePage.logInBtn.click();
        homePage.homePageLink.click();
        homePage.sleep();
        homePage.rechargeLink.click();
        homePage.switchBrowserTabs(2);
        expect(homePage.openAccountBtn.isDisplayed()).toBe(true);
        homePage.openAccountBtn.click();
        done();
    });
    afterAll(function(done){
        homePage.logOutBtn.click();
        done();
    });
    //PP-7
    it("verify user can open account using ID card",function(done){
        inchargePage.realNameBox.sendKeys(realName);
        inchargePage.cardTypeSelect.$('[value="身份证"]').click();
        inchargePage.cardNoBox.sendKeys(cardNo);
        inchargePage.bankLink.click();
        expect(inchargePage.supportBankDialog.isDisplayed()).toBe(true);
        inchargePage.bankDialogCloseBtn.click();
        inchargePage.bankCardBox.sendKeys(bankCardNo);
        inchargePage.bankPhoneBox.sendKeys(telNo);
        inchargePage.navigateToRegisterPage();
        expect(inchargePage.supportBankDialog.isDisplayed()).toBe(true);
        done();
    });
    //PP-8
    it("verify user can't open account using wrong ID card",function(done){
        inchargePage.realNameBox.sendKeys(realName);
        inchargePage.cardTypeSelect.$('[value="身份证"]').click();
        inchargePage.cardNoBox.sendKeys(cardNoErr);
        inchargePage.bankCardBox.sendKeys(bankCardNo);
        inchargePage.bankPhoneBox.sendKeys(telNo);
        inchargePage.nextBtn.click();
        expect(inchargePage.idErrDialog.isDisplayed()).toBe(true);
        inchargePage.dialogCloseBtn.click();
        done();
    });
});