import {
  composer,
  fiterWithBinaryStr
} from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../core/control';
import { SUPPORTLIST } from '../settings';

/**
 * Runtime module which is a virtual module
 * @extends Electronic
 */
class Runtime extends Electronic {
  constructor() {
    super();
  }

  /**
   * getter of protocol
   */
  get protocol() {
    return composer(protocolAssembler.readRuntime);
  }

  /**
   * Get data of Runtime sensor
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol);
  }

  static get SUPPORT(){
    return fiterWithBinaryStr(SUPPORTLIST, '000010');
  }
}

export default Runtime;