'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = require('../mainboard/settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * @fileOverview board 用做通信基类，连接收和发送接口.
                                                                                                                                                                                                     * @author Hyman
                                                                                                                                                                                                     */


var createModuleId = function createModuleId(eModule, args) {
  var _ref;

  args = [].concat(_toConsumableArray(args)); //转数组
  var name = eModule.name;
  var expectLength = eModule.length;
  var argsLength = args.length;
  if (argsLength < expectLength) {
    //参数不足
    console.warn('there\'s lack of ' + (expectLength - argsLength) + ' argument(s), and ' + eModule.name + ' may not work as a result');
  } else if (argsLength > expectLength) {
    //参数多余
    args.splice(expectLength);
  }
  return (_ref = [name]).concat.apply(_ref, _toConsumableArray(args)).join('_').toLowerCase();
};

// 超类： 具备发送、接收方法

var Board = function () {
  function Board(conf) {
    _classCallCheck(this, Board);

    this._config = conf || {};
    //已连接元件
    this.connecting = {};
  }

  /**
   * 电子模块实例工厂
   * @param  {Function} eModule 电子模块类
   * @param  {Array-Like} args    [port, slot, id...]
   * @return {Object}         电子模块实例
   */


  _createClass(Board, [{
    key: 'eModuleFactory',
    value: function eModuleFactory(eModule, args) {
      var id = createModuleId(eModule, args);
      if (this.connecting[id]) {
        return this.connecting[id];
      } else {
        var emodule = new (Function.prototype.bind.apply(eModule, [null].concat(_toConsumableArray(args))))();
        // 保存模块
        this.connecting[id] = emodule;
        return emodule;
      }
    }
  }]);

  return Board;
}();

exports.default = Board;