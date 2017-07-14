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

var LedMatrixTime = function (_LedMatrixBase) {
  _inherits(LedMatrixTime, _LedMatrixBase);

  function LedMatrixTime(port) {
    _classCallCheck(this, LedMatrixTime);

    var _this = _possibleConstructorReturn(this, (LedMatrixTime.__proto__ || Object.getPrototypeOf(LedMatrixTime)).call(this, port));

    Object.assign(_this.args, {
      separator: null,
      hour: null,
      minute: null
    });
    return _this;
  }

  _createClass(LedMatrixTime, [{
    key: 'separator',
    value: function separator(_separator) {
      this.args.separator = _separator;
      return this;
    }
  }, {
    key: 'hour',
    value: function hour(h) {
      this.args.hour = (0, _type.defineNumber)(h);
      return this;
    }
  }, {
    key: 'minute',
    value: function minute(m) {
      this.args.minute = (0, _type.defineNumber)(m);
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setLedMatrixTime, [this.args.port, this.args.separator, this.args.hour, this.args.minute]);
      _command2.default.execWrite(buf);
      return this;
    }
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1110';
    }
  }]);

  return LedMatrixTime;
}(_LedMatrixBase3.default);

exports.default = LedMatrixTime;