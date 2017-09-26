import { validateNumber } from '../core/validate';
import {composer} from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';
/**
 * @description It is a base Class of Light
 * @extends Electronic
 * @private
 */
class BaseLight extends Electronic {
  /**
   * Create a light sensor
   * @param {Number} port
   */
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port)
    };
  }

  get protocol () {
    return composer(protocolAssembler.readLight, [this.args.port]);
  }

  /**
   * Get data of the Light sensor
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol);
  }
}

export default BaseLight;