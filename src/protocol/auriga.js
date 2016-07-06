var command = require("../driver/command.js");
var PromiseList = require("../driver/promise.js");
var Device = require("./device.js");
var ValueWrapper = require("../driver/valueWrapper.js");
var Setting = require("../driver/setting.js");


var boardType = (function(ext) {

    ext.auriga = {
        setting: {
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
            this.getSensorValue({
                type: "version",
                callback: callback
            });
        },

        setDcMotor: function(port, speed) {

        },

        setEncoderMotorBoard(slot, speed) {

        },

        setBlockStatus: function(params) {
            var mode = this.setting.WRITE_MODE;
            var index = 0; // index 设置为0
            var cmdList = {
                // 可选port口为：1，2，3，4, ff 55 06 00 02 0a 01 ff 00
                "dcMotor": [
                    0xff, 0x55, 0x06, index, mode, Device[params.type],
                    params.port,
                    params.speed & 0xff,
                    (params.speed >> 8) & 0xff
                ],
                // 板载port固定为0, ff 55 07 00 02 3d 00 01 64 00
                "encoderMotorBoard": [
                    0xff, 0x55, 0x07, index, mode, Device[params.type],
                    0,
                    params.slot,
                    params.speed & 0xff,
                    (params.speed >> 8) & 0xff
                ],
                // ff 55 07 00 02 05 64 00 64 00
                "virtualJoystick": [
                    0xff, 0x55, 0x07, index, mode, Device[params.type],
                    params.leftSpeed & 0xff,
                    (params.leftSpeed >> 8) & 0xff,
                    params.rightSpeed & 0xff,
                    (params.rightSpeed >> 8) & 0xff
                ],
                // 板载port固定为0, ff 55 08 00 02 34 00 64 00 64 00
                "virtualJoystickForBalance": [
                    0xff, 0x55, 0x08, index, mode, Device[params.type],
                    0,
                    params.turnRange & 0xff,
                    (params.turnRange >> 8) & 0xff,
                    params.speed & 0xff,
                    (params.speed >> 8) & 0xff
                ],
                // ff 55 0a 00 02 28 01 b8 0b e8 03 00 00, 速度范围0~3000
                "stepperMotor": [
                    0xff, 0x55, 0x0a, index, mode, Device[params.type],
                    params.port,
                    params.speed & 0xff,
                    (params.speed >> 8) & 0xff,
                    params.position & 0xff,
                    (params.position >> 8) & 0xff
                ],
                // ff 55 09 00 02 08 06 02 00 ff 00 00
                "led": [
                    0xff, 0x55, 0x09, index, mode, Device[params.type],
                    params.port,
                    params.slot,
                    params.position,
                    params.r,
                    params.g,
                    params.b
                ],
                // 设置固件模式：ff 55 05 00 02 3c 11 00,
                // 00 蓝牙, 01 自动避障, 02 平衡车, 03 红外, 04 巡线
                "firmwareMode": [
                    0xff, 0x55, 0x05, index, mode, Device[params.type],
                    0x11,
                    params.mode
                ],
                // ff 55 06 00 02 0b 06 01 5a
                "servo": [
                    0xff, 0x55, 0x06, index, mode, Device[params.type],
                    params.port,
                    params.slot,
                    params.angle
                ],
                // 七位数码管， ff 55 08 00 02 09 06 00 00 c8 42
                "sevenSegment": [
                    0xff, 0x55, 0x08, index, mode, Device[params.type],
                    params.port,
                    params.slot,
                    params.angle
                ],

            };
            var cmd = cmdList[params.type];
            command.send(cmd);
        },

        /**
         * Read module's value
         * @param  {object} params command params.
         */
        _readBlockStatus: function(params) {
            var mode = this.setting.READ_MODE;
            var index = params.index;
            var cmdList = {
                    "version": [
                        0xff, 0x55, 0x03, index, mode,
                        00
                    ],
                    "ultrasonic": [
                        0xff, 0x55, 0x04, index, mode,Device[params.type],
                        params.port
                    ]
            };
            var cmd = cmdList[params.type];
            command.send(cmd);
        },

        getSensorValue: function(params) {
            var valueWrapper = new ValueWrapper();
            var index = PromiseList.add(params.type, params.callback, valueWrapper);
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