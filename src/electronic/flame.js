import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

/**
 * Flame sensor module
 * @extends Electronic
 */
class Flame extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port)
    };
  }

  /**
   * 获取协议
   */
  get protocol() {
    return Utils.composer(protocolAssembler.readFlame, [this.args.port]);
  }

  /**
   * Get data of Flame sensor
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol);
  }

  static get supportStamp(){
    return '1111';
  }
}

export default Flame;