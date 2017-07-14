'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _type = require('../../core/type');

var _utils = require('../../core/utils');

var _utils2 = _interopRequireDefault(_utils);

var _electronic = require('../electronic');

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = require('../../protocol/cmd');

var _cmd2 = _interopRequireDefault(_cmd);

var _command = require('../../communicate/command');

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var bufComposer = function bufComposer(obj) {
  var args = [obj.port, obj.slot, obj.ledPosition].concat(_toConsumableArray(obj.rgb));
  return _utils2.default.composer(_cmd2.default.setLed, args);
};

var commandWrite = function commandWrite(obj) {
  // console.log('led ------->', obj.ledPosition, ...obj.rgb);
  var buf = bufComposer(obj);
  _command2.default.execWrite(buf);
};

var RgbLedBase = function (_Electronic) {
  _inherits(RgbLedBase, _Electronic);

  /**
   * RgbLed类，led模块
   * @param {number} port - led port口
   * @param {number} position - led灯的位置
   */
  function RgbLedBase(port, slot) {
    _classCallCheck(this, RgbLedBase);

    var _this = _possibleConstructorReturn(this, (RgbLedBase.__proto__ || Object.getPrototypeOf(RgbLedBase)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port),
      slot: (0, _type.defineNumber)(slot),
      ledPosition: 0,
      rgb: [0, 0, 0]
    };
    return _this;
  }

  /**
   * set led position
   * @param {number} position
   */


  _createClass(RgbLedBase, [{
    key: 'position',
    value: function position(_position) {
      this.args.ledPosition = (0, _type.defineNumber)(_position, this.args.ledPosition);
      return this;
    }

    /**
     * set led red value
     * @param {number} value 0 ~ 255
     */

  }, {
    key: 'r',
    value: function r(value) {
      this.args.rgb[0] = (0, _type.defineNumber)(value, this.args.rgb[0]);
      return this;
    }

    /**
     * set led green value
     * @param {number} value 0 ~ 255
     */

  }, {
    key: 'g',
    value: function g(value) {
      this.args.rgb[1] = (0, _type.defineNumber)(value, this.args.rgb[1]);
      return this;
    }

    /**
     * set blue red value
     * @param {number} value 0 ~ 255
     */

  }, {
    key: 'b',
    value: function b(value) {
      this.args.rgb[2] = (0, _type.defineNumber)(value, this.args.rgb[2]);
      return this;
    }

    /**
     * turn on led
     * @param {number} position
     */

  }, {
    key: 'turnOn',
    value: function turnOn() {
      commandWrite(this.args);
      return this;
    }

    /**
     * turn off led
     * @param {number} position
     */

  }, {
    key: 'turnOff',
    value: function turnOff() {
      this.args.rgb = [0, 0, 0];
      commandWrite(this.args);
      return this;
    }

    /**
     * turn on all the leds
     */

  }, {
    key: 'turnOnAll',
    value: function turnOnAll() {
      this.position(0);
      return this.turnOn();
    }

    /**
     * turn off all the leds
     */

  }, {
    key: 'turnOffAll',
    value: function turnOffAll() {
      this.position(0);
      return this.turnOff();
    }

    /**
     * LED亮红色灯光
     */

  }, {
    key: 'red',
    value: function red() {
      this.args.rgb = [255, 0, 0];
      commandWrite(this.args);
      return this;
    }

    /**
     * LED亮绿色灯光
     */

  }, {
    key: 'green',
    value: function green() {
      this.args.rgb = [0, 255, 0];
      commandWrite(this.args);
      return this;
    }

    /**
     * LED亮蓝色灯光
     */

  }, {
    key: 'blue',
    value: function blue() {
      this.args.rgb = [0, 0, 255];
      commandWrite(this.args);
      return this;
    }

    /**
     * LED亮白色灯光
     */

  }, {
    key: 'white',
    value: function white() {
      this.args.rgb = [255, 255, 255];
      commandWrite(this.args);
      return this;
    }
  }]);

  return RgbLedBase;
}(_electronic2.default);

exports.default = RgbLedBase;