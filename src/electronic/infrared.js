import { validateNumber, warnNotSupport } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';
import { SUPPORTLIST } from '../mainboard/settings';
let MCORE_NAME = SUPPORTLIST[0].toLowerCase();
/**
 * Infrared sensor module
 * @describe external infrared sensor
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
    //如果是 mcore，外接的红外传感器 id = 0e
    //如果非 mcore，外接的红外传感器 id = 0f
    switch (this.hostname) {
      case MCORE_NAME:
        this.deviceId = 0x0e;
        break;
      default:
        this.deviceId = 0x0f;
    }
  }

  async getData() {
    let buf = Utils.composer(protocolAssembler.readInfrared, [this.deviceId, this.args.port]);
    return await CommandManager.read(buf);
  }

  static supportStamp(){
    return '1111';
  }
}

export default Infrared;