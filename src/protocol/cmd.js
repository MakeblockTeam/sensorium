/**
 * @fileOverview  protocol API list
 */
import {
  limitValue,
  float32ToBytes,
  longToBytes
} from "../core/utils";
/**
 * buf 协议组装器
 * @private
 * @param  {Object} obj  对象
 * @param  {Number} obj.index  由上位机赋值
 * @param  {Number} obj.mode  查询、执行
 * @param  {Number} obj.id  指令ID
 * @param  {Arguments} args 其他参数
 * @return {Array}      返回数组
 */
function bufAssembler(obj, ...args) {
  const modes = [0x01, 0x02, 0x04];
  const bufHead = [0xff, 0x55];
  let bufLength = 0;
  let bufAttr;
  //todo：完善抛错提示
  if (obj.mode == 0x04) {
    bufAttr = Array.of(obj.index || 0, obj.mode);
  } else {
    if (!modes.includes(obj.mode)) {
      throw new Error(`mode should be one of ${modes}`);
    } else if (typeof obj.id === 'undefined') {
      throw new Error(`id should not be empty`);
    }
    bufAttr = Array.of(obj.index || 0, obj.mode, obj.id);
  }
  bufLength = bufAttr.length + args.length;
  return bufHead.concat([bufLength], bufAttr, args);
}

/**
 * @private
 */
function protocolAssembler() {
  /**
   * Set dc motor speed.
   * @private
   * @param {number} port  port number, vailable is: 1,2,3,4
   * @param {number} speed speed, the range is -255 ~ 255
   * @example
   *     ff 55 06 00 02 0a 01 ff 00
   */
  this.setDcMotor = function(port, speed) {
    speed = limitValue(speed);
    return bufAssembler({
      mode: 0x02,
      id: 0x0a
    }, port, speed & 0xff, (speed >> 8) & 0xff);
  };

  /**
   * Set encoder motor speed.
   * @private
   * @param {number} slot  slot number, vailable is: 1,2
   * @param {number} speed speed, the range is -255 ~ 255
   * @example
   *     ff 55 07 00 02 3d 00 01 64 00
   */
  this.setEncoderMotorOnBoard = function(slot, speed) {
    speed = limitValue(speed);
    let port = 0x00; //板载
    return bufAssembler({
      mode: 0x02,
      id: 0x3d
    }, port, slot, speed & 0xff, (speed >> 8) & 0xff);
  };

  /**
   * set encoder motor.
   * @private
   * @param  {Number} index [description]
   * @param  {Number} slot  vailable: 1，2
   * @param  {Number} speed  0 ~ 300, 单位：rpm（每分钟转多少圈）
   * @param  {Float} angle  相对位移, -2147483648 ~ 2147483647
   * @example
   * ff 55 0b 00 02 0c 08 01 96 00 00 00 34 44
   */
  this.setEncoderMotor = function(slot, speed, angle) {
    // 编码电机的协议中不使用 port
    let i2c = 0x08; //I2C地址，目前无意义(软件稳定后可能会重新设计)，用来占位
    speed = limitValue(speed, [0, 300]);
    let byte4Array = float32ToBytes(angle);
    return bufAssembler({
        mode: 0x02,
        id: 0x0c
      },
      i2c,
      slot,
      speed & 0xff,
      (speed >> 8) & 0xff,
      ...byte4Array);
  }

  /**
   * Set both left speed and right speed with one command.
   * @private
   * @param {number} leftSpeed  left speed, the range is -255 ~ 255
   * @param {number} rightSpeed right speed, the range is -255 ~ 255
   * @example
   *     ff 55 07 00 02 05 64 00 64 00
   */
  this.setJoystick = function(leftSpeed, rightSpeed) {
    leftSpeed = limitValue(leftSpeed);
    rightSpeed = limitValue(rightSpeed);
    return bufAssembler({
        mode: 0x02,
        id: 0x05
      },
      leftSpeed & 0xff,
      (leftSpeed >> 8) & 0xff,
      rightSpeed & 0xff,
      (rightSpeed >> 8) & 0xff);
  };

  /**
   * Set speed for balance mode, the port is on transport, value is 0.
   * @private
   * @param {number} turnRange turn extend, -255 ~ 255
   * @param {number} speed      speed, -255 ~ 255
   * @example
   *     ff 55 08 00 02 34 00 64 00 64 00
   */
  this.setVirtualJoystickForBalance = function(turnRange, speed) {
    let turnExtent = limitValue(turnRange);
    let port = 0x00; //板载虚拟摇杆 port = 00
    speed = limitValue(speed);
    return bufAssembler({
        mode: 0x02,
        id: 0x34
      },
      port,
      turnExtent & 0xff,
      (turnExtent >> 8) & 0xff,
      speed & 0xff,
      (speed >> 8) & 0xff);
  };

  /**
   * Set stepper motor speed.
   * @private
   * @param {Number} port     port number, vailable is: 1,2,3,4
   * @param {Number} speed    speed, the range is 0 ~ 3000
   * @param {Long} distance distance, the range is -2147483648 ~ 2147483647
   * @example
   *     ff 55 0a 00 02 28 01 b8 0b e8 03 00 00
   */
  this.setStepperMotor = function(port, speed, distance) {
    speed = limitValue(speed, [0, 3000]);
    var distanceBytes = longToBytes(distance);
    return bufAssembler({
        mode: 0x02,
        id: 0x28
      }, port,
      speed & 0xff,
      (speed >> 8) & 0xff,
      distanceBytes[3],
      distanceBytes[2],
      distanceBytes[1],
      distanceBytes[0]);
  };

  /**
   * Set RgbFourLed electronic module color.
   * @private
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
    r = limitValue(r, [0, 255]);
    g = limitValue(g, [0, 255]);
    b = limitValue(b, [0, 255]);
    position = limitValue(position, [0]);
    return bufAssembler({
      mode: 0x02,
      id: 0x08
    }, port, slot, position, r, g, b);
  };

  /**
   * Set Firmware mode.
   * @private
   * @param {number} subCmd
   * @param {number} mode
   * @example
   *     ff 55 05 00 02 3c 11 00
   */
  this.setFirmwareMode = function(subCmd, mode) {
    var sub = subCmd || 0x11; //Auriga是 0x11, megapi是 0x12
    return bufAssembler({
      mode: 0x02,
      id: 0x3c
    }, sub, mode);
  };

  /**
   * Set Servo speed.
   * @private
   * @param {[type]} port   port number, vailable is 6,7,8,9,10
   * @param {[type]} slot   slot number, vailable is 1,2
   * @param {[type]} degree servo degree, the range is 0 ~ 180
   */
  this.setServoMotor = function(port, slot, degree) {
    degree = limitValue(degree, [0, 180]);
    return bufAssembler({
      mode: 0x02,
      id: 0x0b
    }, port, slot, degree);
  };

  /**
   * Set Seven-segment digital tube number.
   * @private
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {float} number  the number to be displayed, -999 ~ 9999
   * @exmpa
   *     ff 55 08 00 02 09 06 00 00 c8 42
   */
  this.setSevenSegment = function(port, number) {
    number = limitValue(number, [-999, 9999]);
    var byte4Array = float32ToBytes(number);
    return bufAssembler({
      mode: 0x02,
      id: 0x09
    }, port, ...byte4Array);
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

  /**
   * Set led matrix time.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {number} separator time separator, 01 signify `:`, 02 signify ` `
   * @param {number} hour      hour number, 0 ~ 23
   * @param {number} minute    minute number, 0 ~ 59
   * @example
   *     ff 55 08 00 02 29 06 03 01 0a 14
   */

  /**
   * Set led matrix number.
   * @private
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {float} number the number to be displayed
   * @exmaple
      ff 55 09 00 02 29 06 04 00 00 00 00
   */
  this.setLedMatrix = function(...args) {
    args[2] = args[2] & 0xff;
    args[3] = args[3] & 0xff;
    return bufAssembler({
      mode: 0x02,
      id: 0x29
    }, ...args);
  };

  /**
   * Set shutter.
   * @private
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {number} action 0: 按下快门; 1: 松开快门; 2: 聚焦; 3: 停止聚焦
   * @exmaple
      ff 55 05 00 02 14 06 02
   */
  this.setShutter = function(port, action) {
    return bufAssembler({
      mode: 0x02,
      id: 0x14
    }, port, action);
  };

  /**
   * reset all sensors and motors on transport.
   * @private
   * @exmaple
      ff 55 02 00 04
   */
  this.reset = function() {
    return bufAssembler({
      mode: 0x04
    });
  };

  /**
   * button on board of mcore.
   * @private
   * @param {string} port
   * @param {string} action 0:表示查询按下的状态，1:表示查询松开的状态
   * @exmaple
      ff 55 05 00 01 23 07 00
   */
  this.ButtonOnBoard = function(port, action) {
    return bufAssembler({
      mode: 0x01,
      id: 0x23
    }, port, action);
  };

  /**
   * set buzzer only for mcore.
   * @private
   * @param {string} hz , "A2" ~ "D8" 对应的 hz
   * @param {number} beat , 125: eight; 250: quater; 500: half; 1000: one; 2000: double
   * @example
   * C2，quater beat: ff 55 08 00 02 22 09 41 00 f4 01
   */
  this.setBuzzerForMcore = function(hz, beat) {
    return bufAssembler({
        mode: 0x02,
        id: 0x22
      },
      (hz & 0xff),
      (hz >> 8) & 0xff,
      (beat & 0xff),
      (beat >> 8) & 0xff);
  };

  /**
   * set buzzer for mainboard except mcore
   * @private
   * @example
   * 播放引脚为 0x2d，音调为B2，节拍为四分之一：ff 55 08 00 02 22 2d 7b 00 fa 00
   */
  this.setBuzzer = function(hz, beat) {
    beat = beat ? beat : 250;
    return bufAssembler({
        mode: 0x02,
        id: 0x22
      },
      0x2d,
      (hz & 0xff),
      (hz >> 8) & 0xff,
      (beat & 0xff),
      (beat >> 8) & 0xff);
  };

  /**
   * read verion of transport
   * @private
   */
  this.readVersion = function() {
    return bufAssembler({
      mode: 0x01,
      id: 0x00
    });
  };

  /**
   * mainly used for distance measurement, the measurement range is 0 to 500 cm,
   * the execution of the command will have more than 100 milliseconds latency.
   * So the frequency of the host to send this instruction shoulds not be too high.
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 01 03
   */
  this.readUltrasonic = function(port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x01
    }, port);
  };

  /**
   * read temperature, Each port can connect two road temperature sensor.
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @param  {Number} slot  vailable: slot1(1), slot2(2)
   * @example
   * ff 55 05 00 01 02 01 02
   */
  this.readTemperature = function(port, slot) {
    return bufAssembler({
      mode: 0x01,
      id: 0x02
    }, port, slot);
  };

  /**
   * The light sensor module or ontransport (lamp) light sensors numerical reading.
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10, onbord(0c),onbord(0b)
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 03 07
   */
  this.readLight = function(port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x03
    }, port);
  };

  /**
   * read Potentionmeter
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 04 06
   */
  this.readPotentionmeter = function(port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x04
    }, port);
  };

  /**
   * read josystic value
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @param  {Number} axis  1: x-axis; 2: y-axis;
   * @example
   * ff 55 05 00 01 05 06 01
   */
  this.readJoystick = function(port, axis) {
    return bufAssembler({
      mode: 0x01,
      id: 0x05
    }, port, axis);
  };

  /**
   * read gyro value in different axis.
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @param  {Number} axis  vailable: X-axis(01)  Y-axis(02)  Z-axis(03)
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 06 00 01
   */
  this.readGyro = function(port, axis) {
    return bufAssembler({
      mode: 0x01,
      id: 0x06
    }, port, axis);
  };

  /**
   * read volume testing MIC module parameters
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10，ontransport(0x0e)
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 07 06
   */
  this.readSound = function(port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x07
    }, port);
  };

  /**
   * read temperature on transport
   * @private
   * @example
   * ff 55 04 00 01 1b 0d
   */
  this.readTemperatureOnBoard = function() {
    var port = 0x0d;
    return bufAssembler({
      mode: 0x01,
      id: 0x1b
    }, port);
  };

  /**
   * read external or board infrared sensor, and the board one is only for mcore
   * @private
   * @param  {Number} id    sensor device id，such as: 0x0e, 0x0d, 0x10
   * @param  {Number} port  mcore port: 3, 4, auriga port: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 0e 00
   */
  this.readInfrared = function(id, port, akey) {
    if (akey) {
      return bufAssembler({
        mode: 0x01,
        id: id
      }, port, akey);
    } else {
      return bufAssembler({
        mode: 0x01,
        id: id
      }, port);
    }
  };

  /**
   * read external or board infrared sensor, and is only for mcore
   * @private
   * @param  {Number} port  mcore port: 3, 4
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 0e 00
   */
  this.readInfraredOnboard = function(port, akey) {
    return bufAssembler({
        mode: 0x01,
        id: 0x0e
      }, port, akey);
  };

  /**
   * emit message from external or board infrared sensor, and is only for mcore
   * @private
   * @param  {Number} port  mcore port: 3, 4
   * @param  {Array.Number} msg  infrared msg list, the number is assic code
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 0e 00
   */
  this.emitInfraredOnboard = function(msg) {
    return bufAssembler({
        mode: 0x02,
        id: 0x0d
      }, ...msg);
  };

  /**
   * emit message from external or board infrared sensor, and is only for mcore
   * @private
   * @param  {Number} port  mcore port: 3, 4
   * @param  {Array.Number} msg  infrared msg list, the number is assic code
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 0e 00
   */
  this.receiveEmitInfraredOnboard = function() {
    return bufAssembler({
        mode: 0x01,
        id: 0x0d
      });
  };

  /**
   * read pyroelectric infrared sensor
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 0f 06
   */
  this.readPirmotion = function(port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x0f
    }, port);
  };

  /**
   * read LineFollower sensor
   * @private
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
  this.readLineFollower = function(port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x11
    }, port);
  };

  /**
   * read limitSwitch
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @param  {Number} slot  vailable: SLOT1(01)   SLOT2(02)
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 15 06 02
   */
  this.readLimitSwitch = function(port, slot) {
    return bufAssembler({
      mode: 0x01,
      id: 0x15
    }, port, slot);
  };

  /**
   * read compass.
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 1a 06
   */
  this.readCompass = function(port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x1a
    }, port);
  };

  /**
   * read humiture
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @param  {Number} temperature(01) humidity (00)
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 17 06 00
   */
  this.readHumiture = function(port, type) {
    return bufAssembler({
      mode: 0x01,
      id: 0x17
    }, port, type);
  };

  /**
   * read flame
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 18 03
   */
  this.readFlame = function(port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x18
    }, port);
  };

  /**
   * Used to get the harmful gas density
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 19 06
   */
  this.readGas = function(port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x19
    }, port);
  };

  /**
   * read touch sensor
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 33 06
   */
  this.readTouch = function(port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x33
    }, port);
  };

  /**
   * To determine whether the corresponding button is pressed.
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @param  {Number} key   vailable:1,2,3,4
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 16 03 01
   */
  this.readFourKeys = function(port, key) {
    return bufAssembler({
      mode: 0x01,
      id: 0x16
    }, port, key);
  };

  /**
   * read encoder motor position or speed on transport.
   * @private
   * @param  {Number} slot vailable:1,2
   * @param  {Number} type  1: position; 2: speed
   * @example
   * ff 55 06 00 01 3d 00 01 02
   */
  this.readEncoderMotorOnBoard = function(slot, type) {
    let port = 0x00; //板载 port
    return bufAssembler({
      mode: 0x01,
      id: 0x3d
    }, port, slot, type);
  };

  /**
   * 板载编码电机 PID 运动 01模式位置模式
   * @private
   * @param {Number} distance  位移
   * @param {Number} speed    速度
   * @example
   * buf: ff 55 0b 00 02 3e 01 01 00 00 00 00 00 00
   */
  this.setEncoderMotorPIDDistance = function(slot, distance, speed) {
    let distanceArr = longToBytes(distance);
    let subCmd = 0x01;
    // let slot = 0x01;
    speed = limitValue(speed, [0]);
    return bufAssembler({
        mode: 0x02,
        id: 0x3e
      },
      subCmd,
      slot,
      distanceArr[3],
      distanceArr[2],
      distanceArr[1],
      distanceArr[0],
      speed & 0xff, (speed >> 8) & 0xff);
  };

  /**
   * 板载编码电机 PID 运动 02模式速度模式
   * @private
   * @param {Number} speed    速度
   * @example
   * buf: ff 55 07 00 02 3e 02 01 00 00
   */
  this.setEncoderMotorPIDSpeed = function(slot, speed) {
      let subCmd = 0x02;
      // let slot = 0x01;
      speed = limitValue(speed);
      return bufAssembler({
        mode: 0x02,
        id: 0x3e
      }, subCmd, slot, speed & 0xff, (speed >> 8) & 0xff);
    },
    /**
     * 板载编码电机 PID 运动 03模式 pwm 模式
     * buf: ff 55 07 00 02 3e 03 01 00 00
     * @param {Number} speed    速度
     * @private
     */
    this.setEncoderMotorPIDPwm = function(slot, speed) {
      let subCmd = 0x03;
      // let slot = 0x01;
      speed = limitValue(speed);
      return bufAssembler({
        mode: 0x02,
        id: 0x3e
      }, subCmd, slot, speed & 0xff, (speed >> 8) & 0xff);
    },

    /**
     * 板载编码电机PID运动，设置当前位置为零点:
     * buf: ff 55 05 00 02 3e 04 01
     * (megaPiPro buf: ff 55 05 00 02 3e 03 01)
     * @param {Number} subCmd    二级命令
     * @private
     */
    this.setEncoderMotorPIDZeroPoint = function(slot, subCmd) {
      // let slot = 0x01;
      return bufAssembler({
        mode: 0x01,
        id: 0x3e
      }, subCmd, slot);
    }

  /**
   * 板载编码电机 PID 运动 05模式双电机模式:
   * buf: ff 55 0b 00 02 3e 05 01 e8 03 00 00 64 00
   * @private
   * @param {Number} subCmd      0x05
   * @param {Number} direction      前进1，后退2，左转3，右转4
   * @param {Number} distance  位移
   * @param {Number} speed     速度
   */
  this.setEncoderMotorPIDDoubleMotor = function(direction, distance, speed) {
    let distanceArr = longToBytes(distance);
    let subCmd = 0x05;
    speed = limitValue(speed, [0]);
    return bufAssembler({
        mode: 0x02,
        id: 0x3e
      },
      subCmd,
      direction,
      distanceArr[3],
      distanceArr[2],
      distanceArr[1],
      distanceArr[0],
      speed & 0xff,
      (speed >> 8) & 0xff);
  };

  /**
   * set smart servo
   * @private
   * @param  {Number} index  the index code of current servo
   * @param  {Number} subCmd  the sub command that the servo run on
   * @param  {Array} extraCmd  the extra command
   * @example
   * lock:    ff 55 07 00 02 40 01 05 01 00
   * unlock:  ff 55 07 00 02 40 01 05 01 01
   * LED:     ff 55 09 00 02 40 02 05 01 ff 00 00
   * handshake:           ff 55 06 00 02 40 03 05 01
   * runToAbsoluteAngle:  ff 55 0e 00 02 40 04 05 01 68 01 00 00 00 00 48 42
   * runToRelativeAngle:  ff 55 0e 00 02 40 05 05 01 68 01 00 00 00 00 48 42
   * runAsDcMotor:        ff 55 08 00 02 40 06 05 01 96 00
   * setAsZeroPoint:      ff 55 06 00 02 40 07 05 01
   * backToStart:         ff 55 06 00 02 40 08 05 01
   */
  this.setSmartServo = function(index, subCmd, extraCmd) {
    let port = 0x05; //defualt port
    return bufAssembler({
      mode: 0x02,
      id: 0x40
    }, subCmd, port, index, ...extraCmd);
  };

  /**
   * @private
   */
  this.setSmartServoForAbsoluteAngle = function(index, subCmd, angle, speed) {
    let port = 0x05; //defualt port
    let angleBytes = longToBytes(angle);
    let speedBytes = float32ToBytes(speed);
    return bufAssembler({
        mode: 0x02,
        id: 0x40
      }, subCmd, port, index,
      ...angleBytes.reverse(),
      ...speedBytes
    );
  };

  /**
   * @private
   */
  this.setSmartServoForRelativeAngle = function(index, subCmd, angle, speed) {
    let port = 0x05; //defualt port
    let angleBytes = longToBytes(angle);
    let speedBytes = float32ToBytes(speed);
    return bufAssembler({
        mode: 0x02,
        id: 0x40
      }, subCmd, port, index,
      ...angleBytes.reverse(),
      ...speedBytes
    );
  };

  /**
   * @private
   */
  this.setSmartServoForDcMotor = function(index, subCmd, speed) {
    let port = 0x05; //defualt port
    return bufAssembler({
        mode: 0x02,
        id: 0x40
      }, subCmd, port, index,
      speed & 0xff, (speed >> 8) & 0xff
    );
  };

  /**
   * read smart servo operating parameters
   * @private
   * @param  {Number} index  the index code of current servo
   * @param  {Number} subCmd  the sub command that the servo run on
   * @example
   * readSpeed:         ff 55 06 00 01 40 09 05 01
   * readTemperature:   ff 55 06 00 01 40 0a 05 01
   * readCurrent:       ff 55 06 00 01 40 0b 05 01
   * readVoltage:       ff 55 06 00 01 40 0c 05 01
   * readAngle:         ff 55 06 00 01 40 0d 05 01
   */
  this.readSmartServoParam = function(index, subCmd) {
    let port = 0x05; //defualt port
    return bufAssembler({
      mode: 0x01,
      id: 0x3d
    }, subCmd, port, index);
  };

  /**
   * read firmware mode or voltage.
   * @private
   * @param  {Number} type  0x70: 电压; 0x71: 模式
   * @example
   * ff 55 04 00 01 3c 70
   */
  this.readFirmwareMode = function(subCmd) {
    //auriga 电压(0x70) 模式(0x71), megapi模式(0x72) 比赛模式(0x75)
    return bufAssembler({
      mode: 0x01,
      id: 0x3c
    }, subCmd);
  };

  /**
   * @private
   * @param  {Number} port  vailable: digit GPOI port
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 1e 09
   */
  this.readDigGPIO = function(port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x1e
    }, port);
  };

  /**
   * @private
   * @param  {Number} port  vailable: analog GPIO port
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 1f 02
   */
  this.readAnalogGPIO = function(port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x1f
    }, port);
  };

  /**
   * @private
   * @param  {Number} port  vailable: GPIO port
   * @param  {Number} key   vailable: 0,1
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 25 0d 20 4e
   */
  this.readGPIOContinue = function(port, key) {
    return bufAssembler({
      mode: 0x01,
      id: 0x25
    }, port, key);
  };

  /**
   * @private
   * @param  {Number} port  vailable: GPIO port
   * @param  {Number} key   vailable: 0,1
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 24 45 40
   */
  this.readDoubleGPIO = function(port1, port2) {
    return bufAssembler({
      mode: 0x01,
      id: 0x24
    }, port1, port2);
  };

  /**
   * @private
   * @param  {Number} port  vailable: analog GPIO port
   * @param  {Number} key   vailable: 0,1
   * @return {Number}       [description]
   * @example
   * ff 55 03 00 01 32
   */
  this.readRuntime = function() {
    return bufAssembler({
      mode: 0x01,
      id: 0x32
    });
  };
}

/**
 * @private
 */
export default new protocolAssembler();