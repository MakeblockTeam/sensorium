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

  /**
   * Get data of TemperatureOnBoard sensor
   * @return {Promise}
   */
  async getData() {
    let buf = Utils.composer(protocolAssembler.readTemperatureOnBoard);
    return await Control.read(buf);
  }

  static supportStamp(){
    return '0100';
  }
}

export default TemperatureOnBoard;