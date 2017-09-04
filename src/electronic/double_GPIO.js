import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

/**
 * DoubleGPIO sensor module
 * @extends Electronic
 */
class DoubleGPIO extends Electronic {
  constructor(port1, port2) {
    super();
    this.args = {
      port1: validateNumber(port1),
      port2: validateNumber(port2)
    };
  }
  /**
   * Get data of DoubleGPIO sensor
   * @return {Promise}
   */
  async getData() {
    let buf = Utils.composer(protocolAssembler.readDoubleGPIO, [this.args.port1, this.args.port2]);
    return await Control.read(buf);
  }

  static supportStamp(){
    return '00001';
  }
}

export default DoubleGPIO;