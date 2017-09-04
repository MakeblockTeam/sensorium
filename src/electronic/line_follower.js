import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

/**
 * LineFollower sensor module
 * @extends Electronic
 */
class LineFollower extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port)
    };
  }
  /**
   * Get data of LineFollower sensor
   * @return {Promise}
   */
  async getData() {
    let buf = Utils.composer(protocolAssembler.readLineFollower, [this.args.port]);
    return await Control.read(buf);
  }

  static supportStamp(){
    return '1111';
  }
}

export default LineFollower;