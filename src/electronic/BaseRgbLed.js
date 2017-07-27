import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

let bufComposer = function(obj){
  let args = [obj.port, obj.slot, obj.ledPosition, ...obj.rgb];
  return Utils.composer(protocolAssembler.setLed, args);
}

let commandWrite = function(obj){
  // console.log('led ------->', obj.ledPosition, ...obj.rgb);
  let buf = bufComposer(obj);
  CommandManager.write(buf);
}

class BaseRgbLed extends Electronic {
  /**
   * RgbLed类，led模块
   * @param {number} port - led port口
   * @param {number} position - led灯的位置
   */
  constructor(port, slot) {
    super();
    this.args = {
      port: validateNumber(port),
      slot: validateNumber(slot),
      ledPosition: 0,
      rgb: [0, 0, 0]
    };
  }

  /**
   * set led position
   * @param {number} position
   */
  position(position) {
    this.args.ledPosition = validateNumber(position, this.args.ledPosition);
    return this;
  }

  /**
   * set led red value
   * @param {number} value 0 ~ 255
   */
  r(value) {
    this.args.rgb[0] = validateNumber(value, this.args.rgb[0]);
    return this;
  }

  /**
   * set led green value
   * @param {number} value 0 ~ 255
   */
  g(value) {
    this.args.rgb[1] = validateNumber(value, this.args.rgb[1]);
    return this;
  }

  /**
   * set blue red value
   * @param {number} value 0 ~ 255
   */
  b(value) {
    this.args.rgb[2] = validateNumber(value, this.args.rgb[2]);
    return this;
  }

  /**
   * @param  {String} hex  hex color like '#ff0088'
   */
  rgb(hex){
    this.args.rgb = Utils.hexToRgb(hex);
    return this;
  }

  /**
   * turn on led
   * @param {number} position
   */
  turnOn() {
    commandWrite(this.args);
    return this;
  }

  /**
   * turn off led
   * @param {number} position
   */
  turnOff() {
    this.args.rgb = [0, 0, 0];
    commandWrite(this.args);
    return this;
  }

  /**
   * turn on all the leds
   */
  turnOnAll(){
    this.position(0);
    return this.turnOn();
  }

  /**
   * turn off all the leds
   */
  turnOffAll(){
    this.position(0);
    return this.turnOff();
  }

  /**
   * LED亮红色灯光
   */
  red() {
    this.args.rgb = [255, 0, 0];
    commandWrite(this.args);
    return this;
  }

  /**
   * LED亮绿色灯光
   */
  green() {
    this.args.rgb = [0, 255, 0];
    commandWrite(this.args);
    return this;
  }

  /**
   * LED亮蓝色灯光
   */
  blue() {
    this.args.rgb = [0, 0, 255];
    commandWrite(this.args);
    return this;
  }

  /**
   * LED亮白色灯光
   */
  white(){
    this.args.rgb = [255, 255, 255];
    commandWrite(this.args);
    return this;
  }
}

export default BaseRgbLed;