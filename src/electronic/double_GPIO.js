import {
  validateNumber
} from '../core/validate';
import {
  composer,
  fiterWithBinaryStr
} from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../core/control';
import {
  SUPPORTLIST
} from '../settings';

/**
 * DoubleGPIO sensor module
 * @extends Electronic
 */
class DoubleGPIO extends Electronic {
  constructor(port1, port2) {
    super();
    this.args = {
      port1: validateNumber(port1),
      port2: validateNumber(port2)
    };
  }

  /**
   * getter of protocol
   */
  get protocol() {
    return composer(protocolAssembler.readDoubleGPIO, [this.args.port1, this.args.port2]);
  }

  /**
   * Get data of DoubleGPIO sensor
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol);
  }

  static get SUPPORT() {
    return fiterWithBinaryStr(SUPPORTLIST, '00001');
  }
}

export default DoubleGPIO;