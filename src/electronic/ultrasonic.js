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

  protocol () {
    return Utils.composer(protocolAssembler.readUltrasonic, [this.args.port]);
  }

  /**
   * Get data of Ultrasonic sensor
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol());
  }

  static supportStamp(){
    return '1111';
  }
}

export default Ultrasonic;