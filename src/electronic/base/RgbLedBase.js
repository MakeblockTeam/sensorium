const { defineNumber } = require('../../core/type');
const { composer } = require('../../core/utils');
const Electronic = require('../electronic');
const { setLed } = require('../../protocol/cmd');

class RgbLedBase extends Electronic {
  /**
   * RgbLed类，led模块
   * @param {number} port - led port口
   * @param {number} position - led灯的位置
   */
  constructor(port, slot) {
    super();
    this.serialPort = [defineNumber(port), defineNumber(slot)];
    this.ledPosition = 0;
    this.rgb = [0, 0, 0];
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
    this.rgb[0] = defineNumber(value, this.rgb[0]);
    return this;
  }

  /**
   * set led green value
   * @param {number} value 0 ~ 255 
   */
  g(value) {
    this.rgb[1] = defineNumber(value, this.rgb[1]);
    return this;
  }

  /**
   * set blue red value
   * @param {number} value 0 ~ 255 
   */
  b(value) {
    this.rgb[2] = defineNumber(value, this.rgb[2]);
    return this;
  }

  /**
   * turn on led
   * @param {number} position
   */
  turnOn(position) {
    this.position(position);
    this._run();
    return this;
  }

  /**
   * turn off led
   * @param {number} position
   */
  turnOff(position) {
    this.position(position);
    this.rgb = [0, 0, 0];
    this._run();
    return this;
  }

  /**
   * turn on all the leds
   */
  turnOnAll(){
    return this.turnOn(0);
  }

  /**
   * turn off all the leds
   */
  turnOnAll(){
    return this.turnOff(0);
  }

  /**
   * LED亮红色灯光
   */
  red() {
    this.rgb = [255, 0, 0];
    this._run();
    return this;
  }

  /**
   * LED亮绿色灯光
   */
  green() {
    this.rgb = [0, 255, 0];
    this._run();
    return this;
  }

  /**
   * LED亮蓝色灯光
   */
  blue() {
    this.rgb = [0, 0, 255];
    this._run();
    return this;
  }

  _run() {
    // 拿到参数
    let args = [...(this.serialPort), this.ledPosition, ...(this.rgb)];
    // 拿到协议组装器，组装协议
    let buf = composer(setLed, args);
    // 用板子发送协议
    board.send(buf);
  }
}

module.exports = RgbLedBase;