/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Mcore = __webpack_require__(1);
	// var Orion = require("./orion");
	// var Auriga = require("./auriga");
	// var MegaPi = require("./megaPi");
	// var Neuron = require("./neuron");

	const boards = {
	    "Mcore": Mcore
	    // ,"Orion": Orion,
	    // "Auriga": Auriga,
	    // "MegaPi": MegaPi,
	    // "Neuron": Neuron
	}

	function Sensorium(board){
	  //匹配对应的板子
	  let board_ = boards[board];
	  if(typeof board_ == 'undefined'){
	    throw new Error('sorry, the board could not be supported!');
	  }
	  //对应的板子自带了电子模块 api
	  return function (transportInterface){
	    return new board_(transportInterface);
	  }
	}


	if(typeof window != "undefined") {
	  window.Sensorium = Sensorium;
	}
	// cmd
	module.exports = Sensorium;

	// {//board
	//   send = transportInterface.send;
	//   receive = transportInterface.receive;
	//   // 板子调用电子模块 api
	//   // api 将启用 send、receive 方法收发数据
	// }

	// //创建一个板子
	// var mcore = Sensorium('Mcore');

	// //创建这个板子时就已经装好了该板子的电子模块接口

	// //装上收发功能
	// mcore({
	//   send: send,
	//   receive: receive
	// });

	// mcore.rgbLed(1,1)
	//     .r(100)
	//     .g(0)
	//     .b(0)
	//     .turnOn(); //调用底层的 API 发送协议






/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Board = __webpack_require__(2);
	const electronics = __webpack_require__(8);

	//实现一个板子就注册一个板子名称
	class Mcore extends Board{
	  constructor(conf){
	    //继承 Board
	    super(conf);

	    // 挂载各电子模块
	    for (let apiName in electronics) {
	      let func = electronics[apiName];
	      if(func.support().charAt(0) === '1'){
	        this[apiName] = function() {
	          return new func(...arguments);
	        }
	      }
	      
	    }

	  }
	}

	// clone method and attributes from board to Mcore.
	module.exports = Mcore;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileOverview board 用做通信基类，连接收和发送接口.
	 * @author Hyman
	 */

	var Transport =  __webpack_require__(3);
	var parse =  __webpack_require__(4);
	var Settings =  __webpack_require__(7);

	// 超类： 具备发送、接收方法
	class Board {

	  constructor(conf){
	    this._config = null;
	    this.transport = null;
	    this.init(conf);
	  }

	  init(conf) {
	    this._config = Object.assign(Settings.DEFAULT_CONF, conf || {});
	    this.setTransport(this._config.transport || {});

	    // 启动数据监听
	    this.onReceived();
	  };

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
	    this.transport = transport;
	    Transport.set(this.transport);
	  };

	  /**
	   * 注册主板发送数据通道
	   * @param  {[type]} command [description]
	   */
	  send(command) {
	    this.transport.send(command);
	    return utils.intStrToHexStr(command);
	  };

	  /**
	   * 定义数据接收通道
	   * parse 是解析器
	   */
	  onReceived() {
	    if(this.transport.onReceived) {
	      this.transport.onReceived(parse);
	    }
	  }
	}

	module.exports = Board;

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * @fileOverview 存储指令的传输通道：蓝牙，串口，2.4G等，一个单例。
	 */

	class Transport {

	  constructor() {
	    this.transport = null;
	  }

	  set(transport) {
	    this.transport = transport;
	  }

	  get() {
	    return this.transport;
	  }

	  static getInstance() {
	    if (!Transport.instance) {
	      Transport.instance = new Transport();
	    }
	    return Transport.instance;
	  }
	}

	var transport = Transport.getInstance();

	module.exports = transport;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileOverview 负责实际的数据解析
	 */
	var PromiseList = __webpack_require__(5);
	var utils = __webpack_require__(6);

	function Parse() {
	  this.buffer = [];

	  // 获取到的最大指令长度
	  this.REC_BUF_LENGTH = 40;

	  // 解析从硬件传递过来的数据
	  // data : 当前处理的数据
	  // this.buffer: 历史缓存数据
	  // 记录数据和历史数据分开记录
	  this.doParse = function(buffData, callback) {
	    var data  = utils.arrayFromArrayBuffer(buffData);
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
	        var promiseType = PromiseList.getType(dataIndex);
	        if (promiseType || promiseType == 0) {

	          // 计算返回值，并注入
	          var result = this.getResult(buf, promiseType);
	          PromiseList.receiveValue(dataIndex, result);

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
	  this.getResult = function(buf, type) {
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
	        result = utils.bytesToString(bytes);
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
	  this.calculateResponseValue = function(intArray) {
	    var result = null;

	    // FIXME: int字节转浮点型
	    var intBitsToFloat = function(num) {
	      /* s 为符号（sign）；e 为指数（exponent）；m 为有效位数（mantissa）*/
	      var s = (num >> 31) == 0 ? 1 : -1,
	        e = (num >> 23) & 0xff,
	        m = (e == 0) ?
	        (num & 0x7fffff) << 1 :
	        (num & 0x7fffff) | 0x800000;
	      return s * m * Math.pow(2, e - 150);
	    };
	    var intValue = utils.bytesToInt(intArray);
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

	module.exports = parse;

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * @fileOverview PromiveList is sensor data's transfer station.
	 * 用于处理传感器数据分发
	 */

	var PromiseList = {
	    requestList: new Array(255),
	    index: 1,

	    add: function(type, callback, valueWrapper) {
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
	    receiveValue: function(index, value) {
	        var that = this;
	        if (this.requestList[index]) {
	            this.requestList[index].callback(value);
	            this.requestList[index].valueWrapper.setValue(value);
	            this.requestList[index].hasReceivedValue = true;
	        }
	    },

	    getType: function(index) {
	        if(this.requestList[index]) {
	            return this.requestList[index].type;
	        } else {
	            // console.warn("返回字节的索引值无法匹配");
	            return 0;
	        }
	    }
	};

	module.exports = PromiseList;

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * @fileOverview 工具类函数
	 */

	var Utils = {
	  /**
	   * limit value
	   * @param  {Number} value
	   * @param  {Array} range  (optional) limit value range, such as [-255, 255], [0, 3000], default is [-255, 255]
	   * @return {Number} newSpeed the result value in limit.
	   */
	  limitValue: function(value, range) {
	    var newValue = value;
	    range = range || [-255, 255];
	    if(value < range[0]) {
	      newValue = range[0];
	    }

	    if(value > range[1]) {
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
	  arrayBufferFromArray: function(data) {
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
	  arrayFromArrayBuffer: function(buffer) {
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
	  buffer2string: function(buf) {
	    var buffer = new Uint8Array(buf);
	    return Array.prototype.join.call(buffer, " ");
	  },

	  /**
	   * [string2buffer converts string to array buffer format]
	   * @param  {String} str [the input string]
	   * @return {Uint8Array}     [the output uint8 array buffer]
	   */
	  string2buffer: function(str) {
	    var buffer = new Uint8Array(str.split(" "));
	    return buffer;
	  },

	  /**
	   * 将十进制字符串数组转为16进制
	   * @param  {Array}  data        to be transformed data, such as: ["01", "55", "12"]
	   * @param  {Boolean} isUpperCase whether need output upperCase string.
	   * @return {String} 16 进制字符串
	   */
	  intStrToHexStr: function(data, isUpperCase) {
	    var temp = [];
	    for (var i = 0; i < data.length; i++) {
	      if (data[i] != null) {
	        var item = parseInt(data[i]).toString(16);
	        if(isUpperCase) {
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
	  hexStr2IntArray: function(str) {
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
	  float32ToBytes: function(value) {
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
	        var significand = ((value / Math.pow(2, exponent)) * 0x00800000) | 0;

	        exponent += 127;
	        if (exponent >= 0xFF) {
	          exponent = 0xFF;
	          significand = 0;
	        } else if (exponent < 0) exponent = 0;

	        bytesInt = bytesInt | (exponent << 23);
	        bytesInt = bytesInt | (significand & ~(-1 << 23));
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
	  bigIntToBytes: function(value) {
	    var bytesArray = [];
	    var b1 = (value & 0xff);
	    var b2 = ((value >> 8) & 0xff);
	    var b3 = ((value >> 16) & 0xff);
	    var b4 = ((value >> 24) & 0xff);
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
	  longToBytes: function(value) {
	    var bytes = [];
	    var i = 4;
	    do {
	      bytes[--i] = value & (255);
	      value = value >> 8;
	    } while (i)
	    return bytes;
	  },

	  /**
	   * 将单词的第一个字母转成大写
	   * @param  {string} str string.
	   * @return {string}     target string.
	   */
	  upperCaseFirstLetter: function(str) {
	    var reg = /\b(\w)|\s(\w)/g;
	    // str = str.toLowerCase();
	    return str.replace(reg, function(m) {
	      return m.toUpperCase();
	    })
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
	  emotionArrayToBytes: function(matrixArray) {
	    var result = [];
	    for (var i = 0; i < matrixArray.length; i++) {
	      if (((i+1) % 8) == 0 ) {
	        var byteString = matrixArray.slice(i - 7, i+1).join('');
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
	  bytesToInt: function(bytes) {
	    var val = 0;
	    for (var i = bytes.length - 1; i >= 0; i--) {
	      val += (bytes[bytes.length - i - 1] << (i * 8));
	    }
	    return val;
	  },

	  /**
	   * transform int to ascii
	   * @param  {Array} bytes int array
	   * @return {String} str string
	   */
	  bytesToString: function(bytes) {
	    var str = "";
	    for(var i = 0; i < bytes.length; i++) {
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
	  composer(func, args){
	    return func(...args);
	  }

	}

	module.exports = Utils;

/***/ },
/* 7 */
/***/ function(module, exports) {

	var Settings = {
	    // 数据发送与接收相关
	    // 回复数据的index位置
	    READ_BYTES_INDEX: 2,
	    // 数据发送默认的驱动driver: makeblockhd, cordova
	    DEFAULT_CONF : {

	    },
	    SUPPORTLIST: ['Mcore', 'Auriga', 'MegaPi', 'Orion', 'Neuron']
	};

	module.exports = Settings;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var FourLed = __webpack_require__(9);
	var RgbLed = __webpack_require__(15);
	var LedPanelOnBoard = __webpack_require__(16);
	var RgbLedOnBoard = __webpack_require__(17);
	var Buzzer = __webpack_require__(18);
	// var Ultrasonic = require('./ultrasonic');

	// rgb led 
	// function rgbLed(port, slot) {
	//   return new RgbLed(port, slot);
	// }

	// function rgbLedOnBoard() {
	//   return new RgbLed(0, 2);
	// }

	// function fourLed(port) {
	//   return new RgbLed(port, 2);
	// }

	// motor 未完成
	function dcMotor(port) {
	  return new DcMotor(port);
	}


	// function ledPanel() {
	//   return new LedPanel(...arguments);
	// }

	// 未完成
	function ultrasonic() {
	  return new Ultrasonic(...arguments);
	}

	// function buzzer() {
	//   return new Buzzer(...arguments);
	// }

	module.exports = {
	  FourLed,
	  RgbLed,
	  LedPanelOnBoard,
	  RgbLedOnBoard,
	  Buzzer
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	const { defineNumber } = __webpack_require__(10);
	const RgbLedBase = __webpack_require__(11);

	class FourLed extends RgbLedBase {
	  constructor(port){
	    super(port, 2);
	  }

	  /**
	   * 扩展一个设置 port 的接口
	   * @param  {Number} port port
	   * @return {instance}      实例本身
	   */
	  port(port){
	    this.port = defineNumber(port, this.port);
	    return this;
	  }

	  //描述各主控的支持情况
	  static support(){
	    return '1111';
	  }
	}

	module.exports = FourLed;

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * 对传入参数进行初始化
	 */
	function defineType(type) {
	    return function(param, defaultValue) {
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
	        let condition = type === 'boolean' ? (typeof param === type) : (typeof param === type || param === 1 || param === 0);
	        if (condition) {
	            value = param;
	        } else {
	            console.warn(`param '${param}' is not a ${type}!`);
	        }
	        return value;
	    }
	};

	module.exports = {
	    defineNumber: defineType('number'),
	    defineString: defineType('string'),
	    defineArray: defineType('array'),
	    defineBoolean: defineType('boolean'),
	    defineObject: defineType('object')
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	const { defineNumber } = __webpack_require__(10);
	const { composer } = __webpack_require__(6);
	const Electronic = __webpack_require__(12);
	const { setLed } = __webpack_require__(14);

	class RgbLedBase extends Electronic {
	  /**
	   * RgbLed类，led模块
	   * @param {number} port - led port口
	   * @param {number} position - led灯的位置
	   */
	  constructor(port, slot) {
	    super();
	    this.port = port;
	    this.slot = slot;
	    this.ledPosition = 0;
	    this.rgb = [0, 0, 0];
	  }

	  /**
	   * set led position
	   * @param {number} position 
	   */
	  position(position) {
	    this.ledPosition = defineNumber(position, this.ledPosition);
	    return this;
	  }

	  /**
	   * set led red value
	   * @param {number} value 0 ~ 255 
	   */
	  r(value) {
	    this.rgb[0] = defineNumber(value, this.rgb[0]);
	    return this;
	  }

	  /**
	   * set led green value
	   * @param {number} value 0 ~ 255 
	   */
	  g(value) {
	    this.rgb[1] = defineNumber(value, this.rgb[1]);
	    return this;
	  }

	  /**
	   * set blue red value
	   * @param {number} value 0 ~ 255 
	   */
	  b(value) {
	    this.rgb[2] = defineNumber(value, this.rgb[2]);
	    return this;
	  }

	  /**
	   * turn on led
	   * @param {number} position
	   */
	  turnOn(position) {
	    this.position(position);
	    this._run();
	    return this;
	  }

	  /**
	   * turn off led
	   * @param {number} position
	   */
	  turnOff(position) {
	    this.position(position);
	    this.rgb = [0, 0, 0];
	    this._run();
	    return this;
	  }

	  /**
	   * turn on all the leds
	   */
	  turnOnAll(){
	    return this.turnOn(0);
	  }

	  /**
	   * turn off all the leds
	   */
	  turnOnAll(){
	    return this.turnOff(0);
	  }

	  /**
	   * LED亮红色灯光
	   */
	  red() {
	    this.rgb = [255, 0, 0];
	    this._run();
	    return this;
	  }

	  /**
	   * LED亮绿色灯光
	   */
	  green() {
	    this.rgb = [0, 255, 0];
	    this._run();
	    return this;
	  }

	  /**
	   * LED亮蓝色灯光
	   */
	  blue() {
	    this.rgb = [0, 0, 255];
	    this._run();
	    return this;
	  }

	  _run() {
	    // 拿到参数
	    let args = [this.port, this.slot, this.ledPosition, ...(this.rgb)];
	    // 拿到协议组装器，组装协议
	    let buf = composer(setLed, args);
	    // 用板子发送协议
	    board.send(buf);
	  }
	}

	module.exports = RgbLedBase;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	const { defineNumber } = __webpack_require__(10);
	const Transport = __webpack_require__(3);
	const Api = __webpack_require__(13);

	// 通过一个全局变量保存实例
	let POOL = {};

	class Electronic {
	  /**
	   * Electron类，电子模块基类
	   * @param {number} port - 电子模块port口 
	   * @param {number} slot - 电子模块slot口
	   */
	  constructor(port, slot) {
	    port = defineNumber(port);
	    slot = defineNumber(slot);
	    let id = this.constructor.name + '_' + port + '_' + slot;
	    let api = new Api(Transport.get());
	    if(id in POOL) {
	      return POOL[id];
	    } else {
	      this.port = port;
	      this.slot = slot;
	      this.api = api;
	      POOL[id] = this;
	      return this;
	    }
	  }
	}

	module.exports = Electronic;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileOverview  Api api list
	 */
	var utils = __webpack_require__(6);

	function Api(transport) {

	  /**
	   * Set dc motor speed.
	   * @param {number} port  port number, vailable is: 1,2,3,4
	   * @param {number} speed speed, the range is -255 ~ 255
	   * @example
	   *     ff 55 06 00 02 0a 01 ff 00
	   */
	  this.setDcMotor = function(port, speed) {
	    speed = utils.limitValue(speed);
	    var a = [
	      0xff,0x55,
	      0x06, 0,
	      0x02,
	      0x0a,
	      port,
	      speed & 0xff,
	      (speed >> 8) & 0xff
	    ];
	    return transport.send(a);
	  },

	  /**
	   * Set encoder motor speed.
	   * @param {number} slot  slot number, vailable is: 1,2
	   * @param {number} speed speed, the range is -255 ~ 255
	   * @example
	   *     ff 55 07 00 02 3d 00 01 64 00
	   */
	  this.setEncoderMotorOnBoard = function(slot, speed) {
	    speed = utils.limitValue(speed);
	    var a = [
	      0xff,0x55,
	      0x07, 0,
	      0x02,
	      0x3d,
	      0,
	      slot,
	      speed & 0xff,
	      (speed >> 8) & 0xff
	    ];
	    return transport.send(a);
	  };

	  /**
	   * Set both left speed and right speed with one command.
	   * @param {number} leftSpeed  left speed, the range is -255 ~ 255
	   * @param {number} rightSpeed right speed, the range is -255 ~ 255
	   * @example
	   *     ff 55 07 00 02 05 64 00 64 00
	   */
	  this.setJoystick = function(leftSpeed, rightSpeed) {
	    leftSpeed = utils.limitValue(leftSpeed);
	    rightSpeed = utils.limitValue(rightSpeed);
	    var a = [
	      0xff,0x55,
	      0x07, 0,
	      0x02,
	      0x05,
	      leftSpeed & 0xff,
	      (leftSpeed >> 8) & 0xff,
	      rightSpeed & 0xff,
	      (rightSpeed >> 8) & 0xff
	    ];
	    return transport.send(a);
	  };

	  /**
	   * Set speed for balance mode, the port is on transport, value is 0.
	   * @param {number} turnDegree turn extend, -255 ~ 255
	   * @param {number} speed      speed, -255 ~ 255
	   * @example
	   *     ff 55 08 00 02 34 00 64 00 64 00
	   */
	  this.setVirtualJoystickForBalance = function(turnExtent, speed) {
	    turnExtent = utils.limitValue(turnExtent);
	    speed = utils.limitValue(speed);
	    var a = [
	      0xff,0x55,
	      0x08, 0,
	      0x02,
	      0x34,
	      0,
	      turnExtent & 0xff,
	      (turnExtent >> 8) & 0xff,
	      speed & 0xff,
	      (speed >> 8) & 0xff
	    ];
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
	  this.setStepperMotor = function(port, speed, distance) {
	    speed = utils.limitValue(speed, [0, 3000]);
	    var distanceBytes = utils.longToBytes(distance);
	    var a = [
	      0xff,0x55,
	      0x0a, 0,
	      0x02,
	      0x28,
	      port,
	      speed & 0xff,
	      (speed >> 8) & 0xff,
	      distanceBytes[3],
	      distanceBytes[2],
	      distanceBytes[1],
	      distanceBytes[0]
	    ];
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
	  this.setLed = function(port, slot, position, r, g, b) {
	    r = utils.limitValue(r, [0, 255]);
	    g = utils.limitValue(g, [0, 255]);
	    b = utils.limitValue(b, [0, 255]);
	    var a = [
	      0xff,0x55,
	      0x09, 0,
	      0x02,
	      0x08,
	      port,
	      slot,
	      position, r, g, b
	    ];
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
	  this.setFourLeds = function(port, position, r, g, b) {
	    return this.setLed(port, 2, position, r, g, b);
	  };

	  /**
	   * turn off four leds
	   * @param {number} port     port number, vailable is: 0(on transport), 6,7,8,9,10
	   * @param {number} position led position, 0 signify all leds.
	   */
	  this.turnOffFourLeds = function(port, position) {
	    return this.setLed(port, 2, position, 0, 0, 0);
	  };

	  /**
	   * set led panel on Api transport.
	   * @param {number} position led position, 0 signify all leds.
	   * @param {number} r        red, the range is 0 ~ 255
	   * @param {number} g        green, the range is 0 ~ 255
	   * @param {number} b        blue, the range is 0 ~ 255
	   */
	  this.setLedPanelOnBoard = function(position, r, g, b) {
	    return this.setLed(0, 2, position, r, g, b);
	  };

	  /**
	   * turn off led panel on transport
	   * @param {number} position led position, 0 signify all leds.
	   */
	  this.turnOffLedPanelOnBoard = function(position) {
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
	  this.setFirmwareMode = function(mode) {
	    var a = [
	      0xff,0x55,
	      0x05, 0,
	      0x02,
	      0x3c,
	      0x11, // 0x11 means Api
	      mode
	    ];
	    return transport.send(a);
	  };

	  /**
	   * Set Servo speed.
	   * @param {[type]} port   port number, vailable is 6,7,8,9,10
	   * @param {[type]} slot   slot number, vailable is 1,2
	   * @param {[type]} degree servo degree, the range is 0 ~ 180
	   */
	  this.setServoMotor = function(port, slot, degree) {
	    degree = utils.limitValue(degree, [0, 180]);
	    var a = [
	      0xff,0x55,
	      0x06, 0,
	      0x02,
	      0x0b,
	      port,
	      slot,
	      degree
	    ];
	    return transport.send(a);
	  };

	  /**
	   * Set Seven-segment digital tube number.
	   * @param {number} port   port number, vailable is 6,7,8,9,10
	   * @param {float} number  the number to be displayed, -999 ~ 9999
	   * @exmpa
	   *     ff 55 08 00 02 09 06 00 00 c8 42
	   */
	  this.setSevenSegment = function(port, number) {
	    number = utils.limitValue(number, [-999, 9999]);
	    var byte4Array = utils.float32ToBytes(number);
	    var a = [
	      0xff,0x55,
	      0x08, 0,
	      0x02,
	      0x09,
	      port,
	      byte4Array[0],
	      byte4Array[1],
	      byte4Array[2],
	      byte4Array[3]
	    ];
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
	  this.setLedMatrixChar = function(port, xAxis, yAxis, char) {
	    var charAsciiArray = [];
	    for(var i = 0; i < char.length; i++) {
	      charAsciiArray.push(char[i].charCodeAt());
	    }
	    var a = [
	      0xff,0x55,
	      0x0a,0,
	      0x02,
	      0x29,
	      port,
	      0x01,
	      xAxis,
	      yAxis,
	      char.length,
	    ].concat(charAsciiArray);
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
	  this.setLedMatrixEmotion = function(port, xAxis, yAxis, emotionData) {
	    var a = [
	      0xff,0x55,
	      0x17,0,
	      0x02,
	      0x29,
	      port,
	      0x02,
	      xAxis,
	      yAxis
	    ].concat(emotionData);
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
	  this.setLedMatrixTime = function(port, separator, hour, minute) {
	    hour = utils.limitValue(hour, [0, 23]);
	    minute = utils.limitValue(minute, [0, 59]);
	    var a = [
	      0xff,0x55,
	      0x08,0,
	      0x02,
	      0x29,
	      port,
	      0x03,
	      separator,
	      hour,
	      minute
	    ];
	    return transport.send(a);
	  };

	  /**
	   * Set led matrix number.
	   * @param {number} port   port number, vailable is 6,7,8,9,10
	   * @param {float} number the number to be displayed
	   * @exmaple
	      ff 55 09 00 02 29 06 04 00 00 00 00
	   */
	  this.setLedMatrixNumber = function(port, number) {
	    var byte4Array = utils.float32ToBytes(number);
	    var a = [
	      0xff,0x55,
	      0x09, 0,
	      0x02,
	      0x29,
	      port,
	      0x04,
	      byte4Array[0],
	      byte4Array[1],
	      byte4Array[2],
	      byte4Array[3]
	    ];
	    return transport.send(a);
	  };

	  /**
	   * Set shutter.
	   * @param {number} port   port number, vailable is 6,7,8,9,10
	   * @param {number} action 0: 按下快门; 1: 松开快门; 2: 聚焦; 3: 停止聚焦
	   * @exmaple
	      ff 55 05 00 02 14 06 02
	   */
	  this.setShutter = function(port, action) {
	    var a = [
	      0xff,0x55,
	      0x05,0,
	      0x02,
	      0x14,
	      port,
	      action
	    ];
	    return transport.send(a);
	  };

	  /**
	   * reset all sensors and motors on transport.
	   * @exmaple
	      ff 55 02 00 04
	   */
	  this.reset = function() {
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
	  this.setTone = function(tone, beat) {
	    var TONE_HZ = {
	      // 原始数据：D5: 587 "E5": 658,"F5": 698,"G5": 784,"A5": 880,"B5": 988,"C6": 1047
	      "A2": 110,"B2": 123,"C2": 65,
	      "C3": 131,"D3": 147,"E3": 165,"F3": 175,"G3": 196,"A3": 220,
	      "B3": 247,"C4": 262,"D4": 294,"E4": 330,"F4": 349,"G4": 392,
	      "A4": 440,"B4": 494,"C5": 523,"D5": 555,"E5": 640,"F5": 698,
	      "G5": 784,"A5": 880,"B5": 988,"C6": 1047,"D6": 1175,"E6": 1319,
	      "F6": 1397,"G6": 1568,"A6": 1760,"B6": 1976,"C7": 2093,"D7": 2349,
	      "E7": 2637,"F7": 2794,"G7": 3136,"A7": 3520,"B7": 3951,"C8": 4186,"D8":4699
	    };

	    var a = [
	      0xff, 0x55,
	      0x08, 0,
	      0x02,
	      0x22,
	      0x09,
	      (TONE_HZ[tone] & 0xff),
	      (TONE_HZ[tone] >> 8) & 0xff,
	      beat & 0xff,
	      (beat >> 8) & 0xff
	    ];

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
	  this.setEncoderMotor = function(port, slot, speed, angle) {
	    speed = utils.limitValue(speed, [0, 300]);
	    var byte4Array = utils.float32ToBytes(angle);
	    var a = [
	      0xff,0x55,
	      0x0b, 0,
	      0x02,
	      0x0c,
	      0x08,
	      slot,
	      speed & 0xff,
	      (speed >> 8) & 0xff,
	      byte4Array[0],
	      byte4Array[1],
	      byte4Array[2],
	      byte4Array[3]
	    ];
	    return transport.send(a);
	  };

	  /**
	   * read verion of transport
	   * @param  {Number} index index of command
	   */
	  this.readVersion = function(index) {
	    var a = [
	      0xff,0x55,
	      0x03, index,
	      0x01,
	      0x00
	    ];
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
	  this.readUltrasonic = function(index, port) {
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x01,
	      port
	    ];
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
	  this.readTemperature = function(index, port, slot) {
	    var a = [
	      0xff,0x55,
	      0x05, index,
	      0x01,
	      0x02,
	      port,
	      slot
	    ];
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
	  this.readLight = function(index, port) {
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x03,
	      port
	    ];
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
	  this.readPotentionmeter = function(index, port) {
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x04,
	      port
	    ];
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
	  this.readJoystick = function(index, port, axis) {
	    var a = [
	      0xff,0x55,
	      0x05, index,
	      0x01,
	      0x05,
	      port,
	      axis
	    ];
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
	  this.readGyro = function(index, port, axis) {
	    var a = [
	      0xff, 0x55,
	      0x05, index,
	      0x01,
	      0x06,
	      port,
	      axis
	    ];
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
	  this.readSound = function(index, port) {
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x07,
	      port
	    ];
	    return transport.send(a);
	  };

	  /**
	   * read temperature on transport
	   * @param  {Number} index [description]
	   * @example
	   * ff 55 04 00 01 1b 0d
	   */
	  this.readTemperatureOnBoard = function(index) {
	    var port = 0x0d;
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x1b,
	      port,
	    ];
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
	  this.readPirmotion = function(index, port) {
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x0f,
	      port
	    ];
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
	  this.readLineFollower = function(index, port) {
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x11,
	      port
	    ];
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
	  this.readLimitSwitch = function(index, port, slot) {
	    var a = [
	      0xff, 0x55,
	      0x05, index,
	      0x01,
	      0x15,
	      port,
	      slot
	    ];
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
	  this.readCompass = function(index, port) {
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x1a,
	      port
	    ];
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
	  this.readHumiture = function(index, port, type) {
	    var a = [
	      0xff,0x55,
	      0x05, index,
	      0x01,
	      0x17,
	      port,
	      type
	    ];
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
	  this.readFlame = function(index, port) {
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x18,
	      port
	    ];
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
	  this.readGas = function(index, port) {
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x19,
	      port
	    ];
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
	  this.readTouch = function(index, port) {
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x33,
	      port
	    ];
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
	  this.readFourKeys = function(index, port, key) {
	    var a = [
	      0xff,0x55,
	      0x05, index,
	      0x01,
	      0x16,
	      port,
	      key
	    ];
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
	  this.readEncoderMotorOnBoard = function(index, slot, type) {
	    var a = [
	      0xff,0x55,
	      0x06, index,
	      0x01,
	      0x3d,
	      0x00,
	      slot,
	      type
	    ];
	    return transport.send(a);
	  };

	  /**
	   * read firmware mode or voltage.
	   * @param  {Number} index [description]
	   * @param  {Number} type  0x70: 电压; 0x71: 模式
	   * @example
	   * ff 55 04 00 01 3c 70
	   */
	  this.readFirmwareMode = function(index, type) {
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x3c,
	      type
	    ];
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

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileOverview  Api api list
	 */
	const utils = __webpack_require__(6);

	/**
	 * buf 协议组装器
	 * @param  {Object} obj  对象
	 * @param  {Number} obj.index  由上位机赋值
	 * @param  {Number} obj.mode  查询、执行
	 * @param  {Number} obj.id  指令ID
	 * @param  {Arguments} args 其他参数
	 * @return {Array}      返回数组
	 */
	function bufAssembler(obj, ...args){
	  const modes = [0x01, 0x02];
	  const bufHead = [0xff,0x55];
	  let bufLength = 0;
	  //todo：完善抛错提示
	  if(modes.indexOf(obj.mode) === -1){
	    throw new Error(`mode should be one of ${modes}`);
	  }else if(typeof obj.id === 'undefined'){
	    throw new Error(`id should not be empty`);
	  }
	  const bufAttr = new Array(obj.index || 0, obj.mode, obj.id);
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
	  this.setDcMotor = function(port, speed) {
	    speed = utils.limitValue(speed);
	    return bufAssembler({mode: 0x02, id: 0x0a}, port, speed & 0xff, (speed >> 8) & 0xff);
	  };

	  /**
	   * Set encoder motor speed.
	   * @param {number} slot  slot number, vailable is: 1,2
	   * @param {number} speed speed, the range is -255 ~ 255
	   * @example
	   *     ff 55 07 00 02 3d 00 01 64 00
	   */
	  this.setEncoderMotorOnBoard = function(slot, speed) {
	    speed = utils.limitValue(speed);
	    return bufAssembler({mode: 0x02, id: 0x3d}, 0, slot, speed & 0xff, (speed >> 8) & 0xff);
	  };

	  /**
	   * Set both left speed and right speed with one command.
	   * @param {number} leftSpeed  left speed, the range is -255 ~ 255
	   * @param {number} rightSpeed right speed, the range is -255 ~ 255
	   * @example
	   *     ff 55 07 00 02 05 64 00 64 00
	   */
	  this.setJoystick = function(leftSpeed, rightSpeed) {
	    leftSpeed = utils.limitValue(leftSpeed);
	    rightSpeed = utils.limitValue(rightSpeed);
	    return bufAssembler(
	      {mode: 0x02, id: 0x05}, 
	      leftSpeed & 0xff,
	      (leftSpeed >> 8) & 0xff,
	      rightSpeed & 0xff,
	      (rightSpeed >> 8) & 0xff);
	  };

	  /**
	   * Set speed for balance mode, the port is on transport, value is 0.
	   * @param {number} turnDegree turn extend, -255 ~ 255
	   * @param {number} speed      speed, -255 ~ 255
	   * @example
	   *     ff 55 08 00 02 34 00 64 00 64 00
	   */
	  this.setVirtualJoystickForBalance = function(turnExtent, speed) {
	    turnExtent = utils.limitValue(turnExtent);
	    speed = utils.limitValue(speed);
	    port = 0; //板载虚拟摇杆 port = 00
	    return bufAssembler(
	      {mode: 0x02, id: 0x34}, 
	      port, 
	      turnExtent & 0xff,
	      (turnExtent >> 8) & 0xff,
	      speed & 0xff,
	      (speed >> 8) & 0xff);
	  };

	  /**
	   * Set stepper motor speed.
	   * @param {Number} port     port number, vailable is: 1,2,3,4
	   * @param {Number} speed    speed, the range is 0 ~ 3000
	   * @param {Long} distance distance, the range is -2147483648 ~ 2147483647
	   * @example
	   *     ff 55 0a 00 02 28 01 b8 0b e8 03 00 00
	   */
	  this.setStepperMotor = function(port, speed, distance) {
	    speed = utils.limitValue(speed, [0, 3000]);
	    var distanceBytes = utils.longToBytes(distance);
	    return bufAssembler({mode: 0x02, id: 0x28}, port,
	      speed & 0xff,
	      (speed >> 8) & 0xff,
	      distanceBytes[3],
	      distanceBytes[2],
	      distanceBytes[1],
	      distanceBytes[0]);
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
	  this.setLed = function(port, slot, position, r, g, b) {
	    r = utils.limitValue(r, [0, 255]);
	    g = utils.limitValue(g, [0, 255]);
	    b = utils.limitValue(b, [0, 255]);
	    return bufAssembler({mode: 0x02, id: 0x08}, port, slot, position, r, g, b);
	  };

	  /**
	   * set four leds
	   * @param {number} port     port number, vailable is: 0(on transport), 6,7,8,9,10
	   * @param {number} position led position, 0 signify all leds.
	   * @param {number} r        red, the range is 0 ~ 255
	   * @param {number} g        green, the range is 0 ~ 255
	   * @param {number} b        blue, the range is 0 ~ 255
	   */
	  this.setFourLeds = function(port, position, r, g, b) {
	    return this.setLed(port, 2, position, r, g, b);
	  };

	  /**
	   * turn off four leds
	   * @param {number} port     port number, vailable is: 0(on transport), 6,7,8,9,10
	   * @param {number} position led position, 0 signify all leds.
	   */
	  this.turnOffFourLeds = function(port, position) {
	    return this.setLed(port, 2, position, 0, 0, 0);
	  };

	  /**
	   * set led panel on Api transport.
	   * @param {number} position led position, 0 signify all leds.
	   * @param {number} r        red, the range is 0 ~ 255
	   * @param {number} g        green, the range is 0 ~ 255
	   * @param {number} b        blue, the range is 0 ~ 255
	   */
	  this.setLedPanelOnBoard = function(position, r, g, b) {
	    return this.setLed(0, 2, position, r, g, b);
	  };

	  /**
	   * turn off led panel on transport
	   * @param {number} position led position, 0 signify all leds.
	   */
	  this.turnOffLedPanelOnBoard = function(position) {
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
	  this.setFirmwareMode = function(mode) {
	    var a = [
	      0xff,0x55,
	      0x05, 0,
	      0x02,
	      0x3c,
	      0x11, // 0x11 means Api
	      mode
	    ];
	    return transport.send(a);
	  };

	  /**
	   * Set Servo speed.
	   * @param {[type]} port   port number, vailable is 6,7,8,9,10
	   * @param {[type]} slot   slot number, vailable is 1,2
	   * @param {[type]} degree servo degree, the range is 0 ~ 180
	   */
	  this.setServoMotor = function(port, slot, degree) {
	    degree = utils.limitValue(degree, [0, 180]);
	    var a = [
	      0xff,0x55,
	      0x06, 0,
	      0x02,
	      0x0b,
	      port,
	      slot,
	      degree
	    ];
	    return transport.send(a);
	  };

	  /**
	   * Set Seven-segment digital tube number.
	   * @param {number} port   port number, vailable is 6,7,8,9,10
	   * @param {float} number  the number to be displayed, -999 ~ 9999
	   * @exmpa
	   *     ff 55 08 00 02 09 06 00 00 c8 42
	   */
	  this.setSevenSegment = function(port, number) {
	    number = utils.limitValue(number, [-999, 9999]);
	    var byte4Array = utils.float32ToBytes(number);
	    var a = [
	      0xff,0x55,
	      0x08, 0,
	      0x02,
	      0x09,
	      port,
	      byte4Array[0],
	      byte4Array[1],
	      byte4Array[2],
	      byte4Array[3]
	    ];
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
	  this.setLedMatrixChar = function(port, xAxis, yAxis, char) {
	    var charAsciiArray = [];
	    for(var i = 0; i < char.length; i++) {
	      charAsciiArray.push(char[i].charCodeAt());
	    }
	    var a = [
	      0xff,0x55,
	      0x0a,0,
	      0x02,
	      0x29,
	      port,
	      0x01,
	      xAxis,
	      yAxis,
	      char.length,
	    ].concat(charAsciiArray);
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
	  this.setLedMatrixEmotion = function(port, xAxis, yAxis, emotionData) {
	    var a = [
	      0xff,0x55,
	      0x17,0,
	      0x02,
	      0x29,
	      port,
	      0x02,
	      xAxis,
	      yAxis
	    ].concat(emotionData);
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
	  this.setLedMatrixTime = function(port, separator, hour, minute) {
	    hour = utils.limitValue(hour, [0, 23]);
	    minute = utils.limitValue(minute, [0, 59]);
	    var a = [
	      0xff,0x55,
	      0x08,0,
	      0x02,
	      0x29,
	      port,
	      0x03,
	      separator,
	      hour,
	      minute
	    ];
	    return transport.send(a);
	  };

	  /**
	   * Set led matrix number.
	   * @param {number} port   port number, vailable is 6,7,8,9,10
	   * @param {float} number the number to be displayed
	   * @exmaple
	      ff 55 09 00 02 29 06 04 00 00 00 00
	   */
	  this.setLedMatrixNumber = function(port, number) {
	    var byte4Array = utils.float32ToBytes(number);
	    var a = [
	      0xff,0x55,
	      0x09, 0,
	      0x02,
	      0x29,
	      port,
	      0x04,
	      byte4Array[0],
	      byte4Array[1],
	      byte4Array[2],
	      byte4Array[3]
	    ];
	    return transport.send(a);
	  };

	  /**
	   * Set shutter.
	   * @param {number} port   port number, vailable is 6,7,8,9,10
	   * @param {number} action 0: 按下快门; 1: 松开快门; 2: 聚焦; 3: 停止聚焦
	   * @exmaple
	      ff 55 05 00 02 14 06 02
	   */
	  this.setShutter = function(port, action) {
	    var a = [
	      0xff,0x55,
	      0x05,0,
	      0x02,
	      0x14,
	      port,
	      action
	    ];
	    return transport.send(a);
	  };

	  /**
	   * reset all sensors and motors on transport.
	   * @exmaple
	      ff 55 02 00 04
	   */
	  this.reset = function() {
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
	  this.setTone = function(tone, beat) {
	    var TONE = {
	      // 原始数据：D5: 587 "E5": 658,"F5": 698,"G5": 784,"A5": 880,"B5": 988,"C6": 1047
	      "A2": 110,"B2": 123,"C2": 65,
	      "C3": 131,"D3": 147,"E3": 165,"F3": 175,"G3": 196,"A3": 220,
	      "B3": 247,"C4": 262,"D4": 294,"E4": 330,"F4": 349,"G4": 392,
	      "A4": 440,"B4": 494,"C5": 523,"D5": 555,"E5": 640,"F5": 698,
	      "G5": 784,"A5": 880,"B5": 988,"C6": 1047,"D6": 1175,"E6": 1319,
	      "F6": 1397,"G6": 1568,"A6": 1760,"B6": 1976,"C7": 2093,"D7": 2349,
	      "E7": 2637,"F7": 2794,"G7": 3136,"A7": 3520,"B7": 3951,"C8": 4186,"D8":4699
	    };
	    const BEAT = {
	      eight: 125, 
	      quater: 250, 
	      half: 500, 
	      one: 1000, 
	      double: 2000
	    }

	    return bufAssembler({mode: 0x02, id: 0x22}, 0x09, 
	      (TONE[tone] & 0xff),
	      (TONE[tone] >> 8) & 0xff,
	      (BEAT[beat] & 0xff),
	      (BEAT[beat] >> 8) & 0xff);
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
	  this.setEncoderMotor = function(port, slot, speed, angle) {
	    speed = utils.limitValue(speed, [0, 300]);
	    var byte4Array = utils.float32ToBytes(angle);
	    var a = [
	      0xff,0x55,
	      0x0b, 0,
	      0x02,
	      0x0c,
	      0x08,
	      slot,
	      speed & 0xff,
	      (speed >> 8) & 0xff,
	      byte4Array[0],
	      byte4Array[1],
	      byte4Array[2],
	      byte4Array[3]
	    ];
	    return transport.send(a);
	  };

	  /**
	   * read verion of transport
	   * @param  {Number} index index of command
	   */
	  this.readVersion = function(index) {
	    var a = [
	      0xff,0x55,
	      0x03, index,
	      0x01,
	      0x00
	    ];
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
	  this.readUltrasonic = function(index, port) {
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x01,
	      port
	    ];
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
	  this.readTemperature = function(index, port, slot) {
	    var a = [
	      0xff,0x55,
	      0x05, index,
	      0x01,
	      0x02,
	      port,
	      slot
	    ];
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
	  this.readLight = function(index, port) {
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x03,
	      port
	    ];
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
	  this.readPotentionmeter = function(index, port) {
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x04,
	      port
	    ];
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
	  this.readJoystick = function(index, port, axis) {
	    var a = [
	      0xff,0x55,
	      0x05, index,
	      0x01,
	      0x05,
	      port,
	      axis
	    ];
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
	  this.readGyro = function(index, port, axis) {
	    var a = [
	      0xff, 0x55,
	      0x05, index,
	      0x01,
	      0x06,
	      port,
	      axis
	    ];
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
	  this.readSound = function(index, port) {
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x07,
	      port
	    ];
	    return transport.send(a);
	  };

	  /**
	   * read temperature on transport
	   * @param  {Number} index [description]
	   * @example
	   * ff 55 04 00 01 1b 0d
	   */
	  this.readTemperatureOnBoard = function(index) {
	    var port = 0x0d;
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x1b,
	      port,
	    ];
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
	  this.readPirmotion = function(index, port) {
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x0f,
	      port
	    ];
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
	  this.readLineFollower = function(index, port) {
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x11,
	      port
	    ];
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
	  this.readLimitSwitch = function(index, port, slot) {
	    var a = [
	      0xff, 0x55,
	      0x05, index,
	      0x01,
	      0x15,
	      port,
	      slot
	    ];
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
	  this.readCompass = function(index, port) {
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x1a,
	      port
	    ];
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
	  this.readHumiture = function(index, port, type) {
	    var a = [
	      0xff,0x55,
	      0x05, index,
	      0x01,
	      0x17,
	      port,
	      type
	    ];
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
	  this.readFlame = function(index, port) {
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x18,
	      port
	    ];
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
	  this.readGas = function(index, port) {
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x19,
	      port
	    ];
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
	  this.readTouch = function(index, port) {
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x33,
	      port
	    ];
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
	  this.readFourKeys = function(index, port, key) {
	    var a = [
	      0xff,0x55,
	      0x05, index,
	      0x01,
	      0x16,
	      port,
	      key
	    ];
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
	  this.readEncoderMotorOnBoard = function(index, slot, type) {
	    var a = [
	      0xff,0x55,
	      0x06, index,
	      0x01,
	      0x3d,
	      0x00,
	      slot,
	      type
	    ];
	    return transport.send(a);
	  };

	  /**
	   * read firmware mode or voltage.
	   * @param  {Number} index [description]
	   * @param  {Number} type  0x70: 电压; 0x71: 模式
	   * @example
	   * ff 55 04 00 01 3c 70
	   */
	  this.readFirmwareMode = function(index, type) {
	    var a = [
	      0xff,0x55,
	      0x04, index,
	      0x01,
	      0x3c,
	      type
	    ];
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

	module.exports = new protocolAssembler();

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	const { defineNumber } = __webpack_require__(10);
	const RgbLedBase = __webpack_require__(11);

	class RgbLed extends RgbLedBase {
	  constructor(port, slot){
	    super(port, slot);
	  }

	  /**
	   * 扩展一个设置 port 的接口
	   * @param  {Number} port port
	   * @return {instance}      实例本身
	   */
	  port(port){
	    this.port = defineNumber(port, this.port);
	    return this;
	  }

	  /**
	   * 扩展一个设置 slot 的接口
	   * @param  {Number} slot slot
	   * @return {instance}      实例本身
	   */
	  slot(slot){
	    this.slot = defineNumber(slot, this.slot);
	    return this;
	  }

	  //描述各主控的支持情况
	  static support(){
	    return '1111';
	  }
	}

	module.exports = RgbLed;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	const { defineNumber } = __webpack_require__(10);
	const RgbLedBase = __webpack_require__(11);

	class LedPanelOnBoard extends RgbLedBase {
	  constructor(){
	    super(0, 2);
	  }

	  //描述各主控的支持情况
	  static support(){
	    return '1100';
	  }
	}

	module.exports = LedPanelOnBoard;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	const { defineNumber } = __webpack_require__(10);
	const RgbLedBase = __webpack_require__(11);

	class RgbLedOnBoard extends RgbLedBase {
	  constructor(){
	    super(0, 2);
	  }

	  //描述各主控的支持情况
	  static support(){
	    return '0100';
	  }
	}

	module.exports = RgbLedOnBoard;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	const {
	  defineNumber,
	  defineString
	} = __webpack_require__(10);
	const Electronic = __webpack_require__(12);
	const { setTone } = __webpack_require__(14);

	// 作为闭包内容不开放
	const ToneAndBeat = ['', ''];
	class Buzzer extends Electronic {
	  /**
	   * Buzzer类，声音模块
	   * @constructor
	   */
	  constructor() {
	    super();
	  }

	  /**
	   * @param {string} tone - 声音音调
	   */
	  tone(tone) {
	    ToneAndBeat[0] = defineString(tone.toUpperCase());
	    return this;
	  }
	  /**
	   * @param {string} beat - 声音音节
	   */
	  beat(beat) {
	    ToneAndBeat[1] = defineNumber(beat);
	    return this;
	  }
	  /**
	   * 播放声音
	   */
	  play() {
	    this._run();
	    return this;
	  }

	  _run() {
	    // 拿到参数
	    // 拿到协议组装器，组装协议
	    let buf = composer(setTone, ToneAndBeat);
	    // 用板子发送协议
	    board.send(buf);
	  }

	  //描述各主控的支持情况
	  static support(){
	    return '1111';
	  }
	}

	module.exports = Buzzer;

/***/ }
/******/ ]);
//# sourceMappingURL=sensorium.js.map