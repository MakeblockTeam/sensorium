const {
  defineNumber,
  defineString
} = require('../core/type');
const Electronic = require('./electronic');
const { setSevenSegment } = require('../protocol/cmd');

// 作为闭包内容不开放
class SevenSegment extends Electronic {
  /**
   * Buzzer类，声音模块
   * @constructor
   */
  constructor(port) {
    super();
    this.args = {
      port: defineNumber(port),
      number: null
    };
    this.port(port);
  }
  /**
   * @param {string} beat - 声音音节
   */
  showNumber(number) {
    this.args.number = defineNumber(number);
    this._run();
    return this;
  }
 
  _run() {
    // 拿到参数
    // 拿到协议组装器，组装协议
    let buf = composer(setSevenSegment, [this.args.port, this.args.number]);
    // 用板子发送协议
    board.send(buf);
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

module.exports = SevenSegment;