const { defineNumber } = require('../core/type');
const Electronic = require('./electronic');

class RgbLed extends Electronic {

  /**
   * RgbLed类，led模块
   * @param {number} port - led port口
   * @param {number} position - led灯的位置
   */
  constructor(port, slot) {
    super(port, slot);
    this.on = false;
    this.ledPosition = 0;
    this.ledR = 0;
    this.ledG = 0;
    this.ledB = 0;
  }

  /**
   * set led position
   * @param {number} position 
   */
  position(position) {
    this.ledPosition = defineNumber(position, this.ledPosition);
    return this;
  }

  /**
   * set led red value
   * @param {number} value 0 ~ 255 
   */
  r(value) {
    this.ledR = defineNumber(value, this.ledR);
    return this;
  }

  /**
   * set led green value
   * @param {number} value 0 ~ 255 
   */
  g(value) {
    this.ledG = defineNumber(value, this.ledG);
    return this;
  }

  /**
   * set blue red value
   * @param {number} value 0 ~ 255 
   */
  b(value) {
    this.ledB = defineNumber(value, this.ledB);
    return this;
  }

  /**
   * turn on led
   * @param {number} position
   * @param {number} r - red
   * @param {number} g - green
   * @param {number} b - blue
   */
  turnOn(position, r, g, b) {
    this.position(position);
    this.r(r);
    this.g(g);
    this.b(b);
    this._run();
    return this;
  }

  /**
   * turn off led
   * @param {number} position
   */
  turnOff(position) {
    this.position(position);
    this._run(0, 0, 0);
    return this;
  }

  /**
   * LED亮红色灯光
   */
  red() {
    this.ledR = 255;
    this.ledG = 0;
    this.ledB = 0;
    this._run();
    return this;
  }

  /**
   * LED亮绿色灯光
   */
  green() {
    this.ledR = 0;
    this.ledG = 255;
    this.ledB = 0;
    this._run();
    return this;
  }

  /**
   * LED亮蓝色灯光
   */
  blue() {
    this.ledR = 0;
    this.ledG = 0;
    this.ledB = 255;
    this._run();
    return this;
  }

  _run() {
    let r = this.ledR,
      g = this.ledG,
      b = this.ledB;
    if(arguments.length !== 0) {
      [r, g, b] = arguments;
    }
    this.api.setLed(this.port, this.slot, this.ledPosition, r, g, b);
  }
}

module.exports = RgbLed;