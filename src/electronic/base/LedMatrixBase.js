const { defineNumber } = require('../../core/type');
const { composer } = require('../../core/utils');
const Electronic = require('../electronic');
const { setLed } = require('../../protocol/cmd');

class LedMatrixBase extends Electronic {
  /**
   * RgbLed类，led模块
   * @param {number} port - led port口
   * @param {number} position - led灯的位置
   */
  constructor(port) {
    super();
    this.serialPort = [defineNumber(port)];
  }

  _run() {
    // 拿到参数
    // let args = [...(this.serialPort), this.ledPosition, ...(this.rgb)];
    // // 拿到协议组装器，组装协议
    // let buf = composer(setLed, args);
    // // 用板子发送协议
    // board.send(buf);
  }
}

module.exports = LedMatrixBase;