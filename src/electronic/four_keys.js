import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

/**
 * FourKeys sensor module
 * @extends Electronic
 */
class FourKeys extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port),
      key: 1
    };
  }

  /**
   * 键位
   * @param  {Number} index 键位：1、2、3、4
   */
  key(index){
    this.args.key = validateNumber(index, this.args.key);
    return this;
  }
  /**
   * Get data of FourKeys sensor
   * @return {Promise}
   */
  async getData() {
    let buf = Utils.composer(protocolAssembler.readFourKeys, [this.args.port, this.args.key]);
    return await Control.read(buf);
  }

  static supportStamp(){
    return '1111';
  }
}

export default FourKeys;