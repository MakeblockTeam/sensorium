import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

/**
 * Runtime module which is a virtual module
 * @extends Electronic
 */
class Runtime extends Electronic {
  constructor() {
    super();
  }

  /**
   * 获取协议
   */
  get protocol() {
    return Utils.composer(protocolAssembler.readRuntime);
  }

  /**
   * Get data of Runtime sensor
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol);
  }

  static get supportStamp(){
    return '000010';
  }
}

export default Runtime;