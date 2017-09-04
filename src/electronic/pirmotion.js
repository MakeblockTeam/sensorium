import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';
/**
 * Pirmotion sensor module
 * @describe passive infrared ( PIR) sensor
 * @extends Electronic
 */
class Pirmotion extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port)
    };
  }
  /**
   * Get data of Pirmotion sensor
   * @return {Promise}
   */
  async getData() {
    let buf = Utils.composer(protocolAssembler.readPirmotion, [this.args.port]);
    return await Control.read(buf);
  }

  static supportStamp(){
    return '1111';
  }
}

export default Pirmotion;