//test original_orion
var assert = require('chai').assert;
var utils = require("../src/core/utils");
var dataman = require('./dataman');

var Orion = require("../src/protocol/orion");

var orion = new Orion({
  "driver": "serial"
});

//test latest_orion：0a.01.105
describe('【orion_最新固件】', function() {
  before(function(done) {
    setTimeout(function() {
      done()
    }, 1900); // 等待主板启动的时间
  });

  //执行命令：无返回的数据
  describe('#它的执行命令', function() {
    describe('直流电机：setDcMotor(1,255)', function() {
      var targetCmd = dataman.orion.write.dcMotor[0]; //"ff 55 06 00 02 0a 01 ff 00"
      it(targetCmd + ' should be sent', function() {
        var cmd = orion.setDcMotor(1, 255); // (port, speed)
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });
    });

    // orion 暂不支持
    // describe('编码电机-板载：setEncoderMotorOnBoard(1,100)', function() {
    //     var targetCmd = dataman.orion.write.encoderMotorBoard[0];   //"ff 55 07 00 02 3d 00 01 64 00";
    //     it(targetCmd + ' should be sent', function() {
    //         var cmd = orion.setEncoderMotorOnBoard(1,100);
    //         // console.log(cmd + ' has been received');
    //         assert.equal(targetCmd, cmd);
    //     });
    // });

    // orion 暂不支持
    // describe('编码电机-外接：setEncoderMotor(8, 1, 150, 720)', function() {
    //     var targetCmd = dataman.orion.write.encoder[0]; // "ff 55 09 00 02 0c 08 01 96 00 34 44"
    //     it(targetCmd + ' should be sent', function() {
    //         var cmd = orion.setEncoderMotor(8, 1, 150, 720);
    //         // console.log(cmd + ' has been received');
    //         assert.equal(targetCmd, cmd);
    //     });
    // });

    //TODO: 缺文档
    describe('摇杆1：setJoystick(leftSpeed, rightSpeed)', function() {
      it('app虚拟摇杆1左轮速度100右轮速度100', function() {
        var targetCmd = dataman.orion.write.joystick[0] //"ff 55 07 00 02 05 64 00 64 00";
        var cmd = orion.setJoystick(100, 100);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度255右轮速度255', function() {
        var targetCmd = dataman.orion.write.joystick[1] //"ff 55 07 00 02 05 64 00 64 00";
        var cmd = orion.setJoystick(255, 255);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度-255右轮速度-255', function() {
        var targetCmd = dataman.orion.write.joystick[2] //"ff 55 07 00 02 05 64 00 64 00";
        var cmd = orion.setJoystick(-255, -255);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度0右轮速度150', function() {
        var targetCmd = dataman.orion.write.joystick[3] //"ff 55 07 00 02 05 64 00 64 00";
        var cmd = orion.setJoystick(0, 150);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度-100右轮速度100', function() {
        var targetCmd = dataman.orion.write.joystick[4] //"ff 55 07 00 02 05 64 01 64 00";
        var cmd = orion.setJoystick(-100, 100);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度270右轮速度256', function() {
        var targetCmd = dataman.orion.write.joystick[5] //"ff 55 07 00 02 05 ff 00 ff 00";
        var cmd = orion.setJoystick(270, 256);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度-256右轮速度-267', function() {
        var targetCmd = dataman.orion.write.joystick[6] //"ff 55 07 00 02 05 ff 01 ff 01";
        var cmd = orion.setJoystick(-256, -267);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

    });

    // describe('摇杆2：setVirtualJoystickForBalance(0,100,100)', function() {
    //     var targetCmd = dataman.orion.write.virtualJoystickForBalance[0];        //"ff 55 08 00 02 34 00 64 00 64 00";
    //     it(targetCmd + ' should be sent', function() {
    //         var cmd = orion.setVirtualJoystickForBalance(0,100,100);
    //         // console.log(cmd + ' has been received');
    //         assert.equal(targetCmd, cmd);
    //     });
    // });

    describe('步进电机：setStepperMotor(1,3000,1000)', function() {
      var targetCmd = dataman.orion.write.stepperMotor[0]; // "ff 55 08 00 02 28 01 b8 0b e8 03";
      it(targetCmd + ' should be sent', function() {
        var cmd = orion.setStepperMotor(1, 3000, 1000);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });
    });

    describe('RGB LED灯：setLed(6,2,0,255,0,0)', function() {
      var targetCmd = dataman.orion.write.led[0]; // "ff 55 09 00 02 08 06 02 00 ff 00 00"
      it(targetCmd + ' should be sent', function() {
        var cmd = orion.setLed(6, 2, 0, 255, 0, 0);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });
    });

    describe('主板通用命令：setFirmwareMode(0)', function() {

      it('蓝牙模式下的主板通用命令', function() {
        var targetCmd = dataman.orion.write.firmwareModeBlueTooth[0];
        // console.log(targetCmd + ' should be sent');
        var cmd = orion.setFirmwareMode(0);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it("自动避障模式下的主板通用命令", function() {
        var targetCmd = dataman.orion.write.firmwareModeObstacle[0];
        // console.log(targetCmd + ' should be sent');
        var cmd = orion.setFirmwareMode(1);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it("平衡车模式下的主板通用命令 ", function() {
        var targetCmd = dataman.orion.write.firmwareModeBalance[0];
        // console.log(targetCmd + ' should be sent');
        var cmd = orion.setFirmwareMode(2);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it("红外线模式下的主板通用命令 ", function() {
        var targetCmd = dataman.orion.write.firmwareModeInfrared[0];
        // console.log(targetCmd + ' should be sent');
        var cmd = orion.setFirmwareMode(3);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it("巡线模式下的主板通用命令 ", function() {
        var targetCmd = dataman.orion.write.firmwareModeLineFollow[0];
        // console.log(targetCmd + ' should be sent');
        var cmd = orion.setFirmwareMode(4);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

    });

    describe('数字舵机：setServoMotor(6,1,90)', function() {
      var targetCmd = dataman.orion.write.servo[0]; // "ff 55 06 00 02 0b 06 01 5a"
      it(targetCmd + ' should be sent', function() {
        var cmd = orion.setServoMotor(6, 1, 90);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });
    });

    describe('四位七段数码管：setSevenSegment(6，100)', function() {
      var targetCmd = dataman.orion.write.sevenSegment[0]; // "ff 55 08 00 02 09 06 00 00 c8 42"
      it(targetCmd + ' should be sent', function() {
        var cmd = orion.setSevenSegment(6, 100);
        console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });
    });

    // orion 暂不支持
    // describe('表情面板', function() {

    //     it("显示字符串： setLedMatrixChar(6, 0, 1, 'Hi')", function() {
    //         var targetCmd = dataman.orion.write.ledMatrixChar[0];
    //         // console.log(targetCmd + ' should be sent');
    //         var charData = "Hi";
    //         var cmd = orion.setLedMatrixChar(6, 0, 1, charData);
    //         // console.log(cmd + ' has been received');
    //         assert.equal(targetCmd, cmd);
    //     });

    //     it("显示表情： setLedMatrixEmotion(6, 0, 0, [00 00 40 48 44 42 02 02 02 02 42 44 48 40 00 00])", function() {
    //         var targetCmd = dataman.orion.write.ledMatrixEmotion[0];
    //         // console.log(targetCmd + ' should be sent');
    //         var emotionData = [00 ,00 ,0x40 ,0x48 ,0x44 ,0x42 ,0x02 ,0x02 ,0x02 ,0x02 ,0x42 ,0x44 ,0x48 ,0x40 ,0x00 ,0x00];
    //         var cmd = orion.setLedMatrixEmotion(6, 0, 0, emotionData);
    //         // console.log(cmd + ' has been received');
    //         assert.equal(targetCmd, cmd);
    //     });

    //     it("显示时间：setLedMatrixTime(6, 1, 10, 20) ", function() {
    //         var targetCmd = dataman.orion.write.ledMatrixTime[0];
    //         // console.log(targetCmd + ' should be sent');
    //         var cmd = orion.setLedMatrixTime(6, 1, 10, 20);
    //         // console.log(cmd + ' has been received');
    //         assert.equal(targetCmd, cmd);
    //     });

    //     it("显示数字：setLedMatrixNumber(6, 0) ", function() {
    //         var targetCmd = dataman.orion.write.ledMatrixNumber[0];
    //         // console.log(targetCmd + ' should be sent');
    //         var cmd = orion.setLedMatrixNumber(6, 0);
    //         // console.log(cmd + ' has been received');
    //         assert.equal(targetCmd, cmd);
    //     });

    // });

    describe('快门线模块：setShutter(6, 2)', function() { // 开始对焦(02) 
      var targetCmd = dataman.orion.write.shutter[0]; // "ff 55 05 00 02 14 06 02"
      it(targetCmd + ' should be sent', function() {
        var cmd = orion.setShutter(6, 2);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });
    });


    // orion 暂不支持
    // describe('设置TONE输出：setTone("C2", 500)', function() {
    //     var targetCmd = dataman.orion.write.tone[0];    // "ff 55 08 00 02 22 09 41 00 f4 01"
    //     it(targetCmd + ' should be sent', function() {
    //         var toneData = "C2";
    //         var cmd = orion.setTone(toneData, 500);
    //         // console.log(cmd + ' has been received');
    //         assert.equal(targetCmd, cmd);
    //     });
    // });

    // orion 暂不支持
    // describe('数字舵机2：xxxxxxx', function() {
    //     targetCmd = "xxxxxxxx";
    //     it(targetCmd + ' should be sent', function() {
    //         var cmd = orion.setEncodeMotorxxxxx(1,100);
    //         console.log("the data from bluetooth: "+ cmd);
    //         assert.equal(targetCmd, cmd);
    //     });
    // });

    // orion 暂不支持
    // describe('智能舵机：xxxxxxx', function() {
    //     targetCmd = "xxxxxxxx";
    //     it(targetCmd + ' should be sent', function() {
    //         var cmd = orion.setEncodeMotorxxxxx(1,100);
    //         console.log("the data from bluetooth: "+ cmd);
    //         assert.equal(targetCmd, cmd);
    //     });
    // });
  });

  //重启命令
  describe('#它的重启命令', function() {
    describe('重启指令：reset()', function() {
      var targetCmd = dataman.orion.write.reset[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = orion.reset();
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });
    });
  });


  //读指令:需要设备返回数据的指令
  describe('#它的读指令', function() {
    describe('读取版本号:readVersion(0)', function() {
      var targetCmd = dataman.orion.read.version[0]; // ff 55 03 00 01 00
      it(targetCmd + ' should be sent', function() {
        var cmd = orion.readVersion(0);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      var targetCmd2 = dataman.orion.read.version[1]; // ff 55 00 04 09 30 61 2e 30 31 2e 31 30 33 0d 0a
      it(targetCmd2 + ' should be returned', function() {
        orion.getSensorValue('version', function(val) {
          console.log(val + ' has been returned');
          var cmd = val;
          assert.equal(targetCmd2, cmd);
        });
      });

    });


    describe('超声波传感器：readUltrasonic(0,3)', function() {
      var targetCmd = dataman.orion.read.ultrasonic[0]; // ff 55 04 00 01 01 03 
      it(targetCmd + ' should be sent', function() {
        var cmd = orion.readUltrasonic(0, 3);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.orion.read.ultrasonic[1];
      var targetCmd3 = dataman.orion.read.ultrasonic[2];

      it('0-400 should be returned', function(done) {
        var resultType;
        orion.getSensorValue('ultrasonic', {
          "port": 3
        }, function(val) {
          // console.log(val + ' has been returned');
          // val 是对 ff 55 00 02 e6 9e 16 41 0d 0a 解析后的值
          var result = val;
          resultType = typeof(result);
          //类型测试
          assert.equal(targetType, resultType);

          var range = function(result) {
            if (result >= 0 && result <= 400) {
              return 1;
            } else {
              return 0;
            }
          };
          //返回值检测
          assert.equal(targetCmd3, range(result));
          done();
        });
      });
    });

    describe('温度传感器：readTemperature(0,3,1)', function() {
      var targetCmd = dataman.orion.read.temperature[0]; // ff 55 05 00 01 02 03 01
      it(targetCmd + ' should be sent', function() {
        var cmd = orion.readTemperature(0, 3, 1);
        console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.orion.read.temperature[1];
      it('it should be a number ', function(done) {
        var resultType;
        orion.getSensorValue('temperature', {
          "port": 3,
          "slot": 1
        }, function(result) {
          console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.orion.read.temperature[2];
      it('it should between -70~50', function(done) {
        var resultRange;
        orion.getSensorValue('temperature', {
          "port": 3,
          "slot": 1
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

    describe('光线传感器：readLight(0,6)', function() {
      var targetCmd = dataman.orion.read.light[0]; // ff 55 04 00 01 03 06
      it(targetCmd + ' should be sent', function() {
        var cmd = orion.readLight(0, 6);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetRange = dataman.orion.read.light[2];
      it('it should between 0~1000', function(done) {
        var resultRange;
        orion.getSensorValue('light', {
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

      it('it should be a number ', function(done) {
        orion.getSensorValue('light', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);
          done();
        });
      });
    });

    describe('电位器传感器：readPotentionmeter(0,6)', function() {
      var targetCmd = dataman.orion.read.potentionmeter[0]; // ff 55 04 00 01 04 06
      it(targetCmd + ' should be sent', function() {
        var cmd = orion.readPotentionmeter(0, 6);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.orion.read.potentionmeter[1];
      it('it should be a number ', function(done) {
        var resultType;
        orion.getSensorValue('potentionmeter', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.orion.read.potentionmeter[2];
      it('it should between 0~1000', function(done) {
        var resultRange;
        orion.getSensorValue('potentionmeter', {
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
      var targetCmd = dataman.orion.read.joystick[0]; // ff 55 05 00 01 05 06 01
      it(targetCmd + ' should be sent', function() {
        var cmd = orion.readJoystick(0, 6, 1);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.orion.read.joystick[1];
      it('it should be a number ', function(done) {
        var resultType;
        orion.getSensorValue('joystick', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.orion.read.joystick[2];
      it('it should between -492~492', function(done) {
        var resultRange;
        orion.getSensorValue('Joystick', {
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

    describe('音量传感器：readSound(0,6)', function() {
      var targetCmdOnboard = dataman.orion.read.sound[0];
      it(targetCmdOnboard + ' should be sent', function() {
        var cmd = orion.readSound(0, 6);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmdOnboard, cmd);
      });

      var targetType = dataman.orion.read.sound[1];
      it('it should be a number ', function(done) {
        var resultType;
        orion.getSensorValue('sound', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.orion.read.sound[2];
      it('it should between 0~500', function(done) {
        var resultRange;
        orion.getSensorValue('sound', {
          "port": 6
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

    //接口文档缺失
    describe('被动式红外传感器：readPirmotion(0, 6)', function() {
      var targetCmd = dataman.orion.read.pirmotion[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = orion.readPirmotion(0, 6);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.orion.read.pirmotion[1];
      it('it should be a number ', function(done) {
        var resultType;
        orion.getSensorValue('pirmotion', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.orion.read.pirmotion[2];
      it('it should be 0 or 1 ', function(done) {
        var resultRange;
        orion.getSensorValue('pirmotion', {
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
      var targetCmd = dataman.orion.read.lineFollower[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = orion.readLineFollower(0, 6);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.orion.read.lineFollower[1];
      it('it should be a number ', function(done) {
        var resultType;
        orion.getSensorValue('lineFollower', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.orion.read.lineFollower[2];
      it('it should be 0 or 1 or 2 or 3', function(done) {
        var resultRange;
        orion.getSensorValue('lineFollower', {
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
      var targetCmd = dataman.orion.read.limitSwitch[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = orion.readLimitSwitch(0, 6, 2);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.orion.read.limitSwitch[1];
      it('it should be a number ', function(done) {
        var resultType;
        orion.getSensorValue('limitSwitch', {
          "port": 6,
          "slot": 2
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.orion.read.limitSwitch[2];
      it('it should be 0 or 1 or 2 or 3', function(done) {
        var resultRange;
        orion.getSensorValue('limitSwitch', {
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

    describe('温湿度传感器：readHumiture(0, 6, 1)', function() {
      var targetCmd = dataman.orion.read.humiture[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = orion.readHumiture(0, 6, 1);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.orion.read.humiture[1];
      it('it should be a number ', function(done) {
        var resultType;
        orion.getSensorValue('humiture', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.orion.read.humiture[2];
      it('it should between -70~50', function(done) {
        var resultRange;
        orion.getSensorValue('humiture', {
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
      var targetCmd = dataman.orion.read.flame[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = orion.readFlame(0, 6);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.orion.read.flame[1];
      it('it should be a number ', function(done) {
        var resultType;
        orion.getSensorValue('flame', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.orion.read.flame[2];
      it('it should between 0~2000', function(done) {
        var resultRange;
        orion.getSensorValue('flame', {
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
      var targetCmd = dataman.orion.read.gas[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = orion.readGas(0, 6);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.orion.read.gas[1];
      it('it should be a number ', function(done) {
        var resultType;
        orion.getSensorValue('gas', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.orion.read.gas[2];
      it('it should between 0~200', function(done) {
        var resultRange;
        orion.getSensorValue('gas', {
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
      var targetCmd = dataman.orion.read.touch[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = orion.readTouch(0, 6);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.orion.read.touch[1];
      it('it should be a number ', function(done) {
        var resultType;
        orion.getSensorValue('touch', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.orion.read.touch[2];
      it('it should between 0~200', function(done) {
        var resultRange;
        orion.getSensorValue('touch', {
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


    describe('按键传感器：readFourKeys(0, 6, 1)', function() { //测试的按键号是 1
      var targetCmd = dataman.orion.read.fourKeys[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = orion.readFourKeys(0, 6, 1);
        //console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.orion.read.fourKeys[1];
      it('it should be a number ', function(done) {
        var resultType;
        orion.getSensorValue('fourKeys', {
          "port": 6
        }, function(result) {
          //console.log(result + ' has been returned');

          resultType = typeof(result);
          assert.equal(targetType, resultType);
          done();
        });
      });

      var targetRange = dataman.orion.read.fourKeys[2];
      it('it should between 0~200', function(done) {
        var resultRange;
        orion.getSensorValue('fourKeys', {
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
  });
});