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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * @fileOverview 工具类函数
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * limit value
   * @param  {Number} value
   * @param  {Array} range  (optional) limit value range, such as [-255, 255], [0, 3000], default is [-255, 255]
   * @return {Number} newSpeed the result value in limit.
   */
  limitValue: function (value, range) {
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
  arrayBufferFromArray: function (data) {
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
  arrayFromArrayBuffer: function (buffer) {
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
  buffer2string: function (buf) {
    var buffer = new Uint8Array(buf);
    return Array.prototype.join.call(buffer, " ");
  },

  /**
   * [string2buffer converts string to array buffer format]
   * @param  {String} str [the input string]
   * @return {Uint8Array}     [the output uint8 array buffer]
   */
  string2buffer: function (str) {
    var buffer = new Uint8Array(str.split(" "));
    return buffer;
  },

  /**
   * 将十进制字符串数组转为16进制
   * @param  {Array}  data        to be transformed data, such as: ["01", "55", "12"]
   * @param  {Boolean} isUpperCase whether need output upperCase string.
   * @return {String} 16 进制字符串
   */
  intStrToHexStr: function (data, isUpperCase) {
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
  hexStr2IntArray: function (str) {
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
  float32ToBytes: function (value) {
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
  bigIntToBytes: function (value) {
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
  longToBytes: function (value) {
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
  upperCaseFirstLetter: function (str) {
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
  emotionArrayToBytes: function (matrixArray) {
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
  bytesToInt: function (bytes) {
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
  bytesToString: function (bytes) {
    var str = "";
    for (var i = 0; i < bytes.length; i++) {
      str += String.fromCharCode(bytes[i]);
    }
    return str;
  },

  getSecurityValue(val1, val2, type) {
    return typeof val1 === type ? val1 : val2;
  },

  /**
   * 函数式编程
   * @param  {Function} func 方法
   * @param  {Arguments} args 方法的参数
   * @return {*}      返回结果由方法决定
   */
  composer(func, args) {
    return func(...args);
  }

});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineNumber", function() { return defineNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineString", function() { return defineString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineArray", function() { return defineArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineBoolean", function() { return defineBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineObject", function() { return defineObject; });
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
        let value = defaultValue;
        let condition = type === 'boolean' ? typeof param === type : typeof param === type || param === 1 || param === 0;
        if (condition) {
            value = param;
        } else {
            console.warn(`param '${param}' is not a ${type}!`);
        }
        return value;
    };
};

let defineNumber = defineType('number'),
    defineString = defineType('string'),
    defineArray = defineType('array'),
    defineBoolean = defineType('boolean'),
    defineObject = defineType('object');



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transport__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_value_wrapper__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_promise__ = __webpack_require__(11);
/**
 * @fileOverview 协议发送基类.
 */
//es6 module





// var Transport = require('./transport');
// var Api = require("../protocol/api");

class Command {
  constructor() {
    this.CONFIG = {
      // 开启超时重发
      OPEN_RESNET_MODE: false,
      // 超时重发的次数
      RESENT_COUNT: 1,
      // 读值指令超时的设定
      COMMAND_SEND_TIMEOUT: 1000
    };
  }

  /**
   * 执行 buf 协议
   * @param  {Array}   buf      协议
   * @param  {Function} callback 回调
   * @return {[type]}            [description]
   */
  exec(buf, callback) {
    console.log(buf);
  }

  execRead(buf, callback) {
    __WEBPACK_IMPORTED_MODULE_0__transport__["default"].send(buf);
  }

  execWrite(buf, callback) {
    __WEBPACK_IMPORTED_MODULE_0__transport__["default"].send(buf);
  }

  /**
   * Get sensor's value.
   * @param  {String}   deviceType the sensor's type.
   * @param  {Array}   buf    buf assembles from arguments such as port, slot etc.
   * @param  {Function} callback   the function to be excuted.
   */
  getSensorValue(deviceType, buf, callback) {
    if (callback == undefined && typeof options == 'function') {
      callback = options;
      options = {};
    }
    var params = {};
    params.deviceType = deviceType;
    params.callback = callback;
    // params.port = options.port;
    // params.slot = options.slot || 2;
    var valueWrapper = new __WEBPACK_IMPORTED_MODULE_1__core_value_wrapper__["a" /* default */]();
    var index = __WEBPACK_IMPORTED_MODULE_3__core_promise__["a" /* default */].add(deviceType, callback, valueWrapper);
    // params.index = index;
    // 发送读取指令
    this._doGetSensorValue(params);
    if (this.CONFIG.OPEN_RESNET_MODE) {
      // 执行超时检测
      this._handlerCommandSendTimeout(params);
    }
    return valueWrapper;
  }

  _doGetSensorValue(params) {

    // this._readBlockStatus(params);

    // 模拟传感器回传数据
    // setTimeout(function() {
    //   that.sensorCallback(params.index, 111);
    // }, 1000)
  }

  /**
   * Read module's value.
   * @param  {object} params command params.
   */
  // _readBlockStatus(params) {
  //   this.api = new Api(Transport.get());

  //   var deviceType = params.deviceType;
  //   var index = params.index;
  //   var port = params.port;
  //   var slot = params.slot || null;
  //   var funcName = 'this.api.read' + utils.upperCaseFirstLetter(deviceType);
  //   var paramsStr = '(' + index + ',' + port + ',' + slot + ')';
  //   var func = funcName + paramsStr;
  //   eval(func);
  // };

  /**
   * Command sending timeout handler.
   * @param  {Object} params params.
   */
  _handlerCommandSendTimeout(params) {
    var that = this;
    var promiseItem = __WEBPACK_IMPORTED_MODULE_3__core_promise__["a" /* default */].requestList[params.index];
    setTimeout(function () {
      if (promiseItem.hasReceivedValue) {
        // 成功拿到数据，不进行处理
        return;
      } else {
        // 超过规定的时间，还没有拿到数据，需要进行超时重发处理
        if (promiseItem.resentCount >= that.CONFIG.RESENT_COUNT) {
          // 如果重发的次数大于规定次数,则终止重发
          console.log("【resend ends】");
          return;
        } else {
          console.log('【resend】:' + params.index);
          promiseItem.resentCount = promiseItem.resentCount || 0;
          promiseItem.resentCount++;
          that._doGetSensorValue(params);
          that._handlerCommandSendTimeout(params);
        }
      }
    }, that.CONFIG.COMMAND_SEND_TIMEOUT);
  }

  /**
   * Get value form sensor and put the value to user's callback.
   * @param  {Number} index  the index of sensor's request command in promiseList
   * @param  {Number} result the value of sensor.
   */
  sensorCallback(index, result) {
    var deviceType = __WEBPACK_IMPORTED_MODULE_3__core_promise__["a" /* default */].getType(index);
    console.debug(deviceType + ": " + result);
    __WEBPACK_IMPORTED_MODULE_3__core_promise__["a" /* default */].receiveValue(index, result);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (new Command());

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils__ = __webpack_require__(0);
/**
 * @fileOverview  Api api list
 */


/**
 * buf 协议组装器
 * @param  {Object} obj  对象
 * @param  {Number} obj.index  由上位机赋值
 * @param  {Number} obj.mode  查询、执行
 * @param  {Number} obj.id  指令ID
 * @param  {Arguments} args 其他参数
 * @return {Array}      返回数组
 */
function bufAssembler(obj, ...args) {
  const modes = [0x01, 0x02, 0x04];
  const bufHead = [0xff, 0x55];
  let bufLength = 0;
  //todo：完善抛错提示
  if (modes.indexOf(obj.mode) === -1) {
    throw new Error(`mode should be one of ${modes}`);
  } else if (obj.mode != 0x04 && typeof obj.id === 'undefined') {
    throw new Error(`id should not be empty`);
  }
  const bufAttr = new Array(obj.index || 0, obj.mode, obj.id);
  //to fix:
  bufLength = bufAttr.length + args.length;
  return bufHead.concat([bufLength], bufAttr, args);
}

function protocolAssembler() {
  /**
   * Set dc motor speed.
   * @param {number} port  port number, vailable is: 1,2,3,4
   * @param {number} speed speed, the range is -255 ~ 255
   * @example
   *     ff 55 06 00 02 0a 01 ff 00
   */
  this.setDcMotor = function (port, speed) {
    speed = __WEBPACK_IMPORTED_MODULE_0__core_utils__["default"].limitValue(speed);
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
    speed = __WEBPACK_IMPORTED_MODULE_0__core_utils__["default"].limitValue(speed);
    return bufAssembler({ mode: 0x02, id: 0x3d }, 0, slot, speed & 0xff, speed >> 8 & 0xff);
  };

  /**
   * Set both left speed and right speed with one command.
   * @param {number} leftSpeed  left speed, the range is -255 ~ 255
   * @param {number} rightSpeed right speed, the range is -255 ~ 255
   * @example
   *     ff 55 07 00 02 05 64 00 64 00
   */
  this.setJoystick = function (leftSpeed, rightSpeed) {
    leftSpeed = __WEBPACK_IMPORTED_MODULE_0__core_utils__["default"].limitValue(leftSpeed);
    rightSpeed = __WEBPACK_IMPORTED_MODULE_0__core_utils__["default"].limitValue(rightSpeed);
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
    turnExtent = __WEBPACK_IMPORTED_MODULE_0__core_utils__["default"].limitValue(turnExtent);
    speed = __WEBPACK_IMPORTED_MODULE_0__core_utils__["default"].limitValue(speed);
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
    speed = __WEBPACK_IMPORTED_MODULE_0__core_utils__["default"].limitValue(speed, [0, 3000]);
    var distanceBytes = __WEBPACK_IMPORTED_MODULE_0__core_utils__["default"].longToBytes(distance);
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
    r = __WEBPACK_IMPORTED_MODULE_0__core_utils__["default"].limitValue(r, [0, 255]);
    g = __WEBPACK_IMPORTED_MODULE_0__core_utils__["default"].limitValue(g, [0, 255]);
    b = __WEBPACK_IMPORTED_MODULE_0__core_utils__["default"].limitValue(b, [0, 255]);
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
    degree = __WEBPACK_IMPORTED_MODULE_0__core_utils__["default"].limitValue(degree, [0, 180]);
    var a = [0xff, 0x55, 0x06, 0, 0x02, 0x0b, port, slot, degree];
    return transport.send(a);
  };

  /**
   * Set Seven-segment digital tube number.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {float} number  the number to be displayed, -999 ~ 9999
   * @exmpa
   *     ff 55 08 00 02 09 06 00 00 c8 42
   */
  this.setSevenSegment = function (port, number) {
    number = __WEBPACK_IMPORTED_MODULE_0__core_utils__["default"].limitValue(number, [-999, 9999]);
    var byte4Array = __WEBPACK_IMPORTED_MODULE_0__core_utils__["default"].float32ToBytes(number);
    return bufAssembler({ mode: 0x02, id: 0x09 }, port, byte4Array[0], byte4Array[1], byte4Array[2], byte4Array[3]);
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

    return bufAssembler({ mode: 0x02, id: 0x29 }, port, 0x01, xAxis, yAxis, char.length, ...charAsciiArray);
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

    return bufAssembler({ mode: 0x02, id: 0x29 }, port, 0x02, xAxis, yAxis, ...emotionData);
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
    hour = __WEBPACK_IMPORTED_MODULE_0__core_utils__["default"].limitValue(hour, [0, 23]);
    minute = __WEBPACK_IMPORTED_MODULE_0__core_utils__["default"].limitValue(minute, [0, 59]);
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
    var byte4Array = __WEBPACK_IMPORTED_MODULE_0__core_utils__["default"].float32ToBytes(number);
    return bufAssembler({ mode: 0x02, id: 0x29 }, port, 0x04, byte4Array[0], byte4Array[1], byte4Array[2], byte4Array[3]);
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
    const BEAT = {
      eight: 125,
      quater: 250,
      half: 500,
      one: 1000,
      double: 2000
    };

    return bufAssembler({ mode: 0x02, id: 0x22 }, 0x09, TONE[tone] & 0xff, TONE[tone] >> 8 & 0xff, BEAT[beat] & 0xff, BEAT[beat] >> 8 & 0xff);
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
    speed = __WEBPACK_IMPORTED_MODULE_0__core_utils__["default"].limitValue(speed, [0, 300]);
    var byte4Array = __WEBPACK_IMPORTED_MODULE_0__core_utils__["default"].float32ToBytes(angle);
    var a = [0xff, 0x55, 0x0b, 0, 0x02, 0x0c, 0x08, slot, speed & 0xff, speed >> 8 & 0xff, byte4Array[0], byte4Array[1], byte4Array[2], byte4Array[3]];
    return transport.send(a);
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
    // var a = [
    //   0xff,0x55,
    //   0x06, index,
    //   0x01,
    //   0x3d,
    //   0x00,
    //   slot,
    //   type
    // ];
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
  // this.readDigGPIO = function(index, port) {
  //   var a = [
  //     0xff,0x55,
  //     0x04, index,
  //     0x01,
  //     0x1e,
  //     port,
  //   ];
  //   return transport.send(a);
  // };

  /**
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: analog GPIO port
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 1f 02
   */
  // this.readAnalogGPIO = function(index, port) {
  //   var a = [
  //     0xff,0x55,
  //     0x04, index,
  //     0x01,
  //     0x1f,
  //     port,
  //   ];
  //   return transport.send(a);
  // };

  /**
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: GPIO port
   * @param  {Number} key   vailable: 0,1
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 25 0d 20 4e
   */
  // this.readGPIOContinue = function(index, port, key) {
  //   var a = [
  //     0xff,0x55,
  //     0x05, index,
  //     0x01,
  //     0x25,
  //     port,
  //     key,
  //   ];
  //   return transport.send(a);
  // };

  /**
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: GPIO port
   * @param  {Number} key   vailable: 0,1
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 24 45 40
   */
  // this.readDoubleGPIO = function(index, port1, port2) {
  //   var a = [
  //     0xff,0x55,
  //     0x05, index,
  //     0x01,
  //     0x24,
  //     port1,
  //     port2,
  //   ];
  //   return transport.send(a);
  // };

  /**
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: analog GPIO port
   * @param  {Number} key   vailable: 0,1
   * @return {Number}       [description]
   * @example
   * ff 55 03 00 01 32
   */
  // this.readRuntime = function(index) {
  //   var a = [
  //     0xff,0x55,
  //     0x03, index,
  //     0x01,
  //     0x32,
  //   ];
  //   return transport.send(a);
  // };

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

/* harmony default export */ __webpack_exports__["a"] = (new protocolAssembler());

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const { defineNumber } = __webpack_require__(1);
const Transport = __webpack_require__(10);
const Api = __webpack_require__(48);

// 通过一个全局变量保存实例
let POOL = {};

class Electronic {
  /**
   * Electron类，电子模块基类
   * @param {number} port - 电子模块port口 
   * @param {number} slot - 电子模块slot口
   */
  constructor(port, slot) {
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
  }
}

module.exports = Electronic;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Settings = {
    // 数据发送与接收相关
    // 回复数据的index位置
    READ_BYTES_INDEX: 2,
    // 数据发送默认的驱动driver: makeblockhd, cordova
    DEFAULT_CONF: {},
    SUPPORTLIST: ['Mcore', 'Auriga', 'MegaPi', 'Orion', 'Neuron']
};

/* harmony default export */ __webpack_exports__["a"] = (Settings);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__communicate_transport__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__protocol_settings__ = __webpack_require__(5);
/**
 * @fileOverview board 用做通信基类，连接收和发送接口.
 * @author Hyman
 */
//es6 module


// const Command = require('../communicate/command');


const createModuleId = function (eModule, args) {
  args = [...args]; //转数组
  let name = eModule.name;
  let argsStamp = eModule.argsStamp();
  let argsLength = args.length;
  if (argsLength < argsStamp) {
    //参数不足
    console.warn(`there's lack of ${argsStamp - argsLength} argument(s), and ${eModule.name} may not work as a result`);
  } else if (argsLength > argsStamp) {
    //参数多余
    args.splice(argsStamp);
  }
  return [name].concat(...args).join('_').toLowerCase();
};

// 超类： 具备发送、接收方法
class Board {
  constructor(conf) {
    this._config = null;
    //连接
    this.connecting = {};
    this.init(conf);
  }

  init(conf) {
    this._config = Object.assign(__WEBPACK_IMPORTED_MODULE_2__protocol_settings__["a" /* default */].DEFAULT_CONF, conf || {});
    this.setTransport(this._config.transport || {});

    // 启动数据监听
    // this.onReceived();
  }

  /**
   * 电子模块实例工厂
   * @param  {Function} eModule 电子模块类
   * @param  {Array-Like} args    [port, slot, id...]
   * @return {Object}         电子模块实例
   */
  eModuleFactory(eModule, args) {
    let id = createModuleId(eModule, args);
    if (this.connecting[id]) {
      return this.connecting[id];
    } else {
      let emodule = new eModule(...args);
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
   *    onReceived: function(parse) {
   *      serialPort.on('data', function(buff) {
   *        parse.doParse(buff);
   *      });
   *    }
   *  }
   */
  setTransport(transport) {
    if (transport && typeof transport.send == 'function' && typeof transport.receive == 'function') {
      __WEBPACK_IMPORTED_MODULE_0__communicate_transport__["default"].send = transport.send;
      __WEBPACK_IMPORTED_MODULE_0__communicate_transport__["default"].receive = transport.receive;
    } else {
      // console.warn('')
    }
  }
}

// module.exports = Board;
/* harmony default export */ __webpack_exports__["a"] = (Board);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);




class LedMatrixBase extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  /**
   * LedMatrix 类，led模块
   */
  constructor(port) {
    super();
    this.args = {
      port: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(port)
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (LedMatrixBase);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






let bufComposer = function (obj) {
  let args = [obj.port, obj.slot, obj.ledPosition, ...obj.rgb];
  return __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].setLed, args);
};

class RgbLedBase extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  /**
   * RgbLed类，led模块
   * @param {number} port - led port口
   * @param {number} position - led灯的位置
   */
  constructor(port, slot) {
    super();
    this.args = {
      port: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(port),
      slot: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(slot),
      ledPosition: 0,
      rgb: [0, 0, 0]
    };
  }

  /**
   * set led position
   * @param {number} position 
   */
  position(position) {
    this.args.ledPosition = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(position, this.args.ledPosition);
    return this;
  }

  /**
   * set led red value
   * @param {number} value 0 ~ 255 
   */
  r(value) {
    this.args.rgb[0] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(value, this.args.rgb[0]);
    return this;
  }

  /**
   * set led green value
   * @param {number} value 0 ~ 255 
   */
  g(value) {
    this.args.rgb[1] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(value, this.args.rgb[1]);
    return this;
  }

  /**
   * set blue red value
   * @param {number} value 0 ~ 255 
   */
  b(value) {
    this.args.rgb[2] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(value, this.args.rgb[2]);
    return this;
  }

  /**
   * turn on led
   * @param {number} position
   */
  turnOn(position) {
    this.args.position(position);
    //组装协议
    let buf = bufComposer(this.args);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].exec(buf);
    return this;
  }

  /**
   * turn off led
   * @param {number} position
   */
  turnOff(position) {
    this.args.position(position);
    this.args.rgb = [0, 0, 0];
    //组装协议
    let buf = bufComposer(this.args);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].exec(buf);
    return this;
  }

  /**
   * turn on all the leds
   */
  turnOnAll() {
    return this.turnOn(0);
  }

  /**
   * turn off all the leds
   */
  turnOnAll() {
    return this.turnOff(0);
  }

  /**
   * LED亮红色灯光
   */
  red() {
    this.args.rgb = [255, 0, 0];
    //组装协议
    let buf = bufComposer(this.args);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].exec(buf);
    return this;
  }

  /**
   * LED亮绿色灯光
   */
  green() {
    this.args.rgb = [0, 255, 0];
    //组装协议
    let buf = bufComposer(this.args);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].exec(buf);
    return this;
  }

  /**
   * LED亮蓝色灯光
   */
  blue() {
    this.args.rgb = [0, 0, 255];
    //组装协议
    let buf = bufComposer(this.args);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].exec(buf);
    return this;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (RgbLedBase);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reset__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__version__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__four_led__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rgb_led__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__led_panel_on_board__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rgb_led_on_board__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__led_matrix_char__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__led_matrix_time__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__led_matrix_emotion__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__led_matrix_number__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__buzzer__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__seven_segment__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shutter__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ultrasonic__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__temperature__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__light__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__potentionmeter__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__joystick__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__gyro__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__temperature_on_board__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pirmotion__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__line_follower__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__compass__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__humiture__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__flame__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__gas__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__touch__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__four_keys__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__encoder_motor_on_board__ = __webpack_require__(21);






























// motor 未完成
function dcMotor(port) {
  return new DcMotor(port);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  FourLed: __WEBPACK_IMPORTED_MODULE_2__four_led__["a" /* default */],
  RgbLed: __WEBPACK_IMPORTED_MODULE_3__rgb_led__["a" /* default */],
  LedPanelOnBoard: __WEBPACK_IMPORTED_MODULE_4__led_panel_on_board__["a" /* default */],
  RgbLedOnBoard: __WEBPACK_IMPORTED_MODULE_5__rgb_led_on_board__["a" /* default */],
  LedMatrixChar: __WEBPACK_IMPORTED_MODULE_6__led_matrix_char__["a" /* default */],
  LedMatrixTime: __WEBPACK_IMPORTED_MODULE_7__led_matrix_time__["a" /* default */],
  LedMatrixEmotion: __WEBPACK_IMPORTED_MODULE_8__led_matrix_emotion__["a" /* default */],
  LedMatrixNumber: __WEBPACK_IMPORTED_MODULE_9__led_matrix_number__["a" /* default */],
  Buzzer: __WEBPACK_IMPORTED_MODULE_10__buzzer__["a" /* default */],
  SevenSegment: __WEBPACK_IMPORTED_MODULE_11__seven_segment__["a" /* default */],
  Shutter: __WEBPACK_IMPORTED_MODULE_12__shutter__["a" /* default */],

  Reset: __WEBPACK_IMPORTED_MODULE_0__reset__["a" /* default */],
  Version: __WEBPACK_IMPORTED_MODULE_1__version__["a" /* default */],
  Ultrasonic: __WEBPACK_IMPORTED_MODULE_13__ultrasonic__["a" /* default */],
  Temperature: __WEBPACK_IMPORTED_MODULE_14__temperature__["a" /* default */],
  Light: __WEBPACK_IMPORTED_MODULE_15__light__["a" /* default */],
  Potentionmeter: __WEBPACK_IMPORTED_MODULE_16__potentionmeter__["a" /* default */],
  Joystick: __WEBPACK_IMPORTED_MODULE_17__joystick__["a" /* default */],
  Gyro: __WEBPACK_IMPORTED_MODULE_18__gyro__["a" /* default */],
  TemperatureOnBoard: __WEBPACK_IMPORTED_MODULE_19__temperature_on_board__["a" /* default */],
  Pirmotion: __WEBPACK_IMPORTED_MODULE_20__pirmotion__["a" /* default */],
  LineFollower: __WEBPACK_IMPORTED_MODULE_21__line_follower__["a" /* default */],
  Compass: __WEBPACK_IMPORTED_MODULE_22__compass__["a" /* default */],
  Humiture: __WEBPACK_IMPORTED_MODULE_23__humiture__["a" /* default */],
  Flame: __WEBPACK_IMPORTED_MODULE_24__flame__["a" /* default */],
  Gas: __WEBPACK_IMPORTED_MODULE_25__gas__["a" /* default */],
  Touch: __WEBPACK_IMPORTED_MODULE_26__touch__["a" /* default */],
  FourKeys: __WEBPACK_IMPORTED_MODULE_27__four_keys__["a" /* default */],
  EncoderMotorOnBoard: __WEBPACK_IMPORTED_MODULE_28__encoder_motor_on_board__["a" /* default */]
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * @fileOverview 存储指令的传输通道：蓝牙，串口，2.4G等，一个单例。
 */

//输出单例
let Transport = {
  send: function () {},

  receive: function () {}
};

/* harmony default export */ __webpack_exports__["default"] = (Transport);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @fileOverview PromiveList is sensor data's transfer station.
 * 用于处理传感器数据分发
 */

const PromiseList = {
    requestList: new Array(255),
    index: 1,

    add: function (type, callback, valueWrapper) {
        this.index++;
        if (this.index > 254) {
            this.index = 1;
        }
        this.requestList[this.index] = {
            type: type,
            callback: callback,
            valueWrapper: valueWrapper,
            hasReceivedValue: false,
            resentCount: 0
        };
        return this.index;
    },

    // 将值写到对应请求的值对象中，并且启动回调
    receiveValue: function (index, value) {
        var that = this;
        if (this.requestList[index]) {
            this.requestList[index].callback(value);
            this.requestList[index].valueWrapper.setValue(value);
            this.requestList[index].hasReceivedValue = true;
        }
    },

    getType: function (index) {
        if (this.requestList[index]) {
            return this.requestList[index].type;
        } else {
            // console.warn("返回字节的索引值无法匹配");
            return 0;
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (PromiseList);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Board__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__electronic_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(5);



//支持位置
const SUPPORT_INDEX = __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].SUPPORTLIST.indexOf('Auriga');

//实现一个板子就注册一个板子名称
class Auriga extends __WEBPACK_IMPORTED_MODULE_0__core_Board__["a" /* default */] {
  constructor(conf) {
    //继承 Board
    super(conf);
    let this_ = this;
    // 置空已连接块
    this.connecting = {};
    // 挂载电子模块
    for (let name in __WEBPACK_IMPORTED_MODULE_1__electronic_index__["a" /* default */]) {
      let eModule = __WEBPACK_IMPORTED_MODULE_1__electronic_index__["a" /* default */][name];
      if (eModule.supportStamp().charAt(SUPPORT_INDEX) === '1') {
        // when use mcore.rgbLed(port, slot)
        this[name] = function () {
          return this_.eModuleFactory(eModule, arguments);
        };
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Auriga);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Board__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__electronic_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(5);



//支持位置
const SUPPORT_INDEX = __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].SUPPORTLIST.indexOf('Mcore');

//实现一个板子就注册一个板子名称
class Mcore extends __WEBPACK_IMPORTED_MODULE_0__core_Board__["a" /* default */] {
  constructor(conf) {
    //继承 Board
    super(conf);
    let this_ = this;
    // 置空已连接块
    this.connecting = {};
    // 挂载电子模块
    for (let name in __WEBPACK_IMPORTED_MODULE_1__electronic_index__["a" /* default */]) {
      let eModule = __WEBPACK_IMPORTED_MODULE_1__electronic_index__["a" /* default */][name];
      if (eModule.supportStamp().charAt(SUPPORT_INDEX) === '1') {
        // when use mcore.rgbLed(port, slot)
        this[name] = function () {
          return this_.eModuleFactory(eModule, arguments);
        };
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Mcore);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Board__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__electronic_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(5);



//支持位置
const SUPPORT_INDEX = __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].SUPPORTLIST.indexOf('MegaPi');

//实现一个板子就注册一个板子名称
class MegaPi extends __WEBPACK_IMPORTED_MODULE_0__core_Board__["a" /* default */] {
  constructor(conf) {
    //继承 Board
    super(conf);
    let this_ = this;
    // 置空已连接块
    this.connecting = {};
    // 挂载电子模块
    for (let name in __WEBPACK_IMPORTED_MODULE_1__electronic_index__["a" /* default */]) {
      let eModule = __WEBPACK_IMPORTED_MODULE_1__electronic_index__["a" /* default */][name];
      if (eModule.supportStamp().charAt(SUPPORT_INDEX) === '1') {
        // when use mcore.rgbLed(port, slot)
        this[name] = function () {
          return this_.eModuleFactory(eModule, arguments);
        };
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MegaPi);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// var Neuron = require('mneurons');
// var Neuron = require('../../neurons-engine/lib/engine/logic');

const Neuron = {};

/* harmony default export */ __webpack_exports__["a"] = (Neuron);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Board__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__electronic_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(5);



//支持位置
const SUPPORT_INDEX = __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].SUPPORTLIST.indexOf('Orion');

//实现一个板子就注册一个板子名称
class Orion extends __WEBPACK_IMPORTED_MODULE_0__core_Board__["a" /* default */] {
  constructor(conf) {
    //继承 Board
    super(conf);
    let this_ = this;
    // 置空已连接块
    this.connecting = {};
    // 挂载电子模块
    for (let name in __WEBPACK_IMPORTED_MODULE_1__electronic_index__["a" /* default */]) {
      let eModule = __WEBPACK_IMPORTED_MODULE_1__electronic_index__["a" /* default */][name];
      if (eModule.supportStamp().charAt(SUPPORT_INDEX) === '1') {
        // when use mcore.rgbLed(port, slot)
        this[name] = function () {
          return this_.eModuleFactory(eModule, arguments);
        };
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Orion);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_promise__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/**
 * @fileOverview 负责实际的数据解析
 */



function Parse() {
  this.buffer = [];

  // 获取到的最大指令长度
  this.REC_BUF_LENGTH = 40;

  // 解析从硬件传递过来的数据
  // data : 当前处理的数据
  // this.buffer: 历史缓存数据
  // 记录数据和历史数据分开记录
  this.doParse = function (buffData, callback) {
    var data = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].arrayFromArrayBuffer(buffData);
    data = this.buffer.concat(data);
    this.buffer = [];

    // parse buffer data
    for (var i = 0; i < data.length; i++) {
      this.buffer.push(parseInt(data[i]));
      if (parseInt(data[i]) === 0x55 && parseInt(data[i - 1]) === 0xff) {
        // start flag
        this.recvLength = 0;
        this.beginRecv = true;
        this.tempBuf = [];
      } else if (parseInt(data[i - 1]) === 0x0d && parseInt(data[i]) === 0x0a && this.tempBuf) {
        // end flag
        this.beginRecv = false;
        var buf = this.tempBuf.slice(0, this.recvLength - 1);
        // 解析正确的数据后，清空buffer
        this.buffer = [];
        if (buf.length == 0) {
          // buf中没有数据
          return false;
        }

        // 以下为有效数据, 获取返回字节流中的索引位
        var dataIndex = buf[0];
        var promiseType = __WEBPACK_IMPORTED_MODULE_0__core_promise__["a" /* default */].getType(dataIndex);
        if (promiseType || promiseType == 0) {

          // 计算返回值，并注入
          var result = this.getResult(buf, promiseType);
          __WEBPACK_IMPORTED_MODULE_0__core_promise__["a" /* default */].receiveValue(dataIndex, result);

          // 为测试留接口
          callback && callback(buf);
        }
      } else {
        // normal
        if (this.beginRecv) {
          if (this.recvLength >= this.REC_BUF_LENGTH) {
            console.log("receive buffer overflow!");
          }
          this.tempBuf[this.recvLength++] = parseInt(data[i]);
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
        result = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].bytesToString(bytes);
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
    var intBitsToFloat = function (num) {
      /* s 为符号（sign）；e 为指数（exponent）；m 为有效位数（mantissa）*/
      var s = num >> 31 == 0 ? 1 : -1,
          e = num >> 23 & 0xff,
          m = e == 0 ? (num & 0x7fffff) << 1 : num & 0x7fffff | 0x800000;
      return s * m * Math.pow(2, e - 150);
    };
    var intValue = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].bytesToInt(intArray);
    // TOFIX
    if (intValue < 100000 && intValue > 0) {
      result = intValue;
    } else {
      result = parseFloat(intBitsToFloat(intValue).toFixed(2));
    }
    return result;
  };
}

let parse = new Parse();

/* unused harmony default export */ var _unused_webpack_default_export = (parse);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 用来存值、取值
 * valueWrapper是一个拥有存值、取值的类，每一个对象都将拥有这两个方法。
 *
 * 用来储存“读取数据”block对数据的请求，使用valueWrapper来完成程序变量的临时替代
 * 在蓝牙返回数据之后设置真实的值，然后继续程序执行。
 * 最终目的：取到程序块中请求的值
 *
 * 该技巧利用了对象的引用类型的原理，对象的属性值存在内存的某一个位置，后面值改变，内存
 * 中的值即跟着改变。
 */
function ValueWrapper() {};

ValueWrapper.prototype.toString = function () {
    return this.val;
};

ValueWrapper.prototype.setValue = function (value) {
    this.val = value;
};

/* harmony default export */ __webpack_exports__["a"] = (ValueWrapper);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);





class Buzzer extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  /**
   * Buzzer类，声音模块
   * @constructor
   */
  constructor() {
    super();
    this.args = {
      tone: null,
      beat: null
    };
  }

  /**
   * @param {string} tone - 声音音调
   */
  tone(tone) {
    this.args.tone = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineString"])(tone.toUpperCase());
    return this;
  }
  /**
   * @param {string} beat - 声音音节
   */
  beat(beat) {
    this.args.beat = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(beat);
    return this;
  }
  /**
   * 播放声音
   */
  play() {
    // 拿到协议组装器，组装协议
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].setTone, [this.args.port, this.args.action]);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].exec(buf);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 0;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp() {
    return '1111';
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Buzzer);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






class Compass extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  constructor(port) {
    super();
    this.args = {
      port: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(port)
    };
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].readCompass, [this.args.port]);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].execRead(buf, callback);
    // Command.getSensorValue('ultrasonic', buf, callback);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  //orion 不支持
  static supportStamp() {
    return '1101';
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Compass);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






class EncoderMotorOnBoard extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  constructor(port, slot) {
    super();
    this.args = {
      slot: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(port),
      type: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(slot)
    };
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].readEncoderMotorOnBoard, [this.args.slot, this.args.type]);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].execRead(buf, callback);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 2;
  }

  //主控支持戳：描述各主控的支持情况
  //auriga megapi 支持
  static supportStamp() {
    return '0110';
  }

}

/* harmony default export */ __webpack_exports__["a"] = (EncoderMotorOnBoard);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






class Flame extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  constructor(port) {
    super();
    this.args = {
      port: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(port)
    };
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].readFlame, [this.args.port]);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].execRead(buf, callback);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp() {
    return '1111';
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Flame);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






class FourKeys extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  constructor(port, axis) {
    super();
    this.args = {
      port: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(port),
      key: defineString(key)
    };
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].readFourKeys, [this.args.port, this.args.key]);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].execRead(buf, callback);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 2;
  }

  //主控支持戳：描述各主控的支持情况
  //orion 不支持
  static supportStamp() {
    return '1111';
  }

}

/* harmony default export */ __webpack_exports__["a"] = (FourKeys);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_RgbLedBase__ = __webpack_require__(8);


class FourLed extends __WEBPACK_IMPORTED_MODULE_0__base_RgbLedBase__["a" /* default */] {
  constructor(port) {
    super(port, 2);
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp() {
    return '1111';
  }
}

/* harmony default export */ __webpack_exports__["a"] = (FourLed);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






class Gas extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  constructor(port) {
    super();
    this.args = {
      port: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(port)
    };
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].readGas, [this.args.port]);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].execRead(buf, callback);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp() {
    return '1111';
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Gas);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






class Gyro extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  constructor(port, axis) {
    super();
    this.args = {
      port: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(port),
      axis: defineString(axis)
    };
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].readGyro, [this.args.port, this.args.axis]);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].execRead(buf, callback);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 2;
  }

  //主控支持戳：描述各主控的支持情况
  //orion 不支持
  static supportStamp() {
    return '1110';
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Gyro);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






class Humiture extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  constructor(port, type) {
    super();
    this.args = {
      port: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(port),
      type: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(type)
    };
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].readHumiture, [this.args.port, this.args.type]);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].execRead(buf, callback);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 2;
  }

  //主控支持戳：描述各主控的支持情况
  //orion 不支持
  static supportStamp() {
    return '1111';
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Humiture);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






class Joystick extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  constructor(port) {
    super();
    this.args = {
      port: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(port),
      axis: defineString(axis)
    };
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].readJoystick, [this.args.port, this.args.axis]);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].execRead(buf, callback);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp() {
    return '1111';
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Joystick);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_LedMatrixBase__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






class LedMatrixChar extends __WEBPACK_IMPORTED_MODULE_2__base_LedMatrixBase__["a" /* default */] {
  /**
   * @constructor
   */
  constructor(port) {
    super(port);
    //扩充参数
    Object.assign(this.args, {
      x: null,
      y: null,
      char: null
    });
  }

  x(xAxis) {
    this.args.x = xAxis;
    return this;
  }

  y(yAxis) {
    this.args.y = yAxis;
    return this;
  }

  showChar(str) {
    this.args.char = str;
    //组装buf
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].setLedMatrixChar, [this.args.port, this.args.x, this.args.y, this.args.char]);
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].exec(buf);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  //orion 不支持
  static supportStamp() {
    return '1110';
  }
}

/* harmony default export */ __webpack_exports__["a"] = (LedMatrixChar);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_LedMatrixBase__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__communicate_command__ = __webpack_require__(2);
// import { defineNumber } from '../core/type';





class LedMatrixEmotion extends __WEBPACK_IMPORTED_MODULE_1__base_LedMatrixBase__["a" /* default */] {
  /**
   * @constructor
   */
  constructor(port) {
    super(port);
    //参数
    Object.assign(this.args, {
      x: null,
      y: null,
      emotion: null
    });
  }

  x(xAxis) {
    this.args.x = xAxis;
    return this;
  }

  y(yAxis) {
    this.args.y = yAxis;
    return this;
  }

  showEmotion(emotion) {
    this.args.emotion = emotion;
    //组装buf
    let buf = __WEBPACK_IMPORTED_MODULE_0__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_2__protocol_cmd__["a" /* default */].setLedMatrixEmotion, [this.args.port, this.args.x, this.args.y, this.args.emotion]);
    //执行
    __WEBPACK_IMPORTED_MODULE_3__communicate_command__["a" /* default */].exec(buf);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  //orion 不支持
  static supportStamp() {
    return '1110';
  }
}

/* harmony default export */ __webpack_exports__["a"] = (LedMatrixEmotion);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_LedMatrixBase__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






class LedMatrixNumber extends __WEBPACK_IMPORTED_MODULE_2__base_LedMatrixBase__["a" /* default */] {
  /**
   * @constructor
   */
  constructor(port) {
    super(port);
    Object.assign(this.args, {
      number: null
    });
  }

  showNumber(number) {
    this.args.number = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(number);
    //组装buf
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].setLedMatrixNumber, [this.args.port, this.args.number]);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].exec(buf);
    return this;
  }
  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  //orion 不支持
  static supportStamp() {
    return '1110';
  }
}

/* harmony default export */ __webpack_exports__["a"] = (LedMatrixNumber);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_LedMatrixBase__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






class LedMatrixTime extends __WEBPACK_IMPORTED_MODULE_2__base_LedMatrixBase__["a" /* default */] {
  /**
   * @constructor
   */
  constructor(port) {
    super(port);
    Object.assign(this.args, {
      separator: null,
      hour: null,
      minute: null
    });
  }

  separator(separator) {
    this.args.separator = separator;
    return this;
  }

  hour(h) {
    this.args.hour = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(h);
    return this;
  }

  minute(m) {
    this.args.minute = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(m);
    return this;
  }

  showTime() {
    //组装buf
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].setLedMatrixTime, [this.args.port, this.args.separator, this.args.hour, this.args.minute]);
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].exec(buf);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  //orion 不支持
  static supportStamp() {
    return '1110';
  }
}

/* harmony default export */ __webpack_exports__["a"] = (LedMatrixTime);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_RgbLedBase__ = __webpack_require__(8);


class LedPanelOnBoard extends __WEBPACK_IMPORTED_MODULE_0__base_RgbLedBase__["a" /* default */] {
  constructor() {
    super(0, 2);
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 0;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp() {
    return '1111';
  }
}

/* harmony default export */ __webpack_exports__["a"] = (LedPanelOnBoard);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






class Light extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  constructor(port) {
    super();
    this.args = {
      port: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(port)
    };
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].readLight, [this.args.port]);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].execRead(buf, callback);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp() {
    return '1111';
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Light);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






class LineFollower extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  constructor(port) {
    super();
    this.args = {
      port: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(port)
    };
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].readLineFollower, [this.args.port]);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].execRead(buf, callback);
    // Command.getSensorValue('ultrasonic', buf, callback);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp() {
    return '1111';
  }

}

/* harmony default export */ __webpack_exports__["a"] = (LineFollower);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






class Pirmotion extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  constructor(port) {
    super();
    this.args = {
      port: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(port)
    };
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].readPirmotion, [this.args.port]);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].execRead(buf, callback);
    // Command.getSensorValue('ultrasonic', buf, callback);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp() {
    return '1111';
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Pirmotion);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






class Potentionmeter extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  constructor(port) {
    super();
    this.args = {
      port: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(port)
    };
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].readPotentionmeter, [this.args.port]);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].execRead(buf, callback);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp() {
    return '1111';
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Potentionmeter);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






class Reset extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  constructor(callback) {
    super();
    this.reset(callback);
  }

  reset(callback) {
    // 拿到协议组装器，组装协议
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].reset);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].execRead(buf, callback);
    return this;
  }

  //参数戳：描述 port slot id 需传参的个数
  static argsStamp() {
    return 0;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp() {
    return '1111';
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Reset);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_RgbLedBase__ = __webpack_require__(8);


class RgbLed extends __WEBPACK_IMPORTED_MODULE_0__base_RgbLedBase__["a" /* default */] {
  constructor(port, slot) {
    super(port, slot);
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 2;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp() {
    return '1111';
  }
}

/* harmony default export */ __webpack_exports__["a"] = (RgbLed);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_RgbLedBase__ = __webpack_require__(8);
// import { defineNumber } from '../core/type';


class RgbLedOnBoard extends __WEBPACK_IMPORTED_MODULE_0__base_RgbLedBase__["a" /* default */] {
  constructor() {
    super(0, 2);
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 0;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp() {
    return '0100';
  }
}

/* harmony default export */ __webpack_exports__["a"] = (RgbLedOnBoard);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






// 作为闭包内容不开放
class SevenSegment extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  /**
   * Buzzer类，声音模块
   * @constructor
   */
  constructor(port) {
    super();
    this.args = {
      port: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(port),
      number: null
    };
  }
  /**
   * @param {string} beat - 声音音节
   */
  showNumber(number) {
    this.args.number = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(number);debugger;
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].setSevenSegment, [this.args.port, this.args.number]);
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].exec(buf);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp() {
    return '1111';
  }
}

/* harmony default export */ __webpack_exports__["a"] = (SevenSegment);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






// 作为闭包内容不开放
class Shutter extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  /**
   * Buzzer类，声音模块
   * @constructor
   */
  constructor(port) {
    super();
    this.args = {
      port: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(port),
      action: null
    };
  }

  /**
   * @param {string} actionId - 动作id  0: 按下快门; 1: 松开快门; 2: 聚焦; 3: 停止聚焦
   */
  action(actionId) {
    this.args.action = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineString"])(actionId);
    // 拿到协议组装器，组装协议
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].setShutter, [this.args.port, this.args.action]);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].exec(buf);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp() {
    return '1111';
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Shutter);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






class Temperature extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  constructor(port, slot) {
    super();
    this.args = {
      port: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(port),
      slot: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(slot)
    };
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].readTemperature, [this.args.port, this.args.slot]);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].execRead(buf, callback);
    // Command.getSensorValue('ultrasonic', buf, callback);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 2;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp() {
    return '1111';
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Temperature);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






class TemperatureOnBoard extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  constructor() {
    super();
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].readTemperatureOnBoard);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].execRead(buf, callback);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 0;
  }

  //主控支持戳：描述各主控的支持情况
  //只有 auriga 支持 
  static supportStamp() {
    return '0100';
  }

}

/* harmony default export */ __webpack_exports__["a"] = (TemperatureOnBoard);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






class Touch extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  constructor(port) {
    super();
    this.args = {
      port: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(port)
    };
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].readTouch, [this.args.port]);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].execRead(buf, callback);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp() {
    return '1111';
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Touch);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






class Ultrasonic extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  constructor(port) {
    super();
    this.args = {
      port: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_type__["defineNumber"])(port)
    };
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].readUltrasonic, [this.args.port]);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].execRead(buf, callback);
    // Command.getSensorValue('ultrasonic', buf, callback);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp() {
    return '1111';
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Ultrasonic);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__electronic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_cmd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_command__ = __webpack_require__(2);






class Version extends __WEBPACK_IMPORTED_MODULE_2__electronic___default.a {
  constructor(callback) {
    super();
    this.version(callback);
  }

  version(callback) {
    // 拿到协议组装器，组装协议
    let buf = __WEBPACK_IMPORTED_MODULE_1__core_utils__["default"].composer(__WEBPACK_IMPORTED_MODULE_3__protocol_cmd__["a" /* default */].readVersion);
    //执行
    __WEBPACK_IMPORTED_MODULE_4__communicate_command__["a" /* default */].execRead(buf, callback);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp() {
    return 0;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp() {
    return '1111';
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Version);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview  Api api list
 */
var utils = __webpack_require__(0);

function Api(transport) {

  /**
   * Set dc motor speed.
   * @param {number} port  port number, vailable is: 1,2,3,4
   * @param {number} speed speed, the range is -255 ~ 255
   * @example
   *     ff 55 06 00 02 0a 01 ff 00
   */
  this.setDcMotor = function (port, speed) {
    speed = utils.limitValue(speed);
    var a = [0xff, 0x55, 0x06, 0, 0x02, 0x0a, port, speed & 0xff, speed >> 8 & 0xff];
    return transport.send(a);
  },

  /**
   * Set encoder motor speed.
   * @param {number} slot  slot number, vailable is: 1,2
   * @param {number} speed speed, the range is -255 ~ 255
   * @example
   *     ff 55 07 00 02 3d 00 01 64 00
   */
  this.setEncoderMotorOnBoard = function (slot, speed) {
    speed = utils.limitValue(speed);
    var a = [0xff, 0x55, 0x07, 0, 0x02, 0x3d, 0, slot, speed & 0xff, speed >> 8 & 0xff];
    return transport.send(a);
  };

  /**
   * Set both left speed and right speed with one command.
   * @param {number} leftSpeed  left speed, the range is -255 ~ 255
   * @param {number} rightSpeed right speed, the range is -255 ~ 255
   * @example
   *     ff 55 07 00 02 05 64 00 64 00
   */
  this.setJoystick = function (leftSpeed, rightSpeed) {
    leftSpeed = utils.limitValue(leftSpeed);
    rightSpeed = utils.limitValue(rightSpeed);
    var a = [0xff, 0x55, 0x07, 0, 0x02, 0x05, leftSpeed & 0xff, leftSpeed >> 8 & 0xff, rightSpeed & 0xff, rightSpeed >> 8 & 0xff];
    return transport.send(a);
  };

  /**
   * Set speed for balance mode, the port is on transport, value is 0.
   * @param {number} turnDegree turn extend, -255 ~ 255
   * @param {number} speed      speed, -255 ~ 255
   * @example
   *     ff 55 08 00 02 34 00 64 00 64 00
   */
  this.setVirtualJoystickForBalance = function (turnExtent, speed) {
    turnExtent = utils.limitValue(turnExtent);
    speed = utils.limitValue(speed);
    var a = [0xff, 0x55, 0x08, 0, 0x02, 0x34, 0, turnExtent & 0xff, turnExtent >> 8 & 0xff, speed & 0xff, speed >> 8 & 0xff];
    return transport.send(a);
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
    speed = utils.limitValue(speed, [0, 3000]);
    var distanceBytes = utils.longToBytes(distance);
    var a = [0xff, 0x55, 0x0a, 0, 0x02, 0x28, port, speed & 0xff, speed >> 8 & 0xff, distanceBytes[3], distanceBytes[2], distanceBytes[1], distanceBytes[0]];
    return transport.send(a);
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
    r = utils.limitValue(r, [0, 255]);
    g = utils.limitValue(g, [0, 255]);
    b = utils.limitValue(b, [0, 255]);
    var a = [0xff, 0x55, 0x09, 0, 0x02, 0x08, port, slot, position, r, g, b];
    return transport.send(a);
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
    var a = [0xff, 0x55, 0x05, 0, 0x02, 0x3c, 0x11, // 0x11 means Api
    mode];
    return transport.send(a);
  };

  /**
   * Set Servo speed.
   * @param {[type]} port   port number, vailable is 6,7,8,9,10
   * @param {[type]} slot   slot number, vailable is 1,2
   * @param {[type]} degree servo degree, the range is 0 ~ 180
   */
  this.setServoMotor = function (port, slot, degree) {
    degree = utils.limitValue(degree, [0, 180]);
    var a = [0xff, 0x55, 0x06, 0, 0x02, 0x0b, port, slot, degree];
    return transport.send(a);
  };

  /**
   * Set Seven-segment digital tube number.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {float} number  the number to be displayed, -999 ~ 9999
   * @exmpa
   *     ff 55 08 00 02 09 06 00 00 c8 42
   */
  this.setSevenSegment = function (port, number) {
    number = utils.limitValue(number, [-999, 9999]);
    var byte4Array = utils.float32ToBytes(number);
    var a = [0xff, 0x55, 0x08, 0, 0x02, 0x09, port, byte4Array[0], byte4Array[1], byte4Array[2], byte4Array[3]];
    return transport.send(a);
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
    var a = [0xff, 0x55, 0x0a, 0, 0x02, 0x29, port, 0x01, xAxis, yAxis, char.length].concat(charAsciiArray);
    return transport.send(a);
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
    var a = [0xff, 0x55, 0x17, 0, 0x02, 0x29, port, 0x02, xAxis, yAxis].concat(emotionData);
    return transport.send(a);
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
    hour = utils.limitValue(hour, [0, 23]);
    minute = utils.limitValue(minute, [0, 59]);
    var a = [0xff, 0x55, 0x08, 0, 0x02, 0x29, port, 0x03, separator, hour, minute];
    return transport.send(a);
  };

  /**
   * Set led matrix number.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {float} number the number to be displayed
   * @exmaple
      ff 55 09 00 02 29 06 04 00 00 00 00
   */
  this.setLedMatrixNumber = function (port, number) {
    var byte4Array = utils.float32ToBytes(number);
    var a = [0xff, 0x55, 0x09, 0, 0x02, 0x29, port, 0x04, byte4Array[0], byte4Array[1], byte4Array[2], byte4Array[3]];
    return transport.send(a);
  };

  /**
   * Set shutter.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {number} action 0: 按下快门; 1: 松开快门; 2: 聚焦; 3: 停止聚焦
   * @exmaple
      ff 55 05 00 02 14 06 02
   */
  this.setShutter = function (port, action) {
    var a = [0xff, 0x55, 0x05, 0, 0x02, 0x14, port, action];
    return transport.send(a);
  };

  /**
   * reset all sensors and motors on transport.
   * @exmaple
      ff 55 02 00 04
   */
  this.reset = function () {
    var a = [0xff, 0x55, 0x02, 0x00, 0x04];
    return transport.send(a);
  };

  /**
   * set buzzer.
   * @param {string} tone , "A2" ~ "D8"
   * @param {number} beat , 125: eight; 250: quater; 500: half; 1000: one; 2000: double
   * @example
   * C2，quater beat: ff 55 08 00 02 22 09 41 00 f4 01
   */
  this.setTone = function (tone, beat) {
    var TONE_HZ = {
      // 原始数据：D5: 587 "E5": 658,"F5": 698,"G5": 784,"A5": 880,"B5": 988,"C6": 1047
      "A2": 110, "B2": 123, "C2": 65,
      "C3": 131, "D3": 147, "E3": 165, "F3": 175, "G3": 196, "A3": 220,
      "B3": 247, "C4": 262, "D4": 294, "E4": 330, "F4": 349, "G4": 392,
      "A4": 440, "B4": 494, "C5": 523, "D5": 555, "E5": 640, "F5": 698,
      "G5": 784, "A5": 880, "B5": 988, "C6": 1047, "D6": 1175, "E6": 1319,
      "F6": 1397, "G6": 1568, "A6": 1760, "B6": 1976, "C7": 2093, "D7": 2349,
      "E7": 2637, "F7": 2794, "G7": 3136, "A7": 3520, "B7": 3951, "C8": 4186, "D8": 4699
    };

    var a = [0xff, 0x55, 0x08, 0, 0x02, 0x22, 0x09, TONE_HZ[tone] & 0xff, TONE_HZ[tone] >> 8 & 0xff, beat & 0xff, beat >> 8 & 0xff];

    return transport.send(a);
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
    speed = utils.limitValue(speed, [0, 300]);
    var byte4Array = utils.float32ToBytes(angle);
    var a = [0xff, 0x55, 0x0b, 0, 0x02, 0x0c, 0x08, slot, speed & 0xff, speed >> 8 & 0xff, byte4Array[0], byte4Array[1], byte4Array[2], byte4Array[3]];
    return transport.send(a);
  };

  /**
   * read verion of transport
   * @param  {Number} index index of command
   */
  this.readVersion = function (index) {
    var a = [0xff, 0x55, 0x03, index, 0x01, 0x00];
    return transport.send(a);
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
  this.readUltrasonic = function (index, port) {
    var a = [0xff, 0x55, 0x04, index, 0x01, 0x01, port];
    return transport.send(a);
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
  this.readTemperature = function (index, port, slot) {
    var a = [0xff, 0x55, 0x05, index, 0x01, 0x02, port, slot];
    return transport.send(a);
  };

  /**
   * The light sensor module or ontransport (lamp) light sensors numerical reading.
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6,7,8,9,10, onbord(0c),onbord(0b)
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 03 07
   */
  this.readLight = function (index, port) {
    var a = [0xff, 0x55, 0x04, index, 0x01, 0x03, port];
    return transport.send(a);
  };

  /**
   * read Potentionmeter
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 04 06
   */
  this.readPotentionmeter = function (index, port) {
    var a = [0xff, 0x55, 0x04, index, 0x01, 0x04, port];
    return transport.send(a);
  };

  /**
   * read josystic value
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @param  {Number} axis  1: x-axis; 2: y-axis;
   * @example
   * ff 55 05 00 01 05 06 01
   */
  this.readJoystick = function (index, port, axis) {
    var a = [0xff, 0x55, 0x05, index, 0x01, 0x05, port, axis];
    return transport.send(a);
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
  this.readGyro = function (index, port, axis) {
    var a = [0xff, 0x55, 0x05, index, 0x01, 0x06, port, axis];
    var c = transport.send(a);
    return c;
  };

  /**
   * read volume testing MIC module parameters
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6，7，8，9，10，ontransport(0x0e)
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 07 06
   */
  this.readSound = function (index, port) {
    var a = [0xff, 0x55, 0x04, index, 0x01, 0x07, port];
    return transport.send(a);
  };

  /**
   * read temperature on transport
   * @param  {Number} index [description]
   * @example
   * ff 55 04 00 01 1b 0d
   */
  this.readTemperatureOnBoard = function (index) {
    var port = 0x0d;
    var a = [0xff, 0x55, 0x04, index, 0x01, 0x1b, port];
    return transport.send(a);
  };

  /**
   * read pyroelectric infrared sensor
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 0f 06
   */
  this.readPirmotion = function (index, port) {
    var a = [0xff, 0x55, 0x04, index, 0x01, 0x0f, port];
    return transport.send(a);
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
  this.readLineFollower = function (index, port) {
    var a = [0xff, 0x55, 0x04, index, 0x01, 0x11, port];
    return transport.send(a);
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
  this.readLimitSwitch = function (index, port, slot) {
    var a = [0xff, 0x55, 0x05, index, 0x01, 0x15, port, slot];
    var c = transport.send(a);
    return c;
  };

  /**
   * read compass.
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 1a 06
   */
  this.readCompass = function (index, port) {
    var a = [0xff, 0x55, 0x04, index, 0x01, 0x1a, port];
    return transport.send(a);
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
  this.readHumiture = function (index, port, type) {
    var a = [0xff, 0x55, 0x05, index, 0x01, 0x17, port, type];
    return transport.send(a);
  };

  /**
   * read flame
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 18 03
   */
  this.readFlame = function (index, port) {
    var a = [0xff, 0x55, 0x04, index, 0x01, 0x18, port];
    return transport.send(a);
  };

  /**
   * Used to get the harmful gas density
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 19 06
   */
  this.readGas = function (index, port) {
    var a = [0xff, 0x55, 0x04, index, 0x01, 0x19, port];
    return transport.send(a);
  };

  /**
   * read touch sensor
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 33 06
   */
  this.readTouch = function (index, port) {
    var a = [0xff, 0x55, 0x04, index, 0x01, 0x33, port];
    return transport.send(a);
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
  this.readFourKeys = function (index, port, key) {
    var a = [0xff, 0x55, 0x05, index, 0x01, 0x16, port, key];
    return transport.send(a);
  };

  /**
   * read encoder motor position or speed on transport.
   * @param  {Number} index [description]
   * @param  {Number} slot vailable:1,2
   * @param  {Number} type  1: position; 2: speed
   * @example
   * ff 55 06 00 01 3d 00 01 02
   */
  this.readEncoderMotorOnBoard = function (index, slot, type) {
    var a = [0xff, 0x55, 0x06, index, 0x01, 0x3d, 0x00, slot, type];
    return transport.send(a);
  };

  /**
   * read firmware mode or voltage.
   * @param  {Number} index [description]
   * @param  {Number} type  0x70: 电压; 0x71: 模式
   * @example
   * ff 55 04 00 01 3c 70
   */
  this.readFirmwareMode = function (index, type) {
    var a = [0xff, 0x55, 0x04, index, 0x01, 0x3c, type];
    return transport.send(a);
  };

  /**
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: digit GPOI port
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 1e 09
   */
  // this.readDigGPIO = function(index, port) {
  //   var a = [
  //     0xff,0x55,
  //     0x04, index,
  //     0x01,
  //     0x1e,
  //     port,
  //   ];
  //   return transport.send(a);
  // };

  /**
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: analog GPIO port
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 1f 02
   */
  // this.readAnalogGPIO = function(index, port) {
  //   var a = [
  //     0xff,0x55,
  //     0x04, index,
  //     0x01,
  //     0x1f,
  //     port,
  //   ];
  //   return transport.send(a);
  // };

  /**
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: GPIO port
   * @param  {Number} key   vailable: 0,1
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 25 0d 20 4e
   */
  // this.readGPIOContinue = function(index, port, key) {
  //   var a = [
  //     0xff,0x55,
  //     0x05, index,
  //     0x01,
  //     0x25,
  //     port,
  //     key,
  //   ];
  //   return transport.send(a);
  // };

  /**
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: GPIO port
   * @param  {Number} key   vailable: 0,1
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 24 45 40
   */
  // this.readDoubleGPIO = function(index, port1, port2) {
  //   var a = [
  //     0xff,0x55,
  //     0x05, index,
  //     0x01,
  //     0x24,
  //     port1,
  //     port2,
  //   ];
  //   return transport.send(a);
  // };

  /**
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: analog GPIO port
   * @param  {Number} key   vailable: 0,1
   * @return {Number}       [description]
   * @example
   * ff 55 03 00 01 32
   */
  // this.readRuntime = function(index) {
  //   var a = [
  //     0xff,0x55,
  //     0x03, index,
  //     0x01,
  //     0x32,
  //   ];
  //   return transport.send(a);
  // };

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

module.exports = Api;

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mcore__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orion__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auriga__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__megaPi__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__neuron__ = __webpack_require__(15);






const boards = {
  "Mcore": __WEBPACK_IMPORTED_MODULE_0__mcore__["a" /* default */],
  "Orion": __WEBPACK_IMPORTED_MODULE_1__orion__["a" /* default */],
  "Auriga": __WEBPACK_IMPORTED_MODULE_2__auriga__["a" /* default */],
  "MegaPi": __WEBPACK_IMPORTED_MODULE_3__megaPi__["a" /* default */],
  "Neuron": __WEBPACK_IMPORTED_MODULE_4__neuron__["a" /* default */]
};

function Sensorium(boardName, opts) {
  //匹配对应的板子
  let board = boards[boardName];
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
// module.exports = Sensorium;
/* harmony default export */ __webpack_exports__["default"] = (Sensorium);

/***/ })
/******/ ]);
//# sourceMappingURL=sensorium.js.map