'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * write request controler.
 */
var TIME_INTERVAL = 50;

var WriteControl = {
  writeRecord: {},
  /**
   * this function is drived by
   * @param {Function}   execFunc  addRequest execute as proxy
   * @param {Array}   buf      rj25 buffer
   * @param {Function} callback [description]
   */
  addRequest: function addRequest(execFunc, buf) {
    var time = new Date().getTime();
    var bufStr = buf.join('_');
    if (this.writeRecord.buf != bufStr || time - this.writeRecord.time > TIME_INTERVAL) {
      this.writeRecord.buf = bufStr;
      this.writeRecord.time = time;
      execFunc(buf);
    }
  }
};

exports.default = WriteControl;