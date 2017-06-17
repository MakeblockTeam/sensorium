const { defineNumber } = require('../core/type');
const RgbLedBase = require('./base/RgbLedBase');

class RgbLed extends RgbLedBase {
  constructor(port, slot){
    super(port, slot);
  }

  /**
   * 扩展一个设置 port 的接口
   * @param  {Number} port port
   * @return {instance}      实例本身
   */
  port(port){
    this.serialPort[0] = defineNumber(port, this.serialPort[0]);
    return this;
  }

  /**
   * 扩展一个设置 slot 的接口
   * @param  {Number} slot slot
   * @return {instance}      实例本身
   */
  slot(slot){
    this.serialPort[1] = defineNumber(slot, this.serialPort[1]);
    return this;
  }

  //描述各主控的支持情况
  static support(){
    return '1111';
  }
}

module.exports = RgbLed;