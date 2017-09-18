import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';
import { SUPPORTLIST } from '../settings';

/**
 * @Class AnalogGPIO
 * @extends Electronic
 */
class AnalogGPIO extends Electronic {
  /**
   * Create a analogGPIO.
   */
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port)
    };
  }

  /**
   * getter of protocol
   */
  get protocol() {
    return Utils.composer(protocolAssembler.readAnalogGPIO, [this.args.port]);
  }

  /**
   * Get data of AnalogGPIO
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol);
  }

  static get SUPPORT() {
    return Utils.fiterWithBinaryStr(SUPPORTLIST, '00001');
  }
}

export default AnalogGPIO;