import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

/**
 * Ultrasonic sensor module
 * @extends Electronic
 */
class Ultrasonic extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port)
    };
  }

  /**
   * Get data of Ultrasonic sensor
   * @return {Promise}
   */
  async getData() {
    let buf = Utils.composer(protocolAssembler.readUltrasonic, [this.args.port]);
    return await Control.read(buf);
  }

  static supportStamp(){
    return '1111';
  }
}

export default Ultrasonic;