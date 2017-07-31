//test latest_auriga：09.01.012
//cmd is also ok
const dataman = require('./dataman');
import Utils from '../../src/core/utils';
import protocolAssembler from '../../src/protocol/cmd';
import Auriga from '../../src/mainboard/auriga';
import CommandManager from '../../src/communicate/command-manager';
import chai from 'chai';
const expect = chai.expect;

function captureWriteBuf(run) {
  let capturedBuf;
  let write_ = CommandManager.write;
  //override
  CommandManager.write = function(buf) {
    capturedBuf = buf;
    return;
  }
  run();
  let currentCmd = capturedBuf.map(function(val) {
    let newVal = val.toString(16);
    return newVal.length == 1 ? '0' + newVal : newVal;
  });
  // console.log('capturedBuf-------->', capturedBuf);
  CommandManager.write = write_;
  return currentCmd.join(' ');
}

function captureReadBuf(run) {
  let capturedBuf;
  let read_ = CommandManager.read;
  //override
  CommandManager.read = function(buf, callback) {
    capturedBuf = buf;
    return;
  }
  run();
  let currentCmd = capturedBuf.map(function(val) {
    let newVal = val.toString(16);
    return newVal.length == 1 ? '0' + newVal : newVal;
  });
  CommandManager.read = read_;
  return currentCmd.join(' ');
}


let auriga = new Auriga();

describe('【auriga_最新固件 协议测试】', function() {
  describe('#执行协议部分', function() {
    describe('直流电机：auriga.DcMotor(1／2/3/4).speed(-255～255)', function() {
      //生成 5 个测试用例
      let ports = [1, 2, 3, 4, 5];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`设置直流电机端口${i}速度为255`, function() {
          let dcMotor = auriga.DcMotor(port).speed(255);
          let targetCmd = dataman.auriga.write.dcMotor[i];
          let currentCmd = captureWriteBuf(dcMotor.run.bind(dcMotor));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      let speeds = [-255, 100, 256, -256];
      for (let i = 0, speed; speed = speeds[i]; i++) {
        it(`设置直流电机端口速度为${speed}`, function() {
          let dcMotor = auriga.DcMotor(1).speed(speed);
          let targetCmd = dataman.auriga.write.dcMotor[i + 5];
          let currentCmd = captureWriteBuf(dcMotor.run.bind(dcMotor));
          expect(currentCmd).to.equal(targetCmd);
        });
      }
    });

    describe('板载编码电机：auriga.EncoderMotorOnBoard(1/2,-255～255)', function() {
      let speeds = [100, 255, -255, 0, 256, -256];
      for (let i = 0; i < speeds.length; i++) {
        let speed = speeds[i];
        it(`板载编码电机slot1 速度 ${speed}`, function() {
          let encoderMotorOnBoard = auriga.EncoderMotorOnBoard(1).speed(speed);
          let targetCmd = dataman.auriga.write.encoderMotorBoard[i];
          let currentCmd = captureWriteBuf(encoderMotorOnBoard.run.bind(encoderMotorOnBoard));
          expect(currentCmd).to.equal(targetCmd);
        });
      }
      it('板载编码电机slot2 速度100', function() {
        let encoderMotorOnBoard = auriga.EncoderMotorOnBoard(2).speed(100);
        let targetCmd = dataman.auriga.write.encoderMotorBoard[6];
        let currentCmd = captureWriteBuf(encoderMotorOnBoard.run.bind(encoderMotorOnBoard));
        expect(currentCmd).to.equal(targetCmd);
      });
    });

    describe('外接编码电机：auriga.EncoderMotor(1～4, 1/2, 0～300, 720)', function() {
      let ports = [1, 2, 3, 4];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`外接编码电机port${port} slot1 速度150 角度720`, function() {
          let encoderMotor = auriga.EncoderMotor(port, 1).speed(150).offsetAngle(720);
          let targetCmd = dataman.auriga.write.encoder[i];
          let currentCmd = captureWriteBuf(encoderMotor.run.bind(encoderMotor));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      it(`外接编码电机port1 slot2 速度150 角度720`, function() {
        let encoderMotor = auriga.EncoderMotor(1, 2).speed(150).offsetAngle(720);
        let targetCmd = dataman.auriga.write.encoder[4];
        let currentCmd = captureWriteBuf(encoderMotor.run.bind(encoderMotor));
        expect(currentCmd).to.equal(targetCmd);
      });

      let speeds = [0, 300, 301, -1];
      for (let i = 0; i < speeds.length; i++) {
        let speed = speeds[i];
        it(`外接编码电机port1 slot1 速度${speed} 角度720`, function() {
          let encoderMotor = auriga.EncoderMotor(1, 1).speed(speed).offsetAngle(720);
          let targetCmd = dataman.auriga.write.encoder[i + 5];
          let currentCmd = captureWriteBuf(encoderMotor.run.bind(encoderMotor));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      let angles = [0, 2147483647, -2147483648, 2147483648, -2147483649];
      for (let i = 0; i < angles.length; i++) {
        let angle = angles[i];
        it(`外接编码电机port1 slot1 速度150 角度${angle}`, function() {
          let encoderMotor = auriga.EncoderMotor(1, 1).speed(150).offsetAngle(angle);
          let targetCmd = dataman.auriga.write.encoder[i + 9];
          let currentCmd = captureWriteBuf(encoderMotor.run.bind(encoderMotor));
          expect(currentCmd).to.equal(targetCmd);
        });
      }
    });

    describe('摇杆1：VirtualJoystick(-255～255,-255～255)', function() {
      let leftSpeeds =  [100, 255, -255, 0, -100, 150, 100, 256, -256];
      let rightSpeeds = [100, 255, -255, 150, 100, 0, -100, 256, -256];
      for (let i = 0; i < rightSpeeds.length; i++) {
        let left = leftSpeeds[i];
        let right = rightSpeeds[i];
        it(`app虚拟摇杆1 左轮速度 ${left} 右轮速度 ${right}`, function() {
          let joystick = auriga.VirtualJoystick(1, 1).leftSpeed(left).rightSpeed(right);
          let targetCmd = dataman.auriga.write.joystick[i];
          let currentCmd = captureWriteBuf(joystick.run.bind(joystick));
          expect(currentCmd).to.equal(targetCmd);
        });
      }
    });

    describe('摇杆2：VirtualJoystickForBalance(-255~255,-255~255)', function() {
      let turnRanges = [100, 255, -255, 0,   -100, 150, 100,  256, -256];
      let speeds =     [100, 255, -255, 150, 100,  0,   -100, 256, -256];
      for (let i = 0; i < speeds.length; i++) {
        let speed = speeds[i];
        let turnRange = turnRanges[i];
        it(`app虚拟摇杆2 拐弯 ${turnRange} 速度 ${speed}`, function() {
          let joystick = auriga.VirtualJoystickForBalance(1, 1).speed(speed).turnRange(turnRange);
          let targetCmd = dataman.auriga.write.virtualJoystickForBalance[i];
          let currentCmd = captureWriteBuf(joystick.run.bind(joystick));
          expect(currentCmd).to.equal(targetCmd);
        });
      }
    });

    describe('步进电机：setStepperMotor(1~4,0~3000,-2147483648~2147483647)', function() {
      let ports = [1, 2, 3, 4];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`步进电机在端口${port} 速度为3000 位移为1000`, function() {
          let stepperMotor = auriga.StepperMotor(port).speed(3000).distance(1000);
          let targetCmd = dataman.auriga.write.stepperMotor[i];
          let currentCmd = captureWriteBuf(stepperMotor.run.bind(stepperMotor));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      let speeds = [0, 1500, -1, 3001];
      for (let i = 0; i < speeds.length; i++) {
        let speed = speeds[i];
        it(`步进电机在端口1 速度为${speed} 位移为1000`, function() {
          let stepperMotor = auriga.StepperMotor(1).speed(speed).distance(1000);
          let targetCmd = dataman.auriga.write.stepperMotor[i + 4];
          let currentCmd = captureWriteBuf(stepperMotor.run.bind(stepperMotor));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      let distances = [2147483647, -2147483648, 0, -2147483649, 2147483648];
      for (let i = 0; i < distances.length; i++) {
        let distance = distances[i];
        it(`步进电机在端口1 速度为3000 位移为${distance}`, function() {
          let stepperMotor = auriga.StepperMotor(1).speed(3000).distance(distance);
          let targetCmd = dataman.auriga.write.stepperMotor[i + 8];
          let currentCmd = captureWriteBuf(stepperMotor.run.bind(stepperMotor));
          expect(currentCmd).to.equal(targetCmd);
        });
      }
    });

    describe('RGB LED灯条：RgbLed(6~10,1/2,0~12,0~255,0~255,0~255)', function() {
      let ports = [6, 7, 8, 9, 10];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`将端口号${port} slot1的灯条的全部位置上亮起红色`, function() {
          let rgbLed = auriga.RgbLed(port, 1).position(0);
          let targetCmd = dataman.auriga.write.led[i];
          let currentCmd = captureWriteBuf(rgbLed.red.bind(rgbLed));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      let positions = [0, 2, 13, -1];
      for (let i = 0; i < positions.length; i++) {
        let position = positions[i];
        it(`将端口号6 slot2 的灯条的 ${position}位置上亮起红色`, function() {
          let rgbLed = auriga.RgbLed(6, 2).position(position);
          let targetCmd = dataman.auriga.write.led[i + 5];
          let currentCmd = captureWriteBuf(rgbLed.red.bind(rgbLed));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      it(`将端口号6 slot2的灯条的全部位置上亮起混合色`, function() {
        let rgbLed = auriga.RgbLed(6, 2).r(125).g(100).b(55);
        let targetCmd = dataman.auriga.write.led[9];
        let currentCmd = captureWriteBuf(rgbLed.turnOnAll.bind(rgbLed));
        expect(currentCmd).to.equal(targetCmd);
      });

      let colorsApi = ['blue', 'green', 'white'];
      for (let i = 0; i < colorsApi.length; i++) {
        let color = colorsApi[i];
        it(`将端口号6 slot2 的灯条的全部位置上亮起${color}`, function() {
          let rgbLed = auriga.RgbLed(6, 2).position(0);
          let targetCmd = dataman.auriga.write.led[i + 10];
          let currentCmd = captureWriteBuf(rgbLed[color].bind(rgbLed));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      it('将端口号6 slot2的灯条的全部位置上熄灭（turnOffAll)', function() {
        let rgbLed = auriga.RgbLed(6, 2);
        let targetCmd = dataman.auriga.write.led[13];
        let currentCmd = captureWriteBuf(rgbLed.turnOffAll.bind(rgbLed));
        expect(currentCmd).to.equal(targetCmd);
      });

      it('将端口号6 slot2的灯条的全部位置上亮起红色（超出界限0～255）', function() {
        let rgbLed = auriga.RgbLed(6, 2).r(256).g(0).b(0);
        let targetCmd = dataman.auriga.write.led[14];
        let currentCmd = captureWriteBuf(rgbLed.turnOn.bind(rgbLed));
        expect(currentCmd).to.equal(targetCmd);
      });

      it('将端口号6 slot2的灯条的全部位置上不亮（超出界限0～255）', function() {
        let rgbLed = auriga.RgbLed(6, 2).r(0).g(-1).b(0);
        let targetCmd = dataman.auriga.write.led[15];
        let currentCmd = captureWriteBuf(rgbLed.turnOn.bind(rgbLed));
        expect(currentCmd).to.equal(targetCmd);
      });
    });

    describe('板载灯盘即板载灯：RgbLedOnBoard(0~12,0~255,0~255,0~255)', function() {
      let positions = [0, 2, 13, -1];
      for (let i = 0; i < positions.length; i++) {
        let position = positions[i];
        it(`将端口号6 slot2 的灯条的 ${position}位置上亮起红色`, function() {
          let ledPanelOnBoard = auriga.RgbLedOnBoard(6).position(position);
          let targetCmd = dataman.auriga.write.ledPanelOnBoard[i];
          let currentCmd = captureWriteBuf(ledPanelOnBoard.red.bind(ledPanelOnBoard));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      // it('将板载灯盘的全部位置上亮起混合色（125，100，55）', function() {
      //   var targetCmd = dataman.auriga.write.ledPanelOnBoard[4];
      //   var cmd = auriga.setLedPanelOnBoard(0, 125, 100, 55);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('将板载灯盘的全部位置上亮起蓝色', function() {
      //   var targetCmd = dataman.auriga.write.ledPanelOnBoard[5];
      //   var cmd = auriga.setLedPanelOnBoard(0, 0, 0, 255);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('将板载灯盘的全部位置上亮起绿色', function() {
      //   var targetCmd = dataman.auriga.write.ledPanelOnBoard[6];
      //   var cmd = auriga.setLedPanelOnBoard(0, 0, 255, 0);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('将板载灯盘的全部位置上亮起白色', function() {
      //   var targetCmd = dataman.auriga.write.ledPanelOnBoard[7];
      //   var cmd = auriga.setLedPanelOnBoard(0, 255, 255, 255);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('将板载灯盘的全部位置上亮起红色（超出界限0～255）', function() {
      //   var targetCmd = dataman.auriga.write.ledPanelOnBoard[8];
      //   var cmd = auriga.setLedPanelOnBoard(0, 256, 0, 0);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('将板载灯盘的全部位置上不亮（熄灭）（超出界限0～255）', function() {
      //   var targetCmd = dataman.auriga.write.ledPanelOnBoard[9];
      //   var cmd = auriga.setLedPanelOnBoard(0, 0, -1, 0);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('将板载灯盘的全部位置上熄灭（不亮）', function() {
      //   var targetCmd = dataman.auriga.write.ledPanelOnBoard[10];
      //   var cmd = auriga.turnOffLedPanelOnBoard(0);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('将板载灯盘的05位置上熄灭（不亮）', function() {
      //   var targetCmd = dataman.auriga.write.ledPanelOnBoard[11];
      //   var cmd = auriga.turnOffLedPanelOnBoard(5);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('将板载灯盘的13位置上熄灭（不亮）', function() {
      //   var targetCmd = dataman.auriga.write.ledPanelOnBoard[12];
      //   var cmd = auriga.turnOffLedPanelOnBoard(13);
      //   assert.equal(targetCmd, cmd);
      // });

      //  it('将板载灯盘的-1位置上熄灭（不亮）', function() {
      //   var targetCmd = dataman.auriga.write.ledPanelOnBoard[13];
      //   var cmd = auriga.turnOffLedPanelOnBoard(-1);
      //   assert.equal(targetCmd, cmd);
      // });
    });

    describe('四键led灯：setFourLeds(6～10，0~4,0~255,0~255,0~255)', function() {
      let ports = [6, 7, 8, 9, 10];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`将端口号${port}上的四键led灯的全部位置上亮起红色`, function() {
          let fourLed = auriga.FourLed(port).position(0);
          let targetCmd = dataman.auriga.write.fourLeds[i];
          let currentCmd = captureWriteBuf(fourLed.red.bind(fourLed));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      let positions = [2, 5, -1];
      for (let i = 0; i < positions.length; i++) {
        let position = positions[i];
        it(`将端口6上的四键led灯的 ${position}位置上亮起红色`, function() {
          let fourLed = auriga.FourLed(6).position(position);
          let targetCmd = dataman.auriga.write.fourLeds[i + 5];
          let currentCmd = captureWriteBuf(fourLed.red.bind(fourLed));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      // it('将端口6上的四键led灯的02位置上亮起红色', function() {
      //   var targetCmd = dataman.auriga.write.fourLeds[5];
      //   var cmd = auriga.setFourLeds(6, 2, 255, 0, 0);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('将端口6上的四键led灯的5位置上亮起红色', function() {
      //   var targetCmd = dataman.auriga.write.fourLeds[6];
      //   var cmd = auriga.setFourLeds(6, 5, 255, 0, 0);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('将端口6上的四键led灯的-1位置上亮起红色', function() {
      //   var targetCmd = dataman.auriga.write.fourLeds[7];
      //   var cmd = auriga.setFourLeds(6, -1, 255, 0, 0);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('将端口6上的四键led灯的全部位置上亮起混合色（125，100，55）', function() {
      //   var targetCmd = dataman.auriga.write.fourLeds[8];
      //   var cmd = auriga.setFourLeds(6, 0, 125, 100, 55);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('将端口6上的四键led灯的全部位置上亮起蓝色', function() {
      //   var targetCmd = dataman.auriga.write.fourLeds[9];
      //   var cmd = auriga.setFourLeds(6, 0, 0, 0, 255);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('将端口6上的四键led灯的全部位置上亮起绿色', function() {
      //   var targetCmd = dataman.auriga.write.fourLeds[10];
      //   var cmd = auriga.setFourLeds(6, 0, 0, 255, 0);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('将端口6上的四键led灯的全部位置上亮起白色', function() {
      //   var targetCmd = dataman.auriga.write.fourLeds[11];
      //   var cmd = auriga.setFourLeds(6, 0, 255, 255, 255);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('将端口6上的四键led灯的全部位置上亮起红色（超出界限0～255）', function() {
      //   var targetCmd = dataman.auriga.write.fourLeds[12];
      //   var cmd = auriga.setFourLeds(6, 0, 256, 0, 0);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('将端口6上的四键led灯的全部位置上不亮（熄灭）（超出界限0～255）', function() {
      //   var targetCmd = dataman.auriga.write.fourLeds[13];
      //   var cmd = auriga.setFourLeds(6, 0, 0, -1, 0);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('将端口6上的四键led灯的全部位置上熄灭（不亮）', function() {
      //   var targetCmd = dataman.auriga.write.fourLeds[14];
      //   var cmd = auriga.turnOffFourLeds(6, 0);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('将端口6上的四键led灯的03位置上熄灭（不亮）', function() {
      //   var targetCmd = dataman.auriga.write.fourLeds[15];
      //   var cmd = auriga.turnOffFourLeds(6, 3);
      //   assert.equal(targetCmd, cmd);
      // });

      // it('将端口6上的四键led灯的5位置上熄灭（不亮）', function() {
      //   var targetCmd = dataman.auriga.write.fourLeds[16];
      //   var cmd = auriga.turnOffFourLeds(6, 5);
      //   assert.equal(targetCmd, cmd);
      // });

      //  it('将端口6上的四键led灯的-1位置上熄灭（不亮）', function() {
      //   var targetCmd = dataman.auriga.write.fourLeds[17];
      //   var cmd = auriga.setFourLeds(6, -1);
      //   assert.equal(targetCmd, cmd);
      // });
    });

    describe('主板通用命令：auriga.setFirmwareMode(0～4)', function() {
      let modes =     [0,         1,        2,       3,       4,     5,        -1,        3.5];
      let modeDescs = ['蓝牙模式', '自动避障', '平衡车', '红外线', '巡线', '错误模式', '错误模式', '错误模式'];
      for (let i = 0; i < modes.length; i++) {
        let mode = modes[i];
        let desc = modeDescs[i];
        it(`主板通用命令-设置模式为${desc}`, function() {
          let targetCmd = dataman.auriga.write.firmwareMode[i];
          let currentCmd = captureWriteBuf(function(){
            auriga.setFirmwareMode(mode);
          });
          expect(currentCmd).to.equal(targetCmd);
        });
      }
    });

    describe('数字舵机：ServoMotor(6~10,1/2,0~180)', function() {
      let ports = [6, 7, 8, 9, 10];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`数字舵机在 port${port} slot1 旋转角度 90`, function() {
          let servoMotor = auriga.ServoMotor(port, 1).angle(90);
          let targetCmd = dataman.auriga.write.servo[i];
          let currentCmd = captureWriteBuf(servoMotor.run.bind(servoMotor));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      it('数字舵机在端口6 slot2 旋转角度90', function() {
        let servoMotor = auriga.ServoMotor(6, 2).angle(90);
        let targetCmd = dataman.auriga.write.servo[5];
        let currentCmd = captureWriteBuf(servoMotor.run.bind(servoMotor));
        expect(currentCmd).to.equal(targetCmd);
      });

      let angles = [0, 180, 181, -1];
      for (let i = 0; i < angles.length; i++) {
        let angle = angles[i];
        it(`数字舵机在端口6 slot1 旋转角度 ${angle}`, function() {
          let servoMotor = auriga.ServoMotor(6, 1).angle(angle);
          let targetCmd = dataman.auriga.write.servo[i+6];
          let currentCmd = captureWriteBuf(servoMotor.run.bind(servoMotor));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      it(`数字舵机在端口6 slot1 旋转角度 跳到 0 度`, function() {
        let servoMotor = auriga.ServoMotor(6, 1);
        let targetCmd = dataman.auriga.write.servo[6];
        let currentCmd = captureWriteBuf(servoMotor.toStart.bind(servoMotor));
        expect(currentCmd).to.equal(targetCmd);
      });

      it(`数字舵机在端口6 slot1 旋转角度 跳到 180 度`, function() {
        let servoMotor = auriga.ServoMotor(6, 1);
        let targetCmd = dataman.auriga.write.servo[7];
        let currentCmd = captureWriteBuf(servoMotor.toEnd.bind(servoMotor));
        expect(currentCmd).to.equal(targetCmd);
      });
    });

    describe('四位七段数码管：SevenSegment(6～10，-2147483648～2147483647)', function() {
      let ports =   [6,   7,   8,   9,   10];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`四位七段数码管在 port${port} 显示数值 100`, function() {
          let sevenSegment = auriga.SevenSegment(port).number(100);
          let targetCmd = dataman.auriga.write.sevenSegment[i];
          let currentCmd = captureWriteBuf(sevenSegment.run.bind(sevenSegment));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      let numbers = [0, -100, 2147483647, -2147483648, 1.63, 10.678, 2147483648, -2147483649];
      for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        it(`四位七段数码管在port 6 显示数值 ${number}`, function() {
          let sevenSegment = auriga.SevenSegment(6).number(number);
          let targetCmd = dataman.auriga.write.sevenSegment[i+5];
          let currentCmd = captureWriteBuf(sevenSegment.run.bind(sevenSegment));
          expect(currentCmd).to.equal(targetCmd);
        });
      }
    });


    describe('表情面板：LedMatrix(6, 0, 1, "Hi")', function() {
      let ports = [6, 7, 8, 9, 10];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`在端口 ${port} x：0 y：0 的表情面板上显示字符串‘Hi’`, function() {
          let ledMatrixChar = auriga.LedMatrix(port).charMode().x(0).y(0).char('Hi');
          let targetCmd = dataman.auriga.write.ledMatrixChar[i];
          let currentCmd = captureWriteBuf(ledMatrixChar.run.bind(ledMatrixChar));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      let xy = [{x: 1, y:0}, {x: 0, y:1}, {x: 1, y:2}, {x: -1, y: 0},
        {x: 0, y: -4}, {x: -1, y: -5}
      ];
      for (let i = 0; i < xy.length; i++) {
        let x = xy[i].x;
        let y = xy[i].y;
        it(`在端口 6 x：${x} y：${y} 的表情面板上显示字符串‘Hi’`, function() {
          let ledMatrixChar = auriga.LedMatrix(6).charMode().x(x).y(y).char('Hi');
          let targetCmd = dataman.auriga.write.ledMatrixChar[i+5];
          let currentCmd = captureWriteBuf(ledMatrixChar.run.bind(ledMatrixChar));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

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

  // describe('表情面板-显示表情：setLedMatrixChar(6, 0, 0, "默认表情")', function() {
    //   it("在端口6 x：0 y：0的表情面板上显示表情‘？？’", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixEmotion[0];
    //     var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
    //     var cmd = auriga.setLedMatrixEmotion(6, 0, 0, emotionData);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口7 x：0 y：0的表情面板上显示表情‘？？’", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixEmotion[1];
    //     var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
    //     var cmd = auriga.setLedMatrixEmotion(7, 0, 0, emotionData);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口8 x：0 y：0的表情面板上显示表情‘？？’", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixEmotion[2];
    //     var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
    //     var cmd = auriga.setLedMatrixEmotion(8, 0, 0, emotionData);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口9 x：0 y：0的表情面板上显示表情‘？？’", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixEmotion[3];
    //     var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
    //     var cmd = auriga.setLedMatrixEmotion(9, 0, 0, emotionData);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口10 x：0 y：0的表情面板上显示表情‘？？’", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixEmotion[4];
    //     var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
    //     var cmd = auriga.setLedMatrixEmotion(10, 0, 0, emotionData);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口6 x：1 y：0的表情面板上显示表情‘？？’", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixEmotion[5];
    //     var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
    //     var cmd = auriga.setLedMatrixEmotion(6, 1, 0, emotionData);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口6 x：0 y：1的表情面板上显示表情‘？？’", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixEmotion[6];
    //     var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
    //     var cmd = auriga.setLedMatrixEmotion(6, 0, 1, emotionData);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口6 x：1 y：2的表情面板上显示表情‘？？’", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixEmotion[7];
    //     var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
    //     var cmd = auriga.setLedMatrixEmotion(6, 1, 2, emotionData);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口6 x：-1 y：0的表情面板上显示表情‘？？’", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixEmotion[8];
    //     var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
    //     var cmd = auriga.setLedMatrixEmotion(6, -1, 0, emotionData);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口6 x：0 y：-4的表情面板上显示表情‘？？’", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixEmotion[9];
    //     var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
    //     var cmd = auriga.setLedMatrixEmotion(6, 0, -4, emotionData);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口6 x：-1 y：-5的表情面板上显示表情‘？？’", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixEmotion[10];
    //     var emotionData = [00, 00, 0x40, 0x48, 0x44, 0x42, 0x02, 0x02, 0x02, 0x02, 0x42, 0x44, 0x48, 0x40, 0x00, 0x00];
    //     var cmd = auriga.setLedMatrixEmotion(6, -1, -5, emotionData);
    //     assert.equal(targetCmd, cmd);
    //   });
    // });

    // describe('表情面板-显示时间：setLedMatrixTime(6～10, 0/1, 0～23, 0～59)', function() {
    //   it("在端口6上以分隔符‘：’显示时间10:20 ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixTime[0];
    //     var cmd = auriga.setLedMatrixTime(6, 1, 10, 20);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口7上以分隔符‘：’显示时间10:20 ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixTime[1];
    //     var cmd = auriga.setLedMatrixTime(7, 1, 10, 20);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口8上以分隔符‘：’显示时间10:20 ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixTime[2];
    //     var cmd = auriga.setLedMatrixTime(8, 1, 10, 20);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口9上以分隔符‘：’显示时间10:20 ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixTime[3];
    //     var cmd = auriga.setLedMatrixTime(9, 1, 10, 20);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口10上以分隔符‘：’显示时间10:20 ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixTime[4];
    //     var cmd = auriga.setLedMatrixTime(10, 1, 10, 20);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口6上以分隔符‘ ’显示时间10 20 ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixTime[5];
    //     var cmd = auriga.setLedMatrixTime(6, 0, 10, 20);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口6上以分隔符‘：’显示时间00:00 ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixTime[6];
    //     var cmd = auriga.setLedMatrixTime(6, 1, 0, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口6上以分隔符‘：’显示时间23:59 ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixTime[7];
    //     var cmd = auriga.setLedMatrixTime(6, 1, 23, 59);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口6上以分隔符‘：’显示时间-1:00 ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixTime[8];
    //     var cmd = auriga.setLedMatrixTime(6, 1, -1, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口6上以分隔符‘：’显示时间00:-1 ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixTime[9];
    //     var cmd = auriga.setLedMatrixTime(6, 1, 0, -1);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口6上以分隔符‘：’显示时间23:60 ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixTime[10];
    //     var cmd = auriga.setLedMatrixTime(6, 1, 23, 60);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口6上以分隔符‘：’显示时间24:00 ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixTime[11];
    //     var cmd = auriga.setLedMatrixTime(6, 1, 24, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口6上以分隔符‘：’显示时间time:01 ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixTime[12];
    //     var cmd = auriga.setLedMatrixTime(6, 1, 'time', 01);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口6上以分隔符‘：’显示时间15.5:12 ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixTime[13];
    //     var cmd = auriga.setLedMatrixTime(6, 1, 15.5, 12);
    //     assert.equal(targetCmd, cmd);
    //   });
    // });

    // describe('表情面板-显示数字：setLedMatrixNumber(6, 0)', function() {
    //   it("在端口6上的表情面板显示数字0 ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixNumber[0];
    //     var cmd = auriga.setLedMatrixNumber(6, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口7上的表情面板显示数字0 ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixNumber[1];
    //     var cmd = auriga.setLedMatrixNumber(7, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口8上的表情面板显示数字0 ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixNumber[2];
    //     var cmd = auriga.setLedMatrixNumber(8, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口9上的表情面板显示数字0", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixNumber[3];
    //     var cmd = auriga.setLedMatrixNumber(9, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口10上的表情面板显示数字0", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixNumber[4];
    //     var cmd = auriga.setLedMatrixNumber(10, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口 6 上的表情面板显示数字 -1 ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixNumber[5];
    //     var cmd = auriga.setLedMatrixNumber(6, -1);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口 6 上的表情面板显示数字 1 ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixNumber[6];
    //     var cmd = auriga.setLedMatrixNumber(6, 1);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口 6 上的表情面板显示数字 12.25", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixNumber[7];
    //     var cmd = auriga.setLedMatrixNumber(6, 12.25);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口 6 上的表情面板显示数字 2147483647 ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixNumber[8];
    //     var cmd = auriga.setLedMatrixNumber(6, 2147483647);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口6上的表情面板显示数字 -2147483648", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixNumber[9];
    //     var cmd = auriga.setLedMatrixNumber(6, -2147483648);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口6上的表情面板显示数字 2147483648 ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixNumber[10];
    //     var cmd = auriga.setLedMatrixNumber(6, 2147483648);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口6上的表情面板显示数字0 -2147483649 ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixNumber[11];
    //     var cmd = auriga.setLedMatrixNumber(6, -2147483649);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it("在端口6上的表情面板显示数字 ‘error’ ", function() {
    //     var targetCmd = dataman.auriga.write.ledMatrixNumber[12];
    //     var cmd = auriga.setLedMatrixNumber(6, 'error');
    //     assert.equal(targetCmd, cmd);
    //   });
    // });


    // describe('快门线模块：setShutter(6, 2)', function() {
    //   it('在端口6的快门线设置为按下快门00 ', function() {
    //     var targetCmd = dataman.auriga.write.shutter[0];
    //     var cmd = auriga.setShutter(6, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('在端口7的快门线设置为按下快门00 ', function() {
    //     var targetCmd = dataman.auriga.write.shutter[1];
    //     var cmd = auriga.setShutter(7, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('在端口8的快门线设置为按下快门00 ', function() {
    //     var targetCmd = dataman.auriga.write.shutter[2];
    //     var cmd = auriga.setShutter(8, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('在端口9的快门线设置为按下快门00 ', function() {
    //     var targetCmd = dataman.auriga.write.shutter[3];
    //     var cmd = auriga.setShutter(9, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('在端口10的快门线设置为按下快门00 ', function() {
    //     var targetCmd = dataman.auriga.write.shutter[4];
    //     var cmd = auriga.setShutter(10, 0);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('在端口6的快门线设置为松开快门01 ', function() {
    //     var targetCmd = dataman.auriga.write.shutter[5];
    //     var cmd = auriga.setShutter(6, 1);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('在端口6的快门线设置为开始对焦02 ', function() {
    //     var targetCmd = dataman.auriga.write.shutter[6];
    //     var cmd = auriga.setShutter(6, 2);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('在端口6的快门线设置为停止对焦03 ', function() {
    //     var targetCmd = dataman.auriga.write.shutter[7];
    //     var cmd = auriga.setShutter(6, 3);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('在端口6的快门线设置为错误模式05 ', function() {
    //     var targetCmd = dataman.auriga.write.shutter[8];
    //     var cmd = auriga.setShutter(6, 5);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('在端口6的快门线设置为错误模式-1 ', function() {
    //     var targetCmd = dataman.auriga.write.shutter[9];
    //     var cmd = auriga.setShutter(6, -1);
    //     assert.equal(targetCmd, cmd);
    //   });
    // });

    // describe('设置TONE输出：setTone("C2～D8", 125~2000)', function() {
    //   it('设置TONE输出C2(65)频率二分之一（500）节拍', function() {
    //     var targetCmd = dataman.auriga.write.tone[0];
    //     var toneData = "C2";
    //     var cmd = auriga.setTone(toneData, 500);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('设置TONE输出A2(110)频率8分之一（125）节拍', function() {
    //     var targetCmd = dataman.auriga.write.tone[1];
    //     var toneData = "A2";
    //     var cmd = auriga.setTone(toneData, 125);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('设置TONE输出B2(123)频率4分之一（250）节拍', function() {
    //     var targetCmd = dataman.auriga.write.tone[2];
    //     var toneData = "B2";
    //     var cmd = auriga.setTone(toneData, 250);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('设置TONE输出D5(555)频率一（1000）节拍', function() {
    //     var targetCmd = dataman.auriga.write.tone[3];
    //     var toneData = "D5";
    //     var cmd = auriga.setTone(toneData, 1000);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('设置TONE输出C7(2093)频率二（2000）节拍', function() {
    //     var targetCmd = dataman.auriga.write.tone[4];
    //     var toneData = "C7";
    //     var cmd = auriga.setTone(toneData, 2000);
    //     assert.equal(targetCmd, cmd);
    //   });

    //   it('设置TONE输出B7(3951)频率（500）停止节拍', function() {
    //     var targetCmd = dataman.auriga.write.tone[5];
    //     var toneData = "B7";
    //     var cmd = auriga.setTone(toneData, 0);//停止节拍在协议上也没有标注是多少
    //     assert.equal(targetCmd, cmd);
    //   });
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
  describe('#读协议部分', function() {

    describe('读取版本号: auriga.getVersion(0)', function() {
      it('发送查询版本号的指令', function() {
        let targetCmd = dataman.auriga.read.version[0];
        let currentCmd = captureReadBuf(auriga.getVersion.bind(auriga));
        expect(currentCmd).to.equal(targetCmd);
      });


      it('检查返回的版本号是否为09.01.013', function(done) {
        var targetVersion = dataman.auriga.read.version[1];
        auriga.getSensorValue('version', function(result) {
          assert.equal(targetVersion, result);
          done();
        });
      });
    });

    describe('超声波传感器：Ultrasonic(6~10)', function() {
      let ports = [6, 7, 8, 9, 10];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`发送读取端口号${port} 的超声波的指令`, function() {
          let ultrasonic = auriga.Ultrasonic(port);
          let targetCmd = dataman.auriga.read.ultrasonic[i];
          let currentCmd = captureReadBuf(ultrasonic.getData.bind(ultrasonic));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      it('超声波取值范围是 0~400', function(done) {
        auriga.getSensorValue('ultrasonic', {
          "port": 6
        }, function(result) {
          assert.isNumber(result); //result is a number
          assert.isAtLeast(result, 0); //result >= 0
          assert.isAtMost(result, 400); //result <= 400
          done(); //setTimeout(done, 3000);
        });
      });
    });

    describe('温度传感器：readTemperature(6～10,1/2)', function() {
      let ports = [6, 7, 8, 9, 10];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`发送读取端口号${port} slot1 上的温度的指令`, function() {
          let temperature = auriga.Temperature(port, 1);
          let targetCmd = dataman.auriga.read.temperature[i];
          let currentCmd = captureReadBuf(temperature.getData.bind(temperature));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      it(`发送读取端口号6 slot2 上的温度的指令`, function() {
        let temperature = auriga.Temperature(6, 2);
        let targetCmd = dataman.auriga.read.temperature[5];
        let currentCmd = captureReadBuf(temperature.getData.bind(temperature));
        expect(currentCmd).to.equal(targetCmd);
      });

      it('it should be a number between -1024~1024 ', function(done) {
        var resultType;
        auriga.getSensorValue('temperature', {
          "port": 6,
          "slot": 1
        }, function(result) {
          assert.isNumber(result); //result is a number
          assert.isAtLeast(result, -1024); //result >= -1024
          assert.isAtMost(result, 1024); //result <= 1024
          done();
        });
      });
    });

    describe('光线传感器：readLight(6～12)', function() {
      let ports = [6, 7, 8, 9, 10, 11, 12];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`发送读取端口号${port} 的光线的指令`, function() {
          let light = auriga.Light(port);
          let targetCmd = dataman.auriga.read.light[i];
          let currentCmd = captureReadBuf(light.getData.bind(light));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      it('it should be a number between 0~1024', function(done) {
        var resultType;
        auriga.getSensorValue('light', {
          "port": 6
        }, function(result) {
          assert.isNumber(result); //result is a number
          assert.isAtLeast(result, 0); //result >= 0
          assert.isAtMost(result, 1024); //result <= 1024
          done();
        });
      });
    });

    describe('电位器传感器：Potentionmeter(6~10)', function() {
      let ports = [6, 7, 8, 9, 10];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`发送读取端口号${port} 的电位器传感器的指令`, function() {
          let potentionmeter = auriga.Potentionmeter(port);
          let targetCmd = dataman.auriga.read.potentionmeter[i];
          let currentCmd = captureReadBuf(potentionmeter.getData.bind(potentionmeter));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      it('it should be a number between 0~1000', function(done) {
        var resultType;
        auriga.getSensorValue('potentionmeter', {
          "port": 6
        }, function(result) {
          assert.isNumber(result); //result is a number
          assert.isAtLeast(result, 0); //result >= 0
          assert.isAtMost(result, 1000); //result <= 1000
          done();
        });
      });
    });

    describe('摇杆传感器：Joystick(6~10).axis(1~2)', function() {
      let ports = [6, 7, 8, 9, 10];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`发送读取端口号${port} 上的摇杆在 x 轴上的值的指令`, function() {
          let joystick = auriga.Joystick(port).axis(1);
          let targetCmd = dataman.auriga.read.joystick[i];
          let currentCmd = captureReadBuf(joystick.getData.bind(joystick));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      it(`发送读取端口号6 上的摇杆在 y 轴上的值的指令`, function() {
          let joystick = auriga.Joystick(6).axis(2);
          let targetCmd = dataman.auriga.read.joystick[5];
          let currentCmd = captureReadBuf(joystick.getData.bind(joystick));
          expect(currentCmd).to.equal(targetCmd);
        });

      it('it should be a number between -492~492', function(done) {
        var resultType;
        auriga.getSensorValue('joystick', {
          "port": 6,
          "x": 1
        }, function(result) {
          assert.isNumber(result); //result is a number
          assert.isAtLeast(result, -492); //result >= -492
          assert.isAtMost(result, 492); //result <= 492
          done();
        });
      });
    });

    describe('姿态传感器（陀螺仪）板载和外接：Gyro(0,1/0,1~3)', function() {
      let axises = ['x', 'y', 'z'];
      for (let i = 0; i < axises.length; i++) {
        let axis = axises[i];
        it(`发送读取板载陀螺仪在 ${axis} 轴上的值的指令`, function() {
          let gyroOnBoard = auriga.GyroOnBoard().axis(i+1);
          let targetCmd = dataman.auriga.read.gyro[i];
          let currentCmd = captureReadBuf(gyroOnBoard.getData.bind(gyroOnBoard));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      let ports = [6, 7, 8, 9, 10];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`发送读取端口 ${port} 上的陀螺仪在 x 轴上的值的指令`, function() {
          let gyro = auriga.Gyro(port).axis(1);
          let targetCmd = dataman.auriga.read.gyro[i+3];
          let currentCmd = captureReadBuf(gyro.getData.bind(gyro));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      let yz = ['y', 'z'];
      for (let i = 0; i < yz.length; i++) {
        let axis = yz[i];
        it(`发送读取端口 6 上的陀螺仪在 ${axis} 轴上的值的指令`, function() {
          let gyro = auriga.Gyro(6).axis(i+2);
          let targetCmd = dataman.auriga.read.gyro[i+8];
          let currentCmd = captureReadBuf(gyro.getData.bind(gyro));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      it('it should be a number between -180~180', function(done) {
        var resultType;
        auriga.getSensorValue('gyro', {
          "port": 0 //0表示外接；1表示板载
        }, function(result) {
          assert.isNumber(result); //result is a number
          assert.isAtLeast(result, -180); //result >= -180
          assert.isAtMost(result, 180); //result <= 180
          done();
        });
      });
    });

    describe('音量传感器(含板载)：Sound(0,14／6～10)', function() {
      let ports = [6, 7, 8, 9, 10];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`发送读取端口 ${port} 上的音量传感器的值的指令`, function() {
          let sound = auriga.Sound(port);
          let targetCmd = dataman.auriga.read.sound[i];
          let currentCmd = captureReadBuf(sound.getData.bind(sound));
          expect(currentCmd).to.equal(targetCmd);
        });
      }
      //auriga 专有
      it('发送读取板载的音量传感器的值的指令', function() {
        let soundOnBoard = auriga.SoundOnBoard();
        let targetCmd = dataman.auriga.read.sound[5];
        let currentCmd = captureReadBuf(soundOnBoard.getData.bind(soundOnBoard));
        expect(currentCmd).to.equal(targetCmd);
      });

      it('it should be a number between 0~1024', function(done) {
        var resultType;
        auriga.getSensorValue('sound', {
          "port": 6
        }, function(result) {
          assert.isNumber(result); //result is a number
          assert.isAtLeast(result, 0); //result >= 0
          assert.isAtMost(result, 1024); //result <= 1024
          done();
        });
      });
    });

    describe('板载温度传感器：TemperatureOnBoard(0)', function() {
      it('发送读取板载温度传感器的值的指令', function() {
        let targetCmd = dataman.auriga.read.temperatureOnBoard[0];
        let temperatureOnBoard = auriga.TemperatureOnBoard();
        let currentCmd = captureReadBuf(temperatureOnBoard.getData.bind(temperatureOnBoard));
        expect(currentCmd).to.equal(targetCmd);
      });

      it('it should be a number between -1024～1024', function(done) {
        var resultType;
        auriga.getSensorValue('temperatureOnBoard', function(result) {
          assert.isNumber(result); //result is a number
          assert.isAtLeast(result, -1024); //result >= -1024
          assert.isAtMost(result, 1024); //result <= 1024
          done();
        });
      });
    });

    describe('被动式红外传感器：Pirmotion(0, 6)', function() {
      let ports = [6, 7, 8, 9, 10];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`发送读取端口 ${port} 上的被动式红外传感器的值的指令`, function() {
          let pirmotion = auriga.Pirmotion(port);
          let targetCmd = dataman.auriga.read.pirmotion[i];
          let currentCmd = captureReadBuf(pirmotion.getData.bind(pirmotion));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      it('it should be 0 or 1 ', function(done) {
        var resultType;
        auriga.getSensorValue('pirmotion', {
          "port": 6
        }, function(result) {
          assert.isNumber(result); //result is a number
          assert.oneOf(result, [0, 1]) //result is 0 or 1
          done();
        });
      });
    });


    describe('巡线传感器：LineFollower(0, 6~10)', function() {
      let ports = [6, 7, 8, 9, 10];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`发送读取端口 ${port} 上的巡线传感器的值的指令`, function() {
          let lineFollower = auriga.LineFollower(port);
          let targetCmd = dataman.auriga.read.lineFollower[i];
          let currentCmd = captureReadBuf(lineFollower.getData.bind(lineFollower));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      it('it should be 0 or 1 or 2 or 3', function(done) {
        var resultType;
        auriga.getSensorValue('lineFollower', {
          "port": 6
        }, function(result) {
          assert.isNumber(result); //result is a number
          assert.oneOf(result, [0, 1, 2, 3]) //result is 0 or 1 or 2 or 3
          done();
        });
      });
    });


    describe('限位开关传感器：LimitSwitch(0, 6～10, 1/2)', function() {
      let ports = [6, 7, 8, 9, 10];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`发送读取端口 ${port} slot 1 上的限位开关的值的指令`, function() {
          let limitSwitch = auriga.LimitSwitch(port, 1);
          let targetCmd = dataman.auriga.read.limitSwitch[i];
          let currentCmd = captureReadBuf(limitSwitch.getData.bind(limitSwitch));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      it('发送读取端口 6 slot 2 上的限位开关的值的指令', function() {
        let limitSwitch = auriga.LimitSwitch(6, 2);
          let targetCmd = dataman.auriga.read.limitSwitch[5];
          let currentCmd = captureReadBuf(limitSwitch.getData.bind(limitSwitch));
          expect(currentCmd).to.equal(targetCmd);
      });

      it('it should be  0 or 1', function(done) {
        var resultType;
        auriga.getSensorValue('limitSwitch', {
          "port": 6,
          "slot": 2
        }, function(result) {
          assert.isNumber(result); //result is a number
          assert.oneOf(result, [0, 1]) //result is 0 or 1
          done();
        });
      });
    });

    describe('电子罗盘传感器：Compass(0, 6)', function() {
      let ports = [6, 7, 8, 9, 10];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`发送读取端口 ${port} 上的电子罗盘传感器的值的指令`, function() {
          let compass = auriga.Compass(port, 1);
          let targetCmd = dataman.auriga.read.compass[i];
          let currentCmd = captureReadBuf(compass.getData.bind(compass));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      it('it should be a number between 0-1024', function(done) {
        var resultType;
        auriga.getSensorValue('compass', {
          "port": 6
        }, function(result) {
          assert.isNumber(result); //result is a number
          assert.isAtLeast(result, 0); //result >= 0
          assert.isAtMost(result, 1024); //result <= 1024
          done();
        });
      });
    });


    describe('温湿度传感器：Humiture(0, 6～10, 1／0)', function() {
      let ports = [6, 7, 8, 9, 10];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`发送读取端口 ${port} 上的温湿度传感器上的温度的指令`, function() {
          let humiture = auriga.Humiture(port);
          let targetCmd = dataman.auriga.read.humiture[i];
          let currentCmd = captureReadBuf(humiture.getTemperature.bind(humiture));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      it(`发送读取端口 6 上的温湿度传感器上的湿度的指令`, function() {
          let humiture = auriga.Humiture(6);
          let targetCmd = dataman.auriga.read.humiture[5];
          let currentCmd = captureReadBuf(humiture.getHumidity.bind(humiture));
          expect(currentCmd).to.equal(targetCmd);
        });

      it('it should be a number between -1024~1024', function(done) {
        var resultType;
        auriga.getSensorValue('humiture', {
          "port": 6
        }, function(result) {
          assert.isNumber(result); //result is a number
          assert.isAtLeast(result, -1024); //result >= -1024
          assert.isAtMost(result, 1024); //result <= 1024
          done();
        });
      });
    });


    describe('火焰传感器：Flame(0, 6~10)', function() {
      let ports = [6, 7, 8, 9, 10];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`发送读取端口 ${port} 上的火焰传感器的值的指令`, function() {
          let flame = auriga.Flame(port);
          let targetCmd = dataman.auriga.read.flame[i];
          let currentCmd = captureReadBuf(flame.getData.bind(flame));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      it('it should be a number between 0~1024', function(done) {
        var resultType;
        auriga.getSensorValue('flame', {
          "port": 6
        }, function(result) {
          assert.isNumber(result); //result is a number
          assert.isAtLeast(result, 0); //result >= 0
          assert.isAtMost(result, 1024); //result <= 1024
          done();
        });
      });
    });


    describe('气体传感器：Gas(0, 6~10)', function() {
      let ports = [6, 7, 8, 9, 10];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`发送读取端口 ${port} 上的气体传感器的值的指令`, function() {
          let gas = auriga.Gas(port);
          let targetCmd = dataman.auriga.read.gas[i];
          let currentCmd = captureReadBuf(gas.getData.bind(gas));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      it('it should be a number between 0~1024', function(done) {
        var resultType;
        auriga.getSensorValue('gas', {
          "port": 6
        }, function(result) {
          assert.isNumber(result); //result is a number
          assert.isAtLeast(result, 0); //result >= 0
          assert.isAtMost(result, 1024); //result <= 1024
          done();
        });
      });
    });


    describe('触摸传感器：Touch(0, 6～10)', function() {
      let ports = [6, 7, 8, 9, 10];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`发送读取端口 ${port} 上的触摸传感器的值的指令`, function() {
          let touch = auriga.Touch(port);
          let targetCmd = dataman.auriga.read.touch[i];
          let currentCmd = captureReadBuf(touch.getData.bind(touch));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      it('it should be a number 0 or 1', function(done) {
        var resultType;
        auriga.getSensorValue('touch', {
          "port": 6
        }, function(result) {
          assert.isNumber(result); //result is a number
          assert.oneOf(result, [0, 1]) //result is 0 or 1
          done();
        });
      });
    });


    describe('按键传感器：FourKeys(0, 6, 1)', function() {
      let ports = [6, 7, 8, 9, 10];
      for (let i = 0; i < ports.length; i++) {
        let port = ports[i];
        it(`发送读取端口 ${port} 第 1 个按键的按键传感器的值的指令`, function() {
          let fourKeys = auriga.FourKeys(port).key(1);
          let targetCmd = dataman.auriga.read.fourKeys[i];
          let currentCmd = captureReadBuf(fourKeys.getData.bind(fourKeys));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      let keys = [2,3,4];
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        it(`发送读取端口 6 第 ${key} 个按键的按键传感器的值的指令`, function() {
          let fourKeys = auriga.FourKeys(6).key(i+2);
          let targetCmd = dataman.auriga.read.fourKeys[i+5];
          let currentCmd = captureReadBuf(fourKeys.getData.bind(fourKeys));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      it('it should be 0 or 1 ', function(done) {
        var resultType;
        auriga.getSensorValue('fourKeys', {
          "port": 6
        }, function(result) {
          assert.isNumber(result); //result is a number
          assert.oneOf(result, [0, 1]) //result is 0 or 1
          done();
        });
      });
    });


    describe('读取板载编码电机的速度：EncoderMotorOnBoard(0, 1／2, 2)', function() {
      let slots = [1, 2];
      for (let i = 0; i < slots.length; i++) {
        let slot = slots[i];
        it(`发送读取板载slot ${slot} 上的速度的指令`, function() {
          let encoderMotorOnBoard = auriga.EncoderMotorOnBoard(slot);
          let targetCmd = dataman.auriga.read.encoderMotorOnBoard[i];
          let currentCmd = captureReadBuf(encoderMotorOnBoard.getSpeed.bind(encoderMotorOnBoard));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      it('it should be a number between 0~1024', function(done) {
        var resultType;
        auriga.getSensorValue('encoderMotorOnBoard', {
          "port": 0,
          "slot": 1
        }, function(result) {
          assert.isNumber(result); //result is a number
          assert.isAtLeast(result, 0); //result >= 0
          assert.isAtMost(result, 1024); //result <= 1024
          done();
        });
      });
    });


    describe('读取板载编码电机的角度位置：EncoderMotorOnBoard(0, 1／2, 1)', function() {
      let slots = [1, 2];
      for (let i = 0; i < slots.length; i++) {
        let slot = slots[i];
        it(`发送读取板载slot ${slot} 上的位置的指令`, function() {
          let encoderMotorOnBoard = auriga.EncoderMotorOnBoard(slot);
          let targetCmd = dataman.auriga.read.encoderMotorOnBoard[i+2];
          let currentCmd = captureReadBuf(encoderMotorOnBoard.getAngle.bind(encoderMotorOnBoard));
          expect(currentCmd).to.equal(targetCmd);
        });
      }

      it('it should be a number between -2147483648~2147483647', function(done) {
        var resultType;
        auriga.getSensorValue('encoderMotorOnBoard', {
          "port": 0,
          "slot": 1
        }, function(result) {
          assert.isNumber(result); //result is a number
          assert.isAtLeast(result, -2147483648); //result >= -2147483648
          assert.isAtMost(result, 2147483647); //result <= 2147483647
          done();
        });
      });
    });


    describe('主板通用命令-读取电压：auriga.getVoltage(callback)', function() {
      it(`发送读取主板电压的指令`, function() {
        let targetCmd = dataman.auriga.read.voltage[0];
        let currentCmd = captureReadBuf(auriga.getVoltage.bind(auriga));
        expect(currentCmd).to.equal(targetCmd);
      });

      it('it should be a number between 0~255', function(done) {
        var resultType;
        auriga.getSensorValue('firmwareMode', {
          "type": 112
        }, function(result) {
          assert.isNumber(result); //result is a number
          assert.isAtLeast(result, 0); //result >= 0
          assert.isAtMost(result, 255); //result <= 255
          done();
        });
      });
    });


    describe('主板通用命令-读取模式：auriga.getFirmwareMode(0, 113)', function() {
      it('发送读取主板模式的指令', function() {
        let targetCmd = dataman.auriga.read.mode[0];
        let currentCmd = captureReadBuf(auriga.getFirmwareMode.bind(auriga));
        expect(currentCmd).to.equal(targetCmd);
      });

      it('it should be a number between 0～4', function(done) {
        var resultType;
        auriga.getSensorValue('firmwareMode', {
          "type": 113
        }, function(result) {
          assert.isNumber(result); //result is a number
          assert.oneOf(result, [0, 1, 2, 3.4]) //result is 0 /1/2/3/4
          done();
        });
      });
    });
    //智能舵机
  });
});