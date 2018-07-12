import {
  validateNumber,
  validateString,
  warnNotSupport
} from '../core/validate';
import {composer,
fiterWithBinaryStr} from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../core/control';
import { TONE_TO_HZ, SUPPORTLIST } from '../settings';
const MCORE_ = SUPPORTLIST[0].toLowerCase();

/**
 * Buzzer sensor module
 * @extends Electronic
 *
 * @example
 * mcore.Buzzer()
 *      .hz(1000)
 *      .beat(1000)
 *      .run();
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
   * @param  {String} tone tone value such as "C5", "D5"
   */
  tone(tone="C5") {
    tone = validateString(tone.toUpperCase());
    let hz = TONE_TO_HZ[tone] || 880;
    return this.hz(hz);
  }

  /**
   * Set hz
   * @param  {Number} hz hz value such as 200
   */
  hz(hz) {
    this.args.hz = validateNumber(hz);
    return this;
  }

  /**
   * Set beat
   * @param  {Number} beat beat value such as 250, 1000
   */
  beat(beat) {
    this.args.beat = validateNumber(beat);
    return this;
  }

  /**
   * a getter interface, which returns the protocol
   */
  get protocol () {
    let buf = [];
    switch (this.hostname) {
      case MCORE_:
        buf = composer(protocolAssembler.setBuzzerForMcore, [this.args.hz, this.args.beat]);
        break;
      default:
        buf = composer(protocolAssembler.setBuzzer, [this.args.hz, this.args.beat]);
    }
    return buf;
  }

  /**
   * run Buzzer sensor
   */
  run() {
    Control.write(this.protocol);
    return this;
  }
  runAndAwait() {
    return Control.writeAndAwait(this.protocol,arguments);
  }

  /**
   * a getter interface, which returns the mainboards the Buzzer module supported
   */
  static get SUPPORT() {
    return fiterWithBinaryStr(SUPPORTLIST, '11111');
  }
}

export default Buzzer;