/**
 * @fileOverview  Api api list
 */
const utils = require("../core/utils");

/**
 * buf 协议组装器
 * @param  {Object} obj  对象
 * @param  {Number} obj.index  由上位机赋值
 * @param  {Number} obj.mode  查询、执行
 * @param  {Number} obj.id  指令ID
 * @param  {Arguments} args 其他参数
 * @return {Array}      返回数组
 */
function bufAssembler(obj, ...args){
  const modes = [0x01, 0x02];
  const bufHead = [0xff,0x55];
  let bufLength = 0;
  //todo：完善抛错提示
  if(modes.indexOf(obj.mode) === -1){
    throw new Error(`mode should be one of ${modes}`);
  }else if(typeof obj.id === 'undefined'){
    throw new Error(`id should not be empty`);
  }
  const bufAttr = new Array(obj.index || 0, obj.mode, obj.id);
  //to fix:
  bufLength = (bufAttr.length + args.length).toString(16);
  return bufHead.concat([bufLength], bufAttr, args);
}

function protocolAssembler() {
  /**
   * Set dc motor speed.
   * @param {number} port  port number, vailable is: 1,2,3,4
   * @param {number} speed speed, the range is -255 ~ 255
   * @example
   *     ff 55 06 00 02 0a 01 ff 00
   */
  this.setDcMotor = function(port, speed) {
    speed = utils.limitValue(speed);
    return bufAssembler({mode: 0x02, id: 0x0a}, port, speed & 0xff, (speed >> 8) & 0xff);
  };

  /**
   * Set encoder motor speed.
   * @param {number} slot  slot number, vailable is: 1,2
   * @param {number} speed speed, the range is -255 ~ 255
   * @example
   *     ff 55 07 00 02 3d 00 01 64 00
   */
  this.setEncoderMotorOnBoard = function(slot, speed) {
    speed = utils.limitValue(speed);
    return bufAssembler({mode: 0x02, id: 0x3d}, 0, slot, speed & 0xff, (speed >> 8) & 0xff);
  };

  /**
   * Set both left speed and right speed with one command.
   * @param {number} leftSpeed  left speed, the range is -255 ~ 255
   * @param {number} rightSpeed right speed, the range is -255 ~ 255
   * @example
   *     ff 55 07 00 02 05 64 00 64 00
   */
  this.setJoystick = function(leftSpeed, rightSpeed) {
    leftSpeed = utils.limitValue(leftSpeed);
    rightSpeed = utils.limitValue(rightSpeed);
    return bufAssembler(
      {mode: 0x02, id: 0x05}, 
      leftSpeed & 0xff,
      (leftSpeed >> 8) & 0xff,
      rightSpeed & 0xff,
      (rightSpeed >> 8) & 0xff);
  };

  /**
   * Set speed for balance mode, the port is on transport, value is 0.
   * @param {number} turnDegree turn extend, -255 ~ 255
   * @param {number} speed      speed, -255 ~ 255
   * @example
   *     ff 55 08 00 02 34 00 64 00 64 00
   */
  this.setVirtualJoystickForBalance = function(turnExtent, speed) {
    turnExtent = utils.limitValue(turnExtent);
    speed = utils.limitValue(speed);
    port = 0; //板载虚拟摇杆 port = 00
    return bufAssembler(
      {mode: 0x02, id: 0x34}, 
      port, 
      turnExtent & 0xff,
      (turnExtent >> 8) & 0xff,
      speed & 0xff,
      (speed >> 8) & 0xff);
  };

  /**
   * Set stepper motor speed.
   * @param {Number} port     port number, vailable is: 1,2,3,4
   * @param {Number} speed    speed, the range is 0 ~ 3000
   * @param {Long} distance distance, the range is -2147483648 ~ 2147483647
   * @example
   *     ff 55 0a 00 02 28 01 b8 0b e8 03 00 00
   */
  this.setStepperMotor = function(port, speed, distance) {
    speed = utils.limitValue(speed, [0, 3000]);
    var distanceBytes = utils.longToBytes(distance);
    return bufAssembler({mode: 0x02, id: 0x28}, port,
      speed & 0xff,
      (speed >> 8) & 0xff,
      distanceBytes[3],
      distanceBytes[2],
      distanceBytes[1],
      distanceBytes[0]);
  };

  /**
   * Set RgbFourLed electronic module color.
   * @param {number} port     port number, vailable is: 0(on transport), 6,7,8,9,10
   * @param {number} slot     slot number, vailable is: 1,2
   * @param {number} position led position, 0 signify all leds.
   * @param {number} r        red, the range is 0 ~ 255
   * @param {number} g        green, the range is 0 ~ 255
   * @param {number} b        blue, the range is 0 ~ 255
   * @example
   *     ff 55 09 00 02 08 06 02 00 ff 00 00
   */
  this.setLed = function(port, slot, position, r, g, b) {
    r = utils.limitValue(r, [0, 255]);
    g = utils.limitValue(g, [0, 255]);
    b = utils.limitValue(b, [0, 255]);
    return bufAssembler({mode: 0x02, id: 0x08}, port, slot, position, r, g, b);
  };

  /**
   * set four leds
   * @param {number} port     port number, vailable is: 0(on transport), 6,7,8,9,10
   * @param {number} position led position, 0 signify all leds.
   * @param {number} r        red, the range is 0 ~ 255
   * @param {number} g        green, the range is 0 ~ 255
   * @param {number} b        blue, the range is 0 ~ 255
   */
  this.setFourLeds = function(port, position, r, g, b) {
    return this.setLed(port, 2, position, r, g, b);
  };

  /**
   * turn off four leds
   * @param {number} port     port number, vailable is: 0(on transport), 6,7,8,9,10
   * @param {number} position led position, 0 signify all leds.
   */
  this.turnOffFourLeds = function(port, position) {
    return this.setLed(port, 2, position, 0, 0, 0);
  };

  /**
   * set led panel on Api transport.
   * @param {number} position led position, 0 signify all leds.
   * @param {number} r        red, the range is 0 ~ 255
   * @param {number} g        green, the range is 0 ~ 255
   * @param {number} b        blue, the range is 0 ~ 255
   */
  this.setLedPanelOnBoard = function(position, r, g, b) {
    return this.setLed(0, 2, position, r, g, b);
  };

  /**
   * turn off led panel on transport
   * @param {number} position led position, 0 signify all leds.
   */
  this.turnOffLedPanelOnBoard = function(position) {
    return this.setLed(0, 2, position, 0, 0, 0);
  };

  /**
   * Set transport mode.
   * @param {number} mode transport mode,
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
      0xff,0x55,
      0x05, 0,
      0x02,
      0x3c,
      0x11, // 0x11 means Api
      mode
    ];
    return transport.send(a);
  };

  /**
   * Set Servo speed.
   * @param {[type]} port   port number, vailable is 6,7,8,9,10
   * @param {[type]} slot   slot number, vailable is 1,2
   * @param {[type]} degree servo degree, the range is 0 ~ 180
   */
  this.setServoMotor = function(port, slot, degree) {
    degree = utils.limitValue(degree, [0, 180]);
    var a = [
      0xff,0x55,
      0x06, 0,
      0x02,
      0x0b,
      port,
      slot,
      degree
    ];
    return transport.send(a);
  };

  /**
   * Set Seven-segment digital tube number.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {float} number  the number to be displayed, -999 ~ 9999
   * @exmpa
   *     ff 55 08 00 02 09 06 00 00 c8 42
   */
  this.setSevenSegment = function(port, number) {
    number = utils.limitValue(number, [-999, 9999]);
    var byte4Array = utils.float32ToBytes(number);
    return bufAssembler({mode: 0x02, id: 0x09}, port, byte4Array[0],
      byte4Array[1],
      byte4Array[2],
      byte4Array[3]);
  };

  /**
   * Set led matrix char.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {number} xAxis  x position
   * @param {number} yAxis  y position
   * @param {string} char  char, 例如 Hi 转换成ASCII的值 48 69
   * @exmaple
   * ff 55 0a 00 02 29 06 01 00 01 02 48 69
   */
  this.setLedMatrixChar = function(port, xAxis, yAxis, char) {
    var charAsciiArray = [];
    for(var i = 0; i < char.length; i++) {
      charAsciiArray.push(char[i].charCodeAt());
    }

    return bufAssembler({mode: 0x02, id: 0x29}, port, 0x01, 
      xAxis,
      yAxis,
      char.length,
      ...charAsciiArray);
  };


  /**
   * Set led matrix emotion.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {number} xAxis      x position
   * @param {number} yAxis      y position
   * @param {Array} emotionData emotion data to be displayed, such as
   *  [00, 00, 40, 48, 44, 42, 02, 02, 02, 02, 42, 44, 48, 40, 00, 00]
   * @example
   * ff 55 17 00 02 29 06 02 00 00 00 00 40 48 44 42 02 02 02 02 42 44 48 40 00 00
   */
  this.setLedMatrixEmotion = function(port, xAxis, yAxis, emotionData) {
    // var a = [
    //   0xff,0x55,
    //   0x17,0,
    //   0x02,
    //   0x29,
    //   port,
    //   0x02,
    //   xAxis,
    //   yAxis
    // ].concat(emotionData);

    return bufAssembler({mode: 0x02, id: 0x29}, port, 0x02, 
      xAxis,
      yAxis,
      ...emotionData);
  };

  /**
   * Set led matrix time.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {number} separator time separator, 01 signify `:`, 02 signify ` `
   * @param {number} hour      hour number, 0 ~ 23
   * @param {number} minute    minute number, 0 ~ 59
   * @example
   *     ff 55 08 00 02 29 06 03 01 0a 14
   */
  this.setLedMatrixTime = function(port, separator, hour, minute) {
    hour = utils.limitValue(hour, [0, 23]);
    minute = utils.limitValue(minute, [0, 59]);
    return bufAssembler({mode: 0x02, id: 0x29}, port, 0x03, separator, hour, minute);
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
    return bufAssembler({mode: 0x02, id: 0x29}, port, 0x04,
      byte4Array[0],
      byte4Array[1],
      byte4Array[2],
      byte4Array[3]);
  };

  /**
   * Set shutter.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {number} action 0: 按下快门; 1: 松开快门; 2: 聚焦; 3: 停止聚焦
   * @exmaple
      ff 55 05 00 02 14 06 02
   */
  this.setShutter = function(port, action) {
    return bufAssembler({mode: 0x02, id: 0x14}, port, action);
  };

  /**
   * reset all sensors and motors on transport.
   * @exmaple
      ff 55 02 00 04
   */
  this.reset = function() {
    var a = [0xff, 0x55, 0x02, 0x00, 0x04];
    return transport.send(a);
  };

  /**
   * set buzzer.
   * @param {string} tone , "A2" ~ "D8"
   * @param {number} beat , 125: eight; 250: quater; 500: half; 1000: one; 2000: double
   * @example
   * C2，quater beat: ff 55 08 00 02 22 09 41 00 f4 01
   */
  this.setTone = function(tone, beat) {
    var TONE = {
      // 原始数据：D5: 587 "E5": 658,"F5": 698,"G5": 784,"A5": 880,"B5": 988,"C6": 1047
      "A2": 110,"B2": 123,"C2": 65,
      "C3": 131,"D3": 147,"E3": 165,"F3": 175,"G3": 196,"A3": 220,
      "B3": 247,"C4": 262,"D4": 294,"E4": 330,"F4": 349,"G4": 392,
      "A4": 440,"B4": 494,"C5": 523,"D5": 555,"E5": 640,"F5": 698,
      "G5": 784,"A5": 880,"B5": 988,"C6": 1047,"D6": 1175,"E6": 1319,
      "F6": 1397,"G6": 1568,"A6": 1760,"B6": 1976,"C7": 2093,"D7": 2349,
      "E7": 2637,"F7": 2794,"G7": 3136,"A7": 3520,"B7": 3951,"C8": 4186,"D8":4699
    };
    const BEAT = {
      eight: 125, 
      quater: 250, 
      half: 500, 
      one: 1000, 
      double: 2000
    }

    return bufAssembler({mode: 0x02, id: 0x22}, 0x09, 
      (TONE[tone] & 0xff),
      (TONE[tone] >> 8) & 0xff,
      (BEAT[beat] & 0xff),
      (BEAT[beat] >> 8) & 0xff);
  };

  /**
   * set encoder motor.
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 1,2,3,4
   * @param  {Number} slot  vailable: 1，2
   * @param  {Number} speed  0 ~ 300, 单位：rpm（每分钟转多少圈）
   * @param  {Float} angle  相对位移, -2147483648 ~ 2147483647
   * @example
   * ff 55 0b 00 02 0c 08 01 96 00 00 00 34 44
   */
  this.setEncoderMotor = function(port, slot, speed, angle) {
    speed = utils.limitValue(speed, [0, 300]);
    var byte4Array = utils.float32ToBytes(angle);
    var a = [
      0xff,0x55,
      0x0b, 0,
      0x02,
      0x0c,
      0x08,
      slot,
      speed & 0xff,
      (speed >> 8) & 0xff,
      byte4Array[0],
      byte4Array[1],
      byte4Array[2],
      byte4Array[3]
    ];
    return transport.send(a);
  };

  /**
   * read verion of transport
   * @param  {Number} index index of command
   */
  this.readVersion = function(index) {
    // var a = [
    //   0xff,0x55,
    //   0x03, index,
    //   0x01,
    //   0x00
    // ];
    // return transport.send(a);
    bufAssembler({mode: 0x01, id: 0x00});
  };

  /**
   * mainly used for distance measurement, the measurement range is 0 to 500 cm,
   * the execution of the command will have more than 100 milliseconds latency.
   * So the frequency of the host to send this instruction shoulds not be too high.
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 01 03
   */
  this.readUltrasonic = function(port) {
    return bufAssembler({mode: 0x01, id: 0x01}, port);
  };

  /**
   * read temperature, Each port can connect two road temperature sensor.
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @param  {Number} slot  vailable: slot1(1), slot2(2)
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 02 01 02
   */
  this.readTemperature = function(index, port, slot) {
    return bufAssembler({mode: 0x01, id: 0x02}, port, slot);
  };

  /**
   * The light sensor module or ontransport (lamp) light sensors numerical reading.
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6,7,8,9,10, onbord(0c),onbord(0b)
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 03 07
   */
  this.readLight = function(index, port) {
    return bufAssembler({mode: 0x01, id: 0x03}, port);
  };

  /**
   * read Potentionmeter
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 04 06
   */
  this.readPotentionmeter = function(index, port) {
    return bufAssembler({mode: 0x01, id: 0x04}, port);
  };

  /**
   * read josystic value
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @param  {Number} axis  1: x-axis; 2: y-axis;
   * @example
   * ff 55 05 00 01 05 06 01
   */
  this.readJoystick = function(index, port, axis) {
    return bufAssembler({mode: 0x01, id: 0x05}, port, axis);
  };

  /**
   * read gyro value in different axis.
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @param  {Number} axis  vailable: X-axis(01)  Y-axis(02)  Z-axis(03)
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 06 00 01
   */
  this.readGyro = function(index, port, axis) {
    return bufAssembler({mode: 0x01, id: 0x06}, port, axis);
  };

  /**
   * read volume testing MIC module parameters
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6，7，8，9，10，ontransport(0x0e)
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 07 06
   */
  this.readSound = function(index, port) {
    return bufAssembler({mode: 0x01, id: 0x07}, port);
  };

  /**
   * read temperature on transport
   * @param  {Number} index [description]
   * @example
   * ff 55 04 00 01 1b 0d
   */
  this.readTemperatureOnBoard = function(index) {
    var port = 0x0d;
    return bufAssembler({mode: 0x01, id: 0x1b}, port);
  };

  /**
   * read pyroelectric infrared sensor
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 0f 06
   */
  this.readPirmotion = function(index, port) {
    return bufAssembler({mode: 0x01, id: 0x0f}, port);
  };

  /**
   * read LineFollower sensor
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @return {Number} number,
   *  00   0
      01   1
      10   2
      11   3
      when 0 said has a black line
    * @example
    * ff 55 04 00 01 11 02
   */
  this.readLineFollower = function(index, port) {
    return bufAssembler({mode: 0x01, id: 0x11}, port);
  };

  /**
   * read limitSwitch
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @param  {Number} slot  vailable: SLOT1(01)   SLOT2(02)
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 15 06 02
   */
  this.readLimitSwitch = function(index, port, slot) {
    return bufAssembler({mode: 0x01, id: 0x15}, port, slot);
  };

  /**
   * read compass.
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 1a 06
   */
  this.readCompass = function(index, port) {
    return bufAssembler({mode: 0x01, id: 0x1a}, port);
  };

  /**
   * read humiture
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @param  {Number} temperature(01) humidity (00)
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 17 06 00
   */
  this.readHumiture = function(index, port, type) {
    return bufAssembler({mode: 0x01, id: 0x17}, port, type);
  };

  /**
   * read flame
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 18 03
   */
  this.readFlame = function(index, port) {
    return bufAssembler({mode: 0x01, id: 0x18}, port);
  };

  /**
   * Used to get the harmful gas density
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 19 06
   */
  this.readGas = function(index, port) {
    return bufAssembler({mode: 0x01, id: 0x19}, port);
  };

  /**
   * read touch sensor
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 33 06
   */
  this.readTouch = function(index, port) {
    return bufAssembler({mode: 0x01, id: 0x33}, port);
  };

  /**
   * To determine whether the corresponding button is pressed.
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @param  {Number} key   vailable:1,2,3,4
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 16 03 01
   */
  this.readFourKeys = function(index, port, key) {
    // var a = [
    //   0xff,0x55,
    //   0x05, index,
    //   0x01,
    //   0x16,
    //   port,
    //   key
    // ];
    return bufAssembler({mode: 0x01, id: 0x16}, port, key);
  };

  /**
   * read encoder motor position or speed on transport.
   * @param  {Number} index [description]
   * @param  {Number} slot vailable:1,2
   * @param  {Number} type  1: position; 2: speed
   * @example
   * ff 55 06 00 01 3d 00 01 02
   */
  this.readEncoderMotorOnBoard = function(index, slot, type) {
    var port = 0x00; //板载 port
    // var a = [
    //   0xff,0x55,
    //   0x06, index,
    //   0x01,
    //   0x3d,
    //   0x00,
    //   slot,
    //   type
    // ];
    return bufAssembler({mode: 0x01, id: 0x3d}, port, slot, type);
  };

  /**
   * read firmware mode or voltage.
   * @param  {Number} index [description]
   * @param  {Number} type  0x70: 电压; 0x71: 模式
   * @example
   * ff 55 04 00 01 3c 70
   */
  this.readFirmwareMode = function(index, type) {
    return bufAssembler({mode: 0x01, id: 0x3c}, type);
  };

  /**
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: digit GPOI port
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 1e 09
   */
  // this.readDigGPIO = function(index, port) {
  //   var a = [
  //     0xff,0x55,
  //     0x04, index,
  //     0x01,
  //     0x1e,
  //     port,
  //   ];
  //   return transport.send(a);
  // };

  /**
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: analog GPIO port
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 1f 02
   */
  // this.readAnalogGPIO = function(index, port) {
  //   var a = [
  //     0xff,0x55,
  //     0x04, index,
  //     0x01,
  //     0x1f,
  //     port,
  //   ];
  //   return transport.send(a);
  // };

  /**
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: GPIO port
   * @param  {Number} key   vailable: 0,1
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 25 0d 20 4e
   */
  // this.readGPIOContinue = function(index, port, key) {
  //   var a = [
  //     0xff,0x55,
  //     0x05, index,
  //     0x01,
  //     0x25,
  //     port,
  //     key,
  //   ];
  //   return transport.send(a);
  // };

  /**
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: GPIO port
   * @param  {Number} key   vailable: 0,1
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 24 45 40
   */
  // this.readDoubleGPIO = function(index, port1, port2) {
  //   var a = [
  //     0xff,0x55,
  //     0x05, index,
  //     0x01,
  //     0x24,
  //     port1,
  //     port2,
  //   ];
  //   return transport.send(a);
  // };

  /**
   * @param  {Number} index [description]
   * @param  {Number} port  vailable: analog GPIO port
   * @param  {Number} key   vailable: 0,1
   * @return {Number}       [description]
   * @example
   * ff 55 03 00 01 32
   */
  // this.readRuntime = function(index) {
  //   var a = [
  //     0xff,0x55,
  //     0x03, index,
  //     0x01,
  //     0x32,
  //   ];
  //   return transport.send(a);
  // };

  // this.readOntransportButton = function(index) {
  //   var a = [
  //     0xff,0x55,
  //     0x03, index,
  //     0x01,
  //     0x32,
  //   ];
  //   return transport.send(a);
  // };
}

module.exports = new protocolAssembler();