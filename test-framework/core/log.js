/**
 * Created by i856279 (Isabell) on 8/12/16.
 */

var winston = require('winston');

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, { timestamp:true});
winston.add(winston.transports.File, {
  filename: '../../apiportal/e2e/logs/application.log',
  handleExceptions: true,
  humanReadableUnhandledException: true,
  level: 'debug'
});

module.exports = winston;
