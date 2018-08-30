/**
 * Created by Yyp on 5/7/18.
 */
var BasePage = require('../core/base-page.js');
var EC = protractor.ExpectedConditions;
var timeOut = browser.params.timeOut;
var LetterPage = function LetterPage() {};

LetterPage.prototype = Object.create(BasePage.prototype);
LetterPage.prototype.allMsgTable = element(by.partialLinkText('所有消息'));
LetterPage.prototype.rentMsgTable = element(by.partialLinkText('出借通知'));
LetterPage.prototype.profitMsgTable = element(by.partialLinkText('收益通知'));
LetterPage.prototype.cashMsgTable = element(by.partialLinkText('提现通知'));
LetterPage.prototype.inchargeMsgTable = element(by.partialLinkText('充值通知'));
LetterPage.prototype.sysMsgTable = element(by.partialLinkText('系统通知'));
LetterPage.prototype.firstPageBtn = element.all(by.css('div#letterlist > div.pp-pagination-wrap > div.pp-pagination > div.pagination > a.item.item-anti ')).first();
LetterPage.prototype.lastPageBtn = element.all(by.css('div#letterlist > div.pp-pagination-wrap > div.pp-pagination > div.pagination > a.item.item-anti ')).last();
LetterPage.prototype.nextPageBtn = element.all(by.css('div#letterlist > div.pp-pagination-wrap > div.pp-pagination > div.pagination > a.item.item-anti ')).next();

module.exports = LetterPage;