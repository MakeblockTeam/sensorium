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
   * @param {number} port  port number, vailable is: 1，2, M1(09), M2(0a)
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
    return board.send(a);
  },

  /**
   * Set both left speed and right speed with one command.
   * @param {number} leftSpeed  left speed, the range is -255 ~ 255
   * @param {number} rightSpeed right speed, the range is -255 ~ 255
   * @example
   *     ff 55 07 00 02 05 64 00 64 00
   */
  this.setJoystick = function(leftSpeed, rightSpeed) { //setJoystick
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x07, 0,
      SETTINGS.WRITE_MODE,
      0x05,
      leftSpeed & 0xff,
      (leftSpeed >> 8) & 0xff,
      rightSpeed & 0xff,
      (rightSpeed >> 8) & 0xff
    ];
    return board.send(a);
  };

  /**
   * Set stepper motor speed.
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
      0x1c, //28
      port,
      speed & 0xff,
      (speed >> 8) & 0xff,
      distance & 0xff,
      (distance >> 8) & 0xff
    ];
    return board.send(a);
  };

  /**
   * Set RgbFourLed electronic module color.
   * @param {number} port     port number, vailable is: 3,4,6,7,8
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
      position, r, g, b
    ];
    return board.send(a);
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
  // TODO: 暂缺文档
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
    return board.send(a);
  };

  /**
   * Set Servo speed.
   * @param {[type]} port   port number, vailable is 3,4,6,7,8
   * @param {[type]} slot   slot number, vailable is 1,2
   * @param {[type]} degree servo degree, the range is 0 ~ 180
   * @example
   *     ff 55 06 00 02 0b 06 01 5a
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
    return board.send(a);
  };

  /**
   * Set Seven-segment digital tube number.
   * @param {number} port   port number, vailable is 3,4,5,6
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
      byte4Array[0],
      byte4Array[1],
      byte4Array[2],
      byte4Array[3]
    ];
    return board.send(a);
  }

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
    return board.send(a);
  };

  /**
   * Set shutter.
   * @param {number} port   port number, vailable is 3,4,5,6,7,8
   * @param {number} action 0: 按下快门; 1: 松开快门; 2: 聚焦; 3: 停止聚焦
   * @exmaple
      ff 55 05 00 02 14 06 02
   */
  this.setShutter = function(port, action) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x05,0,
      SETTINGS.WRITE_MODE,
      0x14,
      port,
      action
    ];
    return board.send(a);
  };

  /**
   * reset all sensors and motors on board.
   * @exmaple
      ff 55 02 00 04
   */
  this.reset = function() {
    var a = [SETTINGS.COMMAND_HEAD[0], SETTINGS.COMMAND_HEAD[1], 0x02, 0x00, 0x04];
    return board.send(a);
  };

  /**
   * read verion of board
   * @param  {Number} index index of command
   * @exaple
   *     ff 55 03 00 01 00
   */
  this.readVersion = function(index) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x03, index,
      SETTINGS.READ_MODE,
      0x00
    ];
    return board.send(a);
  };

  /* read sensor */
  /**
   * mainly used for distance measurement, the measurement range is 0 to 500 cm,
   * the execution of the command will have more than 100 milliseconds latency.
   * So the frequency of the host to send this instruction shoulds not be too high.
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 3,4,5,6,7,8
   * @return {Number}       [description]
   * @example
   *   ff 55 04 00 01 01 03
   */
  this.readUltrasonic = function(index, port) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x04, index,
      SETTINGS.READ_MODE,
      0x01,
      port
    ];
    return board.send(a);
  };

  /**
   * read temperature, Each port can connect two road temperature sensor.
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 3,4,5,6,7,8
   * @param  {Number} slot  vailable: slot1(1), slot2(2)
   * @return {Number}       [description]
   * @example
   *   ff 55 05 00 01 02 03 01
   */
  this.readTemperature = function(index, port, slot) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x05, index,
      SETTINGS.READ_MODE,
      0x02,
      port,
      slot
    ];
    return board.send(a);
  };

  /**
   * The light sensor module or onboard (lamp) light sensors numerical reading.
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6,7,8
   * @return {Number}       [description]
   * @example
   *   ff 55 04 00 01 03 06
   */
  this.readLight = function(index, port) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x04, index,
      SETTINGS.READ_MODE,
      0x03,
      port
    ];
    return board.send(a);
  };

  /**
   * read Potentionmeter
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6，7，8
   * @return {Number}       [description]
   * @example
   *   ff 55 04 00 01 04 06
   */
  this.readPotentionmeter = function(index, port) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x04, index,
      SETTINGS.READ_MODE,
      0x04,
      port
    ];
    return board.send(a);
  };

  /**
   * read josystic value
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6，7，8
   * @param  {Number} axis  1: x-axis; 2: y-axis;
   * @example
   *   ff 55 05 00 01 05 06 01
   */
  this.readJoystick = function(index, port, axis) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x05, index,
      SETTINGS.READ_MODE,
      0x05,
      port,
      axis
    ];
    return board.send(a);
  };

  /**
   * read volume testing MIC module parameters
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6，7，8
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 07 06
   */
  this.readSound = function(index, port) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x04, index,
      SETTINGS.READ_MODE,
      0x07,
      port
    ];
    return board.send(a);
  };

  /**
   * read pyroelectric infrared sensor
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 1,2,3,4
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 0f 06
   */
  //TODO: 暂缺文档
  this.readPirmotion = function(index, port) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x04, index,
      SETTINGS.READ_MODE,
      0x0f,
      port
    ];
    return board.send(a);
  };

  /**
   * read LineFollower sensor
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 3, 4, 6
   * @return {Number} number,
   *  00   0
      01   1
      10   2
      11   3
      when 0 said has a black line
    * @example
    *   ff 55 04 00 01 11 06
   */
  this.readLineFollower = function(index, port) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x04, index,
      SETTINGS.READ_MODE,
      0x11,
      port
    ];
    return board.send(a);
  };

  /**
   * read limitSwitch
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 3,4,5,6,7,8
   * @param  {Number} slot  vailable: SLOT1(01)   SLOT2(02)
   * @return {Number}       [description]
   * @example
   *   ff 55 05 00 01 15 06 02
   */
  this.readLimitSwitch = function(index, port, slot) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x05, index,
      SETTINGS.READ_MODE,
      0x15,
      port,
      slot
    ];
    return board.send(a);
  };

  /**
   * read humiture
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 3,4,5,6,7,8
   * @param  {Number} temperature(01) humidity (00)
   * @return {Number}       [description]
   * @example
   *   ff 55 05 00 01 17 06 01
   */
  this.readHumiture = function(index, port, type) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x05, index,
      SETTINGS.READ_MODE,
      0x17,
      port,
      type
    ];
    return board.send(a);
  };

  /**
   * read flame
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6,7,8
   * @return {Number}       [description]
   * @example
   *   ff 55 04 00 01 18 06
   */
  this.readFlame = function(index, port) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x04, index,
      SETTINGS.READ_MODE,
      0x18,
      port
    ];
    return board.send(a);
  };

  /**
   * Used to get the harmful gas density
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6,7,8
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 19 06
   */
  this.readGas = function(index, port) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x04, index,
      SETTINGS.READ_MODE,
      0x19,
      port
    ];
    return board.send(a);
  };

  /**
   * read touch sensor
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 3,4,5,6,7,8
   * @return {Number}       [description]
   * @example
   *   ff 55 04 00 01 33 06
   */
  this.readTouch = function(index, port) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x04, index,
      SETTINGS.READ_MODE,
      0x33,
      port
    ];
    return board.send(a);
  };

  /**
   * To determine whether the corresponding button is pressed.
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6,7,8
   * @param  {Number} key   vailable:1,2,3,4
   * @return {Number}       [description]
   * @example
   *   ff 55 05 00 01 16 06 01
   */
  this.readFourKeys = function(index, port, key) {
    var a = [
      SETTINGS.COMMAND_HEAD[0],
      SETTINGS.COMMAND_HEAD[1],
      0x05, index,
      SETTINGS.READ_MODE,
      0x16,
      port,
      key
    ];
    return board.send(a);
  };
}


// clone method and attributes from board to Orion.
Orion.prototype = board;

if (typeof window !== "undefined") {
  window.Orion = Orion;
}

module.exports = Orion;