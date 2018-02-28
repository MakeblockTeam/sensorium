import { validateNumber } from '../core/validate';
import {composer,
fiterWithBinaryStr} from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../core/control';
import { SUPPORTLIST } from '../settings';

/**
 * Compass sensor module
 * @extends Electronic
 *
 * @example
 * mcore.Compass()
 *      .getData()
 *      .then(val => console.log(val));
 */
class Compass extends Electronic {
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
    return composer(protocolAssembler.readCompass, [this.args.port]);
  }

  /**
   * Get data of Compass sensor
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol);
  }

  /**
   * a getter interface, which returns the mainboards the Compass module supported
   */
  static get SUPPORT(){
    return fiterWithBinaryStr(SUPPORTLIST, '1110');
  }
}

export default Compass;