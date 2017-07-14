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

var Buzzer = function (_Electronic) {
  _inherits(Buzzer, _Electronic);

  function Buzzer() {
    _classCallCheck(this, Buzzer);

    var _this = _possibleConstructorReturn(this, (Buzzer.__proto__ || Object.getPrototypeOf(Buzzer)).call(this));

    _this.args = {
      tone: null,
      beat: null
    };
    return _this;
  }

  /**
   * set tone
   * @param  {String} tone tone string, such as "C5"
   */


  _createClass(Buzzer, [{
    key: 'tone',
    value: function tone(_tone) {
      this.args.tone = (0, _type.defineString)(_tone.toUpperCase());
      return this;
    }

    /**
     * set beat
     * @param  {Number} beat such as 250, 1000
     */

  }, {
    key: 'beat',
    value: function beat(_beat) {
      this.args.beat = (0, _type.defineNumber)(_beat);
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setTone, [this.args.tone, this.args.beat]);
      _command2.default.execWrite(buf);
      return this;
    }
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);

  return Buzzer;
}(_electronic2.default);

exports.default = Buzzer;