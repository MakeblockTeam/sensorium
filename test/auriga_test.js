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

      it('设置直流电机端口2速度为255', function() {
        var targetCmd = dataman.auriga.write.dcMotor[1];
        var cmd = auriga.setDcMotor(2, 255);
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口3速度为255', function() {
        var targetCmd = dataman.auriga.write.dcMotor[2];
        var cmd = auriga.setDcMotor(3, 255);
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口4速度为255', function() {
        var targetCmd = dataman.auriga.write.dcMotor[3];
        var cmd = auriga.setDcMotor(4, 255);
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口5速度为255', function() {
        var targetCmd = dataman.auriga.write.dcMotor[4];
        var cmd = auriga.setDcMotor(5, 255);
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口1速度为-255', function() {
        var targetCmd = dataman.auriga.write.dcMotor[5];
        var cmd = auriga.setDcMotor(1, -255);
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口1速度为100', function() {
        var targetCmd = dataman.auriga.write.dcMotor[6];
        var cmd = auriga.setDcMotor(1, 100);
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口1速度为256', function() {
        var targetCmd = dataman.auriga.write.dcMotor[7];
        var cmd = auriga.setDcMotor(1, 256);
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口1速度为-256', function() {
        var targetCmd = dataman.auriga.write.dcMotor[8];
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

      it('板载编码电机slot口2速度100', function() {
        var targetCmd = dataman.auriga.write.encoderMotorBoard[1];
        var cmd = auriga.setEncoderMotorOnBoard(2, 100);
        assert.equal(targetCmd, cmd);
      });

      it('板载编码电机slot口1速度255', function() {
        var targetCmd = dataman.auriga.write.encoderMotorBoard[2];
        var cmd = auriga.setEncoderMotorOnBoard(1, 255);
        assert.equal(targetCmd, cmd);
      });

      it('板载编码电机slot口1速度-255', function() {
        var targetCmd = dataman.auriga.write.encoderMotorBoard[3];
        var cmd = auriga.setEncoderMotorOnBoard(1, -255);
        assert.equal(targetCmd, cmd);
      });

      it('板载编码电机slot口1速度0', function() {
        var targetCmd = dataman.auriga.write.encoderMotorBoard[4];
        var cmd = auriga.setEncoderMotorOnBoard(1, 0);
        assert.equal(targetCmd, cmd);
      });

      it('板载编码电机slot口1速度256', function() {
        var targetCmd = dataman.auriga.write.encoderMotorBoard[5];
        var cmd = auriga.setEncoderMotorOnBoard(1, 256);
        assert.equal(targetCmd, cmd);
      });

      it('板载编码电机slot口1速度-256', function() {
        var targetCmd = dataman.auriga.write.encoderMotorBoard[6];
        var cmd = auriga.setEncoderMotorOnBoard(1, -256);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('外接编码电机：setEncoderMotor(1～4, 1/2, 0～300, 720)', function() { 
      it('外接编码电机port1 slot1 速度为150角度为720', function() {
        var targetCmd = dataman.auriga.write.encoder[0];
        var cmd = auriga.setEncoderMotor(1, 1, 150, 720);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port2 slot1 速度为150角度为720', function() {
        var targetCmd = dataman.auriga.write.encoder[1];
        var cmd = auriga.setEncoderMotor(2, 1, 150, 720);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port3 slot1 速度为150角度为720', function() {
        var targetCmd = dataman.auriga.write.encoder[2];
        var cmd = auriga.setEncoderMotor(3, 1, 150, 720);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port4 slot1 速度为150角度为720', function() {
        var targetCmd = dataman.auriga.write.encoder[3];
        var cmd = auriga.setEncoderMotor(4, 1, 150, 720);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port1 slot2 速度为150角度为720', function() {
        var targetCmd = dataman.auriga.write.encoder[4];
        var cmd = auriga.setEncoderMotor(1, 2, 150, 720);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port1 slot1 速度为0角度为720', function() {
        var targetCmd = dataman.auriga.write.encoder[5];
        var cmd = auriga.setEncoderMotor(1, 1, 0, 720);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port1 slot1 速度为300角度为720', function() {
        var targetCmd = dataman.auriga.write.encoder[6];
        var cmd = auriga.setEncoderMotor(1, 1, 300, 720);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port1 slot1 速度为301角度为720', function() {
        var targetCmd = dataman.auriga.write.encoder[7];
        var cmd = auriga.setEncoderMotor(1, 1, 301, 720);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port1 slot1 速度为-1角度为720', function() {
        var targetCmd = dataman.auriga.write.encoder[8];
        var cmd = auriga.setEncoderMotor(1, 1, -1, 720);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port1 slot1 速度为150角度为0', function() {
        var targetCmd = dataman.auriga.write.encoder[9];
        var cmd = auriga.setEncoderMotor(1, 1, 150, 0);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port1 slot1 速度为150角度为2147483647', function() {
        var targetCmd = dataman.auriga.write.encoder[10];
        var cmd = auriga.setEncoderMotor(1, 1, 150, 2147483647);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port1 slot1 速度为150角度为-2147483648', function() {
        var targetCmd = dataman.auriga.write.encoder[11];
        var cmd = auriga.setEncoderMotor(1, 1, 150, -2147483648);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port1 slot1 速度为150角度为2147483648', function() {
        var targetCmd = dataman.auriga.write.encoder[12];
        var cmd = auriga.setEncoderMotor(1, 1, 150, 2147483648);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port1 slot1 速度为150角度为-2147483649', function() {
        var targetCmd = dataman.auriga.write.encoder[13];
        var cmd = auriga.setEncoderMotor(1, 1, 150, -2147483649);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('摇杆1：setJoystick(-255～255,-255～255)', function() {
      it('app虚拟摇杆1左轮速度100右轮速度100', function() {
        var targetCmd = dataman.auriga.write.joystick[0];
        var cmd = auriga.setJoystick(100, 100);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度255右轮速度255', function() {
        var targetCmd = dataman.auriga.write.joystick[1];
        var cmd = auriga.setJoystick(255, 255);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度-255右轮速度-255', function() {
        var targetCmd = dataman.auriga.write.joystick[2];
        var cmd = auriga.setJoystick(-255, -255);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度0右轮速度150', function() {
        var targetCmd = dataman.auriga.write.joystick[3];
        var cmd = auriga.setJoystick(0, 150);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度-100右轮速度100', function() {
        var targetCmd = dataman.auriga.write.joystick[4];
        var cmd = auriga.setJoystick(-100, 100);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度150右轮速度0', function() {
        var targetCmd = dataman.auriga.write.joystick[5];
        var cmd = auriga.setJoystick(150, 0);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度100右轮速度-100', function() {
        var targetCmd = dataman.auriga.write.joystick[6];
        var cmd = auriga.setJoystick(100, -100);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度256右轮速度256', function() {
        var targetCmd = dataman.auriga.write.joystick[7];
        var cmd = auriga.setJoystick(256, 256);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度-256右轮速度-256', function() {
        var targetCmd = dataman.auriga.write.joystick[8] ;
        var cmd = auriga.setJoystick(-256, -256);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('摇杆2：setVirtualJoystickForBalance(-255~255,-255~255)', function() {
      it('app虚拟摇杆2拐弯100速度100', function() {
        var targetCmd = dataman.auriga.write.virtualJoystickForBalance[0];
        var cmd = auriga.setVirtualJoystickForBalance(100, 100);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆2拐弯255速度255', function() {
        var targetCmd = dataman.auriga.write.virtualJoystickForBalance[1];
        var cmd = auriga.setVirtualJoystickForBalance(255, 255);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆2拐弯-255速度-255', function() {
        var targetCmd = dataman.auriga.write.virtualJoystickForBalance[2];
        var cmd = auriga.setVirtualJoystickForBalance(-255, -255);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆2拐弯0速度150', function() {
        var targetCmd = dataman.auriga.write.virtualJoystickForBalance[3];
        var cmd = auriga.setVirtualJoystickForBalance(0, 150);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆2拐弯-100速度100', function() {
        var targetCmd = dataman.auriga.write.virtualJoystickForBalance[4];
        var cmd = auriga.setVirtualJoystickForBalance(-100, 100);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆2拐弯150速度0', function() {
        var targetCmd = dataman.auriga.write.virtualJoystickForBalance[5];
        var cmd = auriga.setVirtualJoystickForBalance(150, 0);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆2拐弯100速度-100', function() {
        var targetCmd = dataman.auriga.write.virtualJoystickForBalance[6];
        var cmd = auriga.setVirtualJoystickForBalance(100, -100);
        assert.equal(targetCmd, cmd);
      });


      it('app虚拟摇杆2拐弯256速度256', function() {
        var targetCmd = dataman.auriga.write.virtualJoystickForBalance[7];
        var cmd = auriga.setVirtualJoystickForBalance(256, 256);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆2拐弯-256速度-256', function() {
        var targetCmd = dataman.auriga.write.virtualJoystickForBalance[8];
        var cmd = auriga.setVirtualJoystickForBalance(-256, -256);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('步进电机：setStepperMotor(1~4,0~3000,-2147483648~2147483647)', function() {
      it('步进电机在端口1速度为3000位移为1000', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[0];
        var cmd = auriga.setStepperMotor(1, 3000, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口2速度为3000位移为1000', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[1];
        var cmd = auriga.setStepperMotor(2, 3000, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口3速度为3000位移为1000', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[2];
        var cmd = auriga.setStepperMotor(3, 3000, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口4速度为3000位移为1000', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[3];
        var cmd = auriga.setStepperMotor(4, 3000, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口1速度为0位移为1000', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[4];
        var cmd = auriga.setStepperMotor(1, 0, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口1速度为1500位移为1000', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[5];
        var cmd = auriga.setStepperMotor(1, 1500, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口1速度为-1位移为1000', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[6];
        var cmd = auriga.setStepperMotor(1, -1, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口1速度为3001位移为1000', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[7];
        var cmd = auriga.setStepperMotor(1, 3001, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口1速度为3000位移为2147483647', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[8];
        var cmd = auriga.setStepperMotor(1, 3000, 2147483647);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口1速度为3000位移为-2147483648', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[9];
        var cmd = auriga.setStepperMotor(1, 3000, -2147483648);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口1速度为3000位移为0', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[10];
        var cmd = auriga.setStepperMotor(1, 3000, 0);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口1速度为3000位移为2147483648', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[11];
        var cmd = auriga.setStepperMotor(1, 3000, 2147483648);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口1速度为3000位移为-2147483649', function() {
        var targetCmd = dataman.auriga.write.stepperMotor[12];
        var cmd = auriga.setStepperMotor(1, 3000, -2147483649);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('RGB LED灯：setLed(6~10/0,1/2,0~12,0~255,0~255,0~255)', function() {      
      it('将端口号6 slot1的灯条的全部位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.led[0];
        var cmd = auriga.setLed(6, 1, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号7 slot1的led的全部位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.led[1];
        var cmd = auriga.setLed(7, 1, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号8 slot1的灯条的全部位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.led[2];
        var cmd = auriga.setLed(8, 1, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号9 slot1的灯条的全部位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.led[3];
        var cmd = auriga.setLed(9, 1, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号10 slot1的灯条的全部位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.led[4];
        var cmd = auriga.setLed(10, 1, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条的全部位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.led[5];
        var cmd = auriga.setLed(6, 2, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条的02位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.led[6];
        var cmd = auriga.setLed(6, 2, 2, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条的13位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.led[7];
        var cmd = auriga.setLed(6, 2, 13, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条的-1位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.led[8];
        var cmd = auriga.setLed(6, 2, -1, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条的全部位置上亮起混合色', function() {
        var targetCmd = dataman.auriga.write.led[9];
        var cmd = auriga.setLed(6, 2, 0, 125, 100, 55);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条的全部位置上亮起蓝色', function() {
        var targetCmd = dataman.auriga.write.led[10];
        var cmd = auriga.setLed(6, 2, 0, 0, 0, 255);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条的全部位置上亮起绿色', function() {
        var targetCmd = dataman.auriga.write.led[11];
        var cmd = auriga.setLed(6, 2, 0, 0, 255, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条的全部位置上亮起白色', function() {
        var targetCmd = dataman.auriga.write.led[12];
        var cmd = auriga.setLed(6, 2, 0, 255, 255, 255);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条的全部位置上熄灭（不亮）', function() {
        var targetCmd = dataman.auriga.write.led[13];
        var cmd = auriga.setLed(6, 2, 0, 0, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条的全部位置上亮起红色（超出界限0～255）', function() {
        var targetCmd = dataman.auriga.write.led[14];
        var cmd = auriga.setLed(6, 2, 0, 256, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条的全部位置上不亮（熄灭）（超出界限0～255）', function() {
        var targetCmd = dataman.auriga.write.led[15];
        var cmd = auriga.setLed(6, 2, 0, 0, -1, 0);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('板载灯盘：setLedPanelOnBoard(0~12,0~255,0~255,0~255)', function() {      
      it('将板载灯盘的全部位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.ledPanelOnBoard[0];
        var cmd = auriga.setLedPanelOnBoard(0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将板载灯盘的02位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.ledPanelOnBoard[1];
        var cmd = auriga.setLedPanelOnBoard(2, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将板载灯盘的13位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.ledPanelOnBoard[2];
        var cmd = auriga.setLedPanelOnBoard(13, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将板载灯盘的-1位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.ledPanelOnBoard[3];
        var cmd = auriga.setLedPanelOnBoard(-1, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将板载灯盘的全部位置上亮起混合色（125，100，55）', function() {
        var targetCmd = dataman.auriga.write.ledPanelOnBoard[4];
        var cmd = auriga.setLedPanelOnBoard(0, 125, 100, 55);
        assert.equal(targetCmd, cmd);
      });

      it('将板载灯盘的全部位置上亮起蓝色', function() {
        var targetCmd = dataman.auriga.write.ledPanelOnBoard[5];
        var cmd = auriga.setLedPanelOnBoard(0, 0, 0, 255);
        assert.equal(targetCmd, cmd);
      });

      it('将板载灯盘的全部位置上亮起绿色', function() {
        var targetCmd = dataman.auriga.write.ledPanelOnBoard[6];
        var cmd = auriga.setLedPanelOnBoard(0, 0, 255, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将板载灯盘的全部位置上亮起白色', function() {
        var targetCmd = dataman.auriga.write.ledPanelOnBoard[7];
        var cmd = auriga.setLedPanelOnBoard(0, 255, 255, 255);
        assert.equal(targetCmd, cmd);
      });

      it('将板载灯盘的全部位置上亮起红色（超出界限0～255）', function() {
        var targetCmd = dataman.auriga.write.ledPanelOnBoard[8];
        var cmd = auriga.setLedPanelOnBoard(0, 256, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将板载灯盘的全部位置上不亮（熄灭）（超出界限0～255）', function() {
        var targetCmd = dataman.auriga.write.ledPanelOnBoard[9];
        var cmd = auriga.setLedPanelOnBoard(0, 0, -1, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将板载灯盘的全部位置上熄灭（不亮）', function() {
        var targetCmd = dataman.auriga.write.ledPanelOnBoard[10];
        var cmd = auriga.turnOffLedPanelOnBoard(0);
        assert.equal(targetCmd, cmd);
      });

      it('将板载灯盘的05位置上熄灭（不亮）', function() {
        var targetCmd = dataman.auriga.write.ledPanelOnBoard[11];
        var cmd = auriga.turnOffLedPanelOnBoard(5);
        assert.equal(targetCmd, cmd);
      });

      it('将板载灯盘的13位置上熄灭（不亮）', function() {
        var targetCmd = dataman.auriga.write.ledPanelOnBoard[12];
        var cmd = auriga.turnOffLedPanelOnBoard(13);
        assert.equal(targetCmd, cmd);
      });

       it('将板载灯盘的-1位置上熄灭（不亮）', function() {
        var targetCmd = dataman.auriga.write.ledPanelOnBoard[13];
        var cmd = auriga.turnOffLedPanelOnBoard(-1);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('四键led灯：setFourLeds(6～10，0~12,0~255,0~255,0~255)', function() {      
      it('将端口6上的四键led灯的全部位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.fourLeds[0];
        var cmd = auriga.setFourLeds(6, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口7上的四键led灯的全部位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.fourLeds[1];
        var cmd = auriga.setFourLeds(7, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口8上的四键led灯的全部位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.fourLeds[2];
        var cmd = auriga.setFourLeds(8, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口9上的四键led灯的全部位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.fourLeds[3];
        var cmd = auriga.setFourLeds(9, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口10上的四键led灯的全部位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.fourLeds[4];
        var cmd = auriga.setFourLeds(10, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的02位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.fourLeds[5];
        var cmd = auriga.setFourLeds(6, 2, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的5位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.fourLeds[6];
        var cmd = auriga.setFourLeds(6, 5, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的-1位置上亮起红色', function() {
        var targetCmd = dataman.auriga.write.fourLeds[7];
        var cmd = auriga.setFourLeds(6, -1, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的全部位置上亮起混合色（125，100，55）', function() {
        var targetCmd = dataman.auriga.write.fourLeds[8];
        var cmd = auriga.setFourLeds(6, 0, 125, 100, 55);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的全部位置上亮起蓝色', function() {
        var targetCmd = dataman.auriga.write.fourLeds[9];
        var cmd = auriga.setFourLeds(6, 0, 0, 0, 255);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的全部位置上亮起绿色', function() {
        var targetCmd = dataman.auriga.write.fourLeds[10];
        var cmd = auriga.setFourLeds(6, 0, 0, 255, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的全部位置上亮起白色', function() {
        var targetCmd = dataman.auriga.write.fourLeds[11];
        var cmd = auriga.setFourLeds(6, 0, 255, 255, 255);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的全部位置上亮起红色（超出界限0～255）', function() {
        var targetCmd = dataman.auriga.write.fourLeds[12];
        var cmd = auriga.setFourLeds(6, 0, 256, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的全部位置上不亮（熄灭）（超出界限0～255）', function() {
        var targetCmd = dataman.auriga.write.fourLeds[13];
        var cmd = auriga.setFourLeds(6, 0, 0, -1, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的全部位置上熄灭（不亮）', function() {
        var targetCmd = dataman.auriga.write.fourLeds[14];
        var cmd = auriga.turnOffFourLeds(6, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的03位置上熄灭（不亮）', function() {
        var targetCmd = dataman.auriga.write.fourLeds[15];
        var cmd = auriga.turnOffFourLeds(6, 3);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的5位置上熄灭（不亮）', function() {
        var targetCmd = dataman.auriga.write.fourLeds[16];
        var cmd = auriga.turnOffFourLeds(6, 5);
        assert.equal(targetCmd, cmd);
      });

       it('将端口6上的四键led灯的-1位置上熄灭（不亮）', function() {
        var targetCmd = dataman.auriga.write.fourLeds[17];
        var cmd = auriga.setFourLeds(6, -1);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('主板通用命令：setFirmwareMode(0～4)', function() {
      it('主板通用命令-设置模式为蓝牙模式', function() {
        var targetCmd = dataman.auriga.write.firmwareModeBlueTooth[0];
        var cmd = auriga.setFirmwareMode(0);
        assert.equal(targetCmd, cmd);
      });

      it("主板通用命令-设置模式为自动避障", function() {
        var targetCmd = dataman.auriga.write.firmwareModeObstacle[0];
        var cmd = auriga.setFirmwareMode(1);
        assert.equal(targetCmd, cmd);
      });

      it("主板通用命令-设置模式为平衡车 ", function() {
        var targetCmd = dataman.auriga.write.firmwareModeBalance[0];
        var cmd = auriga.setFirmwareMode(2);
        assert.equal(targetCmd, cmd);
      });

      it("主板通用命令-设置模式为红外线 ", function() {
        var targetCmd = dataman.auriga.write.firmwareModeInfrared[0];
        var cmd = auriga.setFirmwareMode(3);
        assert.equal(targetCmd, cmd);
      });

      it("主板通用命令-设置模式为巡线 ", function() {
        var targetCmd = dataman.auriga.write.firmwareModeLineFollow[0];
        var cmd = auriga.setFirmwareMode(4);
        assert.equal(targetCmd, cmd);
      });

      it("主板通用命令-设置模式为5（错误模式参数） ", function() {
        var targetCmd = dataman.auriga.write.firmwareModeWrong[0];
        var cmd = auriga.setFirmwareMode(5);
        assert.equal(targetCmd, cmd);
      });

      it("主板通用命令-设置模式为-1（错误模式参数） ", function() {
        var targetCmd = dataman.auriga.write.firmwareModeWrong[1];
        var cmd = auriga.setFirmwareMode(-1);
        assert.equal(targetCmd, cmd);
      });

      it("主板通用命令-设置模式为3.5（错误模式参数） ", function() {
        var targetCmd = dataman.auriga.write.firmwareModeWrong[2];
        var cmd = auriga.setFirmwareMode(3.5);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('数字舵机：setServoMotor(6~10,1/2,0~180)', function() {
      it('数字舵机在端口6 slot1 旋转角度90', function() {
        var targetCmd = dataman.auriga.write.servo[0];
        var cmd = auriga.setServoMotor(6, 1, 90);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口7 slot1 旋转角度90', function() {
        var targetCmd = dataman.auriga.write.servo[0];
        var cmd = auriga.setServoMotor(7, 1, 90);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口8 slot1 旋转角度90', function() {
        var targetCmd = dataman.auriga.write.servo[0];
        var cmd = auriga.setServoMotor(8, 1, 90);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口9 slot1 旋转角度90', function() {
        var targetCmd = dataman.auriga.write.servo[0];
        var cmd = auriga.setServoMotor(9, 1, 90);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口10 slot1 旋转角度90', function() {
        var targetCmd = dataman.auriga.write.servo[0];
        var cmd = auriga.setServoMotor(10, 1, 90);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口6 slot2 旋转角度90', function() {
        var targetCmd = dataman.auriga.write.servo[1];
        var cmd = auriga.setServoMotor(6, 2, 90);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口6 slot1 旋转角度0', function() {
        var targetCmd = dataman.auriga.write.servo[6];
        var cmd = auriga.setServoMotor(6, 1, 0);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口6 slot1 旋转角度180', function() {
        var targetCmd = dataman.auriga.write.servo[7];
        var cmd = auriga.setServoMotor(6, 1, 180);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口6 slot1 旋转角度181', function() {
        var targetCmd = dataman.auriga.write.servo[8];
        var cmd = auriga.setServoMotor(6, 1, 181);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口6 slot1 旋转角度-1', function() {
        var targetCmd = dataman.auriga.write.servo[9];
        var cmd = auriga.setServoMotor(6, 1, -1);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('四位七段数码管：setSevenSegment(6～10，-2147483648～2147483647)', function() {
      it('四位七段数码管在端口6 显示数值100', function() {
        var targetCmd = dataman.auriga.write.sevenSegment[0];
        var cmd = auriga.setSevenSegment(6, 100);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口7 显示数值100', function() {
        var targetCmd = dataman.auriga.write.sevenSegment[1];
        var cmd = auriga.setSevenSegment(7, 100);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口8 显示数值200', function() {
        var targetCmd = dataman.auriga.write.sevenSegment[2];
        var cmd = auriga.setSevenSegment(8, 100);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口9 显示数值300', function() {
        var targetCmd = dataman.auriga.write.sevenSegment[3];
        var cmd = auriga.setSevenSegment(9, 100);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口10 显示数值400', function() {
        var targetCmd = dataman.auriga.write.sevenSegment[4];
        var cmd = auriga.setSevenSegment(10, 100);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值0', function() {
        var targetCmd = dataman.auriga.write.sevenSegment[5];
        var cmd = auriga.setSevenSegment(6, 0);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值-100', function() {
        var targetCmd = dataman.auriga.write.sevenSegment[6];
        var cmd = auriga.setSevenSegment(6, -100);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值2147483647', function() {
        var targetCmd = dataman.auriga.write.sevenSegment[7];
        var cmd = auriga.setSevenSegment(6, 2147483647);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值-2147483648', function() {
        var targetCmd = dataman.auriga.write.sevenSegment[8];
        var cmd = auriga.setSevenSegment(6, -2147483648);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值1.63', function() {
        var targetCmd = dataman.auriga.write.sevenSegment[9];
        var cmd = auriga.setSevenSegment(6, 1.63);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值10.678', function() {
        var targetCmd = dataman.auriga.write.sevenSegment[10];
        var cmd = auriga.setSevenSegment(6, 10.666);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值2147483648', function() {
        var targetCmd = dataman.auriga.write.sevenSegment[11];
        var cmd = auriga.setSevenSegment(6, 2147483648);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值-2147483649', function() {
        var targetCmd = dataman.auriga.write.sevenSegment[12];
        var cmd = auriga.setSevenSegment(6, -2147483649);
        assert.equal(targetCmd, cmd);
      });
    });


    describe('表情面板-显示字符串：setLedMatrixChar(6, 0, 1, "Hi")', function() {
      it("在端口6 x：0 y：0的表情面板上显示字符串‘Hi’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixChar[0];
        var charData = "Hi";
        var cmd = auriga.setLedMatrixChar(6, 0, 0, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口7 x：0 y：0的表情面板上显示字符串‘Hi’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixChar[1];
        var charData = "Hi";
        var cmd = auriga.setLedMatrixChar(7, 0, 0, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口8 x：0 y：0的表情面板上显示字符串‘Hi’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixChar[2];
        var charData = "Hi";
        var cmd = auriga.setLedMatrixChar(8, 0, 0, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口9 x：0 y：0的表情面板上显示字符串‘Hi’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixChar[3];
        var charData = "Hi";
        var cmd = auriga.setLedMatrixChar(9, 0, 0, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口10 x：0 y：0的表情面板上显示字符串‘Hi’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixChar[4];
        var charData = "Hi";
        var cmd = auriga.setLedMatrixChar(10, 0, 0, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：1 y：0的表情面板上显示字符串‘Hi’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixChar[5];
        var charData = "Hi";
        var cmd = auriga.setLedMatrixChar(6, 1, 0, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：0 y：1的表情面板上显示字符串‘Hi’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixChar[6];
        var charData = "Hi";
        var cmd = auriga.setLedMatrixChar(6, 0, 1, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：1 y：2的表情面板上显示字符串‘Hi’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixChar[7];
        var charData = "Hi";
        var cmd = auriga.setLedMatrixChar(6, 1, 2, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：-1 y：0的表情面板上显示字符串‘Hi’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixChar[8];
        var charData = "Hi";
        var cmd = auriga.setLedMatrixChar(6, -1, 0, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：0 y：-4的表情面板上显示字符串‘Hi’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixChar[9];
        var charData = "Hi";
        var cmd = auriga.setLedMatrixChar(6, 0, -4, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：-1 y：-5的表情面板上显示字符串‘Hi’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixChar[10];
        var charData = "Hi";
        var cmd = auriga.setLedMatrixChar(6, -1, -5, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：0 y：0的表情面板上显示带有空格的字符串‘Hi life’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixChar[11];
        var charData = "Hi life";
        var cmd = auriga.setLedMatrixChar(6, 0, 0, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：0 y：0的表情面板上显示带有特殊字符的字符串‘Hi¥%…与…&@\/！～life’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixChar[12];
        var charData = "Hi¥%…与…&@\/！～life";
        var cmd = auriga.setLedMatrixChar(6, 0, 0, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：0 y：0的表情面板上显示仅有空格的字符串‘   ’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixChar[13];
        var charData = "   ";
        var cmd = auriga.setLedMatrixChar(6, 0, 0, charData);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('表情面板-显示表情：setLedMatrixChar(6, 0, 0, "默认表情")', function() {
      it("在端口6 x：0 y：0的表情面板上显示表情‘？？’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixEmotion[0];
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = auriga.setLedMatrixEmotion(6, 0, 0, emotionData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口7 x：0 y：0的表情面板上显示表情‘？？’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixEmotion[1];
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = auriga.setLedMatrixEmotion(7, 0, 0, emotionData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口8 x：0 y：0的表情面板上显示表情‘？？’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixEmotion[2];
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = auriga.setLedMatrixEmotion(8, 0, 0, emotionData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口9 x：0 y：0的表情面板上显示表情‘？？’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixEmotion[3];
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = auriga.setLedMatrixEmotion(9, 0, 0, emotionData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口10 x：0 y：0的表情面板上显示表情‘？？’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixEmotion[4];
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = auriga.setLedMatrixEmotion(10, 0, 0, emotionData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：1 y：0的表情面板上显示表情‘？？’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixEmotion[5];
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = auriga.setLedMatrixEmotion(6, 1, 0, emotionData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：0 y：1的表情面板上显示表情‘？？’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixEmotion[6];
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = auriga.setLedMatrixEmotion(6, 0, 1, emotionData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：1 y：2的表情面板上显示表情‘？？’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixEmotion[7];
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = auriga.setLedMatrixEmotion(6, 1, 2, emotionData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：-1 y：0的表情面板上显示表情‘？？’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixEmotion[8];
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = auriga.setLedMatrixEmotion(6, -1, 0, emotionData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：0 y：-4的表情面板上显示表情‘？？’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixEmotion[9];
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = auriga.setLedMatrixEmotion(6, 0, -4, emotionData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：-1 y：-5的表情面板上显示表情‘？？’", function() {
        var targetCmd = dataman.auriga.write.ledMatrixEmotion[10];
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = auriga.setLedMatrixEmotion(6, -1, -5, emotionData);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('表情面板-显示时间：setLedMatrixTime(6, 1, 10, 20)', function() {
      it("在端口6上以分隔符‘：’显示时间10:20 ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixTime[0];
        var cmd = auriga.setLedMatrixTime(6, 1, 10, 20);
        assert.equal(targetCmd, cmd);
      });

      it("在端口7上以分隔符‘：’显示时间10:20 ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixTime[0];
        var cmd = auriga.setLedMatrixTime(7, 1, 10, 20);
        assert.equal(targetCmd, cmd);
      });

      it("在端口8上以分隔符‘：’显示时间10:20 ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixTime[0];
        var cmd = auriga.setLedMatrixTime(8, 1, 10, 20);
        assert.equal(targetCmd, cmd);
      });

      it("在端口9上以分隔符‘：’显示时间10:20 ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixTime[0];
        var cmd = auriga.setLedMatrixTime(9, 1, 10, 20);
        assert.equal(targetCmd, cmd);
      });

      it("在端口10上以分隔符‘：’显示时间10:20 ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixTime[0];
        var cmd = auriga.setLedMatrixTime(10, 1, 10, 20);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6上以分隔符‘ ’显示时间10 20 ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixTime[0];
        var cmd = auriga.setLedMatrixTime(6, 0, 10, 20);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6上以分隔符‘：’显示时间00:00 ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixTime[0];
        var cmd = auriga.setLedMatrixTime(6, 1, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6上以分隔符‘：’显示时间23:59 ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixTime[0];
        var cmd = auriga.setLedMatrixTime(6, 1, 23, 59);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6上以分隔符‘：’显示时间-1:00 ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixTime[0];
        var cmd = auriga.setLedMatrixTime(6, 1, -1, 0);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6上以分隔符‘：’显示时间00:-1 ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixTime[0];
        var cmd = auriga.setLedMatrixTime(6, 1, 0, -1);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6上以分隔符‘：’显示时间23:60 ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixTime[0];
        var cmd = auriga.setLedMatrixTime(6, 1, 23, 60);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6上以分隔符‘：’显示时间24:00 ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixTime[0];
        var cmd = auriga.setLedMatrixTime(6, 1, 24, 0);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6上以分隔符‘：’显示时间time:01 ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixTime[0];
        var cmd = auriga.setLedMatrixTime(6, 1, 'time', 01);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6上以分隔符‘：’显示时间15.5:12 ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixTime[0];
        var cmd = auriga.setLedMatrixTime(6, 1, 15.5, 12);
        assert.equal(targetCmd, cmd);
      });   
    });

    describe('表情面板-显示数字：setLedMatrixNumber(6, 0)', function() {
      it("显示数字：setLedMatrixNumber(6, 0) ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixNumber[0];
        var cmd = auriga.setLedMatrixNumber(6, 0);
        assert.equal(targetCmd, cmd);
      });

      it("显示数字：setLedMatrixNumber(7, 0) ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixNumber[1];
        var cmd = auriga.setLedMatrixNumber(7, 0);
        assert.equal(targetCmd, cmd);
      });

      it("显示数字：setLedMatrixNumber(8, 0) ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixNumber[2];
        var cmd = auriga.setLedMatrixNumber(8, 0);
        assert.equal(targetCmd, cmd);
      });

      it("显示数字：setLedMatrixNumber(9, 0) ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixNumber[3];
        var cmd = auriga.setLedMatrixNumber(9, 0);
        assert.equal(targetCmd, cmd);
      });

      it("显示数字：setLedMatrixNumber(10, 0) ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixNumber[4];
        var cmd = auriga.setLedMatrixNumber(10, 0);
        assert.equal(targetCmd, cmd);
      });

      it("显示数字：setLedMatrixNumber(6, -1) ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixNumber[5];
        var cmd = auriga.setLedMatrixNumber(6, -1);
        assert.equal(targetCmd, cmd);
      });

      it("显示数字：setLedMatrixNumber(6, 1) ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixNumber[6];
        var cmd = auriga.setLedMatrixNumber(6, 1);
        assert.equal(targetCmd, cmd);
      });

      it("显示数字：setLedMatrixNumber(6, 12.25) ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixNumber[7];
        var cmd = auriga.setLedMatrixNumber(6, 12.25);
        assert.equal(targetCmd, cmd);
      });

      it("显示数字：setLedMatrixNumber(6, 2147483647) ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixNumber[8];
        var cmd = auriga.setLedMatrixNumber(6, 2147483647);
        assert.equal(targetCmd, cmd);
      });

      it("显示数字：setLedMatrixNumber(6, -2147483648) ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixNumber[9];
        var cmd = auriga.setLedMatrixNumber(6, -2147483648);
        assert.equal(targetCmd, cmd);
      });

      it("显示数字：setLedMatrixNumber(6, 2147483648) ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixNumber[10];
        var cmd = auriga.setLedMatrixNumber(6, 2147483648);
        assert.equal(targetCmd, cmd);
      });

      it("显示数字：setLedMatrixNumber(6, -2147483649) ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixNumber[11];
        var cmd = auriga.setLedMatrixNumber(6, -2147483649);
        assert.equal(targetCmd, cmd);
      });

      it("显示数字：setLedMatrixNumber(6, ‘error’) ", function() {
        var targetCmd = dataman.auriga.write.ledMatrixNumber[12];
        var cmd = auriga.setLedMatrixNumber(6, 'error');
        assert.equal(targetCmd, cmd);
      });
    });
    

    describe('快门线模块：setShutter(6, 2)', function() {
      it('在端口6的快门线设置为按下快门00 ', function() {
        var targetCmd = dataman.auriga.write.shutter[0];
        var cmd = auriga.setShutter(6, 0);
        assert.equal(targetCmd, cmd);
      });

      it('在端口7的快门线设置为按下快门00 ', function() {
        var targetCmd = dataman.auriga.write.shutter[0];
        var cmd = auriga.setShutter(7, 0);
        assert.equal(targetCmd, cmd);
      });

      it('在端口8的快门线设置为按下快门00 ', function() {
        var targetCmd = dataman.auriga.write.shutter[0];
        var cmd = auriga.setShutter(8, 0);
        assert.equal(targetCmd, cmd);
      });

      it('在端口9的快门线设置为按下快门00 ', function() {
        var targetCmd = dataman.auriga.write.shutter[0];
        var cmd = auriga.setShutter(9, 0);
        assert.equal(targetCmd, cmd);
      });

      it('在端口10的快门线设置为按下快门00 ', function() {
        var targetCmd = dataman.auriga.write.shutter[0];
        var cmd = auriga.setShutter(10, 0);
        assert.equal(targetCmd, cmd);
      });
      
      it('在端口6的快门线设置为松开快门01 ', function() {
        var targetCmd = dataman.auriga.write.shutter[0];
        var cmd = auriga.setShutter(6, 1);
        assert.equal(targetCmd, cmd);
      });

      it('在端口6的快门线设置为开始对焦02 ', function() {
        var targetCmd = dataman.auriga.write.shutter[0];
        var cmd = auriga.setShutter(6, 2);
        assert.equal(targetCmd, cmd);
      });

      it('在端口6的快门线设置为错误模式05 ', function() {
        var targetCmd = dataman.auriga.write.shutter[0];
        var cmd = auriga.setShutter(6, 5);
        assert.equal(targetCmd, cmd);
      });

      it('在端口6的快门线设置为错误模式-1 ', function() {
        var targetCmd = dataman.auriga.write.shutter[0];
        var cmd = auriga.setShutter(6, -1);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('设置TONE输出：setTone("C2～D8", 125~2000)', function() {
      it('设置TONE输出C2(65)频率二分之一（500）节拍', function() {
        var targetCmd = dataman.auriga.write.tone[0];
        var toneData = "C2";
        var cmd = auriga.setTone(toneData, 500);
        assert.equal(targetCmd, cmd);
      });

      it('设置TONE输出A2(110)频率8分之一（125）节拍', function() {
        var targetCmd = dataman.auriga.write.tone[0];
        var toneData = "A2";
        var cmd = auriga.setTone(toneData, 125);
        assert.equal(targetCmd, cmd);
      });

      it('设置TONE输出B2(123)频率4分之一（250）节拍', function() {
        var targetCmd = dataman.auriga.write.tone[0];
        var toneData = "B2";
        var cmd = auriga.setTone(toneData, 250);
        assert.equal(targetCmd, cmd);
      });

      it('设置TONE输出D5(555)频率一（1000）节拍', function() {
        var targetCmd = dataman.auriga.write.tone[0];
        var toneData = "D5";
        var cmd = auriga.setTone(toneData, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('设置TONE输出C7(2093)频率二（2000）节拍', function() {
        var targetCmd = dataman.auriga.write.tone[0];
        var toneData = "C7";
        var cmd = auriga.setTone(toneData, 2000);
        assert.equal(targetCmd, cmd);
      });

      it('设置TONE输出B7(3951)频率（500）停止节拍', function() {
        var targetCmd = dataman.auriga.write.tone[0];
        var toneData = "B7";
        var cmd = auriga.setTone(toneData, 0);//停止节拍在协议上也没有标注是多少
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
      it(' 发送查询版本号的指令', function() {
        var targetCmd = dataman.auriga.read.version[0];
        var cmd = auriga.readVersion(0);
        assert.equal(targetCmd, cmd);
      });

      // 注意：读版本获取到的数据是移除了数据头 FF 55 以及数据尾 0D 0A
      var targetVersion = dataman.auriga.read.version[1];
      it(targetVersion + ' should be returned', function(done) {
        var resultVersion;
        auriga.getSensorValue('version', function(result) {
          console.log(result)
          resultVersion = "FF 55 " + utils.intStrToHexStr(result, true) + " 0D 0A";;
          assert.equal(targetVersion, resultVersion);
          done();
        });
      });
    });

    describe('超声波传感器：readUltrasonic(0,10)', function() {
      
      it('发送读取端口号6的超声波的指令', function() {
        var targetCmd = dataman.auriga.read.ultrasonic[0];
        var cmd = auriga.readUltrasonic(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口号7的超声波的指令', function() {
        var targetCmd = dataman.auriga.read.ultrasonic[1];
        var cmd = auriga.readUltrasonic(0, 7);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口号8的超声波的指令', function() {
        var targetCmd = dataman.auriga.read.ultrasonic[2];
        var cmd = auriga.readUltrasonic(0, 8);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口号9的超声波的指令', function() {
        var targetCmd = dataman.auriga.read.ultrasonic[3];
        var cmd = auriga.readUltrasonic(0, 9);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口号10的超声波的指令', function() {
        var targetCmd = dataman.auriga.read.ultrasonic[4];
        var cmd = auriga.readUltrasonic(0, 10);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between 0~400', function(done) {
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

    describe('温度传感器：readTemperature(0,6～10,1/2)', function() {
      it('发送读取端口6 slot1 上的温度的指令', function() {
        var targetCmd = dataman.auriga.read.temperature[0];
        var cmd = auriga.readTemperature(0, 6, 1);
        console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口7 slot1 上的温度的指令', function() {
        var targetCmd = dataman.auriga.read.temperature[1];
        var cmd = auriga.readTemperature(0, 7, 1);
        console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口8 slot1 上的温度的指令', function() {
        var targetCmd = dataman.auriga.read.temperature[2];
        var cmd = auriga.readTemperature(0, 8, 1);
        console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口9 slot1 上的温度的指令', function() {
        var targetCmd = dataman.auriga.read.temperature[3];
        var cmd = auriga.readTemperature(0, 9, 1);
        console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口10 slot1 上的温度的指令', function() {
        var targetCmd = dataman.auriga.read.temperature[4];
        var cmd = auriga.readTemperature(0, 10, 1);
        console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口6 slot2 上的温度的指令', function() {
        var targetCmd = dataman.auriga.read.temperature[5];
        var cmd = auriga.readTemperature(0, 6, 2);
        console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between 0~1024 ', function(done) {
        var resultType;
        auriga.getSensorValue('temperature', {
          "port": 10,
          "slot": 2
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, 0);  //result >= 0
          assert.isAtMost(result, 1024);  //result <= 1024
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


    describe('限位开关传感器：readLimitSwitch(0, 6, 2)', function() {
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