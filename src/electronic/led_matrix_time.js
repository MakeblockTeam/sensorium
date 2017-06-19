const {
  defineNumber,
  defineString
} = require('../core/type');
const Electronic = require('./electronic');
const LedMatrixBase = require('./base/LedMatrixBase');
const { setLedMatrixTime } = require('../protocol/cmd');

class SetChar extends LedMatrixBase {
  /**
   * @constructor
   */
  constructor(port) {
    super(port);
    this.args = {
      separator: null,
      hour: null,
      minute: null
    };
  }

  separator(separator){
    this.args.separator = separator;
    return this;
  }

  hour(h){
    this.args.hour = h;
    return this;
  }
  
  minute(m){
    this.args.minute = m;
    return this;
  }

  showTime(){
    this._run();
    return this;
  }
  
  _run() {
    // 拿到参数
    // 拿到协议组装器，组装协议
    let buf = composer(setLedMatrixTime, [this.serialPort[0], this.args.separator, this.args.hour, this.args.minute]);
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

module.exports = SetChar;