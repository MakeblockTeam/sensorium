import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

/**
 * GPIOContinue sensor module
 * @extends Electronic
 */
class GPIOContinue extends Electronic {
  constructor(port, key) {
    super();
    this.args = {
      port: validateNumber(port, 1),
      key: validateNumber(key, 1)
    };
  }

  /**
   * 获取协议
   */
  protocol() {
    return Utils.composer(protocolAssembler.readGPIOContinue, [this.args.port, this.args.key]);
  }

  /**
   * Get data of GPIOContinue sensor
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol());
  }

  static supportStamp(){
    return '00001';
  }
}

export default GPIOContinue;