const { defineNumber } = require('../core/type');
const RgbLedBase = require('./base/RgbLedBase');

class RgbLedOnBoard extends RgbLedBase {
  constructor(){
    super(0, 2);
  }

  //描述各主控的支持情况
  static support(){
    return '0100';
  }
}

module.exports = RgbLedOnBoard;