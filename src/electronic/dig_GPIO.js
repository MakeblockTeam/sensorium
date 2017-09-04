import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

/**
 * DigGPIO sensor module
 * @extends Electronic
 */
class DigGPIO extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port)
    };
  }
  /**
   * Get data of DigGPIO sensor
   * @return {Promise}
   */
  async getData() {
    let buf = Utils.composer(protocolAssembler.readDigGPIO, [this.args.port]);
    return await Control.read(buf);
  }

  static supportStamp(){
    return '00001';
  }
}

export default DigGPIO;