/**
 * created by Yyp on 2018/8/25
 * case coverage:pp-11
 * Pre-step :login
 * Test flow:
 * 1,on the bbsPage click 未读消息
 * 2,顺次 click 出借通知 ，收益通知，提现通知，充值通知，系统通知，所有通知
 * 3,所有通知的时候如果有多页的话，遍历每一页。到最后一页是点击  首页；到首页时点击尾页。
 */

var EC = protractor.ExpectedConditions;
var BasePage =require('../test-framework/core/base-page.js');
var HomePage =require('../test-framework/pages/homePage.js');
var LetterPage =require('../test-framework/pages/letterPage.js');
var app = require('../properties/application.js');
var timeOut = browser.params.timeOut;

describe(" a case of longin secess",function (){
    var basePage = new BasePage();
    var homePage = new HomePage();
    var letterPage = new LetterPage();
    var ppMoneyUrl = app.ppmoneyUrl;
    var userName = app.userName;
    var userPwd = app.userPwd;


    beforeAll(function(done){
        basePage.navigateToURL(ppMoneyUrl);
        /*if (EC.visibilityOf(homePage.popBtn)){
            homePage.popBtn.click()
        };*/
        if (EC.visibilityOf(homePage.loginLink)){
            homePage.loginLink.click();
        };
        homePage.loginHomePage(userName,userPwd);
        done();
    });
    afterAll(function(done){
        done();
    });


    //PP-10
    it("read all message ",function(done){
        homePage.messageBtn.click();
        /*if (EC.visibilityOf(letterPage.allMsgTable)){
            letterPage.allMsgTable.click();
        };*/
        browser.wait(EC.elementToBeClickable(letterPage.rentMsgTable), timeOut);
        letterPage.rentMsgTable.click;

        //letterPage.profitMsgTable.click;
        //letterPage.cashMsgTable.click;
        //letterPage.inchargeMsgTable.click;
        //letterPage.sysMsgTable.click;
        /*if (EC.visibilityOf(letterPage.nextPageBtn)){
            letterPage.nextPageBtn.click();
        }; */
        //letterPage.rentMsgTable.click;
        expect(letterPage.rentMsgTable.isDisplayed()).toBe(true);
        done();
     });
});