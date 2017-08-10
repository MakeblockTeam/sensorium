import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

/**
 * Runtime module which is a virtual module
 * @extends Electronic
 */
class Runtime extends Electronic {
  constructor() {
    super();
  }
  /**
   * Get data of Runtime sensor
   * @return {Promise} 
   */
  async getData() {
    let buf = Utils.composer(protocolAssembler.readRuntime);
    return await CommandManager.read(buf);
  }

  static supportStamp(){
    return '000010';
  }
}

export default Runtime;