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
 * Humiture sensor module
 * @extends Electronic
 */
class Humiture extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port),
      type: 0
    };
  }

  /**
   * Get Humidity of Humiture sensor
   * @example
   * mcore.Humiture(1)
   *      .readHumidity()
   *      .getData()
   *      .then((val) => {
   *        console.log(val)
   *       });
   * @return {Instance} @this
   */
  readHumidity() {
    this.args.type = 0;
    return this;
  }

  /**
   * Get Temperature of Humiture sensor
   * @example
   * mcore.Humiture(1)
   *      .readTemperature()
   *      .getData()
   *      .then((val) => {
   *        console.log(val)
   *      });
   * @return {Instance} @this
   */
  readTemperature() {
    this.args.type = 1;
    return this;
  }

  /**
   * getter of protocol
   */
  get protocol() {
    return composer(protocolAssembler.readHumiture, [this.args.port, this.args.type]);
  }

  /**
   * 获取数据
   * @example
   * mcore.Humiture(1)
   *      .readTemperature()
   *      .getData()
   *      .then((val) => {
   *        console.log(val)
   *      });
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol);
  }

  static get SUPPORT() {
    return fiterWithBinaryStr(SUPPORTLIST, '1111');
  }
}

export default Humiture;