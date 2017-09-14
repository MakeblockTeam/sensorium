import Utils from '../core/utils';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

/**
 * @private
 */
class Version {
  constructor() {

  }

  protocol () {
    return Utils.composer(protocolAssembler.readVersion);
  }

  /**
   * Get version of firmware
   * @return {Promise}
   */
  async getVersion() {
    return await Control.read(this.protocol());
  }
}

export default new Version();