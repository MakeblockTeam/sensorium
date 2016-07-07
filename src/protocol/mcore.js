var Board = require("../core/board");
var PromiseList = require("../core/promise.js");
var Device = require("./device.js");
var ValueWrapper = require("../core/valueWrapper.js");
var Setting = require("../core/setting.js");
var utils = require("../core/utils.js");
var _ = require('underscore');

var DEFAULT_CONF = {
    driver: 'makeblockhd'
};

function Mcore(conf) {
    this._config = _.extend(DEFAULT_CONF, conf || {});
    var board = new Board(this._config);

    this.SETTING = {
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
    };

    this.buffer = [];

    /**
     * Set dc motor speed.
     * @param {number} port  port number, vailable is: 1,2,3,4
     * @param {number} speed speed, the range is -255 ~ 255
     * @example
     *     ff 55 06 00 02 0a 01 ff 00
     */
    this.setDcMotor = function(port, speed) {
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
        board.driver.send(a);
    },

    /**
     * Set encoder motor speed.
     * @param {number} slot  slot number, vailable is: 1,2
     * @param {number} speed speed, the range is -255 ~ 255
     * @example
     *     ff 55 07 00 02 3d 00 01 64 00
     */
    this.setEncoderMotorBoard = function(slot, speed) {
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
        board.driver.send(a);
    },

    /**
     * Set both left speed and right speed with one command.
     * @param {number} leftSpeed  left speed, the range is -255 ~ 255
     * @param {number} rightSpeed right speed, the range is -255 ~ 255
     * @example
     *     ff 55 07 00 02 05 64 00 64 00
     */
    this.setVirtualJoystick = function(leftSpeed, rightSpeed) {
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
        board.driver.send(a);
    },

    /**
     * Set speed for balance mode.
     * @param {number} port       port number, the port on board id default 0
     * @param {number} turnDegree turn extend, -255 ~ 255
     * @param {number} speed      speed, -255 ~ 255
     * @example
     *     ff 55 08 00 02 34 00 64 00 64 00
     */
    this.setVirtualJoystickForBalance = function(port, turnExtent, speed) {
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
        board.driver.send(a);
    },

    /**
     * Set stepper motor speed.
     * @param {[type]} port     port number, vailable is: 1,2,3,4
     * @param {[type]} speed    speed, the range is 0 ~ 3000
     * @param {[type]} distance distance, the range is -2147483648 ~ 2147483647
     * @example
     *     ff 55 0a 00 02 28 01 b8 0b e8 03 00 00
     */
    this.setStepperMotor = function(port, speed, distance) {
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
        board.driver.send(a);
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
    this.setLed = function(port, slot, position, r, g, b) {
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
        board.driver.send(a);
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
    this.setFirmwareMode = function(mode) {
        var a = [
            this.SETTING.COMMAND_HEAD[0],
            this.SETTING.COMMAND_HEAD[1],
            0x05,0,
            this.SETTING.WRITE_MODULE,
            0x3c,
            0x11, // 0x11 means auriga
            mode
        ];
        board.driver.send(a);
    },

    /**
     * Set Servo speed.
     * @param {[type]} port   port number, vailable is 6,7,8,9,10
     * @param {[type]} slot   slot number, vailable is 1,2
     * @param {[type]} degree servo degree, the range is 0 ~ 180
     */
    this.setServoMotor = function(port, slot, degree) {
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
        board.driver.send(a);
    },

    /**
     * Set Seven-segment digital tube number.
     * @param {number} port   port number, vailable is 6,7,8,9,10
     * @param {float} number  the number to be displayed
     * @exmpa
     *     ff 55 08 00 02 09 06 00 00 c8 42
     */
    this.setSevenSegment = function(port, number) {
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
        board.driver.send(a);
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
    this.setLedMatrixChart = function(port, xAxis, yAxis, length, chart) {

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
    this.setLedMatrixEmotion = function(port, xAxis, yAxis, motionData) {

    },

    /**
     * Set led matrix time.
     * @param {number} separator time separator, 01 signify `:`, 02 signify ` `
     * @param {number} hour      hour number
     * @param {number} minute    minute number
     * @example
     *     ff 55 08 00 02 29 06 03 01 0a 14
     */
    this.setLedMatrixTime = function(separator, hour, minute) {

    },

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
        board.driver.send(a);
    },

    this.readUltrasonic = function(index, port) {
        var a = [
            this.SETTING.COMMAND_HEAD[0],
            this.SETTING.COMMAND_HEAD[1],
            0x04,index,
            this.SETTING.READ_MODE,
            0x01,
            port
        ];
        board.driver.send(a);
    },

    /**
     * Read module's value.
     * @param  {object} params command params.
     */
    this._readBlockStatus = function(params) {
        var type = params.type;
        var index = params.index;
        var port = params.port;
        var slot = params.slot || null;
        var funcName = 'this.read' + utils.upperCaseFirstLetter(type);
        var paramsStr = '(' + index + ',' + port + ',' + slot + ')';
        var func = funcName + paramsStr;
        eval(func);
    },

    this.getSensorValue = function(type, options, callback) {
        var params = {};
        params.type = type;
        params.callback = callback;
        params.port = options.port;
        params.slot = options.slot;
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

    this._doGetSensorValue = function(params) {
        var that = this;
        this._readBlockStatus(params);
        // 模拟回复指令
        setTimeout(function() {
            that.sensor_callback(params.type, params.index);
        }, 200);
    },

    // 处理指令发出后的超时问题，超时后会进行重发
    this._handlerCommandSendTimeout = function(params) {
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

    // Todo:
    this.sensor_callback = function(type, index) {
        var result = 100;
        PromiseList.receiveValue(index, result);
    }
}

if (typeof window !== "undefined") {
    window.Mcore = Mcore;
}

module.exports = Mcore;