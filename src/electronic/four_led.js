const { defineNumber } = require('../core/type');
const RgbLedBase = require('./base/RgbLedBase');

class FourLed extends RgbLedBase {
  constructor(port){
    super(port, 2);
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp(){
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp(){
    return '1111';
  }
}

module.exports = FourLed;