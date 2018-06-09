/**
 * Created by i856279 (Isabell) on 8/12/16.
 */

module.exports = {
  seleniumAddress: (process.env.SELENIUM_URL || 'http://localhost:4444/wd/hub'),
  capabilities: {
    browserName: (process.env.TEST_BROWSER_NAME || 'firefox'),
    cleanSession:true,
    ensureCleanSession:true,
    version: (process.env.TEST_BROWSER_VERSION || 'ANY'),
    shardTestFiles: true,
    acceptInsecureCerts: true,
    maxInstances: 3
  },

  multiCapabilities: [{
    'browserName': 'chrome',
    'version': 63,
    'platform': 'WINDOWS',
    'count': 1,
  }, {
    'browserName': 'firefox',
    'version': 60,
    'platform': 'WINDOWS',
    'count': 1,
  }, {
    'browserName': 'safari',
    'version': 10.1,
    'platform': 'WINDOWS',
    'count': 1,
  }],


};
