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
    describe('直流电机：setDcMotor(1／2/M1/M2,-255～255)', function() {
      it('设置直流电机端口1速度为255', function() {
        var targetCmd = dataman.orion.write.dcMotor[0];
        var cmd = orion.setDcMotor(1, 255); // (port, speed)
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口2速度为255', function() {
        var targetCmd = dataman.orion.write.dcMotor[1];
        var cmd = orion.setDcMotor(2, 255);
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口M1(09)速度为255', function() {
        var targetCmd = dataman.orion.write.dcMotor[2];
        var cmd = orion.setDcMotor(9, 255);
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口M2(10)速度为255', function() {
        var targetCmd = dataman.orion.write.dcMotor[3];
        var cmd = orion.setDcMotor(10, 255);
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口3(错误端口)速度为255', function() {
        var targetCmd = dataman.orion.write.dcMotor[4];
        var cmd = orion.setDcMotor(3, 255);
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口1速度为-255', function() {
        var targetCmd = dataman.orion.write.dcMotor[5];
        var cmd = orion.setDcMotor(1, -255);
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口1速度为100', function() {
        var targetCmd = dataman.orion.write.dcMotor[6];
        var cmd = orion.setDcMotor(1, 100);
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口1速度为256', function() {
        var targetCmd = dataman.orion.write.dcMotor[7];
        var cmd = orion.setDcMotor(1, 256);
        assert.equal(targetCmd, cmd);
      });

      it('设置直流电机端口1速度为-256', function() {
        var targetCmd = dataman.orion.write.dcMotor[8];
        var cmd = orion.setDcMotor(1, -256);
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

    //缺少接口
    describe('外接编码电机：setEncoderMotor(1～2, 1/2, 0～300, 720)', function() {
      it('外接编码电机port1 slot1 速度为150角度为720', function() {
        var targetCmd = dataman.orion.write.encoder[0];
        var cmd = orion.setEncoderMotor(1, 1, 150, 720);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port2 slot1 速度为150角度为720', function() {
        var targetCmd = dataman.orion.write.encoder[1];
        var cmd = orion.setEncoderMotor(2, 1, 150, 720);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port1 slot2 速度为150角度为720', function() {
        var targetCmd = dataman.orion.write.encoder[3];
        var cmd = orion.setEncoderMotor(1, 2, 150, 720);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port1 slot1 速度为0角度为720', function() {
        var targetCmd = dataman.orion.write.encoder[4];
        var cmd = orion.setEncoderMotor(1, 1, 0, 720);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port1 slot1 速度为300角度为720', function() {
        var targetCmd = dataman.orion.write.encoder[5];
        var cmd = orion.setEncoderMotor(1, 1, 300, 720);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port1 slot1 速度为301角度为720', function() {
        var targetCmd = dataman.orion.write.encoder[6];
        var cmd = orion.setEncoderMotor(1, 1, 301, 720);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port1 slot1 速度为-1角度为720', function() {
        var targetCmd = dataman.orion.write.encoder[7];
        var cmd = orion.setEncoderMotor(1, 1, -1, 720);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port1 slot1 速度为150角度为0', function() {
        var targetCmd = dataman.orion.write.encoder[8];
        var cmd = orion.setEncoderMotor(1, 1, 150, 0);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port1 slot1 速度为150角度为2147483647', function() {
        var targetCmd = dataman.orion.write.encoder[9];
        var cmd = orion.setEncoderMotor(1, 1, 150, 2147483647);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port1 slot1 速度为150角度为-2147483648', function() {
        var targetCmd = dataman.orion.write.encoder[10];
        var cmd = orion.setEncoderMotor(1, 1, 150, -2147483648);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port1 slot1 速度为150角度为2147483648', function() {
        var targetCmd = dataman.orion.write.encoder[11];
        var cmd = orion.setEncoderMotor(1, 1, 150, 2147483648);
        assert.equal(targetCmd, cmd);
      });

      it('外接编码电机port1 slot1 速度为150角度为-2147483649', function() {
        var targetCmd = dataman.orion.write.encoder[12];
        var cmd = orion.setEncoderMotor(1, 1, 150, -2147483649);
        assert.equal(targetCmd, cmd);
      });
    });


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

    // orion 暂不支持
    // describe('摇杆2：setVirtualJoystickForBalance(0,100,100)', function() {
    //     var targetCmd = dataman.orion.write.virtualJoystickForBalance[0];        //"ff 55 08 00 02 34 00 64 00 64 00";
    //     it(targetCmd + ' should be sent', function() {
    //         var cmd = orion.setVirtualJoystickForBalance(0,100,100);
    //         // console.log(cmd + ' has been received');
    //         assert.equal(targetCmd, cmd);
    //     });
    // });

    describe('步进电机：setStepperMotor(1~2/M1/M2,0~3000,-2147483648~2147483647)', function() {
      it('步进电机在端口1速度为3000位移为1000', function() {
        var targetCmd = dataman.orion.write.stepperMotor[0];
        var cmd = orion.setStepperMotor(1, 3000, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口2速度为3000位移为1000', function() {
        var targetCmd = dataman.orion.write.stepperMotor[1];
        var cmd = orion.setStepperMotor(2, 3000, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口3速度为3000位移为1000', function() {
        var targetCmd = dataman.orion.write.stepperMotor[2];
        var cmd = orion.setStepperMotor(3, 3000, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口4速度为3000位移为1000', function() {
        var targetCmd = dataman.orion.write.stepperMotor[3];
        var cmd = orion.setStepperMotor(4, 3000, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口1速度为0位移为1000', function() {
        var targetCmd = dataman.orion.write.stepperMotor[4];
        var cmd = orion.setStepperMotor(1, 0, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口1速度为1500位移为1000', function() {
        var targetCmd = dataman.orion.write.stepperMotor[5];
        var cmd = orion.setStepperMotor(1, 1500, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口1速度为-1位移为1000', function() {
        var targetCmd = dataman.orion.write.stepperMotor[6];
        var cmd = orion.setStepperMotor(1, -1, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口1速度为3001位移为1000', function() {
        var targetCmd = dataman.orion.write.stepperMotor[7];
        var cmd = orion.setStepperMotor(1, 3001, 1000);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口1速度为3000位移为2147483647', function() {
        var targetCmd = dataman.orion.write.stepperMotor[8];
        var cmd = orion.setStepperMotor(1, 3000, 2147483647);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口1速度为3000位移为-2147483648', function() {
        var targetCmd = dataman.orion.write.stepperMotor[9];
        var cmd = orion.setStepperMotor(1, 3000, -2147483648);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口1速度为3000位移为0', function() {
        var targetCmd = dataman.orion.write.stepperMotor[10];
        var cmd = orion.setStepperMotor(1, 3000, 0);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口1速度为3000位移为2147483648', function() {
        var targetCmd = dataman.orion.write.stepperMotor[11];
        var cmd = orion.setStepperMotor(1, 3000, 2147483648);
        assert.equal(targetCmd, cmd);
      });

      it('步进电机在端口1速度为3000位移为-2147483649', function() {
        var targetCmd = dataman.orion.write.stepperMotor[12];
        var cmd = orion.setStepperMotor(1, 3000, -2147483649);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('RGB LED灯条：setLed(3/4/6／7/8,1/2,0~12,0~255,0~255,0~255)', function() {      
      it('将端口号6 slot1的灯条的全部位置上亮起红色', function() {
        var targetCmd = dataman.orion.write.led[0];
        var cmd = orion.setLed(6, 1, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号7 slot1的灯条的全部位置上亮起红色', function() {
        var targetCmd = dataman.orion.write.led[1];
        var cmd = orion.setLed(7, 1, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号8 slot1的灯条的全部位置上亮起红色', function() {
        var targetCmd = dataman.orion.write.led[2];
        var cmd = orion.setLed(8, 1, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号3 slot1的灯条的全部位置上亮起红色', function() {
        var targetCmd = dataman.orion.write.led[3];
        var cmd = orion.setLed(3, 1, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号4 slot1的灯条的全部位置上亮起红色', function() {
        var targetCmd = dataman.orion.write.led[4];
        var cmd = orion.setLed(4, 1, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条的全部位置上亮起红色', function() {
        var targetCmd = dataman.orion.write.led[5];
        var cmd = orion.setLed(6, 2, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条的02位置上亮起红色', function() {
        var targetCmd = dataman.orion.write.led[6];
        var cmd = orion.setLed(6, 2, 2, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条的13位置上亮起红色', function() {
        var targetCmd = dataman.orion.write.led[7];
        var cmd = orion.setLed(6, 2, 13, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条的-1位置上亮起红色', function() {
        var targetCmd = dataman.orion.write.led[8];
        var cmd = orion.setLed(6, 2, -1, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条的全部位置上亮起混合色', function() {
        var targetCmd = dataman.orion.write.led[9];
        var cmd = orion.setLed(6, 2, 0, 125, 100, 55);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条的全部位置上亮起蓝色', function() {
        var targetCmd = dataman.orion.write.led[10];
        var cmd = orion.setLed(6, 2, 0, 0, 0, 255);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条的全部位置上亮起绿色', function() {
        var targetCmd = dataman.orion.write.led[11];
        var cmd = orion.setLed(6, 2, 0, 0, 255, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条的全部位置上亮起白色', function() {
        var targetCmd = dataman.orion.write.led[12];
        var cmd = orion.setLed(6, 2, 0, 255, 255, 255);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条的全部位置上熄灭（不亮）', function() {
        var targetCmd = dataman.orion.write.led[13];
        var cmd = orion.setLed(6, 2, 0, 0, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条的全部位置上亮起红色（超出界限0～255）', function() {
        var targetCmd = dataman.orion.write.led[14];
        var cmd = orion.setLed(6, 2, 0, 256, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口号6 slot2的灯条的全部位置上不亮（熄灭）（超出界限0～255）', function() {
        var targetCmd = dataman.orion.write.led[15];
        var cmd = orion.setLed(6, 2, 0, 0, -1, 0);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('四键led灯：setFourLeds(3/4/6～8，0~12,0~255,0~255,0~255)', function() {      
      it('将端口6上的四键led灯的全部位置上亮起红色', function() {
        var targetCmd = dataman.orion.write.fourLeds[0];
        var cmd = orion.setFourLeds(6, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口7上的四键led灯的全部位置上亮起红色', function() {
        var targetCmd = dataman.orion.write.fourLeds[1];
        var cmd = orion.setFourLeds(7, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口8上的四键led灯的全部位置上亮起红色', function() {
        var targetCmd = dataman.orion.write.fourLeds[2];
        var cmd = orion.setFourLeds(8, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口3上的四键led灯的全部位置上亮起红色', function() {
        var targetCmd = dataman.orion.write.fourLeds[3];
        var cmd = orion.setFourLeds(3, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口4上的四键led灯的全部位置上亮起红色', function() {
        var targetCmd = dataman.orion.write.fourLeds[4];
        var cmd = orion.setFourLeds(4, 0, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的02位置上亮起红色', function() {
        var targetCmd = dataman.orion.write.fourLeds[5];
        var cmd = orion.setFourLeds(6, 2, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的5位置上亮起红色', function() {
        var targetCmd = dataman.orion.write.fourLeds[6];
        var cmd = orion.setFourLeds(6, 5, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的-1位置上亮起红色', function() {
        var targetCmd = dataman.orion.write.fourLeds[7];
        var cmd = orion.setFourLeds(6, -1, 255, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的全部位置上亮起混合色（125，100，55）', function() {
        var targetCmd = dataman.orion.write.fourLeds[8];
        var cmd = orion.setFourLeds(6, 0, 125, 100, 55);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的全部位置上亮起蓝色', function() {
        var targetCmd = dataman.orion.write.fourLeds[9];
        var cmd = orion.setFourLeds(6, 0, 0, 0, 255);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的全部位置上亮起绿色', function() {
        var targetCmd = dataman.orion.write.fourLeds[10];
        var cmd = orion.setFourLeds(6, 0, 0, 255, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的全部位置上亮起白色', function() {
        var targetCmd = dataman.orion.write.fourLeds[11];
        var cmd = orion.setFourLeds(6, 0, 255, 255, 255);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的全部位置上亮起红色（超出界限0～255）', function() {
        var targetCmd = dataman.orion.write.fourLeds[12];
        var cmd = orion.setFourLeds(6, 0, 256, 0, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的全部位置上不亮（熄灭）（超出界限0～255）', function() {
        var targetCmd = dataman.orion.write.fourLeds[13];
        var cmd = orion.setFourLeds(6, 0, 0, -1, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的全部位置上熄灭（不亮）', function() {
        var targetCmd = dataman.orion.write.fourLeds[14];
        var cmd = orion.turnOffFourLeds(6, 0);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的03位置上熄灭（不亮）', function() {
        var targetCmd = dataman.orion.write.fourLeds[15];
        var cmd = orion.turnOffFourLeds(6, 3);
        assert.equal(targetCmd, cmd);
      });

      it('将端口6上的四键led灯的5位置上熄灭（不亮）', function() {
        var targetCmd = dataman.orion.write.fourLeds[16];
        var cmd = orion.turnOffFourLeds(6, 5);
        assert.equal(targetCmd, cmd);
      });

       it('将端口6上的四键led灯的-1位置上熄灭（不亮）', function() {
        var targetCmd = dataman.orion.write.fourLeds[17];
        var cmd = orion.setFourLeds(6, -1);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('主板通用命令：setFirmwareMode(0～4)', function() {
      it('主板通用命令-设置模式为蓝牙模式', function() {
        var targetCmd = dataman.orion.write.firmwareModeBlueTooth[0];
        var cmd = orion.setFirmwareMode(0);
        assert.equal(targetCmd, cmd);
      });

      it("主板通用命令-设置模式为自动避障", function() {
        var targetCmd = dataman.orion.write.firmwareModeObstacle[0];
        var cmd = orion.setFirmwareMode(1);
        assert.equal(targetCmd, cmd);
      });

      it("主板通用命令-设置模式为平衡车 ", function() {
        var targetCmd = dataman.orion.write.firmwareModeBalance[0];
        var cmd = orion.setFirmwareMode(2);
        assert.equal(targetCmd, cmd);
      });

      it("主板通用命令-设置模式为红外线 ", function() {
        var targetCmd = dataman.orion.write.firmwareModeInfrared[0];
        var cmd = orion.setFirmwareMode(3);
        assert.equal(targetCmd, cmd);
      });

      it("主板通用命令-设置模式为巡线 ", function() {
        var targetCmd = dataman.orion.write.firmwareModeLineFollow[0];
        var cmd = orion.setFirmwareMode(4);
        assert.equal(targetCmd, cmd);
      });

      it("主板通用命令-设置模式为5（错误模式参数） ", function() {
        var targetCmd = dataman.orion.write.firmwareModeWrong[0];
        var cmd = orion.setFirmwareMode(5);
        assert.equal(targetCmd, cmd);
      });

      it("主板通用命令-设置模式为-1（错误模式参数） ", function() {
        var targetCmd = dataman.orion.write.firmwareModeWrong[1];
        var cmd = orion.setFirmwareMode(-1);
        assert.equal(targetCmd, cmd);
      });

      it("主板通用命令-设置模式为3.5（错误模式参数） ", function() {
        var targetCmd = dataman.orion.write.firmwareModeWrong[2];
        var cmd = orion.setFirmwareMode(3.5);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('数字舵机：setServoMotor(3/4/6~8,1/2,0~180)', function() {
      it('数字舵机在端口6 slot1 旋转角度90', function() {
        var targetCmd = dataman.orion.write.servo[0];
        var cmd = orion.setServoMotor(6, 1, 90);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口7 slot1 旋转角度90', function() {
        var targetCmd = dataman.orion.write.servo[1];
        var cmd = orion.setServoMotor(7, 1, 90);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口8 slot1 旋转角度90', function() {
        var targetCmd = dataman.orion.write.servo[2];
        var cmd = orion.setServoMotor(8, 1, 90);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口3 slot1 旋转角度90', function() {
        var targetCmd = dataman.orion.write.servo[3];
        var cmd = orion.setServoMotor(3, 1, 90);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口4 slot1 旋转角度90', function() {
        var targetCmd = dataman.orion.write.servo[4];
        var cmd = orion.setServoMotor(4, 1, 90);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口6 slot2 旋转角度90', function() {
        var targetCmd = dataman.orion.write.servo[5];
        var cmd = orion.setServoMotor(6, 2, 90);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口6 slot1 旋转角度0', function() {
        var targetCmd = dataman.orion.write.servo[6];
        var cmd = orion.setServoMotor(6, 1, 0);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口6 slot1 旋转角度180', function() {
        var targetCmd = dataman.orion.write.servo[7];
        var cmd = orion.setServoMotor(6, 1, 180);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口6 slot1 旋转角度181', function() {
        var targetCmd = dataman.orion.write.servo[8];
        var cmd = orion.setServoMotor(6, 1, 181);
        assert.equal(targetCmd, cmd);
      });

      it('数字舵机在端口6 slot1 旋转角度-1', function() {
        var targetCmd = dataman.orion.write.servo[9];
        var cmd = orion.setServoMotor(6, 1, -1);
        assert.equal(targetCmd, cmd);
      });
    });

    describe('四位七段数码管：setSevenSegment(3~6，-2147483648～2147483647)', function() {
      it('四位七段数码管在端口6 显示数值100', function() {
        var targetCmd = dataman.orion.write.sevenSegment[0];
        var cmd = orion.setSevenSegment(6, 100);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口5 显示数值100', function() {
        var targetCmd = dataman.orion.write.sevenSegment[1];
        var cmd = orion.setSevenSegment(5, 100);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口4 显示数值200', function() {
        var targetCmd = dataman.orion.write.sevenSegment[2];
        var cmd = orion.setSevenSegment(4, 100);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口3 显示数值300', function() {
        var targetCmd = dataman.orion.write.sevenSegment[3];
        var cmd = orion.setSevenSegment(3, 100);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值0', function() {
        var targetCmd = dataman.orion.write.sevenSegment[5];
        var cmd = orion.setSevenSegment(6, 0);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值-100', function() {
        var targetCmd = dataman.orion.write.sevenSegment[6];
        var cmd = orion.setSevenSegment(6, -100);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值2147483647', function() {
        var targetCmd = dataman.orion.write.sevenSegment[7];
        var cmd = orion.setSevenSegment(6, 2147483647);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值-2147483648', function() {
        var targetCmd = dataman.orion.write.sevenSegment[8];
        var cmd = orion.setSevenSegment(6, -2147483648);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值1.63', function() {
        var targetCmd = dataman.orion.write.sevenSegment[9];
        var cmd = orion.setSevenSegment(6, 1.63);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值10.678', function() {
        var targetCmd = dataman.orion.write.sevenSegment[10];
        var cmd = orion.setSevenSegment(6, 10.666);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值2147483648', function() {
        var targetCmd = dataman.orion.write.sevenSegment[11];
        var cmd = orion.setSevenSegment(6, 2147483648);
        assert.equal(targetCmd, cmd);
      });

      it('四位七段数码管在端口6 显示数值-2147483649', function() {
        var targetCmd = dataman.orion.write.sevenSegment[12];
        var cmd = orion.setSevenSegment(6, -2147483649);
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

    describe('快门线模块：setShutter(3~8, 0~3)', function() {
      it('在端口6的快门线设置为按下快门00 ', function() {
        var targetCmd = dataman.orion.write.shutter[0];
        var cmd = orion.setShutter(6, 0);
        assert.equal(targetCmd, cmd);
      });

      it('在端口7的快门线设置为按下快门00 ', function() {
        var targetCmd = dataman.orion.write.shutter[1];
        var cmd = orion.setShutter(7, 0);
        assert.equal(targetCmd, cmd);
      });

      it('在端口8的快门线设置为按下快门00 ', function() {
        var targetCmd = dataman.orion.write.shutter[2];
        var cmd = orion.setShutter(8, 0);
        assert.equal(targetCmd, cmd);
      });

      it('在端口3的快门线设置为按下快门00 ', function() {
        var targetCmd = dataman.orion.write.shutter[3];
        var cmd = orion.setShutter(3, 0);
        assert.equal(targetCmd, cmd);
      });

      it('在端口4的快门线设置为按下快门00 ', function() {
        var targetCmd = dataman.orion.write.shutter[4];
        var cmd = orion.setShutter(4, 0);
        assert.equal(targetCmd, cmd);
      });
      
      it('在端口5的快门线设置为松开快门01 ', function() {
        var targetCmd = dataman.orion.write.shutter[5];
        var cmd = orion.setShutter(5, 1);
        assert.equal(targetCmd, cmd);
      });

      it('在端口6的快门线设置为开始对焦02 ', function() {
        var targetCmd = dataman.orion.write.shutter[6];
        var cmd = orion.setShutter(6, 2);
        assert.equal(targetCmd, cmd);
      });

      it('在端口6的快门线设置为停止对焦03 ', function() {
        var targetCmd = dataman.orion.write.shutter[7];
        var cmd = orion.setShutter(6, 3);
        assert.equal(targetCmd, cmd);
      });

      it('在端口6的快门线设置为错误模式05 ', function() {
        var targetCmd = dataman.orion.write.shutter[8];
        var cmd = orion.setShutter(6, 5);
        assert.equal(targetCmd, cmd);
      });

      it('在端口6的快门线设置为错误模式-1 ', function() {
        var targetCmd = dataman.orion.write.shutter[9];
        var cmd = orion.setShutter(6, -1);
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
        assert.equal(targetCmd, cmd);
      });
    });
  });


  //读指令:需要设备返回数据的指令
  describe('#它的读指令', function() {
    describe('读取版本号:readVersion(0)', function() {
      it(' 发送查询版本号的指令', function() {
        var targetCmd = dataman.orion.read.version[0];
        var cmd = orion.readVersion(0);
        assert.equal(targetCmd, cmd);
      });

     
      it('检查返回的版本号是否为0a.01.004', function(done) {
        var targetVersion = dataman.orion.read.version[1];
        orion.getSensorValue('version', function(result) {
          assert.equal(targetVersion, result);
          done();
        });
      });
    });


    describe('超声波传感器：readUltrasonic(0,3~8)', function() {
      
      it('发送读取端口号6的超声波的指令', function() {
        var targetCmd = dataman.orion.read.ultrasonic[0];
        var cmd = orion.readUltrasonic(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口号7的超声波的指令', function() {
        var targetCmd = dataman.orion.read.ultrasonic[1];
        var cmd = orion.readUltrasonic(0, 7);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口号8的超声波的指令', function() {
        var targetCmd = dataman.orion.read.ultrasonic[2];
        var cmd = orion.readUltrasonic(0, 8);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口号3的超声波的指令', function() {
        var targetCmd = dataman.orion.read.ultrasonic[3];
        var cmd = orion.readUltrasonic(0, 3);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口号4的超声波的指令', function() {
        var targetCmd = dataman.orion.read.ultrasonic[4];
        var cmd = orion.readUltrasonic(0, 4);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口号5的超声波的指令', function() {
        var targetCmd = dataman.orion.read.ultrasonic[5];
        var cmd = orion.readUltrasonic(0, 5);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between 0~400', function(done) {
        orion.getSensorValue('ultrasonic', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, 0);  //result >= 0
          assert.isAtMost(result, 400);  //result <= 400
          done();//setTimeout(done, 3000);
        });
      });
    });

    describe('温度传感器：readTemperature(0,3～8,1/2)', function() {
      it('发送读取端口6 slot1 上的温度的指令', function() {
        var targetCmd = dataman.orion.read.temperature[0];
        var cmd = orion.readTemperature(0, 6, 1);
        console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口7 slot1 上的温度的指令', function() {
        var targetCmd = dataman.orion.read.temperature[1];
        var cmd = orion.readTemperature(0, 7, 1);
        console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口8 slot1 上的温度的指令', function() {
        var targetCmd = dataman.orion.read.temperature[2];
        var cmd = orion.readTemperature(0, 8, 1);
        console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口3 slot1 上的温度的指令', function() {
        var targetCmd = dataman.orion.read.temperature[3];
        var cmd = orion.readTemperature(0, 3, 1);
        console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口4 slot1 上的温度的指令', function() {
        var targetCmd = dataman.orion.read.temperature[4];
        var cmd = orion.readTemperature(0, 4, 1);
        console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口5 slot2 上的温度的指令', function() {
        var targetCmd = dataman.orion.read.temperature[5];
        var cmd = orion.readTemperature(0, 5, 2);
        console.log(cmd + ' has been sent');
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between -1024~1024 ', function(done) {
        var resultType;
        orion.getSensorValue('temperature', {
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

    describe('光线传感器：readLight(0,6～8)', function() {
      it('发送读取端口6的光线的指令', function() {
        var targetCmd = dataman.orion.read.light[0];
        var cmd = orion.readLight(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口7的光线的指令', function() {
        var targetCmd = dataman.orion.read.light[1];
        var cmd = orion.readLight(0, 7);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口8的光线的指令', function() {
        var targetCmd = dataman.orion.read.light[2];
        var cmd = orion.readLight(0, 8);
        assert.equal(targetCmd, cmd);
      });

      // it('发送读取端口9的光线的指令', function() {
      //   var targetCmd = dataman.orion.read.light[3];
      //   var cmd = orion.readLight(0, 9);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('发送读取端口10的光线的指令', function() {
      //   var targetCmd = dataman.orion.read.light[4];
      //   var cmd = orion.readLight(0, 10);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('发送读取端口11的光线的指令', function() {
      //   var targetCmd = dataman.orion.read.light[5];
      //   var cmd = orion.readLight(0, 11);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('发送读取端口12的光线的指令', function() {
      //   var targetCmd = dataman.orion.read.light[6];
      //   var cmd = orion.readLight(0, 12);
      //   assert.equal(targetCmd, cmd);
      // });

      it('it should be a number between 0~1024', function(done) {
        var resultType;
        orion.getSensorValue('light', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, 0);  //result >= 0
          assert.isAtMost(result, 1024);  //result <= 1024
          done();
        });
      });
    });

    describe('电位器传感器：readPotentionmeter(0,6~8)', function() {
      it('发送读取端口 6 的电位器传感器的指令', function() {
        var targetCmd = dataman.orion.read.potentionmeter[0];
        var cmd = orion.readPotentionmeter(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 7 的电位器传感器的指令', function() {
        var targetCmd = dataman.orion.read.potentionmeter[1];
        var cmd = orion.readPotentionmeter(0, 7);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 8 的电位器传感器的指令', function() {
        var targetCmd = dataman.orion.read.potentionmeter[2];
        var cmd = orion.readPotentionmeter(0, 8);
        assert.equal(targetCmd, cmd);
      });

      // it('发送读取端口 9 的电位器传感器的指令', function() {
      //   var targetCmd = dataman.orion.read.potentionmeter[3];
      //   var cmd = orion.readPotentionmeter(0, 9);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('发送读取端口 10 的电位器传感器的指令', function() {
      //   var targetCmd = dataman.orion.read.potentionmeter[4];
      //   var cmd = orion.readPotentionmeter(0, 10);
      //   assert.equal(targetCmd, cmd);
      // });

      it('it should be a number between 0~1000', function(done) {
        var resultType;
        orion.getSensorValue('potentionmeter', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, 0);  //result >= 0
          assert.isAtMost(result, 1000);  //result <= 1000
          done();
        });
      });
    });

    describe('摇杆传感器：readJoystick(0,6~8,1)', function() {
      it('发送读取端口 6 上的摇杆在 x 轴上的值的指令', function() {
        var targetCmd = dataman.orion.read.joystick[0];
        var cmd = orion.readJoystick(0, 6, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 7 上的摇杆在 x 轴上的值的指令', function() {
        var targetCmd = dataman.orion.read.joystick[1];
        var cmd = orion.readJoystick(0, 7, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 8 上的摇杆在 x 轴上的值的指令', function() {
        var targetCmd = dataman.orion.read.joystick[2];
        var cmd = orion.readJoystick(0, 8, 1);
        assert.equal(targetCmd, cmd);
      });

      // it('发送读取端口 9 上的摇杆在 x 轴上的值的指令', function() {
      //   var targetCmd = dataman.orion.read.joystick[3];
      //   var cmd = orion.readJoystick(0, 9, 1);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('发送读取端口 10 上的摇杆在 x 轴上的值的指令', function() {
      //   var targetCmd = dataman.orion.read.joystick[4];
      //   var cmd = orion.readJoystick(0, 10, 1);
      //   assert.equal(targetCmd, cmd);
      // });

      it('发送读取端口 6 上的摇杆在 y 轴上的值的指令', function() {
        var targetCmd = dataman.orion.read.joystick[5];
        var cmd = orion.readJoystick(0, 6, 2);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between -492~492', function(done) {
        var resultType;
        orion.getSensorValue('joystick', {
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

    describe('姿态传感器（陀螺仪）：readGyro(0,3/4/6/7/8,1~3)', function() {
      // it('发送读取板载陀螺仪在 x 轴上的值的指令', function() {
      //   var targetCmdOnboard = dataman.orion.read.gyro[0];
      //   var cmd = orion.readGyro(0, 1, 1);
      //   assert.equal(targetCmdOnboard, cmd);
      // });

      // it('发送读取板载陀螺仪在 y 轴上的值的指令', function() {
      //   var targetCmdOnboard = dataman.orion.read.gyro[1];
      //   var cmd = orion.readGyro(0, 1, 2);
      //   assert.equal(targetCmdOnboard, cmd);
      // });

      // it('发送读取板载陀螺仪在 z 轴上的值的指令', function() {
      //   var targetCmdOnboard = dataman.orion.read.gyro[2];
      //   var cmd = orion.readGyro(0, 1, 3);
      //   assert.equal(targetCmdOnboard, cmd);
      // });

      it('发送读取端口 6 上的陀螺仪在 x 轴上的值的指令', function() {
        var targetCmdExternal = dataman.orion.read.gyro[3];
        var cmd = orion.readGyro(0, 0, 1);
        assert.equal(targetCmdExternal, cmd);
      });

      it('发送读取端口 7 上的陀螺仪在 x 轴上的值的指令', function() {
        var targetCmdExternal = dataman.orion.read.gyro[4];
        var cmd = orion.readGyro(0, 0, 1);
        assert.equal(targetCmdExternal, cmd);
      });

      it('发送读取端口 8 上的陀螺仪在 x 轴上的值的指令', function() {
        var targetCmdExternal = dataman.orion.read.gyro[5];
        var cmd = orion.readGyro(0, 0, 1);
        assert.equal(targetCmdExternal, cmd);
      });

      it('发送读取端口 3 上的陀螺仪在 x 轴上的值的指令', function() {
        var targetCmdExternal = dataman.orion.read.gyro[6];
        var cmd = orion.readGyro(0, 0, 1);
        assert.equal(targetCmdExternal, cmd);
      });

      it('发送读取端口 4 上的陀螺仪在 x 轴上的值的指令', function() {
        var targetCmdExternal = dataman.orion.read.gyro[7];
        var cmd = orion.readGyro(0, 0, 1);
        assert.equal(targetCmdExternal, cmd);
      });

      it('发送读取端口 6 上的陀螺仪在 y 轴上的值的指令', function() {
        var targetCmdExternal = dataman.orion.read.gyro[8];
        var cmd = orion.readGyro(0, 0, 2);
        assert.equal(targetCmdExternal, cmd);
      });

      it('发送读取端口 6 上的陀螺仪在 z 轴上的值的指令', function() {
        var targetCmdExternal = dataman.orion.read.gyro[9];
        var cmd = orion.readGyro(0, 0, 3);
        assert.equal(targetCmdExternal, cmd);
      });

      it('it should be a number between -180~180', function(done) {
        var resultType;
        orion.getSensorValue('gyro', {
          "port": 0 //0表示外接；1表示板载
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, -180);  //result >= -180
          assert.isAtMost(result, 180);  //result <= 180
          done();
        });
      });
    });

    describe('音量传感器：readSound(0,6～8)', function() {
      it('发送读取端口6上的音量传感器的值的指令', function() {
        var targetCmdOnboard = dataman.orion.read.sound[0];
        var cmd = orion.readSound(0, 6);
        assert.equal(targetCmdOnboard, cmd);
      });

      it('发送读取端口7上的音量传感器的值的指令', function() {
        var targetCmdOnboard = dataman.orion.read.sound[1];
        var cmd = orion.readSound(0, 7);
        assert.equal(targetCmdOnboard, cmd);
      });

      it('发送读取端口8上的音量传感器的值的指令', function() {
        var targetCmdOnboard = dataman.orion.read.sound[2];
        var cmd = orion.readSound(0, 8);
        assert.equal(targetCmdOnboard, cmd);
      });

      // it('发送读取端口9上的音量传感器的值的指令', function() {
      //   var targetCmdOnboard = dataman.orion.read.sound[3];
      //   var cmd = orion.readSound(0, 9);
      //   assert.equal(targetCmdOnboard, cmd);
      // });

      // it('发送读取端口10上的音量传感器的值的指令', function() {
      //   var targetCmdOnboard = dataman.orion.read.sound[4];
      //   var cmd = orion.readSound(0, 10);
      //   assert.equal(targetCmdOnboard, cmd);
      // });
      
      // it('发送读取板载的音量传感器的值的指令', function() {
      //   var targetCmdOnboard = dataman.orion.read.sound[5];
      //   var cmd = orion.readSound(0, 14);
      //   assert.equal(targetCmdOnboard, cmd);
      // });

      it('it should be a number between 0~1024', function(done) {
        var resultType;
        orion.getSensorValue('sound', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, 0);  //result >= 0
          assert.isAtMost(result, 1024);  //result <= 1024
          done();
        });
      });
    });

    // describe('板载温度传感器：readTemperatureOnBoard(0)', function() {
    //   it('发送读取板载温度传感器的值的指令', function() {
    //     var targetCmdOnboard = dataman.orion.read.temperatureOnBoard[0];
    //     var cmd = orion.readTemperatureOnBoard(0);
    //     assert.equal(targetCmdOnboard, cmd);
    //   });

    //   it('it should be a number between -1024～1024', function(done) {
    //     var resultType;
    //     orion.getSensorValue('temperatureOnBoard', function(result) {
    //       assert.isNumber(result);      //result is a number
    //       assert.isAtLeast(result, -1024);  //result >= -1024
    //       assert.isAtMost(result, 1024);  //result <= 1024
    //       done();
    //     });
    //   });
    // });

    describe('被动式红外传感器：readPirmotion(0, 3~6)', function() {
      it('发送读取端口 6 上的被动式红外传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.pirmotion[0];
        var cmd = orion.readPirmotion(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 5 上的被动式红外传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.pirmotion[1];
        var cmd = orion.readPirmotion(0, 5);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 4 上的被动式红外传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.pirmotion[2];
        var cmd = orion.readPirmotion(0, 4);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 3 上的被动式红外传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.pirmotion[3];
        var cmd = orion.readPirmotion(0, 3);
        assert.equal(targetCmd, cmd);
      });

      // it('发送读取端口 10 上的被动式红外传感器的值的指令', function() {
      //   var targetCmd = dataman.orion.read.pirmotion[4];
      //   var cmd = orion.readPirmotion(0, 10);
      //   assert.equal(targetCmd, cmd);
      // });

      it('it should be 0 or 1 ', function(done) {
        var resultType;
        orion.getSensorValue('pirmotion', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.oneOf(result,[0,1])    //result is 0 or 1
          done();
        });
      });
    });


    describe('巡线传感器：readLineFollower(0, 3／4／6)', function() {
      it('发送读取端口 6 上的巡线传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.lineFollower[0];
        var cmd = orion.readLineFollower(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 4 上的巡线传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.lineFollower[1];
        var cmd = orion.readLineFollower(0, 4);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 3 上的巡线传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.lineFollower[2];
        var cmd = orion.readLineFollower(0, 3);
        assert.equal(targetCmd, cmd);
      });

      // it('发送读取端口 9 上的巡线传感器的值的指令', function() {
      //   var targetCmd = dataman.orion.read.lineFollower[3];
      //   var cmd = orion.readLineFollower(0, 9);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('发送读取端口 10 上的巡线传感器的值的指令', function() {
      //   var targetCmd = dataman.orion.read.lineFollower[4];
      //   var cmd = orion.readLineFollower(0, 10);
      //   assert.equal(targetCmd, cmd);
      // });      


      it('it should be 0 or 1 or 2 or 3', function(done) {
        var resultType;
        orion.getSensorValue('lineFollower', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.oneOf(result,[0,1,2,3])    //result is 0 or 1 or 2 or 3
          done();
        });
      });
    });


    describe('限位开关传感器：readLimitSwitch(0, 3～8, 1/2)', function() {
      it('发送读取端口 6 slot 1 上的限位开关的值的指令', function() {
        var targetCmd = dataman.orion.read.limitSwitch[0];
        var cmd = orion.readLimitSwitch(0, 6, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 7 slot 1 上的限位开关的值的指令', function() {
        var targetCmd = dataman.orion.read.limitSwitch[1];
        var cmd = orion.readLimitSwitch(0, 7, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 8 slot 1 上的限位开关的值的指令', function() {
        var targetCmd = dataman.orion.read.limitSwitch[2];
        var cmd = orion.readLimitSwitch(0, 8, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 3 slot 1 上的限位开关的值的指令', function() {
        var targetCmd = dataman.orion.read.limitSwitch[3];
        var cmd = orion.readLimitSwitch(0, 3, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 4 slot 1 上的限位开关的值的指令', function() {
        var targetCmd = dataman.orion.read.limitSwitch[4];
        var cmd = orion.readLimitSwitch(0, 4, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 5 slot 2 上的限位开关的值的指令', function() {
        var targetCmd = dataman.orion.read.limitSwitch[5];
        var cmd = orion.readLimitSwitch(0, 5, 2);
        assert.equal(targetCmd, cmd);
      });

      it('it should be  0 or 1', function(done) {
        var resultType;
        orion.getSensorValue('limitSwitch', {
          "port": 6,
          "slot": 2
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.oneOf(result,[0,1])    //result is 0 or 1
          done();
        });
      });
    });

    // describe('电子罗盘传感器：readCompass(0, 6)', function() {
    //   it('发送读取端口 6 上的电子罗盘传感器的值的指令', function() {
    //     var targetCmd = dataman.orion.read.compass[0];
    //     var cmd = orion.readCompass(0, 6);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('发送读取端口 7 上的电子罗盘传感器的值的指令', function() {
    //     var targetCmd = dataman.orion.read.compass[1];
    //     var cmd = orion.readCompass(0, 7);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('发送读取端口 8 上的电子罗盘传感器的值的指令', function() {
    //     var targetCmd = dataman.orion.read.compass[2];
    //     var cmd = orion.readCompass(0, 8);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('发送读取端口 9 上的电子罗盘传感器的值的指令', function() {
    //     var targetCmd = dataman.orion.read.compass[3];
    //     var cmd = orion.readCompass(0, 9);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('发送读取端口 10 上的电子罗盘传感器的值的指令', function() {
    //     var targetCmd = dataman.orion.read.compass[4];
    //     var cmd = orion.readCompass(0, 10);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('it should be a number between 0-1024', function(done) {
    //     var resultType;
    //     orion.getSensorValue('compass', {
    //       "port": 6
    //     }, function(result) {
    //       assert.isNumber(result);      //result is a number
    //       assert.isAtLeast(result, 0);  //result >= 0
    //       assert.isAtMost(result, 1024);  //result <= 1024
    //       done();
    //     });
    //   });
    // });


    describe('温湿度传感器：readHumiture(0, 3～8, 1／0)', function() {
      it('发送读取端口 6 上的温湿度传感器上的温度的指令', function() {
        var targetCmd = dataman.orion.read.humiture[0];
        var cmd = orion.readHumiture(0, 6, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 7 上的温湿度传感器上的温度的指令', function() {
        var targetCmd = dataman.orion.read.humiture[1];
        var cmd = orion.readHumiture(0, 7, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 8 上的温湿度传感器上的温度的指令', function() {
        var targetCmd = dataman.orion.read.humiture[2];
        var cmd = orion.readHumiture(0, 8, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 3 上的温湿度传感器上的温度的指令', function() {
        var targetCmd = dataman.orion.read.humiture[3];
        var cmd = orion.readHumiture(0, 3, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 4 上的温湿度传感器上的温度的指令', function() {
        var targetCmd = dataman.orion.read.humiture[4];
        var cmd = orion.readHumiture(0, 4, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 5 上的温湿度传感器上的湿度的指令', function() {
        var targetCmd = dataman.orion.read.humiture[5];
        var cmd = orion.readHumiture(0, 5, 0);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number between -1024~1024', function(done) {
        var resultType;
        orion.getSensorValue('humiture', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, -1024);  //result >= -1024
          assert.isAtMost(result, 1024);  //result <= 1024
          done();
        });
      });
    });


    describe('火焰传感器：readFlame(0, 6~8)', function() {
      
      it('发送读取端口 6 上的火焰传感器的值的指令' , function() {
        var targetCmd = dataman.orion.read.flame[0];
        var cmd = orion.readFlame(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 7 上的火焰传感器的值的指令' , function() {
        var targetCmd = dataman.orion.read.flame[1];
        var cmd = orion.readFlame(0, 7);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 8 上的火焰传感器的值的指令' , function() {
        var targetCmd = dataman.orion.read.flame[2];
        var cmd = orion.readFlame(0, 8);
        assert.equal(targetCmd, cmd);
      });

      // it('发送读取端口 9 上的火焰传感器的值的指令' , function() {
      //   var targetCmd = dataman.orion.read.flame[3];
      //   var cmd = orion.readFlame(0, 9);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('发送读取端口 10 上的火焰传感器的值的指令' , function() {
      //   var targetCmd = dataman.orion.read.flame[4];
      //   var cmd = orion.readFlame(0, 10);
      //   assert.equal(targetCmd, cmd);
      // });

      it('it should be a number between 0~1024', function(done) {
        var resultType;
        orion.getSensorValue('flame', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, 0);  //result >= 0
          assert.isAtMost(result, 1024);  //result <= 1024
          done();
        });
      });
    });


    describe('气体传感器：readGas(0, 6~8)', function() {
      
      it('发送读取端口 6 上的气体传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.gas[0];
        var cmd = orion.readGas(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 7 上的气体传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.gas[1];
        var cmd = orion.readGas(0, 7);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 8 上的气体传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.gas[2];
        var cmd = orion.readGas(0, 8);
        assert.equal(targetCmd, cmd);
      });

      // it('发送读取端口 9 上的气体传感器的值的指令', function() {
      //   var targetCmd = dataman.orion.read.gas[3];
      //   var cmd = orion.readGas(0, 9);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('发送读取端口 10 上的气体传感器的值的指令', function() {
      //   var targetCmd = dataman.orion.read.gas[4];
      //   var cmd = orion.readGas(0, 10);
      //   assert.equal(targetCmd, cmd);
      // });

      it('it should be a number between 0~1024', function(done) {
        var resultType;
        orion.getSensorValue('gas', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.isAtLeast(result, 0);  //result >= 0
          assert.isAtMost(result, 1024);  //result <= 1024
          done();
        });
      });
    });


    describe('触摸传感器：readTouch(0, 3～8)', function() {
      it('发送读取端口 6 上的触摸传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.touch[0];
        var cmd = orion.readTouch(0, 6);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 7 上的触摸传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.touch[1];
        var cmd = orion.readTouch(0, 7);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 8 上的触摸传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.touch[2];
        var cmd = orion.readTouch(0, 8);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 3 上的触摸传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.touch[3];
        var cmd = orion.readTouch(0, 3);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 4 上的触摸传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.touch[4];
        var cmd = orion.readTouch(0, 4);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 5 上的触摸传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.touch[5];
        var cmd = orion.readTouch(0, 5);
        assert.equal(targetCmd, cmd);
      });

      it('it should be a number 0 or 1', function(done) {
        var resultType;
        orion.getSensorValue('touch', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.oneOf(result,[0,1])    //result is 0 or 1
          done();
        });
      });
    });


    describe('按键传感器：readFourKeys(0, 3/4/6~8, 1)', function() {
      it('发送读取端口 6 上第 1 个按键的按键传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.fourKeys[0];
        var cmd = orion.readFourKeys(0, 6, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 7 上第 1 个按键的按键传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.fourKeys[1];
        var cmd = orion.readFourKeys(0, 7, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 8 上第 1 个按键的按键传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.fourKeys[2];
        var cmd = orion.readFourKeys(0, 8, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 3 上第 1 个按键的按键传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.fourKeys[3];
        var cmd = orion.readFourKeys(0, 3, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 4 上第 1 个按键的按键传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.fourKeys[4];
        var cmd = orion.readFourKeys(0, 4, 1);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 6 上第 2 个按键的按键传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.fourKeys[5];
        var cmd = orion.readFourKeys(0, 6, 2);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 6 上第 3 个按键的按键传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.fourKeys[6];
        var cmd = orion.readFourKeys(0, 6, 3);
        assert.equal(targetCmd, cmd);
      });

      it('发送读取端口 6 上第 4 个按键的按键传感器的值的指令', function() {
        var targetCmd = dataman.orion.read.fourKeys[7];
        var cmd = orion.readFourKeys(0, 6, 4);
        assert.equal(targetCmd, cmd);
      });

      it('it should be 0 or 1 ', function(done) {
        var resultType;
        orion.getSensorValue('fourKeys', {
          "port": 6
        }, function(result) {
          assert.isNumber(result);      //result is a number
          assert.oneOf(result,[0,1])    //result is 0 or 1
          done();
        });
      });
    });


    // describe('读取板载编码电机的速度：readEncoderMotorOnBoard(0, 1／2, 2)', function() {
    //   it('发送读取板载slot 1 上的速度的指令', function() {
    //     var targetCmd = dataman.orion.read.encoderMotorOnBoard[0];
    //     var cmd = orion.readEncoderMotorOnBoard(0, 1, 2);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('发送读取板载slot 2 上的速度的指令', function() {
    //     var targetCmd = dataman.orion.read.encoderMotorOnBoard[1];
    //     var cmd = orion.readEncoderMotorOnBoard(0, 2, 2);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('it should be a number between 0~1024', function(done) {
    //     var resultType;
    //     orion.getSensorValue('encoderMotorOnBoard', {
    //       "port": 0,
    //       "slot": 1
    //     }, function(result) {
    //       assert.isNumber(result);      //result is a number
    //       assert.isAtLeast(result, 0);  //result >= 0
    //       assert.isAtMost(result, 1024);  //result <= 1024
    //       done();
    //     });
    //   });
    // });


    // describe('读取板载编码电机的位置：readEncoderMotorOnBoard(0, 1／2, 1)', function() { 
    //   it('发送读取板载slot 1 上的位置的指令', function() {
    //     var targetCmd = dataman.orion.read.encoderMotorOnBoard[2];
    //     var cmd = orion.readEncoderMotorOnBoard(0, 1, 1);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('发送读取板载slot 2 上的位置的指令', function() {
    //     var targetCmd = dataman.orion.read.encoderMotorOnBoard[3];
    //     var cmd = orion.readEncoderMotorOnBoard(0, 2, 1);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('it should be a number between -2147483648~2147483647', function(done) {
    //     var resultType;
    //     orion.getSensorValue('encoderMotorOnBoard', {
    //       "port": 0,
    //       "slot": 1
    //     }, function(result) {
    //       assert.isNumber(result);      //result is a number
    //       assert.isAtLeast(result, -2147483648);  //result >= -2147483648
    //       assert.isAtMost(result, 2147483647);  //result <= 2147483647
    //       done();
    //     });
    //   });
    // });


    describe('主板通用命令-读取电压：readFirmwareMode(0, 112)', function() {
      it('发送读取主板电压的指令', function() {
        var targetVoltage = dataman.orion.read.voltage[0];
        var cmd = orion.readFirmwareMode(0, 112);
        assert.equal(targetVoltage, cmd);
      });

      it('it should be a number between 0~255', function(done) {
        var resultType;
        orion.getSensorValue('firmwareMode', {
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
        var targetMode = dataman.orion.read.mode[0];
        var cmd = orion.readFirmwareMode(0, 113);
        assert.equal(targetMode, cmd);
      });

      it('it should be a number between 0～4', function(done) {
        var resultType;
        orion.getSensorValue('firmwareMode', {
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