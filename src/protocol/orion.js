var Board = require("../core/board");
var utils = require("../core/utils");
var SETTINGS = require("./settings");
var _ = require('underscore');

var board = new Board();

function Orion(conf) {
  this._config = _.extend(SETTINGS.DEFAULT_CONF, conf || {});
  board.init(this._config);

  /**
   * Set dc motor speed.
   * @param {number} port  port number, vailable is: 1,2,3,4
   * @param {number} speed speed, the range is -255 ~ 255
   * @example
   *     ff 55 06 00 02 0a 01 ff 00
   */
  this.setDcMotor = function(port, speed) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x06, 0,
      SETTINGS.WRITE_MODE,
      0x0a,
      port,
      speed & 0xff,
      (speed >> 8) & 0xff
    ];
    board.send(a);
  },

  /**
   * Set encoder motor speed.
   * @param {number} slot  slot number, vailable is: 1,2
   * @param {number} speed speed, the range is -255 ~ 255
   * @example
   *     ff 55 07 00 02 3d 00 01 64 00
   */
  // this.setEncoderMotorBoard = function(slot, speed) {
  //   var a = [
  //     SETTINGS.COMMAND_HEAD[0],
  //     SETTINGS.COMMAND_HEAD[1],
  //     0x07, 0,
  //     SETTINGS.WRITE_MODE,
  //     0x3d,
  //     0,
  //     slot,
  //     speed & 0xff,
  //     (speed >> 8) & 0xff
  //   ];
  //   board.send(a);
  // };

  /**
   * Set both left speed and right speed with one command.
   * @param {number} leftSpeed  left speed, the range is -255 ~ 255
   * @param {number} rightSpeed right speed, the range is -255 ~ 255
   * @example
   *     ff 55 05 00 01 05 06 01
   */
  this.setJoystick = function(leftSpeed, rightSpeed) { //setJoystick
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x05, 0,
      SETTINGS.WRITE_MODE,
      0x05,
      leftSpeed & 0xff,
      (leftSpeed >> 8) & 0xff,
      rightSpeed & 0xff,
      (rightSpeed >> 8) & 0xff
    ];
    board.send(a);
  };

  /**
   * Set speed for balance mode.
   * @param {number} port       port number, the port on board id default 0
   * @param {number} turnDegree turn extend, -255 ~ 255
   * @param {number} speed      speed, -255 ~ 255
   * @example
   *     ff 55 08 00 02 34 00 64 00 64 00
   */
  this.setVirtualJoystickForBalance = function(port, turnExtent, speed) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x08, 0,
      SETTINGS.WRITE_MODE,
      0x34,
      turnExtent & 0xff,
      (turnExtent >> 8) & 0xff,
      speed & 0xff,
      (speed >> 8) & 0xff
    ];
    board.send(a);
  };

  /**ok
   * Set stepper motor speed. 步进电机
   * @param {[type]} port     port number, vailable is: 1,2
   * @param {[type]} speed    speed, the range is 0 ~ 3000
   * @param {[type]} distance distance, the range is -2147483648 ~ 2147483647
   * @example
   *     ff 55 08 00 02 28 01 b8 0b e8 03
   */
  this.setStepperMotor = function(port, speed, distance) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x08, 0,
      SETTINGS.WRITE_MODE,
      28,
      port,
      speed & 0xff,
      (speed >> 8) & 0xff,
      distance & 0xff,
      (distance >> 8) & 0xff
    ];
    board.send(a);
  };

  /**
   * Set RgbFourLed electronic module color.
   * @param {number} port     port number, vailable is: 0(on board), 6,7,8,9,10
   * @param {number} slot     slot number, vailable is: 1,2
   * @param {number} position led position, 0 signify all leds.
   * @param {number} r        red, the range is 0 ~ 255
   * @param {number} g        green, the range is 0 ~ 255
   * @param {number} b        blue, the range is 0 ~ 255
   * @example
   *     ff 55 09 00 02 08 06 02 00 ff 00 00
   */
  this.setLed = function(port, slot, position, r, g, b) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x09, 0,
      SETTINGS.WRITE_MODE,
      0x08,
      port,
      slot,
      position, red, green, blue
    ];
    board.send(a);
  };

  /**
   * Set board mode.
   * @param {number} mode board mode,
   *     0: bluetooth mode
   *     1: ultrasonic mode
   *     2: balance mode
   *     3: infrared mode
   *     4: linefollow mode
   * @example
   *     ff 55 05 00 02 3c 11 00
   */
  this.setFirmwareMode = function(mode) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x05, 0,
      SETTINGS.WRITE_MODE,
      0x3c,
      0x11, // 0x11 means auriga
      mode
    ];
    board.send(a);
  };

  /**
   * Set Servo speed.
   * @param {[type]} port   port number, vailable is 6,7,8,9,10
   * @param {[type]} slot   slot number, vailable is 1,2
   * @param {[type]} degree servo degree, the range is 0 ~ 180
   */
  this.setServoMotor = function(port, slot, degree) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x06, 0,
      SETTINGS.WRITE_MODE,
      0x0b,
      port,
      slot,
      degree
    ];
    board.send(a);
  };

  /**
   * Set Seven-segment digital tube number.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {float} number  the number to be displayed
   * @exmpa
   *     ff 55 08 00 02 09 06 00 00 c8 42
   */
  this.setSevenSegment = function(port, number) {
    var byte4Array = utils.float32ToBytes(number);
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x08, 0,
      SETTINGS.WRITE_MODE,
      0x09,
      port,
      parseInt(byte4Array[0], 16),
      parseInt(byte4Array[1], 16),
      parseInt(byte4Array[2], 16),
      parseInt(byte4Array[3], 16)
    ];
    board.send(a);
  };

  /**
   * Set led matrix chart.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {number} xAxis  x position
   * @param {number} yAxis  y position
   * @param {number} length chart length
   * @param {string} chart  chart
   * @exmaple
   *     ff 55 0a 00 02 29 06 01 00 07 02 48 69
   */
  this.setLedMatrixChart = function(port, xAxis, yAxis, length, chart) {

  };


  /**
   * Set led matrix emotion.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {number} xAxis      x position
   * @param {number} yAxis      y position
   * @param {?} motionData emotion data to be displayed
   * @example
   *     ff 55 17 00 02 29 06 02 00 00 00 00 40 48 44 42 02 02 02 02 42 44 48 40 00 00
   */
  this.setLedMatrixEmotion = function(port, xAxis, yAxis, motionData) {

  };

  /**
   * Set led matrix time.
   * @param {number} separator time separator, 01 signify `:`, 02 signify ` `
   * @param {number} hour      hour number
   * @param {number} minute    minute number
   * @example
   *     ff 55 08 00 02 29 06 03 01 0a 14
   */
  this.setLedMatrixTime = function(separator, hour, minute) {

  };

  /**
   * Set led matrix number.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {float} number the number to be displayed
   * @exmaple
      ff 55 09 00 02 29 06 04 00 00 00 00
   */
  this.setLedMatrixNumber = function(port, number) {
    var byte4Array = utils.float32ToBytes(number);
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x09, 0,
      SETTINGS.WRITE_MODE,
      0x29,
      port,
      0x04,
      parseInt(byte4Array[0], 16),
      parseInt(byte4Array[1], 16),
      parseInt(byte4Array[2], 16),
      parseInt(byte4Array[3], 16)
    ];
    board.send(a);
  };

  this.readUltrasonic = function(index, port) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x04, index,
      SETTINGS.READ_MODE,
      0x01,
      port
    ];
    board.send(a);
  };
}


// clone method and attributes from board to Orion.
Orion.prototype = board;

if (typeof window !== "undefined") {
  window.Orion = Orion;
}

module.exports = Orion;