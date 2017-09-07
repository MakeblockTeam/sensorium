import {
  validateNumber,
  validateString,
  warnNotSupport
} from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';
import { TONE_TO_HZ, SUPPORTLIST } from '../mainboard/settings';
const MCORE_ = SUPPORTLIST[0].toLowerCase();

/**
 * Buzzer sensor module
 * @extends Electronic
 *
 * @example
 * mcore.Buzzer()
 *      .hz(1000)
 *      .beat(1000)
 *      .run()
 */
class Buzzer extends Electronic {
  constructor() {
    super();
    this.args = {
      hz: 880,
      beat: 250
    }
    let host = warnNotSupport(arguments[arguments.length-1]) || '';
    //宿主
    this.hostname = host.toLowerCase();
  }

  /**
   * Set tone
   * @param  {String} tone tone string, such as "C5"
   */
  tone(tone="C5") {
    tone = validateString(tone.toUpperCase());
    let hz = TONE_TO_HZ[tone] || 880;
    return this.hz(hz);
  }

  /**
   * Set hz
   * @param  {Number} hz such as 200
   */
  hz(hz) {
    this.args.hz = validateNumber(hz);
    return this;
  }

  /**
   * Set beat
   * @param  {Number} beat such as 250, 1000
   */
  beat(beat) {
    this.args.beat = validateNumber(beat);
    return this;
  }

  /**
   * run Buzzer sensor
   */
  run() {
    let buf = [];
    switch (this.hostname) {
      case MCORE_:
        buf = Utils.composer(protocolAssembler.setBuzzerForMcore, [this.args.hz, this.args.beat]);
        break;
      default:
        buf = Utils.composer(protocolAssembler.setBuzzer, [this.args.hz, this.args.beat]);
    }
    Control.write(buf);
    return this;
  }

  static supportStamp() {
    return '11111';
  }
}

export default Buzzer;