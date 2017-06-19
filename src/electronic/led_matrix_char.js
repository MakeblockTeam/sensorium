const {
  defineNumber,
  defineString
} = require('../core/type');
const Electronic = require('./electronic');
const LedMatrixBase = require('./base/LedMatrixBase');
const { setLedMatrixChar } = require('../protocol/cmd');

class LedChar extends LedMatrixBase {
  /**
   * @constructor
   */
  constructor(port) {
    super(port);
    this.args = {
      x: null,
      y: null,
      char: null
    };
  }

  x(xAxis){
    this.args.x = xAxis;
    return this;
  }

  y(yAxis){
    this.args.y = yAxis;
    return this;
  }

  showChar(str){
    this.args.char = str;
    this._run();
    return this;
  }
 
  _run() {
    // 拿到参数
    // 拿到协议组装器，组装协议
    let buf = composer(setLedMatrixChar, [this.serialPort[0], this.args.x, this.args.y, this.args.char]);
    // 用板子发送协议
    board.send(buf);
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp(){
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  //orion 不支持
  static supportStamp(){
    return '1110';
  }
}

module.exports = LedChar;