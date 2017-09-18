import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';
import { SUPPORTLIST } from '../settings';

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
   * getter of protocol
   */
  get protocol () {
    return Utils.composer(protocolAssembler.readUltrasonic, [this.args.port]);
  }

  /**
   * Get data of Ultrasonic sensor
   * @example
   * mcore.Ultrasonic(1)
   *      .getData()
   *      .then((val) => {
   *        console.log(val)
   *       });
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol);
  }

  static get SUPPORT(){
    return Utils.fiterWithBinaryStr(SUPPORTLIST, '1111');
  }
}

export default Ultrasonic;