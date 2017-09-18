import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';
import { SUPPORTLIST } from '../settings';

/**
 * TemperatureOnBoard sensor module
 * @extends Electronic
 */
class TemperatureOnBoard extends Electronic {
  constructor() {
    super(0x0d);
  }

  /**
   * getter of protocol
   */
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

  static get SUPPORT(){
    return Utils.fiterWithBinaryStr(SUPPORTLIST, '0100');
  }
}

export default TemperatureOnBoard;