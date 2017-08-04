import Utils from '../core/utils';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class Version {
  constructor() {

  }

  /**
   * Get version of firmware
   * @return {Promise} 
   */
  async getVersion() {
    let buf = Utils.composer(protocolAssembler.readVersion);
    return await CommandManager.read(buf);
  }
}

export default new Version();