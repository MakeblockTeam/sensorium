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
 * @Class AnalogGPIO
 * @extends Electronic Arduino
 *
 * @example
 * arduino.Compass()
 *      .getData()
 *      .then(val => console.log(val));
 */
class AnalogGPIO extends Electronic {
  /**
   * Create a analogGPIO.
   */
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port)
    };
  }

  /**
   * getter of protocol
   */
  get protocol() {
    return composer(protocolAssembler.readAnalogGPIO, [this.args.port]);
  }

  /**
   * Get data of AnalogGPIO
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol);
  }

  /**
   * a getter interface, which returns the mainboards the AnalogGPIO module supported
   */
  static get SUPPORT() {
    return fiterWithBinaryStr(SUPPORTLIST, '00001');
  }
}

export default AnalogGPIO;