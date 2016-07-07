(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @fileOverview mainboards of Makeblock. Include orion, mcore, auriga, megaPi.
 * 主板类，实际的入口
 * @author Hyman (hujinhong@makelbock.cc)
 */

var Auriga = require("../protocol/auriga.js");
var Mbot = require("../protocol/mbot.js");
var Orion = require("../protocol/orion.js");
var Megapi = require("../protocol/megapi.js");
var Utils = require("./utils.js");

var actionList = Utils.extend(Auriga, Mbot, Orion, Megapi);

function Board(type) {
    console.log("[BoardType]: " + type);
    var actions = actionList[type];
    for(var i in actions) {
        this[i] = actions[i];
    }
    this.type = type;
    // this.version = this._getVersion();
    this.mode = this._getMode();
}

Board.prototype._getVersion = function() {
    this.getVersion(function(val) {
        this.version = val;
        return val;
    });
};

Board.prototype._getMode = function() {

};

if(window) {
    window.Board = Board;
}
module.exports = Board;

},{"../protocol/auriga.js":7,"../protocol/mbot.js":9,"../protocol/megapi.js":10,"../protocol/orion.js":11,"./utils.js":5}],2:[function(require,module,exports){
/**
 * @fileOverview 只负责发送指令的逻辑
 *
 */

var utils = require('./utils.js');


function Command() {

}

Command.prototype.send = function(params) {
    this.doSend(params);
};

Command.prototype.doSend = function(params) {
    // console.log(params);
    var params = utils.intStrToHexStr(params);
    console.log(params);
};



module.exports = new Command();
},{"./utils.js":5}],3:[function(require,module,exports){
var PromiseList = {
    requestList: new Array(128),
    index: 1,

    add: function(type, callback, valueWrapper) {
        this.index++;
        if (this.index > 127) {
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
            console.log("返回字节的索引值无法匹配");
            return 0;
        }
    }
};


module.exports = PromiseList;
},{}],4:[function(require,module,exports){
var settings = {
    // whether open console.log
    OPEN_LOG: false,

    // 开启超时重发
    OPEN_RESNET_MODE: false
};

module.exports = settings;
},{}],5:[function(require,module,exports){
/**
 * @fileOverview 工具类函数
 */

var Utils = {
    extend : function() {
        var args = arguments;
        if (args.length < 2) { return };
        var temp = args[0];
        for (var n = 1; n < args.length; n++) {
            for (var i in args[n]) {
                temp[i] = args[n][i];
            }
        }
        return temp;
    },

    // 将十进制字符串数组转为16进制
    intStrToHexStr: function(data) {
        var temp = [];
        for(var i = 0; i < data.length; i++) {
            if(data[i] != null) {
                var item =  parseInt(data[i]).toString(16);
                if(item.length == 1) {
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
        for(var i in a) {
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
        if(value == 0) {
            return [0,0,0,0];
        }
        var bytesInt = 0;
        switch (value) {
            case Number.POSITIVE_INFINITY: bytesInt = 0x7F800000; break;
            case Number.NEGATIVE_INFINITY: bytesInt = 0xFF800000; break;
            case +0.0: bytesInt = 0x40000000; break;
            case -0.0: bytesInt = 0xC0000000; break;
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
        var bytesArray = this.int2BytesArray(bytesInt);
        return bytesArray;
    },

    /**
     * 整形转换成字节数组
     * @param  {number} value 整形
     * @return {array}  array数组
     */
    int2BytesArray: function(value) {
        var bytesArray = [];
        var b1 = (value & 0xff).toString(16);
        var b2 = ((value >> 8) & 0xff).toString(16);
        var b3 = ((value >> 16) & 0xff).toString(16);
        var b4 = ((value >> 24) & 0xff).toString(16);
        bytesArray.push(b1);
        bytesArray.push(b2);
        bytesArray.push(b3);
        bytesArray.push(b4);
        return bytesArray;
    },

    /**
     * 将单词的第一个字母转成大写
     * @param  {string} str string.
     * @return {string}     target string.
     */
    upperCaseFirstLetter: function(str) {
        var reg = /\b(\w)|\s(\w)/g;
        str = str.toLowerCase();
        return str.replace(reg, function(m){
            return m.toUpperCase();
        })
    }

}


module.exports = Utils;

},{}],6:[function(require,module,exports){
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
ValueWrapper = function() {

},
ValueWrapper.prototype.toString = function() {
    return this.val;
};

ValueWrapper.prototype.setValue = function(value) {
    this.val = value;
};


module.exports = ValueWrapper;
},{}],7:[function(require,module,exports){
var command = require("../driver/command.js");
var PromiseList = require("../driver/promise.js");
var Device = require("./device.js");
var ValueWrapper = require("../driver/valueWrapper.js");
var Setting = require("../driver/setting.js");
var utils = require("../driver/utils.js");


var boardType = (function(ext) {

    ext.auriga = {
        SETTING: {
            // 数据发送与接收相关
            COMMAND_HEAD: [0xff, 0x55],
            COMMAND_END: [0x0d, 0x0a],
            // 回复数据的index位置
            READ_BYTES_INDEX: 2,
            // 发送数据中表示“读”的值
            READ_MODE: 1,
            // 发送数据中表示“写”的值
            WRITE_MODE: 2,
            // 超时重发的次数
            RESENT_COUNT : 3,
            // 读值指令超时的设定
            COMMAND_SEND_TIMEOUT : 2000,
        },
        // 用来存储硬件返回的数据
        buffer : [],

        getVersion: function(callback) {

        },

        /**
         * Set dc motor speed.
         * @param {number} port  port number, vailable is: 1,2,3,4
         * @param {number} speed speed, the range is -255 ~ 255
         * @example
         *     ff 55 06 00 02 0a 01 ff 00
         */
        setDcMotor: function(port, speed) {
            var a = [
                this.SETTING.COMMAND_HEAD[0],
                this.SETTING.COMMAND_HEAD[1],
                0x06, 0,
                this.SETTING.WRITE_MODULE,
                0x0a,
                port,
                speed & 0xff,
                (speed >> 8) & 0xff
            ];
            command.send(a);
        },

        /**
         * Set encoder motor speed.
         * @param {number} slot  slot number, vailable is: 1,2
         * @param {number} speed speed, the range is -255 ~ 255
         * @example
         *     ff 55 07 00 02 3d 00 01 64 00
         */
        setEncoderMotorBoard: function(slot, speed) {
            var a = [
                this.SETTING.COMMAND_HEAD[0],
                this.SETTING.COMMAND_HEAD[1],
                0x07, 0,
                this.SETTING.WRITE_MODULE,
                0x3d,
                0,
                slot,
                speed & 0xff,
                (speed >> 8) & 0xff
            ];
            command.send(a);
        },

        /**
         * Set both left speed and right speed with one command.
         * @param {number} leftSpeed  left speed, the range is -255 ~ 255
         * @param {number} rightSpeed right speed, the range is -255 ~ 255
         * @example
         *     ff 55 07 00 02 05 64 00 64 00
         */
        setVirtualJoystick: function(leftSpeed, rightSpeed) {
            var a = [
                this.SETTING.COMMAND_HEAD[0],
                this.SETTING.COMMAND_HEAD[1],
                0x07, 0,
                this.SETTING.WRITE_MODULE,
                0x05,
                leftSpeed & 0xff,
                (leftSpeed >> 8) & 0xff,
                rightSpeed & 0xff,
                (rightSpeed >> 8) & 0xff
            ];
            command.send(a);
        },

        /**
         * Set speed for balance mode.
         * @param {number} port       port number, the port on board id default 0
         * @param {number} turnDegree turn extend, -255 ~ 255
         * @param {number} speed      speed, -255 ~ 255
         * @example
         *     ff 55 08 00 02 34 00 64 00 64 00
         */
        setVirtualJoystickForBalance: function(port, turnExtent, speed) {
            var a = [
                this.SETTING.COMMAND_HEAD[0],
                this.SETTING.COMMAND_HEAD[1],
                0x08, 0,
                this.SETTING.WRITE_MODULE,
                0x34,
                turnExtent & 0xff,
                (turnExtent >> 8) & 0xff,
                speed & 0xff,
                (speed >> 8) & 0xff
            ];
            command.send(a);
        },

        /**
         * Set stepper motor speed.
         * @param {[type]} port     port number, vailable is: 1,2,3,4
         * @param {[type]} speed    speed, the range is 0 ~ 3000
         * @param {[type]} distance distance, the range is -2147483648 ~ 2147483647
         * @example
         *     ff 55 0a 00 02 28 01 b8 0b e8 03 00 00
         */
        setStepperMotor: function(port, speed, distance) {
            var a = [
                this.SETTING.COMMAND_HEAD[0],
                this.SETTING.COMMAND_HEAD[1],
                0x08,0,
                this.SETTING.WRITE_MODULE,
                0x28,
                port,
                speed & 0xff,
                (speed >> 8) & 0xff,
                distance & 0xff,
                (distance >> 8) & 0xff
            ];
            command.send(a);
        },

         /**
          * Set RgbFourLed electronic module color.
          * @param {number} port     port number, vailable is: 0(on board), 6,7,8,9,10
          * @param {number} slot     slot number, vailable is: 1,2
          * @param {number} position led position, 0 signify all leds.
          * @param {number} r        red, the range is 0 ~ 255
          * @param {number} g        green, the range is 0 ~ 255
          * @param {number} b        blue, the range is 0 ~ 255
          * @example
          *     ff 55 09 00 02 08 06 02 00 ff 00 00
          */
        setLed: function(port, slot, position, r, g, b) {
            var a = [
                this.SETTING.COMMAND_HEAD[0],
                this.SETTING.COMMAND_HEAD[1],
                0x09,0,
                this.SETTING.WRITE_MODULE,
                0x08,
                port,
                slot,
                position,red,green,blue
            ];
            command.send(a);
        },

        /**
         * Set board mode.
         * @param {number} mode board mode,
         *     0: bluetooth mode
         *     1: ultrasonic mode
         *     2: balance mode
         *     3: infrared mode
         *     4: linefollow mode
         * @example
         *     ff 55 05 00 02 3c 11 00
         */
        setFirmwareMode: function(mode) {
            var a = [
                this.SETTING.COMMAND_HEAD[0],
                this.SETTING.COMMAND_HEAD[1],
                0x05,0,
                this.SETTING.WRITE_MODULE,
                0x3c,
                0x11, // 0x11 means auriga
                mode
            ];
            command.send(a);
        },

        /**
         * Set Servo speed.
         * @param {[type]} port   port number, vailable is 6,7,8,9,10
         * @param {[type]} slot   slot number, vailable is 1,2
         * @param {[type]} degree servo degree, the range is 0 ~ 180
         */
        setServoMotor: function(port, slot, degree) {
            var a = [
                this.SETTING.COMMAND_HEAD[0],
                this.SETTING.COMMAND_HEAD[1],
                0x06,0,
                this.SETTING.WRITE_MODULE,
                0x0b,
                port,
                slot,
                degree
            ];
            command.send(a);
        },

        /**
         * Set Seven-segment digital tube number.
         * @param {number} port   port number, vailable is 6,7,8,9,10
         * @param {float} number  the number to be displayed
         * @exmpa
         *     ff 55 08 00 02 09 06 00 00 c8 42
         */
        setSevenSegment: function(port, number) {
            var byte4Array = utils.float32ToBytes(number);
            var a = [
                this.SETTING.COMMAND_HEAD[0],
                this.SETTING.COMMAND_HEAD[1],
                0x08,0,
                this.SETTING.WRITE_MODULE,
                0x09,
                port,
                parseInt(byte4Array[0], 16),
                parseInt(byte4Array[1], 16),
                parseInt(byte4Array[2], 16),
                parseInt(byte4Array[3], 16)
            ];
            command.send(a);
        },

        /**
         * Set led matrix chart.
         * @param {number} port   port number, vailable is 6,7,8,9,10
         * @param {number} xAxis  x position
         * @param {number} yAxis  y position
         * @param {number} length chart length
         * @param {string} chart  chart
         * @exmaple
         *     ff 55 0a 00 02 29 06 01 00 07 02 48 69
         */
        setLedMatrixChart: function(port, xAxis, yAxis, length, chart) {

        },


        /**
         * Set led matrix emotion.
         * @param {number} port   port number, vailable is 6,7,8,9,10
         * @param {number} xAxis      x position
         * @param {number} yAxis      y position
         * @param {?} motionData emotion data to be displayed
         * @example
         *     ff 55 17 00 02 29 06 02 00 00 00 00 40 48 44 42 02 02 02 02 42 44 48 40 00 00
         */
        setLedMatrixEmotion: function(port, xAxis, yAxis, motionData) {

        },

        /**
         * Set led matrix time.
         * @param {number} separator time separator, 01 signify `:`, 02 signify ` `
         * @param {number} hour      hour number
         * @param {number} minute    minute number
         * @example
         *     ff 55 08 00 02 29 06 03 01 0a 14
         */
        setLedMatrixTime: function(separator, hour, minute) {

        },

        /**
         * Set led matrix number.
         * @param {number} port   port number, vailable is 6,7,8,9,10
         * @param {float} number the number to be displayed
         * @exmaple
            ff 55 09 00 02 29 06 04 00 00 00 00
         */
        setLedMatrixNumber: function(port, number) {
            var byte4Array = utils.float32ToBytes(number);
            var a = [
                this.SETTING.COMMAND_HEAD[0],
                this.SETTING.COMMAND_HEAD[1],
                0x09,0,
                this.SETTING.WRITE_MODULE,
                0x29,
                port,
                0x04,
                parseInt(byte4Array[0], 16),
                parseInt(byte4Array[1], 16),
                parseInt(byte4Array[2], 16),
                parseInt(byte4Array[3], 16)
            ];
            command.send(a);
        },

        readUltrasonic: function(index, port) {
            var a = [
                this.SETTING.COMMAND_HEAD[0],
                this.SETTING.COMMAND_HEAD[1],
                0x04,index,
                this.SETTING.READ_MODULE,
                0x01,
                port
            ];
            command.send(a);
        },

        /**
         * Read module's value
         * @param  {object} params command params.
         */
        _readBlockStatus: function(params) {
            var type = params.type;
            var index = params.index;
            var port = params.port;
            var slot = params.slot || null;
            var funcName = 'this.read' + utils.upperCaseFirstLetter(type);
            var paramsStr = '(' + index + ',' + port + ',' + slot + ')';
            var func = funcName + paramsStr;
            eval(func);
        },

        getSensorValue: function(type, callback) {
            var params = {};
            params.type = type;
            params.callback = callback;
            var valueWrapper = new ValueWrapper();
            var index = PromiseList.add(type, callback, valueWrapper);
            params.index = index;

            // 发送读取指令
            this._doGetSensorValue(params);

            if(Setting.OPEN_RESNET_MODE) {
                // 执行超时检测
                this._handlerCommandSendTimeout(params);
            }
            return valueWrapper;
        },

        _doGetSensorValue: function(params) {
            var that = this;
            this._readBlockStatus(params);
            // 模拟回复指令
            setTimeout(function() {
                // that.sensor_callback(params.type, params.index);
            }, 200);
        },

        // 处理指令发出后的超时问题，超时后会进行重发
        _handlerCommandSendTimeout: function(params) {
            var that = this;
            var promiseItem = PromiseList.requestList[params.index];
            setTimeout(function() {
                if(promiseItem.hasReceivedValue) {
                    // 成功拿到数据，不进行处理
                    return;
                } else {
                    // 超过规定的时间，还没有拿到数据，需要进行超时重发处理
                    if(promiseItem.resentCount >= that.setting.RESENT_COUNT) {
                        // 如果重发的次数大于规定次数,则终止重发
                        console.log("【resend ends】");
                        return;
                    } else {
                        console.log('【resend】:' + params.index);
                        promiseItem.resentCount  = promiseItem.resentCount || 0;
                        promiseItem.resentCount++;
                        that._doGetSensorValue(params);
                        that._handlerCommandSendTimeout(params);
                    }
                }
            }, that.setting.COMMAND_SEND_TIMEOUT);
        },

        sensor_callback: function(type, index) {
            var result = 100;
            PromiseList.receiveValue(index, result);
        },

        // 解析从硬件传递过来的数据
        decodeData: function(data) {
            var bytes = data.split(" ");
            for (var i = 0; i < bytes.length; i++) {
                this.buffer.push(bytes[i]);
                var length = this.buffer.length;
                // 过滤无效数据
                if (length > 1 && this.buffer[length - 2] == this.SETTING.READ_CHUNK_SUFFIX[0] && this.buffer[length - 1] == this.SETTING.READ_CHUNK_SUFFIX[1]) {
                    if (this.buffer.length != 10) {
                        this.buffer = [];
                    } else {
                        // 以下为有效数据, 获取返回字节流中的索引位
                        var dataIndex = this.buffer[this.SETTING.READ_BYTES_INDEX];
                        console.log('【dataIndex】：' + dataIndex);
                        if(MBlockly.Control.PromiseList.getType(dataIndex) || MBlockly.Control.PromiseList.getType(dataIndex) == 0) {
                            var promiseType = MBlockly.Control.PromiseList.getType(dataIndex);
                            // 计算对应传感器的返回值
                            this.sensor_callback(promiseType);
                        }
                        this.buffer = [];
                    }
                }
            }
        }
    };

    return ext;
})({});


module.exports = boardType;
},{"../driver/command.js":2,"../driver/promise.js":3,"../driver/setting.js":4,"../driver/utils.js":5,"../driver/valueWrapper.js":6,"./device.js":8}],8:[function(require,module,exports){
/**
 * @fileOverview all electronic module‘s type.
 * 需要统下列名称，保证唯一性
 */

var Device = {
    "version":                          0,
    "ultrasonic":                       1,
    "temperature":                      2,
    "light":                            3,
    "potentionmeter":                   4,
    "virtualJoystick":                  5,
    "gyro":                             6,
    "sound":                            7,
    "led":                              8,
    "sevenSegment":                     9,
    "dcMotor":                          10,
    "servo":                            11,
    "encoder":                          12,
    "ir":                               13,
    "pirmotion":                        15,
    "infrared":                         16,
    "lineFollower":                     17,
    "shutter":                          20,
    "limitSwitch":                      21,
    "button":                           22,
    "humiture":                         23,
    "flame":                            24,
    "gas":                              25,
    "compass":                          26,
    "temperature_1":                    27,
    "digital":                          30,
    "analog":                           31,
    "pwm":                              32,
    "servoPin":                         33,
    "tone":                             34,
    "buttonInner":                      35,
    "ultrasonicArduino":                36,
    "pulsein":                          37,
    "stepperMotor":                     40,
    "ledMatrix":                        41,
    "timer":                            50,
    "touch":                            51,
    "virtualJoystickForBalance":        52,
    "firmwareMode":                     60,
      //Secondary command
      "setStarterMode":                 0x10,
      "setAurigaMode":                  0x11,
      "setMegapiMode":                  0x12,
      "getBatteryPower":                0x70,
      "getAurigaMode":                  0x71,
      "getMegapiMode":                  0x72,
    "encoderMotorBoard":                61,
      //Read type
      "encoderMotorBoardPos":           0x01,
      "encoderMotorBoardSpeed":         0x02
};

module.exports = Device;
},{}],9:[function(require,module,exports){
var boardType = (function(ext) {

    ext.mbot = {
        getVersion: function() {
            console.log("mbot");
        },

        setLedRgb: function(r,g,b, port) {

        },

        readUltrasonic: function() {

        }
    };

    return ext;
})({});


module.exports = boardType;
},{}],10:[function(require,module,exports){
var boardType = (function(ext) {

    ext.megapi = {
        getVersion: function() {
            console.log("megapi");
        },

        setLedRgb: function(r,g,b, port) {

        },

        readUltrasonic: function() {

        }
    };

    return ext;
})({});


module.exports = boardType;
},{}],11:[function(require,module,exports){
var boardType = (function(ext) {

    ext.orion = {
        getVersion: function() {
            console.log("orion");
        },

        setLedRgb: function(r,g,b, port) {

        },

        readUltrasonic: function() {

        }
    };

    return ext;
})({});


module.exports = boardType;
},{}]},{},[1]);
