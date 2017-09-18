import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';
import { SUPPORTLIST } from '../settings';

/**
 * GPIOContinue sensor module
 * @extends Electronic
 */
class GPIOContinue extends Electronic {
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
    return Utils.composer(protocolAssembler.readGPIOContinue, [this.args.port, this.args.key]);
  }

  /**
   * Get data of GPIOContinue sensor
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol);
  }

  static get SUPPORT(){
    return Utils.fiterWithBinaryStr(SUPPORTLIST, '00001');
  }
}

export default GPIOContinue;