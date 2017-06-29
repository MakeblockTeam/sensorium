import { defineNumber, defineString } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command';
class Buzzer extends Electronic {
  /**
   * Buzzer类，声音模块
   * @constructor
   */
  constructor() {
    super();
    this.args = {
      tone: null,
      beat: null
    }
  }

  /**
   * @param {string} tone - 声音音调
   */
  tone(tone) {
    this.args.tone = defineString(tone.toUpperCase());
    return this;
  }
  /**
   * @param {string} beat - 声音音节
   */
  beat(beat) {
    this.args.beat = defineNumber(beat);
    return this;
  }
  /**
   * 播放声音
   */
  play() {
    // 拿到协议组装器，组装协议
    let buf = Utils.composer(protocolAssembler.setTone, [this.args.port, this.args.action]);
    //执行
    Command.execWrite(buf);
    return this;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp(){
    return '1111';
  }
}

export default Buzzer;