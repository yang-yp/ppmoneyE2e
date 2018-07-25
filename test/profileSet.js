/**
 * created by Yyp on 2018/6/22
 * case coverage:pp-10
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
    //PP-9
    it("update profile sucess ",function(done){
        homePage.bbsBtn.click();
        homePage.sleep();
        homePage.switchBrowserTabs(1);
        bbsPage.configBtn.click();
        bbsPage.sleep();
        bbsPage.realNameInput.clear();
        bbsPage.realNameInput.sendKeys("高飞飞");
        bbsPage.sexSelect.$('[value="1"]').click();
        if (EC.visibilityOf(bbsPage.birthModifyBtn)){
            bbsPage.birthModifyBtn.click();
        }else{
            bbsPage.provinceSelect.$('[value="北京市"]').click();
        };

        bbsPage.proSubmitBtn.click();
        bbsPage.sleep();
        bbsPage.sleep();
        bbsPage.eduTable.click();
        bbsPage.graduateSchoolInput.clear();
        bbsPage.graduateSchoolInput.sendKeys("工商管理学院");
        bbsPage.educationSelect.$('[value="硕士"]').click();
        bbsPage.proSubmitBtn.click();
        done();
     });
});