import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

/**
 * Touch sensor module
 * @extends Electronic
 */
class Touch extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port)
    };
  }

  /**
   * getter of protocol
   */
  get protocol () {
    return Utils.composer(protocolAssembler.readTouch, [this.args.port]);
  }

  /**
   * Get data of Touch sensor
   * @example
   * mcore.Touch(1)
   *      .getData()
   *      .then((val) => {
   *        console.log(val)
   *       });
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol);
  }

  static get supportStamp(){
    return '1111';
  }
}

export default Touch;