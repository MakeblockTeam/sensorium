/**
 * @fileOverview data for test.
 */

var Dataman = {
  auriga: {
    // 21 个
    write: {
      // 第一个参数是发送值，第二个参数是接收值
      dcMotor: ["ff 55 06 00 02 0a 01 ff 00", "ff 55 0d 0a"],
      encoderMotorBoard: ["ff 55 07 00 02 3d 00 01 64 00", "ff 55 0d 0a"],
      joystick: ["ff 55 07 00 02 05 64 00 64 00", ""],
      virtualJoystickForBalance: ["ff 55 08 00 02 34 00 64 00 64 00", ""],
      stepperMotor: [],
      led: [],
      firmwareModeBlueTooth: [],
      firmwareModeObstacle: [],
      firmwareModeBalance: [],
      firmwareModeInfrared: [],
      firmwareModeLineFollow: [],
      servo: [],
      sevenSegment: [],
      ledMatrixChar: [],
      ledMatrixEmotion: [],
      ledMatrixTime: [],
      ledMatrixNumber: [],
      shutter: [],
      tone: [],
      encoder: [],
      reset: []
    },
    // 20 个
    read: {
      version: ["ff 55 03 00 01 00", "FF 55 00 04 09 30 39 2E 30 31 2E 30 30 32 0D 0A"],
      ultrasonic: ["ff 55 04 00 01 01 0a", "ff 55 00 02 e6 9e 16 41 0d 0a"],
      temperature: [],
      potentionmeter: [],
      joystick: [],
      gyro: [],
      sound: [],
      temperatureOnBoard: [],
      pirmotion: [],
      lineFollower: [],
      limitSwitch: [],
      compass: [],
      humiture: [],
      flame: [],
      gas: [],
      touch: [],
      fourKeys: [],
      encoderMotorBoard: [],
      voltage: [],
      mode: []
    }
  }
};


module.exports = Dataman;

