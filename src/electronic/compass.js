import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

/**
 * Compass sensor module
 * @extends Electronic
 */
class Compass extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port)
    };
  }
  /**
   * Get data of Compass sensor
   * @return {Promise}
   */
  async getData() {
    let buf = Utils.composer(protocolAssembler.readCompass, [this.args.port]);
    return await Control.read(buf);
  }

  static supportStamp(){
    return '1110';
  }
}

export default Compass;