import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

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
   * @return {Promise}
   * @example
   * mcore.Humiture(1)
   *      .readHumidity()
   *        .getData()
   *         .then((val) => {
   *           console.log(val)
   *         });
   */
  readHumidity(){
    this.args.type = 0;
    return this;
  }

  /**
   * Get Temperature of Humiture sensor
   * @return {Promise}
   * @example
   * mcore.Humiture(1)
   *      .readTemperature()
   *       .getData()
   *        .then((val) => {
   *          console.log(val)
   *        });
   */
  readTemperature(){
    this.args.type = 1;
    return this;
  }

  /**
   * 获取协议
   */
  get protocol() {
    return Utils.composer(protocolAssembler.readHumiture, [this.args.port, this.args.type]);
  }

  async getData() {
    return await Control.read(this.protocol);
  }

  static get supportStamp(){
    return '1111';
  }
}

export default Humiture;