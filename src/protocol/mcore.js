var Board = require("../core/board");
var utils = require("../core/utils");
var SETTINGS = require("./settings");
var _ = require('underscore');

var board = new Board();

function Mcore(conf) {
  this._config = _.extend(SETTINGS.DEFAULT_CONF, conf || {});
  board.init(this._config);

  /**
   * Set dc motor speed.
   * @param {number} port  port number, vailable is: 1,2,3,4
   * @param {number} speed speed, the range is -255 ~ 255
   * @example
   *     ff 55 06 00 02 0a 09 32 00
   */
  this.setDcMotor = function(port, speed) {
    var a = [
      0xff, 0x55,
      0x06, 0,
      SETTINGS.WRITE_MODE,
      0x0a,
      port,
      speed & 0xff,
      (speed >> 8) & 0xff
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * Set RgbFourLed electronic module color.
   * @param {number} port     port number, vailable is: 07(on board), 1,2,3,4
   * @param {number} slot     slot number, vailable is: 1,2, 2 is default.
   * @param {number} position led position, 0 signify all leds.
   * @param {number} r        red, the range is 0 ~ 255
   * @param {number} g        green, the range is 0 ~ 255
   * @param {number} b        blue, the range is 0 ~ 255
   * @example
   *     ff 55 09 00 02 08 07 02 00 ff 00 00
   */
  this.setFourLed = this._setLed = function(port, slot, position, r, g, b) {
    var a = [
      0xff, 0x55,
      0x09, 0,
      SETTINGS.WRITE_MODE,
      0x08,
      port,
      slot,
      position, r, g, b
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * set Led on mcore board
   * @param {[type]} position [description]
   * @param {number} position led position, 0: all ,1: left, 2: right.
   * @param {number} r        red, the range is 0 ~ 255
   * @param {number} g        green, the range is 0 ~ 255
   * @param {number} b        blue, the range is 0 ~ 255
   * @example
   *     ff 55 09 00 02 08 07 02 00 ff 00 00
   */
  this.setLed = function(position, r, g, b) {
    this._setLed(7, 2, position, r, g, b);
  }

  /**
   * turn off led on mcore board.
   * @param {number} position led position, 0: all ,1: left, 2: right.
   * @return {[type]}          [description]
   */
  this.turnOffLed = function(position) {
    this._setLed(7, 2, position, 0, 0, 0);
  }

  /**
   * Set Servo speed.
   * @param {Number} port   port number, vailable is 6,7,8,9,10
   * @param {Number} slot   slot number, vailable is 1,2
   * @param {Number} degree servo degree, the range is 0 ~ 180
   */
  this.__setServoMotor = function(port, slot, degree) {
    var a = [
      0xff, 0x55,
      0x06, 0,
      SETTINGS.WRITE_MODE,
      0x0b,
      port,
      slot,
      degree
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * Set Seven-segment digital tube number.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {float} number  the number to be displayed
   * @exmpa
   *     ff 55 08 00 02 09 06 00 00 c8 42
   */
  this.__setSevenSegment = function(port, number) {
    var byte4Array = utils.float32ToBytes(number);
    var a = [
      0xff, 0x55,
      0x08, 0,
      SETTINGS.WRITE_MODE,
      0x09,
      port,
      parseInt(byte4Array[0], 16),
      parseInt(byte4Array[1], 16),
      parseInt(byte4Array[2], 16),
      parseInt(byte4Array[3], 16)
    ];
    var c = board.send(a);
    return c;
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
  this.__setLedMatrixChart = function(port, xAxis, yAxis, length, chart) {

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
  this.__setLedMatrixEmotion = function(port, xAxis, yAxis, motionData) {

  };

  /**
   * Set led matrix time.
   * @param {number} separator time separator, 01 signify `:`, 02 signify ` `
   * @param {number} hour      hour number
   * @param {number} minute    minute number
   * @example
   *     ff 55 08 00 02 29 06 03 01 0a 14
   */
  this.__setLedMatrixTime = function(separator, hour, minute) {

  };

  /**
   * Set led matrix number.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {float} number the number to be displayed
   * @exmaple
      ff 55 09 00 02 29 06 04 00 00 00 00
   */
  this.__setLedMatrixNumber = function(port, number) {
    var byte4Array = utils.float32ToBytes(number);
    var a = [
      0xff, 0x55,
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
    var c = board.send(a);
    return c;
  };

  /**
   * set Shutter action.
   * @param {Number} port    number   vailable is 09
   * @param {Number} actionType number vailable is: Shutter down(00)
      Shutter up(01)
      Begin to focus(02)
      stop focus(03)
      @example
        ff 55 05 00 02 14 06 02
   */
  this.__setShutter = function(port, actionType) {
    var a = [
      0xff, 0x55,
      0x05, 0,
      SETTINGS.WRITE_MODE,
      0x14,
      port,
      actionType
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * set arduino Digital level.
   * @param {Number} port  number   vailable is 09
   * @param {Number} level number vailable is:low level(00)  high level(01)
   * @example
   *   ff 55 05 00 02 1e 09 01
   */
  this.__setDigital = function(port, level) {
    var a = [
      0xff, 0x55,
      0x05, 0,
      SETTINGS.WRITE_MODE,
      0x1e,
      port,
      level
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * set arduino pwm output
   * @param {Number} port [description]
   * @param {Number} pwm  number vailable is:0 ~ 255
   * @example
   *   ff 55 05 00 02 20 05 32
   */
  this.__setPwm = function(port, pwm) {
    var a = [
      0xff, 0x55,
      0x05, 0,
      SETTINGS.WRITE_MODE,
      0x20,
      port,
      pwm
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * set buzzer play.
   * @param {Number} tone     vailable: C2(65) ~ D8(4699)
   * @param {Number} rhythmTime vailable:1/8(125)  ~  1/2(2000)
   * @example
   *  C4，quater beat：ff 55 07 00 02 22 06 01 fa 00
   */
  this._setBuzzer = function(tone, rhythmTime) {
    var a = [
      0xff, 0x55,
      0x07, 0,
      SETTINGS.WRITE_MODE,
      0x22,
      tone & 0xff,
      (tone >> 8) & 0xff,
      rhythmTime & 0xff,
      (rhythmTime >> 8) & 0xff
    ];

    // TODO:
    // 老版本的mbot固件
    // if(this.getDeviceInfo().version == "1.2.103") {
    //   a[2] = 5;
    //   a[8] = 0;
    //   a[9] = 0;
    // }

    var c = board.send(a);
    return c;
  };

  this.setTone = function(tone, beat) {
    var TONE_HZ = {
      // 原始数据：D5: 587 "E5": 658,"F5": 698,"G5": 784,"A5": 880,"B5": 988,"C6": 1047
      "A2": 110,"B2": 123,
      "C3": 131,"D3": 147,"E3": 165,"F3": 175,"G3": 196,"A3": 220,
      "B3": 247,"C4": 262,"D4": 294,"E4": 330,"F4": 349,"G4": 392,
      "A4": 440,"B4": 494,"C5": 523,"D5": 555,"E5": 640,"F5": 698,
      "G5": 784,"A5": 880,"B5": 988,"C6": 1047,"D6": 1175,"E6": 1319,
      "F6": 1397,"G6": 1568,"A6": 1760,"B6": 1976,"C7": 2093,"D7": 2349,
      "E7": 2637,"F7": 2794,"G7": 3136,"A7": 3520,"B7": 3951,"C8": 4186,"D8":4699
    };
    this._setBuzzer(TONE_HZ[tone], beat);
  };

  /**
   * set Servo.
   * @param {Number} port  vailable:GPIO9
   * @param {Number} angle vailable:0 ~ 180
   * @example
   * ff 55 05 00 02 21 09 5a
   */
  this._setServoPin = function(port, angle) {
    var a = [
      0xff, 0x55,
      0x05, 0,
      SETTINGS.WRITE_MODE,
      0x21,
      port,
      angle
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * reset firmware run time.
   */
  this._setTimer = function() {
    var a = [
      0xff, 0x55,
      0x03, 0,
      SETTINGS.WRITE_MODE,
      0x50
    ];
  };

  /**
   * read firmware vresion.
   * @return {String}     board number.
   * @example
   * ff 55 03 00 01 00
   */
  this.readVersion = function() {
    var a = [
      0xff, 0x55,
      0x03, 0,
      SETTINGS.READ_MODE,
      0x00
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * mainly used for distance measurement, the measurement range is 0 to 500 cm,
   * the execution of the command will have more than 100 milliseconds latency.
   * So the frequency of the host to send this instruction shoulds not be too high.
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 1,2,3,4
   * @return {Number}       [description]
   * @example
   *     ff 55 04 00 01 01 03
   */
  this.readUltrasonic = function(index, port) {
    var a = [
      0xff, 0x55,
      0x04, index,
      SETTINGS.READ_MODE,
      0x01,
      port
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * read temperature, Each port can connect two road temperature sensor.
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 1,2,3,4
   * @param  {Number} slot  vailable: slot1(1), slot2(2)
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 02 01 02
   */
  this.readTemperature = function(index, port, slot) {
    var a = [
      0xff, 0x55,
      0x05, index,
      SETTINGS.READ_MODE,
      0x02,
      port,
      slot
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * The light sensor module or onboard (lamp) light sensors numerical reading.
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 3, 4, onbord(06)
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 03 06
   */
  this.readLight = function(index, port) {
    var a = [
      0xff, 0x55,
      0x04, index,
      SETTINGS.READ_MODE,
      0x03,
      port
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * read Potentionmeter
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 3,4
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 04 03
   */
  this.readPotentionmeter = function(index, port) {
    var a = [
      0xff, 0x55,
      0x04, index,
      SETTINGS.READ_MODE,
      0x04,
      port
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * there are two axis, so the command has a parameter is used to
   * set need to get the value of the axial direction.
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 3,4
   * @param  {Number} axis  vailable: X-axis(01)  Y-axis(02)
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 05 03 01
   */
  this.readVirtualJoystick = function(index, port, axis) {
    var a = [
      0xff, 0x55,
      0x05, index,
      SETTINGS.READ_MODE,
      0x05,
      port,
      axis
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * Mbot no onboard gyro, so attitude sensor can only use an external,
   * but don't need to choose the Port in the set parameters.
   * Attitude sensor using the I2C interface, so the sensor can be connected at any port of the 1, 2, 3, 4.
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 1,2,3,4
   * @param  {Number} axis  vailable: X-axis(01)  Y-axis(02)  Z-axis(03)
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 06 00 01
   */
  this.readGyro = function(index, port, axis) {
    var a = [
      0xff, 0x55,
      0x05, index,
      SETTINGS.READ_MODE,
      0x06,
      port,
      axis
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * read volume testing MIC module parameters
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 03
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 07 03
   */
  this.readSound = function(index, port) {
    var a = [
      0xff, 0x55,
      0x04, index,
      SETTINGS.READ_MODE,
      0x07,
      port
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * read ir for send
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: onboard(00)
   * @param  {Number} key   ASCII value,   example: `A`:45
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 0c 00 45
   */
  this.readIrSend = function(index, port, key) {
    var a = [
      0xff, 0x55,
      0x05, index,
      SETTINGS.READ_MODE,
      0x0c,
      port,
      key
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * read ir for receive
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 1,2,3,4，onbord(00)
   * @param  {Number} key   ASCII value,   example: `A`:45
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 0e 00 45
   */
  this.readIrReceive = function(index, port, key) {
    var a = [
      0xff, 0x55,
      0x05, index,
      SETTINGS.READ_MODE,
      0x0e,
      port,
      key
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * read pyroelectric infrared sensor
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 1,2,3,4
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 0f 02
   */
  this.readPirmotion = function(index, port) {
    var a = [
      0xff, 0x55,
      0x04, index,
      SETTINGS.READ_MODE,
      0x0f,
      port
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * read LineFollower sensor
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 1,2,3,4
   * @return {Number} number,
   *  00   0
      01   1
      10   2
      11   3
      when 0 said has a black line
    * @example
    * ff 55 04 00 01 11 02
   */
  this.readLinefollower = function(index, port) {
    var a = [
      0xff, 0x55,
      0x04, index,
      SETTINGS.READ_MODE,
      0x11,
      port
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * read limitSwitch
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 1,2,3,4
   * @param  {Number} slot  vailable: SLOT1(01)   SLOT2(02)
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 15 01 01
   */
  this.readLimitSwitch = function(index, port, slot) {
    var a = [
      0xff, 0x55,
      0x05, index,
      SETTINGS.READ_MODE,
      0x15,
      port,
      slot
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * read compass.
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 1,2,3,4
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 1a 01
   */
  this.readCompass = function(index, port) {
    var a = [
      0xff, 0x55,
      0x04, index,
      SETTINGS.READ_MODE,
      0x1a,
      port
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * read humiture
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 1,2,3,4
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 17 01 00
   */
  this.readHumiture = function(index, port) {
    var a = [
      0xff, 0x55,
      0x05, index,
      SETTINGS.READ_MODE,
      0x17,
      port
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * read flame
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 3,4
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 18 03
   */
  this.readFlame = function(index, port) {
    var a = [
      0xff, 0x55,
      0x04, index,
      SETTINGS.READ_MODE,
      0x18,
      port
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * Used to get the harmful gas density
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 3,4
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 19 03
   */
  this.readGas = function(index, port) {
    var a = [
      0xff, 0x55,
      0x04, index,
      SETTINGS.READ_MODE,
      0x19,
      port
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * read the value of the digital tube feet
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: GPIO  9
   * @param  {Number} level vailable: 00(low)、01(high)
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 02 1e 09 01
   */
  this.readDigital = function(index, port, level) {
    var a = [
      0xff, 0x55,
      0x05, index,
      SETTINGS.READ_MODE,
      0x1e,
      port,
      level
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * read the value of the analog tube feet
   * @param  {Number} index [description]
   * @param  {Number} port  GPIO A0
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 1f 00
   */
  this.readAnalog = function(index, port) {
    var a = [
      0xff, 0x55,
      0x04, index,
      SETTINGS.READ_MODE,
      0x1f,
      port
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * read the firmware running time, the unit is the second (s)
   * @param  {Number} index [description]
   * @return {Number}       [description]
   * @example
   * ff 55 03 00 01 32
   */
  this.readTimer = function(index) {
    var a = [
      0xff, 0x55,
      0x03, index,
      SETTINGS.READ_MODE,
      0x32
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * read touch sensor
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 1,2,3,4
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 33 06
   */
  this.readTouch = function(index, port) {
    var a = [
      0xff, 0x55,
      0x04, index,
      SETTINGS.READ_MODE,
      0x33,
      port
    ];
    var c = board.send(a);
    return c;
  };

  /**
     * To determine whether onboard button is pressed.
     * @param  {Number} index     [description]
     * @param  {Number} port      vailable: 07
     * @param  {Number} keyStatus vailable: 01(release)
00(press)

     * @return {Number}           [description]
     * @example
     * ff 55 05 00 01 23 07 00
     */
  this.readButtonInner = function(index, port, keyStatus) {
    var a = [
      0xff, 0x55,
      0x05, index,
      SETTINGS.READ_MODE,
      0x23,
      port,
      keyStatus
    ];
    var c = board.send(a);
    return c;
  };

  /**
   * To determine whether the corresponding button is pressed.
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 1,2,3,4
   * @param  {Number} key   vailable:1,2,3,4
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 16 03 01
   */
  this.readButton = function(index, port, key) {
    var a = [
      0xff, 0x55,
      0x05, index,
      SETTINGS.READ_MODE,
      0x16,
      port,
      key
    ];
    var c = board.send(a);
    return c;
  };
}


// clone method and attributes from board to Mcore.
Mcore.prototype = board;

if (typeof window !== "undefined") {

  window.Mcore = Mcore;
}

module.exports = Mcore;