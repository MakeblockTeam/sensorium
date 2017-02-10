var assert = require('chai').assert;
var Board = require("../src/core/board");
var utils = require("../src/core/utils");
var dataman = require('./dataman');

var Auriga = require("../src/protocol/auriga");

Board.prototype.send = function(command) {
  return utils.intStrToHexStr(command);
};

var auriga = new Auriga({
  "driver": "serial"
});

//test original_auriga

//.......

//test latest_auriga：09.01.012
describe('【auriga_最新固件】', function() {
  it('serialport is ready', function(done) {
    setTimeout(function() {
      assert.equal(1, 1);
      doTest();
      done();
    }, 3000);
  });
});

function doTest() {
  //执行命令：无返回的数据
  describe('#它的执行命令', function() {
    describe('直流电机：setDcMotor(1／2/3/4,-255～255)', function() {
      it('设置直流电机端口1速度为255', function() {
        var targetCmd = dataman.auriga.write.dcMotor[0]; //"ff 55 06 00 02 0a 01 ff 00";
        var cmd = auriga.setDcMotor(1, 255);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口2速度为-255', function() {
        var targetCmd = dataman.auriga.write.dcMotor[1]; //"ff 55 06 00 02 0a 01 ff 00";
        var cmd = auriga.setDcMotor(2, -255);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口3速度为100', function() {
        var targetCmd = dataman.auriga.write.dcMotor[2]; //"ff 55 06 00 02 0a 01 ff 00";
        var cmd = auriga.setDcMotor(3, 100);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口4速度为256', function() {
        var targetCmd = dataman.auriga.write.dcMotor[3]; //"ff 55 06 00 02 0a 01 ff 00";
        var cmd = auriga.setDcMotor(4, 256);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口1速度为-256', function() {
        var targetCmd = dataman.auriga.write.dcMotor[4]; //"ff 55 06 00 02 0a 01 ff 00";
        var cmd = auriga.setDcMotor(1, -256);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

    });

    describe('板载编码电机：setEncoderMotorOnBoard(1/2,-255～255)', function() {
      
      it('板载编码电机slot口1速度100', function() {
        var targetCmd = dataman.auriga.write.encoderMotorBoard[0]; //"ff 55 07 00 02 3d 00 01 64 00";
        var cmd = auriga.setEncoderMotorOnBoard(1, 100);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('板载编码电机slot口2速度255', function() {
        var targetCmd = dataman.auriga.write.encoderMotorBoard[1]; //"ff 55 07 00 02 3d 00 01 64 00";
        var cmd = auriga.setEncoderMotorOnBoard(2, 255);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('板载编码电机slot口1速度-255', function() {
        var targetCmd = dataman.auriga.write.encoderMotorBoard[2]; //"ff 55 07 00 02 3d 00 01 64 00";
        var cmd = auriga.setEncoderMotorOnBoard(1, -255);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('板载编码电机slot口1速度256', function() {
        var targetCmd = dataman.auriga.write.encoderMotorBoard[3]; //"ff 55 07 00 02 3d 00 01 64 00";
        var cmd = auriga.setEncoderMotorOnBoard(1, 256);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('板载编码电机slot口1速度-256', function() {
        var targetCmd = dataman.auriga.write.encoderMotorBoard[4]; //"ff 55 07 00 02 3d 00 01 64 00";
        var cmd = auriga.setEncoderMotorOnBoard(1, -256);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

    });

    describe('外接编码电机：setEncoderMotor(8, 1, 150, 720)', function() {
     
      it('外接编码电机slot1', function() {
         var targetCmd = dataman.auriga.write.encoder[0];
        var cmd = auriga.setEncoderMotor(8, 1, 150, 720);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });
    });

    describe('摇杆1：setJoystick(100,100)', function() {
      it('app虚拟摇杆1左轮速度100右轮速度100', function() {
        var targetCmd = dataman.auriga.write.joystick[0] //"ff 55 07 00 02 05 64 00 64 00";
        var cmd = auriga.setJoystick(100, 100);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度255右轮速度255', function() {
        var targetCmd = dataman.auriga.write.joystick[1] //"ff 55 07 00 02 05 64 00 64 00";
        var cmd = auriga.setJoystick(255, 255);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度-255右轮速度-255', function() {
        var targetCmd = dataman.auriga.write.joystick[2] //"ff 55 07 00 02 05 64 00 64 00";
        var cmd = auriga.setJoystick(-255, -255);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度0右轮速度150', function() {
        var targetCmd = dataman.auriga.write.joystick[3] //"ff 55 07 00 02 05 64 00 64 00";
        var cmd = auriga.setJoystick(0, 150);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度-100右轮速度100', function() {
        var targetCmd = dataman.auriga.write.joystick[4] //"ff 55 07 00 02 05 64 00 64 00";
        var cmd = auriga.setJoystick(-100, 100);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度270右轮速度256', function() {
        var targetCmd = dataman.auriga.write.joystick[5] //"ff 55 07 00 02 05 64 00 64 00";
        var cmd = auriga.setJoystick(270, 256);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度-256右轮速度-267', function() {
        var targetCmd = dataman.auriga.write.joystick[6] //"ff 55 07 00 02 05 64 00 64 00";
        var cmd = auriga.setJoystick(-256, -267);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

    });

    describe('摇杆2：setVirtualJoystickForBalance(0,100,100)', function() {
      var targetCmd = dataman.auriga.write.virtualJoystickForBalance[0]; //"ff 55 08 00 02 34 00 64 00 64 00";
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.setVirtualJoystickForBalance(0, 100, 100);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });
    });

    describe('步进电机：setStepperMotor(1,3000,1000)', function() {
      var targetCmd = dataman.auriga.write.stepperMotor[0]; //"ff 55 0a 00 02 28 01 b8 0b e8 03 00 00";
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.setStepperMotor(1, 3000, 1000);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });
    });

    describe('RGB LED灯：setLed(6,2,0,255,0,0)', function() {
      var targetCmd = dataman.auriga.write.led[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.setLed(6, 2, 0, 255, 0, 0);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });
    });

    describe('主板通用命令：setFirmwareMode(0)', function() {

      it('主板通用命令-设置模式为蓝牙模式', function() {
        var targetCmd = dataman.auriga.write.firmwareModeBlueTooth[0];
        // console.log(targetCmd + ' should be sent');
        var cmd = auriga.setFirmwareMode(0);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it("主板通用命令-设置模式为自动避障", function() {
        var targetCmd = dataman.auriga.write.firmwareModeObstacle[0];
        // console.log(targetCmd + ' should be sent');
        var cmd = auriga.setFirmwareMode(1);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it("主板通用命令-设置模式为平衡车 ", function() {
        var targetCmd = dataman.auriga.write.firmwareModeBalance[0];
        // console.log(targetCmd + ' should be sent');
        var cmd = auriga.setFirmwareMode(2);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it("主板通用命令-设置模式为红外线 ", function() {
        var targetCmd = dataman.auriga.write.firmwareModeInfrared[0];
        // console.log(targetCmd + ' should be sent');
        var cmd = auriga.setFirmwareMode(3);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it("主板通用命令-设置模式为巡线 ", function() {
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
        var cmd = auriga.setServoMotor(6, 1, 90);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });
    });

    describe('四位七段数码管：setSevenSegment(6，100)', function() {
      var targetCmd = dataman.auriga.write.sevenSegment[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.setSevenSegment(6, 100);
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

      it("显示表情： setLedMatrixEmotion(6, 0, 0, [0 ,0 ,64 ,72 ,68 ,66 ,2 ,2 ,2 ,2 ,66 ,68 ,72 ,64 ,0 ,0])", function() { //[00 00 40 48 44 42 02 02 02 02 42 44 48 40 00 00]
        var targetCmd = dataman.auriga.write.ledMatrixEmotion[0];
        // console.log(targetCmd + ' should be sent');
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
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
      var targetCmd = dataman.auriga.write.shutter[0];
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
  describe('#它的重启命令', function() {
    describe('重启指令：reset()', function() {
      var targetCmd = dataman.auriga.write.reset[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.reset();
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });
    });
  });


  //读指令:需要设备返回数据的指令
  describe('#它的读指令', function() {
    describe('读取版本号:readVersion(0)', function() {
      var targetCmd = dataman.auriga.read.version[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readVersion(0);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      var targetVersion = dataman.auriga.read.version[1];
      it(targetVersion + ' should be returned', function(done) {
        var resultVersion;
        auriga.getSensorValue('version', function(result) {
          //console.log(result + ' has been returned');

          resultVersion = result;
          assert.equal(targetVersion, resultVersion);
          done();
        });
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

      it("显示表情： setLedMatrixEmotion(6, 0, 0, [00 ,00 ,0x40 ,0x48 ,0x44 ,0x42 ,0x02 ,0x02 ,0x02 ,0x02 ,0x42 ,0x44 ,0x48 ,0x40 ,0x00 ,0x00])", function() {
        var targetCmd = dataman.auriga.write.ledMatrixEmotion[0];
        // console.log(targetCmd + ' should be sent');
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
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
    })

    describe('超声波传感器：readUltrasonic(0,10)', function() {
      var targetCmd = dataman.auriga.read.ultrasonic[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readUltrasonic(0, 10);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.auriga.read.ultrasonic[1];

      it('it should be a number', function(done) {
        auriga.getSensorValue('ultrasonic', {
          "port": 10
        }, function(result) {
          // console.log(val + ' has been returned');
          var resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });


      var targetRange = dataman.auriga.read.ultrasonic[2];

      it('0-400 should be returned', function(done) {
        auriga.getSensorValue('ultrasonic', {
          "port": 10
        }, function(result) {
          // console.log(val + ' has been returned');
          resultRange = function(result) {
            if (result >= 0 && result <= 400) {
              return 1;
            } else {
              return 0;
            }
          };
          assert.equal(targetRange, resultRange(result));
          done();
        });
      });
    });


    describe('温度传感器：readTemperature(0,10,2)', function() {
      var targetCmd = dataman.auriga.read.temperature[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readTemperature(0, 10, 2);
        console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.auriga.read.temperature[1];
      it('it should be a number ', function(done) {
        var resultType;
        auriga.getSensorValue('temperature', {
          "port": 10,
          "slot": 2
        }, function(result) {
          console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.auriga.read.temperature[2];
      it('it should between -70~50', function(done) {
        var resultRange;
        auriga.getSensorValue('temperature', {
          "port": 10,
          "slot": 2
        }, function(result) {
          console.log(result + ' has been returned');

          resultRange = function(result) {
            if (result >= -70 && result <= 50) {
              return 1;
            } else {
              return 0;
            }
          };
          assert.equal(targetRange, resultRange(result));
          done();
        });
      });
    });

    describe('光线传感器：readLight(0,12)', function() {
      var targetCmd = dataman.auriga.read.light[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readLight(0, 12);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.auriga.read.light[1];
      it('it should be a number ', function(done) {
        var resultType;
        auriga.getSensorValue('light', {
          "port": 12
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.auriga.read.light[2];
      it('it should between 0~1000', function(done) {
        var resultRange;
        auriga.getSensorValue('temperature', {
          "port": 12
        }, function(result) {
          //console.log(result + ' has been returned');

          resultRange = function(result) {
            if (result >= 0 && result <= 1000) {
              return 1;
            } else {
              return 0;
            }
          };
          assert.equal(targetRange, resultRange(result));
          done();
        });
      });
    });

    describe('电位器传感器：readPotentionmeter(0,6)', function() {
      var targetCmd = dataman.auriga.read.potentionmeter[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readPotentionmeter(0, 6);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.auriga.read.potentionmeter[1];
      it('it should be a number ', function(done) {
        var resultType;
        auriga.getSensorValue('potentionmeter', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.auriga.read.potentionmeter[2];
      it('it should between 0~1000', function(done) {
        var resultRange;
        auriga.getSensorValue('potentionmeter', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultRange = function(result) {
            if (result >= 0 && result <= 1000) {
              return 1;
            } else {
              return 0;
            }
          };
          assert.equal(targetRange, resultRange(result));
          done();
        });
      });
    });


    describe('摇杆传感器：readJoystick(0,6,1)', function() {
      var targetCmd = dataman.auriga.read.joystick[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readJoystick(0, 6, 1);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.auriga.read.joystick[1];
      it('it should be a number ', function(done) {
        var resultType;
        auriga.getSensorValue('joystick', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.auriga.read.joystick[2];
      it('it should between -492~492', function(done) {
        var resultRange;
        auriga.getSensorValue('Joystick', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultRange = function(result) {
            if (result >= -492 && result <= 492) {
              return 1;
            } else {
              return 0;
            }
          };
          assert.equal(targetRange, resultRange(result));
          done();
        });
      });
    });


    describe('姿态传感器（陀螺仪）：readGyro(0,1,1)', function() {
      var targetCmdOnboard = dataman.auriga.read.gyro[0];
      it(targetCmdOnboard + ' should be sent（板载）', function() {
        var cmd = auriga.readGyro(0, 1, 1);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmdOnboard, cmd);
      });

      var targetCmdExternal = dataman.auriga.read.gyro[1];
      it(targetCmdExternal + ' should be sent（外接）', function() {
        var cmd = auriga.readGyro(0, 0, 1);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmdExternal, cmd);
      });

      var targetType = dataman.auriga.read.gyro[2];
      it('it should be a number ', function(done) {
        var resultType;
        auriga.getSensorValue('gyro', {
          "port": 1 //0表示外接；1表示板载
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.auriga.read.gyro[3];
      it('it should between -360~360', function(done) {
        var resultRange;
        auriga.getSensorValue('gyro', {
          "port": 1 //0表示外接；1表示板载
        }, function(result) {
          //console.log(result + ' has been returned');

          resultRange = function(result) {
            if (result >= -360 && result <= 360) {
              return 1;
            } else {
              return 0;
            }
          };
          assert.equal(targetRange, resultRange(result));
          done();
        });
      });
    });


    describe('音量传感器：readSound(0,14)', function() {
      var targetCmdOnboard = dataman.auriga.read.sound[0];
      it(targetCmdOnboard + ' should be sent（板载）', function() {
        var cmd = auriga.readSound(0, 14);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmdOnboard, cmd);
      });

      var targetCmdExternal = dataman.auriga.read.sound[1];
      it(targetCmdExternal + ' should be sent（外接）', function() {
        var cmd = auriga.readSound(0, 7);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmdExternal, cmd);
      });

      var targetType = dataman.auriga.read.sound[2];
      it('it should be a number ', function(done) {
        var resultType;
        auriga.getSensorValue('sound', {
          "port": 14
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.auriga.read.sound[3];
      it('it should between 0~500', function(done) {
        var resultRange;
        auriga.getSensorValue('sound', {
          "port": 14
        }, function(result) {
          //console.log(result + ' has been returned');

          resultRange = function(result) {
            if (result >= 0 && result <= 500) {
              return 1;
            } else {
              return 0;
            }
          };
          assert.equal(targetRange, resultRange(result));
          done();
        });
      });
    });


    describe('板载温度传感器：readTemperatureOnBoard(0)', function() {
      var targetCmdOnboard = dataman.auriga.read.temperatureOnBoard[0];
      it(targetCmdOnboard + ' should be sent（板载）', function() {
        var cmd = auriga.readTemperatureOnBoard(0);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmdOnboard, cmd);
      });

      var targetType = dataman.auriga.read.temperatureOnBoard[1];
      it('it should be a number ', function(done) {
        var resultType;
        auriga.getSensorValue('temperature', {
          "port": 13
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.auriga.read.temperatureOnBoard[2];
      it('it should between -70~50', function(done) {
        var resultRange;
        auriga.getSensorValue('temperature', {
          "port": 13
        }, function(result) {
          //console.log(result + ' has been returned');

          resultRange = function(result) {
            if (result >= -70 && result <= 50) {
              return 1;
            } else {
              return 0;
            }
          };
          assert.equal(targetRange, resultRange(result));
          done();
        });
      });
    });


    describe('被动式红外传感器：readPirmotion(0, 6)', function() {
      var targetCmd = dataman.auriga.read.pirmotion[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readPirmotion(0, 6);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.auriga.read.pirmotion[1];
      it('it should be a number ', function(done) {
        var resultType;
        auriga.getSensorValue('pirmotion', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.auriga.read.temperatureOnBoard[2];
      it('it should be 0 or 1 ', function(done) {
        var resultRange;
        auriga.getSensorValue('pirmotion', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultRange = function(result) {
            if (result == 0 || result == 1) {
              return 1;
            } else {
              return 0;
            }
          };
          assert.equal(targetRange, resultRange(result));
          done();
        });
      });
    });


    describe('巡线传感器：readLineFollower(0, 6)', function() {
      var targetCmd = dataman.auriga.read.lineFollower[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readLineFollower(0, 6);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.auriga.read.lineFollower[1];
      it('it should be a number ', function(done) {
        var resultType;
        auriga.getSensorValue('lineFollower', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.auriga.read.lineFollower[2];
      it('it should be 0 or 1 or 2 or 3', function(done) {
        var resultRange;
        auriga.getSensorValue('lineFollower', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultRange = function(result) {
            if (result == 0 || result == 1 || result == 2 || result == 3) {
              return 1;
            } else {
              return 0;
            }
          };
          assert.equal(targetRange, resultRange(result));
          done();
        });
      });
    });


    describe('限位传感器：readLimitSwitch(0, 6, 2)', function() {
      var targetCmd = dataman.auriga.read.limitSwitch[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readLimitSwitch(0, 6, 2);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.auriga.read.limitSwitch[1];
      it('it should be a number ', function(done) {
        var resultType;
        auriga.getSensorValue('limitSwitch', {
          "port": 6,
          "slot": 2
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.auriga.read.limitSwitch[2];
      it('it should be 0 or 1 or 2 or 3', function(done) {
        var resultRange;
        auriga.getSensorValue('limitSwitch', {
          "port": 6,
          "slot": 2
        }, function(result) {
          //console.log(result + ' has been returned');

          resultRange = function(result) {
            if (result == 0 || result == 1) {
              return 1;
            } else {
              return 0;
            }
          };
          assert.equal(targetRange, resultRange(result));
          done();
        });
      });
    });


    describe('电子罗盘传感器：readCompass(0, 6)', function() {
      var targetCmd = dataman.auriga.read.compass[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readCompass(0, 6);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.auriga.read.compass[1];
      it('it should be a number ', function(done) {
        var resultType;
        auriga.getSensorValue('compass', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.auriga.read.compass[2];
      it('it should between 0-500', function(done) {
        var resultRange;
        auriga.getSensorValue('compass', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultRange = function(result) {
            if (result >= 0 || result <= 500) {
              return 1;
            } else {
              return 0;
            }
          };
          assert.equal(targetRange, resultRange(result));
          done();
        });
      });
    });

    
    describe('温湿度传感器：readHumiture(0, 6, 1)', function() {
      var targetCmd = dataman.auriga.read.humiture[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readHumiture(0, 6, 1);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.auriga.read.humiture[1];
      it('it should be a number ', function(done) {
        var resultType;
        auriga.getSensorValue('humiture', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.auriga.read.humiture[2];
      it('it should between -70~50', function(done) {
        var resultRange;
        auriga.getSensorValue('humiture', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultRange = function(result) {
            if (result >= -70 || result <= 50) {
              return 1;
            } else {
              return 0;
            }
          };
          assert.equal(targetRange, resultRange(result));
          done();
        });
      });
    });


    describe('火焰传感器：readFlame(0, 6)', function() {
      var targetCmd = dataman.auriga.read.flame[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readFlame(0, 6);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.auriga.read.flame[1];
      it('it should be a number ', function(done) {
        var resultType;
        auriga.getSensorValue('flame', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.auriga.read.flame[2];
      it('it should between 0~2000', function(done) {
        var resultRange;
        auriga.getSensorValue('flame', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultRange = function(result) {
            if (result >= 0 || result <= 2000) {
              return 1;
            } else {
              return 0;
            }
          };
          assert.equal(targetRange, resultRange(result));
          done();
        });
      });
    });


    describe('气体传感器：readGas(0, 6)', function() {
      var targetCmd = dataman.auriga.read.gas[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readGas(0, 6);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.auriga.read.gas[1];
      it('it should be a number ', function(done) {
        var resultType;
        auriga.getSensorValue('gas', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.auriga.read.gas[2];
      it('it should between 0~200', function(done) {
        var resultRange;
        auriga.getSensorValue('gas', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultRange = function(result) {
            if (result >= 0 || result <= 200) {
              return 1;
            } else {
              return 0;
            }
          };
          assert.equal(targetRange, resultRange(result));
          done();
        });
      });
    });


    describe('触摸传感器：readTouch(0, 6)', function() {
      var targetCmd = dataman.auriga.read.touch[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readTouch(0, 6);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.auriga.read.touch[1];
      it('it should be a number ', function(done) {
        var resultType;
        auriga.getSensorValue('touch', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.auriga.read.touch[2];
      it('it should between 0~200', function(done) {
        var resultRange;
        auriga.getSensorValue('touch', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultRange = function(result) {
            if (result == 0 || result == 1) {
              return 1;
            } else {
              return 0;
            }
          };
          assert.equal(targetRange, resultRange(result));
          done();
        });
      });
    });


    describe('按键传感器：readFourKeys(0, 6, 1)', function() {
      var targetCmd = dataman.auriga.read.fourKeys[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readFourKeys(0, 6, 1);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.auriga.read.fourKeys[1];
      it('it should be a number ', function(done) {
        var resultType;
        auriga.getSensorValue('fourKeys', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.auriga.read.fourKeys[2];
      it('it should between 0~200', function(done) {
        var resultRange;
        auriga.getSensorValue('fourKeys', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultRange = function(result) {
            if (result == 0 || result == 1) {
              return 1;
            } else {
              return 0;
            }
          };
          assert.equal(targetRange, resultRange(result));
          done();
        });
      });
    });


    describe('板载编码电机：readEncoderMotorOnBoard(0, 0, 1, 2)', function() {
      var targetCmd = dataman.auriga.read.encoderMotorOnBoard[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readEncoderMotorOnBoard(0, 0, 1, 2);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.auriga.read.encoderMotorOnBoard[1];
      it('it should be a number ', function(done) {
        var resultType;
        auriga.getSensorValue('encoderMotorOnBoard', {
          "port": 0,
          "slot": 1
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.auriga.read.encoderMotorOnBoard[2];
      it('it should between 0~200', function(done) {
        var resultRange;
        auriga.getSensorValue('encoderMotorOnBoard', {
          "port": 0,
          "slot": 1
        }, function(result) {
          //console.log(result + ' has been returned');

          resultRange = function(result) {
            if (result >= 0 && result <= 255) {
              return 1;
            } else {
              return 0;
            }
          };
          assert.equal(targetRange, resultRange(result));
          done();
        });
      });
    });


    describe('主板通用命令-读取电压／模式：readFirmwareMode(0, 112)', function() {
      var targetVoltage = dataman.auriga.read.voltage[0];
      it(targetVoltage + ' should be sent（读取电压）', function() {
        var cmd = auriga.readFirmwareMode(0, 112);
        //console.log(cmd + ' has been sent');
        assert.equal(targetVoltage, cmd);
      });

      // var targetMode = dataman.auriga.read.mode[0];
      // it(targetMode + ' should be sent（读取模式）', function() {
      //   var cmd = auriga.readFirmwareMode(0, 113);
      //   //console.log(cmd + ' has been sent');
      //   assert.equal(targetMode, cmd);
      // });

      var targetType = dataman.auriga.read.voltage[1];
      it('it should be a number ', function(done) {
        var resultType;
        auriga.getSensorValue('firmwareMode', {
          "type": 112
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.auriga.read.voltage[2];
      it('it should between 0~200', function(done) {
        var resultRange;
        auriga.getSensorValue('firmwareMode', {
          "type": 112
        }, function(result) {
          //console.log(result + ' has been returned');

          resultRange = function(result) {
            if (result >= 0 && result <= 255) {
              return 1;
            } else {
              return 0;
            }
          };
          assert.equal(targetRange, resultRange(result));
          done();
        });
      });
    });
    
    //智能舵机
  });
}
