'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _type = require('../../core/type');

var _utils = require('../../core/utils');

var _utils2 = _interopRequireDefault(_utils);

var _cmd = require('../../protocol/cmd');

var _cmd2 = _interopRequireDefault(_cmd);

var _command = require('../../communicate/command');

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Version = function () {
  function Version() {
    _classCallCheck(this, Version);
  }

  _createClass(Version, [{
    key: 'getVersion',
    value: function getVersion(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readVersion);
      _command2.default.execRead(buf, callback);
      return this;
    }
  }]);

  return Version;
}();

exports.default = new Version();