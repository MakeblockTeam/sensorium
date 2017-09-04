import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

/**
 * Potentionmeter sensor module
 * @extends Electronic
 */
class Potentionmeter extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port)
    };
  }
  /**
   * Get data of Potentionmeter sensor
   * @return {Promise}
   */
  async getData() {
    let buf = Utils.composer(protocolAssembler.readPotentionmeter, [this.args.port]);
    return await Control.read(buf);
  }

  static supportStamp(){
    return '1111';
  }
}

export default Potentionmeter;