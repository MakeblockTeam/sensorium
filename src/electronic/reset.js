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

  /**
   * 获取协议
   */
  protocol() {
    return Utils.composer(protocolAssembler.reset);
  }

  /**
   * reset
   * @return {Promise}
   */
  async reset() {
    return await Control.read(this.protocol());
  }

  static get supportStamp(){
    return '1111';
  }
}

export default Reset;
