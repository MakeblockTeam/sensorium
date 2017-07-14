'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _transport = require('../communicate/transport');

var _transport2 = _interopRequireDefault(_transport);

var _command = require('../communicate/command');

var _command2 = _interopRequireDefault(_command);

var _version = require('./firmware/version');

var _version2 = _interopRequireDefault(_version);

var _settings = require('../mainboard/settings');

var _settings2 = _interopRequireDefault(_settings);

var _mcore = require('./mcore');

var _mcore2 = _interopRequireDefault(_mcore);

var _orion = require('./orion');

var _orion2 = _interopRequireDefault(_orion);

var _auriga = require('./auriga');

var _auriga2 = _interopRequireDefault(_auriga);

var _megaPi = require('./megaPi');

var _megaPi2 = _interopRequireDefault(_megaPi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var boards = {
  "auriga": _auriga2.default,
  "mcore": _mcore2.default,
  "megapi": _megaPi2.default,
  "orion": _orion2.default

  /**
   * 构造函数返回值，改变了构造函数实例
   * Sensorium 原型方法只能统一用静态方法代替
   */
};
var Sensorium = function () {
  /**
   * @constructor
   */
  function Sensorium() {
    _classCallCheck(this, Sensorium);
  }

  /**
   * @param {String} boardName 主控板名，忽略大小写
   * @param {Object} opts     (optional)
   */


  _createClass(Sensorium, [{
    key: 'create',
    value: function create(mainboardName, opts) {
      var board = boards[mainboardName.toLowerCase()];
      if (typeof board == 'undefined') {
        throw new Error('sorry, the board ' + boardName + ' could not be supported!');
      }
      return new board(opts);
    }

    /**
     * set transport such as bluetooth、serialport
     * @param {Tranport} transport object that contains send and onReceived functions
     */
    //TO COMFIRM：是否重复 setTransport 导致事件监听绑定多次?

  }, {
    key: 'setTransport',
    value: function setTransport(transport) {
      if (transport && typeof transport.send == 'function' && typeof transport.onReceived == 'function') {
        _transport2.default.send = transport.send;
        transport.onReceived(_command2.default.pipe.bind(_command2.default));
      } else {
        // console.warn('')
      }
    }

    /**
     * read firmware verion and parse the device info
     * @param  {Function} callback the function then to be execute
     */

  }, {
    key: 'readFirmwareInfo',
    value: function readFirmwareInfo(callback) {
      _version2.default.getVersion(function (val) {
        var id = void 0,
            firmwareName = void 0;
        if (val) {
          id = val.split('.')[0];
          firmwareName = _settings2.default.FIRMWARE_ID[parseInt(id)];
        }
        typeof callback == 'function' && callback(firmwareName, val);
      });
    }
  }, {
    key: 'getSupported',
    value: function getSupported() {
      return Object.keys(boards);
    }
  }]);

  return Sensorium;
}();

//webpack umd


module.exports = Sensorium;