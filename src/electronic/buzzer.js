import {
  validateNumber,
  validateString
} from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';
import { TONE_TO_HZ } from '../mainboard/settings';

class Buzzer extends Electronic {
  constructor() {
    super();
    this.args = {
      hz: 880,
      beat: 250
    }
  }

  /**
   * set tone
   * @param  {String} tone tone string, such as "C5"
   */
  tone(tone) {
    tone = validateString(tone.toUpperCase());
    let hz = TONE_TO_HZ[tone] || 880;
    return this.hz(hz);
  }

  hz(hz) {
    this.args.hz = validateNumber(hz);
    return this;
  }

  /**
   * set beat
   * @param  {Number} beat such as 250, 1000
   */
  beat(beat) {
    this.args.beat = validateNumber(beat);
    return this;
  }

  run() {
    let buf = Utils.composer(protocolAssembler.setTone, [this.args.tone, this.args.beat]);
    CommandManager.write(buf);
    return this;
  }

  static supportStamp() {
    return '1111';
  }
}

export default Buzzer;