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
      joystick: ["ff 55 07 00 02 05 64 00 64 00", "ff 55 07 00 02 05 ff 00 ff 00", "ff 55 07 00 02 05 01 ff 01 ff", "ff 55 07 00 02 05 00 00 96 00", "ff 55 07 00 02 05 9c ff 64 00", "ff 55 07 00 02 05 ff 00 ff 00", "ff 55 07 00 02 05 01 ff 01 ff"],
      virtualJoystickForBalance: ["ff 55 08 00 02 34 00 64 00 64 00", "ff 55 08 00 02 34 00 ff 00 ff 00", "ff 55 08 00 02 34 00 01 ff 01 ff", "ff 55 08 00 02 34 00 00 00 96 00", "ff 55 08 00 02 34 00 9c ff 64 00", "ff 55 08 00 02 34 00 ff 00 ff 00", "ff 55 08 00 02 34 00 01 ff 01 ff"],
      stepperMotor: ["ff 55 0a 00 02 28 01 b8 0b e8 03 00 00", "ff 55 0a 00 02 28 02 b8 0b e8 03 00 00", "ff 55 0a 00 02 28 03 00 00 e8 03 00 00", "ff 55 0a 00 02 28 04 00 00 e8 03 00 00", "ff 55 0a 00 02 28 04 d0 07 e8 03 00 00", "ff 55 0a 00 02 28 03 b8 0b ff ff ff 7f", "ff 55 0a 00 02 28 02 b8 0b 00 00 00 80", "ff 55 0a 00 02 28 01 b8 0b 00 00 00 00", "ff 55 0a 00 02 28 03 b8 0b ff ff ff 7f", "ff 55 0a 00 02 28 03 b8 0b f8 ff ff ff"],
      led: ["ff 55 09 00 02 08 06 02 00 ff 00 00", "ff 55 09 00 02 08 06 02 02 ff 00 00", "ff 55 09 00 02 08 06 02 05 ff 00 00", "ff 55 09 00 02 08 06 02 00 7d 64 37", "ff 55 09 00 02 08 06 02 00 00 00 00", "ff 55 09 00 02 08 06 02 00 ff 00 00", "ff 55 09 00 02 08 06 02 00 00 00 00", "ff 55 09 00 02 08 00 02 00 00 00 ff", "ff 55 09 00 02 08 07 01 00 00 ff 00", "ff 55 09 00 02 08 08 02 00 ff ff ff", "ff 55 09 00 02 08 09 01 00 64 64 9b", "ff 55 09 00 02 08 0a 02 00 00 00 00"],
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
      version: ["ff 55 03 00 01 00", "09.01.012"],//"FF 55 00 04 09 30 39 2E 30 31 2E 30 30 32 0D 0A"],
      ultrasonic: ["ff 55 04 00 01 01 0a"],
      temperature: ["ff 55 05 00 01 02 0a 02"],
      light: ["ff 55 04 00 01 03 0c"],
      potentionmeter: ["ff 55 04 00 01 04 06"],
      joystick: ["ff 55 05 00 01 05 06 01"],
      gyro: ["ff 55 05 00 01 06 01 01", "ff 55 05 00 01 06 00 01"],
      sound: ["ff 55 04 00 01 07 0e","ff 55 04 00 01 07 07"],
      temperatureOnBoard: ["ff 55 04 00 01 1b 0d"],
      pirmotion: ["ff 55 04 00 01 0f 06"],
      lineFollower: ["ff 55 04 00 01 11 06"],
      limitSwitch: ["ff 55 05 00 01 15 06 02"],
      compass: ["ff 55 04 00 01 1a 06"],
      humiture: ["ff 55 05 00 01 17 06 01"],
      flame: ["ff 55 04 00 01 18 06"],
      gas: ["ff 55 04 00 01 19 06"],
      touch: ["ff 55 04 00 01 33 06"],
      fourKeys: ["ff 55 05 00 01 16 06 01"],
      encoderMotorOnBoard: ["ff 55 06 00 01 3d 00 01 02", "ff 55 06 00 01 3d 00 01 01"],
      voltage: ["ff 55 04 00 01 3c 70"],
      mode: ["ff 55 04 00 01 3c 71"]
    }
  }
};


module.exports = Dataman;

