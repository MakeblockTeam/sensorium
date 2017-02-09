var assert = require('chai').assert;
var Board = require("../src/core/board");
var utils = require("../src/core/utils");
var dataman = require('./dataman');

var Auriga = require("../src/protocol/auriga");

Board.prototype.send = function(command) {
    return utils.intStrToHexStr(command);
};

var auriga = new Auriga({

});

//test original_auriga

//.......


//test latest_auriga：09.01.012
describe('【auriga_最新固件】', function() {
    //执行命令：无返回的数据
    describe('#它的执行命令',function(){
        describe('直流电机：setDcMotor(1,255)', function() {
            var targetCmd = dataman.auriga.write.dcMotor[0]; //"ff 55 06 00 02 0a 01 ff 00";
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.setDcMotor(1, 255);
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });
        });

        describe('编码电机-板载：setEncoderMotorOnBoard(1,100)', function() {
            var targetCmd = dataman.auriga.write.encoderMotorBoard[0];   //"ff 55 07 00 02 3d 00 01 64 00";
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.setEncoderMotorOnBoard(1,100);
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });
        });

        describe('编码电机-外接：setEncoderMotor(8, 1, 150, 720)', function() {
            var targetCmd = dataman.auriga.write.encoder[0];
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.setEncoderMotor(8, 1, 150, 720);
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });
        });

        describe('摇杆1：setJoystick(100,100)', function() {
            var targetCmd = dataman.auriga.write.joystick[0]    //"ff 55 07 00 02 05 64 00 64 00";
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.setJoystick(100,100);
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });
        });

        describe('摇杆2：setVirtualJoystickForBalance(0,100,100)', function() {
            var targetCmd = dataman.auriga.write.virtualJoystickForBalance[0];        //"ff 55 08 00 02 34 00 64 00 64 00";
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.setVirtualJoystickForBalance(0,100,100);
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });
        });

        describe('步进电机：setStepperMotor(1,3000,1000)', function() {
            var targetCmd = dataman.auriga.write.stepperMotor[0];      //"ff 55 0a 00 02 28 01 b8 0b e8 03 00 00";
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.setStepperMotor(1,3000,1000);
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });
        });

        describe('RGB LED灯：setLed(6,2,0,255,0,0)', function() {
            var targetCmd = dataman.auriga.write.led[0];
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.setLed(6,2,0,255,0,0);
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });
        });

        describe('主板通用命令：setFirmwareMode(0)', function() {

            it('蓝牙模式下的主板通用命令', function() {
                var targetCmd = dataman.auriga.write.firmwareModeBlueTooth[0];
                // console.log(targetCmd + ' should be sent');
                var cmd = auriga.setFirmwareMode(0);
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });

            it("自动避障模式下的主板通用命令", function() {
                var targetCmd = dataman.auriga.write.firmwareModeObstacle[0];
                // console.log(targetCmd + ' should be sent');
                var cmd = auriga.setFirmwareMode(1);
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });

            it("平衡车模式下的主板通用命令 ", function() {
                var targetCmd = dataman.auriga.write.firmwareModeBalance[0];
                // console.log(targetCmd + ' should be sent');
                var cmd = auriga.setFirmwareMode(2);
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });

            it("红外线模式下的主板通用命令 ", function() {
                var targetCmd = dataman.auriga.write.firmwareModeInfrared[0];
                // console.log(targetCmd + ' should be sent');
                var cmd = auriga.setFirmwareMode(3);
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });

            it("巡线模式下的主板通用命令 ", function() {
                var targetCmd = dataman.auriga.write.firmwareModeLineFollow[0];
                // console.log(targetCmd + ' should be sent');
                var cmd = auriga.setFirmwareMode(4);
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });

        });

        describe('数字舵机：setServoMotor(6,1,90)', function() {
            var targetCmd = dataman.auriga.write.servo[0];
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.setServoMotor(6,1,90);
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });
        });

        describe('四位七段数码管：setSevenSegment(6，100)', function() {
            var targetCmd = dataman.auriga.write.sevenSegment[0];
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.setSevenSegment(6,100);
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });
        });


        describe('表情面板', function() {

            it("显示字符串： setLedMatrixChar(6, 0, 1, 'Hi')", function() {
                var targetCmd = dataman.auriga.write.ledMatrixChar[0];
                // console.log(targetCmd + ' should be sent');
                var charData = "Hi";
                var cmd = auriga.setLedMatrixChar(6, 0, 1, charData);
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });

            it("显示表情： setLedMatrixEmotion(6, 0, 0, [00 00 40 48 44 42 02 02 02 02 42 44 48 40 00 00])", function() {
                var targetCmd = dataman.auriga.write.ledMatrixEmotion[0];
                // console.log(targetCmd + ' should be sent');
                var emotionData = [00 ,00 ,0x40 ,0x48 ,0x44 ,0x42 ,0x02 ,0x02 ,0x02 ,0x02 ,0x42 ,0x44 ,0x48 ,0x40 ,0x00 ,0x00];
                var cmd = auriga.setLedMatrixEmotion(6, 0, 0, emotionData);
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });

            it("显示时间：setLedMatrixTime(6, 1, 10, 20) ", function() {
                var targetCmd = dataman.auriga.write.ledMatrixTime[0];
                // console.log(targetCmd + ' should be sent');
                var cmd = auriga.setLedMatrixTime(6, 1, 10, 20);
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });

            it("显示数字：setLedMatrixNumber(6, 0) ", function() {
                var targetCmd = dataman.auriga.write.ledMatrixNumber[0];
                // console.log(targetCmd + ' should be sent');
                var cmd = auriga.setLedMatrixNumber(6, 0);
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });

        });


        describe('快门线模块：setShutter(6, 2)', function() {
            var targetCmd =dataman.auriga.write.shutter[0] ;
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.setShutter(6, 2);
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });
        });


        describe('设置TONE输出：setTone("C2", 500)', function() {
            var targetCmd = dataman.auriga.write.tone[0];
            it(targetCmd + ' should be sent', function() {
                var toneData = "C2";
                var cmd = auriga.setTone(toneData, 500);
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });
        });

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
    describe('#它的重启命令',function(){
        describe('重启指令：reset()', function(){
            var targetCmd = dataman.auriga.write.reset[0];
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.reset();
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });
        });
    });


    //读指令:需要设备返回数据的指令
    describe('#它的读指令',function(){
        describe('读取版本号:readVersion(0)', function(){
            var targetCmd = dataman.auriga.read.version[0];
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.readVersion(0);
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });

            var targetCmd2 = dataman.auriga.read.version[1];
            // it(targetCmd2 + ' should be returned', function() {
            //     var cmd ;
            //     auriga.getSensorValue('version', function(val){
            //         console.log(val + ' has been returned');
            //         cmd = val;
            //     });
            //     assert.equal(targetCmd2, cmd);
            // });

        });


        describe('超声波传感器：readUltrasonic(0,10)',function(){
            var targetCmd = dataman.auriga.read.ultrasonic[0];
            it(targetCmd + ' should be sent', function() {
                var cmd = auriga.readUltrasonic(0,10);
                // console.log(cmd + ' has been received');
                assert.equal(targetCmd, cmd);
            });

            var targetType = dataman.auriga.read.ultrasonic[1];
            var targetCmd3 = dataman.auriga.read.ultrasonic[2];

            it('0-400 should be returned', function(done) {
                var resultType;
                auriga.getSensorValue('ultrasonic', {"port": 10}, function(val){
                    // console.log(val + ' has been returned');

                    var result = val;
                    resultType = typeof(result);
                    assert.equal(targetType, resultType);

                    var range = function(result){
                        if(result >= 0 && result <= 400) {
                            return 1;
                        }
                        else {
                            return 0;
                        }
                    };
                    assert.equal(targetCmd3, range(result));
                    done();
                });
            });
        });



    });
});