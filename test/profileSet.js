/**
 * created by Yyp on 2018/7/25
 * case coverage:pp-10
 * Pre-step :login
 * Test flow:
 * 1,on the bbsPage click 设置
 * 2,on the 基本 tab input the name and  province then submit
 * 3,on the 教育情况 tab input the graduate School and  education then submit
 */
var EC = protractor.ExpectedConditions;
var BasePage =require('../test-framework/core/base-page.js');
var HomePage =require('../test-framework/pages/homePage.js');
var BbsPage =require('../test-framework/pages/bbsPage.js');
var app = require('../properties/application.js');
var timeOut = browser.params.timeOut;

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
        homePage.loginHomePage(userName,userPwd);
        done();
    });
    afterAll(function(done){
        done();
    });
    //PP-10
    it("update profile sucess ",function(done){
        homePage.bbsBtn.click();
        homePage.sleep();
        homePage.switchBrowserTabs(1);
        bbsPage.configBtn.click();
        browser.wait(EC.visibilityOf(bbsPage.realNameInput), timeOut);
        bbsPage.realNameInput.clear();
        bbsPage.realNameInput.sendKeys("高飞飞");
        bbsPage.sexSelect.$('[value="1"]').click();
        if (EC.visibilityOf(bbsPage.birthModifyBtn)){
            bbsPage.birthModifyBtn.click();
        }else{
            bbsPage.provinceSelect.$('[value="北京市"]').click();
        };

        bbsPage.proSubmitBtn.click();
        browser.wait(EC.elementToBeClickable(bbsPage.eduTable), timeOut);
        bbsPage.eduTable.click();
        bbsPage.graduateSchoolInput.clear();
        bbsPage.graduateSchoolInput.sendKeys("工商管理学院");
        bbsPage.educationSelect.$('[value="硕士"]').click();
        bbsPage.proSubmitBtn.click();
        done();
     });
});