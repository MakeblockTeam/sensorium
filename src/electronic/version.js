import {
  composer
} from '../core/utils';
import protocolAssembler from '../protocol/cmd';
import Control from '../core/control';
/**
 * @private
 */
class Version {
  constructor() {

  }

  /**
   * getter of protocol
   */
  get protocol () {
    return composer(protocolAssembler.readVersion);
  }
}

export default new Version();