import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

/**
 * @Class BaseSound
 * @description It is a base Class of Sound
 * @extends Electronic
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
   * Get data of Sound sensor
   * @return {Promise}
   */
  async getData() {
    let buf = Utils.composer(protocolAssembler.readSound, [this.args.port]);
    return await Control.read(buf);
  }
}

export default BaseSound;