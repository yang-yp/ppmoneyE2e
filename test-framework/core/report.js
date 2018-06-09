/**
 * Created by i856279 (Isabell) on 9/17/16.
 */

var country  = require('./country.js');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  reportTitle: "API Portal Test Result -- "  + country['country'] ,
  dest: 'reports/' + country['country'],
  filename: 'API_Portal_UI_Test_Result.html',
  cleanDestination: true,
  showSummary: true,
  showConfiguration: true,
  reportOnlyFailedSpecs: false,
  captureOnlyFailedSpecs: false,
  showQuickLinks: true,
  configurationStrings: {
    "Date": new Date()
  },
  pathBuilder: function (currentSpec, suites) {
    return 'screenshots/' + currentSpec.fullName;
  }

});

module.exports = reporter;
