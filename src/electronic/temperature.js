import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

/**
 * Temperature sensor module
 * @extends Electronic
 */
class Temperature extends Electronic {
  constructor(port, slot) {
    super();
    this.args = {
      port: validateNumber(port),
      slot: validateNumber(slot)
    };
  }

  protocol () {
    return Utils.composer(protocolAssembler.readTemperature, [this.args.port, this.args.slot]);
  }

  /**
   * Get data of Temperature sensor
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol());
  }

  static supportStamp(){
    return '1111';
  }

}

export default Temperature;