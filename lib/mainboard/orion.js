'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Board2 = require('../core/Board');

var _Board3 = _interopRequireDefault(_Board2);

var _index = require('../electronic/index');

var _index2 = _interopRequireDefault(_index);

var _version = require('./firmware/version');

var _version2 = _interopRequireDefault(_version);

var _settings = require('./settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//支持位置
var SUPPORT_INDEX = _settings2.default.SUPPORTLIST.indexOf('Orion');

//实现一个板子就注册一个板子名称

var Orion = function (_Board) {
  _inherits(Orion, _Board);

  function Orion(conf) {
    _classCallCheck(this, Orion);

    var _this = _possibleConstructorReturn(this, (Orion.__proto__ || Object.getPrototypeOf(Orion)).call(this, conf));
    //继承 Board


    var this_ = _this;
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


  _createClass(Orion, [{
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
  }]);

  return Orion;
}(_Board3.default);

exports.default = Orion;