import { validateNumber } from '../core/validate';
import {composer,
fiterWithBinaryStr} from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../core/control';
import { SUPPORTLIST } from '../settings';

/**
 * GPIOContinue sensor module
 * @extends Electronic
 */
class ArduinoBuzzer extends Electronic {
  constructor(port, note, beat) {
    super();
    this.args = {
      port: validateNumber(port, 1),
      note: validateNumber(note, 262),
      beat: validateNumber(beat, 262),
    };
  }

  /**
   * getter of protocol
   */
  get protocol() {
    return composer(protocolAssembler.arduinoBuzzer, [this.args.port, this.args.note, this.args.beat]);
  }

  runAwait() {
    return Control.writeAwait(this.protocol,arguments);
  }

  static get SUPPORT(){
    return fiterWithBinaryStr(SUPPORTLIST, '00001');
  }
}

export default ArduinoBuzzer;