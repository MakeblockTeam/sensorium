'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Board2 = require('../core/Board');

var _Board3 = _interopRequireDefault(_Board2);

var _index = require('../electronic/index');

var _index2 = _interopRequireDefault(_index);

var _mode = require('./firmware/mode');

var _mode2 = _interopRequireDefault(_mode);

var _version = require('./firmware/version');

var _version2 = _interopRequireDefault(_version);

var _settings = require('./settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//支持位置
var SUPPORT_INDEX = _settings2.default.SUPPORTLIST.indexOf('Auriga');

var Auriga = function (_Board) {
  _inherits(Auriga, _Board);

  function Auriga(conf) {
    _classCallCheck(this, Auriga);

    var _this = _possibleConstructorReturn(this, (Auriga.__proto__ || Object.getPrototypeOf(Auriga)).call(this, conf));
    //继承 Board


    var this_ = _this;
    //固件当前模式
    _this.currentMode = null;
    //固件版本
    _this.version = null;
    // 置空已连接块
    _this.connecting = {};
    // 挂载电子模块

    var _loop = function _loop(name) {
      var eModule = _index2.default[name];
      if (eModule.supportStamp().charAt(SUPPORT_INDEX) === '1') {
        _this[name] = function () {
          return this_.eModuleFactory(eModule, arguments);
        };
      }
    };

    for (var name in _index2.default) {
      _loop(name);
    }
    return _this;
  }

  /**
   * 获取版本号，所有主控板支持
   * @param  {!Function} callback
   */


  _createClass(Auriga, [{
    key: 'getVersion',
    value: function getVersion(callback) {
      var this_ = this;
      if (this.version) {
        typeof callback == 'function' && callback(this.version);
      } else {
        _version2.default.getVersion(function (val) {
          this_.version = val;
          typeof callback == 'function' && this.version;
        });
      }
    }

    /**
     * 设置固件模式
     * @param {Number} mode 0、1、2、3、4
     */

  }, {
    key: 'setFirmwareMode',
    value: function setFirmwareMode(mode) {
      var subCmd = 0x11;
      _mode2.default.setMode(subCmd, mode);
      return this;
    }
    /**
     * 获取固件模式
     * @param  {Function} callback 取值后回调函数
     */
    //TODO: 数据缓存

  }, {
    key: 'getFirmwareMode',
    value: function getFirmwareMode(callback) {
      var subCmd = 0x71;
      _mode2.default.getMode(subCmd, callback);
      return this;
    }

    /**
     * 获取固件电压
     * @param  {Function} callback 取值后回调函数
     */

  }, {
    key: 'getVoltage',
    value: function getVoltage(callback) {
      var subCmd = 0x70;
      _mode2.default.getMode(subCmd, callback);
      return this;
    }
  }]);

  return Auriga;
}(_Board3.default);

exports.default = Auriga;