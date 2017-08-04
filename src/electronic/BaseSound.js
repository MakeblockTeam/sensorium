import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

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
   * GetData of Sound sensor
   * @return {Promise} 
   */
  async getData() {
    let buf = Utils.composer(protocolAssembler.readSound, [this.args.port]);
    return await CommandManager.read(buf);
  }
}

export default BaseSound;