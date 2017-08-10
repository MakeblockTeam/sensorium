import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';
/**
 * @Class BaseLight
 * @description It is a base Class of Light
 * @extends Electronic
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

  /**
   * Get data of the Light sensor
   * @return {Promise} 
   */
  async getData() {
    let buf = Utils.composer(protocolAssembler.readLight, [this.args.port]);
    return await CommandManager.read(buf);
  }
}

export default BaseLight;