'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _type = require('../../core/type');

var _electronic = require('../electronic');

var _electronic2 = _interopRequireDefault(_electronic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MotorBase = function (_Electronic) {
  _inherits(MotorBase, _Electronic);

  /**
   * Motor base class
   * @constructor
   * @param {number} port
   * @param {number} slot
   */
  function MotorBase(port, slot) {
    _classCallCheck(this, MotorBase);

    var _this = _possibleConstructorReturn(this, (MotorBase.__proto__ || Object.getPrototypeOf(MotorBase)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port),
      slot: (0, _type.defineNumber)(slot),
      speed: 0
    };
    return _this;
  }

  /**
   * speed
   * @param  {Number} speed
   * @return {Object} the instance
   */


  _createClass(MotorBase, [{
    key: 'speed',
    value: function speed(_speed) {
      this.args.speed = (0, _type.defineNumber)(_speed, 0);
      return this;
    }

    /**
     * this interface does nothing
     */

  }, {
    key: 'run',
    value: function run() {
      return this;
    }

    /**
     * stop motor
     */

  }, {
    key: 'stop',
    value: function stop() {
      return this.speed(0).run();
    }
  }]);

  return MotorBase;
}(_electronic2.default);

exports.default = MotorBase;