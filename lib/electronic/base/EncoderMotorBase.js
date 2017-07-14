'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _type = require('../../core/type');

var _utils = require('../../core/utils');

var _utils2 = _interopRequireDefault(_utils);

var _MotorBase2 = require('./MotorBase');

var _MotorBase3 = _interopRequireDefault(_MotorBase2);

var _cmd = require('../../protocol/cmd');

var _cmd2 = _interopRequireDefault(_cmd);

var _command = require('../../communicate/command');

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EncoderMotorBase = function (_MotorBase) {
  _inherits(EncoderMotorBase, _MotorBase);

  /**
   * EncoderMotorBase
   * @constructor
   * @param {number} port
   * @param {number} slot
   */
  function EncoderMotorBase(port, slot) {
    _classCallCheck(this, EncoderMotorBase);

    return _possibleConstructorReturn(this, (EncoderMotorBase.__proto__ || Object.getPrototypeOf(EncoderMotorBase)).call(this, port, slot));
  }

  /**
   * EncoderMotor run
   * @return {Object} the instance
   */


  _createClass(EncoderMotorBase, [{
    key: 'run',
    value: function run() {
      var buf = void 0;
      if (this.args.port == 0) {
        buf = _utils2.default.composer(_cmd2.default.setEncoderMotorOnBoard, [this.args.slot, this.args.speed]);
      } else {
        buf = _utils2.default.composer(_cmd2.default.setEncoderMotor, [this.args.port, this.args.slot, this.args.speed, this.args.angle]);
      }
      _command2.default.execWrite(buf);
      return this;
    }

    /**
     * EncoderMotor run reversely
     * @return {Object} the instance
     */

  }, {
    key: 'reverse',
    value: function reverse() {
      this.offsetAngle(-1 * this.args.angle);
      return this.run();
    }
  }]);

  return EncoderMotorBase;
}(_MotorBase3.default);

exports.default = EncoderMotorBase;