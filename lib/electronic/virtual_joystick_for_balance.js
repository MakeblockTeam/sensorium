'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _type = require('../core/type');

var _utils = require('../core/utils');

var _utils2 = _interopRequireDefault(_utils);

var _electronic = require('./electronic');

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = require('../protocol/cmd');

var _cmd2 = _interopRequireDefault(_cmd);

var _command = require('../communicate/command');

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VirtualJoystickForBalance = function (_Electronic) {
  _inherits(VirtualJoystickForBalance, _Electronic);

  function VirtualJoystickForBalance() {
    _classCallCheck(this, VirtualJoystickForBalance);

    var _this = _possibleConstructorReturn(this, (VirtualJoystickForBalance.__proto__ || Object.getPrototypeOf(VirtualJoystickForBalance)).call(this));

    _this.args = {
      speed: 0,
      turnRange: 0
    };
    return _this;
  }

  _createClass(VirtualJoystickForBalance, [{
    key: 'speed',
    value: function speed(leftSpeed) {
      this.args.speed = leftSpeed || 0;
      return this;
    }
  }, {
    key: 'turnRange',
    value: function turnRange(range) {
      this.args.turnRange = range || 0;
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setVirtualJoystickForBalance, [this.args.turnRange, this.args.speed]);
      _command2.default.execWrite(buf);
      return this;
    }

    /**
     * run reversely
     * @return {Object} the instance
     */

  }, {
    key: 'reverse',
    value: function reverse() {
      this.speed(-1 * this.args.speed);
      return this.run();
    }
  }, {
    key: 'stop',
    value: function stop() {
      return this.speed(0).run();
    }
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '0110';
    }
  }]);

  return VirtualJoystickForBalance;
}(_electronic2.default);

exports.default = VirtualJoystickForBalance;