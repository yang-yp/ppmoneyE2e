/**
 * created by Yyp on 2018/6/22
 * case coverage:PP-9
 * Pre-step :login
 * Test flow:
 * 1,on the homePage click bbs then go to the 交流分享
 * 2,write a new
 */
var EC = protractor.ExpectedConditions;
var BasePage =require('../test-framework/core/base-page.js');
var HomePage =require('../test-framework/pages/homePage.js');
var BbsPage =require('../test-framework/pages/bbsPage.js');
var app = require('../properties/application.js');

describe(" a case of longin secess",function (){
    var basePage = new BasePage();
    var homePage = new HomePage();
    var bbsPage = new BbsPage();
    var ppMoneyUrl = app.ppmoneyUrl;
    var userName = app.userName;
    var userPwd = app.userPwd;

    beforeAll(function(done){
        basePage.navigateToURL(ppMoneyUrl);
        homePage.loginLink.click();
        homePage.userNameBox.sendKeys(userName);
        homePage.passWordBox.sendKeys(userPwd);
        homePage.logInBtn.click();
        done();
    });
    afterAll(function(done){
        done();
    });
    //PP-8
    it("user ",function(done){
        homePage.bbsBtn.click();
        homePage.sleep();
        homePage.switchBrowserTabs(1);
        bbsPage.shareBtn.click();
        bbsPage.sleep();
        homePage.switchBrowserTabs(2);
        bbsPage.newSpecialBtn.click();
        bbsPage.bbsTitleInput.sendKeys("1to1");
        bbsPage.bbsInput.sendKeys("11111111");
        bbsPage.bbsSubmitBtn.click();
        expect(bbsPage.bbsVerifyTitle.getText()).toEqual("1to1");
        done();
     });

});