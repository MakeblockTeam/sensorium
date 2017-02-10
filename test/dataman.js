/**
 * @fileOverview data for test.
 */

var Dataman = {
  auriga: {
    // 21 个
    write: {
      //执行指令 
      dcMotor: ["ff 55 06 00 02 0a 01 ff 00", "ff 55 06 00 02 0a 02 01 ff", "ff 55 06 00 02 0a 03 64 00", "ff 55 06 00 02 0a 04 ff 00", "ff 55 06 00 02 0a 01 01 ff"],
      encoderMotorBoard: ["ff 55 07 00 02 3d 00 01 64 00", "ff 55 07 00 02 3d 00 02 ff 00", "ff 55 07 00 02 3d 00 01 01 ff", "ff 55 07 00 02 3d 00 01 ff 00", "ff 55 07 00 02 3d 00 01 01 ff"],
      joystick: ["ff 55 07 00 02 05 64 00 64 00", "ff 55 07 00 02 05 ff 00 ff 00", "ff 55 07 00 02 05 01 ff 01 ff", "ff 55 07 00 02 05 00 00 96 00", "ff 55 07 00 02 05 ?? ?? 64 00", "ff 55 07 00 02 05 ff 00 ff 00", "ff 55 07 00 02 05 01 ff 01 ff"],
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
      ledMatrixChar: ["ff 55 0a 00 02 29 06 01 00 01 02 48 69",""],
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
      //读指令 
      version: ["ff 55 03 00 01 00", "FF 55 00 04 09 30 39 2E 30 31 2E 30 30 32 0D 0A"],
      ultrasonic: ["ff 55 04 00 01 01 0a", "number", "1"],
      temperature: ["ff 55 05 00 01 02 0a 02", "number", "1"],
      light: ["ff 55 04 00 01 03 0c", "number", "1"],
      potentionmeter: ["ff 55 04 00 01 04 06", "number", "1"],
      joystick: ["ff 55 05 00 01 05 06 01", "number", "1"],
      gyro: ["ff 55 05 00 01 06 01 01", "ff 55 05 00 01 06 00 01", "number", "1"],
      sound: ["ff 55 04 00 01 07 0e","ff 55 04 00 01 07 07","number", "1"],
      temperatureOnBoard: ["ff 55 04 00 01 1b 0d", "number", "1"],
      pirmotion: ["ff 55 04 00 01 0f 06", "number", "1"],
      lineFollower: ["ff 55 04 00 01 11 06", "number", "1"],
      limitSwitch: ["ff 55 05 00 01 15 06 02", "number", "1"],
      compass: ["ff 55 04 00 01 1a 06", "number", "1"],
      humiture: ["ff 55 05 00 01 17 06 01", "number", "1"],
      flame: ["ff 55 04 00 01 18 06", "number", "1"],
      gas: ["ff 55 04 00 01 19 06", "number", "1"],
      touch: ["ff 55 04 00 01 33 06", "number", "1"],
      fourKeys: ["ff 55 05 00 01 16 06 01", "number", "1"],
      encoderMotorOnBoard: ["ff 55 06 00 01 3d 00 01 02", "number","1"],
      voltage: ["ff 55 04 00 01 3c 70", "number", "1"],
      mode: ["ff 55 04 00 01 3c 71", "number", "1"]
    }
  }
};


module.exports = Dataman;

