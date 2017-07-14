'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var TemperatureOnBoard = function (_Electronic) {
  _inherits(TemperatureOnBoard, _Electronic);

  function TemperatureOnBoard() {
    _classCallCheck(this, TemperatureOnBoard);

    return _possibleConstructorReturn(this, (TemperatureOnBoard.__proto__ || Object.getPrototypeOf(TemperatureOnBoard)).call(this));
  }

  _createClass(TemperatureOnBoard, [{
    key: 'getData',
    value: function getData(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readTemperatureOnBoard);
      _command2.default.execRead(buf, callback);
      return this;
    }
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '0100';
    }
  }]);

  return TemperatureOnBoard;
}(_electronic2.default);

exports.default = TemperatureOnBoard;