/**
 * Created by i856279 (Isabell) on 8/6/16.
 */

var country = require('./test-framework/core/country.js');
var env = require('./configuration/environment.js');
var spec = require('./specs/specs.js');
var reporter = require('./test-framework/core/report.js');
var AllureReporter = require('jasmine-allure-reporter');
var SpecReporter = require('jasmine-spec-reporter');
var fs = require('fs');

exports.config = {
  framework: 'jasmine2',
  directConnect: false,
  seleniumAddress: env.seleniumAddress,
  specs: spec.specs,
  suites: spec.suites,
  capabilities: env.capabilities,
  multiCapabilities:env.multiCapabilities,

  jasmineNodeOpts: {
    defaultTimeoutInterval: 180000,
    showColors: true
  },

  beforeLaunch: function () {
    return new Promise(function (resolve) {
      reporter.beforeLaunch(resolve);
    });
  },

  onPrepare: function () {

    var cookieDir = /cookie.txt/;
    files = fs.readdirSync('.');
    files.forEach(function(file){
      if(cookieDir.test(file)){
        fs.unlinkSync(file);
      }
    });
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().setSize(1600, 800);
    browser.driver.manage().timeouts().implicitlyWait(10000);

    jasmine.getEnv().addReporter(reporter);
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all' }));
    jasmine.getEnv().addReporter(new AllureReporter({
      allureReport: {
        resultsDir: '/allure/'
      }
    }));

    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });

    global.isAngularSite = function (flag) {
      browser.ignoreSynchronization = !flag;
    };
  },

  afterLaunch: function (exitCode) {
    return new Promise(function (resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },

  beforeAll: function (done) {
    return new Promise(function (resolve) {
      browser.ignoreSynchronization = true;
      done();
    },5000);
  },

  afterAll: function (done) {
    return new Promise(function (resolve) {
      browser.ignoreSynchronization = true;
      done();
    },5000);
  },

  params: {
    baseEnv : 'qa2',
    realm: 'p2pTeSg-15',
    timeOut : 15000
  }

};
