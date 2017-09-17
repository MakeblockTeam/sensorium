import { validateNumber, warnNotSupport } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';
import { SUPPORTLIST } from '../settings';
let MCORE_NAME = SUPPORTLIST[0].toLowerCase();
/**
 * Infrared sensor module
 * @describe external infrared sensor and can't connect 2 this infrared sensor to a mainboard at the same time
 * @extends Electronic
 */
class Infrared extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port)
    };
    let host = warnNotSupport(arguments[arguments.length-1]) || '';
    //宿主
    this.hostname = host.toLowerCase();
  }

  /**
   * 获取协议
   */
  get protocol() {
    let deviceId, aKey;
    //如果是 mcore，外接的红外传感器 id = 0x0e
    //如果非 mcore，外接的红外传感器 id = 0x10
    switch (this.hostname) {
      case MCORE_NAME:
        deviceId = 0x0e;
        aKey = 0x45;
        break;
      default:
        deviceId = 0x10;
    }
    let argsArr = [deviceId, this.args.port];
    aKey ? argsArr.push(aKey) : null;
    return Utils.composer(protocolAssembler.readInfrared, argsArr);
  }

  /**
   * Get data of Infrared sensor
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol);
  }

  static get supportStamp(){
    return '1111';
  }
}

export default Infrared;