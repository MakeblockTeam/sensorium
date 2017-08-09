import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';
/**
 * mcore 红外线接收端（读） id 0x10
 * mcore 红外线发射端（写）id 0x0d
 * 其他主控板，就叫做红外传感器 (读) - id 0x0f
 */

/**
 * InfraredOnBoard sensor module
 * @describe this interface is only for mcore and mcore has two kind of InfraredOnBoard sensor
 * @extends Electronic
 */
class InfraredOnBoard extends Electronic {
  constructor() {
    super();
    this.deviceId = 0x10;
  }

  async getData() {
    let port = 0x00;
    let buf = Utils.composer(protocolAssembler.readInfrared, [this.deviceId, port]);
    return await CommandManager.read(buf);
  }

  static supportStamp(){
    return '10000';
  }
}

export default InfraredOnBoard;