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
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
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

var _defineProperty = __webpack_require__(76);

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

module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(47);

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

var _setPrototypeOf = __webpack_require__(116);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(120);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(47);

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

var _toConsumableArray2 = __webpack_require__(30);

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
    console.log(arr);
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
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _read = __webpack_require__(79);

var _read2 = _interopRequireDefault(_read);

var _write = __webpack_require__(80);

var _write2 = _interopRequireDefault(_write);

var _parse = __webpack_require__(81);

var _parse2 = _interopRequireDefault(_parse);

var _command = __webpack_require__(95);

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 发送数据的队列调度，对外提供以下接口：
 * write
 * read
 * pipe
 */
// import Transport from './transport';
var CommandManager = function () {
  function CommandManager() {
    (0, _classCallCheck3.default)(this, CommandManager);
  }

  /**
   * an api to execute write
   * @param  {Array}   buf      [description]
   * @return {[type]}            [description]
   */


  (0, _createClass3.default)(CommandManager, [{
    key: 'write',
    value: function write(buf) {
      _write2.default.addRequest(_command2.default.send, buf);
    }

    /**
     * an api to execute read
     * @param  {Array}   buf      [description]
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */

  }, {
    key: 'read',
    value: function read(buf, callback) {
      _read2.default.addRequest(_command2.default.send, buf, callback || function () {});
    }

    /**
     * parse the buffer and callback
     * @param  {Array} buff buffer responsed from transportion
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
  return CommandManager;
}();

exports.default = new CommandManager();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(30);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * buf 协议组装器
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
} /**
   * @fileOverview  Api api list
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
   * set four leds
   * @param {number} port     port number, vailable is: 0(on transport), 6,7,8,9,10
   * @param {number} position led position, 0 signify all leds.
   * @param {number} r        red, the range is 0 ~ 255
   * @param {number} g        green, the range is 0 ~ 255
   * @param {number} b        blue, the range is 0 ~ 255
   */
  this.setFourLeds = function (port, position, r, g, b) {
    return this.setLed(port, 2, position, r, g, b);
  };

  /**
   * turn off four leds
   * @param {number} port     port number, vailable is: 0(on transport), 6,7,8,9,10
   * @param {number} position led position, 0 signify all leds.
   */
  this.turnOffFourLeds = function (port, position) {
    return this.setLed(port, 2, position, 0, 0, 0);
  };

  /**
   * set led panel on Api transport.
   * @param {number} position led position, 0 signify all leds.
   * @param {number} r        red, the range is 0 ~ 255
   * @param {number} g        green, the range is 0 ~ 255
   * @param {number} b        blue, the range is 0 ~ 255
   */
  this.setLedPanelOnBoard = function (position, r, g, b) {
    return this.setLed(0, 2, position, r, g, b);
  };

  /**
   * turn off led panel on transport
   * @param {number} position led position, 0 signify all leds.
   */
  this.turnOffLedPanelOnBoard = function (position) {
    return this.setLed(0, 2, position, 0, 0, 0);
  };

  /**
   * Set transport mode.
   * @param {number} mode transport mode,
   *     0: bluetooth mode
   *     1: ultrasonic mode
   *     2: balance mode
   *     3: infrared mode
   *     4: linefollow mode
   * @example
   *     ff 55 05 00 02 3c 11 00
   */
  this.setFirmwareMode = function (subCmd, mode) {
    var sub = subCmd || 0x11; //Auriga是 0x11, megapi是 0x12
    return bufAssembler({ mode: 0x02, id: 0x3c }, sub, mode);
  };

  /**
   * Set Servo speed.
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
  this.setLedMatrixChar = function (port, xAxis, yAxis, char) {
    var charAsciiArray = [];
    for (var i = 0; i < char.length; i++) {
      charAsciiArray.push(char[i].charCodeAt());
    }

    return bufAssembler.apply(undefined, [{ mode: 0x02, id: 0x29 }, port, 0x01, xAxis, yAxis, char.length].concat(charAsciiArray));
  };

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
  this.setLedMatrixEmotion = function (port, xAxis, yAxis, emotionData) {
    // var a = [
    //   0xff,0x55,
    //   0x17,0,
    //   0x02,
    //   0x29,
    //   port,
    //   0x02,
    //   xAxis,
    //   yAxis
    // ].concat(emotionData);

    return bufAssembler.apply(undefined, [{ mode: 0x02, id: 0x29 }, port, 0x02, xAxis, yAxis].concat((0, _toConsumableArray3.default)(emotionData)));
  };

  /**
   * Set led matrix time.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {number} separator time separator, 01 signify `:`, 02 signify ` `
   * @param {number} hour      hour number, 0 ~ 23
   * @param {number} minute    minute number, 0 ~ 59
   * @example
   *     ff 55 08 00 02 29 06 03 01 0a 14
   */
  this.setLedMatrixTime = function (port, separator, hour, minute) {
    hour = _utils2.default.limitValue(hour, [0, 23]);
    minute = _utils2.default.limitValue(minute, [0, 59]);
    return bufAssembler({ mode: 0x02, id: 0x29 }, port, 0x03, separator, hour, minute);
  };

  /**
   * Set led matrix number.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {float} number the number to be displayed
   * @exmaple
      ff 55 09 00 02 29 06 04 00 00 00 00
   */
  this.setLedMatrixNumber = function (port, number) {
    var byte4Array = _utils2.default.float32ToBytes(number);
    return bufAssembler.apply(undefined, [{ mode: 0x02, id: 0x29 }, port, 0x04].concat((0, _toConsumableArray3.default)(byte4Array)));
  };

  /**
   * Set shutter.
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
   * @exmaple
      ff 55 02 00 04
   */
  this.reset = function () {
    return bufAssembler({ mode: 0x04 });
  };

  /**
   * set buzzer.
   * @param {string} tone , "A2" ~ "D8"
   * @param {number} beat , 125: eight; 250: quater; 500: half; 1000: one; 2000: double
   * @example
   * C2，quater beat: ff 55 08 00 02 22 09 41 00 f4 01
   */
  this.setTone = function (tone, beat) {
    var TONE = {
      // 原始数据：D5: 587 "E5": 658,"F5": 698,"G5": 784,"A5": 880,"B5": 988,"C6": 1047
      "A2": 110, "B2": 123, "C2": 65,
      "C3": 131, "D3": 147, "E3": 165, "F3": 175, "G3": 196, "A3": 220,
      "B3": 247, "C4": 262, "D4": 294, "E4": 330, "F4": 349, "G4": 392,
      "A4": 440, "B4": 494, "C5": 523, "D5": 555, "E5": 640, "F5": 698,
      "G5": 784, "A5": 880, "B5": 988, "C6": 1047, "D6": 1175, "E6": 1319,
      "F6": 1397, "G6": 1568, "A6": 1760, "B6": 1976, "C7": 2093, "D7": 2349,
      "E7": 2637, "F7": 2794, "G7": 3136, "A7": 3520, "B7": 3951, "C8": 4186, "D8": 4699
    };

    return bufAssembler({ mode: 0x02, id: 0x22 }, TONE[tone] & 0xff, TONE[tone] >> 8 & 0xff, beat & 0xff, beat >> 8 & 0xff);
  };

  /**
   * read verion of transport
   * @param  {Number} index index of command
   */
  this.readVersion = function (index) {
    return bufAssembler({ mode: 0x01, id: 0x00 });
  };

  /**
   * mainly used for distance measurement, the measurement range is 0 to 500 cm,
   * the execution of the command will have more than 100 milliseconds latency.
   * So the frequency of the host to send this instruction shoulds not be too high.
   * @param  {Number} index [description]
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
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @param  {Number} slot  vailable: slot1(1), slot2(2)
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 02 01 02
   */
  this.readTemperature = function (port, slot) {
    return bufAssembler({ mode: 0x01, id: 0x02 }, port, slot);
  };

  /**
   * The light sensor module or ontransport (lamp) light sensors numerical reading.
   * @param  {Number} index [description]
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
   * @param  {Number} index [description]
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
   * @param  {Number} index [description]
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
   * @param  {Number} index [description]
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
   * @param  {Number} index [description]
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
   * @param  {Number} index [description]
   * @example
   * ff 55 04 00 01 1b 0d
   */
  this.readTemperatureOnBoard = function () {
    var port = 0x0d;
    return bufAssembler({ mode: 0x01, id: 0x1b }, port);
  };

  /**
   * read pyroelectric infrared sensor
   * @param  {Number} index [description]
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
   * @param  {Number} index [description]
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
   * @param  {Number} index [description]
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
   * @param  {Number} index [description]
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
   * @param  {Number} index [description]
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
   * @param  {Number} index [description]
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
   * @param  {Number} index [description]
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
   * @param  {Number} index [description]
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
   * @param  {Number} index [description]
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
   * @param  {Number} index [description]
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
   * 板载编码电机 PID 运动 01模式位置模式: 
   * buf: ff 55 0b 00 02 3e 01 01 00 00 00 00 00 00
   * @param {Number} distance  位移
   * @param {Number} speed    速度
   */
  this.setEncoderMotorPIDDistance = function (distance, speed) {
    var distanceArr = _utils2.default.longToBytes(distance);
    var subCmd = 0x05;
    var slot = 0x01;
    speed = _utils2.default.limitValue(speed);
    return bufAssembler({ mode: 0x02, id: 0x3e }, subCmd, slot, distanceArr[3], distanceArr[2], distanceArr[1], distanceArr[0], speed & 0xff, 0);
  };

  /**
   * 板载编码电机 PID 运动 02模式速度模式: 
   * buf: ff 55 07 00 02 3e 02 01 00 00
   * @param {Number} speed    速度
   */
  this.setEncoderMotorPIDSpeed = function (speed) {
    var subCmd = 0x02;
    var slot = 0x01;
    speed = _utils2.default.limitValue(speed);
    return bufAssembler({ mode: 0x02, id: 0x3e }, subCmd, slot, speed & 0xff, speed >> 8 & 0xff);
  },
  /**
   * 板载编码电机 PID 运动 03模式 pwm 模式: 
   * buf: ff 55 07 00 02 3e 03 01 00 00
   * @param {Number} speed    速度
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
   */
  this.setEncoderMotorPIDZeroPoint = function (subCmd) {
    var slot = 0x01;
    return bufAssembler({ mode: 0x01, id: 0x3e }, subCmd, slot);
  };

  /**
   * 板载编码电机 PID 运动 05模式双电机模式: 
   * buf: ff 55 0b 00 02 3e 05 01 e8 03 00 00 64 00
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
    return bufAssembler.apply(undefined, [{ mode: 0x01, id: 0x40 }, subCmd, port, index].concat((0, _toConsumableArray3.default)(extraCmd)));
  };

  /**
   * read smart servo operating parameters
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
   * @param  {Number} index [description]
   * @param  {Number} type  0x70: 电压; 0x71: 模式
   * @example
   * ff 55 04 00 01 3c 70
   */
  this.readFirmwareMode = function (subCmd) {
    //auriga 电压(0x70) 模式(0x71), megapi模式(0x72) 比赛模式(0x75)
    return bufAssembler({ mode: 0x01, id: 0x3c }, subCmd);
  };

  /**
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: digit GPOI port
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 1e 09
   */
  this.readDigGPIO = function (port) {
    return bufAssembler({ mode: 0x01, id: 0x1e }, port);
  };

  /**
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: analog GPIO port
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 1f 02
   */
  this.readAnalogGPIO = function (port) {
    return bufAssembler({ mode: 0x01, id: 0x1f }, port);
  };

  /**
   * @param  {Number} index [description]
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
   * @param  {Number} index [description]
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
   * @param  {Number} index [description]
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

exports.default = new protocolAssembler();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineObject = exports.defineBoolean = exports.defineArray = exports.defineString = exports.defineNumber = undefined;

var _typeof2 = __webpack_require__(47);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 对传入参数进行初始化
 */
function defineType(type) {
    return function (param, defaultValue) {
        if (arguments.length < 2 && typeof param === 'undefined') {
            return;
        }
        if (typeof defaultValue === 'undefinded') {
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
                    defaultValue = 0;
                    break;
            }
        }
        var value = defaultValue;
        var condition = type === 'boolean' ? (typeof param === 'undefined' ? 'undefined' : (0, _typeof3.default)(param)) === type : (typeof param === 'undefined' ? 'undefined' : (0, _typeof3.default)(param)) === type || param === 1 || param === 0;
        if (condition) {
            value = param;
        } else {
            console.warn('param \'' + param + '\' is not a ' + type + '!');
        }
        return value;
    };
};

var defineNumber = defineType('number'),
    defineString = defineType('string'),
    defineArray = defineType('array'),
    defineBoolean = defineType('boolean'),
    defineObject = defineType('object');

exports.defineNumber = defineNumber;
exports.defineString = defineString;
exports.defineArray = defineArray;
exports.defineBoolean = defineBoolean;
exports.defineObject = defineObject;

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

var Electronic =

/**
 * Electron类，电子模块基类
 * @param {number} port - 电子模块port口
 * @param {number} slot - 电子模块slot口
 */
function Electronic(port, slot) {
  (0, _classCallCheck3.default)(this, Electronic);
};

exports.default = Electronic;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(40)('wks')
  , uid        = __webpack_require__(29)
  , Symbol     = __webpack_require__(12).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(12)
  , core      = __webpack_require__(10)
  , ctx       = __webpack_require__(42)
  , hide      = __webpack_require__(21)
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(22)
  , IE8_DOM_DEFINE = __webpack_require__(57)
  , toPrimitive    = __webpack_require__(43)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(18) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Settings = {
    // 数据发送与接收相关
    // 回复数据的index位置
    READ_BYTES_INDEX: 2,
    FIRM_MODES: [0x00, 0x01, 0x02, 0x03, 0x04],
    SUPPORTLIST: ['Mcore', 'Auriga', 'MegaPi', 'Orion', 'Arduino', 'MegaPiPro'],
    FIRMWARE_ID: {
        0x06: 'Mcore',
        0x09: 'Auriga',
        0x0a: 'Orion',
        0x0e: 'MegaPi',
        0x0f: 'MegaPiPro'
    }
};

exports.default = Settings;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(54)
  , defined = __webpack_require__(36);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(23)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(127), __esModule: true };

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(53)
  , enumBugKeys = __webpack_require__(41);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(14)
  , createDesc = __webpack_require__(26);
module.exports = __webpack_require__(18) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(25);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(36);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Version = function () {
  function Version() {
    (0, _classCallCheck3.default)(this, Version);
  }

  (0, _createClass3.default)(Version, [{
    key: 'getVersion',
    value: function getVersion(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readVersion);
      _commandManager2.default.read(buf, callback);
      return this;
    }
  }]);
  return Version;
}();

exports.default = new Version();

/***/ }),
/* 29 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(82);

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
/* 31 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _toConsumableArray2 = __webpack_require__(30);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _settings = __webpack_require__(15);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createModuleId = function createModuleId(eModule, args) {
  var _ref;

  args = [].concat((0, _toConsumableArray3.default)(args)); //转数组
  var name = eModule.name;
  var expectLength = eModule.length;
  var argsLength = args.length;
  if (argsLength < expectLength) {
    //参数不足
    console.warn('there\'s lack of ' + (expectLength - argsLength) + ' argument(s), and ' + eModule.name + ' may not work as a result');
  } else if (argsLength > expectLength) {
    //参数多余
    args.splice(expectLength);
  }
  return (_ref = [name]).concat.apply(_ref, (0, _toConsumableArray3.default)(args)).join('_').toLowerCase();
};

// 超类： 具备发送、接收方法
/**
 * @fileOverview board 用做通信基类，连接收和发送接口.
 * @author Hyman
 */

var Board = function () {
  function Board(conf) {
    (0, _classCallCheck3.default)(this, Board);

    //私有的配置对象
    this.config_ = conf || {};
    //已连接电子模块
    this.connecting = {};
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
      var id = createModuleId(eModule, args);
      if (this.connecting[id]) {
        return this.connecting[id];
      } else {
        var emodule = new (Function.prototype.bind.apply(eModule, [null].concat((0, _toConsumableArray3.default)(args), [host])))();
        // 保存模块
        this.connecting[id] = emodule;
        return emodule;
      }
    }
  }]);
  return Board;
}();

exports.default = Board;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dc_motor = __webpack_require__(123);

var _dc_motor2 = _interopRequireDefault(_dc_motor);

var _virtual_joystick = __webpack_require__(124);

var _virtual_joystick2 = _interopRequireDefault(_virtual_joystick);

var _virtual_joystick_for_balance = __webpack_require__(125);

var _virtual_joystick_for_balance2 = _interopRequireDefault(_virtual_joystick_for_balance);

var _stepper_motor = __webpack_require__(126);

var _stepper_motor2 = _interopRequireDefault(_stepper_motor);

var _encoder_motor = __webpack_require__(130);

var _encoder_motor2 = _interopRequireDefault(_encoder_motor);

var _encoder_motor_on_board = __webpack_require__(131);

var _encoder_motor_on_board2 = _interopRequireDefault(_encoder_motor_on_board);

var _servo_motor = __webpack_require__(132);

var _servo_motor2 = _interopRequireDefault(_servo_motor);

var _four_led = __webpack_require__(133);

var _four_led2 = _interopRequireDefault(_four_led);

var _rgb_led = __webpack_require__(134);

var _rgb_led2 = _interopRequireDefault(_rgb_led);

var _led_panel_on_board = __webpack_require__(135);

var _led_panel_on_board2 = _interopRequireDefault(_led_panel_on_board);

var _rgb_led_on_board = __webpack_require__(136);

var _rgb_led_on_board2 = _interopRequireDefault(_rgb_led_on_board);

var _led_matrix_char = __webpack_require__(137);

var _led_matrix_char2 = _interopRequireDefault(_led_matrix_char);

var _led_matrix_time = __webpack_require__(138);

var _led_matrix_time2 = _interopRequireDefault(_led_matrix_time);

var _led_matrix_emotion = __webpack_require__(139);

var _led_matrix_emotion2 = _interopRequireDefault(_led_matrix_emotion);

var _led_matrix_number = __webpack_require__(140);

var _led_matrix_number2 = _interopRequireDefault(_led_matrix_number);

var _buzzer = __webpack_require__(141);

var _buzzer2 = _interopRequireDefault(_buzzer);

var _seven_segment = __webpack_require__(142);

var _seven_segment2 = _interopRequireDefault(_seven_segment);

var _shutter = __webpack_require__(143);

var _shutter2 = _interopRequireDefault(_shutter);

var _smart_servo = __webpack_require__(144);

var _smart_servo2 = _interopRequireDefault(_smart_servo);

var _encoder_motor_on_board_pid = __webpack_require__(145);

var _encoder_motor_on_board_pid2 = _interopRequireDefault(_encoder_motor_on_board_pid);

var _reset = __webpack_require__(150);

var _reset2 = _interopRequireDefault(_reset);

var _ultrasonic = __webpack_require__(151);

var _ultrasonic2 = _interopRequireDefault(_ultrasonic);

var _temperature = __webpack_require__(152);

var _temperature2 = _interopRequireDefault(_temperature);

var _light = __webpack_require__(153);

var _light2 = _interopRequireDefault(_light);

var _potentionmeter = __webpack_require__(154);

var _potentionmeter2 = _interopRequireDefault(_potentionmeter);

var _joystick = __webpack_require__(155);

var _joystick2 = _interopRequireDefault(_joystick);

var _gyro = __webpack_require__(156);

var _gyro2 = _interopRequireDefault(_gyro);

var _Gyro_on_board = __webpack_require__(157);

var _Gyro_on_board2 = _interopRequireDefault(_Gyro_on_board);

var _sound = __webpack_require__(158);

var _sound2 = _interopRequireDefault(_sound);

var _sound_on_board = __webpack_require__(159);

var _sound_on_board2 = _interopRequireDefault(_sound_on_board);

var _temperature_on_board = __webpack_require__(160);

var _temperature_on_board2 = _interopRequireDefault(_temperature_on_board);

var _pirmotion = __webpack_require__(161);

var _pirmotion2 = _interopRequireDefault(_pirmotion);

var _limit_switch = __webpack_require__(162);

var _limit_switch2 = _interopRequireDefault(_limit_switch);

var _line_follower = __webpack_require__(163);

var _line_follower2 = _interopRequireDefault(_line_follower);

var _compass = __webpack_require__(164);

var _compass2 = _interopRequireDefault(_compass);

var _humiture = __webpack_require__(165);

var _humiture2 = _interopRequireDefault(_humiture);

var _flame = __webpack_require__(166);

var _flame2 = _interopRequireDefault(_flame);

var _gas = __webpack_require__(167);

var _gas2 = _interopRequireDefault(_gas);

var _touch = __webpack_require__(168);

var _touch2 = _interopRequireDefault(_touch);

var _four_keys = __webpack_require__(169);

var _four_keys2 = _interopRequireDefault(_four_keys);

var _dig_GPIO = __webpack_require__(170);

var _dig_GPIO2 = _interopRequireDefault(_dig_GPIO);

var _analog_GPIO = __webpack_require__(171);

var _analog_GPIO2 = _interopRequireDefault(_analog_GPIO);

var _GPIO_continue = __webpack_require__(172);

var _GPIO_continue2 = _interopRequireDefault(_GPIO_continue);

var _double_GPIO = __webpack_require__(173);

var _double_GPIO2 = _interopRequireDefault(_double_GPIO);

var _runtime = __webpack_require__(174);

var _runtime2 = _interopRequireDefault(_runtime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  DcMotor: _dc_motor2.default,
  VirtualJoystick: _virtual_joystick2.default,
  VirtualJoystickForBalance: _virtual_joystick_for_balance2.default,
  StepperMotor: _stepper_motor2.default,
  EncoderMotor: _encoder_motor2.default,
  EncoderMotorOnBoard: _encoder_motor_on_board2.default,
  ServoMotor: _servo_motor2.default,
  FourLed: _four_led2.default,
  RgbLed: _rgb_led2.default,
  LedPanelOnBoard: _led_panel_on_board2.default,
  RgbLedOnBoard: _rgb_led_on_board2.default,
  LedMatrixChar: _led_matrix_char2.default,
  LedMatrixTime: _led_matrix_time2.default,
  LedMatrixEmotion: _led_matrix_emotion2.default,
  LedMatrixNumber: _led_matrix_number2.default,
  Buzzer: _buzzer2.default,
  SevenSegment: _seven_segment2.default,
  Shutter: _shutter2.default,
  SmartServo: _smart_servo2.default,
  EncoderMotorOnBoardPID: _encoder_motor_on_board_pid2.default,

  Reset: _reset2.default, //实现待验证
  Ultrasonic: _ultrasonic2.default,
  Temperature: _temperature2.default,
  Light: _light2.default,
  Potentionmeter: _potentionmeter2.default,
  Joystick: _joystick2.default,
  Gyro: _gyro2.default,
  GyroOnBoard: _Gyro_on_board2.default,
  Sound: _sound2.default,
  SoundOnBoard: _sound_on_board2.default,
  TemperatureOnBoard: _temperature_on_board2.default,
  Pirmotion: _pirmotion2.default,
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
}; //读值
//略不同的实现方式

//包含读值和写的接口

/***/ }),
/* 34 */
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

var _toConsumableArray2 = __webpack_require__(30);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bufComposer = function bufComposer(obj) {
  var args = [obj.port, obj.slot, obj.ledPosition].concat((0, _toConsumableArray3.default)(obj.rgb));
  return _utils2.default.composer(_cmd2.default.setLed, args);
};

var commandWrite = function commandWrite(obj) {
  // console.log('led ------->', obj.ledPosition, ...obj.rgb);
  var buf = bufComposer(obj);
  _commandManager2.default.write(buf);
};

var BaseRgbLed = function (_Electronic) {
  (0, _inherits3.default)(BaseRgbLed, _Electronic);

  /**
   * RgbLed类，led模块
   * @param {number} port - led port口
   * @param {number} position - led灯的位置
   */
  function BaseRgbLed(port, slot) {
    (0, _classCallCheck3.default)(this, BaseRgbLed);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseRgbLed.__proto__ || (0, _getPrototypeOf2.default)(BaseRgbLed)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port),
      slot: (0, _type.defineNumber)(slot),
      ledPosition: 0,
      rgb: [0, 0, 0]
    };
    return _this;
  }

  /**
   * set led position
   * @param {number} position
   */


  (0, _createClass3.default)(BaseRgbLed, [{
    key: 'position',
    value: function position(_position) {
      this.args.ledPosition = (0, _type.defineNumber)(_position, this.args.ledPosition);
      return this;
    }

    /**
     * set led red value
     * @param {number} value 0 ~ 255
     */

  }, {
    key: 'r',
    value: function r(value) {
      this.args.rgb[0] = (0, _type.defineNumber)(value, this.args.rgb[0]);
      return this;
    }

    /**
     * set led green value
     * @param {number} value 0 ~ 255
     */

  }, {
    key: 'g',
    value: function g(value) {
      this.args.rgb[1] = (0, _type.defineNumber)(value, this.args.rgb[1]);
      return this;
    }

    /**
     * set blue red value
     * @param {number} value 0 ~ 255
     */

  }, {
    key: 'b',
    value: function b(value) {
      this.args.rgb[2] = (0, _type.defineNumber)(value, this.args.rgb[2]);
      return this;
    }

    /**
     * turn on led
     * @param {number} position
     */

  }, {
    key: 'turnOn',
    value: function turnOn() {
      commandWrite(this.args);
      return this;
    }

    /**
     * turn off led
     * @param {number} position
     */

  }, {
    key: 'turnOff',
    value: function turnOff() {
      this.args.rgb = [0, 0, 0];
      commandWrite(this.args);
      return this;
    }

    /**
     * turn on all the leds
     */

  }, {
    key: 'turnOnAll',
    value: function turnOnAll() {
      this.position(0);
      return this.turnOn();
    }

    /**
     * turn off all the leds
     */

  }, {
    key: 'turnOffAll',
    value: function turnOffAll() {
      this.position(0);
      return this.turnOff();
    }

    /**
     * LED亮红色灯光
     */

  }, {
    key: 'red',
    value: function red() {
      this.args.rgb = [255, 0, 0];
      commandWrite(this.args);
      return this;
    }

    /**
     * LED亮绿色灯光
     */

  }, {
    key: 'green',
    value: function green() {
      this.args.rgb = [0, 255, 0];
      commandWrite(this.args);
      return this;
    }

    /**
     * LED亮蓝色灯光
     */

  }, {
    key: 'blue',
    value: function blue() {
      this.args.rgb = [0, 0, 255];
      commandWrite(this.args);
      return this;
    }

    /**
     * LED亮白色灯光
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
/* 35 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseLedMatrix = function (_Electronic) {
  (0, _inherits3.default)(BaseLedMatrix, _Electronic);

  /**
   * LedMatrix 类，led模块
   */
  function BaseLedMatrix(port) {
    (0, _classCallCheck3.default)(this, BaseLedMatrix);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseLedMatrix.__proto__ || (0, _getPrototypeOf2.default)(BaseLedMatrix)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port)
    };
    return _this;
  }

  return BaseLedMatrix;
}(_electronic2.default);

exports.default = BaseLedMatrix;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(40)('keys')
  , uid    = __webpack_require__(29);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(12)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(75);
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(25);
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
/* 44 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(22)
  , dPs         = __webpack_require__(86)
  , enumBugKeys = __webpack_require__(41)
  , IE_PROTO    = __webpack_require__(39)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(58)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(87).appendChild(iframe);
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(14).f
  , has = __webpack_require__(16)
  , TAG = __webpack_require__(11)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(96);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(102);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(11);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(12)
  , core           = __webpack_require__(10)
  , LIBRARY        = __webpack_require__(44)
  , wksExt         = __webpack_require__(48)
  , defineProperty = __webpack_require__(14).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 51 */
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

var _type = __webpack_require__(8);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseMotor = function (_Electronic) {
  (0, _inherits3.default)(BaseMotor, _Electronic);

  /**
   * Motor base class
   * @constructor
   * @param {number} port
   * @param {number} slot
   */
  function BaseMotor(port, slot) {
    (0, _classCallCheck3.default)(this, BaseMotor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseMotor.__proto__ || (0, _getPrototypeOf2.default)(BaseMotor)).call(this));

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


  (0, _createClass3.default)(BaseMotor, [{
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
  return BaseMotor;
}(_electronic2.default);

exports.default = BaseMotor;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(16)
  , toIObject    = __webpack_require__(17)
  , arrayIndexOf = __webpack_require__(73)(false)
  , IE_PROTO     = __webpack_require__(39)('IE_PROTO');

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(37);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(38)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(13)
  , core    = __webpack_require__(10)
  , fails   = __webpack_require__(23);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(18) && !__webpack_require__(23)(function(){
  return Object.defineProperty(__webpack_require__(58)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(25)
  , document = __webpack_require__(12).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @fileOverview 指令的传输通道：蓝牙，串口，2.4G。
 */

var Transport = {
  send: function send(buf) {},
  onReceived: function onReceived(pipe) {}
};

exports.default = Transport;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(84)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(61)(String, 'String', function(iterated){
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(44)
  , $export        = __webpack_require__(13)
  , redefine       = __webpack_require__(62)
  , hide           = __webpack_require__(21)
  , has            = __webpack_require__(16)
  , Iterators      = __webpack_require__(27)
  , $iterCreate    = __webpack_require__(85)
  , setToStringTag = __webpack_require__(46)
  , getPrototypeOf = __webpack_require__(63)
  , ITERATOR       = __webpack_require__(11)('iterator')
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(16)
  , toObject    = __webpack_require__(24)
  , IE_PROTO    = __webpack_require__(39)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(53)
  , hiddenKeys = __webpack_require__(41).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(31)
  , createDesc     = __webpack_require__(26)
  , toIObject      = __webpack_require__(17)
  , toPrimitive    = __webpack_require__(43)
  , has            = __webpack_require__(16)
  , IE8_DOM_DEFINE = __webpack_require__(57)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(18) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 66 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _BaseMotor2 = __webpack_require__(51);

var _BaseMotor3 = _interopRequireDefault(_BaseMotor2);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseEncoderMotor = function (_BaseMotor) {
  (0, _inherits3.default)(BaseEncoderMotor, _BaseMotor);

  /**
   * BaseEncoderMotor
   * @constructor
   * @param {number} port
   * @param {number} slot
   */
  function BaseEncoderMotor(port, slot) {
    (0, _classCallCheck3.default)(this, BaseEncoderMotor);
    return (0, _possibleConstructorReturn3.default)(this, (BaseEncoderMotor.__proto__ || (0, _getPrototypeOf2.default)(BaseEncoderMotor)).call(this, port, slot));
  }

  /**
   * EncoderMotor run
   * @return {Object} the instance
   */


  (0, _createClass3.default)(BaseEncoderMotor, [{
    key: 'run',
    value: function run() {
      var buf = void 0;
      if (this.args.port == 0) {
        buf = _utils2.default.composer(_cmd2.default.setEncoderMotorOnBoard, [this.args.slot, this.args.speed]);
      } else {
        buf = _utils2.default.composer(_cmd2.default.setEncoderMotor, [this.args.port, this.args.slot, this.args.speed, this.args.angle]);
      }
      _commandManager2.default.write(buf);
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
/* 67 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseGyro = function (_Electronic) {
  (0, _inherits3.default)(BaseGyro, _Electronic);

  function BaseGyro(port) {
    (0, _classCallCheck3.default)(this, BaseGyro);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseGyro.__proto__ || (0, _getPrototypeOf2.default)(BaseGyro)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port),
      axis: 0
    };
    return _this;
  }

  (0, _createClass3.default)(BaseGyro, [{
    key: 'axis',
    value: function axis(_axis) {
      this.args.axis = (0, _type.defineNumber)(_axis, this.args.axis);
      return this;
    }
  }, {
    key: 'getData',
    value: function getData(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readGyro, [this.args.port, this.args.axis]);
      _commandManager2.default.read(buf, callback);
      return this;
    }
  }]);
  return BaseGyro;
}(_electronic2.default);

exports.default = BaseGyro;

/***/ }),
/* 68 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseSound = function (_Electronic) {
  (0, _inherits3.default)(BaseSound, _Electronic);

  function BaseSound(port) {
    (0, _classCallCheck3.default)(this, BaseSound);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseSound.__proto__ || (0, _getPrototypeOf2.default)(BaseSound)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port)
    };
    return _this;
  }

  (0, _createClass3.default)(BaseSound, [{
    key: 'getData',
    value: function getData(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readSound, [this.args.port]);
      _commandManager2.default.read(buf, callback);
      return this;
    }
  }]);
  return BaseSound;
}(_electronic2.default);

exports.default = BaseSound;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

var _settings = __webpack_require__(15);

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
      _commandManager2.default.write(buf);
    }
  }, {
    key: 'getMode',
    value: function getMode(subCmd, callback) {
      var buf = _utils2.default.composer(_cmd2.default.readFirmwareMode, [subCmd]);
      _commandManager2.default.read(buf, callback);
    }

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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(52);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _transport = __webpack_require__(59);

var _transport2 = _interopRequireDefault(_transport);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

var _version = __webpack_require__(28);

var _version2 = _interopRequireDefault(_version);

var _settings = __webpack_require__(15);

var _settings2 = _interopRequireDefault(_settings);

var _mcore = __webpack_require__(113);

var _mcore2 = _interopRequireDefault(_mcore);

var _orion = __webpack_require__(175);

var _orion2 = _interopRequireDefault(_orion);

var _auriga = __webpack_require__(176);

var _auriga2 = _interopRequireDefault(_auriga);

var _megaPi = __webpack_require__(177);

var _megaPi2 = _interopRequireDefault(_megaPi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var boards = {
  "auriga": _auriga2.default,
  "mcore": _mcore2.default,
  "megapi": _megaPi2.default,
  "orion": _orion2.default

  /**
   * 构造函数返回值，改变了构造函数实例
   * Sensorium 原型方法只能统一用静态方法代替
   */
};
var Sensorium = function () {
  /**
   * @constructor
   */
  function Sensorium() {
    (0, _classCallCheck3.default)(this, Sensorium);
  }

  /**
   * @param {String} boardName 主控板名，忽略大小写
   * @param {Object} opts     (optional)
   */


  (0, _createClass3.default)(Sensorium, [{
    key: 'create',
    value: function create(mainboardName, opts) {
      var board = boards[mainboardName.toLowerCase()];
      if (typeof board == 'undefined') {
        throw new Error('sorry, the board ' + boardName + ' could not be supported!');
      }
      return new board(opts);
    }

    /**
     * set transport such as bluetooth、serialport
     * @param {Tranport} transport object that contains send and onReceived functions
     */
    //TO COMFIRM：是否重复 setTransport 导致事件监听绑定多次?
    //对多次相同的transpoprt，不允许重新设置

  }, {
    key: 'setTransport',
    value: function setTransport(transport) {
      if (transport && typeof transport.send == 'function' && typeof transport.onReceived == 'function') {
        _transport2.default.send = transport.send;
        transport.onReceived(_commandManager2.default.pipe.bind(_commandManager2.default));
      } else {
        // console.warn('')
      }
    }

    /**
     * read firmware verion and parse the device info
     * @param  {Function} callback the function then to be execute
     */

  }, {
    key: 'readFirmwareInfo',
    value: function readFirmwareInfo(callback) {
      _version2.default.getVersion(function (val) {
        var id = void 0,
            firmwareName = void 0;
        if (val) {
          id = val.split('.')[0];
          firmwareName = _settings2.default.FIRMWARE_ID[parseInt(id)];
        }
        typeof callback == 'function' && callback(firmwareName, val);
      });
    }
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72);
module.exports = __webpack_require__(10).Object.keys;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(24)
  , $keys    = __webpack_require__(20);

__webpack_require__(56)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(17)
  , toLength  = __webpack_require__(55)
  , toIndex   = __webpack_require__(74);
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(38)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
var $Object = __webpack_require__(10).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(13);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(18), 'Object', {defineProperty: __webpack_require__(14).f});

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(52);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileOverview read request controler.
 * @author jeremy
 */

//最大记录数
var MAX_RECORD = 256;
//超时时间
var OVERTIME = 1000;

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
    };
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
   * this function is drived by
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
    }, OVERTIME + 200);
  },

  /**
   * 移除超时未回调的
   * @return {Number} 返回超时数目
   */
  removeOvertimeRequest: function removeOvertimeRequest() {
    var time = new Date().getTime();
    var count = 0;
    for (var index in this.readRecord) {
      if (time - this.readRecord[index].time > OVERTIME) {
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * write request controler.
 */
var TIME_INTERVAL = 50;

var WriteControl = {
  writeRecord: {},
  /**
   * this function is drived by
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

exports.default = WriteControl;

/***/ }),
/* 81 */
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
  getResult: function getResult(buf, type) {
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
__webpack_require__(88);
module.exports = __webpack_require__(10).Array.from;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(38)
  , defined   = __webpack_require__(36);
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(45)
  , descriptor     = __webpack_require__(26)
  , setToStringTag = __webpack_require__(46)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(21)(IteratorPrototype, __webpack_require__(11)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(14)
  , anObject = __webpack_require__(22)
  , getKeys  = __webpack_require__(20);

module.exports = __webpack_require__(18) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12).document && document.documentElement;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(42)
  , $export        = __webpack_require__(13)
  , toObject       = __webpack_require__(24)
  , call           = __webpack_require__(89)
  , isArrayIter    = __webpack_require__(90)
  , toLength       = __webpack_require__(55)
  , createProperty = __webpack_require__(91)
  , getIterFn      = __webpack_require__(92);

$export($export.S + $export.F * !__webpack_require__(94)(function(iter){ Array.from(iter); }), 'Array', {
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(22);
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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(27)
  , ITERATOR   = __webpack_require__(11)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(14)
  , createDesc      = __webpack_require__(26);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(93)
  , ITERATOR  = __webpack_require__(11)('iterator')
  , Iterators = __webpack_require__(27);
module.exports = __webpack_require__(10).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(37)
  , TAG = __webpack_require__(11)('toStringTag')
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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(11)('iterator')
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
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _transport = __webpack_require__(59);

var _transport2 = _interopRequireDefault(_transport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Command = function () {
  function Command() {
    (0, _classCallCheck3.default)(this, Command);

    //绑定上下文
    this.send = this.send.bind(this);
  }

  /**
   * send buffer through the transport
   * @param  {Array} buf [description]
   * @return {[type]}     [description]
   */


  (0, _createClass3.default)(Command, [{
    key: 'send',
    value: function send(buf) {
      _transport2.default.send(buf);
    }
  }]);
  return Command;
}(); /**
      * @fileOverview 命令执行器
      */


exports.default = new Command();

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
__webpack_require__(98);
module.exports = __webpack_require__(48).f('iterator');

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(99);
var global        = __webpack_require__(12)
  , hide          = __webpack_require__(21)
  , Iterators     = __webpack_require__(27)
  , TO_STRING_TAG = __webpack_require__(11)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(100)
  , step             = __webpack_require__(101)
  , Iterators        = __webpack_require__(27)
  , toIObject        = __webpack_require__(17);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(61)(Array, 'Array', function(iterated, kind){
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

module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(104);
__webpack_require__(110);
__webpack_require__(111);
__webpack_require__(112);
module.exports = __webpack_require__(10).Symbol;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(12)
  , has            = __webpack_require__(16)
  , DESCRIPTORS    = __webpack_require__(18)
  , $export        = __webpack_require__(13)
  , redefine       = __webpack_require__(62)
  , META           = __webpack_require__(105).KEY
  , $fails         = __webpack_require__(23)
  , shared         = __webpack_require__(40)
  , setToStringTag = __webpack_require__(46)
  , uid            = __webpack_require__(29)
  , wks            = __webpack_require__(11)
  , wksExt         = __webpack_require__(48)
  , wksDefine      = __webpack_require__(49)
  , keyOf          = __webpack_require__(106)
  , enumKeys       = __webpack_require__(107)
  , isArray        = __webpack_require__(108)
  , anObject       = __webpack_require__(22)
  , toIObject      = __webpack_require__(17)
  , toPrimitive    = __webpack_require__(43)
  , createDesc     = __webpack_require__(26)
  , _create        = __webpack_require__(45)
  , gOPNExt        = __webpack_require__(109)
  , $GOPD          = __webpack_require__(65)
  , $DP            = __webpack_require__(14)
  , $keys          = __webpack_require__(20)
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
  __webpack_require__(64).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(31).f  = $propertyIsEnumerable;
  __webpack_require__(50).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(44)){
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(21)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(29)('meta')
  , isObject = __webpack_require__(25)
  , has      = __webpack_require__(16)
  , setDesc  = __webpack_require__(14).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(23)(function(){
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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(20)
  , toIObject = __webpack_require__(17);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(20)
  , gOPS    = __webpack_require__(50)
  , pIE     = __webpack_require__(31);
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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(37);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(17)
  , gOPN      = __webpack_require__(64).f
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
/* 110 */
/***/ (function(module, exports) {



/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(49)('asyncIterator');

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(49)('observable');

/***/ }),
/* 113 */
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

var _Board2 = __webpack_require__(32);

var _Board3 = _interopRequireDefault(_Board2);

var _index = __webpack_require__(33);

var _index2 = _interopRequireDefault(_index);

var _version = __webpack_require__(28);

var _version2 = _interopRequireDefault(_version);

var _settings = __webpack_require__(15);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//支持位置
var SUPPORT_INDEX = _settings2.default.SUPPORTLIST.indexOf('Mcore');

//实现一个板子就注册一个板子名称

var Mcore = function (_Board) {
  (0, _inherits3.default)(Mcore, _Board);

  function Mcore(conf) {
    (0, _classCallCheck3.default)(this, Mcore);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Mcore.__proto__ || (0, _getPrototypeOf2.default)(Mcore)).call(this, conf));
    //继承 Board


    var this_ = _this;
    //固件版本
    _this.version = null;
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
   * 获取版本号，所有主控板支持
   * @param  {!Function} callback
   */


  (0, _createClass3.default)(Mcore, [{
    key: 'getVersion',
    value: function getVersion(callback) {
      var this_ = this;
      if (this.version) {
        typeof callback == 'function' && callback(this.version);
      } else {
        _version2.default.getVersion(function (val) {
          this_.version = val;
          typeof callback == 'function' && this.version;
        });
      }
    }
  }]);
  return Mcore;
}(_Board3.default);

exports.default = Mcore;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(115);
module.exports = __webpack_require__(10).Object.getPrototypeOf;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(24)
  , $getPrototypeOf = __webpack_require__(63);

__webpack_require__(56)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(118);
module.exports = __webpack_require__(10).Object.setPrototypeOf;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(13);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(119).set});

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(25)
  , anObject = __webpack_require__(22);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(42)(Function.call, __webpack_require__(65).f(Object.prototype, '__proto__').set, 2);
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
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(121), __esModule: true };

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(122);
var $Object = __webpack_require__(10).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(13)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(45)});

/***/ }),
/* 123 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _BaseMotor2 = __webpack_require__(51);

var _BaseMotor3 = _interopRequireDefault(_BaseMotor2);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      _commandManager2.default.write(buf);
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
/* 124 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      _commandManager2.default.write(buf);
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
/* 125 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      _commandManager2.default.write(buf);
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

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(19);

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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _BaseMotor2 = __webpack_require__(51);

var _BaseMotor3 = _interopRequireDefault(_BaseMotor2);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      this.args.distance = (0, _type.defineNumber)(_distance, 0);
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
      _commandManager2.default.write(buf);
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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(128);
module.exports = __webpack_require__(10).Object.assign;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(13);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(129)});

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(20)
  , gOPS     = __webpack_require__(50)
  , pIE      = __webpack_require__(31)
  , toObject = __webpack_require__(24)
  , IObject  = __webpack_require__(54)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(23)(function(){
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
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(19);

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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _BaseEncoderMotor2 = __webpack_require__(66);

var _BaseEncoderMotor3 = _interopRequireDefault(_BaseEncoderMotor2);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EncoderMotor = function (_BaseEncoderMotor) {
  (0, _inherits3.default)(EncoderMotor, _BaseEncoderMotor);

  function EncoderMotor(port, slot) {
    (0, _classCallCheck3.default)(this, EncoderMotor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EncoderMotor.__proto__ || (0, _getPrototypeOf2.default)(EncoderMotor)).call(this, port, slot));

    (0, _assign2.default)(_this.args, {
      angle: 0
    });
    return _this;
  }

  /**
   * set angle offset to last angle position
   * @param  {Number} angle [description]
   * @return {[type]}       [description]
   */


  (0, _createClass3.default)(EncoderMotor, [{
    key: 'offsetAngle',
    value: function offsetAngle(angle) {
      this.args.angle = (0, _type.defineNumber)(angle, this.args.angle);
      return this;
    }
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '0101';
    }
  }]);
  return EncoderMotor;
}(_BaseEncoderMotor3.default);

exports.default = EncoderMotor;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(19);

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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _BaseEncoderMotor2 = __webpack_require__(66);

var _BaseEncoderMotor3 = _interopRequireDefault(_BaseEncoderMotor2);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bufComposer = function bufComposer(args) {
  return _utils2.default.composer(_cmd2.default.readEncoderMotorOnBoard, [args.slot, args.type]);
};

var EncoderMotorOnBoard = function (_BaseEncoderMotor) {
  (0, _inherits3.default)(EncoderMotorOnBoard, _BaseEncoderMotor);

  function EncoderMotorOnBoard(slot) {
    (0, _classCallCheck3.default)(this, EncoderMotorOnBoard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EncoderMotorOnBoard.__proto__ || (0, _getPrototypeOf2.default)(EncoderMotorOnBoard)).call(this, 0, slot));

    (0, _assign2.default)(_this.args, {
      type: null
    });
    return _this;
  }

  (0, _createClass3.default)(EncoderMotorOnBoard, [{
    key: 'getSpeed',
    value: function getSpeed(callback) {
      this.args.type = 0x02;
      var buf = bufComposer(this.args);
      _commandManager2.default.read(buf, callback);
      return this;
    }

    /**
     * get angle offset to the start position
     * @param  {Function} callback
     */

  }, {
    key: 'getAngle',
    value: function getAngle(callback) {
      this.args.type = 0x01;
      var buf = bufComposer(this.args);
      _commandManager2.default.read(buf, callback);
      return this;
    }
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
/* 132 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServoMotor = function (_Electronic) {
  (0, _inherits3.default)(ServoMotor, _Electronic);

  function ServoMotor(port, slot) {
    (0, _classCallCheck3.default)(this, ServoMotor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ServoMotor.__proto__ || (0, _getPrototypeOf2.default)(ServoMotor)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port),
      slot: (0, _type.defineNumber)(slot),
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
      this.args.angle = (0, _type.defineNumber)(degree, 0);
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
      _commandManager2.default.write(buf);
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

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseRgbLed2 = __webpack_require__(34);

var _BaseRgbLed3 = _interopRequireDefault(_BaseRgbLed2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FourLed = function (_BaseRgbLed) {
  (0, _inherits3.default)(FourLed, _BaseRgbLed);

  function FourLed(port) {
    (0, _classCallCheck3.default)(this, FourLed);
    return (0, _possibleConstructorReturn3.default)(this, (FourLed.__proto__ || (0, _getPrototypeOf2.default)(FourLed)).call(this, port, 2));
  }

  (0, _createClass3.default)(FourLed, null, [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return FourLed;
}(_BaseRgbLed3.default);

exports.default = FourLed;

/***/ }),
/* 134 */
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

var _BaseRgbLed2 = __webpack_require__(34);

var _BaseRgbLed3 = _interopRequireDefault(_BaseRgbLed2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RgbLed = function (_BaseRgbLed) {
  (0, _inherits3.default)(RgbLed, _BaseRgbLed);

  function RgbLed(port, slot) {
    (0, _classCallCheck3.default)(this, RgbLed);
    return (0, _possibleConstructorReturn3.default)(this, (RgbLed.__proto__ || (0, _getPrototypeOf2.default)(RgbLed)).call(this, port, slot));
  }

  (0, _createClass3.default)(RgbLed, null, [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return RgbLed;
}(_BaseRgbLed3.default);

exports.default = RgbLed;

/***/ }),
/* 135 */
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

var _BaseRgbLed2 = __webpack_require__(34);

var _BaseRgbLed3 = _interopRequireDefault(_BaseRgbLed2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LedPanelOnBoard = function (_BaseRgbLed) {
  (0, _inherits3.default)(LedPanelOnBoard, _BaseRgbLed);

  function LedPanelOnBoard() {
    (0, _classCallCheck3.default)(this, LedPanelOnBoard);
    return (0, _possibleConstructorReturn3.default)(this, (LedPanelOnBoard.__proto__ || (0, _getPrototypeOf2.default)(LedPanelOnBoard)).call(this, 0, 2));
  }

  //主控支持戳：描述各主控的支持情况


  (0, _createClass3.default)(LedPanelOnBoard, null, [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return LedPanelOnBoard;
}(_BaseRgbLed3.default);

exports.default = LedPanelOnBoard;

/***/ }),
/* 136 */
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

var _BaseRgbLed2 = __webpack_require__(34);

var _BaseRgbLed3 = _interopRequireDefault(_BaseRgbLed2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RgbLedOnBoard = function (_BaseRgbLed) {
  (0, _inherits3.default)(RgbLedOnBoard, _BaseRgbLed);

  function RgbLedOnBoard() {
    (0, _classCallCheck3.default)(this, RgbLedOnBoard);
    return (0, _possibleConstructorReturn3.default)(this, (RgbLedOnBoard.__proto__ || (0, _getPrototypeOf2.default)(RgbLedOnBoard)).call(this, 0, 2));
  }

  (0, _createClass3.default)(RgbLedOnBoard, null, [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '0100';
    }
  }]);
  return RgbLedOnBoard;
}(_BaseRgbLed3.default);

exports.default = RgbLedOnBoard;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(19);

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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _BaseLedMatrix2 = __webpack_require__(35);

var _BaseLedMatrix3 = _interopRequireDefault(_BaseLedMatrix2);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LedMatrixChar = function (_BaseLedMatrix) {
  (0, _inherits3.default)(LedMatrixChar, _BaseLedMatrix);

  function LedMatrixChar(port) {
    (0, _classCallCheck3.default)(this, LedMatrixChar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LedMatrixChar.__proto__ || (0, _getPrototypeOf2.default)(LedMatrixChar)).call(this, port));

    (0, _assign2.default)(_this.args, {
      x: null,
      y: null,
      char: null
    });
    return _this;
  }

  (0, _createClass3.default)(LedMatrixChar, [{
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
      _commandManager2.default.write(buf);
      return this;
    }
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1110';
    }
  }]);
  return LedMatrixChar;
}(_BaseLedMatrix3.default);

exports.default = LedMatrixChar;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(19);

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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _BaseLedMatrix2 = __webpack_require__(35);

var _BaseLedMatrix3 = _interopRequireDefault(_BaseLedMatrix2);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LedMatrixTime = function (_BaseLedMatrix) {
  (0, _inherits3.default)(LedMatrixTime, _BaseLedMatrix);

  function LedMatrixTime(port) {
    (0, _classCallCheck3.default)(this, LedMatrixTime);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LedMatrixTime.__proto__ || (0, _getPrototypeOf2.default)(LedMatrixTime)).call(this, port));

    (0, _assign2.default)(_this.args, {
      separator: null,
      hour: null,
      minute: null
    });
    return _this;
  }

  (0, _createClass3.default)(LedMatrixTime, [{
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
      _commandManager2.default.write(buf);
      return this;
    }
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1110';
    }
  }]);
  return LedMatrixTime;
}(_BaseLedMatrix3.default);

exports.default = LedMatrixTime;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(19);

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

var _BaseLedMatrix2 = __webpack_require__(35);

var _BaseLedMatrix3 = _interopRequireDefault(_BaseLedMatrix2);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LedMatrixEmotion = function (_BaseLedMatrix) {
  (0, _inherits3.default)(LedMatrixEmotion, _BaseLedMatrix);

  function LedMatrixEmotion(port) {
    (0, _classCallCheck3.default)(this, LedMatrixEmotion);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LedMatrixEmotion.__proto__ || (0, _getPrototypeOf2.default)(LedMatrixEmotion)).call(this, port));

    (0, _assign2.default)(_this.args, {
      x: null,
      y: null,
      emotion: null
    });
    return _this;
  }

  (0, _createClass3.default)(LedMatrixEmotion, [{
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
    key: 'emotion',
    value: function emotion(_emotion) {
      this.args.emotion = _emotion;
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setLedMatrixEmotion, [this.args.port, this.args.x, this.args.y, this.args.emotion]);
      _commandManager2.default.write(buf);
      return this;
    }
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1110';
    }
  }]);
  return LedMatrixEmotion;
}(_BaseLedMatrix3.default);

exports.default = LedMatrixEmotion;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(19);

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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _BaseLedMatrix2 = __webpack_require__(35);

var _BaseLedMatrix3 = _interopRequireDefault(_BaseLedMatrix2);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LedMatrixNumber = function (_BaseLedMatrix) {
  (0, _inherits3.default)(LedMatrixNumber, _BaseLedMatrix);

  function LedMatrixNumber(port) {
    (0, _classCallCheck3.default)(this, LedMatrixNumber);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LedMatrixNumber.__proto__ || (0, _getPrototypeOf2.default)(LedMatrixNumber)).call(this, port));

    (0, _assign2.default)(_this.args, {
      number: null
    });
    return _this;
  }

  (0, _createClass3.default)(LedMatrixNumber, [{
    key: 'number',
    value: function number(num) {
      this.args.number = (0, _type.defineNumber)(num);
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setLedMatrixNumber, [this.args.port, this.args.number]);
      _commandManager2.default.write(buf);
      return this;
    }
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1110';
    }
  }]);
  return LedMatrixNumber;
}(_BaseLedMatrix3.default);

exports.default = LedMatrixNumber;

/***/ }),
/* 141 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Buzzer = function (_Electronic) {
  (0, _inherits3.default)(Buzzer, _Electronic);

  function Buzzer() {
    (0, _classCallCheck3.default)(this, Buzzer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Buzzer.__proto__ || (0, _getPrototypeOf2.default)(Buzzer)).call(this));

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


  (0, _createClass3.default)(Buzzer, [{
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
      _commandManager2.default.write(buf);
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

/***/ }),
/* 142 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SevenSegment = function (_Electronic) {
  (0, _inherits3.default)(SevenSegment, _Electronic);

  function SevenSegment(port) {
    (0, _classCallCheck3.default)(this, SevenSegment);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SevenSegment.__proto__ || (0, _getPrototypeOf2.default)(SevenSegment)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port),
      number: null
    };
    return _this;
  }

  (0, _createClass3.default)(SevenSegment, [{
    key: 'number',
    value: function number(num) {
      this.args.number = (0, _type.defineNumber)(num);
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setSevenSegment, [this.args.port, this.args.number]);
      _commandManager2.default.write(buf);
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
/* 143 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Shutter = function (_Electronic) {
  (0, _inherits3.default)(Shutter, _Electronic);

  function Shutter(port) {
    (0, _classCallCheck3.default)(this, Shutter);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Shutter.__proto__ || (0, _getPrototypeOf2.default)(Shutter)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port),
      action: null
    };
    return _this;
  }

  /**
   * set shutter mode
   * @param {string} actionId - 动作id  0: 按下快门; 1: 松开快门; 2: 聚焦; 3: 停止聚焦
   */


  (0, _createClass3.default)(Shutter, [{
    key: 'action',
    value: function action(actionId) {
      this.args.action = (0, _type.defineString)(actionId);
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setShutter, [this.args.port, this.args.action]);
      _commandManager2.default.write(buf);
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
/* 144 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function write(baseArgs, extra) {
  if (typeof extra !== 'undefined' && !Array.isArray(extra)) {
    extra = [extra];
  }
  var buf = _utils2.default.composer(_cmd2.default.setSmartServo, [baseArgs.index, baseArgs.subCmd, extra]);
  _commandManager2.default.write(buf);
}

function read(baseArgs, callback) {
  var buf = _utils2.default.composer(_cmd2.default.readSmartServoParam, [baseArgs.index, baseArgs.subCmd]);
  _commandManager2.default.read(buf, callback);
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
     * 设置舵机led颜色
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
      }
      this.args.subCmd = 0x02;
      write(this.args, extraCmd);
      return this;
    }

    //握手

  }, {
    key: 'handshake',
    value: function handshake() {
      this.args.subCmd = 0x03;
      write(this.args);
      return this;
    }
  }, {
    key: 'speed',
    value: function speed(_speed) {
      this.args.speed = (0, _type.defineNumber)(_speed);
      return this;
    }
    //运动到绝对角度

  }, {
    key: 'runToAbsoluteAngle',
    value: function runToAbsoluteAngle(angle) {
      var extraCmd = this.args.speed;
      this.args.subCmd = 0x04;
      write(this.args, extraCmd);
      return this;
    }
    //运动到相对角度

  }, {
    key: 'runToRelativeAngle',
    value: function runToRelativeAngle(angle) {
      var extraCmd = this.args.speed;
      this.args.subCmd = 0x05;
      write(this.args, extraCmd);
      return this;
    }
    //作为直流电机运动

  }, {
    key: 'runAsDcMotor',
    value: function runAsDcMotor() {
      var extraCmd = this.args.speed;
      this.args.subCmd = 0x06;
      write(this.args, extraCmd);
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
    value: function readSpeed(callback) {
      this.args.subCmd = 0x09;
      read(this.args, callback);
      return this;
    }
    //读温度

  }, {
    key: 'readTemperature',
    value: function readTemperature(callback) {
      this.args.subCmd = 0x0a;
      read(this.args, callback);
      return this;
    }

    //读电流

  }, {
    key: 'readCurrent',
    value: function readCurrent(callback) {
      this.args.subCmd = 0x0b;
      read(this.args, callback);
      return this;
    }

    //读电压

  }, {
    key: 'readVoltage',
    value: function readVoltage(callback) {
      this.args.subCmd = 0x0c;
      read(this.args, callback);
      return this;
    }

    //读角度

  }, {
    key: 'readAngle',
    value: function readAngle(callback) {
      this.args.subCmd = 0x0d;
      read(this.args, callback);
      return this;
    }
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
/* 145 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _encoder_motor_on_board_pid_for_distance = __webpack_require__(146);

var _encoder_motor_on_board_pid_for_distance2 = _interopRequireDefault(_encoder_motor_on_board_pid_for_distance);

var _encoder_motor_on_board_pid_for_speed = __webpack_require__(147);

var _encoder_motor_on_board_pid_for_speed2 = _interopRequireDefault(_encoder_motor_on_board_pid_for_speed);

var _encoder_motor_on_board_pid_for_pwm = __webpack_require__(148);

var _encoder_motor_on_board_pid_for_pwm2 = _interopRequireDefault(_encoder_motor_on_board_pid_for_pwm);

var _encoder_motor_on_board_pid_for_doubleMotor = __webpack_require__(149);

var _encoder_motor_on_board_pid_for_doubleMotor2 = _interopRequireDefault(_encoder_motor_on_board_pid_for_doubleMotor);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

var _settings = __webpack_require__(15);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var auriga = _settings2.default.SUPPORTLIST[1].toLowerCase();
var megapipro = _settings2.default.SUPPORTLIST[5].toLowerCase();

var EncoderMotorOnBoardPID = function (_Electronic) {
  (0, _inherits3.default)(EncoderMotorOnBoardPID, _Electronic);

  function EncoderMotorOnBoardPID() {
    (0, _classCallCheck3.default)(this, EncoderMotorOnBoardPID);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EncoderMotorOnBoardPID.__proto__ || (0, _getPrototypeOf2.default)(EncoderMotorOnBoardPID)).call(this));

    var host = arguments[arguments.length - 1];
    if (_settings2.default.SUPPORTLIST.indexOf(host) === -1) {
      console.warn('the last argument "' + host + '" expected to be one of ' + _settings2.default.SUPPORTLIST.join(','));
      host = megapipro;
    }
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
      _commandManager2.default.write(buf);
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
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

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
      this.args.distance = (0, _type.defineNumber)(_distance, this.args.distance);
      return this;
    }

    /**
     * set speed
     * @param  {Number} speed 速度
     */

  }, {
    key: 'speed',
    value: function speed(_speed) {
      this.args.speed = (0, _type.defineNumber)(_speed, this.args.speed);
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setEncoderMotorPIDDistance, [this.args.distance, this.args.speed]);
      _commandManager2.default.write(buf);
      return this;
    }
  }]);
  return EncoderMotorPIDForDistance;
}();

exports.default = EncoderMotorPIDForDistance;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

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
      this.args.speed = (0, _type.defineNumber)(_speed, this.args.speed);
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setEncoderMotorPIDSpeed, [this.args.speed]);
      _commandManager2.default.write(buf);
      return this;
    }
  }]);
  return PIDForSpeed;
}();

exports.default = PIDForSpeed;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

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
      this.args.speed = (0, _type.defineNumber)(_speed, this.args.speed);
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setEncoderMotorPIDPwm, [this.args.speed]);
      _commandManager2.default.write(buf);
      return this;
    }
  }]);
  return PIDForPwm;
}();

exports.default = PIDForPwm;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

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

  (0, _createClass3.default)(PIDForDoubleMotor, [{
    key: 'forward',
    value: function forward() {
      this.args.direction = 1;
      return this;
    }
  }, {
    key: 'backward',
    value: function backward() {
      this.args.direction = 2;
      return this;
    }
  }, {
    key: 'turnleft',
    value: function turnleft() {
      this.args.direction = 3;
      return this;
    }
  }, {
    key: 'turnright',
    value: function turnright() {
      this.args.direction = 4;
      return this;
    }

    /**
     * set distance
     * @param  {Number} distance 位移
     */

  }, {
    key: 'distance',
    value: function distance(_distance) {
      this.args.distance = (0, _type.defineNumber)(_distance, this.args.distance);
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
      this.args.speed = (0, _type.defineNumber)(_speed, this.args.speed);
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var buf = _utils2.default.composer(_cmd2.default.setEncoderMotorPIDDoubleMotor, [this.args.direction, this.args.distance, this.args.speed]);
      _commandManager2.default.write(buf);
      return this;
    }
  }]);
  return PIDForDoubleMotor;
}();

exports.default = PIDForDoubleMotor;

/***/ }),
/* 150 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Reset = function (_Electronic) {
  (0, _inherits3.default)(Reset, _Electronic);

  function Reset(callback) {
    (0, _classCallCheck3.default)(this, Reset);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Reset.__proto__ || (0, _getPrototypeOf2.default)(Reset)).call(this));

    _this.reset(callback);
    return _this;
  }

  (0, _createClass3.default)(Reset, [{
    key: 'reset',
    value: function reset(callback) {
      var buf = _utils2.default.composer(_cmd2.default.reset);
      _commandManager2.default.read(buf, callback);
      return this;
    }
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
/* 151 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ultrasonic = function (_Electronic) {
  (0, _inherits3.default)(Ultrasonic, _Electronic);

  function Ultrasonic(port) {
    (0, _classCallCheck3.default)(this, Ultrasonic);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Ultrasonic.__proto__ || (0, _getPrototypeOf2.default)(Ultrasonic)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port)
    };
    return _this;
  }

  (0, _createClass3.default)(Ultrasonic, [{
    key: 'getData',
    value: function getData(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readUltrasonic, [this.args.port]);
      _commandManager2.default.read(buf, callback);
      return this;
    }
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
/* 152 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Temperature = function (_Electronic) {
  (0, _inherits3.default)(Temperature, _Electronic);

  function Temperature(port, slot) {
    (0, _classCallCheck3.default)(this, Temperature);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Temperature.__proto__ || (0, _getPrototypeOf2.default)(Temperature)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port),
      slot: (0, _type.defineNumber)(slot)
    };
    return _this;
  }

  (0, _createClass3.default)(Temperature, [{
    key: 'getData',
    value: function getData(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readTemperature, [this.args.port, this.args.slot]);
      _commandManager2.default.read(buf, callback);
      return this;
    }
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
/* 153 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Light = function (_Electronic) {
  (0, _inherits3.default)(Light, _Electronic);

  function Light(port) {
    (0, _classCallCheck3.default)(this, Light);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Light.__proto__ || (0, _getPrototypeOf2.default)(Light)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port)
    };
    return _this;
  }

  (0, _createClass3.default)(Light, [{
    key: 'getData',
    value: function getData(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readLight, [this.args.port]);
      _commandManager2.default.read(buf, callback);
      return this;
    }
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return Light;
}(_electronic2.default);

exports.default = Light;

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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Potentionmeter = function (_Electronic) {
  (0, _inherits3.default)(Potentionmeter, _Electronic);

  function Potentionmeter(port) {
    (0, _classCallCheck3.default)(this, Potentionmeter);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Potentionmeter.__proto__ || (0, _getPrototypeOf2.default)(Potentionmeter)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port)
    };
    return _this;
  }

  (0, _createClass3.default)(Potentionmeter, [{
    key: 'getData',
    value: function getData(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readPotentionmeter, [this.args.port]);
      _commandManager2.default.read(buf, callback);
      return this;
    }
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
/* 155 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Joystick = function (_Electronic) {
  (0, _inherits3.default)(Joystick, _Electronic);

  function Joystick(port) {
    (0, _classCallCheck3.default)(this, Joystick);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Joystick.__proto__ || (0, _getPrototypeOf2.default)(Joystick)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port),
      axis: 1
    };
    return _this;
  }

  (0, _createClass3.default)(Joystick, [{
    key: 'axis',
    value: function axis(_axis) {
      this.args.axis = (0, _type.defineNumber)(_axis, this.args.axis);
      return this;
    }
  }, {
    key: 'getData',
    value: function getData(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readJoystick, [this.args.port, this.args.axis]);
      _commandManager2.default.read(buf, callback);
      return this;
    }
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _BaseGyro2 = __webpack_require__(67);

var _BaseGyro3 = _interopRequireDefault(_BaseGyro2);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Gyro = function (_BaseGyro) {
  (0, _inherits3.default)(Gyro, _BaseGyro);

  function Gyro(port) {
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _BaseGyro2 = __webpack_require__(67);

var _BaseGyro3 = _interopRequireDefault(_BaseGyro2);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GyroOnBoard = function (_BaseGyro) {
  (0, _inherits3.default)(GyroOnBoard, _BaseGyro);

  function GyroOnBoard() {
    (0, _classCallCheck3.default)(this, GyroOnBoard);
    return (0, _possibleConstructorReturn3.default)(this, (GyroOnBoard.__proto__ || (0, _getPrototypeOf2.default)(GyroOnBoard)).call(this, 1));
  }

  (0, _createClass3.default)(GyroOnBoard, null, [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '0110';
    }
  }]);
  return GyroOnBoard;
}(_BaseGyro3.default);

exports.default = GyroOnBoard;

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

var _BaseSound2 = __webpack_require__(68);

var _BaseSound3 = _interopRequireDefault(_BaseSound2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sound = function (_BaseSound) {
  (0, _inherits3.default)(Sound, _BaseSound);

  function Sound(port) {
    (0, _classCallCheck3.default)(this, Sound);
    return (0, _possibleConstructorReturn3.default)(this, (Sound.__proto__ || (0, _getPrototypeOf2.default)(Sound)).call(this, port));
  }

  (0, _createClass3.default)(Sound, null, [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return Sound;
}(_BaseSound3.default);

exports.default = Sound;

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

var _BaseSound2 = __webpack_require__(68);

var _BaseSound3 = _interopRequireDefault(_BaseSound2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SoundOnBoard = function (_BaseSound) {
  (0, _inherits3.default)(SoundOnBoard, _BaseSound);

  function SoundOnBoard() {
    (0, _classCallCheck3.default)(this, SoundOnBoard);
    return (0, _possibleConstructorReturn3.default)(this, (SoundOnBoard.__proto__ || (0, _getPrototypeOf2.default)(SoundOnBoard)).call(this, 14));
  }

  (0, _createClass3.default)(SoundOnBoard, null, [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '0100';
    }
  }]);
  return SoundOnBoard;
}(_BaseSound3.default);

exports.default = SoundOnBoard;

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

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TemperatureOnBoard = function (_Electronic) {
  (0, _inherits3.default)(TemperatureOnBoard, _Electronic);

  function TemperatureOnBoard() {
    (0, _classCallCheck3.default)(this, TemperatureOnBoard);
    return (0, _possibleConstructorReturn3.default)(this, (TemperatureOnBoard.__proto__ || (0, _getPrototypeOf2.default)(TemperatureOnBoard)).call(this));
  }

  (0, _createClass3.default)(TemperatureOnBoard, [{
    key: 'getData',
    value: function getData(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readTemperatureOnBoard);
      _commandManager2.default.read(buf, callback);
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

/***/ }),
/* 161 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pirmotion = function (_Electronic) {
  (0, _inherits3.default)(Pirmotion, _Electronic);

  function Pirmotion(port) {
    (0, _classCallCheck3.default)(this, Pirmotion);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Pirmotion.__proto__ || (0, _getPrototypeOf2.default)(Pirmotion)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port)
    };
    return _this;
  }

  (0, _createClass3.default)(Pirmotion, [{
    key: 'getData',
    value: function getData(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readPirmotion, [this.args.port]);
      _commandManager2.default.read(buf, callback);
      return this;
    }
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
/* 162 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LimitSwitch = function (_Electronic) {
  (0, _inherits3.default)(LimitSwitch, _Electronic);

  function LimitSwitch(port, slot) {
    (0, _classCallCheck3.default)(this, LimitSwitch);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LimitSwitch.__proto__ || (0, _getPrototypeOf2.default)(LimitSwitch)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port),
      slot: (0, _type.defineNumber)(slot)
    };
    return _this;
  }

  (0, _createClass3.default)(LimitSwitch, [{
    key: 'getData',
    value: function getData(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readLimitSwitch, [this.args.port, this.args.slot]);
      _commandManager2.default.read(buf, callback);
      return this;
    }
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
/* 163 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LineFollower = function (_Electronic) {
  (0, _inherits3.default)(LineFollower, _Electronic);

  function LineFollower(port) {
    (0, _classCallCheck3.default)(this, LineFollower);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LineFollower.__proto__ || (0, _getPrototypeOf2.default)(LineFollower)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port)
    };
    return _this;
  }

  (0, _createClass3.default)(LineFollower, [{
    key: 'getData',
    value: function getData(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readLineFollower, [this.args.port]);
      _commandManager2.default.read(buf, callback);
      return this;
    }
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
/* 164 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Compass = function (_Electronic) {
  (0, _inherits3.default)(Compass, _Electronic);

  function Compass(port) {
    (0, _classCallCheck3.default)(this, Compass);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Compass.__proto__ || (0, _getPrototypeOf2.default)(Compass)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port)
    };
    return _this;
  }

  (0, _createClass3.default)(Compass, [{
    key: 'getData',
    value: function getData(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readCompass, [this.args.port]);
      _commandManager2.default.read(buf, callback);
      return this;
    }
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
/* 165 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commandRead = function commandRead(args, callback) {
  var buf = _utils2.default.composer(_cmd2.default.readHumiture, [args.port, args.type]);
  _commandManager2.default.read(buf, callback);
};

var Humiture = function (_Electronic) {
  (0, _inherits3.default)(Humiture, _Electronic);

  function Humiture(port) {
    (0, _classCallCheck3.default)(this, Humiture);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Humiture.__proto__ || (0, _getPrototypeOf2.default)(Humiture)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port),
      type: 0
    };
    return _this;
  }

  (0, _createClass3.default)(Humiture, [{
    key: 'getHumidity',
    value: function getHumidity(callback) {
      this.args.type = 0;
      commandRead(this.args, callback);
      return this;
    }
  }, {
    key: 'getTemperature',
    value: function getTemperature(callback) {
      this.args.type = 1;
      commandRead(this.args, callback);
      return this;
    }
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
/* 166 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flame = function (_Electronic) {
  (0, _inherits3.default)(Flame, _Electronic);

  function Flame(port) {
    (0, _classCallCheck3.default)(this, Flame);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Flame.__proto__ || (0, _getPrototypeOf2.default)(Flame)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port)
    };
    return _this;
  }

  (0, _createClass3.default)(Flame, [{
    key: 'getData',
    value: function getData(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readFlame, [this.args.port]);
      _commandManager2.default.read(buf, callback);
      return this;
    }
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
/* 167 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Gas = function (_Electronic) {
  (0, _inherits3.default)(Gas, _Electronic);

  function Gas(port) {
    (0, _classCallCheck3.default)(this, Gas);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Gas.__proto__ || (0, _getPrototypeOf2.default)(Gas)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port)
    };
    return _this;
  }

  (0, _createClass3.default)(Gas, [{
    key: 'getData',
    value: function getData(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readGas, [this.args.port]);
      _commandManager2.default.read(buf, callback);
      return this;
    }
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Touch = function (_Electronic) {
  (0, _inherits3.default)(Touch, _Electronic);

  function Touch(port) {
    (0, _classCallCheck3.default)(this, Touch);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Touch.__proto__ || (0, _getPrototypeOf2.default)(Touch)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port)
    };
    return _this;
  }

  (0, _createClass3.default)(Touch, [{
    key: 'getData',
    value: function getData(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readTouch, [this.args.port]);
      _commandManager2.default.read(buf, callback);
      return this;
    }
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FourKeys = function (_Electronic) {
  (0, _inherits3.default)(FourKeys, _Electronic);

  function FourKeys(port) {
    (0, _classCallCheck3.default)(this, FourKeys);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FourKeys.__proto__ || (0, _getPrototypeOf2.default)(FourKeys)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port),
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
      this.args.key = (0, _type.defineNumber)(index, this.args.key);
      return this;
    }
  }, {
    key: 'getData',
    value: function getData(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readFourKeys, [this.args.port, this.args.key]);
      _commandManager2.default.read(buf, callback);
      return this;
    }
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DigGPIO = function (_Electronic) {
  (0, _inherits3.default)(DigGPIO, _Electronic);

  function DigGPIO(port) {
    (0, _classCallCheck3.default)(this, DigGPIO);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DigGPIO.__proto__ || (0, _getPrototypeOf2.default)(DigGPIO)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port)
    };
    return _this;
  }

  (0, _createClass3.default)(DigGPIO, [{
    key: 'getData',
    value: function getData(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readDigGPIO, [this.args.port]);
      _commandManager2.default.read(buf, callback);
      return this;
    }
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AnalogGPIO = function (_Electronic) {
  (0, _inherits3.default)(AnalogGPIO, _Electronic);

  function AnalogGPIO(port) {
    (0, _classCallCheck3.default)(this, AnalogGPIO);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AnalogGPIO.__proto__ || (0, _getPrototypeOf2.default)(AnalogGPIO)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port)
    };
    return _this;
  }

  (0, _createClass3.default)(AnalogGPIO, [{
    key: 'getData',
    value: function getData(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readAnalogGPIO, [this.args.port]);
      _commandManager2.default.read(buf, callback);
      return this;
    }
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GPIOContinue = function (_Electronic) {
  (0, _inherits3.default)(GPIOContinue, _Electronic);

  function GPIOContinue(port, key) {
    (0, _classCallCheck3.default)(this, GPIOContinue);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GPIOContinue.__proto__ || (0, _getPrototypeOf2.default)(GPIOContinue)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port),
      key: (0, _type.defineNumber)(key)
    };
    return _this;
  }

  (0, _createClass3.default)(GPIOContinue, [{
    key: 'getData',
    value: function getData(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readGPIOContinue, [this.args.port, this.args.key]);
      _commandManager2.default.read(buf, callback);
      return this;
    }
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
/* 173 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DoubleGPIO = function (_Electronic) {
  (0, _inherits3.default)(DoubleGPIO, _Electronic);

  function DoubleGPIO(port1, port2) {
    (0, _classCallCheck3.default)(this, DoubleGPIO);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DoubleGPIO.__proto__ || (0, _getPrototypeOf2.default)(DoubleGPIO)).call(this));

    _this.args = {
      port1: (0, _type.defineNumber)(port1),
      port2: (0, _type.defineNumber)(port2)
    };
    return _this;
  }

  (0, _createClass3.default)(DoubleGPIO, [{
    key: 'getData',
    value: function getData(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readDoubleGPIO, [this.args.port1, this.args.port2]);
      _commandManager2.default.read(buf, callback);
      return this;
    }
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
/* 174 */
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

var _type = __webpack_require__(8);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(7);

var _cmd2 = _interopRequireDefault(_cmd);

var _commandManager = __webpack_require__(6);

var _commandManager2 = _interopRequireDefault(_commandManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Runtime = function (_Electronic) {
  (0, _inherits3.default)(Runtime, _Electronic);

  function Runtime() {
    (0, _classCallCheck3.default)(this, Runtime);
    return (0, _possibleConstructorReturn3.default)(this, (Runtime.__proto__ || (0, _getPrototypeOf2.default)(Runtime)).call(this));
  }

  (0, _createClass3.default)(Runtime, [{
    key: 'getData',
    value: function getData(callback) {
      var buf = _utils2.default.composer(_cmd2.default.readRuntime);
      _commandManager2.default.read(buf, callback);
      return this;
    }
  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '00001';
    }
  }]);
  return Runtime;
}(_electronic2.default);

exports.default = Runtime;

/***/ }),
/* 175 */
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

var _Board2 = __webpack_require__(32);

var _Board3 = _interopRequireDefault(_Board2);

var _index = __webpack_require__(33);

var _index2 = _interopRequireDefault(_index);

var _version = __webpack_require__(28);

var _version2 = _interopRequireDefault(_version);

var _settings = __webpack_require__(15);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//支持位置
var SUPPORT_INDEX = _settings2.default.SUPPORTLIST.indexOf('Orion');

//实现一个板子就注册一个板子名称

var Orion = function (_Board) {
  (0, _inherits3.default)(Orion, _Board);

  function Orion(conf) {
    (0, _classCallCheck3.default)(this, Orion);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Orion.__proto__ || (0, _getPrototypeOf2.default)(Orion)).call(this, conf));
    //继承 Board


    var this_ = _this;
    //固件版本
    _this.version = null;
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
   * 获取版本号，所有主控板支持
   * @param  {!Function} callback
   */


  (0, _createClass3.default)(Orion, [{
    key: 'getVersion',
    value: function getVersion(callback) {
      var this_ = this;
      if (this.version) {
        typeof callback == 'function' && callback(this.version);
      } else {
        _version2.default.getVersion(function (val) {
          this_.version = val;
          typeof callback == 'function' && this.version;
        });
      }
    }
  }]);
  return Orion;
}(_Board3.default);

exports.default = Orion;

/***/ }),
/* 176 */
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

var _Board2 = __webpack_require__(32);

var _Board3 = _interopRequireDefault(_Board2);

var _index = __webpack_require__(33);

var _index2 = _interopRequireDefault(_index);

var _mode = __webpack_require__(69);

var _mode2 = _interopRequireDefault(_mode);

var _version = __webpack_require__(28);

var _version2 = _interopRequireDefault(_version);

var _settings = __webpack_require__(15);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//支持位置
var SUPPORT_INDEX = _settings2.default.SUPPORTLIST.indexOf('Auriga');

var Auriga = function (_Board) {
  (0, _inherits3.default)(Auriga, _Board);

  function Auriga(conf) {
    (0, _classCallCheck3.default)(this, Auriga);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Auriga.__proto__ || (0, _getPrototypeOf2.default)(Auriga)).call(this, conf));

    var this_ = _this;
    //主控板名
    _this.name = 'Auriga';
    //固件当前模式
    _this.currentMode = null;
    //固件版本
    _this.version = null;
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
   * 获取版本号，所有主控板支持
   * @param  {!Function} callback
   */


  (0, _createClass3.default)(Auriga, [{
    key: 'getVersion',
    value: function getVersion(callback) {
      var this_ = this;
      if (this.version) {
        typeof callback == 'function' && callback(this.version);
      } else {
        _version2.default.getVersion(function (val) {
          this_.version = val;
          typeof callback == 'function' && this.version;
        });
      }
    }

    /**
     * 设置固件模式
     * @param {Number} mode 0、1、2、3、4
     */

  }, {
    key: 'setFirmwareMode',
    value: function setFirmwareMode(mode) {
      var subCmd = 0x11;
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
    value: function getFirmwareMode(callback) {
      var subCmd = 0x71;
      _mode2.default.getMode(subCmd, callback);
      return this;
    }

    /**
     * 获取固件电压
     * @param  {Function} callback 取值后回调函数
     */

  }, {
    key: 'getVoltage',
    value: function getVoltage(callback) {
      var subCmd = 0x70;
      _mode2.default.getMode(subCmd, callback);
      return this;
    }
  }]);
  return Auriga;
}(_Board3.default);

exports.default = Auriga;

/***/ }),
/* 177 */
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

var _Board2 = __webpack_require__(32);

var _Board3 = _interopRequireDefault(_Board2);

var _index = __webpack_require__(33);

var _index2 = _interopRequireDefault(_index);

var _mode = __webpack_require__(69);

var _mode2 = _interopRequireDefault(_mode);

var _version = __webpack_require__(28);

var _version2 = _interopRequireDefault(_version);

var _settings = __webpack_require__(15);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//支持位置
var SUPPORT_INDEX = _settings2.default.SUPPORTLIST.indexOf('MegaPi');

//实现一个板子就注册一个板子名称

var MegaPi = function (_Board) {
  (0, _inherits3.default)(MegaPi, _Board);

  function MegaPi(conf) {
    (0, _classCallCheck3.default)(this, MegaPi);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MegaPi.__proto__ || (0, _getPrototypeOf2.default)(MegaPi)).call(this, conf));
    //继承 Board


    var this_ = _this;
    //固件当前模式
    _this.currentMode = null;
    //固件版本
    _this.version = null;
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
   * 获取版本号，所有主控板支持
   * @param  {!Function} callback
   */


  (0, _createClass3.default)(MegaPi, [{
    key: 'getVersion',
    value: function getVersion(callback) {
      var this_ = this;
      if (this.version) {
        typeof callback == 'function' && callback(this.version);
      } else {
        _version2.default.getVersion(function (val) {
          this_.version = val;
          typeof callback == 'function' && this.version;
        });
      }
    }

    /**
     * 设置固件模式
     * @param {Number} mode 0、1、2、3、4
     */

  }, {
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
    value: function getFirmwareMode(callback) {
      var subCmd = 0x72;
      _mode2.default.getMode(subCmd, callback);
      return this;
    }
  }]);
  return MegaPi;
}(_Board3.default);

exports.default = MegaPi;

/***/ })
/******/ ]);
});
//# sourceMappingURL=sensorium.js.map