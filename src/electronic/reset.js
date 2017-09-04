import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

/**
 * Reset module
 * @extends Electronic
 */
class Reset extends Electronic {
  constructor() {
    super();
  }

  async reset() {
    let buf = Utils.composer(protocolAssembler.reset);
    return await Control.read(buf);
  }

  static supportStamp(){
    return '1111';
  }
}

export default Reset;
