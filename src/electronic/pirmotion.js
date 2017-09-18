import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';
import { SUPPORTLIST } from '../settings';

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
   * getter of protocol
   */
  protocol() {
    return Utils.composer(protocolAssembler.readPirmotion, [this.args.port]);
  }

  /**
   * Get data of Pirmotion sensor
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol());
  }

  static get SUPPORT(){
    return Utils.fiterWithBinaryStr(SUPPORTLIST, '1111');
  }
}

export default Pirmotion;