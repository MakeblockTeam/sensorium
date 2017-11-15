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
 * @private
 */
class Voltage extends Electronic {
  constructor() {
    super();
    this.args = {
      subCmd: 0x70
    }
  }

  /**
   * getter of protocol
   */
  get protocol () {
    return composer(protocolAssembler.readFirmwareMode, [this.args.subCmd]);
  }

  /**
   * Get data of Voltage
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol);
  }

  /**
   * 目前只有 auriga 支持
   */
  static get SUPPORT() {
    return fiterWithBinaryStr(SUPPORTLIST, '01000');
  }
}

export default Voltage;