//test latest_auriga：09.01.012

var assert = require('chai').assert;
var utils = require("../src/core/utils");
var dataman = require('./dataman');

var Auriga = require("../src/protocol/auriga");
var auriga = new Auriga({
  "driver": "serial"
});

describe('【auriga_最新固件】', function() {
  before(function(done) {
    setTimeout(function() {
      done()
    }, 1000);
  });

  //执行命令：无返回的数据
  describe('#它的执行命令', function() {
    describe('直流电机：setDcMotor(1／2/3/4,-255～255)', function() {
      it('设置直流电机端口1速度为255', function() {
        var targetCmd = dataman.auriga.write.dcMotor[0];
        var cmd = auriga.setDcMotor(1, 255);
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口2速度为-255', function() {
        var targetCmd = dataman.auriga.write.dcMotor[1];
        var cmd = auriga.setDcMotor(2, -255);
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口3速度为100', function() {
        var targetCmd = dataman.auriga.write.dcMotor[2];
        var cmd = auriga.setDcMotor(3, 100);
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口4速度为256', function() {
        var targetCmd = dataman.auriga.write.dcMotor[3];
        var cmd = auriga.setDcMotor(4, 256);
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口1速度为-256', function() {
        var targetCmd = dataman.auriga.write.dcMotor[4];
        var cmd = auriga.setDcMotor(1, -256);
        assert.equal(targetCmd, cmd);
      });

    });

    describe('板载编码电机：setEncoderMotorOnBoard(1/2,-255～255)', function() {

      it('板载编码电机slot口1速度100', function() {
        var targetCmd = dataman.auriga.write.encoderMotorBoard[0];
        var cmd = auriga.setEncoderMotorOnBoard(1, 100);
        assert.equal(targetCmd, cmd);
      });

      it('板载编码电机slot口2速度255', function() {
        var targetCmd = dataman.auriga.write.encoderMotorBoard[1];
        var cmd = auriga.setEncoderMotorOnBoard(2, 255);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('板载编码电机slot口1速度-255', function() {
        var targetCmd = dataman.auriga.write.encoderMotorBoard[2];
        var cmd = auriga.setEncoderMotorOnBoard(1, -255);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('板载编码电机slot口1速度256', function() {
        var targetCmd = dataman.auriga.write.encoderMotorBoard[3];
        var cmd = auriga.setEncoderMotorOnBoard(1, 256);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('板载编码电机slot口1速度-256', function() {
        var targetCmd = dataman.auriga.write.encoderMotorBoard[4];
        var cmd = auriga.setEncoderMotorOnBoard(1, -256);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

    });

    describe('外接编码电机：setEncoderMotor(8, 1, 150, 720)', function() {

      it('外接编码电机slot1', function() {
         var targetCmd = dataman.auriga.write.encoder[0];
        var cmd = auriga.setEncoderMotor(8, 1, 150, 720);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('摇杆1：setJoystick(100,100)', function() {
      it('app虚拟摇杆1左轮速度100右轮速度100', function() {
        var targetCmd = dataman.auriga.write.joystick[0];
        var cmd = auriga.setJoystick(100, 100);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度255右轮速度255', function() {
        var targetCmd = dataman.auriga.write.joystick[1];
        var cmd = auriga.setJoystick(255, 255);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度-255右轮速度-255', function() {
        var targetCmd = dataman.auriga.write.joystick[2];
        var cmd = auriga.setJoystick(-255, -255);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度0右轮速度150', function() {
        var targetCmd = dataman.auriga.write.joystick[3];
        var cmd = auriga.setJoystick(0, 150);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度-100右轮速度100', function() {
        var targetCmd = dataman.auriga.write.joystick[4];
        var cmd = auriga.setJoystick(-100, 100);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度270右轮速度256', function() {
        var targetCmd = dataman.auriga.write.joystick[5];
        var cmd = auriga.setJoystick(270, 256);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度-256右轮速度-267', function() {
        var targetCmd = dataman.auriga.write.joystick[6] ;
        var cmd = auriga.setJoystick(-256, -267);
        // console.log(cmd + ' has been received');
        assert.equal(targetCmd, cmd);
      });

    });

    describe('摇杆2：setVirtualJoystickForBalance(0,-255~255,-255~255)', function() {
      it('app虚拟摇杆2左轮速度100右轮速度100', function() {
        var targetCmd = dataman.auriga.write.virtualJoystickForBalance[0];
        var cmd = auriga.setVirtualJoystickForBalance(0, 100, 100);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆2左轮速度255右轮速度255', function() {
        var targetCmd = dataman.auriga.write.virtualJoystickForBalance[1];
        var cmd = auriga.setVirtualJoystickForBalance(0, 255, 255);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆2左轮速度-255右轮速度-255', function() {
        var targetCmd = dataman.auriga.write.virtualJoystickForBalance[2];
        var cmd = auriga.setVirtualJoystickForBalance(0, -255, -255);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆2左轮速度0右轮速度150', function() {
        var targetCmd = dataman.auriga.write.virtualJoystickForBalance[3];
        var cmd = auriga.setVirtualJoystickForBalance(0, 0, 150);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆2左轮速度-100右轮速度100', function() {
        var targetCmd = dataman.auriga.write.virtualJoystickForBalance[4];
        var cmd = auriga.setVirtualJoystickForBalance(0, -100, 100);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆2左轮速度270右轮速度256', function() {
        var targetCmd = dataman.auriga.write.virtualJoystickForBalance[5];
        var cmd = auriga.setVirtualJoystickForBalance(0, 270, 256);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆2左轮速度-256右轮速度-267', function() {
        var targetCmd = dataman.auriga.write.virtualJoystickForBalance[6];
        var cmd = auriga.setVirtualJoystickForBalance(0, -256, -267);
        assert.equal(targetCmd, cmd);
      });

    });

    describe('步进电机：setStepperMotor(1~4,0~3000,-2147483648~2147483647)', function() {
      it('步进电机在端口1速度为3000位移为1000', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[0];
        var cmd = auriga.setStepperMotor(1, 3000, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口2速度为3001位移为1000', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[1];
        var cmd = auriga.setStepperMotor(2, 3001, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口3速度为0位移为1000', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[2];
        var cmd = auriga.setStepperMotor(3, 0, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口4速度为-1位移为1000', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[3];
        var cmd = auriga.setStepperMotor(4, -1, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口4速度为2000位移为1000', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[4];
        var cmd = auriga.setStepperMotor(4, 2000, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口3速度为3000位移为2147483647', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[5];
        var cmd = auriga.setStepperMotor(3, 3000, 2147483647);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口2速度为3000位移为-2147483648', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[6];
        var cmd = auriga.setStepperMotor(2, 3000, -2147483648);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口1速度为3000位移为0', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[7];
        var cmd = auriga.setStepperMotor(1, 3000, 0);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口3速度为3000位移为2147483648', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[8];
        var cmd = auriga.setStepperMotor(3, 3000, 2147483648);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口3速度为3000位移为-2147483649', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[9];
        var cmd = auriga.setStepperMotor(3, 3000, -2147483649);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('RGB LED灯：setLed(6~10/0,1/2,0~12,0~255,0~255,0~255)', function() {

      it('将端口号6 slot2的灯条／led的全部位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.led[0];
        var cmd = auriga.setLed(6, 2, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条／led的02位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.led[1];
        var cmd = auriga.setLed(6, 2, 2, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条／led的5位置上（led只有4个）亮起红色', function() {
        var targetCmd = dataman.auriga.write.led[2];
        var cmd = auriga.setLed(6, 2, 5, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条／led的全部位置上亮起混合色', function() {
        var targetCmd = dataman.auriga.write.led[3];
        var cmd = auriga.setLed(6, 2, 0, 125, 100, 55);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条／led的全部位置上熄灭（不亮）', function() {
        var targetCmd = dataman.auriga.write.led[4];
        var cmd = auriga.setLed(6, 2, 0, 0, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条／led的全部位置上亮起红色（超出界限0～255）', function() {
        var targetCmd = dataman.auriga.write.led[5];
        var cmd = auriga.setLed(6, 2, 0, 256, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条／led的全部位置上不亮（熄灭）（超出界限0～255）', function() {
        var targetCmd = dataman.auriga.write.led[6];
        var cmd = auriga.setLed(6, 2, 0, 0, -1, 0);
        assert.equal(targetCmd, cmd);
      });


      it('将端口号0 slot2的灯盘上的全部位置上亮起蓝色', function() {
        var targetCmd = dataman.auriga.write.led[7];
        var cmd = auriga.setLed(0, 2, 0, 0, 0, 255);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号7 slot1的灯条／led的全部位置上亮起绿色', function() {
        var targetCmd = dataman.auriga.write.led[8];
        var cmd = auriga.setLed(7, 1, 0, 0, 255, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号8 slot2的灯条／led的全部位置上亮起白色', function() {
        var targetCmd = dataman.auriga.write.led[9];
        var cmd = auriga.setLed(8, 2, 0, 255, 255, 255);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号9 slot1的灯条／led的全部位置上亮起混合色', function() {
        var targetCmd = dataman.auriga.write.led[10];
        var cmd = auriga.setLed(9, 1, 0, 100, 100, 155);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号10 slot2的灯条／led的全部位置上熄灭（不亮）', function() {
        var targetCmd = dataman.auriga.write.led[11];
        var cmd = auriga.setLed(10, 2, 0, 0, 0, 0);
        assert.equal(targetCmd, cmd);
      });

    });

    describe('主板通用命令：setFirmwareMode(0)', function() {

      it('主板通用命令-设置模式为蓝牙模式', function() {
        var targetCmd = dataman.auriga.write.firmwareModeBlueTooth[0];
        // console.log(targetCmd + ' should be sent');
        var cmd = auriga.setFirmwareMode(0);
        assert.equal(targetCmd, cmd);
      });

      it("主板通用命令-设置模式为自动避障", function() {
        var targetCmd = dataman.auriga.write.firmwareModeObstacle[0];
        // console.log(targetCmd + ' should be sent');
        var cmd = auriga.setFirmwareMode(1);
        assert.equal(targetCmd, cmd);
      });

      it("主板通用命令-设置模式为平衡车 ", function() {
        var targetCmd = dataman.auriga.write.firmwareModeBalance[0];
        // console.log(targetCmd + ' should be sent');
        var cmd = auriga.setFirmwareMode(2);
        assert.equal(targetCmd, cmd);
      });

      it("主板通用命令-设置模式为红外线 ", function() {
        var targetCmd = dataman.auriga.write.firmwareModeInfrared[0];
        // console.log(targetCmd + ' should be sent');
        var cmd = auriga.setFirmwareMode(3);
        assert.equal(targetCmd, cmd);
      });

      it("主板通用命令-设置模式为巡线 ", function() {
        var targetCmd = dataman.auriga.write.firmwareModeLineFollow[0];
        // console.log(targetCmd + ' should be sent');
        var cmd = auriga.setFirmwareMode(4);
        assert.equal(targetCmd, cmd);
      });

    });

    describe('数字舵机：setServoMotor(6,1,90)', function() {
      var targetCmd = dataman.auriga.write.servo[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.setServoMotor(6, 1, 90);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('四位七段数码管：setSevenSegment(6，100)', function() {
      var targetCmd = dataman.auriga.write.sevenSegment[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.setSevenSegment(6, 100);
        assert.equal(targetCmd, cmd);
      });
    });


    describe('表情面板', function() {
      it("显示字符串： setLedMatrixChar(6, 0, 1, 'Hi')", function() {
        var targetCmd = dataman.auriga.write.ledMatrixChar[0];
        // console.log(targetCmd + ' should be sent');
        var charData = "Hi";
        var cmd = auriga.setLedMatrixChar(6, 0, 1, charData);
        assert.equal(targetCmd, cmd);
      });

      it("显示表情： setLedMatrixEmotion(6, 0, 0, [0 ,0 ,64 ,72 ,68 ,66 ,2 ,2 ,2 ,2 ,66 ,68 ,72 ,64 ,0 ,0])", function() { //[00 00 40 48 44 42 02 02 02 02 42 44 48 40 00 00]
        var targetCmd = dataman.auriga.write.ledMatrixEmotion[0];
        // console.log(targetCmd + ' should be sent');
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = auriga.setLedMatrixEmotion(6, 0, 0, emotionData);
        assert.equal(targetCmd, cmd);
      });

      it("显示时间：setLedMatrixTime(6, 1, 10, 20) ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixTime[0];
        // console.log(targetCmd + ' should be sent');
        var cmd = auriga.setLedMatrixTime(6, 1, 10, 20);
        assert.equal(targetCmd, cmd);
      });

      it("显示数字：setLedMatrixNumber(6, 0) ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixNumber[0];
        // console.log(targetCmd + ' should be sent');
        var cmd = auriga.setLedMatrixNumber(6, 0);
        assert.equal(targetCmd, cmd);
      });

    });

    describe('快门线模块：setShutter(6, 2)', function() {
      var targetCmd = dataman.auriga.write.shutter[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.setShutter(6, 2);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('设置TONE输出：setTone("C2", 500)', function() {
      var targetCmd = dataman.auriga.write.tone[0];
      it(targetCmd + ' should be sent', function() {
        var toneData = "C2";
        var cmd = auriga.setTone(toneData, 500);
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
        assert.equal(targetCmd, cmd);
      });

      var targetVersion = dataman.auriga.read.version[1];
      it(targetVersion + ' should be returned', function(done) {
        var resultVersion;
        auriga.getSensorValue('version', function(result) {
          resultVersion = result;
          console.log(resultVersion);
          assert.equal(targetVersion, resultVersion);
          done();
        });
      });
    });

    describe('超声波传感器：readUltrasonic(0,10)', function() {
      var targetCmd = dataman.auriga.read.ultrasonic[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readUltrasonic(0, 10);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between 0~400', function(done) {
        // this.retries(3);
        auriga.getSensorValue('ultrasonic', {
          "port": 10
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, 0);  //result >= 0
          assert.isAtMost(result, 400);  //result <= 400
          done();//setTimeout(done, 3000);
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

      it('it should be a number between -70~50 ', function(done) {
        var resultType;
        auriga.getSensorValue('temperature', {
          "port": 10,
          "slot": 2
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, -75);  //result >= -75
          assert.isAtMost(result, 50);  //result <= 50
          done();
        });
      });
    });

    describe('光线传感器：readLight(0,12)', function() {
      var targetCmd = dataman.auriga.read.light[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readLight(0, 12);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between 0~1024', function(done) {
        var resultType;
        auriga.getSensorValue('light', {
          "port": 12
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, 0);  //result >= 0
          assert.isAtMost(result, 1024);  //result <= 1024
          done();
        });
      });
    });

    describe('电位器传感器：readPotentionmeter(0,6)', function() {
      var targetCmd = dataman.auriga.read.potentionmeter[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readPotentionmeter(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between 0~1000', function(done) {
        var resultType;
        auriga.getSensorValue('potentionmeter', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, 0);  //result >= 0
          assert.isAtMost(result, 1000);  //result <= 1000
          done();
        });
      });
    });

    describe('摇杆传感器：readJoystick(0,6,1)', function() {
      var targetCmd = dataman.auriga.read.joystick[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readJoystick(0, 6, 1);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between -492~492', function(done) {
        var resultType;
        auriga.getSensorValue('joystick', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, -492);  //result >= -492
          assert.isAtMost(result, 492);  //result <= 492
          done();
        });
      });
    });

    describe('姿态传感器（陀螺仪）：readGyro(0,1,1)', function() {
      var targetCmdOnboard = dataman.auriga.read.gyro[0];
      it(targetCmdOnboard + ' should be sent（板载）', function() {
        var cmd = auriga.readGyro(0, 1, 1);
        assert.equal(targetCmdOnboard, cmd);
      });

      var targetCmdExternal = dataman.auriga.read.gyro[1];
      it(targetCmdExternal + ' should be sent（外接）', function() {
        var cmd = auriga.readGyro(0, 0, 1);
        assert.equal(targetCmdExternal, cmd);
      });

      it('it should be a number between -180~180', function(done) {
        var resultType;
        auriga.getSensorValue('gyro', {
          "port": 1 //0表示外接；1表示板载
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, -180);  //result >= -180
          assert.isAtMost(result, 180);  //result <= 180
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

      it('it should be a number between 0~1024', function(done) {
        var resultType;
        auriga.getSensorValue('sound', {
          "port": 14
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, 0);  //result >= 0
          assert.isAtMost(result, 1024);  //result <= 1024
          done();
        });
      });
    });

    describe('板载温度传感器：readTemperatureOnBoard(0)', function() {
      var targetCmdOnboard = dataman.auriga.read.temperatureOnBoard[0];
      it(targetCmdOnboard + ' should be sent（板载）', function() {
        var cmd = auriga.readTemperatureOnBoard(0);
        assert.equal(targetCmdOnboard, cmd);
      });

      it('it should be a number between -70~50', function(done) {
        var resultType;
        auriga.getSensorValue('temperatureOnBoard', function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, -70);  //result >= -70
          assert.isAtMost(result, 50);  //result <= 50
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

      it('it should be 0 or 1 ', function(done) {
        var resultType;
        auriga.getSensorValue('pirmotion', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.oneOf(result,[0,1])    //result is 0 or 1
          done();
        });
      });
    });


    describe('巡线传感器：readLineFollower(0, 6)', function() {
      var targetCmd = dataman.auriga.read.lineFollower[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readLineFollower(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('it should be 0 or 1 or 2 or 3', function(done) {
        var resultType;
        auriga.getSensorValue('lineFollower', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.oneOf(result,[0,1,2,3])    //result is 0 or 1 or 2 or 3
          done();
        });
      });
    });


    describe('限位传感器：readLimitSwitch(0, 6, 2)', function() {
      var targetCmd = dataman.auriga.read.limitSwitch[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readLimitSwitch(0, 6, 2);
        assert.equal(targetCmd, cmd);
      });

      it('it should be  0 or 1', function(done) {
        var resultType;
        auriga.getSensorValue('limitSwitch', {
          "port": 6,
          "slot": 2
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.oneOf(result,[0,1])    //result is 0 or 1
          done();
        });
      });
    });

    describe('电子罗盘传感器：readCompass(0, 6)', function() {
      var targetCmd = dataman.auriga.read.compass[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readCompass(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between 0-1024', function(done) {
        var resultType;
        auriga.getSensorValue('compass', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, 0);  //result >= 0
          assert.isAtMost(result, 1024);  //result <= 1024
          done();
        });
      });
    });


    describe('温湿度传感器：readHumiture(0, 6, 1)', function() {
      var targetCmd = dataman.auriga.read.humiture[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readHumiture(0, 6, 1);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between -70~50', function(done) {
        var resultType;
        auriga.getSensorValue('humiture', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, -70);  //result >= -70
          assert.isAtMost(result, 50);  //result <= 50
          done();
        });
      });
    });


    describe('火焰传感器：readFlame(0, 6)', function() {
      var targetCmd = dataman.auriga.read.flame[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readFlame(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between 0~1024', function(done) {
        var resultType;
        auriga.getSensorValue('flame', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, 0);  //result >= 0
          assert.isAtMost(result, 1024);  //result <= 1024
          done();
        });
      });
    });


    describe('气体传感器：readGas(0, 6)', function() {
      var targetCmd = dataman.auriga.read.gas[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readGas(0, 6);
        assert.equal(targetCmd, cmd);
      });

      var targetType = dataman.auriga.read.gas[1];
      it('it should be a number between 0~1024', function(done) {
        var resultType;
        auriga.getSensorValue('gas', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, 0);  //result >= 0
          assert.isAtMost(result, 1024);  //result <= 1024
          done();
        });
      });
    });


    describe('触摸传感器：readTouch(0, 6)', function() {
      var targetCmd = dataman.auriga.read.touch[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readTouch(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number 0 or 1', function(done) {
        var resultType;
        auriga.getSensorValue('touch', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.oneOf(result,[0,1])    //result is 0 or 1
          done();
        });
      });
    });


    describe('按键传感器：readFourKeys(0, 6, 1)', function() {
      var targetCmd = dataman.auriga.read.fourKeys[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readFourKeys(0, 6, 1);
        assert.equal(targetCmd, cmd);
      });

      it('it should be 0 or 1 ', function(done) {
        var resultType;
        auriga.getSensorValue('fourKeys', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.oneOf(result,[0,1])    //result is 0 or 1
          done();
        });
      });
    });


    describe('读取板载编码电机的速度：readEncoderMotorOnBoard(0, 0, 1, 2)', function() {
      var targetCmd = dataman.auriga.read.encoderMotorOnBoard[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readEncoderMotorOnBoard(0, 0, 1, 2);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between 0~1024', function(done) {
        var resultType;
        auriga.getSensorValue('encoderMotorOnBoard', {
          "port": 0,
          "slot": 1
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, 0);  //result >= 0
          assert.isAtMost(result, 1024);  //result <= 1024
          done();
        });
      });
    });


    describe('读取板载编码电机的位置：readEncoderMotorOnBoard(0, 0, 1, 1)', function() {
      var targetCmd = dataman.auriga.read.encoderMotorOnBoard[1];
      it(targetCmd + ' should be sent', function() {
        var cmd = auriga.readEncoderMotorOnBoard(0, 0, 1, 1);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between -2147483648~2147483647', function(done) {
        var resultType;
        auriga.getSensorValue('encoderMotorOnBoard', {
          "port": 0,
          "slot": 1
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, -2147483648);  //result >= -2147483648
          assert.isAtMost(result, 2147483647);  //result <= 2147483647
          done();
        });
      });
    });


    describe('主板通用命令-读取电压／模式：readFirmwareMode(0, 112)', function() {
      var targetVoltage = dataman.auriga.read.voltage[0];
      it(targetVoltage + ' should be sent（读取电压）', function() {
        var cmd = auriga.readFirmwareMode(0, 112);
        assert.equal(targetVoltage, cmd);
      });

      var targetMode = dataman.auriga.read.mode[0];
      it(targetMode + ' should be sent（读取模式）', function() {
        var cmd = auriga.readFirmwareMode(0, 113);
        assert.equal(targetMode, cmd);
      });

      it('it should be a number between 0~255', function(done) {
        var resultType;
        auriga.getSensorValue('firmwareMode', {
          "type": 112
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, 0);  //result >= 0
          assert.isAtMost(result, 255);  //result <= 255
          done();
        });
      });
    });

    //智能舵机
  });
});