(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Sensorium"] = factory();
	else
		root["Sensorium"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 88);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(112);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(127), __esModule: true };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(60);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(140);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(144);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(60);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertySymbols = __webpack_require__(118);

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _getOwnPropertyNames = __webpack_require__(124);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _toConsumableArray2 = __webpack_require__(34);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileOverview 工具类函数
 */
exports.default = {
  /**
   * limit value
   * @param  {Number} value
   * @param  {Array} range  (optional) limit value range, such as [-255, 255], [0, 3000], default is [-255, 255]
   * @return {Number} newSpeed the result value in limit.
   */
  limitValue: function limitValue(value, range) {
    var newValue = value;
    range = range || [-255, 255];
    if (value < range[0]) {
      newValue = range[0];
    }

    if (value > range[1]) {
      newValue = range[1];
    }
    return newValue;
  },

  /**
   * Convert array of int to ArrayBuffer.
   * @param  {[int]} data array of int
   * @return {ArrayBuffer}      result array buffer
   * @private
   */
  arrayBufferFromArray: function arrayBufferFromArray(data) {
    var buffer = new ArrayBuffer(data.length);
    var result = new Int8Array(buffer);
    for (var i = 0; i < data.length; i++) {
      result[i] = data[i];
    }
    return buffer;
  },

  /**
   * Convert ArrayBuffer from array of int
   * @param  {ArrayBuffer} buffer the source arraybuffer
   * @return {[int]}        int array as the result;
   * @private
   */
  arrayFromArrayBuffer: function arrayFromArrayBuffer(buffer) {
    var dataView = new Uint8Array(buffer);
    var result = [];
    for (var i = 0; i < dataView.length; i++) {
      result.push(dataView[i]);
    }
    return result;
  },

  /**
   * [buffer2string converts array buffer to string format]
   * @param  {ArrayBuffer} buf [the input array buffer]
   * @return {String}     [the output string]
   */
  buffer2string: function buffer2string(buf) {
    var buffer = new Uint8Array(buf);
    return Array.prototype.join.call(buffer, " ");
  },

  /**
   * [string2buffer converts string to array buffer format]
   * @param  {String} str [the input string]
   * @return {Uint8Array}     [the output uint8 array buffer]
   */
  string2buffer: function string2buffer(str) {
    var buffer = new Uint8Array(str.split(" "));
    return buffer;
  },

  /**
   * 将十进制字符串数组转为16进制
   * @param  {Array}  data        to be transformed data, such as: ["01", "55", "12"]
   * @param  {Boolean} isUpperCase whether need output upperCase string.
   * @return {String} 16 进制字符串
   */
  intStrToHexStr: function intStrToHexStr(data, isUpperCase) {
    var temp = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i] != null) {
        var item = parseInt(data[i]).toString(16);
        if (isUpperCase) {
          item = parseInt(data[i]).toString(16).toUpperCase();
        }
        if (item.length == 1) {
          item = "0" + item;
        }
        temp.push(item);
      }
    }
    return temp.join(" ");
  },

  // 十六进制字符串转成十进制
  hexStr2IntArray: function hexStr2IntArray(str) {
    var a = str.split(" ");
    var arr = [];
    for (var i in a) {
      var num = parseInt(a[i], 16);
      arr.push(num);
    }
    arr.reverse();
    return arr;
  },

  /**
   * Float to bytes.
   * 现将float转成整形，再将整形转成字节表示
   * @param  {float} float number
   * @return {bytes}
   */
  float32ToBytes: function float32ToBytes(value) {
    // TOFIX: hack
    if (value == 0) {
      return [0, 0, 0, 0];
    }
    var bytesInt = 0;
    switch (value) {
      case Number.POSITIVE_INFINITY:
        bytesInt = 0x7F800000;
        break;
      case Number.NEGATIVE_INFINITY:
        bytesInt = 0xFF800000;
        break;
      case +0.0:
        bytesInt = 0x40000000;
        break;
      case -0.0:
        bytesInt = 0xC0000000;
        break;
      default:
        // if (Number.isNaN(value)) { bytesInt = 0x7FC00000; break; }
        if (value <= -0.0) {
          bytesInt = 0x80000000;
          value = -value;
        }

        var exponent = Math.floor(Math.log(value) / Math.log(2));
        var significand = value / Math.pow(2, exponent) * 0x00800000 | 0;

        exponent += 127;
        if (exponent >= 0xFF) {
          exponent = 0xFF;
          significand = 0;
        } else if (exponent < 0) exponent = 0;

        bytesInt = bytesInt | exponent << 23;
        bytesInt = bytesInt | significand & ~(-1 << 23);
        break;
    }
    var bytesArray = this.bigIntToBytes(bytesInt);
    return bytesArray;
  },

  /**
   * 整形转换成字节数组
   * @param  {number} value 整形
   * @return {array}  array数组
   */
  bigIntToBytes: function bigIntToBytes(value) {
    var bytesArray = [];
    var b1 = value & 0xff;
    var b2 = value >> 8 & 0xff;
    var b3 = value >> 16 & 0xff;
    var b4 = value >> 24 & 0xff;
    bytesArray.push(b1);
    bytesArray.push(b2);
    bytesArray.push(b3);
    bytesArray.push(b4);
    return bytesArray;
  },

  /**
   * 32位整数转成字节，js最多只支持32位有符号整数，不支持64位，因此最多只能转成4byte
   * @param  {Number} float number
   * @return {Array} bytes array
   */
  longToBytes: function longToBytes(value) {
    var bytes = [];
    var i = 4;
    do {
      bytes[--i] = value & 255;
      value = value >> 8;
    } while (i);
    return bytes;
  },

  /**
   * 将单词的第一个字母转成大写
   * @param  {string} str string.
   * @return {string}     target string.
   */
  upperCaseFirstLetter: function upperCaseFirstLetter(str) {
    var reg = /\b(\w)|\s(\w)/g;
    // str = str.toLowerCase();
    return str.replace(reg, function (m) {
      return m.toUpperCase();
    });
  },

  /**
   * transform matrix array to bytes
   * @param  {Array} matrixArray 8*16 led matrix array, such as:
   *
   * [
   *    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
   *    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
   *    0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0,
   *    0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0,
   *    0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0,
   *    0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
   *    0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
   *    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
   * ]
   * @return {Array} result 16 length bytes array, such as
   *
   * [0, 0, 0, 0, 28, 56, 28, 56, 28, 56, 3, 192, 3, 192, 0, 0]
   */
  emotionArrayToBytes: function emotionArrayToBytes(matrixArray) {
    var result = [];
    for (var i = 0; i < matrixArray.length; i++) {
      if ((i + 1) % 8 == 0) {
        var byteString = matrixArray.slice(i - 7, i + 1).join('');
        var byte = parseInt(byteString, 2);
        result.push(byte);
      }
    }
    return result;
  },

  /**
   * n个byte转成int值
   * @param  {Array} bytes 传入的bytes数组
   * @return {Number}          返回的int数值
   */
  bytesToInt: function bytesToInt(bytes) {
    var val = 0;
    for (var i = bytes.length - 1; i >= 0; i--) {
      val += bytes[bytes.length - i - 1] << i * 8;
    }
    return val;
  },

  /**
   * transform int to ascii
   * @param  {Array} bytes int array
   * @return {String} str string
   */
  bytesToString: function bytesToString(bytes) {
    var str = "";
    for (var i = 0; i < bytes.length; i++) {
      str += String.fromCharCode(bytes[i]);
    }
    return str;
  },

  hexToRgb: function hexToRgb(hex) {
    var validHexColorReg = /^#(?:[0-9a-f]{3}){1,2}$/i;
    if (!validHexColorReg.test(hex)) {
      throw Error(hex + " is not a valid hex color");
    }
    var r = parseInt(hex.substr(1, 2), 16),
        g = parseInt(hex.substr(3, 2), 16),
        b = parseInt(hex.substr(5, 2), 16);
    return [r, g, b];
  },

  /**
   * 函数式编程
   * @param  {!Function} func 方法
   * @param  {Array} args 方法的参数数组
   * @return {*}      返回结果由方法决定
   */
  composer: function composer(func, args) {
    if (!args) {
      args = [];
    }
    return func.apply(undefined, (0, _toConsumableArray3.default)(args));
  },


  /**
   * Continuous byte string to binary byte
   * @param  {String} byteStrs
   * @return {Array}        
   */
  byteString2binaryByte: function byteString2binaryByte(byteStrs) {
    var byteResult = [];
    var len = byteStrs.length + 1;
    for (var i = 1; i < len; i++) {
      if (i % 8 === 0) {
        var byteStr = byteStrs.slice(i - 8, i);
        byteResult.push(parseInt(byteStr, 2));
      }
    }
    return byteResult;
  },
  getAllMethods: function getAllMethods(obj) {
    var props = [];
    do {
      var l = (0, _getOwnPropertyNames2.default)(obj).concat((0, _getOwnPropertySymbols2.default)(obj).map(function (s) {
        return s.toString();
      })).sort().filter(function (p, i, arr) {
        return typeof obj[p] === 'function' && //only the methods
        p !== 'constructor' && ( //not the constructor
        i == 0 || p !== arr[i - 1]) && //not overriding in this prototype
        props.indexOf(p) === -1;
      } //not overridden in a child
      );
      props = props.concat(l);
    } while ((obj = (0, _getPrototypeOf2.default)(obj)) && //walk-up the prototype chain
    (0, _getPrototypeOf2.default)(obj) //not the the Object prototype methods (hasOwnProperty, etc...)
    );
    return props;
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(37);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _read = __webpack_require__(115);

var _read2 = _interopRequireDefault(_read);

var _write = __webpack_require__(116);

var _write2 = _interopRequireDefault(_write);

var _parse = __webpack_require__(117);

var _parse2 = _interopRequireDefault(_parse);

var _transport = __webpack_require__(79);

var _transport2 = _interopRequireDefault(_transport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileOverview Control 类，管理数据读写调度，对外提供以下接口：pipe、read、write
 * @author Jeremy
 */
var send_ = function send_() {
  return _transport2.default.send.bind(this);
};

/**
 * @private
 */

var Control = function () {
  /**
   * Create a control.
   */
  function Control() {
    (0, _classCallCheck3.default)(this, Control);
  }

  /**
   * execute write
   * @param  {Array}   buf   protocol buffer
   * @return {Undefined}     return undefined
   */


  (0, _createClass3.default)(Control, [{
    key: 'write',
    value: function write(buf) {
      _write2.default.addRequest(send_, buf);
    }

    /**
     * execute read
     * @param  {Array}   buf   protocol buffer
     * @return {Promise}       return a promise
     */

  }, {
    key: 'read',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(buf) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new _promise2.default(function (resolve) {
                  _read2.default.addRequest(send_, buf, function (val) {
                    resolve(val);
                  });
                });

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function read(_x) {
        return _ref.apply(this, arguments);
      }

      return read;
    }()

    /**
     * parse the buffer
     * @param  {Array}  buff    a buffer responsed from transporter
     * @return {Number}
     */

  }, {
    key: 'pipe',
    value: function pipe(buff) {
      var buffer = _parse2.default.doParse(buff);
      if (!buffer) {//解析后无正确结果
        //可能因为接收了异常数据
        //do nothing
      } else if (buffer.length == 0) {//write 结果
        //do nothing
      } else {
        //read 结果
        // console.log('after parse ------>', buffer[0], buff);
        var index = buffer[0];
        var value = _parse2.default.getResult(buffer);
        _read2.default.emitCallback(index, value);
        return value;
      }
    }
  }]);
  return Control;
}();

exports.default = new Control();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(34);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * buf 协议组装器
 * @private
 * @param  {Object} obj  对象
 * @param  {Number} obj.index  由上位机赋值
 * @param  {Number} obj.mode  查询、执行
 * @param  {Number} obj.id  指令ID
 * @param  {Arguments} args 其他参数
 * @return {Array}      返回数组
 */
function bufAssembler(obj) {
  var modes = [0x01, 0x02, 0x04];
  var bufHead = [0xff, 0x55];
  var bufLength = 0;
  var bufAttr = void 0;
  //todo：完善抛错提示
  if (obj.mode == 0x04) {
    bufAttr = new Array(obj.index || 0, obj.mode);
  } else {
    if (modes.indexOf(obj.mode) === -1) {
      throw new Error("mode should be one of " + modes);
    } else if (typeof obj.id === 'undefined') {
      throw new Error("id should not be empty");
    }
    bufAttr = new Array(obj.index || 0, obj.mode, obj.id);
  }
  //to fix:

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  bufLength = bufAttr.length + args.length;
  return bufHead.concat([bufLength], bufAttr, args);
}

/**
 * @private
 */
/**
 * @fileOverview  protocol API list
 */
function protocolAssembler() {
  /**
   * Set dc motor speed.
   * @param {number} port  port number, vailable is: 1,2,3,4
   * @param {number} speed speed, the range is -255 ~ 255
   * @example
   *     ff 55 06 00 02 0a 01 ff 00
   */
  this.setDcMotor = function (port, speed) {
    speed = _utils2.default.limitValue(speed);
    return bufAssembler({ mode: 0x02, id: 0x0a }, port, speed & 0xff, speed >> 8 & 0xff);
  };

  /**
   * Set encoder motor speed.
   * @private
   * @param {number} slot  slot number, vailable is: 1,2
   * @param {number} speed speed, the range is -255 ~ 255
   * @example
   *     ff 55 07 00 02 3d 00 01 64 00
   */
  this.setEncoderMotorOnBoard = function (slot, speed) {
    speed = _utils2.default.limitValue(speed);
    var port = 0x00; //板载
    return bufAssembler({ mode: 0x02, id: 0x3d }, port, slot, speed & 0xff, speed >> 8 & 0xff);
  };

  /**
   * set encoder motor.
   * @private
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 1,2,3,4
   * @param  {Number} slot  vailable: 1，2
   * @param  {Number} speed  0 ~ 300, 单位：rpm（每分钟转多少圈）
   * @param  {Float} angle  相对位移, -2147483648 ~ 2147483647
   * @example
   * ff 55 0b 00 02 0c 08 01 96 00 00 00 34 44
   */
  this.setEncoderMotor = function (port, slot, speed, angle) {
    port = port || 0x08; //I2C地址，目前无意义(软件稳定后可能会重新设计)，用来占位
    speed = _utils2.default.limitValue(speed, [0, 300]);
    var byte4Array = _utils2.default.float32ToBytes(angle);
    return bufAssembler.apply(undefined, [{ mode: 0x02, id: 0x0c }, port, slot, speed & 0xff, speed >> 8 & 0xff].concat((0, _toConsumableArray3.default)(byte4Array)));
  };

  /**
   * Set both left speed and right speed with one command.
   * @private
   * @param {number} leftSpeed  left speed, the range is -255 ~ 255
   * @param {number} rightSpeed right speed, the range is -255 ~ 255
   * @example
   *     ff 55 07 00 02 05 64 00 64 00
   */
  this.setJoystick = function (leftSpeed, rightSpeed) {
    leftSpeed = _utils2.default.limitValue(leftSpeed);
    rightSpeed = _utils2.default.limitValue(rightSpeed);
    return bufAssembler({ mode: 0x02, id: 0x05 }, leftSpeed & 0xff, leftSpeed >> 8 & 0xff, rightSpeed & 0xff, rightSpeed >> 8 & 0xff);
  };

  /**
   * Set speed for balance mode, the port is on transport, value is 0.
   * @private
   * @param {number} turnRange turn extend, -255 ~ 255
   * @param {number} speed      speed, -255 ~ 255
   * @example
   *     ff 55 08 00 02 34 00 64 00 64 00
   */
  this.setVirtualJoystickForBalance = function (turnRange, speed) {
    var turnExtent = _utils2.default.limitValue(turnRange);
    var port = 0x00; //板载虚拟摇杆 port = 00
    speed = _utils2.default.limitValue(speed);
    return bufAssembler({ mode: 0x02, id: 0x34 }, port, turnExtent & 0xff, turnExtent >> 8 & 0xff, speed & 0xff, speed >> 8 & 0xff);
  };

  /**
   * Set stepper motor speed.
   * @private
   * @param {Number} port     port number, vailable is: 1,2,3,4
   * @param {Number} speed    speed, the range is 0 ~ 3000
   * @param {Long} distance distance, the range is -2147483648 ~ 2147483647
   * @example
   *     ff 55 0a 00 02 28 01 b8 0b e8 03 00 00
   */
  this.setStepperMotor = function (port, speed, distance) {
    speed = _utils2.default.limitValue(speed, [0, 3000]);
    var distanceBytes = _utils2.default.longToBytes(distance);
    return bufAssembler({ mode: 0x02, id: 0x28 }, port, speed & 0xff, speed >> 8 & 0xff, distanceBytes[3], distanceBytes[2], distanceBytes[1], distanceBytes[0]);
  };

  /**
   * Set RgbFourLed electronic module color.
   * @private
   * @param {number} port     port number, vailable is: 0(on transport), 6,7,8,9,10
   * @param {number} slot     slot number, vailable is: 1,2
   * @param {number} position led position, 0 signify all leds.
   * @param {number} r        red, the range is 0 ~ 255
   * @param {number} g        green, the range is 0 ~ 255
   * @param {number} b        blue, the range is 0 ~ 255
   * @example
   *     ff 55 09 00 02 08 06 02 00 ff 00 00
   */
  this.setLed = function (port, slot, position, r, g, b) {
    r = _utils2.default.limitValue(r, [0, 255]);
    g = _utils2.default.limitValue(g, [0, 255]);
    b = _utils2.default.limitValue(b, [0, 255]);
    position = _utils2.default.limitValue(position, [0]);
    return bufAssembler({ mode: 0x02, id: 0x08 }, port, slot, position, r, g, b);
  };

  /**
   * Set Firmware mode.
   * @private
   * @param {number} subCmd 
   * @param {number} mode 
   * @example
   *     ff 55 05 00 02 3c 11 00
   */
  this.setFirmwareMode = function (subCmd, mode) {
    var sub = subCmd || 0x11; //Auriga是 0x11, megapi是 0x12
    return bufAssembler({ mode: 0x02, id: 0x3c }, sub, mode);
  };

  /**
   * Set Servo speed.
   * @private
   * @param {[type]} port   port number, vailable is 6,7,8,9,10
   * @param {[type]} slot   slot number, vailable is 1,2
   * @param {[type]} degree servo degree, the range is 0 ~ 180
   */
  this.setServoMotor = function (port, slot, degree) {
    degree = _utils2.default.limitValue(degree, [0, 180]);
    return bufAssembler({ mode: 0x02, id: 0x0b }, port, slot, degree);
  };

  /**
   * Set Seven-segment digital tube number.
   * @private
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {float} number  the number to be displayed, -999 ~ 9999
   * @exmpa
   *     ff 55 08 00 02 09 06 00 00 c8 42
   */
  this.setSevenSegment = function (port, number) {
    number = _utils2.default.limitValue(number, [-999, 9999]);
    var byte4Array = _utils2.default.float32ToBytes(number);
    return bufAssembler.apply(undefined, [{ mode: 0x02, id: 0x09 }, port].concat((0, _toConsumableArray3.default)(byte4Array)));
  };

  /**
   * Set led matrix char.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {number} xAxis  x position
   * @param {number} yAxis  y position
   * @param {string} char  char, 例如 Hi 转换成ASCII的值 48 69
   * @exmaple
   * ff 55 0a 00 02 29 06 01 00 01 02 48 69
   */

  /**
   * Set led matrix emotion.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {number} xAxis      x position
   * @param {number} yAxis      y position
   * @param {Array} emotionData emotion data to be displayed, such as
   *  [00, 00, 40, 48, 44, 42, 02, 02, 02, 02, 42, 44, 48, 40, 00, 00]
   * @example
   * ff 55 17 00 02 29 06 02 00 00 00 00 40 48 44 42 02 02 02 02 42 44 48 40 00 00
   */

  /**
   * Set led matrix time.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {number} separator time separator, 01 signify `:`, 02 signify ` `
   * @param {number} hour      hour number, 0 ~ 23
   * @param {number} minute    minute number, 0 ~ 59
   * @example
   *     ff 55 08 00 02 29 06 03 01 0a 14
   */

  /**
   * Set led matrix number.
   * @private
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {float} number the number to be displayed
   * @exmaple
      ff 55 09 00 02 29 06 04 00 00 00 00
   */
  this.setLedMatrix = function () {
    return bufAssembler.apply(undefined, [{ mode: 0x02, id: 0x29 }].concat(Array.prototype.slice.call(arguments)));
  };

  /**
   * Set shutter.
   * @private
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {number} action 0: 按下快门; 1: 松开快门; 2: 聚焦; 3: 停止聚焦
   * @exmaple
      ff 55 05 00 02 14 06 02
   */
  this.setShutter = function (port, action) {
    return bufAssembler({ mode: 0x02, id: 0x14 }, port, action);
  };

  /**
   * reset all sensors and motors on transport.
   * @private
   * @exmaple
      ff 55 02 00 04
   */
  this.reset = function () {
    return bufAssembler({ mode: 0x04 });
  };

  /**
   * set buzzer only for mcore.
   * @param {string} hz , "A2" ~ "D8" 对应的 hz
   * @param {number} beat , 125: eight; 250: quater; 500: half; 1000: one; 2000: double
   * @example
   * C2，quater beat: ff 55 08 00 02 22 09 41 00 f4 01
   */
  this.setBuzzerForMcore = function (hz, beat) {
    return bufAssembler({ mode: 0x02, id: 0x22 }, hz & 0xff, hz >> 8 & 0xff, beat & 0xff, beat >> 8 & 0xff);
  };

  /**
   * set buzzer for mainboard except mcore
   * @private
   * @example
   * 播放引脚为 0x2d，音调为B2，节拍为四分之一：ff 55 08 00 02 22 2d 7b 00 fa 00
   */
  this.setBuzzer = function (hz, beat) {
    beat = beat ? beat : 250;
    return bufAssembler({ mode: 0x02, id: 0x22 }, 0x2d, hz & 0xff, hz >> 8 & 0xff, beat & 0xff, beat >> 8 & 0xff);
  };

  /**
   * read verion of transport
   * @private
   */
  this.readVersion = function () {
    return bufAssembler({ mode: 0x01, id: 0x00 });
  };

  /**
   * mainly used for distance measurement, the measurement range is 0 to 500 cm,
   * the execution of the command will have more than 100 milliseconds latency.
   * So the frequency of the host to send this instruction shoulds not be too high.
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 01 03
   */
  this.readUltrasonic = function (port) {
    return bufAssembler({ mode: 0x01, id: 0x01 }, port);
  };

  /**
   * read temperature, Each port can connect two road temperature sensor.
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @param  {Number} slot  vailable: slot1(1), slot2(2)
   * @example
   * ff 55 05 00 01 02 01 02
   */
  this.readTemperature = function (port, slot) {
    return bufAssembler({ mode: 0x01, id: 0x02 }, port, slot);
  };

  /**
   * The light sensor module or ontransport (lamp) light sensors numerical reading.
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10, onbord(0c),onbord(0b)
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 03 07
   */
  this.readLight = function (port) {
    return bufAssembler({ mode: 0x01, id: 0x03 }, port);
  };

  /**
   * read Potentionmeter
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 04 06
   */
  this.readPotentionmeter = function (port) {
    return bufAssembler({ mode: 0x01, id: 0x04 }, port);
  };

  /**
   * read josystic value
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @param  {Number} axis  1: x-axis; 2: y-axis;
   * @example
   * ff 55 05 00 01 05 06 01
   */
  this.readJoystick = function (port, axis) {
    return bufAssembler({ mode: 0x01, id: 0x05 }, port, axis);
  };

  /**
   * read gyro value in different axis.
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @param  {Number} axis  vailable: X-axis(01)  Y-axis(02)  Z-axis(03)
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 06 00 01
   */
  this.readGyro = function (port, axis) {
    return bufAssembler({ mode: 0x01, id: 0x06 }, port, axis);
  };

  /**
   * read volume testing MIC module parameters
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10，ontransport(0x0e)
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 07 06
   */
  this.readSound = function (port) {
    return bufAssembler({ mode: 0x01, id: 0x07 }, port);
  };

  /**
   * read temperature on transport
   * @private
   * @example
   * ff 55 04 00 01 1b 0d
   */
  this.readTemperatureOnBoard = function () {
    var port = 0x0d;
    return bufAssembler({ mode: 0x01, id: 0x1b }, port);
  };

  /**
   * read external or board infrared sensor, and the board one is only for mcore
   * @private
   * @param  {Number} id    sensor device id，such as: 0x0e, 0x0d, 0x10
   * @param  {Number} port  mcore port: 3, 4, auriga port: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 0e 00
   */
  this.readInfrared = function (id, port, akey) {
    if (akey) {
      return bufAssembler({ mode: 0x01, id: id }, port, akey);
    } else {
      return bufAssembler({ mode: 0x01, id: id }, port);
    }
  };

  /**
   * read pyroelectric infrared sensor
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 0f 06
   */
  this.readPirmotion = function (port) {
    return bufAssembler({ mode: 0x01, id: 0x0f }, port);
  };

  /**
   * read LineFollower sensor
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @return {Number} number,
   *  00   0
      01   1
      10   2
      11   3
      when 0 said has a black line
    * @example
    * ff 55 04 00 01 11 02
   */
  this.readLineFollower = function (port) {
    return bufAssembler({ mode: 0x01, id: 0x11 }, port);
  };

  /**
   * read limitSwitch
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @param  {Number} slot  vailable: SLOT1(01)   SLOT2(02)
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 15 06 02
   */
  this.readLimitSwitch = function (port, slot) {
    return bufAssembler({ mode: 0x01, id: 0x15 }, port, slot);
  };

  /**
   * read compass.
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 1a 06
   */
  this.readCompass = function (port) {
    return bufAssembler({ mode: 0x01, id: 0x1a }, port);
  };

  /**
   * read humiture
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @param  {Number} temperature(01) humidity (00)
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 17 06 00
   */
  this.readHumiture = function (port, type) {
    return bufAssembler({ mode: 0x01, id: 0x17 }, port, type);
  };

  /**
   * read flame
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 18 03
   */
  this.readFlame = function (port) {
    return bufAssembler({ mode: 0x01, id: 0x18 }, port);
  };

  /**
   * Used to get the harmful gas density
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 19 06
   */
  this.readGas = function (port) {
    return bufAssembler({ mode: 0x01, id: 0x19 }, port);
  };

  /**
   * read touch sensor
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 33 06
   */
  this.readTouch = function (port) {
    return bufAssembler({ mode: 0x01, id: 0x33 }, port);
  };

  /**
   * To determine whether the corresponding button is pressed.
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @param  {Number} key   vailable:1,2,3,4
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 16 03 01
   */
  this.readFourKeys = function (port, key) {
    return bufAssembler({ mode: 0x01, id: 0x16 }, port, key);
  };

  /**
   * read encoder motor position or speed on transport.
   * @private
   * @param  {Number} slot vailable:1,2
   * @param  {Number} type  1: position; 2: speed
   * @example
   * ff 55 06 00 01 3d 00 01 02
   */
  this.readEncoderMotorOnBoard = function (slot, type) {
    var port = 0x00; //板载 port
    return bufAssembler({ mode: 0x01, id: 0x3d }, port, slot, type);
  };

  /**
   * 板载编码电机 PID 运动 01模式位置模式
   * @private
   * @param {Number} distance  位移
   * @param {Number} speed    速度
   * @example
   * buf: ff 55 0b 00 02 3e 01 01 00 00 00 00 00 00
   */
  this.setEncoderMotorPIDDistance = function (distance, speed) {
    var distanceArr = _utils2.default.longToBytes(distance);
    var subCmd = 0x05;
    var slot = 0x01;
    speed = _utils2.default.limitValue(speed);
    return bufAssembler({ mode: 0x02, id: 0x3e }, subCmd, slot, distanceArr[3], distanceArr[2], distanceArr[1], distanceArr[0], speed & 0xff, 0);
  };

  /**
   * 板载编码电机 PID 运动 02模式速度模式
   * @private
   * @param {Number} speed    速度
   * @example
   * buf: ff 55 07 00 02 3e 02 01 00 00
   */
  this.setEncoderMotorPIDSpeed = function (speed) {
    var subCmd = 0x02;
    var slot = 0x01;
    speed = _utils2.default.limitValue(speed);
    return bufAssembler({ mode: 0x02, id: 0x3e }, subCmd, slot, speed & 0xff, speed >> 8 & 0xff);
  },
  /**
   * 板载编码电机 PID 运动 03模式 pwm 模式
   * buf: ff 55 07 00 02 3e 03 01 00 00
   * @param {Number} speed    速度
   * @private
   */
  this.setEncoderMotorPIDPwm = function (speed) {
    var subCmd = 0x03;
    var slot = 0x01;
    speed = _utils2.default.limitValue(speed);
    return bufAssembler({ mode: 0x02, id: 0x3e }, subCmd, slot, speed & 0xff, speed >> 8 & 0xff);
  },

  /**
   * 板载编码电机PID运动，设置当前位置为零点: 
   * buf: ff 55 05 00 02 3e 04 01
   * (megaPiPro buf: ff 55 05 00 02 3e 03 01)
   * @param {Number} subCmd    二级命令
   * @private
   */
  this.setEncoderMotorPIDZeroPoint = function (subCmd) {
    var slot = 0x01;
    return bufAssembler({ mode: 0x01, id: 0x3e }, subCmd, slot);
  };

  /**
   * 板载编码电机 PID 运动 05模式双电机模式: 
   * buf: ff 55 0b 00 02 3e 05 01 e8 03 00 00 64 00
   * @private
   * @param {Number} subCmd      0x05
   * @param {Number} direction      前进1，后退2，左转3，右转4
   * @param {Number} distance  位移
   * @param {Number} speed     速度
   */
  this.setEncoderMotorPIDDoubleMotor = function (direction, distance, speed) {
    var distanceArr = _utils2.default.longToBytes(distance);
    var subCmd = 0x05;
    speed = _utils2.default.limitValue(speed);
    return bufAssembler({ mode: 0x02, id: 0x3e }, subCmd, direction, distanceArr[3], distanceArr[2], distanceArr[1], distanceArr[0], speed & 0xff, 0);
  };

  /**
   * set smart servo
   * @private
   * @param  {Number} index  the index code of current servo
   * @param  {Number} subCmd  the sub command that the servo run on
   * @param  {Array} extraCmd  the extra command
   * @example
   * lock:    ff 55 07 00 02 40 01 05 01 00
   * unlock:  ff 55 07 00 02 40 01 05 01 01
   * LED:     ff 55 09 00 02 40 02 05 01 ff 00 00
   * handshake:           ff 55 06 00 02 40 03 05 01
   * runToAbsoluteAngle:  ff 55 0e 00 02 40 04 05 01 68 01 00 00 00 00 48 42
   * runToRelativeAngle:  ff 55 0e 00 02 40 05 05 01 68 01 00 00 00 00 48 42
   * runAsDcMotor:        ff 55 08 00 02 40 06 05 01 96 00
   * setAsZeroPoint:      ff 55 06 00 02 40 07 05 01
   * backToStart:         ff 55 06 00 02 40 08 05 01
   */
  this.setSmartServo = function (index, subCmd, extraCmd) {
    var port = 0x05; //defualt port
    return bufAssembler.apply(undefined, [{ mode: 0x02, id: 0x40 }, subCmd, port, index].concat((0, _toConsumableArray3.default)(extraCmd)));
  };

  /**
   * * @private
   */
  this.setSmartServoForAbsoluteAngle = function (index, subCmd, angle, speed) {
    var port = 0x05; //defualt port
    var angleBytes = _utils2.default.longToBytes(angle);
    var speedBytes = _utils2.default.float32ToBytes(speed);
    return bufAssembler.apply(undefined, [{ mode: 0x02, id: 0x40 }, subCmd, port, index].concat((0, _toConsumableArray3.default)(angleBytes.reverse()), (0, _toConsumableArray3.default)(speedBytes)));
  };

  /**
   * * @private
   */
  this.setSmartServoForRelativeAngle = function (index, subCmd, angle, speed) {
    var port = 0x05; //defualt port
    var angleBytes = _utils2.default.longToBytes(angle);
    var speedBytes = _utils2.default.float32ToBytes(speed);
    return bufAssembler.apply(undefined, [{ mode: 0x02, id: 0x40 }, subCmd, port, index].concat((0, _toConsumableArray3.default)(angleBytes.reverse()), (0, _toConsumableArray3.default)(speedBytes)));
  };

  /**
   * * @private
   */
  this.setSmartServoForDcMotor = function (index, subCmd, speed) {
    var port = 0x05; //defualt port
    return bufAssembler({ mode: 0x02, id: 0x40 }, subCmd, port, index, speed & 0xff, speed >> 8 & 0xff);
  };

  /**
   * read smart servo operating parameters
   * @private
   * @param  {Number} index  the index code of current servo
   * @param  {Number} subCmd  the sub command that the servo run on
   * @example
   * readSpeed:         ff 55 06 00 01 40 09 05 01
   * readTemperature:   ff 55 06 00 01 40 0a 05 01
   * readCurrent:       ff 55 06 00 01 40 0b 05 01
   * readVoltage:       ff 55 06 00 01 40 0c 05 01
   * readAngle:         ff 55 06 00 01 40 0d 05 01
   */
  this.readSmartServoParam = function (index, subCmd) {
    var port = 0x05; //defualt port
    return bufAssembler({ mode: 0x01, id: 0x3d }, subCmd, port, index);
  };

  /**
   * read firmware mode or voltage.
   * @private
   * @param  {Number} type  0x70: 电压; 0x71: 模式
   * @example
   * ff 55 04 00 01 3c 70
   */
  this.readFirmwareMode = function (subCmd) {
    //auriga 电压(0x70) 模式(0x71), megapi模式(0x72) 比赛模式(0x75)
    return bufAssembler({ mode: 0x01, id: 0x3c }, subCmd);
  };

  /**
   * @private
   * @param  {Number} port  vailable: digit GPOI port
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 1e 09
   */
  this.readDigGPIO = function (port) {
    return bufAssembler({ mode: 0x01, id: 0x1e }, port);
  };

  /**
   * @private
   * @param  {Number} port  vailable: analog GPIO port
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 1f 02
   */
  this.readAnalogGPIO = function (port) {
    return bufAssembler({ mode: 0x01, id: 0x1f }, port);
  };

  /**
   * @private
   * @param  {Number} port  vailable: GPIO port
   * @param  {Number} key   vailable: 0,1
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 25 0d 20 4e
   */
  this.readGPIOContinue = function (port, key) {
    return bufAssembler({ mode: 0x01, id: 0x25 }, port, key);
  };

  /**
   * @private
   * @param  {Number} port  vailable: GPIO port
   * @param  {Number} key   vailable: 0,1
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 24 45 40
   */
  this.readDoubleGPIO = function (port1, port2) {
    return bufAssembler({ mode: 0x01, id: 0x24 }, port1, port2);
  };

  /**
   * @private
   * @param  {Number} port  vailable: analog GPIO port
   * @param  {Number} key   vailable: 0,1
   * @return {Number}       [description]
   * @example
   * ff 55 03 00 01 32
   */
  this.readRuntime = function () {
    return bufAssembler({ mode: 0x01, id: 0x32 });
  };
}

/**
 * @private
 */
exports.default = new protocolAssembler();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warnParamNotDateFormat = exports.validateObject = exports.validateBoolean = exports.validateArray = exports.validateString = exports.validateNumber = exports.warnParamNotInList = exports.warnNotSupport = undefined;

var _typeof2 = __webpack_require__(60);

var _typeof3 = _interopRequireDefault(_typeof2);

var _settings = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateType(type) {
  return function (param, defaultValue) {
    // 当 param 存在时 --> 判断类型 --->不合乎类型就用用默认值返回，合乎类型就返回自己
    // 当 param 不存在时 --> 直接返回默认值
    // （默认值必须符合类型，否则报错！）
    if ((typeof param === 'undefined' ? 'undefined' : (0, _typeof3.default)(param)) === type) {
      return param;
    } else {
      console.warn('param \'' + param + '\' should be a ' + type + '!');
      // 默认值
      if ((typeof defaultValue === 'undefined' ? 'undefined' : (0, _typeof3.default)(defaultValue)) === type) {
        return defaultValue;
      }
      //未传值
      else if (typeof defaultValue === 'undefined') {
          switch (type) {
            case 'number':
              defaultValue = 0;
              break;
            case 'string':
              defaultValue = '';
              break;
            case 'array':
              defaultValue = [];
              break;
            case 'boolean':
              defaultValue = false;
              break;
            case 'object':
              defaultValue = {};
              break;
            default:
              defaultValue = null;
          }
          return defaultValue;
        }
        //其他类型
        else {
            throw 'param ${defaultValue} should be a ${type} if passed in';
          }
    }
  };
}

var validateNumber = validateType('number'),
    validateString = validateType('string'),
    validateArray = validateType('array'),
    validateBoolean = validateType('boolean'),
    validateObject = validateType('object');

/**
 * 警告主控板不被支持
 * @private
 * @param  {String} name 主控板名称
 */
function warnNotSupport(name) {
  if (_settings.SUPPORTLIST.indexOf(name) === -1) {
    console.warn('the mainboard "' + name + '" expected to be one of ' + _settings.SUPPORTLIST.join(','));
    return false;
  }
  return name;
}

/**
 * 警告参数不在列表中
 * @private
 * @param  {String} param 参数值
 * @param  {Array} list 列表
 */
function warnParamNotInList(param, list) {
  if (Array.isArray(list) && list.indexOf(param) === -1) {
    console.warn('Param ' + param + ' should be one of ' + list.join(','));
    return false;
  }
  return param;
}

function warnParamNotDateFormat(timeStr) {
  var reg = /\d{1,2}[:|\s]\d{1,2}/g;
  if (reg.test(timeStr)) {
    var timeArr = timeStr.split(/:|\s/);
    var separator = timeStr.replace(/\d/g, '');
    timeArr.splice(1, 0, separator);
    return timeArr;
  } else {
    console.warn('Param ' + timeStr + ' should be \'HH:MM\' or \'HH MM\' or \'H:M\'}');
    return false;
  }
}

exports.warnNotSupport = warnNotSupport;
exports.warnParamNotInList = warnParamNotInList;
exports.validateNumber = validateNumber;
exports.validateString = validateString;
exports.validateArray = validateArray;
exports.validateBoolean = validateBoolean;
exports.validateObject = validateObject;
exports.warnParamNotDateFormat = warnParamNotDateFormat;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Electron
 * @description 所有电子模块的抽象类
 */
var Electronic =
/**
 * @param {number} port - 电子模块port口
 * @param {number} slot - 电子模块slot口
 */
function Electronic() {
  (0, _classCallCheck3.default)(this, Electronic);
};

exports.default = Electronic;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(93);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(37);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var
//超时时间
OVERTIME = 1000,

//自动超时
AUTO_OVERTIME = 1200,
    FIRM_MODES = [0x00, 0x01, 0x02, 0x03, 0x04],
    SUPPORTLIST = ['Mcore', 'Auriga', 'MegaPi', 'Orion', 'Arduino', 'MegaPiPro'],
    FIRMWARE_ID = {
  0x06: 'Mcore',
  0x09: 'Auriga',
  0x0a: 'Orion',
  0x0e: 'MegaPi',
  0x0f: 'MegaPiPro'
},

//音符到赫兹
TONE_TO_HZ = {
  "A2": 110,
  "B2": 123,
  "C2": 65,
  "C3": 131,
  "D3": 147,
  "E3": 165,
  "F3": 175,
  "G3": 196,
  "A3": 220,
  "B3": 247,
  "C4": 262,
  "D4": 294,
  "E4": 330,
  "F4": 349,
  "G4": 392,
  "A4": 440,
  "B4": 494,
  "C5": 523,
  "D5": 555,
  "E5": 640,
  "F5": 698,
  "G5": 784,
  "A5": 880,
  "B5": 988,
  "C6": 1047,
  "D6": 1175,
  "E6": 1319,
  "F6": 1397,
  "G6": 1568,
  "A6": 1760,
  "B6": 1976,
  "C7": 2093,
  "D7": 2349,
  "E7": 2637,
  "F7": 2794,
  "G7": 3136,
  "A7": 3520,
  "B7": 3951,
  "C8": 4186,
  "D8": 4699
},
    MOVE_DIRECTION = ['FORWARD', 'BACKWARD', 'TURNLEFT', 'TURNRIGHT'];

exports.OVERTIME = OVERTIME;
exports.AUTO_OVERTIME = AUTO_OVERTIME;
exports.FIRM_MODES = FIRM_MODES;
exports.SUPPORTLIST = SUPPORTLIST;
exports.FIRMWARE_ID = FIRMWARE_ID;
exports.TONE_TO_HZ = TONE_TO_HZ;
exports.MOVE_DIRECTION = MOVE_DIRECTION;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(48)('wks')
  , uid        = __webpack_require__(35)
  , Symbol     = __webpack_require__(15).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(15)
  , core      = __webpack_require__(12)
  , ctx       = __webpack_require__(25)
  , hide      = __webpack_require__(22)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(18)
  , IE8_DOM_DEFINE = __webpack_require__(67)
  , toPrimitive    = __webpack_require__(52)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(20) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(66)
  , defined = __webpack_require__(44);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(27)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 21 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(17)
  , createDesc = __webpack_require__(32);
module.exports = __webpack_require__(20) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(151), __esModule: true };

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(65)
  , enumBugKeys = __webpack_require__(49);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(50);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(37);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = __webpack_require__(34);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _version = __webpack_require__(83);

var _version2 = _interopRequireDefault(_version);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create id for electronic module joined into the mainboard
 * @param  {Function} eModule  electronic module
 * @param  {Array} argsList [description]
 * @return {[type]}          [description]
 * @private
 */
var createModuleId = function createModuleId(eModule, argsList) {
  var name = eModule.name;
  var expectLength = eModule.length;
  var argsLength = argsList.length;
  if (argsLength < expectLength) {
    //参数不足的提示
    var dl = expectLength - argsLength;
    var more = argsLength > 0 ? ' more' : ''; //更多
    console.warn('you need to pass in ' + dl + ' argument' + (dl > 1 ? 's' : '') + more + ', otherwise the ' + eModule.name + ' sensor may not work as a result');
  } else if (argsLength > expectLength) {
    //参数多余
    argsList.splice(expectLength);
  }
  return [name].concat(argsList).join('_').toLowerCase();
}; /**
    * @fileOverview Board 主控板的基类.
    * @author Jeremy
    */

var Board = function () {
  /**
   * Create a board
   * @param  {Object} conf configure
   */
  function Board(conf) {
    (0, _classCallCheck3.default)(this, Board);

    //私有的配置对象
    this.config_ = conf || {};
    //已连接电子模块
    this.connecting = {};
    //固件版本
    this.version = null;
  }

  /**
   * 电子模块实例工厂
   * @param  {Function} eModule 电子模块类
   * @param  {Array-Like} args    [port, slot, id...]
   * @param  {String} host    电子模块的宿主，即主控板名——大部分电子模块是无需识别宿主的，少数电子模块因为宿主不同而表现不同特征
   * @return {Object}         电子模块实例
   */


  (0, _createClass3.default)(Board, [{
    key: 'eModuleFactory',
    value: function eModuleFactory(eModule, args, host) {
      var argsList = [].concat((0, _toConsumableArray3.default)(args)); //转数组
      var id = createModuleId(eModule, argsList);
      if (this.connecting[id]) {
        return this.connecting[id];
      } else {
        var params = argsList.length ? args : [undefined]; //这里 es6 有坑
        var emodule = new (Function.prototype.bind.apply(eModule, [null].concat((0, _toConsumableArray3.default)(params), [host])))();
        // 保存模块
        this.connecting[id] = emodule;
        return emodule;
      }
    }

    /**
     * 获取版本号，所有主控板支持
     */

  }, {
    key: 'getVersion',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.version) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt('return', _promise2.default.resolve(this.version));

              case 4:
                _context.next = 6;
                return _version2.default.getVersion();

              case 6:
                this.version = _context.sent;
                return _context.abrupt('return', this.version);

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getVersion() {
        return _ref.apply(this, arguments);
      }

      return getVersion;
    }()
  }]);
  return Board;
}();

exports.default = Board;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dc_motor = __webpack_require__(147);

var _dc_motor2 = _interopRequireDefault(_dc_motor);

var _virtual_joystick = __webpack_require__(148);

var _virtual_joystick2 = _interopRequireDefault(_virtual_joystick);

var _virtual_joystick_for_balance = __webpack_require__(149);

var _virtual_joystick_for_balance2 = _interopRequireDefault(_virtual_joystick_for_balance);

var _stepper_motor = __webpack_require__(150);

var _stepper_motor2 = _interopRequireDefault(_stepper_motor);

var _encoder_motor = __webpack_require__(154);

var _encoder_motor2 = _interopRequireDefault(_encoder_motor);

var _encoder_motor_on_board = __webpack_require__(155);

var _encoder_motor_on_board2 = _interopRequireDefault(_encoder_motor_on_board);

var _servo_motor = __webpack_require__(156);

var _servo_motor2 = _interopRequireDefault(_servo_motor);

var _four_leds = __webpack_require__(157);

var _four_leds2 = _interopRequireDefault(_four_leds);

var _rgb_led = __webpack_require__(158);

var _rgb_led2 = _interopRequireDefault(_rgb_led);

var _rgb_led_on_board = __webpack_require__(159);

var _rgb_led_on_board2 = _interopRequireDefault(_rgb_led_on_board);

var _led_matrix = __webpack_require__(160);

var _led_matrix2 = _interopRequireDefault(_led_matrix);

var _buzzer = __webpack_require__(168);

var _buzzer2 = _interopRequireDefault(_buzzer);

var _seven_segment = __webpack_require__(169);

var _seven_segment2 = _interopRequireDefault(_seven_segment);

var _shutter = __webpack_require__(170);

var _shutter2 = _interopRequireDefault(_shutter);

var _smart_servo = __webpack_require__(171);

var _smart_servo2 = _interopRequireDefault(_smart_servo);

var _encoder_motor_on_board_pid = __webpack_require__(172);

var _encoder_motor_on_board_pid2 = _interopRequireDefault(_encoder_motor_on_board_pid);

var _reset = __webpack_require__(177);

var _reset2 = _interopRequireDefault(_reset);

var _ultrasonic = __webpack_require__(178);

var _ultrasonic2 = _interopRequireDefault(_ultrasonic);

var _temperature = __webpack_require__(179);

var _temperature2 = _interopRequireDefault(_temperature);

var _temperature_on_board = __webpack_require__(180);

var _temperature_on_board2 = _interopRequireDefault(_temperature_on_board);

var _light = __webpack_require__(181);

var _light2 = _interopRequireDefault(_light);

var _light_on_board = __webpack_require__(182);

var _light_on_board2 = _interopRequireDefault(_light_on_board);

var _potentionmeter = __webpack_require__(183);

var _potentionmeter2 = _interopRequireDefault(_potentionmeter);

var _joystick = __webpack_require__(184);

var _joystick2 = _interopRequireDefault(_joystick);

var _gyro = __webpack_require__(185);

var _gyro2 = _interopRequireDefault(_gyro);

var _Gyro_on_board = __webpack_require__(186);

var _Gyro_on_board2 = _interopRequireDefault(_Gyro_on_board);

var _sound = __webpack_require__(187);

var _sound2 = _interopRequireDefault(_sound);

var _sound_on_board = __webpack_require__(188);

var _sound_on_board2 = _interopRequireDefault(_sound_on_board);

var _pirmotion = __webpack_require__(189);

var _pirmotion2 = _interopRequireDefault(_pirmotion);

var _infrared = __webpack_require__(190);

var _infrared2 = _interopRequireDefault(_infrared);

var _infrared_on_board = __webpack_require__(191);

var _infrared_on_board2 = _interopRequireDefault(_infrared_on_board);

var _limit_switch = __webpack_require__(192);

var _limit_switch2 = _interopRequireDefault(_limit_switch);

var _line_follower = __webpack_require__(193);

var _line_follower2 = _interopRequireDefault(_line_follower);

var _compass = __webpack_require__(194);

var _compass2 = _interopRequireDefault(_compass);

var _humiture = __webpack_require__(195);

var _humiture2 = _interopRequireDefault(_humiture);

var _flame = __webpack_require__(196);

var _flame2 = _interopRequireDefault(_flame);

var _gas = __webpack_require__(197);

var _gas2 = _interopRequireDefault(_gas);

var _touch = __webpack_require__(198);

var _touch2 = _interopRequireDefault(_touch);

var _four_keys = __webpack_require__(199);

var _four_keys2 = _interopRequireDefault(_four_keys);

var _dig_GPIO = __webpack_require__(200);

var _dig_GPIO2 = _interopRequireDefault(_dig_GPIO);

var _analog_GPIO = __webpack_require__(201);

var _analog_GPIO2 = _interopRequireDefault(_analog_GPIO);

var _GPIO_continue = __webpack_require__(202);

var _GPIO_continue2 = _interopRequireDefault(_GPIO_continue);

var _double_GPIO = __webpack_require__(203);

var _double_GPIO2 = _interopRequireDefault(_double_GPIO);

var _runtime = __webpack_require__(204);

var _runtime2 = _interopRequireDefault(_runtime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//读值
//略不同的实现方式

//包含读值和写的接口
exports.default = {
  DcMotor: _dc_motor2.default,
  VirtualJoystick: _virtual_joystick2.default,
  VirtualJoystickForBalance: _virtual_joystick_for_balance2.default,
  StepperMotor: _stepper_motor2.default,
  EncoderMotor: _encoder_motor2.default,
  EncoderMotorOnBoard: _encoder_motor_on_board2.default,
  ServoMotor: _servo_motor2.default,
  FourLeds: _four_leds2.default,
  RgbLed: _rgb_led2.default,
  RgbLedOnBoard: _rgb_led_on_board2.default,
  LedMatrix: _led_matrix2.default,
  Buzzer: _buzzer2.default,
  SevenSegment: _seven_segment2.default,
  Shutter: _shutter2.default,
  SmartServo: _smart_servo2.default,
  EncoderMotorOnBoardPID: _encoder_motor_on_board_pid2.default,

  Reset: _reset2.default, //实现待验证
  Ultrasonic: _ultrasonic2.default,
  Temperature: _temperature2.default,
  TemperatureOnBoard: _temperature_on_board2.default,
  Light: _light2.default,
  LightOnBoard: _light_on_board2.default,
  Potentionmeter: _potentionmeter2.default,
  Joystick: _joystick2.default,
  Gyro: _gyro2.default,
  GyroOnBoard: _Gyro_on_board2.default,
  Sound: _sound2.default,
  SoundOnBoard: _sound_on_board2.default,
  Pirmotion: _pirmotion2.default,
  Infrared: _infrared2.default,
  InfraredOnBoard: _infrared_on_board2.default,
  LineFollower: _line_follower2.default,
  LimitSwitch: _limit_switch2.default,
  Compass: _compass2.default,
  Humiture: _humiture2.default,
  Flame: _flame2.default,
  Gas: _gas2.default,
  Touch: _touch2.default,
  FourKeys: _four_keys2.default,
  DigGPIO: _dig_GPIO2.default,
  AnalogGPIO: _analog_GPIO2.default,
  GPIOContinue: _GPIO_continue2.default,
  DoubleGPIO: _double_GPIO2.default,
  Runtime: _runtime2.default
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(44);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(129);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(16)
  , core    = __webpack_require__(12)
  , fails   = __webpack_require__(27);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(96)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(69)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(17).f
  , has = __webpack_require__(21)
  , TAG = __webpack_require__(14)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(162);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 */
function write(bufArray) {
  var buf = _utils2.default.composer(_cmd2.default.setLedMatrix, bufArray);
  _control2.default.write(buf);
}
/**
 * @Class BaseLedMatrix
 * @description It is a base Class of LedMatrix
 * @extends Electronic
 */

var BaseLedMatrix = function (_Electronic) {
  (0, _inherits3.default)(BaseLedMatrix, _Electronic);

  /**
   * Create a ledMatrix.
   */
  function BaseLedMatrix(port) {
    (0, _classCallCheck3.default)(this, BaseLedMatrix);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseLedMatrix.__proto__ || (0, _getPrototypeOf2.default)(BaseLedMatrix)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }

  /**
   * clear Matrix panel content
   * TOIMPROVE: 甚至可以提供接口清除某个区域
   */


  (0, _createClass3.default)(BaseLedMatrix, [{
    key: 'clear',
    value: function clear() {
      var type = 0x02;
      var byteResult = _utils2.default.byteString2binaryByte('0'.repeat(128));
      var bufArray = [this.args.port, type, 0, 0].concat(byteResult);
      write(bufArray);
      return this;
    }

    /**
     * @abstract
     * @param  {Array} bufArray  protocol buffer
     * @return {Instance}
     */

  }, {
    key: 'run',
    value: function run(bufArray) {
      write(bufArray);
      return this;
    }
  }]);
  return BaseLedMatrix;
}(_electronic2.default);

exports.default = BaseLedMatrix;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(46)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(48)('keys')
  , uid    = __webpack_require__(35);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26)
  , document = __webpack_require__(15).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(26);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(18)
  , dPs         = __webpack_require__(98)
  , enumBugKeys = __webpack_require__(49)
  , IE_PROTO    = __webpack_require__(47)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(51)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(71).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(99);
var global        = __webpack_require__(15)
  , hide          = __webpack_require__(22)
  , Iterators     = __webpack_require__(33)
  , TO_STRING_TAG = __webpack_require__(14)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(73)
  , ITERATOR  = __webpack_require__(14)('iterator')
  , Iterators = __webpack_require__(33);
module.exports = __webpack_require__(12).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(14);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(15)
  , core           = __webpack_require__(12)
  , LIBRARY        = __webpack_require__(39)
  , wksExt         = __webpack_require__(56)
  , defineProperty = __webpack_require__(17).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(41)
  , createDesc     = __webpack_require__(32)
  , toIObject      = __webpack_require__(19)
  , toPrimitive    = __webpack_require__(52)
  , has            = __webpack_require__(21)
  , IE8_DOM_DEFINE = __webpack_require__(67)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(20) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(134);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(136);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @Class BaseMotor
 * @description It is a base Class of Motor
 * @extends Electronic
 */
var BaseMotor = function (_Electronic) {
  (0, _inherits3.default)(BaseMotor, _Electronic);

  /**
   * Create a motor
   * @param {Number} port 
   */
  function BaseMotor(port) {
    (0, _classCallCheck3.default)(this, BaseMotor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseMotor.__proto__ || (0, _getPrototypeOf2.default)(BaseMotor)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      speed: 0
    };
    return _this;
  }

  /**
   * Set speed to the motor
   * @param  {Number} speed
   * @return {Instance} the motor instance
   */


  (0, _createClass3.default)(BaseMotor, [{
    key: 'speed',
    value: function speed(_speed) {
      this.args.speed = (0, _validate.validateNumber)(_speed, 0);
      return this;
    }

    /**
     * This interface should be overwrite by child class
     * @abstract
     */

  }, {
    key: 'run',
    value: function run() {
      return this;
    }

    /**
     * Stop motor
     * @return {Instance} the motor instance
     */

  }, {
    key: 'stop',
    value: function stop() {
      return this.speed(0).run();
    }
  }]);
  return BaseMotor;
}(_electronic2.default);

exports.default = BaseMotor;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _toConsumableArray2 = __webpack_require__(34);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//@private
var bufComposer = function bufComposer(obj) {
  var args = [obj.port, obj.slot, obj.ledPosition].concat((0, _toConsumableArray3.default)(obj.rgb));
  return _utils2.default.composer(_cmd2.default.setLed, args);
};

//@private
var commandWrite = function commandWrite(obj) {
  var buf = bufComposer(obj);
  _control2.default.write(buf);
};

/**
 * @Class BaseRgbLed
 * @description It is a base Class of RgbLed
 * @extends Electronic
 */

var BaseRgbLed = function (_Electronic) {
  (0, _inherits3.default)(BaseRgbLed, _Electronic);

  /**
   * Create a rgbLed
   * @param {Number} port  led port
   * @param {Number} slot  led slot
   */
  function BaseRgbLed(port, slot) {
    (0, _classCallCheck3.default)(this, BaseRgbLed);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseRgbLed.__proto__ || (0, _getPrototypeOf2.default)(BaseRgbLed)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      slot: (0, _validate.validateNumber)(slot),
      ledPosition: 0,
      rgb: [0, 0, 0]
    };
    return _this;
  }

  /**
   * Set led position
   * @param {Number} position
   */


  (0, _createClass3.default)(BaseRgbLed, [{
    key: 'position',
    value: function position(_position) {
      this.args.ledPosition = (0, _validate.validateNumber)(_position, this.args.ledPosition);
      return this;
    }

    /**
     * Set led red value
     * @param {Number} value  0 ~ 255
     */

  }, {
    key: 'r',
    value: function r(value) {
      this.args.rgb[0] = (0, _validate.validateNumber)(value, this.args.rgb[0]);
      return this;
    }

    /**
     * Set led green value
     * @param {Number} value 0 ~ 255
     */

  }, {
    key: 'g',
    value: function g(value) {
      this.args.rgb[1] = (0, _validate.validateNumber)(value, this.args.rgb[1]);
      return this;
    }

    /**
     * Set led blue value
     * @param {Number} value 0 ~ 255
     */

  }, {
    key: 'b',
    value: function b(value) {
      this.args.rgb[2] = (0, _validate.validateNumber)(value, this.args.rgb[2]);
      return this;
    }

    /**
     * Set led color with hex-color
     * @param  {String} hex  hex color like '#ff0088'
     */

  }, {
    key: 'rgb',
    value: function rgb() {
      var hex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#ff0000';

      this.args.rgb = _utils2.default.hexToRgb(hex);
      return this;
    }

    /**
     * Turn on led
     */

  }, {
    key: 'turnOn',
    value: function turnOn() {
      commandWrite(this.args);
      return this;
    }

    /**
     * Turn off led
     */

  }, {
    key: 'turnOff',
    value: function turnOff() {
      this.args.rgb = [0, 0, 0];
      commandWrite(this.args);
      return this;
    }

    /**
     * Turn on all the leds
     */

  }, {
    key: 'turnOnAll',
    value: function turnOnAll() {
      this.position(0);
      return this.turnOn();
    }

    /**
     * Turn off all the leds
     */

  }, {
    key: 'turnOffAll',
    value: function turnOffAll() {
      this.position(0);
      return this.turnOff();
    }

    /**
     * Light on let with red color
     */

  }, {
    key: 'red',
    value: function red() {
      this.args.rgb = [255, 0, 0];
      commandWrite(this.args);
      return this;
    }

    /**
     * Light on let with green color
     */

  }, {
    key: 'green',
    value: function green() {
      this.args.rgb = [0, 255, 0];
      commandWrite(this.args);
      return this;
    }

    /**
     * Light on let with blue color
     */

  }, {
    key: 'blue',
    value: function blue() {
      this.args.rgb = [0, 0, 255];
      commandWrite(this.args);
      return this;
    }

    /**
     * Light on let with white color
     */

  }, {
    key: 'white',
    value: function white() {
      this.args.rgb = [255, 255, 255];
      commandWrite(this.args);
      return this;
    }
  }]);
  return BaseRgbLed;
}(_electronic2.default);

exports.default = BaseRgbLed;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mode = function () {
  function Mode() {
    (0, _classCallCheck3.default)(this, Mode);
  }

  /**
   * 设置固件模式
   * @param {Number} mode 0、1、2、3、4
   */


  (0, _createClass3.default)(Mode, [{
    key: 'setMode',
    value: function setMode(subCmd, mode) {
      var buf = _utils2.default.composer(_cmd2.default.setFirmwareMode, [subCmd, mode]);
      _control2.default.write(buf);
    }
  }, {
    key: 'getMode',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(subCmd) {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readFirmwareMode, [subCmd]);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getMode(_x) {
        return _ref.apply(this, arguments);
      }

      return getMode;
    }()

    /**
     * 获取固件模式列表
     * @return {Array} 模式列表
     */

  }, {
    key: 'getModesList',
    value: function getModesList() {
      return _settings.FIRM_MODES;
    }
  }]);
  return Mode;
}();

exports.default = new Mode();

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(21)
  , toIObject    = __webpack_require__(19)
  , arrayIndexOf = __webpack_require__(91)(false)
  , IE_PROTO     = __webpack_require__(47)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(31);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(20) && !__webpack_require__(27)(function(){
  return Object.defineProperty(__webpack_require__(51)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 68 */
/***/ (function(module, exports) {



/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(39)
  , $export        = __webpack_require__(16)
  , redefine       = __webpack_require__(70)
  , hide           = __webpack_require__(22)
  , has            = __webpack_require__(21)
  , Iterators      = __webpack_require__(33)
  , $iterCreate    = __webpack_require__(97)
  , setToStringTag = __webpack_require__(40)
  , getPrototypeOf = __webpack_require__(72)
  , ITERATOR       = __webpack_require__(14)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15).document && document.documentElement;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(21)
  , toObject    = __webpack_require__(30)
  , IE_PROTO    = __webpack_require__(47)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(31)
  , TAG = __webpack_require__(14)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(18);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(33)
  , ITERATOR   = __webpack_require__(14)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(25)
  , invoke             = __webpack_require__(106)
  , html               = __webpack_require__(71)
  , cel                = __webpack_require__(51)
  , global             = __webpack_require__(15)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(31)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(14)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileOverview Transport 类，协议指令的传输通道
 * 由 Transport.send 将协议发送给蓝牙，串口，2.4G，wifi等
 */
var Transport = function () {
  /**
   * Create a command.
   */
  function Transport() {
    (0, _classCallCheck3.default)(this, Transport);

    this.send = function () {};
  }

  /**
   * setter interface
   * @param  {Function} fn this fn will be set as the sender
   * @return {Undefined}
   */


  (0, _createClass3.default)(Transport, [{
    key: 'sender',
    set: function set(fn) {
      if (typeof fn === 'function') {
        this.send = fn;
      }
    }
  }]);
  return Transport;
}();

exports.default = new Transport();

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(15)
  , has            = __webpack_require__(21)
  , DESCRIPTORS    = __webpack_require__(20)
  , $export        = __webpack_require__(16)
  , redefine       = __webpack_require__(70)
  , META           = __webpack_require__(120).KEY
  , $fails         = __webpack_require__(27)
  , shared         = __webpack_require__(48)
  , setToStringTag = __webpack_require__(40)
  , uid            = __webpack_require__(35)
  , wks            = __webpack_require__(14)
  , wksExt         = __webpack_require__(56)
  , wksDefine      = __webpack_require__(57)
  , keyOf          = __webpack_require__(121)
  , enumKeys       = __webpack_require__(122)
  , isArray        = __webpack_require__(123)
  , anObject       = __webpack_require__(18)
  , toIObject      = __webpack_require__(19)
  , toPrimitive    = __webpack_require__(52)
  , createDesc     = __webpack_require__(32)
  , _create        = __webpack_require__(53)
  , gOPNExt        = __webpack_require__(81)
  , $GOPD          = __webpack_require__(59)
  , $DP            = __webpack_require__(17)
  , $keys          = __webpack_require__(24)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(82).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(41).f  = $propertyIsEnumerable;
  __webpack_require__(58).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(39)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(22)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(19)
  , gOPN      = __webpack_require__(82).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(65)
  , hiddenKeys = __webpack_require__(49).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Version = function () {
  function Version() {
    (0, _classCallCheck3.default)(this, Version);
  }

  /**
   * Get version of firmware
   * @return {Promise}
   */


  (0, _createClass3.default)(Version, [{
    key: 'getVersion',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readVersion);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getVersion() {
        return _ref.apply(this, arguments);
      }

      return getVersion;
    }()
  }]);
  return Version;
}();

exports.default = new Version();

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _BaseMotor2 = __webpack_require__(61);

var _BaseMotor3 = _interopRequireDefault(_BaseMotor2);

var _validate = __webpack_require__(8);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @Class BaseEncoderMotor
 * @description It is a base Class of EncoderMotor
 * @extends BaseMotor
 */
var BaseEncoderMotor = function (_BaseMotor) {
  (0, _inherits3.default)(BaseEncoderMotor, _BaseMotor);

  /**
   * create a baseEncoderMotor
   * @param {number} port
   * @param {number} slot
   */
  function BaseEncoderMotor(port, slot) {
    (0, _classCallCheck3.default)(this, BaseEncoderMotor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseEncoderMotor.__proto__ || (0, _getPrototypeOf2.default)(BaseEncoderMotor)).call(this, port));

    (0, _assign2.default)(_this.args, {
      slot: (0, _validate.validateNumber)(slot),
      angle: 0
    });
    return _this;
  }

  /**
   * set angle offset to last angle position
   * @param  {Number} angle [description]
   * @return {[type]}       [description]
   */


  (0, _createClass3.default)(BaseEncoderMotor, [{
    key: 'offsetAngle',
    value: function offsetAngle(angle) {
      this.args.angle = (0, _validate.validateNumber)(angle, this.args.angle);
      return this;
    }

    /**
     * EncoderMotor run
     * @return {Object} the instance
     */

  }, {
    key: 'run',
    value: function run() {
      var buf = void 0;
      if (this.args.port == 0) {
        buf = _utils2.default.composer(_cmd2.default.setEncoderMotorOnBoard, [this.args.slot, this.args.speed]);
      } else {
        buf = _utils2.default.composer(_cmd2.default.setEncoderMotor, [this.args.port, this.args.slot, this.args.speed, this.args.angle]);
      }
      _control2.default.write(buf);
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
  return BaseEncoderMotor;
}(_BaseMotor3.default);

exports.default = BaseEncoderMotor;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @Class BaseLight
 * @description It is a base Class of Light
 * @extends Electronic
 */
var BaseLight = function (_Electronic) {
  (0, _inherits3.default)(BaseLight, _Electronic);

  /**
   * Create a light sensor
   * @param {Number} port
   */
  function BaseLight(port) {
    (0, _classCallCheck3.default)(this, BaseLight);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseLight.__proto__ || (0, _getPrototypeOf2.default)(BaseLight)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }

  /**
   * Get data of the Light sensor
   * @return {Promise}
   */


  (0, _createClass3.default)(BaseLight, [{
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readLight, [this.args.port]);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }]);
  return BaseLight;
}(_electronic2.default);

exports.default = BaseLight;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @Class BaseGyro
 * @description It is a base Class of Gyro
 * @extends Electronic
 */
var BaseGyro = function (_Electronic) {
  (0, _inherits3.default)(BaseGyro, _Electronic);

  /**
   * Create a gyro.
   */
  function BaseGyro(port) {
    (0, _classCallCheck3.default)(this, BaseGyro);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseGyro.__proto__ || (0, _getPrototypeOf2.default)(BaseGyro)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      axis: 0
    };
    return _this;
  }

  /**
   * Set axis in order to get the coordinates by getData
   * @param  {Number} axis X轴(01)  Y轴(02)  Z轴(03)
   * @return {Instance}      return instance
   */


  (0, _createClass3.default)(BaseGyro, [{
    key: 'axis',
    value: function axis(_axis) {
      this.args.axis = (0, _validate.validateNumber)(_axis, this.args.axis);
      return this;
    }

    /**
     * Get data of Gyro sensor
     * @return {Promise}
     */

  }, {
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readGyro, [this.args.port, this.args.axis]);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }]);
  return BaseGyro;
}(_electronic2.default);

exports.default = BaseGyro;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @Class BaseSound
 * @description It is a base Class of Sound
 * @extends Electronic
 */
var BaseSound = function (_Electronic) {
  (0, _inherits3.default)(BaseSound, _Electronic);

  /**
   * Create a sound sensor
   * @param {Number} port  led port
   */
  function BaseSound(port) {
    (0, _classCallCheck3.default)(this, BaseSound);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseSound.__proto__ || (0, _getPrototypeOf2.default)(BaseSound)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }

  /**
   * Get data of Sound sensor
   * @return {Promise}
   */


  (0, _createClass3.default)(BaseSound, [{
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readSound, [this.args.port]);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }]);
  return BaseSound;
}(_electronic2.default);

exports.default = BaseSound;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(64);

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(37);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getIterator2 = __webpack_require__(78);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _transport = __webpack_require__(79);

var _transport2 = _interopRequireDefault(_transport);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

var _version = __webpack_require__(83);

var _version2 = _interopRequireDefault(_version);

var _settings = __webpack_require__(13);

var _mcore = __webpack_require__(133);

var _mcore2 = _interopRequireDefault(_mcore);

var _orion = __webpack_require__(205);

var _orion2 = _interopRequireDefault(_orion);

var _auriga = __webpack_require__(206);

var _auriga2 = _interopRequireDefault(_auriga);

var _megaPi = __webpack_require__(207);

var _megaPi2 = _interopRequireDefault(_megaPi);

var _megaPiPro = __webpack_require__(208);

var _megaPiPro2 = _interopRequireDefault(_megaPiPro);

var _arduino = __webpack_require__(209);

var _arduino2 = _interopRequireDefault(_arduino);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//@private
/**
 * @fileOverview Sensorium Class
 * @version 0.2.2
 * @author Jeremy
 */
var boards = {
  "auriga": _auriga2.default,
  "mcore": _mcore2.default,
  "megapi": _megaPi2.default,
  "orion": _orion2.default,
  "megapipro": _megaPiPro2.default,
  "arduino": _arduino2.default

  /**
   * Sensorium
   * @description  也是整个库的对外输出的唯一命名空间
   * @namespace
   */
};
var Sensorium = function () {
  /**
   * Create a sensorium.
   */
  function Sensorium() {
    var _this = this;

    (0, _classCallCheck3.default)(this, Sensorium);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var name = _step.value;

        _this['create' + name] = function (opts) {
          return _this.create(name, opts);
        };
      };

      for (var _iterator = (0, _getIterator3.default)(_settings.SUPPORTLIST), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  /**
   * Create a mainboard instance
   * @param {String} mainboardName 主控板名，忽略大小写
   * @param {Object} opts     (optional)
   */


  (0, _createClass3.default)(Sensorium, [{
    key: 'create',
    value: function create(mainboardName, opts) {
      var board = boards[mainboardName.toLowerCase()];
      if (typeof board == 'undefined') {
        throw new Error('sorry, the board ' + mainboardName + ' could not be supported!\n        You need pass in one of ' + this.getSupported().join(',') + ' as the first argument}');
      }
      return new board(opts);
    }

    /**
     * this interface is out of use
     */

  }, {
    key: 'setTransport',
    value: function setTransport(transport) {
      throw new Error('\n      Sorry for interface changes, you have to use new API as follows:\n      // Set sender like this\n      sensorium.setSender(function(buf) {\n        serialPort.write(buf);\n      });\n\n      // Recevie data like this\n      serialPort.on(\'data\', function(data) {\n        sensorium.doRecevied(data);\n      });\n    ');
    }

    /**
     * set transport such as bluetooth、serialport、wifi
     * @param {Function} sender send method
     * @param {Function} transport.onReceived onReceived method
     */

  }, {
    key: 'setSender',
    value: function setSender(sender) {
      _transport2.default.sender = sender;
    }

    /**
     * 数据分发，目前只支持分发到 pipe
     * @param  {Buffer} buff
     */
    // TODO:其他更多模块需要此分发

  }, {
    key: 'doRecevied',
    value: function doRecevied(buff) {
      _control2.default.pipe(buff);
    }

    /**
     * read firmware verion and parse the device info
     * @return {Promise} a promise instance
     */

  }, {
    key: 'readFirmwareInfo',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _version2.default.getVersion().then(function (val) {
                  var id = void 0,
                      name = void 0;
                  if (val) {
                    id = val.split('.')[0];
                    name = _settings.FIRMWARE_ID[parseInt(id)];
                  }
                  return _promise2.default.resolve({ name: name, val: val });
                });

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function readFirmwareInfo() {
        return _ref.apply(this, arguments);
      }

      return readFirmwareInfo;
    }()

    /**
     * write protocol buffer
     * now this interface is just for debug the protocol
     * @param  {Array} buf
     * @return {Promise}
     */

  }, {
    key: 'send',
    value: function send(buf) {
      _control2.default.write(buf);
    }

    /**
     * Get supported mainboard
     */

  }, {
    key: 'getSupported',
    value: function getSupported() {
      return (0, _keys2.default)(boards);
    }
  }]);
  return Sensorium;
}();

//webpack umd


module.exports = Sensorium;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90);
module.exports = __webpack_require__(12).Object.keys;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(30)
  , $keys    = __webpack_require__(24);

__webpack_require__(36)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(19)
  , toLength  = __webpack_require__(45)
  , toIndex   = __webpack_require__(92);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(46)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(94);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 94 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(68);
__webpack_require__(38);
__webpack_require__(54);
__webpack_require__(102);
module.exports = __webpack_require__(12).Promise;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(46)
  , defined   = __webpack_require__(44);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(53)
  , descriptor     = __webpack_require__(32)
  , setToStringTag = __webpack_require__(40)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(22)(IteratorPrototype, __webpack_require__(14)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(17)
  , anObject = __webpack_require__(18)
  , getKeys  = __webpack_require__(24);

module.exports = __webpack_require__(20) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(100)
  , step             = __webpack_require__(101)
  , Iterators        = __webpack_require__(33)
  , toIObject        = __webpack_require__(19);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(69)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(39)
  , global             = __webpack_require__(15)
  , ctx                = __webpack_require__(25)
  , classof            = __webpack_require__(73)
  , $export            = __webpack_require__(16)
  , isObject           = __webpack_require__(26)
  , aFunction          = __webpack_require__(50)
  , anInstance         = __webpack_require__(103)
  , forOf              = __webpack_require__(104)
  , speciesConstructor = __webpack_require__(105)
  , task               = __webpack_require__(76).set
  , microtask          = __webpack_require__(107)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(14)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(108)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(40)($Promise, PROMISE);
__webpack_require__(109)(PROMISE);
Wrapper = __webpack_require__(12)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(77)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(25)
  , call        = __webpack_require__(74)
  , isArrayIter = __webpack_require__(75)
  , anObject    = __webpack_require__(18)
  , toLength    = __webpack_require__(45)
  , getIterFn   = __webpack_require__(55)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(18)
  , aFunction = __webpack_require__(50)
  , SPECIES   = __webpack_require__(14)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 106 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(15)
  , macrotask = __webpack_require__(76).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(31)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(22);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(15)
  , core        = __webpack_require__(12)
  , dP          = __webpack_require__(17)
  , DESCRIPTORS = __webpack_require__(20)
  , SPECIES     = __webpack_require__(14)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
__webpack_require__(38);
module.exports = __webpack_require__(111);

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(18)
  , get      = __webpack_require__(55);
module.exports = __webpack_require__(12).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(114);
var $Object = __webpack_require__(12).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(16);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(20), 'Object', {defineProperty: __webpack_require__(17).f});

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(64);

var _keys2 = _interopRequireDefault(_keys);

var _settings = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//最大记录数
var MAX_RECORD = 256;

/**
 * @private
 */
/**
 * @fileOverview Read 对象，所有'读'请求的处理器
 * @author Jeremy
 */
var Read = {
  timer: null,
  readRecord: {},
  index: 0,

  /**
   * create a safty index between 0~255
   * @return {Number|Null} return index
   */
  createSafeIndex: function createSafeIndex() {
    // “找坑法”
    if (this.index >= MAX_RECORD) {
      for (var i = 0; i < MAX_RECORD; i++) {
        if (!this.readRecord[i]) {
          return i;
        }
      }
      //没有索引
      return null;
    }
    return this.index++;
  },

  /**
   * @return {Boolean}
   */
  isOverflow: function isOverflow() {
    var keys = (0, _keys2.default)(this.readRecord);
    return keys.length == MAX_RECORD;
  },

  /**
   * add a record of time and callback
   * @param  {Number}   index
   * @param  {Function} callback [description]
   */
  addRecord: function addRecord(index, callback) {
    this.readRecord[index] = {
      time: new Date().getTime(),
      callback: callback
    };
  },

  /**
   * remove a record with index
   * @param  {Number} index record index
   */
  removeRecord: function removeRecord(index) {
    delete this.readRecord[index];
  },

  /**
   * This function is called by Control
   * @param {Function}   send  addRequest send function as proxy
   * @param {Array}   buf      rj25 buffer
   * @param {Function} callback [description]
   */
  addRequest: function addRequest(send, buf, callback) {
    var isFull = this.isOverflow();
    if (!isFull) {
      //创建流水号
      var index = this.createSafeIndex();
      //记录
      this.addRecord(index, callback);
      //看门狗处理超时请求
      this.watchdog(index);
      //执行发送
      this.exec(send, index, buf);
    } else {
      //清除超时
      var result = this.removeOvertimeRequest();
      if (!result) {
        // 忽略请求即可，若挂起请求则会阻塞回调
        console.warn('[' + buf.join(',') + '] request was ignored');
        callback(null);
      } else {
        this.addRequest.apply(this, arguments);
      }
    }
  },

  /**
   * watchdog to handle with exception request such as timeout request
   * @param  {Index} index the request index
   */
  watchdog: function watchdog(index) {
    var _this = this;

    this.timer = setTimeout(function () {
      _this.emitCallback(index, null);
    }, _settings.AUTO_OVERTIME);
  },

  /**
   * 移除超时未回调的
   * @return {Number} 返回超时数目
   */
  removeOvertimeRequest: function removeOvertimeRequest() {
    var time = new Date().getTime();
    var count = 0;
    for (var index in this.readRecord) {
      if (time - this.readRecord[index].time > _settings.OVERTIME) {
        count++;
        this.emitCallback(index, null);
      }
    }
    return count;
  },

  /**
   * 一个执行器
   * @param  {Function} send
   * @param  {Number} index    [description]
   * @param  {[type]} buf      [description]
   * @return {[type]}          [description]
   */
  exec: function exec(send, index, buf) {
    //amand the index of the buf due to the rj25 protocol
    buf.splice(3, 1, index);
    send(buf);
  },

  /**
   * execute the callback of the request
   * @param  {Number} index request index
   * @param  {Number} value request result
   */
  emitCallback: function emitCallback(index, value) {
    clearTimeout(this.timer);
    if (this.readRecord[index]) {
      this.readRecord[index].callback(value);
      this.removeRecord(index);
    }
  }
};

exports.default = Read;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @fileOverview Write 对象，所有'写'请求的处理器
 * @author Jeremy
 */
var TIME_INTERVAL = 50;
/**
 * @private
 */
var Write = {
  writeRecord: {},
  /**
   * This function is called by Control
   * @param {Function}   send  addRequest execute as proxy
   * @param {Array}   buf      rj25 buffer
   * @param {Function} callback [description]
   */
  addRequest: function addRequest(send, buf) {
    var time = new Date().getTime();
    var bufStr = buf.join('_');
    if (this.writeRecord.buf != bufStr || time - this.writeRecord.time > TIME_INTERVAL) {
      this.writeRecord.buf = bufStr;
      this.writeRecord.time = time;
      send(buf);
    }
  }
};

exports.default = Write;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 获取到的最大指令长度
var REC_BUF_MAX_LENGTH = 40; /**
                              * @fileOverview 解析器负责数据解析，对外输出解析方法.
                              */

var BUF_START_FLAG = [0xff, 0x55];
var BUF_END_FLAG = [0x0d, 0x0a];

function checkStart(flag1, flag2) {
  return flag1 === BUF_START_FLAG[0] && flag2 === BUF_START_FLAG[1];
}
function checkEnd(flag1, flag2) {
  return flag1 === BUF_END_FLAG[0] && flag2 === BUF_END_FLAG[1];
}

exports.default = {
  cacheBuffer: [],

  /**
   * 解析从硬件传递过来的数据
   * @param  {Array} buffData buffer that from the response
   * @return {Array}          the parsed result
   * data : 当前处理的数据
   * this.cacheBuffer: 历史缓存数据, 记录数据和历史数据分开记录
   */
  doParse: function doParse(buffData) {
    var recvLength = 0;
    //是否允许接收
    var isAllowRecv = false;
    var tempBuf = [];

    var data = _utils2.default.arrayFromArrayBuffer(buffData);
    var newdata = this.cacheBuffer.concat(data);
    this.cacheBuffer = newdata;
    // parse buffer newdata
    for (var i = 0; i < newdata.length; i++) {
      var data1 = parseInt(newdata[i - 1]),
          data2 = parseInt(newdata[i]);
      // start data
      if (checkStart(data1, data2)) {
        recvLength = 0;
        isAllowRecv = true;
        tempBuf = [];
      }
      // end data
      else if (checkEnd(data1, data2)) {
          //没有头部但有尾部 - 说明是无效数据
          if (!isAllowRecv) {
            this.cacheBuffer = [];
            return undefined;
          } else {
            isAllowRecv = false;
          }
          var resultBuf = tempBuf.slice(0, recvLength - 1);
          // 解析正确的数据后，清空 buffer
          this.cacheBuffer = [];
          return resultBuf;
        }
        // the data we really want
        else {
            if (isAllowRecv) {
              if (recvLength >= REC_BUF_MAX_LENGTH) {
                console.warn("receive buffer overflow!");
              }
              tempBuf[recvLength++] = data2;
            }
          }
    }
  },

  /**
   * Get result from buffer data.
   * @param  {Array} buf array data.
   * @return {Float}         value of sensor's callback
   * 回复数据数值解析, 从左到右第四位数据：
   *     1: 单字符(1 byte)
   *     2： float(4 byte)
   *     3： short(2 byte)，16个长度
   *     4： 字符串
   *     5： double(4 byte)
   *     6: long(4 byte)
   *  @example
   *  ff 55 02 02 7c 1a 81 41 0d 0a
   */
  getResult: function getResult(buf) {
    // 获取返回的数据类型
    var dataType = buf[1];
    var result = null;
    switch (dataType) {
      case "1":
      case 1:
        // 1byte
        result = buf[2];
        break;
      case "3":
      case 3:
        // 2byte
        result = this.calculateResponseValue([parseInt(buf[3]), parseInt(buf[2])]);
        break;
      case "4":
      case 4:
        // 字符串
        var bytes = buf.splice(3, buf[2]);
        result = _utils2.default.bytesToString(bytes);
        break;
      case "2":
      case "5":
      case "6":
      case 2:
      case 5:
      case 6:
        // long型或者float型的4byte处理
        result = this.calculateResponseValue([parseInt(buf[5]), parseInt(buf[4]), parseInt(buf[3]), parseInt(buf[2])]);
        break;
      default:
        break;
    }
    return result;
  },

  /**
   * calculate value from data received: bytes -> int -> float
   * @param  {Array} intArray decimal array
   * @return {Number}  result.
   */
  calculateResponseValue: function calculateResponseValue(intArray) {
    var result = null;

    // FIXME: int字节转浮点型
    var intBitsToFloat = function intBitsToFloat(num) {
      /* s 为符号（sign）；e 为指数（exponent）；m 为有效位数（mantissa）*/
      var s = num >> 31 == 0 ? 1 : -1,
          e = num >> 23 & 0xff,
          m = e == 0 ? (num & 0x7fffff) << 1 : num & 0x7fffff | 0x800000;
      return s * m * Math.pow(2, e - 150);
    };
    var intValue = _utils2.default.bytesToInt(intArray);
    // TOFIX
    if (intValue < 100000 && intValue > 0) {
      result = intValue;
    } else {
      result = parseFloat(intBitsToFloat(intValue).toFixed(2));
    }
    return result;
  }
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(119), __esModule: true };

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(80);
module.exports = __webpack_require__(12).Object.getOwnPropertySymbols;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(35)('meta')
  , isObject = __webpack_require__(26)
  , has      = __webpack_require__(21)
  , setDesc  = __webpack_require__(17).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(27)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(24)
  , toIObject = __webpack_require__(19);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(24)
  , gOPS    = __webpack_require__(58)
  , pIE     = __webpack_require__(41);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(31);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(126);
var $Object = __webpack_require__(12).Object;
module.exports = function getOwnPropertyNames(it){
  return $Object.getOwnPropertyNames(it);
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(36)('getOwnPropertyNames', function(){
  return __webpack_require__(81).f;
});

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(128);
module.exports = __webpack_require__(12).Object.getPrototypeOf;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(30)
  , $getPrototypeOf = __webpack_require__(72);

__webpack_require__(36)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(130), __esModule: true };

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
__webpack_require__(131);
module.exports = __webpack_require__(12).Array.from;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(25)
  , $export        = __webpack_require__(16)
  , toObject       = __webpack_require__(30)
  , call           = __webpack_require__(74)
  , isArrayIter    = __webpack_require__(75)
  , toLength       = __webpack_require__(45)
  , createProperty = __webpack_require__(132)
  , getIterFn      = __webpack_require__(55);

$export($export.S + $export.F * !__webpack_require__(77)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(17)
  , createDesc      = __webpack_require__(32);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Board2 = __webpack_require__(28);

var _Board3 = _interopRequireDefault(_Board2);

var _index = __webpack_require__(29);

var _index2 = _interopRequireDefault(_index);

var _settings = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//支持位置
var SUPPORT_INDEX = _settings.SUPPORTLIST.indexOf('Mcore');

/**
 * Mcore Class for 'Mcore' mainboard.
 * @extends Board
 */

var Mcore = function (_Board) {
  (0, _inherits3.default)(Mcore, _Board);

  /**
   * Create a mcore mainboard
   * @param  {Object} conf configure
   */
  function Mcore(conf) {
    (0, _classCallCheck3.default)(this, Mcore);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Mcore.__proto__ || (0, _getPrototypeOf2.default)(Mcore)).call(this, conf));

    var this_ = _this;
    //@member {String} {maiboard name}
    _this.name = 'Mcore';
    // 置空已连接块
    _this.connecting = {};
    // 挂载电子模块

    var _loop = function _loop(name) {
      var eModule = _index2.default[name];
      if (eModule.supportStamp().charAt(SUPPORT_INDEX) === '1') {
        _this[name] = function () {
          return this_.eModuleFactory(eModule, arguments, this.name);
        };
      }
    };

    for (var name in _index2.default) {
      _loop(name);
    }
    return _this;
  }

  return Mcore;
}(_Board3.default);

exports.default = Mcore;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(135), __esModule: true };

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
__webpack_require__(54);
module.exports = __webpack_require__(56).f('iterator');

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(137), __esModule: true };

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(80);
__webpack_require__(68);
__webpack_require__(138);
__webpack_require__(139);
module.exports = __webpack_require__(12).Symbol;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(57)('asyncIterator');

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(57)('observable');

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(141), __esModule: true };

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(142);
module.exports = __webpack_require__(12).Object.setPrototypeOf;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(16);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(143).set});

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(26)
  , anObject = __webpack_require__(18);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(25)(Function.call, __webpack_require__(59).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(145), __esModule: true };

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(146);
var $Object = __webpack_require__(12).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(16)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(53)});

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _BaseMotor2 = __webpack_require__(61);

var _BaseMotor3 = _interopRequireDefault(_BaseMotor2);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * DcMotor sensor module
 * @extends BaseMotor
 */
var DcMotor = function (_BaseMotor) {
  (0, _inherits3.default)(DcMotor, _BaseMotor);

  function DcMotor(port) {
    (0, _classCallCheck3.default)(this, DcMotor);
    return (0, _possibleConstructorReturn3.default)(this, (DcMotor.__proto__ || (0, _getPrototypeOf2.default)(DcMotor)).call(this, port));
  }

  (0, _createClass3.default)(DcMotor, [{
    key: 'reverse',
    value: function reverse() {
      this.speed(-1 * this.args.speed);
      return this.run();
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setDcMotor, [this.args.port, this.args.speed]);
      _control2.default.write(buf);
      return this;
    }
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return DcMotor;
}(_BaseMotor3.default);

exports.default = DcMotor;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * VirtualJoystick, actually it's a motor module
 * @extends Electronic
 */
var VirtualJoystick = function (_Electronic) {
  (0, _inherits3.default)(VirtualJoystick, _Electronic);

  function VirtualJoystick() {
    (0, _classCallCheck3.default)(this, VirtualJoystick);

    var _this = (0, _possibleConstructorReturn3.default)(this, (VirtualJoystick.__proto__ || (0, _getPrototypeOf2.default)(VirtualJoystick)).call(this));

    _this.args = {
      leftSpeed: 0,
      rightSpeed: 0
    };
    return _this;
  }

  (0, _createClass3.default)(VirtualJoystick, [{
    key: 'speed',
    value: function speed(leftSpeed, rightSpeed) {
      this.args.leftSpeed = (0, _validate.validateNumber)(leftSpeed, this.args.leftSpeed);
      this.args.rightSpeed = (0, _validate.validateNumber)(rightSpeed, this.args.rightSpeed);
      return this;
    }
  }, {
    key: 'leftSpeed',
    value: function leftSpeed(speed) {
      this.args.leftSpeed = (0, _validate.validateNumber)(speed, 0);
      return this;
    }
  }, {
    key: 'rightSpeed',
    value: function rightSpeed(speed) {
      this.args.rightSpeed = (0, _validate.validateNumber)(speed, 0);
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setJoystick, [this.args.leftSpeed, this.args.rightSpeed]);
      _control2.default.write(buf);
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

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * VirtualJoystick for Balance car, actually it's a motor module
 * @extends Electronic
 */
var VirtualJoystickForBalance = function (_Electronic) {
  (0, _inherits3.default)(VirtualJoystickForBalance, _Electronic);

  function VirtualJoystickForBalance() {
    (0, _classCallCheck3.default)(this, VirtualJoystickForBalance);

    var _this = (0, _possibleConstructorReturn3.default)(this, (VirtualJoystickForBalance.__proto__ || (0, _getPrototypeOf2.default)(VirtualJoystickForBalance)).call(this));

    _this.args = {
      speed: 0,
      turnRange: 0
    };
    return _this;
  }

  (0, _createClass3.default)(VirtualJoystickForBalance, [{
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
      _control2.default.write(buf);
      return this;
    }

    /**
     * Run reversely
     * @return {Instance} @this
     */

  }, {
    key: 'reverse',
    value: function reverse() {
      this.speed(-1 * this.args.speed);
      return this.run();
    }

    /**
     * Stop run
     * @return {Instance} @this
     */

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

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _BaseMotor2 = __webpack_require__(61);

var _BaseMotor3 = _interopRequireDefault(_BaseMotor2);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * StepperMotor sensor module
 * @extends BaseMotor
 */
var StepperMotor = function (_BaseMotor) {
  (0, _inherits3.default)(StepperMotor, _BaseMotor);

  function StepperMotor(port) {
    (0, _classCallCheck3.default)(this, StepperMotor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StepperMotor.__proto__ || (0, _getPrototypeOf2.default)(StepperMotor)).call(this, port));

    (0, _assign2.default)(_this.args, {
      distance: 0
    });
    return _this;
  }

  /**
   * set distance
   * @param  {Number} speed
   * @return {Object} the instance
   */


  (0, _createClass3.default)(StepperMotor, [{
    key: 'distance',
    value: function distance(_distance) {
      this.args.distance = (0, _validate.validateNumber)(_distance, 0);
      return this;
    }

    /**
     * run reversely
     * @return {Object} the instance
     */

  }, {
    key: 'reverse',
    value: function reverse() {
      this.speed(-1 * this.args.distance);
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setStepperMotor, [this.args.port, this.args.speed, this.args.distance]);
      _control2.default.write(buf);
      return this;
    }
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '0111';
    }
  }]);
  return StepperMotor;
}(_BaseMotor3.default);

exports.default = StepperMotor;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(152);
module.exports = __webpack_require__(12).Object.assign;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(16);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(153)});

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(24)
  , gOPS     = __webpack_require__(58)
  , pIE      = __webpack_require__(41)
  , toObject = __webpack_require__(30)
  , IObject  = __webpack_require__(66)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(27)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseEncoderMotor2 = __webpack_require__(84);

var _BaseEncoderMotor3 = _interopRequireDefault(_BaseEncoderMotor2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * EncoderMotor sensor module
 * @extends BaseEncoderMotor
 */
var EncoderMotor = function (_BaseEncoderMotor) {
  (0, _inherits3.default)(EncoderMotor, _BaseEncoderMotor);

  function EncoderMotor(port, slot) {
    (0, _classCallCheck3.default)(this, EncoderMotor);
    return (0, _possibleConstructorReturn3.default)(this, (EncoderMotor.__proto__ || (0, _getPrototypeOf2.default)(EncoderMotor)).call(this, port, slot));
  }

  (0, _createClass3.default)(EncoderMotor, null, [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '0101';
    }
  }]);
  return EncoderMotor;
}(_BaseEncoderMotor3.default);

exports.default = EncoderMotor;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _BaseEncoderMotor2 = __webpack_require__(84);

var _BaseEncoderMotor3 = _interopRequireDefault(_BaseEncoderMotor2);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bufComposer = function bufComposer(args) {
  return _utils2.default.composer(_cmd2.default.readEncoderMotorOnBoard, [args.slot, args.type]);
};

/**
 * EncoderMotorOnBoard sensor module
 * @extends BaseEncoderMotor
 */

var EncoderMotorOnBoard = function (_BaseEncoderMotor) {
  (0, _inherits3.default)(EncoderMotorOnBoard, _BaseEncoderMotor);

  function EncoderMotorOnBoard(slot) {
    (0, _classCallCheck3.default)(this, EncoderMotorOnBoard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EncoderMotorOnBoard.__proto__ || (0, _getPrototypeOf2.default)(EncoderMotorOnBoard)).call(this, 0, slot));

    (0, _assign2.default)(_this.args, {
      type: 2
    });
    return _this;
  }

  (0, _createClass3.default)(EncoderMotorOnBoard, [{
    key: 'getSpeed',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.args.type = 0x02;
                buf = bufComposer(this.args);
                _context.next = 4;
                return _control2.default.read(buf);

              case 4:
                return _context.abrupt('return', _context.sent);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getSpeed() {
        return _ref.apply(this, arguments);
      }

      return getSpeed;
    }()

    /**
     * get angle offset to the start position
     * @param  {Function} callback
     */

  }, {
    key: 'getAngle',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var buf;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.args.type = 0x01;
                buf = bufComposer(this.args);
                _context2.next = 4;
                return _control2.default.read(buf);

              case 4:
                return _context2.abrupt('return', _context2.sent);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAngle() {
        return _ref2.apply(this, arguments);
      }

      return getAngle;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '0110';
    }
  }]);
  return EncoderMotorOnBoard;
}(_BaseEncoderMotor3.default);

exports.default = EncoderMotorOnBoard;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ServoMotor sensor module
 * @extends Electronic
 */
var ServoMotor = function (_Electronic) {
  (0, _inherits3.default)(ServoMotor, _Electronic);

  function ServoMotor(port, slot) {
    (0, _classCallCheck3.default)(this, ServoMotor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ServoMotor.__proto__ || (0, _getPrototypeOf2.default)(ServoMotor)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      slot: (0, _validate.validateNumber)(slot),
      angle: 0
    };
    return _this;
  }

  /**
   * set angle of degree
   * @param  {Number} degree
   * @return {Object} the instance
   */


  (0, _createClass3.default)(ServoMotor, [{
    key: 'angle',
    value: function angle(degree) {
      this.args.angle = (0, _validate.validateNumber)(degree, 0);
      return this;
    }

    /**
     * go to the start
     * @return {[type]} [description]
     */

  }, {
    key: 'toStart',
    value: function toStart() {
      this.angle(0);
      return this.run();
    }

    /**
     * go to the end
     * @return {[type]} [description]
     */

  }, {
    key: 'toEnd',
    value: function toEnd() {
      this.angle(180);
      return this.run();
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setServoMotor, [this.args.port, this.args.slot, this.args.angle]);
      _control2.default.write(buf);
      return this;
    }
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return ServoMotor;
}(_electronic2.default);

exports.default = ServoMotor;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseRgbLed2 = __webpack_require__(62);

var _BaseRgbLed3 = _interopRequireDefault(_BaseRgbLed2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * FourLed sensor module
 * @extends Electronic
 */
var FourLeds = function (_BaseRgbLed) {
  (0, _inherits3.default)(FourLeds, _BaseRgbLed);

  function FourLeds(port) {
    (0, _classCallCheck3.default)(this, FourLeds);
    return (0, _possibleConstructorReturn3.default)(this, (FourLeds.__proto__ || (0, _getPrototypeOf2.default)(FourLeds)).call(this, port, 2));
    //接Adapter模块可以选择SLOT1(01) 和SLOT2(02)
  }

  (0, _createClass3.default)(FourLeds, null, [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return FourLeds;
}(_BaseRgbLed3.default);

exports.default = FourLeds;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseRgbLed2 = __webpack_require__(62);

var _BaseRgbLed3 = _interopRequireDefault(_BaseRgbLed2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * RgbLed sensor module
 * @extends BaseRgbLed
 */
var RgbLed = function (_BaseRgbLed) {
  (0, _inherits3.default)(RgbLed, _BaseRgbLed);

  function RgbLed(port, slot) {
    (0, _classCallCheck3.default)(this, RgbLed);
    return (0, _possibleConstructorReturn3.default)(this, (RgbLed.__proto__ || (0, _getPrototypeOf2.default)(RgbLed)).call(this, port, slot));
  }

  (0, _createClass3.default)(RgbLed, null, [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '111111';
    }
  }]);
  return RgbLed;
}(_BaseRgbLed3.default);

exports.default = RgbLed;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseRgbLed2 = __webpack_require__(62);

var _BaseRgbLed3 = _interopRequireDefault(_BaseRgbLed2);

var _validate = __webpack_require__(8);

var _settings = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * RgbLedOnBoard sensor module
 * @extends BaseRgbLed
 */
var RgbLedOnBoard = function (_BaseRgbLed) {
  (0, _inherits3.default)(RgbLedOnBoard, _BaseRgbLed);

  function RgbLedOnBoard() {
    (0, _classCallCheck3.default)(this, RgbLedOnBoard);

    //mcore
    //宿主主控
    var _this = (0, _possibleConstructorReturn3.default)(this, (RgbLedOnBoard.__proto__ || (0, _getPrototypeOf2.default)(RgbLedOnBoard)).call(this, 7, 2));

    _this.hostname = (0, _validate.warnNotSupport)(arguments[arguments.length - 1]) || '';
    switch (_this.hostname) {
      //auriga
      case _settings.SUPPORTLIST[1]:
        _this.args.port = 0;
        _this.args.slot = 2;
        break;
      //mcore
      default:
        _this.args.port = 7;
        _this.args.slot = 2;
    }
    return _this;
  }

  (0, _createClass3.default)(RgbLedOnBoard, null, [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '110000';
    }
  }]);
  return RgbLedOnBoard;
}(_BaseRgbLed3.default);

exports.default = RgbLedOnBoard;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _led_matrix_char = __webpack_require__(161);

var _led_matrix_char2 = _interopRequireDefault(_led_matrix_char);

var _led_matrix_emotion = __webpack_require__(165);

var _led_matrix_emotion2 = _interopRequireDefault(_led_matrix_emotion);

var _led_matrix_number = __webpack_require__(166);

var _led_matrix_number2 = _interopRequireDefault(_led_matrix_number);

var _led_matrix_time = __webpack_require__(167);

var _led_matrix_time2 = _interopRequireDefault(_led_matrix_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * LedMatrix sensor module, who can be play as 'charMode','emotionMode','numberMode','timeMode'
 * @extends Electronic
 */
var LedMatrix = function (_Electronic) {
  (0, _inherits3.default)(LedMatrix, _Electronic);

  function LedMatrix(port) {
    (0, _classCallCheck3.default)(this, LedMatrix);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LedMatrix.__proto__ || (0, _getPrototypeOf2.default)(LedMatrix)).call(this));

    var host = (0, _validate.warnNotSupport)(arguments[arguments.length - 1]) || '';
    port = (0, _validate.validateNumber)(port);
    //宿主
    _this.hostname = host.toLowerCase();
    //字符模式
    _this.charMode = function () {
      return new _led_matrix_char2.default(port);
    };

    //表情模式
    _this.emotionMode = function () {
      return new _led_matrix_emotion2.default(port);
    };

    //数字模式
    _this.numberMode = function () {
      return new _led_matrix_number2.default(port);
    };

    //时间模式
    _this.timeMode = function () {
      return new _led_matrix_time2.default(port);
    };
    return _this;
  }

  (0, _createClass3.default)(LedMatrix, null, [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1110';
    }
  }]);
  return LedMatrix;
}(_electronic2.default);

exports.default = LedMatrix;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(78);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(42);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _BaseLedMatrix2 = __webpack_require__(43);

var _BaseLedMatrix3 = _interopRequireDefault(_BaseLedMatrix2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * LedMatrix sensor module run as 'Char Mode'
 * @extends BaseLedMatrix
 * @private
 */
var LedMatrixChar = function (_BaseLedMatrix) {
  (0, _inherits3.default)(LedMatrixChar, _BaseLedMatrix);

  function LedMatrixChar(port) {
    (0, _classCallCheck3.default)(this, LedMatrixChar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LedMatrixChar.__proto__ || (0, _getPrototypeOf2.default)(LedMatrixChar)).call(this, port));

    (0, _assign2.default)(_this.args, {
      x: 0,
      y: 0,
      char: ''
    });
    return _this;
  }

  /**
   * set the X axis coordinate of the char
   * @param  {Number} x 
   */


  (0, _createClass3.default)(LedMatrixChar, [{
    key: 'x',
    value: function x(_x) {
      this.args.x = (0, _validate.validateNumber)(_x, this.args.x);
      return this;
    }

    /**
     * set the Y axis coordinate of the char
     * @param  {Number} y
     */

  }, {
    key: 'y',
    value: function y(_y) {
      this.args.y = (0, _validate.validateNumber)(_y, this.args.y);
      return this;
    }
  }, {
    key: 'char',
    value: function char(str) {
      this.args.char = (0, _validate.validateString)(str);
      return this;
    }

    /**
     * set content for Matrix panel
     * @param  {String} str
     * @param  {Number} coordinate contains [x, y]
     */

  }, {
    key: 'content',
    value: function content(str, coordinate) {
      if (!Array.isArray(coordinate)) {
        coordinate = [0, 0];
      }
      //设定坐标
      this.x(coordinate[0]);
      this.y(coordinate[1]);
      return this.char(str);
    }
  }, {
    key: 'run',
    value: function run() {
      var type = 0x01;
      var bufArray = [this.args.port, type, this.args.x, this.args.y, this.args.char.length];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(this.args.char), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var char = _step.value;

          bufArray.push(char.charCodeAt());
        }
        // console.log('Matrix panel show chars ===>', bufArray);
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      (0, _get3.default)(LedMatrixChar.prototype.__proto__ || (0, _getPrototypeOf2.default)(LedMatrixChar.prototype), 'run', this).call(this, bufArray);
      return this;
    }
  }]);
  return LedMatrixChar;
}(_BaseLedMatrix3.default);

exports.default = LedMatrixChar;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(163), __esModule: true };

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(164);
var $Object = __webpack_require__(12).Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = __webpack_require__(19)
  , $getOwnPropertyDescriptor = __webpack_require__(59).f;

__webpack_require__(36)('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(42);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _BaseLedMatrix2 = __webpack_require__(43);

var _BaseLedMatrix3 = _interopRequireDefault(_BaseLedMatrix2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * LedMatrix sensor module run as 'Emotion Mode'
 * @extends BaseLedMatrix
 * @private
 */
var LedMatrixEmotion = function (_BaseLedMatrix) {
  (0, _inherits3.default)(LedMatrixEmotion, _BaseLedMatrix);

  function LedMatrixEmotion(port) {
    (0, _classCallCheck3.default)(this, LedMatrixEmotion);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LedMatrixEmotion.__proto__ || (0, _getPrototypeOf2.default)(LedMatrixEmotion)).call(this, port));

    (0, _assign2.default)(_this.args, {
      x: 0,
      y: 0,
      emotion: 0
    });
    return _this;
  }

  /**
   * set the X axis coordinate of the emotion
   * @param  {Number} x
   */


  (0, _createClass3.default)(LedMatrixEmotion, [{
    key: 'x',
    value: function x(_x) {
      this.args.x = _x;
      return this;
    }

    /**
     * set the Y axis coordinate of the emotion
     * @param  {Number} y
     */

  }, {
    key: 'y',
    value: function y(_y) {
      this.args.y = _y;
      return this;
    }

    /**
     * use lattice to describe the emotion
     * @param  {String} emotion lattice
     */

  }, {
    key: 'emotion',
    value: function emotion(_emotion) {
      // TODO: validate the param
      this.args.emotion = (0, _validate.validateString)(_emotion);
      return this;
    }

    /**
     * set content for Matrix panel
     * @param  {String} emotionStr
     * @param  {Number} coordinate contains [x, y]
     */

  }, {
    key: 'content',
    value: function content(emotionStr, coordinate) {
      if (!Array.isArray(coordinate)) {
        coordinate = [0, 0];
      }
      //设定坐标
      this.x(coordinate[0]);
      this.y(coordinate[1]);
      return this.emotion(emotionStr);
    }
  }, {
    key: 'run',
    value: function run() {
      var type = 0x02;
      var byteResult = _utils2.default.byteString2binaryByte(this.args.emotion);
      var bufArray = [this.args.port, type, this.args.x, this.args.y].concat(byteResult);
      (0, _get3.default)(LedMatrixEmotion.prototype.__proto__ || (0, _getPrototypeOf2.default)(LedMatrixEmotion.prototype), 'run', this).call(this, bufArray);
      return this;
    }
  }]);
  return LedMatrixEmotion;
}(_BaseLedMatrix3.default);

exports.default = LedMatrixEmotion;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(34);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(42);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _BaseLedMatrix2 = __webpack_require__(43);

var _BaseLedMatrix3 = _interopRequireDefault(_BaseLedMatrix2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * LedMatrix sensor module run as 'Number Mode'
 * @extends BaseLedMatrix
 * @private
 */
var LedMatrixNumber = function (_BaseLedMatrix) {
  (0, _inherits3.default)(LedMatrixNumber, _BaseLedMatrix);

  function LedMatrixNumber(port) {
    (0, _classCallCheck3.default)(this, LedMatrixNumber);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LedMatrixNumber.__proto__ || (0, _getPrototypeOf2.default)(LedMatrixNumber)).call(this, port));

    (0, _assign2.default)(_this.args, {
      number: 0
    });
    return _this;
  }

  (0, _createClass3.default)(LedMatrixNumber, [{
    key: 'number',
    value: function number(_number) {
      this.args.number = (0, _validate.validateNumber)(_number);
      return this;
    }

    /**
     * set content for Matrix panel
     * @param  {Number} number
     */

  }, {
    key: 'content',
    value: function content(number) {
      return this.number(number);
    }
  }, {
    key: 'run',
    value: function run() {
      var type = 0x04;
      var bufArray = [this.args.port, type].concat((0, _toConsumableArray3.default)(_utils2.default.float32ToBytes(this.args.number)));
      (0, _get3.default)(LedMatrixNumber.prototype.__proto__ || (0, _getPrototypeOf2.default)(LedMatrixNumber.prototype), 'run', this).call(this, bufArray);
      return this;
    }
  }]);
  return LedMatrixNumber;
}(_BaseLedMatrix3.default);

exports.default = LedMatrixNumber;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(42);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _BaseLedMatrix2 = __webpack_require__(43);

var _BaseLedMatrix3 = _interopRequireDefault(_BaseLedMatrix2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * LedMatrix sensor module run as 'Time Mode'
 * @extends BaseLedMatrix
 * @private
 */
var LedMatrixTime = function (_BaseLedMatrix) {
  (0, _inherits3.default)(LedMatrixTime, _BaseLedMatrix);

  function LedMatrixTime(port) {
    (0, _classCallCheck3.default)(this, LedMatrixTime);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LedMatrixTime.__proto__ || (0, _getPrototypeOf2.default)(LedMatrixTime)).call(this, port));

    (0, _assign2.default)(_this.args, {
      separator: 0x01,
      hour: 0,
      minute: 0
    });
    return _this;
  }

  /**
   * set separator between hour and minute
   * @param  {String} separator  01 signify `:`, 02 signify ` `
   */


  (0, _createClass3.default)(LedMatrixTime, [{
    key: 'separator',
    value: function separator(_separator) {
      _separator = (0, _validate.warnParamNotInList)(_separator, [':', ' ']) || ':';
      _separator = _separator === ':' ? 0x01 : 0x02;
      this.args.separator = _separator;
      return this;
    }

    /**
     * set hour
     * @param  {Number} h hour
     */

  }, {
    key: 'hour',
    value: function hour(h) {
      h = _utils2.default.limitValue(h, [0, 23]);
      this.args.hour = (0, _validate.validateNumber)(h);
      return this;
    }

    /**
     * set minute
     * @param  {Number} m minute
     */

  }, {
    key: 'minute',
    value: function minute(m) {
      m = _utils2.default.limitValue(m, [0, 59]);
      this.args.minute = (0, _validate.validateNumber)(m);
      return this;
    }

    /**
     * set content for Matrix panel
     * @param  {String} timeStr time string format should be 'HH:MM' or 'HH MM' or 'H:M'
     */

  }, {
    key: 'content',
    value: function content(timeStr) {
      var timeArr = (0, _validate.warnParamNotDateFormat)(timeStr || '') || [0, ':', 0];
      //利用参数的校验接口
      this.separator(timeArr[1]);
      this.hour(Number(timeArr[0]));
      this.minute(Number(timeArr[2]));
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var type = 0x03;
      var bufArray = [this.args.port, type, this.args.separator, this.args.hour, this.args.minute];
      (0, _get3.default)(LedMatrixTime.prototype.__proto__ || (0, _getPrototypeOf2.default)(LedMatrixTime.prototype), 'run', this).call(this, bufArray);
      return this;
    }
  }]);
  return LedMatrixTime;
}(_BaseLedMatrix3.default);

exports.default = LedMatrixTime;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MCORE_ = _settings.SUPPORTLIST[0].toLowerCase();

/**
 * Buzzer sensor module
 * @extends Electronic
 */

var Buzzer = function (_Electronic) {
  (0, _inherits3.default)(Buzzer, _Electronic);

  function Buzzer() {
    (0, _classCallCheck3.default)(this, Buzzer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Buzzer.__proto__ || (0, _getPrototypeOf2.default)(Buzzer)).call(this));

    _this.args = {
      hz: 880,
      beat: 250
    };
    var host = (0, _validate.warnNotSupport)(arguments[arguments.length - 1]) || '';
    //宿主
    _this.hostname = host.toLowerCase();
    return _this;
  }

  /**
   * Set tone
   * @param  {String} tone tone string, such as "C5"
   */


  (0, _createClass3.default)(Buzzer, [{
    key: 'tone',
    value: function tone() {
      var _tone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "C5";

      _tone = (0, _validate.validateString)(_tone.toUpperCase());
      var hz = _settings.TONE_TO_HZ[_tone] || 880;
      return this.hz(hz);
    }

    /**
     * Set hz
     * @param  {Number} hz such as 200
     */

  }, {
    key: 'hz',
    value: function hz(_hz) {
      this.args.hz = (0, _validate.validateNumber)(_hz);
      return this;
    }

    /**
     * Set beat
     * @param  {Number} beat such as 250, 1000
     */

  }, {
    key: 'beat',
    value: function beat(_beat) {
      this.args.beat = (0, _validate.validateNumber)(_beat);
      return this;
    }

    /**
     * run Buzzer sensor
     */

  }, {
    key: 'run',
    value: function run() {
      var buf = [];
      switch (this.hostname) {
        case MCORE_:
          buf = _utils2.default.composer(_cmd2.default.setBuzzerForMcore, [this.args.hz, this.args.beat]);
          break;
        default:
          buf = _utils2.default.composer(_cmd2.default.setBuzzer, [this.args.hz, this.args.beat]);
      }
      _control2.default.write(buf);
      return this;
    }
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '11111';
    }
  }]);
  return Buzzer;
}(_electronic2.default);

exports.default = Buzzer;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * SevenSegment sensor module
 * @extends Electronic
 */
var SevenSegment = function (_Electronic) {
  (0, _inherits3.default)(SevenSegment, _Electronic);

  function SevenSegment(port) {
    (0, _classCallCheck3.default)(this, SevenSegment);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SevenSegment.__proto__ || (0, _getPrototypeOf2.default)(SevenSegment)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      number: 1
    };
    return _this;
  }

  (0, _createClass3.default)(SevenSegment, [{
    key: 'number',
    value: function number(num) {
      this.args.number = (0, _validate.validateNumber)(num, this.args.number);
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setSevenSegment, [this.args.port, this.args.number]);
      _control2.default.write(buf);
      return this;
    }
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return SevenSegment;
}(_electronic2.default);

exports.default = SevenSegment;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Shutter sensor module
 * @extends Electronic
 */
var Shutter = function (_Electronic) {
  (0, _inherits3.default)(Shutter, _Electronic);

  function Shutter(port) {
    (0, _classCallCheck3.default)(this, Shutter);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Shutter.__proto__ || (0, _getPrototypeOf2.default)(Shutter)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      action: null
    };
    return _this;
  }

  /**
   * set shutter mode
   * @param {string} actionId - 动作id  0: 按下快门; 1: 松开快门; 2: 聚焦; 3: 停止聚焦
   */
  //TODO: 本API易用性还得改进


  (0, _createClass3.default)(Shutter, [{
    key: 'action',
    value: function action(actionId) {
      this.args.action = (0, _validate.validateNumber)(actionId);
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setShutter, [this.args.port, this.args.action]);
      _control2.default.write(buf);
      return this;
    }
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return Shutter;
}(_electronic2.default);

exports.default = Shutter;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

//@private
var read = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(baseArgs) {
    var buf;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            buf = _utils2.default.composer(_cmd2.default.readSmartServoParam, [baseArgs.index, baseArgs.subCmd]);
            _context.next = 3;
            return _control2.default.read(buf);

          case 3:
            return _context.abrupt('return', _context.sent);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function read(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * SmartServo sensor module
 * @extends Electronic
 */


var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//@private
function write(baseArgs, extra) {
  var baseCmd = [baseArgs.index, baseArgs.subCmd];
  if (!Array.isArray(extra)) {
    baseCmd.push(typeof extra !== 'undefined' ? [extra] : []);
  } else {
    baseCmd.push(extra);
  }
  var buf = _utils2.default.composer(_cmd2.default.setSmartServo, baseCmd);
  _control2.default.write(buf);
}
var SmartServo = function (_Electronic) {
  (0, _inherits3.default)(SmartServo, _Electronic);

  function SmartServo(index) {
    (0, _classCallCheck3.default)(this, SmartServo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SmartServo.__proto__ || (0, _getPrototypeOf2.default)(SmartServo)).call(this));

    _this.args = {
      index: index,
      subCmd: null,
      speed: 0
    };
    return _this;
  }

  //锁定


  (0, _createClass3.default)(SmartServo, [{
    key: 'lock',
    value: function lock() {
      var extraCmd = 0x00;
      this.args.subCmd = 0x01;
      write(this.args, extraCmd);
      return this;
    }
    //解锁

  }, {
    key: 'unclock',
    value: function unclock() {
      var extraCmd = 0x01;
      this.args.subCmd = 0x01;
      write(this.args, extraCmd);
      return this;
    }

    /**
     * set led color of the smart servo
     * @param {String|Array} hex_rgb #ff0064 or [255, 00, 100]
     */

  }, {
    key: 'setLedColor',
    value: function setLedColor(hex_rgb) {
      var extraCmd = void 0;
      if (typeof rgb === 'string') {
        extraCmd = _utils2.default.hexToRgb(hex_rgb);
      } else if (Array.isArray(hex_rgb)) {
        extraCmd = hex_rgb;
      } else {
        extraCmd = [255, 0, 0];
      }
      this.args.subCmd = 0x02;
      write(this.args, extraCmd);
      return this;
    }

    /**
     * handshake
     */

  }, {
    key: 'handshake',
    value: function handshake() {
      this.args.subCmd = 0x03;
      write(this.args);
      return this;
    }

    /**
     * Set speed for smart servo
     * @param  {Number} speed the speed
     */

  }, {
    key: 'speed',
    value: function speed(_speed) {
      this.args.speed = (0, _validate.validateNumber)(_speed);
      return this;
    }
    /**
     * Move to the absolute angle
     * @param  {Number} angle the absolute angle
     */

  }, {
    key: 'runToAbsoluteAngle',
    value: function runToAbsoluteAngle(angle) {
      this.args.subCmd = 0x04;
      angle = (0, _validate.validateNumber)(angle, 0);
      var cmd = [this.args.index, this.args.subCmd, angle, this.args.speed];
      var buf = _utils2.default.composer(_cmd2.default.setSmartServoForAbsoluteAngle, cmd);
      _control2.default.write(buf);
      return this;
    }
    /**
     * Move to the relative angle
     * @param  {Number} angle the relative angle
     */

  }, {
    key: 'runToRelativeAngle',
    value: function runToRelativeAngle(angle) {
      this.args.subCmd = 0x05;
      angle = (0, _validate.validateNumber)(angle, 0);
      var cmd = [this.args.index, this.args.subCmd, angle, this.args.speed];
      var buf = _utils2.default.composer(_cmd2.default.setSmartServoForRelativeAngle, cmd);
      _control2.default.write(buf);
      return this;
    }
    /**
     * move smart servo as a DC motor
     * @param  {Number} speed (optional) speed of the smart servo
     */

  }, {
    key: 'runAsDcMotor',
    value: function runAsDcMotor(speed) {
      speed = (0, _validate.validateNumber)(speed, this.args.speed);
      //限制速度 -255~255
      this.args.speed = _utils2.default.limitValue(speed);
      this.args.subCmd = 0x06;
      var cmd = [this.args.index, this.args.subCmd, this.args.speed];
      var buf = _utils2.default.composer(_cmd2.default.setSmartServoForDcMotor, cmd);
      _control2.default.write(buf);
      return this;
    }

    //设置零点

  }, {
    key: 'setZeroPoint',
    value: function setZeroPoint() {
      this.args.subCmd = 0x07;
      write(this.args);
      return this;
    }

    //回到起点

  }, {
    key: 'backToStart',
    value: function backToStart() {
      this.args.subCmd = 0x08;
      write(this.args);
      return this;
    }

    //读速度

  }, {
    key: 'readSpeed',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.args.subCmd = 0x09;
                _context2.next = 3;
                return read(this.args);

              case 3:
                return _context2.abrupt('return', _context2.sent);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function readSpeed() {
        return _ref2.apply(this, arguments);
      }

      return readSpeed;
    }()
    //读温度

  }, {
    key: 'readTemperature',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.args.subCmd = 0x0a;
                _context3.next = 3;
                return read(this.args);

              case 3:
                return _context3.abrupt('return', _context3.sent);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function readTemperature() {
        return _ref3.apply(this, arguments);
      }

      return readTemperature;
    }()

    //读电流

  }, {
    key: 'readCurrent',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.args.subCmd = 0x0b;
                _context4.next = 3;
                return read(this.args);

              case 3:
                return _context4.abrupt('return', _context4.sent);

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function readCurrent() {
        return _ref4.apply(this, arguments);
      }

      return readCurrent;
    }()

    //读电压

  }, {
    key: 'readVoltage',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.args.subCmd = 0x0c;
                _context5.next = 3;
                return read(this.args);

              case 3:
                return _context5.abrupt('return', _context5.sent);

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function readVoltage() {
        return _ref5.apply(this, arguments);
      }

      return readVoltage;
    }()

    //读角度

  }, {
    key: 'readAngle',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.args.subCmd = 0x0d;
                _context6.next = 3;
                return read(this.args);

              case 3:
                return _context6.abrupt('return', _context6.sent);

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function readAngle() {
        return _ref6.apply(this, arguments);
      }

      return readAngle;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '0100';
    }
  }]);
  return SmartServo;
}(_electronic2.default);

exports.default = SmartServo;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _encoder_motor_on_board_pid_for_distance = __webpack_require__(173);

var _encoder_motor_on_board_pid_for_distance2 = _interopRequireDefault(_encoder_motor_on_board_pid_for_distance);

var _encoder_motor_on_board_pid_for_speed = __webpack_require__(174);

var _encoder_motor_on_board_pid_for_speed2 = _interopRequireDefault(_encoder_motor_on_board_pid_for_speed);

var _encoder_motor_on_board_pid_for_pwm = __webpack_require__(175);

var _encoder_motor_on_board_pid_for_pwm2 = _interopRequireDefault(_encoder_motor_on_board_pid_for_pwm);

var _encoder_motor_on_board_pid_for_doubleMotor = __webpack_require__(176);

var _encoder_motor_on_board_pid_for_doubleMotor2 = _interopRequireDefault(_encoder_motor_on_board_pid_for_doubleMotor);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var auriga = _settings.SUPPORTLIST[1].toLowerCase();
var megapipro = _settings.SUPPORTLIST[5].toLowerCase();

var EncoderMotorOnBoardPID = function (_Electronic) {
  (0, _inherits3.default)(EncoderMotorOnBoardPID, _Electronic);

  function EncoderMotorOnBoardPID() {
    (0, _classCallCheck3.default)(this, EncoderMotorOnBoardPID);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EncoderMotorOnBoardPID.__proto__ || (0, _getPrototypeOf2.default)(EncoderMotorOnBoardPID)).call(this));

    var host = (0, _validate.warnNotSupport)(arguments[arguments.length - 1]) || megapipro;
    //宿主
    _this.hostname = host.toLowerCase();
    //位置模式
    _this.distanceMode = function () {
      return new _encoder_motor_on_board_pid_for_distance2.default();
    };
    //速度模式
    _this.speedMode = function () {
      return new _encoder_motor_on_board_pid_for_speed2.default();
    };
    //auriga 会多出两个 API
    if (_this.hostname === auriga) {
      //pwm 模式
      _this.pwmMode = function () {
        return new _encoder_motor_on_board_pid_for_pwm2.default();
      };
      //双电机模式
      _this.doubleMotorMode = function () {
        return new _encoder_motor_on_board_pid_for_doubleMotor2.default();
      };
    }
    return _this;
  }

  /**
   * 设置零点
   * 调用方式: new EncoderMotorOnBoardPID().setZeroPoint()
   */


  (0, _createClass3.default)(EncoderMotorOnBoardPID, [{
    key: 'setZeroPoint',
    value: function setZeroPoint() {
      var subCmd = void 0;
      if (this.hostname == auriga) {
        subCmd = 0x04;
      } else if (this.hostname == megapipro) {
        subCmd = 0x03;
      }
      var buf = _utils2.default.composer(_cmd2.default.setEncoderMotorPIDZeroPoint, [subCmd]);
      _control2.default.write(buf);
      return this;
    }
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '010001';
    }
  }]);
  return EncoderMotorOnBoardPID;
}(_electronic2.default);

exports.default = EncoderMotorOnBoardPID;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EncoderMotorPIDForDistance = function () {
  function EncoderMotorPIDForDistance() {
    (0, _classCallCheck3.default)(this, EncoderMotorPIDForDistance);

    this.args = {
      distance: 0,
      speed: 0
    };
  }

  /**
   * set distance
   * @param  {Number} distance 位移
   */


  (0, _createClass3.default)(EncoderMotorPIDForDistance, [{
    key: 'distance',
    value: function distance(_distance) {
      this.args.distance = (0, _validate.validateNumber)(_distance, this.args.distance);
      return this;
    }

    /**
     * set speed
     * @param  {Number} speed 速度
     */

  }, {
    key: 'speed',
    value: function speed(_speed) {
      this.args.speed = (0, _validate.validateNumber)(_speed, this.args.speed);
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setEncoderMotorPIDDistance, [this.args.distance, this.args.speed]);
      _control2.default.write(buf);
      return this;
    }
  }]);
  return EncoderMotorPIDForDistance;
}();

exports.default = EncoderMotorPIDForDistance;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PIDForSpeed = function () {
  function PIDForSpeed() {
    (0, _classCallCheck3.default)(this, PIDForSpeed);

    this.args = {
      speed: 0
    };
  }

  /**
   * set speed
   * @param  {Number} speed 速度
   * @return {[type]}       [description]
   */


  (0, _createClass3.default)(PIDForSpeed, [{
    key: 'speed',
    value: function speed(_speed) {
      this.args.speed = (0, _validate.validateNumber)(_speed, this.args.speed);
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setEncoderMotorPIDSpeed, [this.args.speed]);
      _control2.default.write(buf);
      return this;
    }
  }]);
  return PIDForSpeed;
}();

exports.default = PIDForSpeed;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PIDForPwm = function () {
  function PIDForPwm() {
    (0, _classCallCheck3.default)(this, PIDForPwm);

    this.args = {
      speed: 0
    };
  }

  /**
   * set speed
   * @param  {Number} angle [description]
   * @return {[type]}       [description]
   */


  (0, _createClass3.default)(PIDForPwm, [{
    key: 'speed',
    value: function speed(_speed) {
      this.args.speed = (0, _validate.validateNumber)(_speed, this.args.speed);
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setEncoderMotorPIDPwm, [this.args.speed]);
      _control2.default.write(buf);
      return this;
    }
  }]);
  return PIDForPwm;
}();

exports.default = PIDForPwm;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PIDForDoubleMotor = function () {
  function PIDForDoubleMotor() {
    (0, _classCallCheck3.default)(this, PIDForDoubleMotor);

    this.args = {
      distance: 0,
      direction: 1,
      speed: 0
    };
  }
  /**
   * set direction with a string argument
   * @param  {String} dir dir should be uppercase or lowercase of 'FORWARD'、'BACKWARD'、'TURNLEF'、'TURNRIGHT'
   */


  (0, _createClass3.default)(PIDForDoubleMotor, [{
    key: 'direction',
    value: function direction(dir) {
      dir = (0, _validate.warnParamNotInList)((dir || '').toUpperCase(), _settings.MOVE_DIRECTION);
      switch (dir) {
        case _settings.MOVE_DIRECTION[0]:
          this.args.direction = 1;
          break;
        case _settings.MOVE_DIRECTION[1]:
          this.args.direction = 2;
          break;
        case _settings.MOVE_DIRECTION[2]:
          this.args.direction = 3;
          break;
        case _settings.MOVE_DIRECTION[3]:
          this.args.direction = 4;
          break;
        default:
          this.args.direction = 1;
      }
      return this;
    }

    //direction + run

  }, {
    key: 'forward',
    value: function forward() {
      this.args.direction = 1;
      return this.run();
    }

    //direction + run

  }, {
    key: 'backward',
    value: function backward() {
      this.args.direction = 2;
      return this.run();
    }

    //direction + run

  }, {
    key: 'turnleft',
    value: function turnleft() {
      this.args.direction = 3;
      return this.run();
    }

    //direction + run

  }, {
    key: 'turnright',
    value: function turnright() {
      this.args.direction = 4;
      return this.run();
    }

    /**
     * set distance
     * @param  {Number} distance 位移
     */

  }, {
    key: 'distance',
    value: function distance(_distance) {
      this.args.distance = (0, _validate.validateNumber)(_distance, this.args.distance);
      return this;
    }

    /**
     * set speed
     * @param  {Number} speed [description]
     * @return {[type]}       [description]
     */

  }, {
    key: 'speed',
    value: function speed(_speed) {
      this.args.speed = (0, _validate.validateNumber)(_speed, this.args.speed);
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setEncoderMotorPIDDoubleMotor, [this.args.direction, this.args.distance, this.args.speed]);
      _control2.default.write(buf);
      return this;
    }
  }]);
  return PIDForDoubleMotor;
}();

exports.default = PIDForDoubleMotor;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Reset module
 * @extends Electronic
 */
var Reset = function (_Electronic) {
  (0, _inherits3.default)(Reset, _Electronic);

  function Reset() {
    (0, _classCallCheck3.default)(this, Reset);
    return (0, _possibleConstructorReturn3.default)(this, (Reset.__proto__ || (0, _getPrototypeOf2.default)(Reset)).call(this));
  }

  (0, _createClass3.default)(Reset, [{
    key: 'reset',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.reset);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function reset() {
        return _ref.apply(this, arguments);
      }

      return reset;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return Reset;
}(_electronic2.default);

exports.default = Reset;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Ultrasonic sensor module
 * @extends Electronic
 */
var Ultrasonic = function (_Electronic) {
  (0, _inherits3.default)(Ultrasonic, _Electronic);

  function Ultrasonic(port) {
    (0, _classCallCheck3.default)(this, Ultrasonic);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Ultrasonic.__proto__ || (0, _getPrototypeOf2.default)(Ultrasonic)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }

  /**
   * Get data of Ultrasonic sensor
   * @return {Promise}
   */


  (0, _createClass3.default)(Ultrasonic, [{
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readUltrasonic, [this.args.port]);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return Ultrasonic;
}(_electronic2.default);

exports.default = Ultrasonic;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Temperature sensor module
 * @extends Electronic
 */
var Temperature = function (_Electronic) {
  (0, _inherits3.default)(Temperature, _Electronic);

  function Temperature(port, slot) {
    (0, _classCallCheck3.default)(this, Temperature);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Temperature.__proto__ || (0, _getPrototypeOf2.default)(Temperature)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      slot: (0, _validate.validateNumber)(slot)
    };
    return _this;
  }

  /**
   * Get data of Temperature sensor
   * @return {Promise}
   */


  (0, _createClass3.default)(Temperature, [{
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readTemperature, [this.args.port, this.args.slot]);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return Temperature;
}(_electronic2.default);

exports.default = Temperature;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * TemperatureOnBoard sensor module
 * @extends Electronic
 */
var TemperatureOnBoard = function (_Electronic) {
  (0, _inherits3.default)(TemperatureOnBoard, _Electronic);

  function TemperatureOnBoard() {
    (0, _classCallCheck3.default)(this, TemperatureOnBoard);
    return (0, _possibleConstructorReturn3.default)(this, (TemperatureOnBoard.__proto__ || (0, _getPrototypeOf2.default)(TemperatureOnBoard)).call(this, 0x0d));
  }

  /**
   * Get data of TemperatureOnBoard sensor
   * @return {Promise}
   */


  (0, _createClass3.default)(TemperatureOnBoard, [{
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readTemperatureOnBoard);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '0100';
    }
  }]);
  return TemperatureOnBoard;
}(_electronic2.default);

exports.default = TemperatureOnBoard;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseLight2 = __webpack_require__(85);

var _BaseLight3 = _interopRequireDefault(_BaseLight2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Light sensor module
 * @extends BaseLight
 */
var Light = function (_BaseLight) {
  (0, _inherits3.default)(Light, _BaseLight);

  function Light(port) {
    (0, _classCallCheck3.default)(this, Light);
    return (0, _possibleConstructorReturn3.default)(this, (Light.__proto__ || (0, _getPrototypeOf2.default)(Light)).call(this, port));
  }

  (0, _createClass3.default)(Light, null, [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '111111';
    }
  }]);
  return Light;
}(_BaseLight3.default);

exports.default = Light;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _BaseLight2 = __webpack_require__(85);

var _BaseLight3 = _interopRequireDefault(_BaseLight2);

var _settings = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * LightOnBoard sensor module
 * @extends BaseLight
 */
var LightOnBoard = function (_BaseLight) {
  (0, _inherits3.default)(LightOnBoard, _BaseLight);

  function LightOnBoard() {
    (0, _classCallCheck3.default)(this, LightOnBoard);

    //mcore
    //宿主主控
    var _this = (0, _possibleConstructorReturn3.default)(this, (LightOnBoard.__proto__ || (0, _getPrototypeOf2.default)(LightOnBoard)).call(this, 6));

    _this.hostname = (0, _validate.warnNotSupport)(arguments[arguments.length - 1]) || '';
    switch (_this.hostname) {
      case _settings.SUPPORTLIST[1]:
        //TO IMPROVE: auriga 板载 port 只能为 0x0c，0x0b
        _this.args.port = (0, _validate.validateNumber)(arguments[0], 1);
        break;
      //megapi
      case _settings.SUPPORTLIST[2]:
        _this.args.port = 0x0c;
        break;
      default:
        _this.args.port = 6; //mcore
    }
    return _this;
  }

  (0, _createClass3.default)(LightOnBoard, null, [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '111111';
    }
  }]);
  return LightOnBoard;
}(_BaseLight3.default);

exports.default = LightOnBoard;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Potentionmeter sensor module
 * @extends Electronic
 */
var Potentionmeter = function (_Electronic) {
  (0, _inherits3.default)(Potentionmeter, _Electronic);

  function Potentionmeter(port) {
    (0, _classCallCheck3.default)(this, Potentionmeter);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Potentionmeter.__proto__ || (0, _getPrototypeOf2.default)(Potentionmeter)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }
  /**
   * Get data of Potentionmeter sensor
   * @return {Promise}
   */


  (0, _createClass3.default)(Potentionmeter, [{
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readPotentionmeter, [this.args.port]);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return Potentionmeter;
}(_electronic2.default);

exports.default = Potentionmeter;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Joystick sensor module
 * @extends Electronic
 */
var Joystick = function (_Electronic) {
  (0, _inherits3.default)(Joystick, _Electronic);

  function Joystick(port) {
    (0, _classCallCheck3.default)(this, Joystick);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Joystick.__proto__ || (0, _getPrototypeOf2.default)(Joystick)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      axis: 1
    };
    return _this;
  }
  //x y z 轴映射应当在此完成


  (0, _createClass3.default)(Joystick, [{
    key: 'axis',
    value: function axis(_axis) {
      this.args.axis = (0, _validate.validateNumber)(_axis, this.args.axis);
      return this;
    }
    /**
     * Get data of Joystick sensor
     * @return {Promise}
     */

  }, {
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readJoystick, [this.args.port, this.args.axis]);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return Joystick;
}(_electronic2.default);

exports.default = Joystick;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseGyro2 = __webpack_require__(86);

var _BaseGyro3 = _interopRequireDefault(_BaseGyro2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gyro sensor module
 * @extends BaseGyro
 */
var Gyro = function (_BaseGyro) {
  (0, _inherits3.default)(Gyro, _BaseGyro);

  function Gyro() {
    (0, _classCallCheck3.default)(this, Gyro);

    //外接陀螺仪 port 始终传参为 0
    return (0, _possibleConstructorReturn3.default)(this, (Gyro.__proto__ || (0, _getPrototypeOf2.default)(Gyro)).call(this, 0));
  }

  (0, _createClass3.default)(Gyro, null, [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return Gyro;
}(_BaseGyro3.default);

exports.default = Gyro;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseGyro2 = __webpack_require__(86);

var _BaseGyro3 = _interopRequireDefault(_BaseGyro2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * GyroOnBoard sensor module
 * @extends BaseGyro
 */
var GyroOnBoard = function (_BaseGyro) {
  (0, _inherits3.default)(GyroOnBoard, _BaseGyro);

  function GyroOnBoard() {
    (0, _classCallCheck3.default)(this, GyroOnBoard);
    return (0, _possibleConstructorReturn3.default)(this, (GyroOnBoard.__proto__ || (0, _getPrototypeOf2.default)(GyroOnBoard)).call(this, 1));
  }

  (0, _createClass3.default)(GyroOnBoard, null, [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '011001';
    }
  }]);
  return GyroOnBoard;
}(_BaseGyro3.default);

exports.default = GyroOnBoard;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseSound2 = __webpack_require__(87);

var _BaseSound3 = _interopRequireDefault(_BaseSound2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sound sensor module
 * @extends BaseSound
 */
var Sound = function (_BaseSound) {
  (0, _inherits3.default)(Sound, _BaseSound);

  function Sound(port) {
    (0, _classCallCheck3.default)(this, Sound);
    return (0, _possibleConstructorReturn3.default)(this, (Sound.__proto__ || (0, _getPrototypeOf2.default)(Sound)).call(this, port));
  }

  (0, _createClass3.default)(Sound, null, [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '111111';
    }
  }]);
  return Sound;
}(_BaseSound3.default);

exports.default = Sound;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseSound2 = __webpack_require__(87);

var _BaseSound3 = _interopRequireDefault(_BaseSound2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * SoundOnBoard sensor module
 * @extends BaseSound
 */
var SoundOnBoard = function (_BaseSound) {
  (0, _inherits3.default)(SoundOnBoard, _BaseSound);

  function SoundOnBoard() {
    (0, _classCallCheck3.default)(this, SoundOnBoard);
    return (0, _possibleConstructorReturn3.default)(this, (SoundOnBoard.__proto__ || (0, _getPrototypeOf2.default)(SoundOnBoard)).call(this, 14));
  }

  (0, _createClass3.default)(SoundOnBoard, null, [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '010000';
    }
  }]);
  return SoundOnBoard;
}(_BaseSound3.default);

exports.default = SoundOnBoard;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pirmotion sensor module
 * @describe passive infrared ( PIR) sensor
 * @extends Electronic
 */
var Pirmotion = function (_Electronic) {
  (0, _inherits3.default)(Pirmotion, _Electronic);

  function Pirmotion(port) {
    (0, _classCallCheck3.default)(this, Pirmotion);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Pirmotion.__proto__ || (0, _getPrototypeOf2.default)(Pirmotion)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }
  /**
   * Get data of Pirmotion sensor
   * @return {Promise}
   */


  (0, _createClass3.default)(Pirmotion, [{
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readPirmotion, [this.args.port]);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return Pirmotion;
}(_electronic2.default);

exports.default = Pirmotion;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MCORE_NAME = _settings.SUPPORTLIST[0].toLowerCase();
/**
 * Infrared sensor module
 * @describe external infrared sensor and can't connect 2 this infrared sensor to a mainboard at the same time
 * @extends Electronic
 */

var Infrared = function (_Electronic) {
  (0, _inherits3.default)(Infrared, _Electronic);

  function Infrared(port) {
    (0, _classCallCheck3.default)(this, Infrared);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Infrared.__proto__ || (0, _getPrototypeOf2.default)(Infrared)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    var host = (0, _validate.warnNotSupport)(arguments[arguments.length - 1]) || '';
    //宿主
    _this.hostname = host.toLowerCase();
    return _this;
  }
  /**
   * Get data of Infrared sensor
   * @return {Promise}
   */


  (0, _createClass3.default)(Infrared, [{
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var deviceId, aKey, argsArr, buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                deviceId = void 0, aKey = void 0;
                //如果是 mcore，外接的红外传感器 id = 0x0e
                //如果非 mcore，外接的红外传感器 id = 0x10

                _context.t0 = this.hostname;
                _context.next = _context.t0 === MCORE_NAME ? 4 : 7;
                break;

              case 4:
                deviceId = 0x0e;
                aKey = 0x45;
                return _context.abrupt('break', 8);

              case 7:
                deviceId = 0x10;

              case 8:
                argsArr = [deviceId, this.args.port];

                aKey ? argsArr.push(aKey) : null;
                buf = _utils2.default.composer(_cmd2.default.readInfrared, argsArr);
                _context.next = 13;
                return _control2.default.read(buf);

              case 13:
                return _context.abrupt('return', _context.sent);

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return Infrared;
}(_electronic2.default);

exports.default = Infrared;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 所有主控板（包括MegaPiPro）都有 2 种类型：外接的红外传感器，外接的被动式红外探测器
 * mcore 一共有 4 种红外相关的传感器，即除了上述 2 种，还有板载的红外传感器，且板载的分别是“发射端”、“接收端” 2 种

 * mcore 红外线接收端（读） id 0x0e
 * mcore 红外线发射端（写）id 0x0d
 * 其他主控板，红外传感器统一为接收端 (读) - id 0x10
 * 其他主控板，被动式红外传感器统一为接收端 (读) - id 0x0f
 */

/**
 * InfraredOnBoard sensor module
 * @describe this interface is only for mcore and mcore has two kind of InfraredOnBoard sensor
 * @extends Electronic
 */
var InfraredOnBoard = function (_Electronic) {
  (0, _inherits3.default)(InfraredOnBoard, _Electronic);

  function InfraredOnBoard() {
    (0, _classCallCheck3.default)(this, InfraredOnBoard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InfraredOnBoard.__proto__ || (0, _getPrototypeOf2.default)(InfraredOnBoard)).call(this));

    _this.deviceId = 0x0e;
    return _this;
  }
  /**
   * Get data of Infrared sensor
   * @return {Promise}
   */


  (0, _createClass3.default)(InfraredOnBoard, [{
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var port, aKey, buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                port = 0x00;
                aKey = 0x45;
                buf = _utils2.default.composer(_cmd2.default.readInfrared, [this.deviceId, port, aKey]);
                _context.next = 5;
                return _control2.default.read(buf);

              case 5:
                return _context.abrupt('return', _context.sent);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '10000';
    }
  }]);
  return InfraredOnBoard;
}(_electronic2.default);

exports.default = InfraredOnBoard;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * LimitSwitch sensor module
 * @extends Electronic
 */
var LimitSwitch = function (_Electronic) {
  (0, _inherits3.default)(LimitSwitch, _Electronic);

  function LimitSwitch(port, slot) {
    (0, _classCallCheck3.default)(this, LimitSwitch);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LimitSwitch.__proto__ || (0, _getPrototypeOf2.default)(LimitSwitch)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      slot: (0, _validate.validateNumber)(slot)
    };
    return _this;
  }
  /**
   * Get data of Joystick sensor
   * @return {Promise}
   */


  (0, _createClass3.default)(LimitSwitch, [{
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readLimitSwitch, [this.args.port, this.args.slot]);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return LimitSwitch;
}(_electronic2.default);

exports.default = LimitSwitch;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * LineFollower sensor module
 * @extends Electronic
 */
var LineFollower = function (_Electronic) {
  (0, _inherits3.default)(LineFollower, _Electronic);

  function LineFollower(port) {
    (0, _classCallCheck3.default)(this, LineFollower);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LineFollower.__proto__ || (0, _getPrototypeOf2.default)(LineFollower)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }
  /**
   * Get data of LineFollower sensor
   * @return {Promise}
   */


  (0, _createClass3.default)(LineFollower, [{
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readLineFollower, [this.args.port]);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return LineFollower;
}(_electronic2.default);

exports.default = LineFollower;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Compass sensor module
 * @extends Electronic
 */
var Compass = function (_Electronic) {
  (0, _inherits3.default)(Compass, _Electronic);

  function Compass(port) {
    (0, _classCallCheck3.default)(this, Compass);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Compass.__proto__ || (0, _getPrototypeOf2.default)(Compass)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }
  /**
   * Get data of Compass sensor
   * @return {Promise}
   */


  (0, _createClass3.default)(Compass, [{
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readCompass, [this.args.port]);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1110';
    }
  }]);
  return Compass;
}(_electronic2.default);

exports.default = Compass;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commandRead = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(args) {
    var buf;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            buf = _utils2.default.composer(_cmd2.default.readHumiture, [args.port, args.type]);
            _context.next = 3;
            return _control2.default.read(buf);

          case 3:
            return _context.abrupt('return', _context.sent);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function commandRead(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Humiture sensor module
 * @extends Electronic
 */

var Humiture = function (_Electronic) {
  (0, _inherits3.default)(Humiture, _Electronic);

  function Humiture(port) {
    (0, _classCallCheck3.default)(this, Humiture);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Humiture.__proto__ || (0, _getPrototypeOf2.default)(Humiture)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      type: 0
    };
    return _this;
  }

  (0, _createClass3.default)(Humiture, [{
    key: 'getHumidity',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.args.type = 0;
                _context2.next = 3;
                return commandRead(this.args);

              case 3:
                return _context2.abrupt('return', _context2.sent);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getHumidity() {
        return _ref2.apply(this, arguments);
      }

      return getHumidity;
    }()
  }, {
    key: 'getTemperature',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.args.type = 1;
                _context3.next = 3;
                return commandRead(this.args);

              case 3:
                return _context3.abrupt('return', _context3.sent);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getTemperature() {
        return _ref3.apply(this, arguments);
      }

      return getTemperature;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return Humiture;
}(_electronic2.default);

exports.default = Humiture;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Flame sensor module
 * @extends Electronic
 */
var Flame = function (_Electronic) {
  (0, _inherits3.default)(Flame, _Electronic);

  function Flame(port) {
    (0, _classCallCheck3.default)(this, Flame);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Flame.__proto__ || (0, _getPrototypeOf2.default)(Flame)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }
  /**
   * Get data of Flame sensor
   * @return {Promise}
   */


  (0, _createClass3.default)(Flame, [{
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readFlame, [this.args.port]);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return Flame;
}(_electronic2.default);

exports.default = Flame;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gas sensor module
 * @extends Electronic
 */
var Gas = function (_Electronic) {
  (0, _inherits3.default)(Gas, _Electronic);

  function Gas(port) {
    (0, _classCallCheck3.default)(this, Gas);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Gas.__proto__ || (0, _getPrototypeOf2.default)(Gas)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }
  /**
   * Get data of Gas sensor
   * @return {Promise}
   */


  (0, _createClass3.default)(Gas, [{
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readGas, [this.args.port]);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return Gas;
}(_electronic2.default);

exports.default = Gas;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Touch sensor module
 * @extends Electronic
 */
var Touch = function (_Electronic) {
  (0, _inherits3.default)(Touch, _Electronic);

  function Touch(port) {
    (0, _classCallCheck3.default)(this, Touch);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Touch.__proto__ || (0, _getPrototypeOf2.default)(Touch)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }

  /**
   * Get data of Touch sensor
   * @return {Promise}
   */


  (0, _createClass3.default)(Touch, [{
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readTouch, [this.args.port]);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return Touch;
}(_electronic2.default);

exports.default = Touch;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * FourKeys sensor module
 * @extends Electronic
 */
var FourKeys = function (_Electronic) {
  (0, _inherits3.default)(FourKeys, _Electronic);

  function FourKeys(port) {
    (0, _classCallCheck3.default)(this, FourKeys);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FourKeys.__proto__ || (0, _getPrototypeOf2.default)(FourKeys)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      key: 1
    };
    return _this;
  }

  /**
   * 键位
   * @param  {Number} index 键位：1、2、3、4
   */


  (0, _createClass3.default)(FourKeys, [{
    key: 'key',
    value: function key(index) {
      this.args.key = (0, _validate.validateNumber)(index, this.args.key);
      return this;
    }
    /**
     * Get data of FourKeys sensor
     * @return {Promise}
     */

  }, {
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readFourKeys, [this.args.port, this.args.key]);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return FourKeys;
}(_electronic2.default);

exports.default = FourKeys;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * DigGPIO sensor module
 * @extends Electronic
 */
var DigGPIO = function (_Electronic) {
  (0, _inherits3.default)(DigGPIO, _Electronic);

  function DigGPIO(port) {
    (0, _classCallCheck3.default)(this, DigGPIO);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DigGPIO.__proto__ || (0, _getPrototypeOf2.default)(DigGPIO)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }
  /**
   * Get data of DigGPIO sensor
   * @return {Promise}
   */


  (0, _createClass3.default)(DigGPIO, [{
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readDigGPIO, [this.args.port]);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '00001';
    }
  }]);
  return DigGPIO;
}(_electronic2.default);

exports.default = DigGPIO;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @Class AnalogGPIO
 * @extends Electronic
 */
var AnalogGPIO = function (_Electronic) {
  (0, _inherits3.default)(AnalogGPIO, _Electronic);

  /**
   * Create a analogGPIO.
   */
  function AnalogGPIO(port) {
    (0, _classCallCheck3.default)(this, AnalogGPIO);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AnalogGPIO.__proto__ || (0, _getPrototypeOf2.default)(AnalogGPIO)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }

  /**
   * Get data of AnalogGPIO
   * @return {Promise}
   */


  (0, _createClass3.default)(AnalogGPIO, [{
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readAnalogGPIO, [this.args.port]);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '00001';
    }
  }]);
  return AnalogGPIO;
}(_electronic2.default);

exports.default = AnalogGPIO;

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * GPIOContinue sensor module
 * @extends Electronic
 */
var GPIOContinue = function (_Electronic) {
  (0, _inherits3.default)(GPIOContinue, _Electronic);

  function GPIOContinue(port, key) {
    (0, _classCallCheck3.default)(this, GPIOContinue);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GPIOContinue.__proto__ || (0, _getPrototypeOf2.default)(GPIOContinue)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port, 1),
      key: (0, _validate.validateNumber)(key, 1)
    };
    return _this;
  }
  /**
   * Get data of GPIOContinue sensor
   * @return {Promise}
   */


  (0, _createClass3.default)(GPIOContinue, [{
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readGPIOContinue, [this.args.port, this.args.key]);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '00001';
    }
  }]);
  return GPIOContinue;
}(_electronic2.default);

exports.default = GPIOContinue;

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * DoubleGPIO sensor module
 * @extends Electronic
 */
var DoubleGPIO = function (_Electronic) {
  (0, _inherits3.default)(DoubleGPIO, _Electronic);

  function DoubleGPIO(port1, port2) {
    (0, _classCallCheck3.default)(this, DoubleGPIO);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DoubleGPIO.__proto__ || (0, _getPrototypeOf2.default)(DoubleGPIO)).call(this));

    _this.args = {
      port1: (0, _validate.validateNumber)(port1),
      port2: (0, _validate.validateNumber)(port2)
    };
    return _this;
  }
  /**
   * Get data of DoubleGPIO sensor
   * @return {Promise}
   */


  (0, _createClass3.default)(DoubleGPIO, [{
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readDoubleGPIO, [this.args.port1, this.args.port2]);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '00001';
    }
  }]);
  return DoubleGPIO;
}(_electronic2.default);

exports.default = DoubleGPIO;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(6);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Runtime module which is a virtual module
 * @extends Electronic
 */
var Runtime = function (_Electronic) {
  (0, _inherits3.default)(Runtime, _Electronic);

  function Runtime() {
    (0, _classCallCheck3.default)(this, Runtime);
    return (0, _possibleConstructorReturn3.default)(this, (Runtime.__proto__ || (0, _getPrototypeOf2.default)(Runtime)).call(this));
  }
  /**
   * Get data of Runtime sensor
   * @return {Promise}
   */


  (0, _createClass3.default)(Runtime, [{
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var buf;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buf = _utils2.default.composer(_cmd2.default.readRuntime);
                _context.next = 3;
                return _control2.default.read(buf);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '000010';
    }
  }]);
  return Runtime;
}(_electronic2.default);

exports.default = Runtime;

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Board2 = __webpack_require__(28);

var _Board3 = _interopRequireDefault(_Board2);

var _index = __webpack_require__(29);

var _index2 = _interopRequireDefault(_index);

var _settings = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//支持位置
var SUPPORT_INDEX = _settings.SUPPORTLIST.indexOf('Orion');

/**
 * Orion Class for 'Orion' mainboard.
 * @extends Board
 */

var Orion = function (_Board) {
  (0, _inherits3.default)(Orion, _Board);

  /**
   * Create a orion mainboard
   * @param  {Object} conf configure
   */
  function Orion(conf) {
    (0, _classCallCheck3.default)(this, Orion);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Orion.__proto__ || (0, _getPrototypeOf2.default)(Orion)).call(this, conf));

    var this_ = _this;
    //@member {String} {maiboard name}
    _this.name = 'Orion';
    // 置空已连接块
    _this.connecting = {};
    // 挂载电子模块

    var _loop = function _loop(name) {
      var eModule = _index2.default[name];
      if (eModule.supportStamp().charAt(SUPPORT_INDEX) === '1') {
        _this[name] = function () {
          return this_.eModuleFactory(eModule, arguments);
        };
      }
    };

    for (var name in _index2.default) {
      _loop(name);
    }
    return _this;
  }

  return Orion;
}(_Board3.default);

exports.default = Orion;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Board2 = __webpack_require__(28);

var _Board3 = _interopRequireDefault(_Board2);

var _index = __webpack_require__(29);

var _index2 = _interopRequireDefault(_index);

var _mode = __webpack_require__(63);

var _mode2 = _interopRequireDefault(_mode);

var _settings = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//支持位置
var SUPPORT_INDEX = _settings.SUPPORTLIST.indexOf('Auriga');

/**
 * Auriga Class for 'Auriga' mainboard.
 * @extends Board
 */

var Auriga = function (_Board) {
  (0, _inherits3.default)(Auriga, _Board);

  /**
   * Create a auriga mainboard
   * @param  {Object} conf configure
   */
  function Auriga(conf) {
    (0, _classCallCheck3.default)(this, Auriga);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Auriga.__proto__ || (0, _getPrototypeOf2.default)(Auriga)).call(this, conf));

    var this_ = _this;
    //@member {String} {maiboard name}
    _this.name = 'Auriga';
    //@member {Number} {current mode}
    _this.currentMode = null;
    // @member {Object} modules is connecting to the mainboard 
    // @override
    _this.connecting = {};
    // 挂载电子模块

    var _loop = function _loop(name) {
      var eModule = _index2.default[name];
      if (eModule.supportStamp().charAt(SUPPORT_INDEX) === '1') {
        _this[name] = function () {
          return this_.eModuleFactory(eModule, arguments, this_.name);
        };
      }
    };

    for (var name in _index2.default) {
      _loop(name);
    }
    return _this;
  }

  /**
   * 设置固件模式
   * @param {Number} mode 0、1、2、3、4
   */


  (0, _createClass3.default)(Auriga, [{
    key: 'setFirmwareMode',
    value: function setFirmwareMode(mode) {
      var subCmd = 0x11;
      _mode2.default.setMode(subCmd, mode);
      return this;
    }
    /**
     * 获取固件模式
     */
    //TODO: 数据缓存

  }, {
    key: 'getFirmwareMode',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var subCmd;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                subCmd = 0x71;
                _context.next = 3;
                return _mode2.default.getMode(subCmd);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getFirmwareMode() {
        return _ref.apply(this, arguments);
      }

      return getFirmwareMode;
    }()

    /**
     * 获取固件电压
     */

  }, {
    key: 'getVoltage',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var subCmd;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                subCmd = 0x70;
                _context2.next = 3;
                return _mode2.default.getMode(subCmd);

              case 3:
                return _context2.abrupt('return', _context2.sent);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getVoltage() {
        return _ref2.apply(this, arguments);
      }

      return getVoltage;
    }()
  }]);
  return Auriga;
}(_Board3.default);

exports.default = Auriga;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Board2 = __webpack_require__(28);

var _Board3 = _interopRequireDefault(_Board2);

var _index = __webpack_require__(29);

var _index2 = _interopRequireDefault(_index);

var _mode = __webpack_require__(63);

var _mode2 = _interopRequireDefault(_mode);

var _settings = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//支持位置
var SUPPORT_INDEX = _settings.SUPPORTLIST.indexOf('MegaPi');

/**
 * MegaPi Class for 'MegaPi' mainboard.
 * @extends Board
 */

var MegaPi = function (_Board) {
  (0, _inherits3.default)(MegaPi, _Board);

  /**
   * Create a megaPi mainboard
   * @param  {Object} conf configure
   */
  function MegaPi(conf) {
    (0, _classCallCheck3.default)(this, MegaPi);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MegaPi.__proto__ || (0, _getPrototypeOf2.default)(MegaPi)).call(this, conf));

    var this_ = _this;
    //@member {String} {maiboard name}
    _this.name = 'MegaPi';
    //固件当前模式
    _this.currentMode = null;
    // 置空已连接块
    _this.connecting = {};
    // 挂载电子模块

    var _loop = function _loop(name) {
      var eModule = _index2.default[name];
      if (eModule.supportStamp().charAt(SUPPORT_INDEX) === '1') {
        _this[name] = function () {
          return this_.eModuleFactory(eModule, arguments);
        };
      }
    };

    for (var name in _index2.default) {
      _loop(name);
    }
    return _this;
  }

  /**
   * 设置固件模式
   * @param {Number} mode 0、1、2、3、4
   */


  (0, _createClass3.default)(MegaPi, [{
    key: 'setFirmwareMode',
    value: function setFirmwareMode(mode) {
      var subCmd = 0x12;
      _mode2.default.setMode(subCmd, mode);
      return this;
    }
    /**
     * 获取固件模式
     * @param  {Function} callback 取值后回调函数
     */
    //TODO: 数据缓存

  }, {
    key: 'getFirmwareMode',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var subCmd;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                subCmd = 0x72;
                _context.next = 3;
                return _mode2.default.getMode(subCmd);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getFirmwareMode() {
        return _ref.apply(this, arguments);
      }

      return getFirmwareMode;
    }()
  }]);
  return MegaPi;
}(_Board3.default);

exports.default = MegaPi;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Board2 = __webpack_require__(28);

var _Board3 = _interopRequireDefault(_Board2);

var _index = __webpack_require__(29);

var _index2 = _interopRequireDefault(_index);

var _mode = __webpack_require__(63);

var _mode2 = _interopRequireDefault(_mode);

var _settings = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//支持位置
var SUPPORT_INDEX = _settings.SUPPORTLIST.indexOf('MegaPiPro');

/**
 * MegaPiPro Class for 'MegaPiPro' mainboard.
 * @extends Board
 */

var MegaPiPro = function (_Board) {
  (0, _inherits3.default)(MegaPiPro, _Board);

  /**
   * Create a megaPiPro mainboard
   * @param  {Object} conf configure
   */
  function MegaPiPro(conf) {
    (0, _classCallCheck3.default)(this, MegaPiPro);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MegaPiPro.__proto__ || (0, _getPrototypeOf2.default)(MegaPiPro)).call(this, conf));

    var this_ = _this;
    //@member {String} {maiboard name}
    _this.name = 'MegaPiPro';
    //固件当前模式
    _this.currentMode = null;
    // 置空已连接块
    _this.connecting = {};
    // 挂载电子模块

    var _loop = function _loop(name) {
      var eModule = _index2.default[name];
      if (eModule.supportStamp().charAt(SUPPORT_INDEX) === '1') {
        _this[name] = function () {
          return this_.eModuleFactory(eModule, arguments, this_.name);
        };
      }
    };

    for (var name in _index2.default) {
      _loop(name);
    }
    return _this;
  }

  /**
   * 设置固件模式
   * @param {Number} mode 0、1、2、3、4
   */


  (0, _createClass3.default)(MegaPiPro, [{
    key: 'setFirmwareMode',
    value: function setFirmwareMode(mode) {
      var subCmd = 0x12;
      _mode2.default.setMode(subCmd, mode);
      return this;
    }
    /**
     * 获取固件模式
     * @param  {Function} callback 取值后回调函数
     */
    //TODO: 数据缓存

  }, {
    key: 'getFirmwareMode',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var subCmd;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                subCmd = 0x72;
                _context.next = 3;
                return _mode2.default.getMode(subCmd);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getFirmwareMode() {
        return _ref.apply(this, arguments);
      }

      return getFirmwareMode;
    }()
  }]);
  return MegaPiPro;
}(_Board3.default);

exports.default = MegaPiPro;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Board2 = __webpack_require__(28);

var _Board3 = _interopRequireDefault(_Board2);

var _index = __webpack_require__(29);

var _index2 = _interopRequireDefault(_index);

var _settings = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//支持位置
var SUPPORT_INDEX = _settings.SUPPORTLIST.indexOf('Arduino');

/**
 * Arduino Class for 'Arduino' mainboard.
 * @extends Board
 */

var Arduino = function (_Board) {
  (0, _inherits3.default)(Arduino, _Board);

  /**
   * Create a orion mainboard
   * @param  {Object} conf configure
   */
  function Arduino(conf) {
    (0, _classCallCheck3.default)(this, Arduino);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Arduino.__proto__ || (0, _getPrototypeOf2.default)(Arduino)).call(this, conf));

    var this_ = _this;
    //@member {String} {maiboard name}
    _this.name = 'Arduino';
    // 置空已连接块
    _this.connecting = {};
    // 挂载电子模块

    var _loop = function _loop(name) {
      var eModule = _index2.default[name];
      if (eModule.supportStamp().charAt(SUPPORT_INDEX) === '1') {
        _this[name] = function () {
          return this_.eModuleFactory(eModule, arguments);
        };
      }
    };

    for (var name in _index2.default) {
      _loop(name);
    }
    return _this;
  }

  return Arduino;
}(_Board3.default);

exports.default = Arduino;

/***/ })
/******/ ]);
});
//# sourceMappingURL=sensorium.js.map