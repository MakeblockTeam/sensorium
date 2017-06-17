const {
  defineNumber,
  defineString
} = require('../core/type');
const Electronic = require('./electronic');
const LedMatrixBase = require('./base/LedMatrixBase');
const { setLedMatrixEmotion } = require('../protocol/cmd');

class LedEmotion extends LedMatrixBase {
  /**
   * @constructor
   */
  constructor(port) {
    super(port);
    this.args = {
      x: null,
      y: null,
      emotion: null
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

  showEmotion(emotion){
    this.args.emotion = emotion;
    this._run();
    return this;
  }
  /**
   * @param {string} tone - 声音音调
   */
  port(port) {
    this.args.port = defineNumber(port);
    return this;

    setChar()
    setEmotion()
    setTime()
    setNumber()
  }
 
  _run() {
    // 拿到参数
    // 拿到协议组装器，组装协议
    let buf = composer(setLedMatrixEmotion, [this.serialPort[0], this.args.x, this.args.y, this.args.emotion]);
    // 用板子发送协议
    board.send(buf);
  }

  //描述各主控的支持情况:
  //orion 不支持
  static support(){
    return '1110';
  }
}

module.exports = LedEmotion;