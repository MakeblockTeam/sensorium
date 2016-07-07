/**
 * the driver base class
 */
var logger = require('../log/log4js').logger;

function Driver() {
  var self = this;

  this._on_data = null;
  this._on_error = null;

  /**
   * [send interface]
   * @param  {[ArrayBuffer]} buf [the buffer to send]
   * @return {[integer]}     [the actual byte length sent. -1 if send fails.]
   */
  this.send = function(buf) {
    if (this._send) {
      return this._send(buf);
    }
  };

  this.on = function(event, callback) {
    switch (event) {
      case 'data':
        self._on_data = callback;
        break;
      case 'error':
        self._on_error = callback;
        break;
      default:
        logger.warn('unsupported event: ', event);
        break;
    }
  };
}

module.exports = Driver;
