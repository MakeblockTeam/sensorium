import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

/**
 * TemperatureOnBoard sensor module
 * @extends Electronic
 */
class TemperatureOnBoard extends Electronic {
  constructor() {
    super(0x0d);
  }

  get protocol () {
    return Utils.composer(protocolAssembler.readTemperatureOnBoard);
  }

  /**
   * Get data of TemperatureOnBoard sensor
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol);
  }

  static get supportStamp(){
    return '0100';
  }
}

export default TemperatureOnBoard;