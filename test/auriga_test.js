var assert = require('chai').assert;
var Board = require("../src/core/board");
var utils = require("../src/core/utils");

var Auriga = require("../src/protocol/auriga");

Board.prototype.send = function(command) {
    return utils.intStrToHexStr(command);
};

var auriga = new Auriga();

//test original_auriga

//.......


//test latest_auriga：09.01.012
describe('【auriga_最新固件】', function() {
    //执行命令：无返回的数据
    describe('#它的执行命令',function(){
        describe('直流电机：setDcMotor(1,255)', function() {
            var targetCmd = "ff 55 06 00 02 0a 01 ff 00";
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.setDcMotor(1, 255);
                // console.log("the data from bluetooth: "+ cmd);
                assert.equal(targetCmd, cmd);
            });
        });

        describe('编码电机-板载：setEncoderMotorBoard(1,100)', function() {
            var targetCmd = "ff 55 07 00 02 3d 00 01 64 00";
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.setEncoderMotorBoard(1,100);
                console.log("the data from bluetooth: "+ cmd);
                assert.equal(targetCmd, cmd);
            });
        });

        // describe('编码电机-外接：xxxxxxx', function() {
        //     targetCmd = "xxxxxxxx";
        //     it(targetCmd + ' should be sent', function() {
        //         var cmd = auriga.setEncodeMotorxxxxx(1,100);
        //         console.log("the data from bluetooth: "+ cmd);
        //         assert.equal(targetCmd, cmd);
        //     });
        // });

        describe('摇杆1：setVirtualJoystick(100,100)', function() {
            var targetCmd = "ff 55 07 00 02 05 64 00 64 00";
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.setVirtualJoystick(100,100);
                console.log("the data from bluetooth: "+ cmd);
                assert.equal(targetCmd, cmd);
            });
        });

        describe('摇杆2：setVirtualJoystickForBalance(100,100)', function() {
            var targetCmd = "ff 55 08 00 02 34 00 64 00 64 00";
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.setVirtualJoystickForBalance(100,100);
                console.log("the data from bluetooth: "+ cmd);
                assert.equal(targetCmd, cmd);
            });
        });

        describe('步进电机：setStepperMotor(1,3000,1000)', function() {
            var targetCmd = "ff 55 0a 00 02 28 01 b8 0b e8 03 00 00";
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.setStepperMotor(1,3000,1000);
                console.log("the data from bluetooth: "+ cmd);
                assert.equal(targetCmd, cmd);
            });
        });

        describe('RGB LED灯：setLed(6,2,0,255,0,0)', function() {
            var targetCmd = "ff 55 09 00 02 08 06 02 00 ff 00 00";
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.setLed(6,2,0,255,0,0);
                console.log("the data from bluetooth: "+ cmd);
                assert.equal(targetCmd, cmd);
            });
        });

        describe('主板通用命令：setFirmwareMode(0)', function() {
            var targetCmd = "ff 55 05 00 02 3c 11 00";
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.setFirmwareMode(0);
                console.log("the data from bluetooth: "+ cmd);
                assert.equal(targetCmd, cmd);
            });
        });

        describe('数字舵机：setServoMotor(6,1,90)', function() {
            var targetCmd = "ff 55 06 00 02 0b 06 01 5a";
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.setServoMotor(6,1,90);
                console.log("the data from bluetooth: "+ cmd);
                assert.equal(targetCmd, cmd);
            });
        });

        describe('四位七段数码管：setSevenSegment(6，100)', function() {
            var targetCmd = "ff 55 08 00 02 09 06 00 00 c8 42";
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.setSevenSegment(6,100);
                console.log("the data from bluetooth: "+ cmd);
                assert.equal(targetCmd, cmd);
            });
        });


        // describe('表情面板：xxxxxxx', function() {
        //     targetCmd = "xxxxxxxx";
        //     it(targetCmd + ' should be sent', function() {
        //         var cmd = auriga.setEncodeMotorxxxxx(1,100);
        //         console.log("the data from bluetooth: "+ cmd);
        //         assert.equal(targetCmd, cmd);
        //     });
        // });       

        
        // describe('快门线模块：xxxxxxx', function() {
        //     targetCmd = "xxxxxxxx";
        //     it(targetCmd + ' should be sent', function() {
        //         var cmd = auriga.setEncodeMotorxxxxx(1,100);
        //         console.log("the data from bluetooth: "+ cmd);
        //         assert.equal(targetCmd, cmd);
        //     });
        // });


        // describe('设置TONE输出：xxxxxxx', function() {
        //     targetCmd = "xxxxxxxx";
        //     it(targetCmd + ' should be sent', function() {
        //         var cmd = auriga.setEncodeMotorxxxxx(1,100);
        //         console.log("the data from bluetooth: "+ cmd);
        //         assert.equal(targetCmd, cmd);
        //     });
        // });

        // describe('数字舵机2：xxxxxxx', function() {
        //     targetCmd = "xxxxxxxx";
        //     it(targetCmd + ' should be sent', function() {
        //         var cmd = auriga.setEncodeMotorxxxxx(1,100);
        //         console.log("the data from bluetooth: "+ cmd);
        //         assert.equal(targetCmd, cmd);
        //     });
        // });

        // describe('智能舵机：xxxxxxx', function() {
        //     targetCmd = "xxxxxxxx";
        //     it(targetCmd + ' should be sent', function() {
        //         var cmd = auriga.setEncodeMotorxxxxx(1,100);
        //         console.log("the data from bluetooth: "+ cmd);
        //         assert.equal(targetCmd, cmd);
        //     });
        // });
    });

    //重启命令
    // describe('#它的重启命令'，function(){
    //     describe('重启指令：xxxxxxx'，function(){
    //         targetCmd = "xxxxxxxx";
    //         it(targetCmd + ' should be sent', function() {
    //             var cmd = auriga.xxxxxxxx(6，100);
    //             console.log("the data from bluetooth: "+ cmd);
    //             assert.equal(targetCmd, cmd);
    //         });
    //     });
    // });


    //读指令:需要设备返回数据的指令
    describe('#它的读指令',function(){
        //describe('读取版本号：xxxxxxx'，function(){
    //         targetCmd = "xxxxxxxx";
    //         it(targetCmd + ' should be sent', function() {
    //             var cmd = auriga.xxxxxxxx(6，100);
    //             console.log("the data from bluetooth: "+ cmd);
    //             assert.equal(targetCmd, cmd);
    //         });
    //     });


        describe('超声波传感器：readUltrasonic(0,10)',function(){
            var targetCmd = "ff 55 04 00 01 01 0a";
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.readUltrasonic(0,10);
                console.log("the data from bluetooth: "+ cmd);
                assert.equal(targetCmd, cmd);
            });
        });


    });
});