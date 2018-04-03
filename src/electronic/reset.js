import {
  composer,
  fiterWithBinaryStr
} from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../core/control';
import { SUPPORTLIST } from '../settings';

/**
 * Reset module
 * @extends Electronic
 */
class Reset extends Electronic {
  constructor() {
    super();
  }

  /**
   * getter of protocol
   */
  get protocol() {
    return composer(protocolAssembler.reset);
  }

  /**
   * reset后返回消息，表明重置成功
   * @return {Promise}
   */
  async reset() {
    return await Control.read(this.protocol);
  }

  static get SUPPORT(){
    return fiterWithBinaryStr(SUPPORTLIST, '1111');
  }
}

export default Reset;
