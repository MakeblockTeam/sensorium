'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _type = require('../core/type');

var _utils = require('../core/utils');

var _utils2 = _interopRequireDefault(_utils);

var _LedMatrixBase2 = require('./base/LedMatrixBase');

var _LedMatrixBase3 = _interopRequireDefault(_LedMatrixBase2);

var _cmd = require('../protocol/cmd');

var _cmd2 = _interopRequireDefault(_cmd);

var _command = require('../communicate/command');

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LedMatrixChar = function (_LedMatrixBase) {
  _inherits(LedMatrixChar, _LedMatrixBase);

  function LedMatrixChar(port) {
    _classCallCheck(this, LedMatrixChar);

    var _this = _possibleConstructorReturn(this, (LedMatrixChar.__proto__ || Object.getPrototypeOf(LedMatrixChar)).call(this, port));

    Object.assign(_this.args, {
      x: null,
      y: null,
      char: null
    });
    return _this;
  }

  _createClass(LedMatrixChar, [{
    key: 'x',
    value: function x(xAxis) {
      this.args.x = xAxis;
      return this;
    }
  }, {
    key: 'y',
    value: function y(yAxis) {
      this.args.y = yAxis;
      return this;
    }
  }, {
    key: 'char',
    value: function char(str) {
      this.args.str = str;
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setLedMatrixChar, [this.args.port, this.args.x, this.args.y, this.args.char]);
      _command2.default.execWrite(buf);
      return this;
    }
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1110';
    }
  }]);

  return LedMatrixChar;
}(_LedMatrixBase3.default);

exports.default = LedMatrixChar;