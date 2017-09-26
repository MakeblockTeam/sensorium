import { validateNumber } from '../core/validate';
import {
  composer,
  fiterWithBinaryStr
} from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';
import { SUPPORTLIST } from '../settings';

/**
 * LimitSwitch sensor module
 * @extends Electronic
 */
class LimitSwitch extends Electronic {
  constructor(port, slot) {
    super();
    this.args = {
      port: validateNumber(port),
      slot: validateNumber(slot)
    };
  }

  /**
   * getter of protocol
   */
  get protocol() {
    return composer(protocolAssembler.readLimitSwitch, [this.args.port, this.args.slot]);
  }

  /**
   * Get data of Joystick sensor
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol);
  }

  static get SUPPORT(){
    return fiterWithBinaryStr(SUPPORTLIST, '1111');
  }
}

export default LimitSwitch;