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
      port: null,
      number: null
    };
    this.port(port);
  }

  /**
   * @param {string} tone - 声音音调
   */
  port(port) {
    this.args.port = defineNumber(port);
    return this;
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

  //描述各主控的支持情况
  static support(){
    return '1111';
  }
}

module.exports = SevenSegment;