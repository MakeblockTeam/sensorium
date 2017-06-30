import { defineNumber } from '../../core/type';
import Utils from '../../core/utils';
import Electronic from '../electronic';
import protocolAssembler from '../../protocol/cmd';
import command from '../../communicate/command';

let bufComposer = function(obj){
  let args = [obj.port, obj.slot, obj.ledPosition, ...obj.rgb];
  return Utils.composer(protocolAssembler.setLed, args);
}

class RgbLedBase extends Electronic {
  /**
   * RgbLed类，led模块
   * @param {number} port - led port口
   * @param {number} position - led灯的位置
   */
  constructor(port, slot) {
    super();
    this.args = {
      port: defineNumber(port),
      slot: defineNumber(slot),
      ledPosition: 0,
      rgb: [0, 0, 0]
    };
  }

  /**
   * set led position
   * @param {number} position
   */
  position(position) {
    this.args.ledPosition = defineNumber(position, this.args.ledPosition);
    return this;
  }

  /**
   * set led red value
   * @param {number} value 0 ~ 255
   */
  r(value) {
    this.args.rgb[0] = defineNumber(value, this.args.rgb[0]);
    return this;
  }

  /**
   * set led green value
   * @param {number} value 0 ~ 255
   */
  g(value) {
    this.args.rgb[1] = defineNumber(value, this.args.rgb[1]);
    return this;
  }

  /**
   * set blue red value
   * @param {number} value 0 ~ 255
   */
  b(value) {
    this.args.rgb[2] = defineNumber(value, this.args.rgb[2]);
    return this;
  }

  /**
   * turn on led
   * @param {number} position
   */
  turnOn() {
    let buf = bufComposer(this.args);
    command.execWrite(buf);
    return this;
  }

  /**
   * turn off led
   * @param {number} position
   */
  turnOff() {
    this.args.rgb = [0, 0, 0];
    let buf = bufComposer(this.args);
    command.execWrite(buf);
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
    this.args.rgb = [255, 0, 0];
    //组装协议
    let buf = bufComposer(this.args);
    //执行
    command.execWrite(buf);
    return this;
  }

  /**
   * LED亮绿色灯光
   */
  green() {
    this.args.rgb = [0, 255, 0];
    //组装协议
    let buf = bufComposer(this.args);
    //执行
    command.execWrite(buf);
    return this;
  }

  /**
   * LED亮蓝色灯光
   */
  blue() {
    this.args.rgb = [0, 0, 255];
    //组装协议
    let buf = bufComposer(this.args);
    //执行
    command.execWrite(buf);
    return this;
  }
}

export default RgbLedBase;