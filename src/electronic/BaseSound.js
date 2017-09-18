import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

/**
 * @description It is a base Class of Sound
 * @extends Electronic
 * @private
 */
class BaseSound extends Electronic {
  /**
   * Create a sound sensor
   * @param {Number} port  led port
   */
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port)
    };
  }

  /**
   * getter of protocol
   */
  get protocol() {
    return Utils.composer(protocolAssembler.readSound, [this.args.port]);
  }

  /**
   * Get data of Sound sensor
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol);
  }
}

export default BaseSound;