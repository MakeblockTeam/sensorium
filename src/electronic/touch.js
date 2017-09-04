import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

/**
 * Touch sensor module
 * @extends Electronic
 */
class Touch extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port)
    };
  }

  /**
   * Get data of Touch sensor
   * @return {Promise}
   */
  async getData() {
    let buf = Utils.composer(protocolAssembler.readTouch, [this.args.port]);
    return await Control.read(buf);
  }

  static supportStamp(){
    return '1111';
  }
}

export default Touch;