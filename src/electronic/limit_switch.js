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
   * Get data of Joystick sensor
   * @return {Promise}
   */
  async getData() {
    let buf = Utils.composer(protocolAssembler.readLimitSwitch, [this.args.port, this.args.slot]);
    return await Control.read(buf);
  }

  static supportStamp(){
    return '1111';
  }
}

export default LimitSwitch;