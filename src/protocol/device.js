/**
 * @fileOverview all electronic module‘s type name and device id.
 * 需要统下列电子模块名称，保证唯一性
 */

var Device = {
    "version":                          0,
    "ultrasonic":                       1,
    "temperature":                      2,
    "light":                            3,
    "potentionmeter":                   4,
    "virtualJoystick":                  5,
    "gyro":                             6,
    "sound":                            7,
    "led":                              8,
    "sevenSegment":                     9,
    "dcMotor":                          10,
    "servo":                            11,
    "encoder":                          12,
    "ir":                               13,
    "pirmotion":                        15,
    "infrared":                         16,
    "lineFollower":                     17,
    "shutter":                          20,
    "limitSwitch":                      21,
    "button":                           22,
    "humiture":                         23,
    "flame":                            24,
    "gas":                              25,
    "compass":                          26,
    "temperatureOnBoard":               27,
    "digital":                          30,
    "analog":                           31,
    "pwm":                              32,
    "servoPin":                         33,
    "tone":                             34,
    "buttonInner":                      35,
    "ultrasonicArduino":                36,
    "pulsein":                          37,
    "stepperMotor":                     40,
    "ledMatrix":                        41,
    "timer":                            50,
    "touch":                            51,
    "virtualJoystickForBalance":        52,
    "firmwareMode":                     60,
      //Secondary command
      "setStarterMode":                 0x10,
      "setAurigaMode":                  0x11,
      "setMegapiMode":                  0x12,
      "getBatteryPower":                0x70,
      "getAurigaMode":                  0x71,
      "getMegapiMode":                  0x72,
    "encoderMotorBoard":                61,
      //Read type
      "encoderMotorBoardPos":           0x01,
      "encoderMotorBoardSpeed":         0x02
};

module.exports = Device;