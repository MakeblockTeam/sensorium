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
      stepperMotor: ["ff 55 0a 00 02 28 01 b8 0b e8 03 00 00", ""],
      led: ["ff 55 09 00 02 08 06 02 00 ff 00 00", ""],
      firmwareModeBlueTooth: ["ff 55 05 00 02 3c 11 00", ""],
      firmwareModeObstacle: ["ff 55 05 00 02 3c 11 01", ""],
      firmwareModeBalance: ["ff 55 05 00 02 3c 11 02", ""],
      firmwareModeInfrared: ["ff 55 05 00 02 3c 11 03", ""],
      firmwareModeLineFollow: ["ff 55 05 00 02 3c 11 04", ""],
      servo: ["ff 55 06 00 02 0b 06 01 5a",""],
      sevenSegment: ["ff 55 08 00 02 09 06 00 00 c8 42",""],
      ledMatrixChar: ["ff 55 0a 00 02 29 06 01 00 07 02 48 69",""],
      ledMatrixEmotion: ["ff 55 17 00 02 29 06 02 00 00 00 00 40 48 44 42 02 02 02 02 42 44 48 40 00 00", ""],
      ledMatrixTime: ["ff 55 08 00 02 29 06 03 01 0a 14", ""],
      ledMatrixNumber: ["ff 55 09 00 02 29 06 04 00 00 00 00",""],
      shutter: ["ff 55 05 00 02 14 06 02", ""],
      tone: ["ff 55 08 00 02 22 09 41 00 f4 01", ""],
      encoder: ["ff 55 0b 00 02 0c 08 01 96 00 00 00 34 44", ""],
      reset: ["ff 55 02 00 04", ""]
    },
    // 20 个
    read: {
      version: ["ff 55 03 00 01 00", "FF 55 00 04 09 30 39 2E 30 31 2E 30 30 32 0D 0A"],
      ultrasonic: ["ff 55 04 00 01 01 0a", "number", "1"],
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

