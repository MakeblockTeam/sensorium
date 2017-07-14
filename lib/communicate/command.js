'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @fileOverview 调度类
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 负责协议收发调度
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
//es6 module


var _transport = require('./transport');

var _transport2 = _interopRequireDefault(_transport);

var _read = require('./read');

var _read2 = _interopRequireDefault(_read);

var _write = require('./write');

var _write2 = _interopRequireDefault(_write);

var _parse = require('../core/parse');

var _parse2 = _interopRequireDefault(_parse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Command = function () {
  function Command() {
    _classCallCheck(this, Command);
  }
  /**
   * execute buffer
   * @param  {Array} buf [description]
   * @return {[type]}     [description]
   */


  _createClass(Command, [{
    key: 'exec',
    value: function exec(buf) {
      _transport2.default.send(buf); //借助通信管道发送
    }

    /**
     * an api to execute write
     * @param  {[type]}   buf      [description]
     * @return {[type]}            [description]
     */

  }, {
    key: 'execWrite',
    value: function execWrite(buf) {
      _write2.default.addRequest(this.exec.bind(this), buf);
    }

    /**
     * an api to execute read
     * @param  {[type]}   buf      [description]
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */

  }, {
    key: 'execRead',
    value: function execRead(buf, callback) {
      _read2.default.addRequest(this.exec.bind(this), buf, callback);
      //TODO: 谨慎执行超时重发
    }

    /**
     * parse the buffer and callback
     * @param  {Array} buff buffer responsed from transportion
     * @return {Undefined}
     */

  }, {
    key: 'pipe',
    value: function pipe(buff) {
      var buffer = _parse2.default.doParse(buff);
      if (!buffer) {//解析后无正确解析
        //do nothing
      } else if (buffer.length == 0) {//write 结果
        //do nothing
      } else {
        //read 结果
        // console.log('after parse ------>', buffer[0], buff);
        var index = buffer[0];
        var value = _parse2.default.getResult(buffer);
        this.emitCallback(index, value);
      }
    }
  }, {
    key: 'emitCallback',
    value: function emitCallback(index, value) {
      _read2.default.callbackProxy.apply(_read2.default, arguments);
    }
  }]);

  return Command;
}();

exports.default = new Command();