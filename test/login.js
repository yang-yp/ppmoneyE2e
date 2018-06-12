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
    it("user login",function(done){
        basePage.navigateToURL('https://www.ppmoney.com/');
        var loginLink = element.all(by.css('ul#topLoginState.site-nav-r.fr > li > a' )).first();
        var userName =element(by.id('Phone'));
        var closePopup = element(by.id('popbtn'));
        if (EC.visibilityOf(closePopup)){
            closePopup.click();
        };
        loginLink.click();
        expect(userName.isDisplayed()).toBe(true);
        userName.sendKeys("13718281997")
        done();
    });
    });