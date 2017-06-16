const { defineNumber } = require('../core/type');
const RgbLedBase = require('./base/RgbLedBase');

class LedPanelOnBoard extends RgbLedBase {
  constructor(){
    super(0, 2);
  }

  //描述各主控的支持情况
  static support(){
    return '1100';
  }
}

module.exports = LedPanelOnBoard;