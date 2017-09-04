import Utils from '../core/utils';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

class Version {
  constructor() {

  }

  /**
   * Get version of firmware
   * @return {Promise}
   */
  async getVersion() {
    let buf = Utils.composer(protocolAssembler.readVersion);
    return await Control.read(buf);
  }
}

export default new Version();