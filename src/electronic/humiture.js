import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

let commandRead = async function(args){
  let buf = Utils.composer(protocolAssembler.readHumiture, [args.port, args.type]);
  return await Control.read(buf);
}

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
   *      .getHumidity()
   *        .then((val) => {
   *          console.log(val)
   *        });
   */
  async getHumidity(){
    this.args.type = 0;
    return await commandRead(this.args);
  }

  /**
   * Get Temperature of Humiture sensor
   * @return {Promise}
   * @example
   * mcore.Humiture(1)
   *      .getTemperature()
   *        .then((val) => {
   *          console.log(val)
   *        });
   */
  async getTemperature(){
    this.args.type = 1;
    return await commandRead(this.args);
  }

  static supportStamp(){
    return '1111';
  }
}

export default Humiture;