import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';
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
    return Utils.composer(protocolAssembler.readLimitSwitch, [this.args.port, this.args.slot]);
  }

  /**
   * Get data of Joystick sensor
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol);
  }

  static get supportStamp(){
    return '1111';
  }
}

export default LimitSwitch;