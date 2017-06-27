/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 163);
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

module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(118);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(115);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(31);

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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(31);

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

var _defineProperty = __webpack_require__(116);

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(30);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = __webpack_require__(31);

var _typeof3 = _interopRequireDefault(_typeof2);

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

  getSecurityValue: function getSecurityValue(val1, val2, type) {
    return (typeof val1 === "undefined" ? "undefined" : (0, _typeof3.default)(val1)) === type ? val1 : val2;
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

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _transport = __webpack_require__(63);

var _transport2 = _interopRequireDefault(_transport);

var _readControl = __webpack_require__(164);

var _readControl2 = _interopRequireDefault(_readControl);

var _writeControl = __webpack_require__(165);

var _writeControl2 = _interopRequireDefault(_writeControl);

var _parse = __webpack_require__(122);

var _parse2 = _interopRequireDefault(_parse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileOverview 调度类
 * 负责协议收发调度
 */
//es6 module
var Command = function () {
  function Command() {
    (0, _classCallCheck3.default)(this, Command);
  }
  /**
   * execute buffer
   * @param  {Array} buf [description]
   * @return {[type]}     [description]
   */


  (0, _createClass3.default)(Command, [{
    key: 'exec',
    value: function exec(buf) {
      // console.log(buf);
      _transport2.default.send(buf); //借助通信管道发送
    }

    /**
     * an api to execute write
     * @param  {[type]}   buf      [description]
     * @return {[type]}            [description]
     */

  }, {
    key: 'execWrite',
    value: function execWrite(buf) {
      _writeControl2.default.addRequest(this.exec.bind(this), buf);
    }

    /**
     * an api to execute read
     * @param  {[type]}   buf      [description]
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */

  }, {
    key: 'execRead',
    value: function execRead(buf, callback) {
      _readControl2.default.addRequest(this.exec.bind(this), buf, callback);
      //TODO: 谨慎执行超时重发
    }

    /**
     * parse the buffer and callback
     * @param  {Array} buff buffer responsed from transportion
     * @return {Undefined}
     */

  }, {
    key: 'pipe',
    value: function pipe(buff) {
      var buffer = _parse2.default.doParse(buff);
      if (!buffer) {//一次失败的解析
        //do nothing
      } else if (buffer.length == 0) {//write 结果
        //do nothing
      } else {
        //read 结果
        var index = buffer[0];
        var value = _parse2.default.getResult(buffer);
        this.emitCallback(index, value);
      }
    }
  }, {
    key: 'emitCallback',
    value: function emitCallback(index, value) {
      _readControl2.default.callbackProxy.apply(_readControl2.default, arguments);
    }
  }]);
  return Command;
}();

exports.default = new Command();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineObject = exports.defineBoolean = exports.defineArray = exports.defineString = exports.defineNumber = undefined;

var _typeof2 = __webpack_require__(31);

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
/* 8 */
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
  //TO COMFIRM: 缺少一个 angle
  // this.setEncoderMotorOnBoard = function(slot, speed) {
  //   let port = 0x00;
  //   speed = Utils.limitValue(speed);
  //   return bufAssembler({mode: 0x02, id: 0x3d}, port, slot, speed & 0xff, (speed >> 8) & 0xff);
  // };

  /**
   * Set encoder motor speed.
   * @param {number} slot  slot number, vailable is: 1,2
   * @param {number} speed speed, the range is -255 ~ 255
   * @example
   *     ff 55 07 00 02 3d 00 01 64 00
   */
  this.setEncoderMotorOnBoard = function (slot, speed, angle) {
    var port = 0x00; //板载 port 为 0
    return this.setEncoderMotor(port, slot, speed, angle);
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
   * @param {number} turnDegree turn extend, -255 ~ 255
   * @param {number} speed      speed, -255 ~ 255
   * @example
   *     ff 55 08 00 02 34 00 64 00 64 00
   */
  this.setVirtualJoystickForBalance = function (turnExtent, speed) {
    turnExtent = _utils2.default.limitValue(turnExtent);
    speed = _utils2.default.limitValue(speed);
    port = 0; //板载虚拟摇杆 port = 00
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
  this.setFirmwareMode = function (mode) {
    var sub = 0x11; // 0x11 means Auriga模式
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
    // byte4Array[0],
    // byte4Array[1],
    // byte4Array[2],
    // byte4Array[3]);
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
    // byte4Array[0],
    // byte4Array[1],
    // byte4Array[2],
    // byte4Array[3]);
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
    var BEAT = {
      eight: 125,
      quater: 250,
      half: 500,
      one: 1000,
      double: 2000
    };

    return bufAssembler({ mode: 0x02, id: 0x22 }, 0x09, TONE[tone] & 0xff, TONE[tone] >> 8 & 0xff, BEAT[beat] & 0xff, BEAT[beat] >> 8 & 0xff);
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
    // var a = [
    //   0xff,0x55,
    //   0x05, index,
    //   0x01,
    //   0x16,
    //   port,
    //   key
    // ];
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
   * read firmware mode or voltage.
   * @param  {Number} index [description]
   * @param  {Number} type  0x70: 电压; 0x71: 模式
   * @example
   * ff 55 04 00 01 3c 70
   */
  this.readFirmwareMode = function (index, type) {
    return bufAssembler({ mode: 0x01, id: 0x3c }, type);
  };

  /**
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: digit GPOI port
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 1e 09
   */
  this.readDigGPIO = function (port) {
    // var a = [
    //   0xff,0x55,
    //   0x04, index,
    //   0x01,
    //   0x1e,
    //   port,
    // ];
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
    // var a = [
    //   0xff,0x55,
    //   0x04, index,
    //   0x01,
    //   0x1f,
    //   port,
    // ];
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
    // var a = [
    //   0xff,0x55,
    //   0x05, index,
    //   0x01,
    //   0x25,
    //   port,
    //   key,
    // ];
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
    // var a = [
    //   0xff,0x55,
    //   0x05, index,
    //   0x01,
    //   0x24,
    //   port1,
    //   port2,
    // ];
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
    // var a = [
    //   0xff,0x55,
    //   0x03, index,
    //   0x01,
    //   0x32,
    // ];
    return bufAssembler({ mode: 0x01, id: 0x32 });
  };

  // this.readOntransportButton = function(index) {
  //   var a = [
  //     0xff,0x55,
  //     0x03, index,
  //     0x01,
  //     0x32,
  //   ];
  //   return transport.send(a);
  // };
}

exports.default = new protocolAssembler();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
  // port = defineNumber(port);
  // slot = defineNumber(slot);
  // let id = this.constructor.name + '_' + port + '_' + slot;
  // let api = new Api(Transport.get());
  // if(id in POOL) {
  //   return POOL[id];
  // } else {
  //   this.port = port;
  //   this.slot = slot;
  //   this.api = api;
  //   POOL[id] = this;
  //   return this;
  // }

  (0, _classCallCheck3.default)(this, Electronic);
};

module.exports = Electronic;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(45)('wks')
  , uid        = __webpack_require__(29)
  , Symbol     = __webpack_require__(13).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(13)
  , core      = __webpack_require__(10)
  , ctx       = __webpack_require__(37)
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
/* 13 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(19)
  , IE8_DOM_DEFINE = __webpack_require__(52)
  , toPrimitive    = __webpack_require__(47)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(16) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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

module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(20)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(53)
  , defined = __webpack_require__(38);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(23);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(14)
  , createDesc = __webpack_require__(25);
module.exports = __webpack_require__(16) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(58)
  , enumBugKeys = __webpack_require__(39);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(38);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Settings = {
    // 数据发送与接收相关
    // 回复数据的index位置
    READ_BYTES_INDEX: 2,
    // 数据发送默认的驱动driver: makeblockhd, cordova
    DEFAULT_CONF: {},
    SUPPORTLIST: ['Mcore', 'Auriga', 'MegaPi', 'Orion', 'Arduino', 'Neuron']
};

exports.default = Settings;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

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

var _from = __webpack_require__(114);

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(120);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(119);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(15);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _toConsumableArray2 = __webpack_require__(30);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _transport = __webpack_require__(63);

var _transport2 = _interopRequireDefault(_transport);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

var _settings = __webpack_require__(27);

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
//es6 module

var Board = function () {
  function Board(conf) {
    (0, _classCallCheck3.default)(this, Board);

    this._config = null;
    //连接
    this.connecting = {};
    this.init(conf);
  }

  (0, _createClass3.default)(Board, [{
    key: 'init',
    value: function init(conf) {
      this._config = (0, _assign2.default)(_settings2.default.DEFAULT_CONF, conf || {});
      this.setTransport(this._config.transport || {});
    }

    /**
     * 电子模块实例工厂
     * @param  {Function} eModule 电子模块类
     * @param  {Array-Like} args    [port, slot, id...]
     * @return {Object}         电子模块实例
     */

  }, {
    key: 'eModuleFactory',
    value: function eModuleFactory(eModule, args) {
      var id = createModuleId(eModule, args);
      if (this.connecting[id]) {
        return this.connecting[id];
      } else {
        var emodule = new (Function.prototype.bind.apply(eModule, [null].concat((0, _toConsumableArray3.default)(args))))();
        // 保存模块
        this.connecting[id] = emodule;
        return emodule;
      }
    }

    /**
     * 存储通信的通道
     * @param {Object} transport json object.
     * @example
     * {
     *    send: function(buf) {
     *      console.log(buf);
     *    },
     *
     *    onReceive: function(parse) {
     *      serialPort.on('data', function(buff) {
     *        parse.doParse(buff);
     *      });
     *    }
     *  }
     */
    //防止重复 setTransport 导致事件监听绑定多次

  }, {
    key: 'setTransport',
    value: function setTransport(transport) {
      if (transport && typeof transport.send == 'function' && typeof transport.addListener == 'function') {
        _transport2.default.send = transport.send;
        transport.addListener(_command2.default);
      } else {
        // console.warn('')
      }
    }
  }]);
  return Board;
}();

// module.exports = Board;


exports.default = Board;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LedMatrixBase = function (_Electronic) {
  (0, _inherits3.default)(LedMatrixBase, _Electronic);

  /**
   * LedMatrix 类，led模块
   */
  function LedMatrixBase(port) {
    (0, _classCallCheck3.default)(this, LedMatrixBase);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LedMatrixBase.__proto__ || (0, _getPrototypeOf2.default)(LedMatrixBase)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port)
    };
    return _this;
  }

  return LedMatrixBase;
}(_electronic2.default);

exports.default = LedMatrixBase;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _toConsumableArray2 = __webpack_require__(30);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bufComposer = function bufComposer(obj) {
  var args = [obj.port, obj.slot, obj.ledPosition].concat((0, _toConsumableArray3.default)(obj.rgb));
  return _utils2.default.composer(_cmd2.default.setLed, args);
};

var RgbLedBase = function (_Electronic) {
  (0, _inherits3.default)(RgbLedBase, _Electronic);

  /**
   * RgbLed类，led模块
   * @param {number} port - led port口
   * @param {number} position - led灯的位置
   */
  function RgbLedBase(port, slot) {
    (0, _classCallCheck3.default)(this, RgbLedBase);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RgbLedBase.__proto__ || (0, _getPrototypeOf2.default)(RgbLedBase)).call(this));

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


  (0, _createClass3.default)(RgbLedBase, [{
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
    value: function turnOn(position) {
      this.args.position(position);
      //组装协议
      var buf = bufComposer(this.args);
      //执行
      _command2.default.execWrite(buf);
      return this;
    }

    /**
     * turn off led
     * @param {number} position
     */

  }, {
    key: 'turnOff',
    value: function turnOff(position) {
      this.args.position(position);
      this.args.rgb = [0, 0, 0];
      //组装协议
      var buf = bufComposer(this.args);
      //执行
      _command2.default.execWrite(buf);
      return this;
    }

    /**
     * turn on all the leds
     */

  }, {
    key: 'turnOnAll',
    value: function turnOnAll() {
      return this.turnOn(0);
    }

    /**
     * turn off all the leds
     */

  }, {
    key: 'turnOnAll',
    value: function turnOnAll() {
      return this.turnOff(0);
    }

    /**
     * LED亮红色灯光
     */

  }, {
    key: 'red',
    value: function red() {
      this.args.rgb = [255, 0, 0];
      //组装协议
      var buf = bufComposer(this.args);
      //执行
      _command2.default.execWrite(buf);
      return this;
    }

    /**
     * LED亮绿色灯光
     */

  }, {
    key: 'green',
    value: function green() {
      this.args.rgb = [0, 255, 0];
      //组装协议
      var buf = bufComposer(this.args);
      //执行
      _command2.default.execWrite(buf);
      return this;
    }

    /**
     * LED亮蓝色灯光
     */

  }, {
    key: 'blue',
    value: function blue() {
      this.args.rgb = [0, 0, 255];
      //组装协议
      var buf = bufComposer(this.args);
      //执行
      _command2.default.execWrite(buf);
      return this;
    }
  }]);
  return RgbLedBase;
}(_electronic2.default);

exports.default = RgbLedBase;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dc_motor = __webpack_require__(127);

var _dc_motor2 = _interopRequireDefault(_dc_motor);

var _stepper_motor = __webpack_require__(157);

var _stepper_motor2 = _interopRequireDefault(_stepper_motor);

var _encoder_motor = __webpack_require__(130);

var _encoder_motor2 = _interopRequireDefault(_encoder_motor);

var _encoder_motor_on_board = __webpack_require__(131);

var _encoder_motor_on_board2 = _interopRequireDefault(_encoder_motor_on_board);

var _servo_motor = __webpack_require__(153);

var _servo_motor2 = _interopRequireDefault(_servo_motor);

var _four_led = __webpack_require__(134);

var _four_led2 = _interopRequireDefault(_four_led);

var _rgb_led = __webpack_require__(150);

var _rgb_led2 = _interopRequireDefault(_rgb_led);

var _led_panel_on_board = __webpack_require__(143);

var _led_panel_on_board2 = _interopRequireDefault(_led_panel_on_board);

var _rgb_led_on_board = __webpack_require__(151);

var _rgb_led_on_board2 = _interopRequireDefault(_rgb_led_on_board);

var _led_matrix_char = __webpack_require__(139);

var _led_matrix_char2 = _interopRequireDefault(_led_matrix_char);

var _led_matrix_time = __webpack_require__(142);

var _led_matrix_time2 = _interopRequireDefault(_led_matrix_time);

var _led_matrix_emotion = __webpack_require__(140);

var _led_matrix_emotion2 = _interopRequireDefault(_led_matrix_emotion);

var _led_matrix_number = __webpack_require__(141);

var _led_matrix_number2 = _interopRequireDefault(_led_matrix_number);

var _buzzer = __webpack_require__(125);

var _buzzer2 = _interopRequireDefault(_buzzer);

var _seven_segment = __webpack_require__(154);

var _seven_segment2 = _interopRequireDefault(_seven_segment);

var _shutter = __webpack_require__(155);

var _shutter2 = _interopRequireDefault(_shutter);

var _reset = __webpack_require__(149);

var _reset2 = _interopRequireDefault(_reset);

var _version = __webpack_require__(162);

var _version2 = _interopRequireDefault(_version);

var _ultrasonic = __webpack_require__(161);

var _ultrasonic2 = _interopRequireDefault(_ultrasonic);

var _temperature = __webpack_require__(158);

var _temperature2 = _interopRequireDefault(_temperature);

var _light = __webpack_require__(144);

var _light2 = _interopRequireDefault(_light);

var _potentionmeter = __webpack_require__(148);

var _potentionmeter2 = _interopRequireDefault(_potentionmeter);

var _joystick = __webpack_require__(138);

var _joystick2 = _interopRequireDefault(_joystick);

var _gyro = __webpack_require__(136);

var _gyro2 = _interopRequireDefault(_gyro);

var _sound = __webpack_require__(156);

var _sound2 = _interopRequireDefault(_sound);

var _temperature_on_board = __webpack_require__(159);

var _temperature_on_board2 = _interopRequireDefault(_temperature_on_board);

var _pirmotion = __webpack_require__(147);

var _pirmotion2 = _interopRequireDefault(_pirmotion);

var _line_follower = __webpack_require__(146);

var _line_follower2 = _interopRequireDefault(_line_follower);

var _limit_switch = __webpack_require__(145);

var _limit_switch2 = _interopRequireDefault(_limit_switch);

var _compass = __webpack_require__(126);

var _compass2 = _interopRequireDefault(_compass);

var _humiture = __webpack_require__(137);

var _humiture2 = _interopRequireDefault(_humiture);

var _flame = __webpack_require__(132);

var _flame2 = _interopRequireDefault(_flame);

var _gas = __webpack_require__(135);

var _gas2 = _interopRequireDefault(_gas);

var _touch = __webpack_require__(160);

var _touch2 = _interopRequireDefault(_touch);

var _four_keys = __webpack_require__(133);

var _four_keys2 = _interopRequireDefault(_four_keys);

var _dig_GPIO = __webpack_require__(128);

var _dig_GPIO2 = _interopRequireDefault(_dig_GPIO);

var _analog_GPIO = __webpack_require__(124);

var _analog_GPIO2 = _interopRequireDefault(_analog_GPIO);

var _GPIO_continue = __webpack_require__(123);

var _GPIO_continue2 = _interopRequireDefault(_GPIO_continue);

var _double_GPIO = __webpack_require__(129);

var _double_GPIO2 = _interopRequireDefault(_double_GPIO);

var _runtime = __webpack_require__(152);

var _runtime2 = _interopRequireDefault(_runtime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//包含读值和写的接口
exports.default = {
  DcMotor: _dc_motor2.default,
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

  Reset: _reset2.default, //实现待验证
  Version: _version2.default, //实现待验证
  Ultrasonic: _ultrasonic2.default,
  Temperature: _temperature2.default,
  Light: _light2.default,
  Potentionmeter: _potentionmeter2.default,
  Joystick: _joystick2.default,
  Gyro: _gyro2.default,
  Sound: _sound2.default,
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
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(79);
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
/* 38 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(19)
  , dPs         = __webpack_require__(95)
  , enumBugKeys = __webpack_require__(39)
  , IE_PROTO    = __webpack_require__(44)('IE_PROTO')
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
  __webpack_require__(85).appendChild(iframe);
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
/* 42 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(14).f
  , has = __webpack_require__(17)
  , TAG = __webpack_require__(11)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(45)('keys')
  , uid    = __webpack_require__(29);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
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

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(23);
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(13)
  , core           = __webpack_require__(10)
  , LIBRARY        = __webpack_require__(40)
  , wksExt         = __webpack_require__(49)
  , defineProperty = __webpack_require__(14).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(11);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MotorBase = function (_Electronic) {
  (0, _inherits3.default)(MotorBase, _Electronic);

  /**
   * Motor base class
   * @constructor
   * @param {number} port
   * @param {number} slot
   */
  function MotorBase(port, slot) {
    (0, _classCallCheck3.default)(this, MotorBase);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MotorBase.__proto__ || (0, _getPrototypeOf2.default)(MotorBase)).call(this));

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


  (0, _createClass3.default)(MotorBase, [{
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
      this.speed(0);
      this.run();
      return this;
    }
  }]);
  return MotorBase;
}(_electronic2.default);

exports.default = MotorBase;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(23)
  , document = __webpack_require__(13).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(16) && !__webpack_require__(20)(function(){
  return Object.defineProperty(__webpack_require__(51)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(36);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(40)
  , $export        = __webpack_require__(12)
  , redefine       = __webpack_require__(60)
  , hide           = __webpack_require__(21)
  , has            = __webpack_require__(17)
  , Iterators      = __webpack_require__(24)
  , $iterCreate    = __webpack_require__(89)
  , setToStringTag = __webpack_require__(43)
  , getPrototypeOf = __webpack_require__(57)
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(28)
  , createDesc     = __webpack_require__(25)
  , toIObject      = __webpack_require__(18)
  , toPrimitive    = __webpack_require__(47)
  , has            = __webpack_require__(17)
  , IE8_DOM_DEFINE = __webpack_require__(52)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(16) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(58)
  , hiddenKeys = __webpack_require__(39).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(17)
  , toObject    = __webpack_require__(26)
  , IE_PROTO    = __webpack_require__(44)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(17)
  , toIObject    = __webpack_require__(18)
  , arrayIndexOf = __webpack_require__(81)(false)
  , IE_PROTO     = __webpack_require__(44)('IE_PROTO');

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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(12)
  , core    = __webpack_require__(10)
  , fails   = __webpack_require__(20);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(46)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(98)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(54)(String, 'String', function(iterated){
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serialport = __webpack_require__(193);

var _serialport2 = _interopRequireDefault(_serialport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const serialport = require('serialport');

//单例
var Transport = {
  send: function send(buf) {
    console.log('transport send: ', buf);
    _serialport2.default.send(buf);
  },

  //old name is onReceive
  addListener: function addListener(pipe) {
    _serialport2.default.on('data', function (buff) {
      console.log(buff);
      pipe(buff);
    });
    // ble.startListenReceivedData(function(buff){
    //   pipe(buff);
    // }, function(){
    //   console.log('failure');
    // });
  }
}; /**
    * @fileOverview 存储指令的传输通道：蓝牙，串口，2.4G等，一个单例。
    */
//eg.
exports.default = Transport;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(15);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _MotorBase2 = __webpack_require__(50);

var _MotorBase3 = _interopRequireDefault(_MotorBase2);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EncoderMotorBase = function (_MotorBase) {
  (0, _inherits3.default)(EncoderMotorBase, _MotorBase);

  /**
   * EncoderMotorBase
   * @constructor
   * @param {number} port
   */
  function EncoderMotorBase(port, slot) {
    (0, _classCallCheck3.default)(this, EncoderMotorBase);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EncoderMotorBase.__proto__ || (0, _getPrototypeOf2.default)(EncoderMotorBase)).call(this, port, slot));

    (0, _assign2.default)(_this.args, {
      angle: 0
    });
    return _this;
  }

  /**
   * set angle offset to last angle position
   * @param  {[type]} angle [description]
   * @return {[type]}       [description]
   */


  (0, _createClass3.default)(EncoderMotorBase, [{
    key: 'offsetAngle',
    value: function offsetAngle(angle) {
      this.args.angle = (0, _type.defineNumber)(angle, 0);
      return this;
    }

    /**
     * dcMoter run
     * @return {Object} the instance
     */

  }, {
    key: 'run',
    value: function run() {
      //组装buf
      var buf = _utils2.default.composer(_cmd2.default.setEncoderMotor, [this.args.port, this.args.speed, this.args.angle]);
      //执行
      _command2.default.execWrite(buf);
      return this;
    }

    /**
     * dcMoter run reversely
     * @return {Object} the instance
     */

  }, {
    key: 'runReverse',
    value: function runReverse() {
      this.offsetAngle(-1 * this.args.angle);
      return this.run();
    }
  }]);
  return EncoderMotorBase;
}(_MotorBase3.default);

exports.default = EncoderMotorBase;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Board2 = __webpack_require__(32);

var _Board3 = _interopRequireDefault(_Board2);

var _index = __webpack_require__(35);

var _index2 = _interopRequireDefault(_index);

var _settings = __webpack_require__(27);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//支持位置
var SUPPORT_INDEX = _settings2.default.SUPPORTLIST.indexOf('Auriga');

//实现一个板子就注册一个板子名称

var Auriga = function (_Board) {
  (0, _inherits3.default)(Auriga, _Board);

  function Auriga(conf) {
    (0, _classCallCheck3.default)(this, Auriga);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Auriga.__proto__ || (0, _getPrototypeOf2.default)(Auriga)).call(this, conf));
    //继承 Board


    var this_ = _this;
    // 置空已连接块
    _this.connecting = {};
    // 挂载电子模块

    var _loop = function _loop(name) {
      var eModule = _index2.default[name];
      if (eModule.supportStamp().charAt(SUPPORT_INDEX) === '1') {
        // when use mcore.rgbLed(port, slot)
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

  return Auriga;
}(_Board3.default);

exports.default = Auriga;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Board2 = __webpack_require__(32);

var _Board3 = _interopRequireDefault(_Board2);

var _index = __webpack_require__(35);

var _index2 = _interopRequireDefault(_index);

var _settings = __webpack_require__(27);

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
    // 置空已连接块
    _this.connecting = {};
    // 挂载电子模块

    var _loop = function _loop(name) {
      var eModule = _index2.default[name];
      if (eModule.supportStamp().charAt(SUPPORT_INDEX) === '1') {
        // when use mcore.rgbLed(port, slot)
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

  return Mcore;
}(_Board3.default);

exports.default = Mcore;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Board2 = __webpack_require__(32);

var _Board3 = _interopRequireDefault(_Board2);

var _index = __webpack_require__(35);

var _index2 = _interopRequireDefault(_index);

var _settings = __webpack_require__(27);

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
    // 置空已连接块
    _this.connecting = {};
    // 挂载电子模块

    var _loop = function _loop(name) {
      var eModule = _index2.default[name];
      if (eModule.supportStamp().charAt(SUPPORT_INDEX) === '1') {
        // when use mcore.rgbLed(port, slot)
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

  return MegaPi;
}(_Board3.default);

exports.default = MegaPi;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// var Neuron = require('mneurons');
// var Neuron = require('../../neurons-engine/lib/engine/logic');

var Neuron = {};

exports.default = Neuron;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Board2 = __webpack_require__(32);

var _Board3 = _interopRequireDefault(_Board2);

var _index = __webpack_require__(35);

var _index2 = _interopRequireDefault(_index);

var _settings = __webpack_require__(27);

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
    // 置空已连接块
    _this.connecting = {};
    // 挂载电子模块

    var _loop = function _loop(name) {
      var eModule = _index2.default[name];
      if (eModule.supportStamp().charAt(SUPPORT_INDEX) === '1') {
        // when use mcore.rgbLed(port, slot)
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62);
__webpack_require__(101);
module.exports = __webpack_require__(10).Array.from;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
module.exports = __webpack_require__(10).Object.assign;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(104);
var $Object = __webpack_require__(10).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105);
var $Object = __webpack_require__(10).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(106);
module.exports = __webpack_require__(10).Object.getPrototypeOf;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(107);
module.exports = __webpack_require__(10).Object.keys;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(108);
module.exports = __webpack_require__(10).Object.setPrototypeOf;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(110);
__webpack_require__(109);
__webpack_require__(111);
__webpack_require__(112);
module.exports = __webpack_require__(10).Symbol;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62);
__webpack_require__(113);
module.exports = __webpack_require__(49).f('iterator');

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18)
  , toLength  = __webpack_require__(61)
  , toIndex   = __webpack_require__(99);
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(36)
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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(14)
  , createDesc      = __webpack_require__(25);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(22)
  , gOPS    = __webpack_require__(42)
  , pIE     = __webpack_require__(28);
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13).document && document.documentElement;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(24)
  , ITERATOR   = __webpack_require__(11)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(36);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(19);
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(41)
  , descriptor     = __webpack_require__(25)
  , setToStringTag = __webpack_require__(43)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(21)(IteratorPrototype, __webpack_require__(11)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 90 */
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
/* 91 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(22)
  , toIObject = __webpack_require__(18);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(29)('meta')
  , isObject = __webpack_require__(23)
  , has      = __webpack_require__(17)
  , setDesc  = __webpack_require__(14).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(20)(function(){
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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(22)
  , gOPS     = __webpack_require__(42)
  , pIE      = __webpack_require__(28)
  , toObject = __webpack_require__(26)
  , IObject  = __webpack_require__(53)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(20)(function(){
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
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(14)
  , anObject = __webpack_require__(19)
  , getKeys  = __webpack_require__(22);

module.exports = __webpack_require__(16) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(18)
  , gOPN      = __webpack_require__(56).f
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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(23)
  , anObject = __webpack_require__(19);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(37)(Function.call, __webpack_require__(55).f(Object.prototype, '__proto__').set, 2);
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(46)
  , defined   = __webpack_require__(38);
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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(46)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(82)
  , ITERATOR  = __webpack_require__(11)('iterator')
  , Iterators = __webpack_require__(24);
module.exports = __webpack_require__(10).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(37)
  , $export        = __webpack_require__(12)
  , toObject       = __webpack_require__(26)
  , call           = __webpack_require__(88)
  , isArrayIter    = __webpack_require__(86)
  , toLength       = __webpack_require__(61)
  , createProperty = __webpack_require__(83)
  , getIterFn      = __webpack_require__(100);

$export($export.S + $export.F * !__webpack_require__(90)(function(iter){ Array.from(iter); }), 'Array', {
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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(80)
  , step             = __webpack_require__(91)
  , Iterators        = __webpack_require__(24)
  , toIObject        = __webpack_require__(18);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(54)(Array, 'Array', function(iterated, kind){
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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(12);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(94)});

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(12)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(41)});

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(12);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(16), 'Object', {defineProperty: __webpack_require__(14).f});

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(26)
  , $getPrototypeOf = __webpack_require__(57);

__webpack_require__(59)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(26)
  , $keys    = __webpack_require__(22);

__webpack_require__(59)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(12);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(97).set});

/***/ }),
/* 109 */
/***/ (function(module, exports) {



/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(13)
  , has            = __webpack_require__(17)
  , DESCRIPTORS    = __webpack_require__(16)
  , $export        = __webpack_require__(12)
  , redefine       = __webpack_require__(60)
  , META           = __webpack_require__(93).KEY
  , $fails         = __webpack_require__(20)
  , shared         = __webpack_require__(45)
  , setToStringTag = __webpack_require__(43)
  , uid            = __webpack_require__(29)
  , wks            = __webpack_require__(11)
  , wksExt         = __webpack_require__(49)
  , wksDefine      = __webpack_require__(48)
  , keyOf          = __webpack_require__(92)
  , enumKeys       = __webpack_require__(84)
  , isArray        = __webpack_require__(87)
  , anObject       = __webpack_require__(19)
  , toIObject      = __webpack_require__(18)
  , toPrimitive    = __webpack_require__(47)
  , createDesc     = __webpack_require__(25)
  , _create        = __webpack_require__(41)
  , gOPNExt        = __webpack_require__(96)
  , $GOPD          = __webpack_require__(55)
  , $DP            = __webpack_require__(14)
  , $keys          = __webpack_require__(22)
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
  __webpack_require__(56).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(28).f  = $propertyIsEnumerable;
  __webpack_require__(42).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(40)){
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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('asyncIterator');

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('observable');

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102);
var global        = __webpack_require__(13)
  , hide          = __webpack_require__(21)
  , Iterators     = __webpack_require__(24)
  , TO_STRING_TAG = __webpack_require__(11)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(70), __esModule: true };

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(73), __esModule: true };

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(76), __esModule: true };

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ }),
/* 121 */,
/* 122 */
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
                              * @fileOverview 解析器负责数据解析
                              * 对外输出解析方法
                              */
// import PromiseList from "../core/promise";

var BUF_START_FLAG = [0xff, 0x55];
var BUF_END_FLAG = [0x0d, 0x0a];

function checkStart(flag1, flag2) {
  return flag1 === BUF_START_FLAG[0] && flag2 === BUF_START_FLAG[1];
}
function checkEnd(flag1, flag2) {
  return flag1 === BUF_END_FLAG[0] && flag2 === BUF_END_FLAG[1];
}

// 目前所有的执行命令，如果是正常接收，都是统一回复  ff 55 0d 0a
function Parse() {
  this.cacheBuffer = [];

  // 解析从硬件传递过来的数据
  // data : 当前处理的数据
  // this.cacheBuffer: 历史缓存数据
  // 记录数据和历史数据分开记录

  /**
   * parse buffer
   * @param  {Array} buffData buffer that from the response
   * @return {Array}          the parsed result
   */
  this.doParse = function (buffData) {
    var recvLength = 0;
    //是否允许接受
    var isAllowRecv = false;
    var tempBuf = [];

    var data = _utils2.default.arrayFromArrayBuffer(buffData);
    data = this.cacheBuffer.concat(data);
    // parse buffer data
    for (var i = 0; i < data.length; i++) {
      var data1 = parseInt(data[i - 1]),
          data2 = parseInt(data[i]);
      // start data
      if (checkStart(data1, data2)) {
        recvLength = 0;
        isAllowRecv = true;
        tempBuf = [];
      }
      // end data
      else if (checkStart(data1, data2)) {
          isAllowRecv = false;
          var resultBuf = tempBuf.slice(0, recvLength - 1);
          // 解析正确的数据后，清空 buffer
          this.cacheBuffer = [];
          // 此轮解析结束
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
  };

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
  this.getResult = function (buf, type) {
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

    // TOFIX: should not be placed here.
    //  if (type == this.PromiseType.ENCODER_MOTER.index) {
    //   result = Math.abs(result);
    // }

    return result;
  };

  /**
   * calculate value from data received: bytes -> int -> float
   * @param  {Array} intArray decimal array
   * @return {Number}  result.
   */
  this.calculateResponseValue = function (intArray) {
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
  };
}

exports.default = new Parse();

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

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
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readGPIOContinue, [this.args.port, this.args.key]);
      //执行
      _command2.default.execRead(buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况

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
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

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
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readAnalogGPIO, [this.args.port]);
      //执行
      _command2.default.execRead(buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况

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
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Buzzer = function (_Electronic) {
  (0, _inherits3.default)(Buzzer, _Electronic);

  /**
   * Buzzer类，声音模块
   * @constructor
   */
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
   * @param {string} tone - 声音音调
   */


  (0, _createClass3.default)(Buzzer, [{
    key: 'tone',
    value: function tone(_tone) {
      this.args.tone = (0, _type.defineString)(_tone.toUpperCase());
      return this;
    }
    /**
     * @param {string} beat - 声音音节
     */

  }, {
    key: 'beat',
    value: function beat(_beat) {
      this.args.beat = (0, _type.defineNumber)(_beat);
      return this;
    }
    /**
     * 播放声音
     */

  }, {
    key: 'play',
    value: function play() {
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.setTone, [this.args.port, this.args.action]);
      //执行
      _command2.default.execWrite(buf);
      return this;
    }

    //主控支持戳：描述各主控的支持情况

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
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

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
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readCompass, [this.args.port]);
      //执行
      _command2.default.execRead(buf, callback);
      // Command.getSensorValue('ultrasonic', buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况
    //orion 不支持

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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _MotorBase2 = __webpack_require__(50);

var _MotorBase3 = _interopRequireDefault(_MotorBase2);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DcMotor = function (_MotorBase) {
  (0, _inherits3.default)(DcMotor, _MotorBase);

  /**
   * DC Motor
   * @constructor
   * @param {number} port
   */
  function DcMotor(port) {
    (0, _classCallCheck3.default)(this, DcMotor);
    return (0, _possibleConstructorReturn3.default)(this, (DcMotor.__proto__ || (0, _getPrototypeOf2.default)(DcMotor)).call(this, port));
  }

  /**
   * dcMoter run
   * @return {Object} the instance
   */


  (0, _createClass3.default)(DcMotor, [{
    key: 'run',
    value: function run() {
      //组装buf
      var buf = _utils2.default.composer(_cmd2.default.setDcMotor, [this.args.port, this.args.speed]);
      //执行
      _command2.default.execWrite(buf);
      return this;
    }

    /**
     * dcMoter run reversely
     * @return {Object} the instance
     */

  }, {
    key: 'runReverse',
    value: function runReverse() {
      this.speed(-1 * this.args.speed);
      return this.run();
    }

    //主控支持戳：描述各主控的支持情况

  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return DcMotor;
}(_MotorBase3.default);

exports.default = DcMotor;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

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
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readDigGPIO, [this.args.port]);
      //执行
      _command2.default.execRead(buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况

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
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

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
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readDoubleGPIO, [this.args.port1, this.args.port2]);
      //执行
      _command2.default.execRead(buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况

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
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _EncoderMotorBase2 = __webpack_require__(64);

var _EncoderMotorBase3 = _interopRequireDefault(_EncoderMotorBase2);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EncoderMotor = function (_EncoderMotorBase) {
  (0, _inherits3.default)(EncoderMotor, _EncoderMotorBase);

  /**
   * DC Motor
   * @constructor
   * @param {number} port
   */
  function EncoderMotor(port, slot) {
    (0, _classCallCheck3.default)(this, EncoderMotor);
    return (0, _possibleConstructorReturn3.default)(this, (EncoderMotor.__proto__ || (0, _getPrototypeOf2.default)(EncoderMotor)).call(this, port, slot));
  }

  //主控支持戳：描述各主控的支持情况


  (0, _createClass3.default)(EncoderMotor, null, [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '0101';
    }
  }]);
  return EncoderMotor;
}(_EncoderMotorBase3.default);

exports.default = EncoderMotor;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(15);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _EncoderMotorBase2 = __webpack_require__(64);

var _EncoderMotorBase3 = _interopRequireDefault(_EncoderMotorBase2);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bufComposer = function bufComposer(args) {
  return _utils2.default.composer(_cmd2.default.readEncoderMotorOnBoard, [args.slot, args.type]);
};

var EncoderMotorOnBoard = function (_EncoderMotorBase) {
  (0, _inherits3.default)(EncoderMotorOnBoard, _EncoderMotorBase);

  /**
   * EncoderMotorOnBoard
   * @constructor
   * @param {number} port
   */
  function EncoderMotorOnBoard(slot) {
    (0, _classCallCheck3.default)(this, EncoderMotorOnBoard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EncoderMotorOnBoard.__proto__ || (0, _getPrototypeOf2.default)(EncoderMotorOnBoard)).call(this, slot));

    (0, _assign2.default)(_this.args, {
      type: null
    });
    return _this;
  }

  /**
   * get speed to the start position
   * @param  {Function} callback 
   */


  (0, _createClass3.default)(EncoderMotorOnBoard, [{
    key: 'readSpeed',
    value: function readSpeed(callback) {
      this.args.type = 0x02;
      //组装buf
      var buf = bufComposer(this.args);
      //执行
      _command2.default.execRead(buf, callback);
      return this;
    }

    /**
     * get angle offset to the start position
     * @param  {Function} callback 
     */

  }, {
    key: 'readAngle',
    value: function readAngle(callback) {
      this.args.type = 0x01;
      //组装buf
      var buf = bufComposer(this.args);
      //执行
      _command2.default.execRead(buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况
    //auriga megapi 支持

  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '0110';
    }
  }]);
  return EncoderMotorOnBoard;
}(_EncoderMotorBase3.default);

exports.default = EncoderMotorOnBoard;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

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
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readFlame, [this.args.port]);
      //执行
      _command2.default.execRead(buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况

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
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FourKeys = function (_Electronic) {
  (0, _inherits3.default)(FourKeys, _Electronic);

  function FourKeys(port, key) {
    (0, _classCallCheck3.default)(this, FourKeys);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FourKeys.__proto__ || (0, _getPrototypeOf2.default)(FourKeys)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port),
      key: (0, _type.defineString)(key)
    };
    return _this;
  }

  (0, _createClass3.default)(FourKeys, [{
    key: 'getData',
    value: function getData(callback) {
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readFourKeys, [this.args.port, this.args.key]);
      //执行
      _command2.default.execRead(buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况
    //orion 不支持

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
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _RgbLedBase2 = __webpack_require__(34);

var _RgbLedBase3 = _interopRequireDefault(_RgbLedBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FourLed = function (_RgbLedBase) {
  (0, _inherits3.default)(FourLed, _RgbLedBase);

  function FourLed(port) {
    (0, _classCallCheck3.default)(this, FourLed);
    return (0, _possibleConstructorReturn3.default)(this, (FourLed.__proto__ || (0, _getPrototypeOf2.default)(FourLed)).call(this, port, 2));
  }

  //主控支持戳：描述各主控的支持情况


  (0, _createClass3.default)(FourLed, null, [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return FourLed;
}(_RgbLedBase3.default);

exports.default = FourLed;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

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
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readGas, [this.args.port]);
      //执行
      _command2.default.execRead(buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况

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
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Gyro = function (_Electronic) {
  (0, _inherits3.default)(Gyro, _Electronic);

  function Gyro(port, axis) {
    (0, _classCallCheck3.default)(this, Gyro);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Gyro.__proto__ || (0, _getPrototypeOf2.default)(Gyro)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port),
      axis: (0, _type.defineString)(axis)
    };
    return _this;
  }

  (0, _createClass3.default)(Gyro, [{
    key: 'getData',
    value: function getData(callback) {
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readGyro, [this.args.port, this.args.axis]);
      //执行
      _command2.default.execRead(buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况
    //orion 不支持

  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1110';
    }
  }]);
  return Gyro;
}(_electronic2.default);

exports.default = Gyro;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Humiture = function (_Electronic) {
  (0, _inherits3.default)(Humiture, _Electronic);

  function Humiture(port, type) {
    (0, _classCallCheck3.default)(this, Humiture);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Humiture.__proto__ || (0, _getPrototypeOf2.default)(Humiture)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port),
      type: (0, _type.defineNumber)(type)
    };
    return _this;
  }

  (0, _createClass3.default)(Humiture, [{
    key: 'getData',
    value: function getData(callback) {
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readHumiture, [this.args.port, this.args.type]);
      //执行
      _command2.default.execRead(buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况
    //orion 不支持

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
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Joystick = function (_Electronic) {
  (0, _inherits3.default)(Joystick, _Electronic);

  function Joystick(port, axis) {
    (0, _classCallCheck3.default)(this, Joystick);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Joystick.__proto__ || (0, _getPrototypeOf2.default)(Joystick)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port),
      axis: (0, _type.defineString)(axis)
    };
    return _this;
  }

  (0, _createClass3.default)(Joystick, [{
    key: 'getData',
    value: function getData(callback) {
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readJoystick, [this.args.port, this.args.axis]);
      //执行
      _command2.default.execRead(buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况

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
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(15);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _LedMatrixBase2 = __webpack_require__(33);

var _LedMatrixBase3 = _interopRequireDefault(_LedMatrixBase2);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LedMatrixChar = function (_LedMatrixBase) {
  (0, _inherits3.default)(LedMatrixChar, _LedMatrixBase);

  /**
   * @constructor
   */
  function LedMatrixChar(port) {
    (0, _classCallCheck3.default)(this, LedMatrixChar);

    //扩充参数
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
    key: 'showChar',
    value: function showChar(str) {
      this.args.char = str;
      //组装buf
      var buf = _utils2.default.composer(_cmd2.default.setLedMatrixChar, [this.args.port, this.args.x, this.args.y, this.args.char]);
      _command2.default.execWrite(buf);
      return this;
    }

    //主控支持戳：描述各主控的支持情况
    //orion 不支持

  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1110';
    }
  }]);
  return LedMatrixChar;
}(_LedMatrixBase3.default);

exports.default = LedMatrixChar;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(15);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _LedMatrixBase2 = __webpack_require__(33);

var _LedMatrixBase3 = _interopRequireDefault(_LedMatrixBase2);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { defineNumber } from '../core/type';
var LedMatrixEmotion = function (_LedMatrixBase) {
  (0, _inherits3.default)(LedMatrixEmotion, _LedMatrixBase);

  /**
   * @constructor
   */
  function LedMatrixEmotion(port) {
    (0, _classCallCheck3.default)(this, LedMatrixEmotion);

    //参数
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
    key: 'showEmotion',
    value: function showEmotion(emotion) {
      this.args.emotion = emotion;
      //组装buf
      var buf = _utils2.default.composer(_cmd2.default.setLedMatrixEmotion, [this.args.port, this.args.x, this.args.y, this.args.emotion]);
      //执行
      _command2.default.execWrite(buf);
      return this;
    }

    //主控支持戳：描述各主控的支持情况
    //orion 不支持

  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1110';
    }
  }]);
  return LedMatrixEmotion;
}(_LedMatrixBase3.default);

exports.default = LedMatrixEmotion;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(15);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _LedMatrixBase2 = __webpack_require__(33);

var _LedMatrixBase3 = _interopRequireDefault(_LedMatrixBase2);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LedMatrixNumber = function (_LedMatrixBase) {
  (0, _inherits3.default)(LedMatrixNumber, _LedMatrixBase);

  /**
   * @constructor
   */
  function LedMatrixNumber(port) {
    (0, _classCallCheck3.default)(this, LedMatrixNumber);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LedMatrixNumber.__proto__ || (0, _getPrototypeOf2.default)(LedMatrixNumber)).call(this, port));

    (0, _assign2.default)(_this.args, {
      number: null
    });
    return _this;
  }

  (0, _createClass3.default)(LedMatrixNumber, [{
    key: 'showNumber',
    value: function showNumber(number) {
      this.args.number = (0, _type.defineNumber)(number);
      //组装buf
      var buf = _utils2.default.composer(_cmd2.default.setLedMatrixNumber, [this.args.port, this.args.number]);
      //执行
      _command2.default.execWrite(buf);
      return this;
    }

    //主控支持戳：描述各主控的支持情况
    //orion 不支持

  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1110';
    }
  }]);
  return LedMatrixNumber;
}(_LedMatrixBase3.default);

exports.default = LedMatrixNumber;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(15);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _LedMatrixBase2 = __webpack_require__(33);

var _LedMatrixBase3 = _interopRequireDefault(_LedMatrixBase2);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LedMatrixTime = function (_LedMatrixBase) {
  (0, _inherits3.default)(LedMatrixTime, _LedMatrixBase);

  /**
   * @constructor
   */
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
    key: 'showTime',
    value: function showTime() {
      //组装buf
      var buf = _utils2.default.composer(_cmd2.default.setLedMatrixTime, [this.args.port, this.args.separator, this.args.hour, this.args.minute]);
      _command2.default.execWrite(buf);
      return this;
    }

    //主控支持戳：描述各主控的支持情况
    //orion 不支持

  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1110';
    }
  }]);
  return LedMatrixTime;
}(_LedMatrixBase3.default);

exports.default = LedMatrixTime;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _RgbLedBase2 = __webpack_require__(34);

var _RgbLedBase3 = _interopRequireDefault(_RgbLedBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LedPanelOnBoard = function (_RgbLedBase) {
  (0, _inherits3.default)(LedPanelOnBoard, _RgbLedBase);

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
}(_RgbLedBase3.default);

exports.default = LedPanelOnBoard;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

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
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readLight, [this.args.port]);
      //执行
      _command2.default.execRead(buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况
    // supportMainboards

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
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

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
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readLimitSwitch, [this.args.port, this.args.slot]);
      //执行
      _command2.default.execRead(buf, callback);
      // Command.getSensorValue('ultrasonic', buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况

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
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

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
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readLineFollower, [this.args.port]);
      //执行
      _command2.default.execRead(buf, callback);
      // Command.getSensorValue('ultrasonic', buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况

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
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

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
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readPirmotion, [this.args.port]);
      //执行
      _command2.default.execRead(buf, callback);
      // Command.getSensorValue('ultrasonic', buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况

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
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

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
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readPotentionmeter, [this.args.port]);
      //执行
      _command2.default.execRead(buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况

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
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

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
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.reset);
      //执行
      _command2.default.execRead(buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况

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
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _RgbLedBase2 = __webpack_require__(34);

var _RgbLedBase3 = _interopRequireDefault(_RgbLedBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RgbLed = function (_RgbLedBase) {
  (0, _inherits3.default)(RgbLed, _RgbLedBase);

  function RgbLed(port, slot) {
    (0, _classCallCheck3.default)(this, RgbLed);
    return (0, _possibleConstructorReturn3.default)(this, (RgbLed.__proto__ || (0, _getPrototypeOf2.default)(RgbLed)).call(this, port, slot));
  }

  //主控支持戳：描述各主控的支持情况


  (0, _createClass3.default)(RgbLed, null, [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return RgbLed;
}(_RgbLedBase3.default);

exports.default = RgbLed;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _RgbLedBase2 = __webpack_require__(34);

var _RgbLedBase3 = _interopRequireDefault(_RgbLedBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RgbLedOnBoard = function (_RgbLedBase) {
  (0, _inherits3.default)(RgbLedOnBoard, _RgbLedBase);

  function RgbLedOnBoard() {
    (0, _classCallCheck3.default)(this, RgbLedOnBoard);
    return (0, _possibleConstructorReturn3.default)(this, (RgbLedOnBoard.__proto__ || (0, _getPrototypeOf2.default)(RgbLedOnBoard)).call(this, 0, 2));
  }

  //主控支持戳：描述各主控的支持情况


  (0, _createClass3.default)(RgbLedOnBoard, null, [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '0100';
    }
  }]);
  return RgbLedOnBoard;
}(_RgbLedBase3.default); // import { defineNumber } from '../core/type';


exports.default = RgbLedOnBoard;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

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
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readRuntime);
      //执行
      _command2.default.execRead(buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况

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
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServoMotor = function (_Electronic) {
  (0, _inherits3.default)(ServoMotor, _Electronic);

  /**
   * ServoMotor
   * @constructor
   * @param {number} port
   */
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
      this.angle(180);
      return this.go();
    }

    /**
     * go to the end
     * @return {[type]} [description]
     */

  }, {
    key: 'toEnd',
    value: function toEnd() {
      this.angle(0);
      return this.go();
    }
  }, {
    key: 'go',
    value: function go() {
      var buf = _utils2.default.composer(_cmd2.default.setServoMotor, [this.args.port, this.args.slot, this.args.angle]);
      //执行
      _command2.default.execWrite(buf);
      return this;
    }

    //主控支持戳：描述各主控的支持情况

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
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 作为闭包内容不开放
var SevenSegment = function (_Electronic) {
  (0, _inherits3.default)(SevenSegment, _Electronic);

  /**
   * Buzzer类，声音模块
   * @constructor
   */
  function SevenSegment(port) {
    (0, _classCallCheck3.default)(this, SevenSegment);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SevenSegment.__proto__ || (0, _getPrototypeOf2.default)(SevenSegment)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port),
      number: null
    };
    return _this;
  }
  /**
   * @param {string} beat - 声音音节
   */


  (0, _createClass3.default)(SevenSegment, [{
    key: 'showNumber',
    value: function showNumber(number) {
      this.args.number = (0, _type.defineNumber)(number);
      var buf = _utils2.default.composer(_cmd2.default.setSevenSegment, [this.args.port, this.args.number]);
      _command2.default.execWrite(buf);
      return this;
    }

    //主控支持戳：描述各主控的支持情况

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
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 作为闭包内容不开放
var Shutter = function (_Electronic) {
  (0, _inherits3.default)(Shutter, _Electronic);

  /**
   * Buzzer类，声音模块
   * @constructor
   */
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
   * @param {string} actionId - 动作id  0: 按下快门; 1: 松开快门; 2: 聚焦; 3: 停止聚焦
   */


  (0, _createClass3.default)(Shutter, [{
    key: 'action',
    value: function action(actionId) {
      this.args.action = (0, _type.defineString)(actionId);
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.setShutter, [this.args.port, this.args.action]);
      //执行
      _command2.default.execWrite(buf);
      return this;
    }

    //主控支持戳：描述各主控的支持情况

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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sound = function (_Electronic) {
  (0, _inherits3.default)(Sound, _Electronic);

  function Sound(port) {
    (0, _classCallCheck3.default)(this, Sound);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Sound.__proto__ || (0, _getPrototypeOf2.default)(Sound)).call(this));

    _this.args = {
      port: (0, _type.defineNumber)(port)
    };
    return _this;
  }

  (0, _createClass3.default)(Sound, [{
    key: 'getData',
    value: function getData(callback) {
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readSound, [this.args.port]);
      //执行
      _command2.default.execRead(buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况

  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return Sound;
}(_electronic2.default);

exports.default = Sound;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(15);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _MotorBase2 = __webpack_require__(50);

var _MotorBase3 = _interopRequireDefault(_MotorBase2);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StepperMotor = function (_MotorBase) {
  (0, _inherits3.default)(StepperMotor, _MotorBase);

  /**
   * DC Motor
   * @constructor
   * @param {number} port
   */
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
     * dcMoter run
     * @return {Object} the instance
     */

  }, {
    key: 'run',
    value: function run() {
      //组装buf
      var buf = _utils2.default.composer(_cmd2.default.setDcMotor, [this.args.port, this.args.speed, this.args.distance]);
      //执行
      _command2.default.execWrite(buf);
      return this;
    }

    /**
     * dcMoter run reversely
     * @return {Object} the instance
     */

  }, {
    key: 'runReverse',
    value: function runReverse() {
      this.speed(-1 * this.args.distance);
      return this.run();
    }

    //主控支持戳：描述各主控的支持情况

  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '0111';
    }
  }]);
  return StepperMotor;
}(_MotorBase3.default);

exports.default = StepperMotor;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

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
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readTemperature, [this.args.port, this.args.slot]);
      //执行
      _command2.default.execRead(buf, callback);
      // Command.getSensorValue('ultrasonic', buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况

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
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

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
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readTemperatureOnBoard);
      //执行
      _command2.default.execRead(buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况
    //只有 auriga 支持 

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
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

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
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readTouch, [this.args.port]);
      //执行
      _command2.default.execRead(buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况

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
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

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
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readUltrasonic, [this.args.port]);
      //执行
      _command2.default.execRead(buf, callback);
      // Command.getSensorValue('ultrasonic', buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况

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
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = __webpack_require__(7);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _electronic = __webpack_require__(9);

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(8);

var _cmd2 = _interopRequireDefault(_cmd);

var _command = __webpack_require__(6);

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Version = function (_Electronic) {
  (0, _inherits3.default)(Version, _Electronic);

  function Version(callback) {
    (0, _classCallCheck3.default)(this, Version);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Version.__proto__ || (0, _getPrototypeOf2.default)(Version)).call(this));

    _this.version(callback);
    return _this;
  }

  (0, _createClass3.default)(Version, [{
    key: 'version',
    value: function version(callback) {
      // 拿到协议组装器，组装协议
      var buf = _utils2.default.composer(_cmd2.default.readVersion);
      //执行
      _command2.default.execRead(buf, callback);
      return this;
    }

    //主控支持戳：描述各主控的支持情况

  }], [{
    key: 'supportStamp',
    value: function supportStamp() {
      return '1111';
    }
  }]);
  return Version;
}(_electronic2.default);

exports.default = Version;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mcore = __webpack_require__(66);

var _mcore2 = _interopRequireDefault(_mcore);

var _orion = __webpack_require__(69);

var _orion2 = _interopRequireDefault(_orion);

var _auriga = __webpack_require__(65);

var _auriga2 = _interopRequireDefault(_auriga);

var _megaPi = __webpack_require__(67);

var _megaPi2 = _interopRequireDefault(_megaPi);

var _neuron = __webpack_require__(68);

var _neuron2 = _interopRequireDefault(_neuron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var boards = {
  "Mcore": _mcore2.default,
  "Orion": _orion2.default,
  "Auriga": _auriga2.default,
  "MegaPi": _megaPi2.default,
  "Neuron": _neuron2.default
};

function Sensorium(boardName, opts) {
  //匹配对应的板子
  var board = boards[boardName];
  if (typeof board == 'undefined') {
    throw new Error('sorry, the board could not be supported!');
  }
  //TO IMPROVE: 需释放上一次板子实例
  return new board(opts);
}

if (typeof window != "undefined") {
  window.Sensorium = Sensorium;
}
// cmd
exports.default = Sensorium;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(117);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//当前问题：发送请求超过 255 个时，进行了暴力覆盖。但是根据协议 index 大小，又只能识别 255 条请求

// 控制方案一(待整理):
//首先其 exec 将被控制执行，需完成以下动作后才执行：
//1、加入监听列队（第二队）时，先做监听列队分析————对一队列剔除哪些位于中间的、占位较多的监听器到垃圾箱
//2、一旦有数据返回，触发对应监听器，同时做关联分析，砍掉一批。同时清空垃圾箱
//3、执行这个 exec
//4、直到第二队也到达 255.
//5、选出列队一空缺的位置（指针拨到1，表明1需要彻底清理）

// 控制方案二:
//1、允许快速产生 255 条请求（或采用一定的节流方案）
//2、将请求保存在一个队列中（保存请求发起时间）
//3、再新增请求时，检查是否满队列，若满执行第6条。必须满足队列中有空位让出——也求是请求有返回值回来——才能进入队列中
//4、新增请求占领空位（需计算空位index），并执行发送
//5、后续请求依次遵循这个规则
//6、满队列的情况下，新增请求时清空那些超时（2s?）的请求，再进入

// import ValueWrapper from '../core/value_wrapper';
/**
 * read request controler
 */
var MAX_RECORD = 255;
var OVERTIME = 2000;

var ReadControl = {
  readRecord: {},
  index: 0,
  /**
   * create a safty index between 0~254
   * @return {Number|Null} return index
   */
  createSafeIndex: function createSafeIndex() {
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
   * @param {Function}   execFunc  addRequest execute as proxy
   * @param {Array}   buf      rj25 buffer
   * @param {Function} callback [description]
   */
  addRequest: function addRequest(execFunc, buf, callback) {
    var isFull = this.isOverflow();
    if (!isFull) {
      //创建索引号
      var index = this.createSafeIndex();
      //记录
      this.addRecord(index, callback);
      //执行发送
      this.execSend(execFunc, index, buf);
    } else {
      //清除超时
      var result = this.removeOvertimeRequest();
      if (result) {
        this.addRequest.apply(this, arguments);
      } else {
        //TODO: 挂起请求，稍后再发
        console.warn('this request was ignored');
      };
    }
  },
  /**
   * 移除超时未回调的
   * @return {[type]} [description]
   */
  removeOvertimeRequest: function removeOvertimeRequest() {
    var time = new Date().getTime();
    var count = 0;
    for (var index in this.readRecord) {
      if (time - this.readRecord[index].time > OVERTIME) {
        count++;
        this.removeRecord(index);
      }
    }
    return count;
  },

  /**
   * 执行发送
   * @param  {Function} execFunc  
   * @param  {Number} index    [description]
   * @param  {[type]} buf      [description]
   * @return {[type]}          [description]
   */
  execSend: function execSend(execFunc, index, buf) {
    //amand the index of the buf due to the rj25 protocol
    buf.splice(3, 1, index);
    execFunc(buf);
  },

  /**
   * execute the callback of the request
   * @param  {Number} index request index
   * @param  {Number} value request result
   */
  callbackProxy: function callbackProxy(index, value) {
    this.readRecord[index].callback(value);
    this.removeRecord(index);
  }
};

exports.default = ReadControl;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * write request controler
 */
var TIME_INTERVAL = 50;

var WriteControl = {
  writeRecord: {},
  /**
   * this function is drived by 
   * @param {Function}   execFunc  addRequest execute as proxy
   * @param {Array}   buf      rj25 buffer
   * @param {Function} callback [description]
   */
  addRequest: function addRequest(execFunc, buf) {
    var time = new Date().getTime();
    var bufStr = buf.join('_');
    if (this.writeRecord.buf != bufStr || time - this.writeRecord.time > TIME_INTERVAL) {
      this.writeRecord.buf = bufStr;
      this.writeRecord.time = time;
      execFunc(buf);
    }
  }
};

exports.default = WriteControl;

/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = __webpack_require__(175);
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) {
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(167);
var foreach = __webpack_require__(180);
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

var toStr = Object.prototype.toString;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
        /* eslint-disable no-unused-vars, no-restricted-syntax */
        for (var _ in obj) { return false; }
        /* eslint-enable no-unused-vars, no-restricted-syntax */
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		Object.defineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = props.concat(Object.getOwnPropertySymbols(map));
	}
	foreach(props, function (name) {
		defineProperty(object, name, map[name], predicates[name]);
	});
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),
/* 169 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 169;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(179);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__(167);
var bind = __webpack_require__(177);
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__(187)();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(171);

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),
/* 173 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),
/* 176 */
/***/ (function(module, exports) {

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var implementation = __webpack_require__(176);

module.exports = Function.prototype.bind || implementation;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__filename) {
/**
 * Module dependencies.
 */

var fs = __webpack_require__(166)
  , path = __webpack_require__(173)
  , join = path.join
  , dirname = path.dirname
  , exists = fs.existsSync || path.existsSync
  , defaults = {
        arrow: process.env.NODE_BINDINGS_ARROW || ' → '
      , compiled: process.env.NODE_BINDINGS_COMPILED_DIR || 'compiled'
      , platform: process.platform
      , arch: process.arch
      , version: process.versions.node
      , bindings: 'bindings.node'
      , try: [
          // node-gyp's linked version in the "build" dir
          [ 'module_root', 'build', 'bindings' ]
          // node-waf and gyp_addon (a.k.a node-gyp)
        , [ 'module_root', 'build', 'Debug', 'bindings' ]
        , [ 'module_root', 'build', 'Release', 'bindings' ]
          // Debug files, for development (legacy behavior, remove for node v0.9)
        , [ 'module_root', 'out', 'Debug', 'bindings' ]
        , [ 'module_root', 'Debug', 'bindings' ]
          // Release files, but manually compiled (legacy behavior, remove for node v0.9)
        , [ 'module_root', 'out', 'Release', 'bindings' ]
        , [ 'module_root', 'Release', 'bindings' ]
          // Legacy from node-waf, node <= 0.4.x
        , [ 'module_root', 'build', 'default', 'bindings' ]
          // Production "Release" buildtype binary (meh...)
        , [ 'module_root', 'compiled', 'version', 'platform', 'arch', 'bindings' ]
        ]
    }

/**
 * The main `bindings()` function loads the compiled bindings for a given module.
 * It uses V8's Error API to determine the parent filename that this function is
 * being invoked from, which is then used to find the root directory.
 */

function bindings (opts) {

  // Argument surgery
  if (typeof opts == 'string') {
    opts = { bindings: opts }
  } else if (!opts) {
    opts = {}
  }
  opts.__proto__ = defaults

  // Get the module root
  if (!opts.module_root) {
    opts.module_root = exports.getRoot(exports.getFileName())
  }

  // Ensure the given bindings name ends with .node
  if (path.extname(opts.bindings) != '.node') {
    opts.bindings += '.node'
  }

  var tries = []
    , i = 0
    , l = opts.try.length
    , n
    , b
    , err

  for (; i<l; i++) {
    n = join.apply(null, opts.try[i].map(function (p) {
      return opts[p] || p
    }))
    tries.push(n)
    try {
      b = opts.path ? /*require.resolve*/(!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) : !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())
      if (!opts.path) {
        b.path = n
      }
      return b
    } catch (e) {
      if (!/not find/i.test(e.message)) {
        throw e
      }
    }
  }

  err = new Error('Could not locate the bindings file. Tried:\n'
    + tries.map(function (a) { return opts.arrow + a }).join('\n'))
  err.tries = tries
  throw err
}
module.exports = exports = bindings


/**
 * Gets the filename of the JavaScript file that invokes this function.
 * Used to help find the root directory of a module.
 * Optionally accepts an filename argument to skip when searching for the invoking filename
 */

exports.getFileName = function getFileName (calling_file) {
  var origPST = Error.prepareStackTrace
    , origSTL = Error.stackTraceLimit
    , dummy = {}
    , fileName

  Error.stackTraceLimit = 10

  Error.prepareStackTrace = function (e, st) {
    for (var i=0, l=st.length; i<l; i++) {
      fileName = st[i].getFileName()
      if (fileName !== __filename) {
        if (calling_file) {
            if (fileName !== calling_file) {
              return
            }
        } else {
          return
        }
      }
    }
  }

  // run the 'prepareStackTrace' function above
  Error.captureStackTrace(dummy)
  dummy.stack

  // cleanup
  Error.prepareStackTrace = origPST
  Error.stackTraceLimit = origSTL

  return fileName
}

/**
 * Gets the root directory of a module, given an arbitrary filename
 * somewhere in the module tree. The "root directory" is the directory
 * containing the `package.json` file.
 *
 *   In:  /home/nate/node-native-module/lib/index.js
 *   Out: /home/nate/node-native-module
 */

exports.getRoot = function getRoot (file) {
  var dir = dirname(file)
    , prev
  while (true) {
    if (dir === '.') {
      // Avoids an infinite loop in rare cases, like the REPL
      dir = process.cwd()
    }
    if (exists(join(dir, 'package.json')) || exists(join(dir, 'node_modules'))) {
      // Found the 'package.json' file or 'node_modules' dir; we're done
      return dir
    }
    if (prev === dir) {
      // Got to the top
      throw new Error('Could not find module root given file: "' + file
                    + '". Do you have a `package.json` file? ')
    }
    // Try the parent dir next
    prev = dir
    dir = join(dir, '..')
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ }),
/* 179 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),
/* 180 */
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(170);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process !== 'undefined' && process.type === 'renderer') {
  module.exports = __webpack_require__(181);
} else {
  module.exports = __webpack_require__(183);
}


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var tty = __webpack_require__(197);
var util = __webpack_require__(174);

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(170);
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return /^debug_/i.test(key);
}).reduce(function (obj, key) {
  // camel-case
  var prop = key
    .substring(6)
    .toLowerCase()
    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
  else if (val === 'null') val = null;
  else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * The file descriptor to write the `debug()` calls to.
 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
 *
 *   $ DEBUG_FD=3 node script.js 3>debug.log
 */

var fd = parseInt(process.env.DEBUG_FD, 10) || 2;

if (1 !== fd && 2 !== fd) {
  util.deprecate(function(){}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')()
}

var stream = 1 === fd ? process.stdout :
             2 === fd ? process.stderr :
             createWritableStdioStream(fd);

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts
    ? Boolean(exports.inspectOpts.colors)
    : tty.isatty(fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts)
    .replace(/\s*\n\s*/g, ' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var prefix = '  \u001b[3' + c + ';1m' + name + ' ' + '\u001b[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push('\u001b[3' + c + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
  } else {
    args[0] = new Date().toUTCString()
      + ' ' + name + ' ' + args[0];
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to `stream`.
 */

function log() {
  return stream.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Copied from `node/src/node.js`.
 *
 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
 */

function createWritableStdioStream (fd) {
  var stream;
  var tty_wrap = process.binding('tty_wrap');

  // Note stream._type is used for test-module-load-list.js

  switch (tty_wrap.guessHandleType(fd)) {
    case 'TTY':
      stream = new tty.WriteStream(fd);
      stream._type = 'tty';

      // Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    case 'FILE':
      var fs = __webpack_require__(166);
      stream = new fs.SyncWriteStream(fd, { autoClose: false });
      stream._type = 'fs';
      break;

    case 'PIPE':
    case 'TCP':
      var net = __webpack_require__(195);
      stream = new net.Socket({
        fd: fd,
        readable: false,
        writable: true
      });

      // FIXME Should probably have an option in net.Socket to create a
      // stream from an existing fd which is writable only. But for now
      // we'll just add this hack and set the `readable` member to false.
      // Test: ./node test/fixtures/echo.js < /etc/passwd
      stream.readable = false;
      stream.read = null;
      stream._type = 'pipe';

      // FIXME Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    default:
      // Probably an error on in uv_guess_handle()
      throw new Error('Implement me. Unknown stream file type!');
  }

  // For supporting legacy API we put the FD here.
  stream.fd = fd;

  stream._isStdio = true;

  return stream;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init (debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

if (process.browser) {
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
} else {
  scheduleDrain = function () {
    process.nextTick(nextTick);
  };
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var immediate = __webpack_require__(184);

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];
/* istanbul ignore else */
if (!process.browser) {
  // in which we actually take advantage of JS scoping
  var UNHANDLED = ['UNHANDLED'];
}

module.exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  /* istanbul ignore else */
  if (!process.browser) {
    this.handled = UNHANDLED;
  }
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  /* istanbul ignore else */
  if (!process.browser) {
    if (this.handled === UNHANDLED) {
      this.handled = null;
    }
  }
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  /* istanbul ignore else */
  if (!process.browser) {
    if (self.handled === UNHANDLED) {
      immediate(function () {
        if (self.handled === UNHANDLED) {
          process.emit('unhandledRejection', error, self);
        }
      });
    }
  }
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

Promise.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

Promise.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

Promise.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

Promise.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (typeof global.Promise !== 'function') {
  global.Promise = __webpack_require__(185);
}


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(167);

module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; }
	if (keys(obj).length !== 0) { return false; }
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__(168);

var implementation = __webpack_require__(171);
var getPolyfill = __webpack_require__(172);
var shim = __webpack_require__(189);

var polyfill = getPolyfill();

defineProperties(polyfill, {
	implementation: implementation,
	getPolyfill: getPolyfill,
	shim: shim
});

module.exports = polyfill;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(168);
var getPolyfill = __webpack_require__(172);

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bindings = __webpack_require__(178)('serialport.node');
var listUnix = __webpack_require__(191);

var linux = process.platform !== 'win32' && process.platform !== 'darwin';

function listLinux(callback) {
  callback = callback || function(err) {
    if (err) { this.emit('error', err) }
  }.bind(this);
  return listUnix(callback);
};

var platformOptions = {};
if (process.platform !== 'win32') {
  platformOptions = {
    vmin: 1,
    vtime: 0
  };
}

module.exports = {
  close: bindings.close,
  drain: bindings.drain,
  flush: bindings.flush,
  list: linux ? listLinux : bindings.list,
  open: bindings.open,
  SerialportPoller: bindings.SerialportPoller,
  set: bindings.set,
  update: bindings.update,
  write: bindings.write,
  platformOptions: platformOptions
};


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(186);
var childProcess = __webpack_require__(194);
var fs = __webpack_require__(166);
var path = __webpack_require__(173);

function promisify(func) {
  return function(arg) {
    return new Promise(function(resolve, reject) {
      func(arg, function(err, data) {
        if (err) {
          return reject(err);
        }
        resolve(data);
      });
    });
  };
}

function promisedFilter(func) {
  return function(data) {
    var shouldKeep = data.map(func);
    return Promise.all(shouldKeep).then(function(keep) {
      return data.filter(function(path, index) {
        return keep[index];
      });
    });
  };
}

var statAsync = promisify(fs.stat);
var readdirAsync = promisify(fs.readdir);
var execAsync = promisify(childProcess.exec);

function udevParser(output) {
  var udevInfo = output.split('\n').reduce(function(info, line) {
    if (!line || line.trim() === '') {
      return info;
    }
    var parts = line.split('=').map(function(part) {
      return part.trim();
    });

    info[parts[0].toLowerCase()] = parts[1];

    return info;
  }, {});

  var pnpId;
  if (udevInfo.devlinks) {
    udevInfo.devlinks.split(' ').forEach(function(path) {
      if (path.indexOf('/by-id/') === -1) { return }
      pnpId = path.substring(path.lastIndexOf('/') + 1);
    });
  }

  var vendorId = udevInfo.id_vendor_id;
  if (vendorId && vendorId.substring(0, 2) !== '0x') {
    vendorId = '0x' + vendorId;
  }

  var productId = udevInfo.id_model_id;
  if (productId && productId.substring(0, 2) !== '0x') {
    productId = '0x' + productId;
  }

  return {
    comName: udevInfo.devname,
    manufacturer: udevInfo.id_vendor,
    serialNumber: udevInfo.id_serial,
    pnpId: pnpId,
    vendorId: vendorId,
    productId: productId
  };
}

function checkPathAndDevice(path) {
  // get only serial port names
  if (!(/(tty(S|ACM|USB|AMA|MFD)|rfcomm)/).test(path)) {
    return false;
  }
  return statAsync(path).then(function(stats) {
    return stats.isCharacterDevice();
  });
}

function lookupPort(file) {
  var udevadm = 'udevadm info --query=property -p $(udevadm info -q path -n ' + file + ')';
  return execAsync(udevadm).then(udevParser);
}

function listUnix(callback) {
  var dirName = '/dev';
  readdirAsync(dirName)
    .catch(function(err) {
      // if this directory is not found we just pretend everything is OK
      // TODO Depreciated this check?
      if (err.errno === 34) {
        return [];
      }
      throw err;
    })
    .then(function(data) { return data.map(function(file) { return path.join(dirName, file) }) })
    .then(promisedFilter(checkPathAndDevice))
    .then(function(data) { return Promise.all(data.map(lookupPort)) })
    .then(function(data) { callback(null, data) }, function(err) { callback(err) });
}

module.exports = listUnix;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Copyright 2011 Chris Williams <chris@iterativedesigns.com>

module.exports = {
  raw: function(emitter, buffer) {
    emitter.emit('data', buffer);
  },

  // encoding: ascii utf8 utf16le ucs2 base64 binary hex
  // More: http://nodejs.org/api/buffer.html#buffer_buffer
  readline: function(delimiter, encoding) {
    if (typeof delimiter === 'undefined' || delimiter === null) { delimiter = '\r' }
    if (typeof encoding === 'undefined' || encoding === null) { encoding = 'utf8' }
    // Delimiter buffer saved in closure
    var data = '';
    return function(emitter, buffer) {
      // Collect data
      data += buffer.toString(encoding);
      // Split collected data by delimiter
      var parts = data.split(delimiter);
      data = parts.pop();
      parts.forEach(function(part) {
        emitter.emit('data', part);
      });
    };
  },

  // Emit a data event every `length` bytes
  byteLength: function(length) {
    var data = new Buffer(0);
    return function(emitter, buffer) {
      data = Buffer.concat([data, buffer]);
      while (data.length >= length) {
        var out = data.slice(0, length);
        data = data.slice(length);
        emitter.emit('data', out);
      }
    };
  },

  // Emit a data event each time a byte sequence (delimiter is an array of byte) is found
  // Sample usage : byteDelimiter([10, 13])
  byteDelimiter: function(delimiter) {
    if (Object.prototype.toString.call(delimiter) !== '[object Array]') {
      delimiter = [ delimiter ];
    }
    var buf = [];
    var nextDelimIndex = 0;
    return function(emitter, buffer) {
      for (var i = 0; i < buffer.length; i++) {
        buf[buf.length] = buffer[i];
        if (buf[buf.length - 1] === delimiter[nextDelimIndex]) {
          nextDelimIndex++;
        }
        if (nextDelimIndex === delimiter.length) {
          emitter.emit('data', buf);
          buf = [];
          nextDelimIndex = 0;
        }
      }
    };
  }
};


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Copyright 2011 Chris Williams <chris@iterativedesigns.com>

// 3rd Party Dependencies
var debug = __webpack_require__(182)('serialport');

// shims
var assign = __webpack_require__(188).getPolyfill();

// Internal Dependencies
var SerialPortBinding = __webpack_require__(190);
var parsers = __webpack_require__(192);

// Built-ins Dependencies
var fs = __webpack_require__(166);
var stream = __webpack_require__(196);
var util = __webpack_require__(174);

//  VALIDATION ARRAYS
var DATABITS = [5, 6, 7, 8];
var STOPBITS = [1, 1.5, 2];
var PARITY = ['none', 'even', 'mark', 'odd', 'space'];
var FLOWCONTROLS = ['xon', 'xoff', 'xany', 'rtscts'];
var SET_OPTIONS = ['brk', 'cts', 'dtr', 'dts', 'rts'];

// Stuff from ReadStream, refactored for our usage:
var kPoolSize = 40 * 1024;
var kMinPoolSpace = 128;

var defaultSettings = {
  baudRate: 9600,
  autoOpen: true,
  parity: 'none',
  xon: false,
  xoff: false,
  xany: false,
  rtscts: false,
  hupcl: true,
  dataBits: 8,
  stopBits: 1,
  bufferSize: 64 * 1024,
  lock: true,
  parser: parsers.raw,
  platformOptions: SerialPortBinding.platformOptions
};

var defaultSetFlags = {
  brk: false,
  cts: false,
  dtr: true,
  dts: false,
  rts: true
};

// deprecate the lowercase version of these options next major release
var LOWERCASE_OPTIONS = [
  'baudRate',
  'dataBits',
  'stopBits',
  'bufferSize',
  'platformOptions'
];

function correctOptions(options) {
  LOWERCASE_OPTIONS.forEach(function(name) {
    var lowerName = name.toLowerCase();
    if (options.hasOwnProperty(lowerName)) {
      var value = options[lowerName];
      delete options[lowerName];
      options[name] = value;
    }
  });
  return options;
}

function SerialPort(path, options, callback) {
  if (typeof callback === 'boolean') {
    throw new TypeError('`openImmediately` is now called `autoOpen` and is a property of options');
  }

  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  options = options || {};

  stream.Stream.call(this);

  if (!path) {
    throw new TypeError('No path specified');
  }

  this.path = path;

  var correctedOptions = correctOptions(options);
  var settings = assign({}, defaultSettings, correctedOptions);

  if (typeof settings.baudRate !== 'number') {
    throw new TypeError('Invalid "baudRate" must be a number got: ' + settings.baudRate);
  }

  if (DATABITS.indexOf(settings.dataBits) === -1) {
    throw new TypeError('Invalid "databits": ' + settings.dataBits);
  }

  if (STOPBITS.indexOf(settings.stopBits) === -1) {
    throw new TypeError('Invalid "stopbits": ' + settings.stopbits);
  }

  if (PARITY.indexOf(settings.parity) === -1) {
    throw new TypeError('Invalid "parity": ' + settings.parity);
  }

  FLOWCONTROLS.forEach(function(control) {
    if (typeof settings[control] !== 'boolean') {
      throw new TypeError('Invalid "' + control + '" is not boolean');
    }
  });

  settings.disconnectedCallback = this._disconnected.bind(this);
  settings.dataCallback = settings.parser.bind(this, this);

  this.fd = null;
  this.paused = true;
  this.opening = false;
  this.closing = false;

  if (process.platform !== 'win32') {
    this.bufferSize = settings.bufferSize;
    this.readable = true;
    this.reading = false;
  }

  this.options = settings;

  if (this.options.autoOpen) {
    // is nextTick necessary?
    process.nextTick(this.open.bind(this, callback));
  }
}

util.inherits(SerialPort, stream.Stream);

SerialPort.prototype._error = function(error, callback) {
  if (callback) {
    callback.call(this, error);
  } else {
    this.emit('error', error);
  }
};

SerialPort.prototype.open = function(callback) {
  if (this.isOpen()) {
    return this._error(new Error('Port is already open'), callback);
  }

  if (this.opening) {
    return this._error(new Error('Port is opening'), callback);
  }

  this.paused = true;
  this.readable = true;
  this.reading = false;
  this.opening = true;

  SerialPortBinding.open(this.path, this.options, function(err, fd) {
    this.opening = false;
    if (err) {
      debug('SerialPortBinding.open had an error', err);
      return this._error(err, callback);
    }
    this.fd = fd;
    this.paused = false;

    if (process.platform !== 'win32') {
      this.serialPoller = new SerialPortBinding.SerialportPoller(this.fd, function(err) {
        if (!err) {
          this._read();
        } else {
          this._disconnected(err);
        }
      }.bind(this));
      this.serialPoller.start();
    }

    this.emit('open');
    if (callback) { callback.call(this, null) }
  }.bind(this));
};

SerialPort.prototype.update = function(options, callback) {
  if (!this.isOpen()) {
    debug('update attempted, but port is not open');
    return this._error(new Error('Port is not open'), callback);
  }

  var correctedOptions = correctOptions(options);
  var settings = assign({}, defaultSettings, correctedOptions);
  this.options.baudRate = settings.baudRate;

  SerialPortBinding.update(this.fd, this.options, function(err) {
    if (err) {
      return this._error(err, callback);
    }
    if (callback) { callback.call(this, null) }
  }.bind(this));
};

SerialPort.prototype.isOpen = function() {
  return this.fd !== null && !this.closing;
};

SerialPort.prototype.write = function(buffer, callback) {
  if (!this.isOpen()) {
    debug('write attempted, but port is not open');
    return this._error(new Error('Port is not open'), callback);
  }

  if (!Buffer.isBuffer(buffer)) {
    buffer = new Buffer(buffer);
  }

  debug('write ' + buffer.length + ' bytes of data');
  SerialPortBinding.write(this.fd, buffer, function(err) {
    if (err) {
      debug('SerialPortBinding.write had an error', err);
      return this._error(err, callback);
    }
    if (callback) { callback.call(this, null) }
  }.bind(this));
};

if (process.platform !== 'win32') {
  SerialPort.prototype._read = function() {
    if (!this.readable || this.paused || this.reading || this.closing) {
      return;
    }

    this.reading = true;

    if (!this.pool || this.pool.length - this.pool.used < kMinPoolSpace) {
      // discard the old pool. Can't add to the free list because
      // users might have references to slices on it.
      this.pool = new Buffer(kPoolSize);
      this.pool.used = 0;
    }

    // Grab another reference to the pool in the case that while we're in the
    // thread pool another read() finishes up the pool, and allocates a new
    // one.
    var toRead = Math.min(this.pool.length - this.pool.used, ~~this.bufferSize);
    var start = this.pool.used;

    var _afterRead = function(err, bytesRead, readPool, bytesRequested) {
      this.reading = false;
      if (err) {
        if (err.code && err.code === 'EAGAIN') {
          if (this.isOpen()) {
            this.serialPoller.start();
          }
        // handle edge case were mac/unix doesn't clearly know the error.
        } else if (err.code && (err.code === 'EBADF' || err.code === 'ENXIO' || (err.errno === -1 || err.code === 'UNKNOWN'))) {
          this._disconnected(err);
        } else {
          this.fd = null;
          this.readable = false;
          this.emit('error', err);
        }
        return;
      }

      // Since we will often not read the number of bytes requested,
      // let's mark the ones we didn't need as available again.
      this.pool.used -= bytesRequested - bytesRead;

      if (bytesRead === 0) {
        if (this.isOpen()) {
          this.serialPoller.start();
        }
      } else {
        var b = this.pool.slice(start, start + bytesRead);

        // do not emit events if the stream is paused
        if (this.paused) {
          if (!this.buffer) {
            this.buffer = new Buffer(0);
          }
          this.buffer = Buffer.concat([this.buffer, b]);
          return;
        }
        this._emitData(b);

        // do not emit events anymore after we declared the stream unreadable
        if (!this.readable) {
          return;
        }
        this._read();
      }
    }.bind(this);

    fs.read(this.fd, this.pool, this.pool.used, toRead, null, function(err, bytesRead) {
      var readPool = this.pool;
      var bytesRequested = toRead;
      _afterRead(err, bytesRead, readPool, bytesRequested);
    }.bind(this));

    this.pool.used += toRead;
  };

  SerialPort.prototype._emitData = function(data) {
    this.options.dataCallback(data);
  };

  SerialPort.prototype.pause = function() {
    this.paused = true;
  };

  SerialPort.prototype.resume = function() {
    this.paused = false;

    if (this.buffer) {
      var buffer = this.buffer;
      this.buffer = null;
      this._emitData(buffer);
    }

    // No longer open?
    if (!this.isOpen()) {
      return;
    }

    this._read();
  };
} // if !'win32'

SerialPort.prototype._disconnected = function(err) {
  this.paused = true;
  this.emit('disconnect', err);
  if (this.closing) {
    return;
  }

  if (this.fd === null) {
    return;
  }

  this.closing = true;
  if (process.platform !== 'win32') {
    this.readable = false;
    this.serialPoller.close();
  }

  SerialPortBinding.close(this.fd, function(err) {
    this.closing = false;
    if (err) {
      debug('Disconnect close completed with error: ', err);
    }
    this.fd = null;
    this.emit('close');
  }.bind(this));
};

SerialPort.prototype.close = function(callback) {
  this.paused = true;

  if (this.closing) {
    debug('close attempted, but port is already closing');
    return this._error(new Error('Port is not open'), callback);
  }

  if (!this.isOpen()) {
    debug('close attempted, but port is not open');
    return this._error(new Error('Port is not open'), callback);
  }

  this.closing = true;

  // Stop polling before closing the port.
  if (process.platform !== 'win32') {
    this.readable = false;
    this.serialPoller.close();
  }
  SerialPortBinding.close(this.fd, function(err) {
    this.closing = false;
    if (err) {
      debug('SerialPortBinding.close had an error', err);
      return this._error(err, callback);
    }

    this.fd = null;
    this.emit('close');
    if (callback) { callback.call(this, null) }
  }.bind(this));
};

SerialPort.prototype.flush = function(callback) {
  if (!this.isOpen()) {
    debug('flush attempted, but port is not open');
    return this._error(new Error('Port is not open'), callback);
  }

  SerialPortBinding.flush(this.fd, function(err, result) {
    if (err) {
      debug('SerialPortBinding.flush had an error', err);
      return this._error(err, callback);
    }
    if (callback) { callback.call(this, null, result) }
  }.bind(this));
};

SerialPort.prototype.set = function(options, callback) {
  if (!this.isOpen()) {
    debug('set attempted, but port is not open');
    return this._error(new Error('Port is not open'), callback);
  }

  options = options || {};
  if (!callback && typeof options === 'function') {
    callback = options;
    options = {};
  }

  var settings = {};
  for (var i = SET_OPTIONS.length - 1; i >= 0; i--) {
    var flag = SET_OPTIONS[i];
    if (options[flag] !== undefined) {
      settings[flag] = options[flag];
    } else {
      settings[flag] = defaultSetFlags[flag];
    }
  }

  SerialPortBinding.set(this.fd, settings, function(err) {
    if (err) {
      debug('SerialPortBinding.set had an error', err);
      return this._error(err, callback);
    }
    if (callback) { callback.call(this, null) }
  }.bind(this));
};

SerialPort.prototype.drain = function(callback) {
  if (!this.isOpen()) {
    debug('drain attempted, but port is not open');
    return this._error(new Error('Port is not open'), callback);
  }

  SerialPortBinding.drain(this.fd, function(err) {
    if (err) {
      debug('SerialPortBinding.drain had an error', err);
      return this._error(err, callback);
    }
    if (callback) { callback.call(this, null) }
  }.bind(this));
};

SerialPort.parsers = parsers;
SerialPort.list = SerialPortBinding.list;

// Write a depreciation warning once
Object.defineProperty(SerialPort, 'SerialPort', {
  get: function() {
    console.warn('DEPRECATION: Please use `require(\'serialport\')` instead of `require(\'serialport\').SerialPort`');
    Object.defineProperty(SerialPort, 'SerialPort', {
      value: SerialPort
    });
    return SerialPort;
  },
  configurable: true
});

module.exports = SerialPort;


/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ })
/******/ ]);
//# sourceMappingURL=sensorium.js.map