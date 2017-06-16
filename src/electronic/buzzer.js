const {
  defineNumber,
  defineString
} = require('../core/type');
const Electronic = require('./electronic');
const { setTone } = require('../protocol/cmd');

// 作为闭包内容不开放
const ToneAndBeat = ['', ''];
class Buzzer extends Electronic {
  /**
   * Buzzer类，声音模块
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * @param {string} tone - 声音音调
   */
  tone(tone) {
    ToneAndBeat[0] = defineString(tone.toUpperCase());
    return this;
  }
  /**
   * @param {string} beat - 声音音节
   */
  beat(beat) {
    ToneAndBeat[1] = defineNumber(beat);
    return this;
  }
  /**
   * 播放声音
   */
  play() {
    this._run();
    return this;
  }

  _run() {
    // 拿到参数
    // 拿到协议组装器，组装协议
    let buf = composer(setTone, ToneAndBeat);
    // 用板子发送协议
    board.send(buf);
  }

  //描述各主控的支持情况
  static support(){
    return '1111';
  }
}

module.exports = Buzzer;