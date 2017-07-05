import { defineNumber, defineString } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import command from '../communicate/command';

class Buzzer extends Electronic {
  constructor() {
    super();
    this.args = {
      tone: null,
      beat: null
    }
  }

  /**
   * set tone
   * @param  {String} tone tone string, such as "C5"
   */
  tone(tone) {
    this.args.tone = defineString(tone.toUpperCase());
    return this;
  }

  /**
   * set beat
   * @param  {Number} beat such as 250, 1000
   */
  beat(beat) {
    this.args.beat = defineNumber(beat);
    return this;
  }

  run() {
    let buf = Utils.composer(protocolAssembler.setTone, [this.args.tone, this.args.beat]);
    command.execWrite(buf);
    return this;
  }

  static supportStamp(){
    return '1111';
  }
}

export default Buzzer;