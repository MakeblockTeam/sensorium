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
class PwmGPIO extends Electronic {
  constructor(port, key) {
    super();
    this.args = {
      port: validateNumber(port, 1),
      key: validateNumber(key, 1)
    };
  }

  /**
   * getter of protocol
   */
  get protocol() {
    return composer(protocolAssembler.pwmGPIO, [this.args.port, this.args.key]);
  }

  runAwait() {
    return Control.writeAwait(this.protocol,arguments);
  }

  static get SUPPORT(){
    return fiterWithBinaryStr(SUPPORTLIST, '00001');
  }
}

export default PwmGPIO
;