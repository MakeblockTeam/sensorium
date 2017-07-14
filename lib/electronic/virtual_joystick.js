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

var VirtualJoystick = function (_Electronic) {
  _inherits(VirtualJoystick, _Electronic);

  function VirtualJoystick() {
    _classCallCheck(this, VirtualJoystick);

    var _this = _possibleConstructorReturn(this, (VirtualJoystick.__proto__ || Object.getPrototypeOf(VirtualJoystick)).call(this));

    _this.args = {
      leftSpeed: 0,
      rightSpeed: 0
    };
    return _this;
  }

  _createClass(VirtualJoystick, [{
    key: 'speed',
    value: function speed(leftSpeed, rightSpeed) {
      this.args.leftSpeed = leftSpeed || 0;
      this.args.rightSpeed = rightSpeed || 0;
      return this;
    }
  }, {
    key: 'leftSpeed',
    value: function leftSpeed(speed) {
      this.args.leftSpeed = speed || 0;
      return this;
    }
  }, {
    key: 'rightSpeed',
    value: function rightSpeed(speed) {
      this.args.rightSpeed = speed || 0;
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setJoystick, [this.args.leftSpeed, this.args.rightSpeed]);
      _command2.default.execWrite(buf);
      return this;
    }
  }, {
    key: 'stop',
    value: function stop() {
      return this.speed(0, 0).run();
    }
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);

  return VirtualJoystick;
}(_electronic2.default);

exports.default = VirtualJoystick;