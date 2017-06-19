const {
  defineNumber,
  defineString
} = require('../core/type');
const Electronic = require('./electronic');
const { setSevenSegment } = require('../protocol/cmd');

// 作为闭包内容不开放
class ButtonOnBoard extends Electronic {
  /**
   * Buzzer类，声音模块
   * @constructor
   */
  constructor() {
    super();
    this.args = {
      status: null
    };
  }

  /**
   * @param {string} tone - 声音音调
   */
  checkStatus(status) {
    this.args.status = defineString(status);
    this._run();
    return this;
  }

  _run() {
    // 拿到参数
    // 拿到协议组装器，组装协议
    let buf = composer(setSevenSegment, [this.args.port, this.args.action]);
    // 用板子发送协议
    board.send(buf);
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp(){
    return 0;
  }

  //主控支持戳：描述各主控的支持情况
  //只有 mcore 支持
  static supportStamp(){
    return '1000';
  }
}

module.exports = ButtonOnBoard;