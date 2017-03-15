//test latest_mcore：06.01.109

var assert = require('chai').assert;
var dataman = require('./dataman');

var Mcore = require("../src/protocol/mcore");
var mcore = new Mcore({
  "driver": "serial"
});

describe('【mcore_最新固件】', function() {
  before(function(done) {
    setTimeout(function() {
      done()
    }, 1000);
  });

  //执行命令：无返回的数据
  describe('#它的执行命令', function() {
    describe('直流电机：setDcMotor(m1-09/m2-10,-255～255)', function() {
      it('设置直流电机端口M1速度为255', function() {
        var targetCmd = dataman.mcore.write.dcMotor[0];
        var cmd = mcore.setDcMotor(9, 255); // (port, speed)
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口M2速度为255', function() {
        var targetCmd = dataman.mcore.write.dcMotor[1];
        var cmd = mcore.setDcMotor(10, 255);
        assert.equal(targetCmd, cmd);
      });

      // it('设置直流电机端口3速度为255', function() {
      //   var targetCmd = dataman.mcore.write.dcMotor[2];
      //   var cmd = mcore.setDcMotor(3, 255);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('设置直流电机端口4速度为255', function() {
      //   var targetCmd = dataman.mcore.write.dcMotor[3];
      //   var cmd = mcore.setDcMotor(4, 255);
      //   assert.equal(targetCmd, cmd);
      // });

      it('设置直流电机端口5（错误端口）速度为255', function() {
        var targetCmd = dataman.mcore.write.dcMotor[4];
        var cmd = mcore.setDcMotor(5, 255);
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机M1速度为-255', function() {
        var targetCmd = dataman.mcore.write.dcMotor[5];
        var cmd = mcore.setDcMotor(9, -255);
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机M1速度为100', function() {
        var targetCmd = dataman.mcore.write.dcMotor[6];
        var cmd = mcore.setDcMotor(9, 100);
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机M1速度为256', function() {
        var targetCmd = dataman.mcore.write.dcMotor[7];
        var cmd = mcore.setDcMotor(9, 256);
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机M1速度为-256', function() {
        var targetCmd = dataman.mcore.write.dcMotor[8];
        var cmd = mcore.setDcMotor(9, -256);
        assert.equal(targetCmd, cmd);
      });
    });

    // describe('板载编码电机：setEncoderMotorOnBoard(1/2,-255～255)', function() {
    //   it('板载编码电机slot口1速度100', function() {
    //     var targetCmd = dataman.mcore.write.encoderMotorBoard[0];
    //     var cmd = mcore.setEncoderMotorOnBoard(1, 100);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('板载编码电机slot口2速度100', function() {
    //     var targetCmd = dataman.mcore.write.encoderMotorBoard[1];
    //     var cmd = mcore.setEncoderMotorOnBoard(2, 100);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('板载编码电机slot口1速度255', function() {
    //     var targetCmd = dataman.mcore.write.encoderMotorBoard[2];
    //     var cmd = mcore.setEncoderMotorOnBoard(1, 255);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('板载编码电机slot口1速度-255', function() {
    //     var targetCmd = dataman.mcore.write.encoderMotorBoard[3];
    //     var cmd = mcore.setEncoderMotorOnBoard(1, -255);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('板载编码电机slot口1速度0', function() {
    //     var targetCmd = dataman.mcore.write.encoderMotorBoard[4];
    //     var cmd = mcore.setEncoderMotorOnBoard(1, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('板载编码电机slot口1速度256', function() {
    //     var targetCmd = dataman.mcore.write.encoderMotorBoard[5];
    //     var cmd = mcore.setEncoderMotorOnBoard(1, 256);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('板载编码电机slot口1速度-256', function() {
    //     var targetCmd = dataman.mcore.write.encoderMotorBoard[6];
    //     var cmd = mcore.setEncoderMotorOnBoard(1, -256);
    //     assert.equal(targetCmd, cmd);
    //   });
    // });

    // describe('外接编码电机：setEncoderMotor(1～4, 1/2, 0～300, 720)', function() {
    //   it('外接编码电机port1 slot1 速度为150角度为720', function() {
    //     var targetCmd = dataman.mcore.write.encoder[0];
    //     var cmd = mcore.setEncoderMotor(1, 1, 150, 720);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('外接编码电机port2 slot1 速度为150角度为720', function() {
    //     var targetCmd = dataman.mcore.write.encoder[1];
    //     var cmd = mcore.setEncoderMotor(2, 1, 150, 720);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('外接编码电机port3 slot1 速度为150角度为720', function() {
    //     var targetCmd = dataman.mcore.write.encoder[2];
    //     var cmd = mcore.setEncoderMotor(3, 1, 150, 720);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('外接编码电机port4 slot1 速度为150角度为720', function() {
    //     var targetCmd = dataman.mcore.write.encoder[3];
    //     var cmd = mcore.setEncoderMotor(4, 1, 150, 720);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('外接编码电机port1 slot2 速度为150角度为720', function() {
    //     var targetCmd = dataman.mcore.write.encoder[4];
    //     var cmd = mcore.setEncoderMotor(1, 2, 150, 720);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('外接编码电机port1 slot1 速度为0角度为720', function() {
    //     var targetCmd = dataman.mcore.write.encoder[5];
    //     var cmd = mcore.setEncoderMotor(1, 1, 0, 720);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('外接编码电机port1 slot1 速度为300角度为720', function() {
    //     var targetCmd = dataman.mcore.write.encoder[6];
    //     var cmd = mcore.setEncoderMotor(1, 1, 300, 720);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('外接编码电机port1 slot1 速度为301角度为720', function() {
    //     var targetCmd = dataman.mcore.write.encoder[7];
    //     var cmd = mcore.setEncoderMotor(1, 1, 301, 720);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('外接编码电机port1 slot1 速度为-1角度为720', function() {
    //     var targetCmd = dataman.mcore.write.encoder[8];
    //     var cmd = mcore.setEncoderMotor(1, 1, -1, 720);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('外接编码电机port1 slot1 速度为150角度为0', function() {
    //     var targetCmd = dataman.mcore.write.encoder[9];
    //     var cmd = mcore.setEncoderMotor(1, 1, 150, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('外接编码电机port1 slot1 速度为150角度为2147483647', function() {
    //     var targetCmd = dataman.mcore.write.encoder[10];
    //     var cmd = mcore.setEncoderMotor(1, 1, 150, 2147483647);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('外接编码电机port1 slot1 速度为150角度为-2147483648', function() {
    //     var targetCmd = dataman.mcore.write.encoder[11];
    //     var cmd = mcore.setEncoderMotor(1, 1, 150, -2147483648);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('外接编码电机port1 slot1 速度为150角度为2147483648', function() {
    //     var targetCmd = dataman.mcore.write.encoder[12];
    //     var cmd = mcore.setEncoderMotor(1, 1, 150, 2147483648);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('外接编码电机port1 slot1 速度为150角度为-2147483649', function() {
    //     var targetCmd = dataman.mcore.write.encoder[13];
    //     var cmd = mcore.setEncoderMotor(1, 1, 150, -2147483649);
    //     assert.equal(targetCmd, cmd);
    //   });
    // });

    describe('摇杆1：setJoystick(-255～255,-255～255)', function() {
      it('app虚拟摇杆1左轮速度100右轮速度100', function() {
        var targetCmd = dataman.mcore.write.joystick[0];
        var cmd = mcore.setJoystick(100, 100);//leftSpeed, rightSpeed
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度255右轮速度255', function() {
        var targetCmd = dataman.mcore.write.joystick[1];
        var cmd = mcore.setJoystick(255, 255);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度-255右轮速度-255', function() {
        var targetCmd = dataman.mcore.write.joystick[2];
        var cmd = mcore.setJoystick(-255, -255);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度0右轮速度150', function() {
        var targetCmd = dataman.mcore.write.joystick[3];
        var cmd = mcore.setJoystick(0, 150);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度-100右轮速度100', function() {
        var targetCmd = dataman.mcore.write.joystick[4];
        var cmd = mcore.setJoystick(-100, 100);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度150右轮速度0', function() {
        var targetCmd = dataman.mcore.write.joystick[5];
        var cmd = mcore.setJoystick(150, 0);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度100右轮速度-100', function() {
        var targetCmd = dataman.mcore.write.joystick[6];
        var cmd = mcore.setJoystick(100, -100);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度256右轮速度256', function() {
        var targetCmd = dataman.mcore.write.joystick[7];
        var cmd = mcore.setJoystick(256, 256);
        assert.equal(targetCmd, cmd);
      });

      it('app虚拟摇杆1左轮速度-256右轮速度-256', function() {
        var targetCmd = dataman.mcore.write.joystick[8] ;
        var cmd = mcore.setJoystick(-256, -256);
        assert.equal(targetCmd, cmd);
      });
    });

    // describe('摇杆2：setVirtualJoystickForBalance(-255~255,-255~255)', function() {
    //   it('app虚拟摇杆2拐弯100速度100', function() {
    //     var targetCmd = dataman.mcore.write.virtualJoystickForBalance[0];
    //     var cmd = mcore.setVirtualJoystickForBalance(100, 100);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('app虚拟摇杆2拐弯255速度255', function() {
    //     var targetCmd = dataman.mcore.write.virtualJoystickForBalance[1];
    //     var cmd = mcore.setVirtualJoystickForBalance(255, 255);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('app虚拟摇杆2拐弯-255速度-255', function() {
    //     var targetCmd = dataman.mcore.write.virtualJoystickForBalance[2];
    //     var cmd = mcore.setVirtualJoystickForBalance(-255, -255);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('app虚拟摇杆2拐弯0速度150', function() {
    //     var targetCmd = dataman.mcore.write.virtualJoystickForBalance[3];
    //     var cmd = mcore.setVirtualJoystickForBalance(0, 150);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('app虚拟摇杆2拐弯-100速度100', function() {
    //     var targetCmd = dataman.mcore.write.virtualJoystickForBalance[4];
    //     var cmd = mcore.setVirtualJoystickForBalance(-100, 100);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('app虚拟摇杆2拐弯150速度0', function() {
    //     var targetCmd = dataman.mcore.write.virtualJoystickForBalance[5];
    //     var cmd = mcore.setVirtualJoystickForBalance(150, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('app虚拟摇杆2拐弯100速度-100', function() {
    //     var targetCmd = dataman.mcore.write.virtualJoystickForBalance[6];
    //     var cmd = mcore.setVirtualJoystickForBalance(100, -100);
    //     assert.equal(targetCmd, cmd);
    //   });


    //   it('app虚拟摇杆2拐弯256速度256', function() {
    //     var targetCmd = dataman.mcore.write.virtualJoystickForBalance[7];
    //     var cmd = mcore.setVirtualJoystickForBalance(256, 256);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('app虚拟摇杆2拐弯-256速度-256', function() {
    //     var targetCmd = dataman.mcore.write.virtualJoystickForBalance[8];
    //     var cmd = mcore.setVirtualJoystickForBalance(-256, -256);
    //     assert.equal(targetCmd, cmd);
    //   });
    // });

    // describe('步进电机：setStepperMotor(1~4,0~3000,-2147483648~2147483647)', function() {
    //   it('步进电机在端口1速度为3000位移为1000', function() {
    //     var targetCmd = dataman.mcore.write.stepperMotor[0];
    //     var cmd = mcore.setStepperMotor(1, 3000, 1000);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('步进电机在端口2速度为3000位移为1000', function() {
    //     var targetCmd = dataman.mcore.write.stepperMotor[1];
    //     var cmd = mcore.setStepperMotor(2, 3000, 1000);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('步进电机在端口3速度为3000位移为1000', function() {
    //     var targetCmd = dataman.mcore.write.stepperMotor[2];
    //     var cmd = mcore.setStepperMotor(3, 3000, 1000);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('步进电机在端口4速度为3000位移为1000', function() {
    //     var targetCmd = dataman.mcore.write.stepperMotor[3];
    //     var cmd = mcore.setStepperMotor(4, 3000, 1000);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('步进电机在端口1速度为0位移为1000', function() {
    //     var targetCmd = dataman.mcore.write.stepperMotor[4];
    //     var cmd = mcore.setStepperMotor(1, 0, 1000);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('步进电机在端口1速度为1500位移为1000', function() {
    //     var targetCmd = dataman.mcore.write.stepperMotor[5];
    //     var cmd = mcore.setStepperMotor(1, 1500, 1000);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('步进电机在端口1速度为-1位移为1000', function() {
    //     var targetCmd = dataman.mcore.write.stepperMotor[6];
    //     var cmd = mcore.setStepperMotor(1, -1, 1000);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('步进电机在端口1速度为3001位移为1000', function() {
    //     var targetCmd = dataman.mcore.write.stepperMotor[7];
    //     var cmd = mcore.setStepperMotor(1, 3001, 1000);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('步进电机在端口1速度为3000位移为2147483647', function() {
    //     var targetCmd = dataman.mcore.write.stepperMotor[8];
    //     var cmd = mcore.setStepperMotor(1, 3000, 2147483647);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('步进电机在端口1速度为3000位移为-2147483648', function() {
    //     var targetCmd = dataman.mcore.write.stepperMotor[9];
    //     var cmd = mcore.setStepperMotor(1, 3000, -2147483648);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('步进电机在端口1速度为3000位移为0', function() {
    //     var targetCmd = dataman.mcore.write.stepperMotor[10];
    //     var cmd = mcore.setStepperMotor(1, 3000, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('步进电机在端口1速度为3000位移为2147483648', function() {
    //     var targetCmd = dataman.mcore.write.stepperMotor[11];
    //     var cmd = mcore.setStepperMotor(1, 3000, 2147483648);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('步进电机在端口1速度为3000位移为-2147483649', function() {
    //     var targetCmd = dataman.mcore.write.stepperMotor[12];
    //     var cmd = mcore.setStepperMotor(1, 3000, -2147483649);
    //     assert.equal(targetCmd, cmd);
    //   });
    // });

    describe('RGB LED灯：setLed(1~4/7,1/2,0~2,0~255,0~255,0~255)', function() {      
      it('将端口号1 slot1的灯的全部位置上亮起红色', function() {
        var targetCmd = dataman.mcore.write.led[0];
        var cmd = mcore.setLed(1, 1, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号2 slot1的灯的全部位置上亮起红色', function() {
        var targetCmd = dataman.mcore.write.led[1];
        var cmd = mcore.setLed(2, 1, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号3 slot1的灯的全部位置上亮起红色', function() {
        var targetCmd = dataman.mcore.write.led[2];
        var cmd = mcore.setLed(3, 1, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号4 slot1的灯的全部位置上亮起红色', function() {
        var targetCmd = dataman.mcore.write.led[3];
        var cmd = mcore.setLed(4, 1, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将板载（7）slot1的灯的全部位置上亮起红色', function() {
        var targetCmd = dataman.mcore.write.led[4];
        var cmd = mcore.setLed(7, 1, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号1 slot2的灯的全部位置上亮起红色', function() {
        var targetCmd = dataman.mcore.write.led[5];
        var cmd = mcore.setLed(1, 2, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号1 slot2的灯的01位置上亮起红色', function() {
        var targetCmd = dataman.mcore.write.led[6];
        var cmd = mcore.setLed(1, 2, 1, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号1 slot2的灯的2位置上亮起红色', function() {
        var targetCmd = dataman.mcore.write.led[7];
        var cmd = mcore.setLed(1, 2, 2, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号1 slot2的灯的-1位置上亮起红色', function() {
        var targetCmd = dataman.mcore.write.led[8];
        var cmd = mcore.setLed(1, 2, -1, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号1 slot2的灯的全部位置上亮起混合色', function() {
        var targetCmd = dataman.mcore.write.led[9];
        var cmd = mcore.setLed(1, 2, 0, 125, 100, 55);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号1 slot2的灯的全部位置上亮起蓝色', function() {
        var targetCmd = dataman.mcore.write.led[10];
        var cmd = mcore.setLed(1, 2, 0, 0, 0, 255);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号1 slot2的灯的全部位置上亮起绿色', function() {
        var targetCmd = dataman.mcore.write.led[11];
        var cmd = mcore.setLed(1, 2, 0, 0, 255, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号1 slot2的灯的全部位置上亮起白色', function() {
        var targetCmd = dataman.mcore.write.led[12];
        var cmd = mcore.setLed(1, 2, 0, 255, 255, 255);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号1 slot2的灯的全部位置上熄灭（不亮）', function() {
        var targetCmd = dataman.mcore.write.led[13];
        var cmd = mcore.setLed(1, 2, 0, 0, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号1 slot2的灯的全部位置上亮起红色（超出界限0～255）', function() {
        var targetCmd = dataman.mcore.write.led[14];
        var cmd = mcore.setLed(1, 2, 0, 256, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号1 slot2的灯的全部位置上不亮（熄灭）（超出界限0～255）', function() {
        var targetCmd = dataman.mcore.write.led[15];
        var cmd = mcore.setLed(1, 2, 0, 0, -1, 0);
        assert.equal(targetCmd, cmd);
      });
    });

    // describe('板载灯盘：setLedPanelOnBoard(0~12,0~255,0~255,0~255)', function() {      
    //   it('将板载灯盘的全部位置上亮起红色', function() {
    //     var targetCmd = dataman.mcore.write.ledPanelOnBoard[0];
    //     var cmd = mcore.setLedPanelOnBoard(0, 255, 0, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('将板载灯盘的02位置上亮起红色', function() {
    //     var targetCmd = dataman.mcore.write.ledPanelOnBoard[1];
    //     var cmd = mcore.setLedPanelOnBoard(2, 255, 0, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('将板载灯盘的13位置上亮起红色', function() {
    //     var targetCmd = dataman.mcore.write.ledPanelOnBoard[2];
    //     var cmd = mcore.setLedPanelOnBoard(13, 255, 0, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('将板载灯盘的-1位置上亮起红色', function() {
    //     var targetCmd = dataman.mcore.write.ledPanelOnBoard[3];
    //     var cmd = mcore.setLedPanelOnBoard(-1, 255, 0, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('将板载灯盘的全部位置上亮起混合色（125，100，55）', function() {
    //     var targetCmd = dataman.mcore.write.ledPanelOnBoard[4];
    //     var cmd = mcore.setLedPanelOnBoard(0, 125, 100, 55);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('将板载灯盘的全部位置上亮起蓝色', function() {
    //     var targetCmd = dataman.mcore.write.ledPanelOnBoard[5];
    //     var cmd = mcore.setLedPanelOnBoard(0, 0, 0, 255);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('将板载灯盘的全部位置上亮起绿色', function() {
    //     var targetCmd = dataman.mcore.write.ledPanelOnBoard[6];
    //     var cmd = mcore.setLedPanelOnBoard(0, 0, 255, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('将板载灯盘的全部位置上亮起白色', function() {
    //     var targetCmd = dataman.mcore.write.ledPanelOnBoard[7];
    //     var cmd = mcore.setLedPanelOnBoard(0, 255, 255, 255);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('将板载灯盘的全部位置上亮起红色（超出界限0～255）', function() {
    //     var targetCmd = dataman.mcore.write.ledPanelOnBoard[8];
    //     var cmd = mcore.setLedPanelOnBoard(0, 256, 0, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('将板载灯盘的全部位置上不亮（熄灭）（超出界限0～255）', function() {
    //     var targetCmd = dataman.mcore.write.ledPanelOnBoard[9];
    //     var cmd = mcore.setLedPanelOnBoard(0, 0, -1, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('将板载灯盘的全部位置上熄灭（不亮）', function() {
    //     var targetCmd = dataman.mcore.write.ledPanelOnBoard[10];
    //     var cmd = mcore.turnOffLedPanelOnBoard(0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('将板载灯盘的05位置上熄灭（不亮）', function() {
    //     var targetCmd = dataman.mcore.write.ledPanelOnBoard[11];
    //     var cmd = mcore.turnOffLedPanelOnBoard(5);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('将板载灯盘的13位置上熄灭（不亮）', function() {
    //     var targetCmd = dataman.mcore.write.ledPanelOnBoard[12];
    //     var cmd = mcore.turnOffLedPanelOnBoard(13);
    //     assert.equal(targetCmd, cmd);
    //   });

    //    it('将板载灯盘的-1位置上熄灭（不亮）', function() {
    //     var targetCmd = dataman.mcore.write.ledPanelOnBoard[13];
    //     var cmd = mcore.turnOffLedPanelOnBoard(-1);
    //     assert.equal(targetCmd, cmd);
    //   });
    // });

    describe('四键led灯：setFourLeds(1~4，0~4,0~255,0~255,0~255)', function() {      
      it('将端口1上的四键led灯的全部位置上亮起红色', function() {
        var targetCmd = dataman.mcore.write.fourLeds[0];
        var cmd = mcore.setFourLeds(1, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口2上的四键led灯的全部位置上亮起红色', function() {
        var targetCmd = dataman.mcore.write.fourLeds[1];
        var cmd = mcore.setFourLeds(2, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口3上的四键led灯的全部位置上亮起红色', function() {
        var targetCmd = dataman.mcore.write.fourLeds[2];
        var cmd = mcore.setFourLeds(3, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口4上的四键led灯的全部位置上亮起红色', function() {
        var targetCmd = dataman.mcore.write.fourLeds[3];
        var cmd = mcore.setFourLeds(4, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      // it('将端口10上的四键led灯的全部位置上亮起红色', function() {
      //   var targetCmd = dataman.mcore.write.fourLeds[4];
      //   var cmd = mcore.setFourLeds(10, 0, 255, 0, 0);
      //   assert.equal(targetCmd, cmd);
      // });

      it('将端口1上的四键led灯的02位置上亮起红色', function() {
        var targetCmd = dataman.mcore.write.fourLeds[5];
        var cmd = mcore.setFourLeds(1, 2, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口1上的四键led灯的5位置上亮起红色', function() {
        var targetCmd = dataman.mcore.write.fourLeds[6];
        var cmd = mcore.setFourLeds(1, 5, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口1上的四键led灯的-1位置上亮起红色', function() {
        var targetCmd = dataman.mcore.write.fourLeds[7];
        var cmd = mcore.setFourLeds(1, -1, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口1上的四键led灯的全部位置上亮起混合色（125，100，55）', function() {
        var targetCmd = dataman.mcore.write.fourLeds[8];
        var cmd = mcore.setFourLeds(1, 0, 125, 100, 55);
        assert.equal(targetCmd, cmd);
      });

      it('将端口1上的四键led灯的全部位置上亮起蓝色', function() {
        var targetCmd = dataman.mcore.write.fourLeds[9];
        var cmd = mcore.setFourLeds(1, 0, 0, 0, 255);
        assert.equal(targetCmd, cmd);
      });

      it('将端口1上的四键led灯的全部位置上亮起绿色', function() {
        var targetCmd = dataman.mcore.write.fourLeds[10];
        var cmd = mcore.setFourLeds(1, 0, 0, 255, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口1上的四键led灯的全部位置上亮起白色', function() {
        var targetCmd = dataman.mcore.write.fourLeds[11];
        var cmd = mcore.setFourLeds(1, 0, 255, 255, 255);
        assert.equal(targetCmd, cmd);
      });

      it('将端口1上的四键led灯的全部位置上亮起红色（超出界限0～255）', function() {
        var targetCmd = dataman.mcore.write.fourLeds[12];
        var cmd = mcore.setFourLeds(1, 0, 256, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口1上的四键led灯的全部位置上不亮（熄灭）（超出界限0～255）', function() {
        var targetCmd = dataman.mcore.write.fourLeds[13];
        var cmd = mcore.setFourLeds(1, 0, 0, -1, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口1上的四键led灯的全部位置上熄灭（不亮）', function() {
        var targetCmd = dataman.mcore.write.fourLeds[14];
        var cmd = mcore.turnOffFourLeds(1, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口2上的四键led灯的03位置上熄灭（不亮）', function() {
        var targetCmd = dataman.mcore.write.fourLeds[15];
        var cmd = mcore.turnOffFourLeds(2, 3);
        assert.equal(targetCmd, cmd);
      });

      it('将端口1上的四键led灯的5位置上熄灭（不亮）', function() {
        var targetCmd = dataman.mcore.write.fourLeds[16];
        var cmd = mcore.turnOffFourLeds(1, 5);
        assert.equal(targetCmd, cmd);
      });

       it('将端口1上的四键led灯的-1位置上熄灭（不亮）', function() {
        var targetCmd = dataman.mcore.write.fourLeds[17];
        var cmd = mcore.setFourLeds(1, -1);
        assert.equal(targetCmd, cmd);
      });
    });

    // describe('主板通用命令：setFirmwareMode(0～4)', function() {
    //   it('主板通用命令-设置模式为蓝牙模式', function() {
    //     var targetCmd = dataman.mcore.write.firmwareModeBlueTooth[0];
    //     var cmd = mcore.setFirmwareMode(0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("主板通用命令-设置模式为自动避障", function() {
    //     var targetCmd = dataman.mcore.write.firmwareModeObstacle[0];
    //     var cmd = mcore.setFirmwareMode(1);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("主板通用命令-设置模式为平衡车 ", function() {
    //     var targetCmd = dataman.mcore.write.firmwareModeBalance[0];
    //     var cmd = mcore.setFirmwareMode(2);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("主板通用命令-设置模式为红外线 ", function() {
    //     var targetCmd = dataman.mcore.write.firmwareModeInfrared[0];
    //     var cmd = mcore.setFirmwareMode(3);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("主板通用命令-设置模式为巡线 ", function() {
    //     var targetCmd = dataman.mcore.write.firmwareModeLineFollow[0];
    //     var cmd = mcore.setFirmwareMode(4);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("主板通用命令-设置模式为5（错误模式参数） ", function() {
    //     var targetCmd = dataman.mcore.write.firmwareModeWrong[0];
    //     var cmd = mcore.setFirmwareMode(5);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("主板通用命令-设置模式为-1（错误模式参数） ", function() {
    //     var targetCmd = dataman.mcore.write.firmwareModeWrong[1];
    //     var cmd = mcore.setFirmwareMode(-1);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("主板通用命令-设置模式为3.5（错误模式参数） ", function() {
    //     var targetCmd = dataman.mcore.write.firmwareModeWrong[2];
    //     var cmd = mcore.setFirmwareMode(3.5);
    //     assert.equal(targetCmd, cmd);
    //   });
    // });

    describe('数字舵机：setServoMotor(6~10,1/2,0~180)', function() {
      it('数字舵机在端口6 slot1 旋转角度90', function() {
        var targetCmd = dataman.mcore.write.servo[0];
        var cmd = mcore.setServoMotor(6, 1, 90);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口7 slot1 旋转角度90', function() {
        var targetCmd = dataman.mcore.write.servo[1];
        var cmd = mcore.setServoMotor(7, 1, 90);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口8 slot1 旋转角度90', function() {
        var targetCmd = dataman.mcore.write.servo[2];
        var cmd = mcore.setServoMotor(8, 1, 90);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口9 slot1 旋转角度90', function() {
        var targetCmd = dataman.mcore.write.servo[3];
        var cmd = mcore.setServoMotor(9, 1, 90);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口10 slot1 旋转角度90', function() {
        var targetCmd = dataman.mcore.write.servo[4];
        var cmd = mcore.setServoMotor(10, 1, 90);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口6 slot2 旋转角度90', function() {
        var targetCmd = dataman.mcore.write.servo[5];
        var cmd = mcore.setServoMotor(6, 2, 90);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口6 slot1 旋转角度0', function() {
        var targetCmd = dataman.mcore.write.servo[6];
        var cmd = mcore.setServoMotor(6, 1, 0);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口6 slot1 旋转角度180', function() {
        var targetCmd = dataman.mcore.write.servo[7];
        var cmd = mcore.setServoMotor(6, 1, 180);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口6 slot1 旋转角度181', function() {
        var targetCmd = dataman.mcore.write.servo[8];
        var cmd = mcore.setServoMotor(6, 1, 181);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口6 slot1 旋转角度-1', function() {
        var targetCmd = dataman.mcore.write.servo[9];
        var cmd = mcore.setServoMotor(6, 1, -1);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('四位七段数码管：setSevenSegment(6～10，-2147483648～2147483647)', function() {
      it('四位七段数码管在端口6 显示数值100', function() {
        var targetCmd = dataman.mcore.write.sevenSegment[0];
        var cmd = mcore.setSevenSegment(6, 100);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口7 显示数值100', function() {
        var targetCmd = dataman.mcore.write.sevenSegment[1];
        var cmd = mcore.setSevenSegment(7, 100);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口8 显示数值200', function() {
        var targetCmd = dataman.mcore.write.sevenSegment[2];
        var cmd = mcore.setSevenSegment(8, 100);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口9 显示数值300', function() {
        var targetCmd = dataman.mcore.write.sevenSegment[3];
        var cmd = mcore.setSevenSegment(9, 100);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口10 显示数值400', function() {
        var targetCmd = dataman.mcore.write.sevenSegment[4];
        var cmd = mcore.setSevenSegment(10, 100);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值0', function() {
        var targetCmd = dataman.mcore.write.sevenSegment[5];
        var cmd = mcore.setSevenSegment(6, 0);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值-100', function() {
        var targetCmd = dataman.mcore.write.sevenSegment[6];
        var cmd = mcore.setSevenSegment(6, -100);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值2147483647', function() {
        var targetCmd = dataman.mcore.write.sevenSegment[7];
        var cmd = mcore.setSevenSegment(6, 2147483647);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值-2147483648', function() {
        var targetCmd = dataman.mcore.write.sevenSegment[8];
        var cmd = mcore.setSevenSegment(6, -2147483648);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值1.63', function() {
        var targetCmd = dataman.mcore.write.sevenSegment[9];
        var cmd = mcore.setSevenSegment(6, 1.63);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值10.678', function() {
        var targetCmd = dataman.mcore.write.sevenSegment[10];
        var cmd = mcore.setSevenSegment(6, 10.666);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值2147483648', function() {
        var targetCmd = dataman.mcore.write.sevenSegment[11];
        var cmd = mcore.setSevenSegment(6, 2147483648);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值-2147483649', function() {
        var targetCmd = dataman.mcore.write.sevenSegment[12];
        var cmd = mcore.setSevenSegment(6, -2147483649);
        assert.equal(targetCmd, cmd);
      });
    });


    describe('表情面板-显示字符串：setLedMatrixChar(6, 0, 1, "Hi")', function() {
      it("在端口6 x：0 y：0的表情面板上显示字符串‘Hi’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixChar[0];
        var charData = "Hi";
        var cmd = mcore.setLedMatrixChar(6, 0, 0, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口7 x：0 y：0的表情面板上显示字符串‘Hi’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixChar[1];
        var charData = "Hi";
        var cmd = mcore.setLedMatrixChar(7, 0, 0, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口8 x：0 y：0的表情面板上显示字符串‘Hi’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixChar[2];
        var charData = "Hi";
        var cmd = mcore.setLedMatrixChar(8, 0, 0, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口9 x：0 y：0的表情面板上显示字符串‘Hi’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixChar[3];
        var charData = "Hi";
        var cmd = mcore.setLedMatrixChar(9, 0, 0, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口10 x：0 y：0的表情面板上显示字符串‘Hi’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixChar[4];
        var charData = "Hi";
        var cmd = mcore.setLedMatrixChar(10, 0, 0, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：1 y：0的表情面板上显示字符串‘Hi’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixChar[5];
        var charData = "Hi";
        var cmd = mcore.setLedMatrixChar(6, 1, 0, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：0 y：1的表情面板上显示字符串‘Hi’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixChar[6];
        var charData = "Hi";
        var cmd = mcore.setLedMatrixChar(6, 0, 1, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：1 y：2的表情面板上显示字符串‘Hi’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixChar[7];
        var charData = "Hi";
        var cmd = mcore.setLedMatrixChar(6, 1, 2, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：-1 y：0的表情面板上显示字符串‘Hi’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixChar[8];
        var charData = "Hi";
        var cmd = mcore.setLedMatrixChar(6, -1, 0, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：0 y：-4的表情面板上显示字符串‘Hi’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixChar[9];
        var charData = "Hi";
        var cmd = mcore.setLedMatrixChar(6, 0, -4, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：-1 y：-5的表情面板上显示字符串‘Hi’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixChar[10];
        var charData = "Hi";
        var cmd = mcore.setLedMatrixChar(6, -1, -5, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：0 y：0的表情面板上显示带有空格的字符串‘Hi life’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixChar[11];
        var charData = "Hi life";
        var cmd = mcore.setLedMatrixChar(6, 0, 0, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：0 y：0的表情面板上显示带有特殊字符的字符串‘Hi¥%…与…&@\/！～life’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixChar[12];
        var charData = "Hi¥%…与…&@\/！～life";
        var cmd = mcore.setLedMatrixChar(6, 0, 0, charData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：0 y：0的表情面板上显示仅有空格的字符串‘   ’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixChar[13];
        var charData = "   ";
        var cmd = mcore.setLedMatrixChar(6, 0, 0, charData);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('表情面板-显示表情：setLedMatrixChar(6, 0, 0, "默认表情")', function() {
      it("在端口6 x：0 y：0的表情面板上显示表情‘？？’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixEmotion[0];
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = mcore.setLedMatrixEmotion(6, 0, 0, emotionData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口7 x：0 y：0的表情面板上显示表情‘？？’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixEmotion[1];
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = mcore.setLedMatrixEmotion(7, 0, 0, emotionData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口8 x：0 y：0的表情面板上显示表情‘？？’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixEmotion[2];
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = mcore.setLedMatrixEmotion(8, 0, 0, emotionData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口9 x：0 y：0的表情面板上显示表情‘？？’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixEmotion[3];
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = mcore.setLedMatrixEmotion(9, 0, 0, emotionData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口10 x：0 y：0的表情面板上显示表情‘？？’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixEmotion[4];
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = mcore.setLedMatrixEmotion(10, 0, 0, emotionData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：1 y：0的表情面板上显示表情‘？？’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixEmotion[5];
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = mcore.setLedMatrixEmotion(6, 1, 0, emotionData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：0 y：1的表情面板上显示表情‘？？’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixEmotion[6];
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = mcore.setLedMatrixEmotion(6, 0, 1, emotionData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：1 y：2的表情面板上显示表情‘？？’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixEmotion[7];
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = mcore.setLedMatrixEmotion(6, 1, 2, emotionData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：-1 y：0的表情面板上显示表情‘？？’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixEmotion[8];
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = mcore.setLedMatrixEmotion(6, -1, 0, emotionData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：0 y：-4的表情面板上显示表情‘？？’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixEmotion[9];
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = mcore.setLedMatrixEmotion(6, 0, -4, emotionData);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6 x：-1 y：-5的表情面板上显示表情‘？？’", function() {
        var targetCmd = dataman.mcore.write.ledMatrixEmotion[10];
        var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
        var cmd = mcore.setLedMatrixEmotion(6, -1, -5, emotionData);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('表情面板-显示时间：setLedMatrixTime(6～10, 0/1, 0～23, 0～59)', function() {
      it("在端口6上以分隔符‘：’显示时间10:20 ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixTime[0];
        var cmd = mcore.setLedMatrixTime(6, 1, 10, 20);
        assert.equal(targetCmd, cmd);
      });

      it("在端口7上以分隔符‘：’显示时间10:20 ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixTime[1];
        var cmd = mcore.setLedMatrixTime(7, 1, 10, 20);
        assert.equal(targetCmd, cmd);
      });

      it("在端口8上以分隔符‘：’显示时间10:20 ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixTime[2];
        var cmd = mcore.setLedMatrixTime(8, 1, 10, 20);
        assert.equal(targetCmd, cmd);
      });

      it("在端口9上以分隔符‘：’显示时间10:20 ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixTime[3];
        var cmd = mcore.setLedMatrixTime(9, 1, 10, 20);
        assert.equal(targetCmd, cmd);
      });

      it("在端口10上以分隔符‘：’显示时间10:20 ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixTime[4];
        var cmd = mcore.setLedMatrixTime(10, 1, 10, 20);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6上以分隔符‘ ’显示时间10 20 ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixTime[5];
        var cmd = mcore.setLedMatrixTime(6, 0, 10, 20);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6上以分隔符‘：’显示时间00:00 ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixTime[6];
        var cmd = mcore.setLedMatrixTime(6, 1, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6上以分隔符‘：’显示时间23:59 ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixTime[7];
        var cmd = mcore.setLedMatrixTime(6, 1, 23, 59);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6上以分隔符‘：’显示时间-1:00 ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixTime[8];
        var cmd = mcore.setLedMatrixTime(6, 1, -1, 0);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6上以分隔符‘：’显示时间00:-1 ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixTime[9];
        var cmd = mcore.setLedMatrixTime(6, 1, 0, -1);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6上以分隔符‘：’显示时间23:60 ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixTime[10];
        var cmd = mcore.setLedMatrixTime(6, 1, 23, 60);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6上以分隔符‘：’显示时间24:00 ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixTime[11];
        var cmd = mcore.setLedMatrixTime(6, 1, 24, 0);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6上以分隔符‘：’显示时间time:01 ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixTime[12];
        var cmd = mcore.setLedMatrixTime(6, 1, 'time', 01);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6上以分隔符‘：’显示时间15.5:12 ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixTime[13];
        var cmd = mcore.setLedMatrixTime(6, 1, 15.5, 12);
        assert.equal(targetCmd, cmd);
      });   
    });

    describe('表情面板-显示数字：setLedMatrixNumber(6, 0)', function() {
      it("在端口6上的表情面板显示数字0 ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixNumber[0];
        var cmd = mcore.setLedMatrixNumber(6, 0);
        assert.equal(targetCmd, cmd);
      });

      it("在端口7上的表情面板显示数字0 ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixNumber[1];
        var cmd = mcore.setLedMatrixNumber(7, 0);
        assert.equal(targetCmd, cmd);
      });

      it("在端口8上的表情面板显示数字0 ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixNumber[2];
        var cmd = mcore.setLedMatrixNumber(8, 0);
        assert.equal(targetCmd, cmd);
      });

      it("在端口9上的表情面板显示数字0", function() {
        var targetCmd = dataman.mcore.write.ledMatrixNumber[3];
        var cmd = mcore.setLedMatrixNumber(9, 0);
        assert.equal(targetCmd, cmd);
      });

      it("在端口10上的表情面板显示数字0", function() {
        var targetCmd = dataman.mcore.write.ledMatrixNumber[4];
        var cmd = mcore.setLedMatrixNumber(10, 0);
        assert.equal(targetCmd, cmd);
      });

      it("在端口 6 上的表情面板显示数字 -1 ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixNumber[5];
        var cmd = mcore.setLedMatrixNumber(6, -1);
        assert.equal(targetCmd, cmd);
      });

      it("在端口 6 上的表情面板显示数字 1 ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixNumber[6];
        var cmd = mcore.setLedMatrixNumber(6, 1);
        assert.equal(targetCmd, cmd);
      });

      it("在端口 6 上的表情面板显示数字 12.25", function() {
        var targetCmd = dataman.mcore.write.ledMatrixNumber[7];
        var cmd = mcore.setLedMatrixNumber(6, 12.25);
        assert.equal(targetCmd, cmd);
      });

      it("在端口 6 上的表情面板显示数字 2147483647 ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixNumber[8];
        var cmd = mcore.setLedMatrixNumber(6, 2147483647);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6上的表情面板显示数字 -2147483648", function() {
        var targetCmd = dataman.mcore.write.ledMatrixNumber[9];
        var cmd = mcore.setLedMatrixNumber(6, -2147483648);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6上的表情面板显示数字 2147483648 ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixNumber[10];
        var cmd = mcore.setLedMatrixNumber(6, 2147483648);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6上的表情面板显示数字0 -2147483649 ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixNumber[11];
        var cmd = mcore.setLedMatrixNumber(6, -2147483649);
        assert.equal(targetCmd, cmd);
      });

      it("在端口6上的表情面板显示数字 ‘error’ ", function() {
        var targetCmd = dataman.mcore.write.ledMatrixNumber[12];
        var cmd = mcore.setLedMatrixNumber(6, 'error');
        assert.equal(targetCmd, cmd);
      });
    });
    

    describe('快门线模块：setShutter(6, 2)', function() {
      it('在端口6的快门线设置为按下快门00 ', function() {
        var targetCmd = dataman.mcore.write.shutter[0];
        var cmd = mcore.setShutter(6, 0);
        assert.equal(targetCmd, cmd);
      });

      it('在端口7的快门线设置为按下快门00 ', function() {
        var targetCmd = dataman.mcore.write.shutter[1];
        var cmd = mcore.setShutter(7, 0);
        assert.equal(targetCmd, cmd);
      });

      it('在端口8的快门线设置为按下快门00 ', function() {
        var targetCmd = dataman.mcore.write.shutter[2];
        var cmd = mcore.setShutter(8, 0);
        assert.equal(targetCmd, cmd);
      });

      it('在端口9的快门线设置为按下快门00 ', function() {
        var targetCmd = dataman.mcore.write.shutter[3];
        var cmd = mcore.setShutter(9, 0);
        assert.equal(targetCmd, cmd);
      });

      it('在端口10的快门线设置为按下快门00 ', function() {
        var targetCmd = dataman.mcore.write.shutter[4];
        var cmd = mcore.setShutter(10, 0);
        assert.equal(targetCmd, cmd);
      });
      
      it('在端口6的快门线设置为松开快门01 ', function() {
        var targetCmd = dataman.mcore.write.shutter[5];
        var cmd = mcore.setShutter(6, 1);
        assert.equal(targetCmd, cmd);
      });

      it('在端口6的快门线设置为开始对焦02 ', function() {
        var targetCmd = dataman.mcore.write.shutter[6];
        var cmd = mcore.setShutter(6, 2);
        assert.equal(targetCmd, cmd);
      });

      it('在端口6的快门线设置为停止对焦03 ', function() {
        var targetCmd = dataman.mcore.write.shutter[7];
        var cmd = mcore.setShutter(6, 3);
        assert.equal(targetCmd, cmd);
      });

      it('在端口6的快门线设置为错误模式05 ', function() {
        var targetCmd = dataman.mcore.write.shutter[8];
        var cmd = mcore.setShutter(6, 5);
        assert.equal(targetCmd, cmd);
      });

      it('在端口6的快门线设置为错误模式-1 ', function() {
        var targetCmd = dataman.mcore.write.shutter[9];
        var cmd = mcore.setShutter(6, -1);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('设置TONE输出：setTone("C2～D8", 125~2000)', function() {
      it('设置TONE输出C2(65)频率二分之一（500）节拍', function() {
        var targetCmd = dataman.mcore.write.tone[0];
        var toneData = "C2";
        var cmd = mcore.setTone(toneData, 500);
        assert.equal(targetCmd, cmd);
      });

      it('设置TONE输出A2(110)频率8分之一（125）节拍', function() {
        var targetCmd = dataman.mcore.write.tone[1];
        var toneData = "A2";
        var cmd = mcore.setTone(toneData, 125);
        assert.equal(targetCmd, cmd);
      });

      it('设置TONE输出B2(123)频率4分之一（250）节拍', function() {
        var targetCmd = dataman.mcore.write.tone[2];
        var toneData = "B2";
        var cmd = mcore.setTone(toneData, 250);
        assert.equal(targetCmd, cmd);
      });

      it('设置TONE输出D5(555)频率一（1000）节拍', function() {
        var targetCmd = dataman.mcore.write.tone[3];
        var toneData = "D5";
        var cmd = mcore.setTone(toneData, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('设置TONE输出C7(2093)频率二（2000）节拍', function() {
        var targetCmd = dataman.mcore.write.tone[4];
        var toneData = "C7";
        var cmd = mcore.setTone(toneData, 2000);
        assert.equal(targetCmd, cmd);
      });

      it('设置TONE输出B7(3951)频率（500）停止节拍', function() {
        var targetCmd = dataman.mcore.write.tone[5];
        var toneData = "B7";
        var cmd = mcore.setTone(toneData, 0);//停止节拍在协议上也没有标注是多少
        assert.equal(targetCmd, cmd);
      });
    });

    // describe('数字舵机2：xxxxxxx', function() {
    //     targetCmd = "xxxxxxxx";
    //     it(targetCmd + ' should be sent', function() {
    //         var cmd = mcore.setEncodeMotorxxxxx(1,100);
    //         console.log("the data from bluetooth: "+ cmd);
    //         assert.equal(targetCmd, cmd);
    //     });
    // });

    // describe('智能舵机：xxxxxxx', function() {
    //     targetCmd = "xxxxxxxx";
    //     it(targetCmd + ' should be sent', function() {
    //         var cmd = mcore.setEncodeMotorxxxxx(1,100);
    //         console.log("the data from bluetooth: "+ cmd);
    //         assert.equal(targetCmd, cmd);
    //     });
    // });
  });

  //重启命令
  describe('#它的重启命令', function() {
    describe('重启指令：reset()', function() {
      var targetCmd = dataman.mcore.write.reset[0];
      it(targetCmd + ' should be sent', function() {
        var cmd = mcore.reset();
        assert.equal(targetCmd, cmd);
      });
    });
  });

  //读指令:需要设备返回数据的指令
  describe('#它的读指令', function() {

    describe('读取版本号:readVersion(0)', function() {
      it(' 发送查询版本号的指令', function() {
        var targetCmd = dataman.mcore.read.version[0];
        var cmd = mcore.readVersion(0);
        assert.equal(targetCmd, cmd);
      });

     
      it('检查返回的版本号是否为09.01.013', function(done) {
        var targetVersion = dataman.mcore.read.version[1];
        mcore.getSensorValue('version', function(result) {
          assert.equal(targetVersion, result);
          done();
        });
      });
    });

    describe('超声波传感器：readUltrasonic(0,10)', function() {
      
      it('发送读取端口号6的超声波的指令', function() {
        var targetCmd = dataman.mcore.read.ultrasonic[0];
        var cmd = mcore.readUltrasonic(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口号7的超声波的指令', function() {
        var targetCmd = dataman.mcore.read.ultrasonic[1];
        var cmd = mcore.readUltrasonic(0, 7);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口号8的超声波的指令', function() {
        var targetCmd = dataman.mcore.read.ultrasonic[2];
        var cmd = mcore.readUltrasonic(0, 8);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口号9的超声波的指令', function() {
        var targetCmd = dataman.mcore.read.ultrasonic[3];
        var cmd = mcore.readUltrasonic(0, 9);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口号10的超声波的指令', function() {
        var targetCmd = dataman.mcore.read.ultrasonic[4];
        var cmd = mcore.readUltrasonic(0, 10);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between 0~400', function(done) {
        mcore.getSensorValue('ultrasonic', {
          "port": 6
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
        var targetCmd = dataman.mcore.read.temperature[0];
        var cmd = mcore.readTemperature(0, 6, 1);
        console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口7 slot1 上的温度的指令', function() {
        var targetCmd = dataman.mcore.read.temperature[1];
        var cmd = mcore.readTemperature(0, 7, 1);
        console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口8 slot1 上的温度的指令', function() {
        var targetCmd = dataman.mcore.read.temperature[2];
        var cmd = mcore.readTemperature(0, 8, 1);
        console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口9 slot1 上的温度的指令', function() {
        var targetCmd = dataman.mcore.read.temperature[3];
        var cmd = mcore.readTemperature(0, 9, 1);
        console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口10 slot1 上的温度的指令', function() {
        var targetCmd = dataman.mcore.read.temperature[4];
        var cmd = mcore.readTemperature(0, 10, 1);
        console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口6 slot2 上的温度的指令', function() {
        var targetCmd = dataman.mcore.read.temperature[5];
        var cmd = mcore.readTemperature(0, 6, 2);
        console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between -1024~1024 ', function(done) {
        var resultType;
        mcore.getSensorValue('temperature', {
          "port": 6,
          "slot": 1
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, -1024);  //result >= -1024
          assert.isAtMost(result, 1024);  //result <= 1024
          done();
        });
      });
    });

    describe('光线传感器：readLight(0,6～12)', function() {
      it('发送读取端口6的光线的指令', function() {
        var targetCmd = dataman.mcore.read.light[0];
        var cmd = mcore.readLight(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口7的光线的指令', function() {
        var targetCmd = dataman.mcore.read.light[1];
        var cmd = mcore.readLight(0, 7);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口8的光线的指令', function() {
        var targetCmd = dataman.mcore.read.light[2];
        var cmd = mcore.readLight(0, 8);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口9的光线的指令', function() {
        var targetCmd = dataman.mcore.read.light[3];
        var cmd = mcore.readLight(0, 9);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口10的光线的指令', function() {
        var targetCmd = dataman.mcore.read.light[4];
        var cmd = mcore.readLight(0, 10);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口11的光线的指令', function() {
        var targetCmd = dataman.mcore.read.light[5];
        var cmd = mcore.readLight(0, 11);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口12的光线的指令', function() {
        var targetCmd = dataman.mcore.read.light[6];
        var cmd = mcore.readLight(0, 12);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between 0~1024', function(done) {
        var resultType;
        mcore.getSensorValue('light', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, 0);  //result >= 0
          assert.isAtMost(result, 1024);  //result <= 1024
          done();
        });
      });
    });

    describe('电位器传感器：readPotentionmeter(0,6)', function() {
      it('发送读取端口 6 的电位器传感器的指令', function() {
        var targetCmd = dataman.mcore.read.potentionmeter[0];
        var cmd = mcore.readPotentionmeter(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 7 的电位器传感器的指令', function() {
        var targetCmd = dataman.mcore.read.potentionmeter[1];
        var cmd = mcore.readPotentionmeter(0, 7);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 8 的电位器传感器的指令', function() {
        var targetCmd = dataman.mcore.read.potentionmeter[2];
        var cmd = mcore.readPotentionmeter(0, 8);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 9 的电位器传感器的指令', function() {
        var targetCmd = dataman.mcore.read.potentionmeter[3];
        var cmd = mcore.readPotentionmeter(0, 9);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 10 的电位器传感器的指令', function() {
        var targetCmd = dataman.mcore.read.potentionmeter[4];
        var cmd = mcore.readPotentionmeter(0, 10);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between 0~1000', function(done) {
        var resultType;
        mcore.getSensorValue('potentionmeter', {
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
      it('发送读取端口 6 上的摇杆在 x 轴上的值的指令', function() {
        var targetCmd = dataman.mcore.read.joystick[0];
        var cmd = mcore.readJoystick(0, 6, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 7 上的摇杆在 x 轴上的值的指令', function() {
        var targetCmd = dataman.mcore.read.joystick[1];
        var cmd = mcore.readJoystick(0, 7, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 8 上的摇杆在 x 轴上的值的指令', function() {
        var targetCmd = dataman.mcore.read.joystick[2];
        var cmd = mcore.readJoystick(0, 8, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 9 上的摇杆在 x 轴上的值的指令', function() {
        var targetCmd = dataman.mcore.read.joystick[3];
        var cmd = mcore.readJoystick(0, 9, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 10 上的摇杆在 x 轴上的值的指令', function() {
        var targetCmd = dataman.mcore.read.joystick[4];
        var cmd = mcore.readJoystick(0, 10, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 6 上的摇杆在 y 轴上的值的指令', function() {
        var targetCmd = dataman.mcore.read.joystick[5];
        var cmd = mcore.readJoystick(0, 6, 2);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between -492~492', function(done) {
        var resultType;
        mcore.getSensorValue('joystick', {
          "port": 6,
          "x": 1
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, -492);  //result >= -492
          assert.isAtMost(result, 492);  //result <= 492
          done();
        });
      });
    });

    describe('姿态传感器（陀螺仪）：readGyro(0,1/0,1~3)', function() {
      it('发送读取板载陀螺仪在 x 轴上的值的指令', function() {
        var targetCmdOnboard = dataman.mcore.read.gyro[0];
        var cmd = mcore.readGyro(0, 1, 1);
        assert.equal(targetCmdOnboard, cmd);
      });

      it('发送读取板载陀螺仪在 y 轴上的值的指令', function() {
        var targetCmdOnboard = dataman.mcore.read.gyro[1];
        var cmd = mcore.readGyro(0, 1, 2);
        assert.equal(targetCmdOnboard, cmd);
      });

      it('发送读取板载陀螺仪在 z 轴上的值的指令', function() {
        var targetCmdOnboard = dataman.mcore.read.gyro[2];
        var cmd = mcore.readGyro(0, 1, 3);
        assert.equal(targetCmdOnboard, cmd);
      });

      it('发送读取端口 6 上的陀螺仪在 x 轴上的值的指令', function() {
        var targetCmdExternal = dataman.mcore.read.gyro[3];
        var cmd = mcore.readGyro(0, 0, 1);
        assert.equal(targetCmdExternal, cmd);
      });

      it('发送读取端口 7 上的陀螺仪在 x 轴上的值的指令', function() {
        var targetCmdExternal = dataman.mcore.read.gyro[4];
        var cmd = mcore.readGyro(0, 0, 1);
        assert.equal(targetCmdExternal, cmd);
      });

      it('发送读取端口 8 上的陀螺仪在 x 轴上的值的指令', function() {
        var targetCmdExternal = dataman.mcore.read.gyro[5];
        var cmd = mcore.readGyro(0, 0, 1);
        assert.equal(targetCmdExternal, cmd);
      });

      it('发送读取端口 9 上的陀螺仪在 x 轴上的值的指令', function() {
        var targetCmdExternal = dataman.mcore.read.gyro[6];
        var cmd = mcore.readGyro(0, 0, 1);
        assert.equal(targetCmdExternal, cmd);
      });

      it('发送读取端口 10 上的陀螺仪在 x 轴上的值的指令', function() {
        var targetCmdExternal = dataman.mcore.read.gyro[7];
        var cmd = mcore.readGyro(0, 0, 1);
        assert.equal(targetCmdExternal, cmd);
      });

      it('发送读取端口 6 上的陀螺仪在 y 轴上的值的指令', function() {
        var targetCmdExternal = dataman.mcore.read.gyro[8];
        var cmd = mcore.readGyro(0, 0, 2);
        assert.equal(targetCmdExternal, cmd);
      });

      it('发送读取端口 6 上的陀螺仪在 z 轴上的值的指令', function() {
        var targetCmdExternal = dataman.mcore.read.gyro[9];
        var cmd = mcore.readGyro(0, 0, 3);
        assert.equal(targetCmdExternal, cmd);
      });

      it('it should be a number between -180~180', function(done) {
        var resultType;
        mcore.getSensorValue('gyro', {
          "port": 0 //0表示外接；1表示板载
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, -180);  //result >= -180
          assert.isAtMost(result, 180);  //result <= 180
          done();
        });
      });
    });

    describe('音量传感器：readSound(0,14／6～10)', function() {
      it('发送读取端口6上的音量传感器的值的指令', function() {
        var targetCmdOnboard = dataman.mcore.read.sound[0];
        var cmd = mcore.readSound(0, 6);
        assert.equal(targetCmdOnboard, cmd);
      });

      it('发送读取端口7上的音量传感器的值的指令', function() {
        var targetCmdOnboard = dataman.mcore.read.sound[1];
        var cmd = mcore.readSound(0, 7);
        assert.equal(targetCmdOnboard, cmd);
      });

      it('发送读取端口8上的音量传感器的值的指令', function() {
        var targetCmdOnboard = dataman.mcore.read.sound[2];
        var cmd = mcore.readSound(0, 8);
        assert.equal(targetCmdOnboard, cmd);
      });

      it('发送读取端口9上的音量传感器的值的指令', function() {
        var targetCmdOnboard = dataman.mcore.read.sound[3];
        var cmd = mcore.readSound(0, 9);
        assert.equal(targetCmdOnboard, cmd);
      });

      it('发送读取端口10上的音量传感器的值的指令', function() {
        var targetCmdOnboard = dataman.mcore.read.sound[4];
        var cmd = mcore.readSound(0, 10);
        assert.equal(targetCmdOnboard, cmd);
      });
      
      it('发送读取板载的音量传感器的值的指令', function() {
        var targetCmdOnboard = dataman.mcore.read.sound[5];
        var cmd = mcore.readSound(0, 14);
        assert.equal(targetCmdOnboard, cmd);
      });

      it('it should be a number between 0~1024', function(done) {
        var resultType;
        mcore.getSensorValue('sound', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, 0);  //result >= 0
          assert.isAtMost(result, 1024);  //result <= 1024
          done();
        });
      });
    });

    describe('板载温度传感器：readTemperatureOnBoard(0)', function() {
      it('发送读取板载温度传感器的值的指令', function() {
        var targetCmdOnboard = dataman.mcore.read.temperatureOnBoard[0];
        var cmd = mcore.readTemperatureOnBoard(0);
        assert.equal(targetCmdOnboard, cmd);
      });

      it('it should be a number between -1024～1024', function(done) {
        var resultType;
        mcore.getSensorValue('temperatureOnBoard', function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, -1024);  //result >= -1024
          assert.isAtMost(result, 1024);  //result <= 1024
          done();
        });
      });
    });

    describe('被动式红外传感器：readPirmotion(0, 6)', function() {
      it('发送读取端口 6 上的被动式红外传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.pirmotion[0];
        var cmd = mcore.readPirmotion(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 7 上的被动式红外传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.pirmotion[1];
        var cmd = mcore.readPirmotion(0, 7);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 8 上的被动式红外传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.pirmotion[2];
        var cmd = mcore.readPirmotion(0, 8);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 9 上的被动式红外传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.pirmotion[3];
        var cmd = mcore.readPirmotion(0, 9);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 10 上的被动式红外传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.pirmotion[4];
        var cmd = mcore.readPirmotion(0, 10);
        assert.equal(targetCmd, cmd);
      });

      it('it should be 0 or 1 ', function(done) {
        var resultType;
        mcore.getSensorValue('pirmotion', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.oneOf(result,[0,1])    //result is 0 or 1
          done();
        });
      });
    });


    describe('巡线传感器：readLineFollower(0, 6~10)', function() {
      it('发送读取端口 6 上的巡线传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.lineFollower[0];
        var cmd = mcore.readLineFollower(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 7 上的巡线传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.lineFollower[1];
        var cmd = mcore.readLineFollower(0, 7);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 8 上的巡线传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.lineFollower[2];
        var cmd = mcore.readLineFollower(0, 8);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 9 上的巡线传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.lineFollower[3];
        var cmd = mcore.readLineFollower(0, 9);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 10 上的巡线传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.lineFollower[4];
        var cmd = mcore.readLineFollower(0, 10);
        assert.equal(targetCmd, cmd);
      });      


      it('it should be 0 or 1 or 2 or 3', function(done) {
        var resultType;
        mcore.getSensorValue('lineFollower', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.oneOf(result,[0,1,2,3])    //result is 0 or 1 or 2 or 3
          done();
        });
      });
    });


    describe('限位开关传感器：readLimitSwitch(0, 6～10, 1/2)', function() {
      it('发送读取端口 6 slot 1 上的限位开关的值的指令', function() {
        var targetCmd = dataman.mcore.read.limitSwitch[0];
        var cmd = mcore.readLimitSwitch(0, 6, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 7 slot 1 上的限位开关的值的指令', function() {
        var targetCmd = dataman.mcore.read.limitSwitch[1];
        var cmd = mcore.readLimitSwitch(0, 7, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 8 slot 1 上的限位开关的值的指令', function() {
        var targetCmd = dataman.mcore.read.limitSwitch[2];
        var cmd = mcore.readLimitSwitch(0, 8, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 9 slot 1 上的限位开关的值的指令', function() {
        var targetCmd = dataman.mcore.read.limitSwitch[3];
        var cmd = mcore.readLimitSwitch(0, 9, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 10 slot 1 上的限位开关的值的指令', function() {
        var targetCmd = dataman.mcore.read.limitSwitch[4];
        var cmd = mcore.readLimitSwitch(0, 10, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 6 slot 2 上的限位开关的值的指令', function() {
        var targetCmd = dataman.mcore.read.limitSwitch[5];
        var cmd = mcore.readLimitSwitch(0, 6, 2);
        assert.equal(targetCmd, cmd);
      });

      it('it should be  0 or 1', function(done) {
        var resultType;
        mcore.getSensorValue('limitSwitch', {
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
      it('发送读取端口 6 上的电子罗盘传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.compass[0];
        var cmd = mcore.readCompass(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 7 上的电子罗盘传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.compass[1];
        var cmd = mcore.readCompass(0, 7);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 8 上的电子罗盘传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.compass[2];
        var cmd = mcore.readCompass(0, 8);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 9 上的电子罗盘传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.compass[3];
        var cmd = mcore.readCompass(0, 9);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 10 上的电子罗盘传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.compass[4];
        var cmd = mcore.readCompass(0, 10);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between 0-1024', function(done) {
        var resultType;
        mcore.getSensorValue('compass', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, 0);  //result >= 0
          assert.isAtMost(result, 1024);  //result <= 1024
          done();
        });
      });
    });


    describe('温湿度传感器：readHumiture(0, 6～10, 1／0)', function() {
      it('发送读取端口 6 上的温湿度传感器上的温度的指令', function() {
        var targetCmd = dataman.mcore.read.humiture[0];
        var cmd = mcore.readHumiture(0, 6, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 7 上的温湿度传感器上的温度的指令', function() {
        var targetCmd = dataman.mcore.read.humiture[1];
        var cmd = mcore.readHumiture(0, 7, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 8 上的温湿度传感器上的温度的指令', function() {
        var targetCmd = dataman.mcore.read.humiture[2];
        var cmd = mcore.readHumiture(0, 8, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 9 上的温湿度传感器上的温度的指令', function() {
        var targetCmd = dataman.mcore.read.humiture[3];
        var cmd = mcore.readHumiture(0, 9, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 10 上的温湿度传感器上的温度的指令', function() {
        var targetCmd = dataman.mcore.read.humiture[4];
        var cmd = mcore.readHumiture(0, 10, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 6 上的温湿度传感器上的湿度的指令', function() {
        var targetCmd = dataman.mcore.read.humiture[5];
        var cmd = mcore.readHumiture(0, 6, 0);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between -1024~1024', function(done) {
        var resultType;
        mcore.getSensorValue('humiture', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, -1024);  //result >= -1024
          assert.isAtMost(result, 1024);  //result <= 1024
          done();
        });
      });
    });


    describe('火焰传感器：readFlame(0, 6~10)', function() {
      
      it('发送读取端口 6 上的火焰传感器的值的指令' , function() {
        var targetCmd = dataman.mcore.read.flame[0];
        var cmd = mcore.readFlame(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 7 上的火焰传感器的值的指令' , function() {
        var targetCmd = dataman.mcore.read.flame[1];
        var cmd = mcore.readFlame(0, 7);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 8 上的火焰传感器的值的指令' , function() {
        var targetCmd = dataman.mcore.read.flame[2];
        var cmd = mcore.readFlame(0, 8);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 9 上的火焰传感器的值的指令' , function() {
        var targetCmd = dataman.mcore.read.flame[3];
        var cmd = mcore.readFlame(0, 9);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 10 上的火焰传感器的值的指令' , function() {
        var targetCmd = dataman.mcore.read.flame[4];
        var cmd = mcore.readFlame(0, 10);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between 0~1024', function(done) {
        var resultType;
        mcore.getSensorValue('flame', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, 0);  //result >= 0
          assert.isAtMost(result, 1024);  //result <= 1024
          done();
        });
      });
    });


    describe('气体传感器：readGas(0, 6~10)', function() {
      
      it('发送读取端口 6 上的气体传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.gas[0];
        var cmd = mcore.readGas(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 7 上的气体传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.gas[1];
        var cmd = mcore.readGas(0, 7);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 8 上的气体传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.gas[2];
        var cmd = mcore.readGas(0, 8);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 9 上的气体传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.gas[3];
        var cmd = mcore.readGas(0, 9);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 10 上的气体传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.gas[4];
        var cmd = mcore.readGas(0, 10);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between 0~1024', function(done) {
        var resultType;
        mcore.getSensorValue('gas', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, 0);  //result >= 0
          assert.isAtMost(result, 1024);  //result <= 1024
          done();
        });
      });
    });


    describe('触摸传感器：readTouch(0, 6～10)', function() {
      it('发送读取端口 6 上的触摸传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.touch[0];
        var cmd = mcore.readTouch(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 7 上的触摸传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.touch[1];
        var cmd = mcore.readTouch(0, 7);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 8 上的触摸传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.touch[2];
        var cmd = mcore.readTouch(0, 8);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 9 上的触摸传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.touch[3];
        var cmd = mcore.readTouch(0, 9);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 10 上的触摸传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.touch[4];
        var cmd = mcore.readTouch(0, 10);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number 0 or 1', function(done) {
        var resultType;
        mcore.getSensorValue('touch', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.oneOf(result,[0,1])    //result is 0 or 1
          done();
        });
      });
    });


    describe('按键传感器：readFourKeys(0, 6, 1)', function() {
      it('发送读取端口 6 上第 1 个按键的按键传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.fourKeys[0];
        var cmd = mcore.readFourKeys(0, 6, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 7 上第 1 个按键的按键传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.fourKeys[1];
        var cmd = mcore.readFourKeys(0, 7, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 8 上第 1 个按键的按键传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.fourKeys[2];
        var cmd = mcore.readFourKeys(0, 8, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 9 上第 1 个按键的按键传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.fourKeys[3];
        var cmd = mcore.readFourKeys(0, 9, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 10 上第 1 个按键的按键传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.fourKeys[4];
        var cmd = mcore.readFourKeys(0, 10, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 6 上第 2 个按键的按键传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.fourKeys[5];
        var cmd = mcore.readFourKeys(0, 6, 2);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 6 上第 3 个按键的按键传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.fourKeys[6];
        var cmd = mcore.readFourKeys(0, 6, 3);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 6 上第 4 个按键的按键传感器的值的指令', function() {
        var targetCmd = dataman.mcore.read.fourKeys[7];
        var cmd = mcore.readFourKeys(0, 6, 4);
        assert.equal(targetCmd, cmd);
      });

      it('it should be 0 or 1 ', function(done) {
        var resultType;
        mcore.getSensorValue('fourKeys', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.oneOf(result,[0,1])    //result is 0 or 1
          done();
        });
      });
    });


    describe('读取板载编码电机的速度：readEncoderMotorOnBoard(0, 1／2, 2)', function() {
      it('发送读取板载slot 1 上的速度的指令', function() {
        var targetCmd = dataman.mcore.read.encoderMotorOnBoard[0];
        var cmd = mcore.readEncoderMotorOnBoard(0, 1, 2);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取板载slot 2 上的速度的指令', function() {
        var targetCmd = dataman.mcore.read.encoderMotorOnBoard[1];
        var cmd = mcore.readEncoderMotorOnBoard(0, 2, 2);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between 0~1024', function(done) {
        var resultType;
        mcore.getSensorValue('encoderMotorOnBoard', {
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


    describe('读取板载编码电机的位置：readEncoderMotorOnBoard(0, 1／2, 1)', function() { 
      it('发送读取板载slot 1 上的位置的指令', function() {
        var targetCmd = dataman.mcore.read.encoderMotorOnBoard[2];
        var cmd = mcore.readEncoderMotorOnBoard(0, 1, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取板载slot 2 上的位置的指令', function() {
        var targetCmd = dataman.mcore.read.encoderMotorOnBoard[3];
        var cmd = mcore.readEncoderMotorOnBoard(0, 2, 1);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between -2147483648~2147483647', function(done) {
        var resultType;
        mcore.getSensorValue('encoderMotorOnBoard', {
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


    describe('主板通用命令-读取电压：readFirmwareMode(0, 112)', function() {
      it('发送读取主板电压的指令', function() {
        var targetVoltage = dataman.mcore.read.voltage[0];
        var cmd = mcore.readFirmwareMode(0, 112);
        assert.equal(targetVoltage, cmd);
      });

      it('it should be a number between 0~255', function(done) {
        var resultType;
        mcore.getSensorValue('firmwareMode', {
          "type": 112
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, 0);  //result >= 0
          assert.isAtMost(result, 255);  //result <= 255
          done();
        });
      });
    });


    describe('主板通用命令-读取模式：readFirmwareMode(0, 113)', function() {  
      it('发送读取主板模式的指令', function() {
        var targetMode = dataman.mcore.read.mode[0];
        var cmd = mcore.readFirmwareMode(0, 113);
        assert.equal(targetMode, cmd);
      });

      it('it should be a number between 0～4', function(done) {
        var resultType;
        mcore.getSensorValue('firmwareMode', {
          "type": 113
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.oneOf(result,[0,1,2,3.4])    //result is 0 /1/2/3/4
          done();
        });
      });
    });

    //智能舵机
  });
});