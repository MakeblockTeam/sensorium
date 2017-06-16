const { defineNumber } = require('../core/type');
const RgbLedBase = require('./base/RgbLedBase');

class FourLed extends RgbLedBase {
  constructor(port){
    super(port, 2);
  }

  /**
   * 扩展一个设置 port 的接口
   * @param  {Number} port port
   * @return {instance}      实例本身
   */
  port(port){
    this.port = defineNumber(port, this.port);
    return this;
  }

  //描述各主控的支持情况
  static support(){
    return '1111';
  }
}

module.exports = FourLed;